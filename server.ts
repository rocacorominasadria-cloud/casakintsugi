import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

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

      if (!apiKey || apiKey === "MY_GEMINI_API_KEY") {
        // Helpful response when API key is not configured in environment
        return res.json({
          reply: "¡Hola! Soy Kintsugi Bot, tu asistente virtual. Actualmente estoy operando en modo directo de información. Te cuento que Casa Kintsugi está ubicada en Carrer Galceran 31, Can Parellada (Barcelona). Disponemos de Bungalow y Espacios de 1 dormitorio, con jardín y barbacoa privada. El horario de entrada (check-in) es a las 15:00h y la salida (check-out) a las 11:00h. Puedes escribirnos directamente por WhatsApp al +34 614 20 09 80 o revisar nuestra sección de reserva en Booking."
        });
      }

      const ai = new GoogleGenAI({
        apiKey,
        httpOptions: {
          headers: {
            'User-Agent': 'aistudio-build',
          }
        }
      });

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

      const contents = [
        { role: 'user', parts: [{ text: systemPrompt }] },
        ...(history || []).map((h: { role: string; text: string }) => ({
          role: h.role === 'user' ? 'user' : 'model',
          parts: [{ text: h.text }]
        })),
        { role: 'user', parts: [{ text: message }] }
      ];

      const response = await ai.models.generateContent({
        model: 'gemini-3.6-flash',
        contents
      });

      const reply = response.text || "Disculpa, no he podido generar una respuesta en este momento. ¿Te puedo ayudar con otra pregunta sobre Casa Kintsugi?";
      
      // Clean any accidental & from AI output to adhere to user requirement
      const cleanReply = reply.replace(/&/g, 'y');

      return res.json({ reply: cleanReply });
    } catch (error) {
      console.error("Error calling Gemini API:", error);
      return res.json({
        reply: "Hola. En este momento estoy teniendo un pequeño retraso de conexión con la IA. Puedes contactarnos de inmediato por WhatsApp al +34 614 20 09 80 o revisar nuestra sección de dudas frecuentes."
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
