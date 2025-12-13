
import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, Loader2 } from 'lucide-react';
import { GoogleGenAI, Chat } from "@google/genai";
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
  
  // Use a ref to persist the chat session across renders without triggering re-renders
  const chatSessionRef = useRef<Chat | null>(null);

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
      // 1. Safely retrieve API Key
      let apiKey = "";
      try {
        // Attempt to get the key from process.env if available
        apiKey = process.env.API_KEY || "";
      } catch (e) {
        // Ignore ReferenceError if process is not defined in the browser
      }

      // 2. Check if key exists. If not, trigger the fallback mechanism immediately.
      if (!apiKey) {
        // Simulate a short delay for realism before showing the offline message
        await new Promise(resolve => setTimeout(resolve, 800));
        throw new Error("OFFLINE_MODE");
      }

      // 3. Initialize Gemini Client if not ready
      if (!chatSessionRef.current) {
        const ai = new GoogleGenAI({ apiKey });
        
        chatSessionRef.current = ai.chats.create({
          model: 'gemini-2.5-flash',
          config: {
            systemInstruction: SYSTEM_INSTRUCTION + "\n\nContext Data:\n" + RESUME_DATA,
          }
        });
      }
      
      // 4. Send Message
      const response = await chatSessionRef.current.sendMessage({
        message: userMessage.text
      });

      const text = response.text || "I'm having trouble thinking right now. Please try again.";
      setMessages(prev => [...prev, { id: (Date.now() + 1).toString(), role: 'model', text }]);

    } catch (error: any) {
      console.error("Chat Error:", error);
      
      // 5. Graceful Fallback (The "Normal Answer")
      // Instead of showing technical errors, we show a friendly offline message.
      const offlineMessage = "I am currently running in offline mode. For specific inquiries, please contact Abhay directly at Abhay242singh@gmail.com.";

      setMessages(prev => [...prev, { 
        id: (Date.now() + 1).toString(), 
        role: 'model', 
        text: offlineMessage
      }]);
      
      // Reset session to allow retry later if connectivity returns
      chatSessionRef.current = null;
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 p-4 bg-primary text-white rounded-full shadow-2xl hover:bg-blue-700 transition-all z-40 ${isOpen ? 'hidden' : 'flex'} hover:scale-110 active:scale-95`}
        aria-label="Open Chat"
      >
        <MessageSquare className="w-6 h-6" />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-[90vw] sm:w-[350px] md:w-[400px] h-[500px] max-h-[80vh] bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 z-50 flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-10 duration-300 transition-colors">
          
          {/* Header */}
          <div className="bg-gradient-to-r from-primary to-blue-600 p-4 flex justify-between items-center text-white shadow-md">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-white/20 rounded-full backdrop-blur-sm">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-sm">Abhay's Assistant</h3>
                <p className="text-xs text-blue-100 flex items-center gap-1.5">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse shadow-[0_0_8px_rgba(74,222,128,0.5)]"></span>
                  Online
                </p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)} 
              className="hover:bg-white/20 p-2 rounded-full transition-colors active:bg-white/30"
              aria-label="Close Chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50 dark:bg-slate-950 transition-colors scrollbar-thin scrollbar-thumb-slate-300 dark:scrollbar-thumb-slate-700">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-in fade-in slide-in-from-bottom-2 duration-300`}>
                <div className={`max-w-[85%] rounded-2xl p-3 text-sm leading-relaxed shadow-sm ${
                  msg.role === 'user' 
                    ? 'bg-primary text-white rounded-br-none' 
                    : 'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 rounded-bl-none'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start animate-in fade-in slide-in-from-bottom-2 duration-300">
                 <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-4 rounded-2xl rounded-bl-none shadow-sm flex items-center gap-2">
                   <Loader2 className="w-4 h-4 animate-spin text-primary" />
                   <span className="text-xs text-slate-500 dark:text-slate-400">Thinking...</span>
                 </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <form onSubmit={handleSendMessage} className="p-4 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 transition-colors">
            <div className="flex gap-2 relative">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Ask about Abhay..."
                className="flex-1 px-5 py-3 pr-12 border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white rounded-full focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 text-sm transition-all shadow-inner"
              />
              <button 
                type="submit" 
                disabled={isLoading || !inputText.trim()}
                className="absolute right-1.5 top-1.5 p-1.5 bg-primary text-white rounded-full hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all hover:scale-105 active:scale-95 shadow-sm"
                aria-label="Send Message"
              >
                <Send className="w-4 h-4 translate-x-px translate-y-px" />
              </button>
            </div>
            <div className="text-center mt-2">
               <p className="text-[10px] text-slate-400 dark:text-slate-500">
                 AI responses may be inaccurate.
               </p>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default ChatWidget;
