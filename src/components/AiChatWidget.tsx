import React, { useState, useRef, useEffect } from 'react';
import { Bot, X, Send, Sparkles, MessageCircle, RefreshCw, ChevronRight } from 'lucide-react';
import { HOTEL_INFO } from '../data/hotelData';

interface Message {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  time: string;
}

export const AiChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const getCurrentTime = () => {
    const now = new Date();
    return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      sender: 'bot',
      text: '¡Hola! Soy el asistente virtual de Casa Kintsugi. Puedo informarte sobre nuestras estancias, horarios de entrada y salida, barbacoa, normas o cómo hacer tu reserva. ¿En qué te puedo ayudar hoy?',
      time: getCurrentTime()
    }
  ]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const quickPrompts = [
    '¿A qué hora es el check-in y check-out?',
    '¿Qué servicios tiene el Bungalow?',
    '¿Tienen barbacoa y jardín privado?',
    '¿Cómo puedo reservar?'
  ];

  const handleSend = async (textToSend?: string) => {
    const messageText = textToSend || input;
    if (!messageText.trim() || loading) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: messageText,
      time: getCurrentTime()
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInput('');
    setLoading(true);

    try {
      const history = messages
        .filter((m) => m.id !== 'welcome')
        .map((m) => ({
          role: m.sender === 'user' ? 'user' : 'model',
          text: m.text
        }));

      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: messageText, history })
      });

      const data = await res.json();
      
      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'bot',
        text: data.reply || 'Estoy a tu disposición para cualquier información sobre Casa Kintsugi.',
        time: getCurrentTime()
      };

      setMessages((prev) => [...prev, botMsg]);
    } catch (err) {
      console.error('Chat error:', err);
      // Fallback message
      const fallbackMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'bot',
        text: 'Casa Kintsugi se encuentra en Carrer Galceran 31, Can Parellada (Barcelona). Ofrecemos Bungalow y Espacios con jardín y barbacoa. El Check-in es desde las 15:00h y el Check-out hasta las 11:00h. Si deseas atención personalizada inmediata, te recomendamos contactar por WhatsApp al +34 614 20 09 80.',
        time: getCurrentTime()
      };
      setMessages((prev) => [...prev, fallbackMsg]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Floating Launcher Button */}
      <div className="fixed bottom-20 right-4 sm:bottom-6 sm:right-6 z-40">
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Abrir asistente virtual"
          className="relative group bg-[#708238] text-white p-3.5 sm:p-4 rounded-full shadow-2xl border-2 border-[#D4AF37] hover:bg-[#5b6b2e] hover:scale-105 transition-all duration-300 flex items-center justify-center cursor-pointer focus:outline-none"
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <div className="flex items-center gap-2">
              <Bot className="w-6 h-6" />
              <span className="hidden md:inline-block text-xs font-bold tracking-wide pr-1">
                Pregunta a la IA
              </span>
            </div>
          )}

          {!isOpen && (
            <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-[#D4AF37] rounded-full border-2 border-white animate-pulse" />
          )}
        </button>
      </div>

      {/* Chat Window Panel */}
      {isOpen && (
        <div className="fixed bottom-24 right-3 left-3 sm:left-auto sm:right-6 sm:bottom-24 w-auto sm:w-96 max-w-full h-[520px] max-h-[80vh] bg-[#FFFEF7] border border-stone-300 rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-300">
          
          {/* Header */}
          <div className="bg-[#2C2A29] text-white p-4 flex items-center justify-between border-b border-[#D4AF37]/30">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#708238] text-white flex items-center justify-center border border-[#D4AF37]">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif text-sm font-bold text-white flex items-center gap-1.5">
                  <span>Asistente Casa Kintsugi</span>
                  <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                </h3>
                <span className="text-[10px] text-stone-300 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
                  Responde en tiempo real
                </span>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="text-stone-400 hover:text-white transition-colors p-1"
              aria-label="Cerrar asistente"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-[#F7F5EC]/60">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl p-3.5 text-xs sm:text-sm leading-relaxed shadow-sm ${
                    msg.sender === 'user'
                      ? 'bg-[#708238] text-white rounded-br-none'
                      : 'bg-white text-[#2C2A29] border border-stone-200 rounded-bl-none'
                  }`}
                >
                  <p className="whitespace-pre-wrap">{msg.text}</p>
                </div>
                <span className="text-[10px] text-stone-400 mt-1 px-1">
                  {msg.time}
                </span>
              </div>
            ))}

            {loading && (
              <div className="flex items-start gap-2 text-stone-500 text-xs italic bg-white p-3 rounded-2xl border border-stone-200 w-fit">
                <RefreshCw className="w-3.5 h-3.5 animate-spin text-[#708238]" />
                <span>Consultando información...</span>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Prompts */}
          <div className="p-2.5 bg-stone-100 border-t border-stone-200 flex gap-1.5 overflow-x-auto text-[11px] no-scrollbar">
            {quickPrompts.map((prompt, idx) => (
              <button
                key={idx}
                onClick={() => handleSend(prompt)}
                disabled={loading}
                className="whitespace-nowrap bg-white border border-stone-300 text-stone-700 px-2.5 py-1 rounded-full hover:border-[#708238] hover:text-[#708238] transition-colors flex items-center gap-1 cursor-pointer"
              >
                <span>{prompt}</span>
                <ChevronRight className="w-3 h-3 text-stone-400" />
              </button>
            ))}
          </div>

          {/* Input Bar */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="p-3 bg-white border-t border-stone-200 flex items-center gap-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Pregunta sobre la casa..."
              disabled={loading}
              className="flex-1 bg-stone-50 border border-stone-200 rounded-xl px-3.5 py-2 text-xs text-[#2C2A29] focus:outline-none focus:border-[#708238]"
            />
            
            <button
              type="submit"
              disabled={!input.trim() || loading}
              aria-label="Enviar mensaje"
              className="bg-[#708238] text-white p-2 rounded-xl hover:bg-[#5b6b2e] disabled:opacity-40 transition-colors cursor-pointer"
            >
              <Send className="w-4 h-4" />
            </button>

            <a
              href={HOTEL_INFO.social.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              title="Abrir WhatsApp directo"
              className="bg-[#25D366] text-white p-2 rounded-xl hover:bg-[#1ebd59] transition-colors flex items-center justify-center"
            >
              <MessageCircle className="w-4 h-4" />
            </a>
          </form>

        </div>
      )}
    </>
  );
};
