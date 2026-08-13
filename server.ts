import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

// Smart local responder function for specific questions when API key is absent or API is recovering
function getSmartLocalAnswer(userMsg: string): string {
  const q = userMsg.toLowerCase().trim();

  if (q.includes('check-in') || q.includes('checkin') || q.includes('entrada') || q.includes('llegada') || q.includes('hora')) {
    if (q.includes('salida') || q.includes('checkout') || q.includes('check-out')) {
      return "En Casa Kintsugi el horario de entrada (check-in) es a partir de las 15:00h y la hora de salida (check-out) es hasta las 11:00h. Si necesitas un horario especial, puedes consultarnos por WhatsApp al +34 614 20 09 80.";
    }
    return "El horario de entrada (check-in) en Casa Kintsugi es a partir de las 15:00h. Te proporcionaremos las instrucciones para acceder cómodamente a tu estancia.";
  }

  if (q.includes('check-out') || q.includes('checkout') || q.includes('salida') || q.includes('irse')) {
    return "El horario de salida (check-out) es hasta las 11:00h de la mañana.";
  }

  if (q.includes('barbacoa') || q.includes('paella') || q.includes('jardin') || q.includes('jardín') || q.includes('exterior')) {
    return "¡Sí! Casa Kintsugi dispone de un magnífico jardín privado con zona de barbacoa al aire libre para disfrutar de comidas y momentos inolvidables rodeados de naturaleza y paz.";
  }

  if (q.includes('bungalow') || q.includes('cabana') || q.includes('cabaña') || q.includes('alojamiento') || q.includes('estancia') || q.includes('habitacion') || q.includes('habitación') || q.includes('dormitorio')) {
    return "Ofrecemos dos modalidades de alojamiento:\n1. Bungalow: Cabaña independiente con barbacoa privada, cocina totalmente equipada, aire acondicionado, calefacción y jardín propio.\n2. Espacio de 1 dormitorio: Alojamiento íntimo y acogedor con estética orientada a la relajación, baño privado y cama confortable.\n\n¿Te gustaría consultar disponibilidad para alguna fecha?";
  }

  if (q.includes('donde') || q.includes('dónde') || q.includes('ubicacion') || q.includes('ubicación') || q.includes('direccion') || q.includes('dirección') || q.includes('como llegar') || q.includes('llegar') || q.includes('donde esta')) {
    return "Nos encontramos en Carrer Galceran 31, 08783 Can Parellada (Barcelona, España), en un enclave natural muy tranquilo a pocos minutos de la villa termal de Caldes de Montbui.";
  }

  if (q.includes('reserv') || q.includes('book') || q.includes('disponib') || q.includes('precio') || q.includes('cost') || q.includes('tarif')) {
    return "Puedes consultar la disponibilidad y precios actualizados directamente haciendo clic en el botón 'Reservar en Booking' de nuestra web, o escribiéndonos directamente por WhatsApp al +34 614 20 09 80.";
  }

  if (q.includes('contacto') || q.includes('telefono') || q.includes('teléfono') || q.includes('whatsapp') || q.includes('mail') || q.includes('email') || q.includes('llam')) {
    return "Puedes contactarnos directamente por WhatsApp o teléfono al +34 614 20 09 80, o por correo electrónico en reservas@casakintsugi.es. ¡Estaremos encantados de atenderte!";
  }

  if (q.includes('mascota') || q.includes('perro') || q.includes('gato') || q.includes('animal')) {
    return "En Casa Kintsugi amamos la naturaleza. Para venir con tu mascota, por favor consúltanos previamente por WhatsApp (+34 614 20 09 80) para confirmar las condiciones según el tipo de alojamiento seleccionado.";
  }

  if (q.includes('wifi') || q.includes('internet') || q.includes('clima') || q.includes('aire') || q.includes('calefacc')) {
    return "Todas nuestras estancias cuentan con conexión Wifi gratuita de alta velocidad, climatización (aire acondicionado y calefacción), ropa de cama, toallas y todo lo necesario para una estancia perfecta.";
  }

  if (q.includes('hola') || q.includes('buenas') || q.includes('buenos') || q.includes('saludos')) {
    return "¡Hola! Bienvenido a Casa Kintsugi. ¿En qué te puedo ayudar hoy? Puedes preguntarme por nuestros alojamientos (Bungalow o Espacio 1 dormitorio), horarios, barbacoa, ubicación o cómo hacer tu reserva.";
  }

  return "Casa Kintsugi es un espacio único de descanso en Can Parellada (Barcelona) con opción de Bungalow con barbacoa privada o Espacio de 1 dormitorio. El check-in es a las 15:00h y el check-out a las 11:00h. Si deseas consultar disponibilidad o resolver cualquier duda sobre tu reserva, puedes utilizar nuestro botón de Booking o escribirnos por WhatsApp al +34 614 20 09 80.";
}

