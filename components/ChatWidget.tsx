import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, User, Loader2 } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";
import { RESUME_DATA, SYSTEM_INSTRUCTION } from '../constants';

interface Message {
  id: string;
  role: 'user' | 'model';
  text: string;
}

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: '1', role: 'model', text: "Hi! I'm Abhay's AI assistant. Ask me anything about his skills, projects, or experience." }
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isOpen]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim() || isLoading) return;

    const userMessage: Message = { id: Date.now().toString(), role: 'user', text: inputText };
    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsLoading(true);

    try {
      // Initialize Gemini Client
      // Fixed: Use process.env.API_KEY exclusively as per guidelines
      const apiKey = process.env.API_KEY;
      
      if (!apiKey) {
        throw new Error("API Key not found");
      }

      const ai = new GoogleGenAI({ apiKey });
      
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: inputText,
        config: {
          systemInstruction: SYSTEM_INSTRUCTION + "\n\nContext Data:\n" + RESUME_DATA,
        }
      });

      const text = response.text || "I'm having trouble thinking right now. Please try again.";
      
      setMessages(prev => [...prev, { id: (Date.now() + 1).toString(), role: 'model', text }]);

    } catch (error) {
      console.error("Chat Error", error);
      setMessages(prev => [...prev, { 
        id: (Date.now() + 1).toString(), 
        role: 'model', 
        text: "I'm currently offline or missing my API key. But I can tell you Abhay is a great Data Scientist!" 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 p-4 bg-primary text-white rounded-full shadow-2xl hover:bg-blue-700 transition-all z-40 ${isOpen ? 'hidden' : 'flex'}`}
        aria-label="Open Chat"
      >
        <MessageSquare className="w-6 h-6" />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-full max-w-[350px] md:max-w-[400px] h-[500px] bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 z-50 flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-10 duration-300 transition-colors">
          
          {/* Header */}
          <div className="bg-primary p-4 flex justify-between items-center text-white">
            <div className="flex items-center gap-2">
              <div className="p-1.5 bg-white/20 rounded-lg">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-sm">Abhay's Assistant</h3>
                <p className="text-xs text-blue-100 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
                  Online
                </p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/20 p-1 rounded-full transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50 dark:bg-slate-950 transition-colors">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] rounded-2xl p-3 text-sm ${
                  msg.role === 'user' 
                    ? 'bg-primary text-white rounded-br-none' 
                    : 'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 rounded-bl-none shadow-sm'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                 <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-3 rounded-2xl rounded-bl-none shadow-sm">
                   <Loader2 className="w-4 h-4 animate-spin text-primary" />
                 </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <form onSubmit={handleSendMessage} className="p-4 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 transition-colors">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Ask about Abhay..."
                className="flex-1 px-4 py-2 border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white rounded-full focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-sm transition-colors"
              />
              <button 
                type="submit" 
                disabled={isLoading || !inputText.trim()}
                className="p-2 bg-primary text-white rounded-full hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default ChatWidget;