async function startServer() {
  const app = express();
  app.use(express.json());
  const PORT = 3000;

  // AI Assistant endpoint for Casa Kintsugi
  app.post("/api/chat", async (req, res) => {
    try {
      const { message, history } = req.body;
      const apiKey = process.env.GEMINI_API_KEY;

      if (!message || typeof message !== 'string') {
        return res.status(400).json({ error: "Mensaje no válido" });
      }

      const systemPrompt = `Eres el asistente de Inteligencia Artificial oficial de 'Casa Kintsugi', un exclusivo alojamiento rústico y boutique ubicado en Can Parellada (Barcelona, España).
Tu propósito es responder consultas de los huéspedes sobre la casa, habitaciones, servicios, entorno, check-in, barbacoa, reserva y normas del alojamiento.

Datos clave sobre Casa Kintsugi:
- Ubicación exacta: Carrer Galceran, 31, 08783 Can Parellada, Barcelona.
- Contacto directo: WhatsApp / Teléfono: +34 614 20 09 80
- Correo electrónico: reservas@casakintsugi.es
- Instagram: @casakintsugi
- Horario de entrada (Check-in): A partir de las 15:00h
- Horario de salida (Check-out): Hasta las 11:00h
- Tipos de Alojamiento:
  1. Bungalow: Alojamiento independiente con barbacoa privada, jardín, cocina equipada, climatización y espacio relax.
  2. Espacio de 1 dormitorio: Alojamiento acogedor de decoración oriental y campestre, baño privado, cama confortable y alta tranquilidad.
- Instalaciones destacadas: Jardín privado, zona exterior de barbacoa, ambiente natural de paz, sonido relajante de agua, wifi gratuito y climatización.
- Puntuación Booking: 8,2 / 10 ("Muy bien" con 199 comentarios reales).
- Entorno: A pocos minutos de la villa termal de Caldes de Montbui, senderos para caminatas, rutas en bici y gastronomía tradicional catalana.
- Reservas: Se pueden realizar directamente a través de nuestro botón de Booking o por contacto directo vía WhatsApp.

Instrucciones de respuesta:
- Responde de forma amable, cercana, clara y precisa en idioma español.
- Mantén un tono hospitalario, relajado y profesional.
- No uses el símbolo '&', utiliza siempre la conjunción 'y'.
- Si la pregunta es sobre cómo reservar, aconseja usar el enlace directo de Booking o contactar por WhatsApp al +34 614 20 09 80.`;

      if (apiKey && apiKey !== "MY_GEMINI_API_KEY") {
        try {
          const ai = new GoogleGenAI({
            apiKey,
            httpOptions: {
              headers: {
                'User-Agent': 'aistudio-build',
              }
            }
          });

          // Build clean alternating chat history
          const historyItems = (history || [])
            .filter((h: { role: string; text: string }) => h.text && typeof h.text === 'string' && h.text.trim())
            .map((h: { role: string; text: string }) => ({
              role: h.role === 'user' ? 'user' : 'model',
              parts: [{ text: h.text }]
            }));

          const contents: Array<{ role: string; parts: Array<{ text: string }> }> = [];
          for (const item of historyItems) {
            if (contents.length > 0 && contents[contents.length - 1].role === item.role) {
              contents[contents.length - 1].parts[0].text += `\n${item.parts[0].text}`;
            } else {
              contents.push(item);
            }
          }

          if (contents.length > 0 && contents[contents.length - 1].role === 'user') {
            contents[contents.length - 1].parts[0].text += `\n${message}`;
          } else {
            contents.push({ role: 'user', parts: [{ text: message }] });
          }

          let responseText = '';
          const modelsToTry = ['gemini-3.6-flash'];
          
          for (const modelName of modelsToTry) {
            try {
              const resGen = await ai.models.generateContent({
                model: modelName,
                contents,
                config: {
                  systemInstruction: systemPrompt
                }
              });
              if (resGen.text) {
                responseText = resGen.text;
                break;
              }
            } catch (err) {
              console.warn(`Model ${modelName} failed:`, err);
            }
          }

          if (responseText) {
            const cleanReply = responseText.replace(/&/g, 'y');
            return res.json({ reply: cleanReply });
          }
        } catch (apiError) {
          console.error("Gemini API call failed, using smart local responder:", apiError);
        }
      }

      // Smart local responder as fallback or when API key is missing
      const smartReply = getSmartLocalAnswer(message).replace(/&/g, 'y');
      return res.json({ reply: smartReply });
    } catch (error) {
      console.error("Error in chat route:", error);
      return res.json({
        reply: "Casa Kintsugi se encuentra en Carrer Galceran 31, Can Parellada (Barcelona). Puedes escribirnos directamente por WhatsApp al +34 614 20 09 80 o revisar nuestra sección de reservas."
      });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: {
        middlewareMode: true,
        hmr: false,
      },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server listening on http://0.0.0.0:${PORT}`);
  });
}

startServer();
