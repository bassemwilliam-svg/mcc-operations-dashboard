import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, RotateCcw, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { dialogTree } from '@/lib/chatbot';
import { useLanguage } from '@/hooks/useLanguage';
import type { ChatMessage } from '@/types/chatbot';

export function ChatbotWidget() {
  const { language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [currentNodeId, setCurrentNodeId] = useState('root');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  function getText(node: { text: string; textAr?: string }) {
    return language === 'ar' && node.textAr ? node.textAr : node.text;
  }

  function getLabel(opt: { label: string; labelAr?: string }) {
    return language === 'ar' && opt.labelAr ? opt.labelAr : opt.label;
  }

  function buildInitialMessages(): ChatMessage[] {
    const rootNode = dialogTree['root'];
    if (!rootNode) return [];
    return [{
      id: 'msg-0',
      nodeId: 'root',
      text: getText(rootNode),
      type: 'bot',
      options: rootNode.options?.map(o => ({ ...o, label: getLabel(o) })),
    }];
  }

  // Initialize and re-render messages when language changes
  useEffect(() => {
    setMessages(buildInitialMessages());
    setCurrentNodeId('root');
  }, [language]);

  // Auto-scroll to bottom whenever messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  function handleOptionClick(label: string, nextNodeId: string) {
    const nextNode = dialogTree[nextNodeId];
    if (!nextNode) return;

    const userMsg: ChatMessage = {
      id: `msg-${Date.now()}-user`,
      nodeId: currentNodeId,
      text: label,
      type: 'user',
    };

    const botMsg: ChatMessage = {
      id: `msg-${Date.now()}-bot`,
      nodeId: nextNodeId,
      text: getText(nextNode),
      type: 'bot',
      options: nextNode.options?.map(o => ({ ...o, label: getLabel(o) })),
      docLink: nextNode.docLink,
    };

    setMessages(prev => [...prev, userMsg, botMsg]);
    setCurrentNodeId(nextNodeId);
  }

  function handleRestart() {
    setMessages(buildInitialMessages());
    setCurrentNodeId('root');
  }

  function handleBack() {
    if (messages.length <= 1) return;
    // Remove last user + bot message pair
    const newMessages = messages.slice(0, -2);
    const lastBotMsg = newMessages[newMessages.length - 1];
    if (lastBotMsg) {
      setCurrentNodeId(lastBotMsg.nodeId);
    }
    setMessages(newMessages);
  }

  return (
    <>
      {/* Floating button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="no-print fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-accent hover:bg-accent-hover text-white shadow-lg shadow-accent/25 flex items-center justify-center transition-all hover:scale-105"
          aria-label="Open assistant"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      )}

      {/* Chat panel */}
      {isOpen && (
        <div className="no-print fixed bottom-6 right-6 z-50 w-[400px] max-w-[calc(100vw-2rem)] h-[500px] max-h-[calc(100vh-6rem)] bg-gray-900 dark:bg-gray-900 border border-gray-700 rounded-2xl shadow-2xl flex flex-col overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-gray-700 bg-gray-850">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center">
                <MessageCircle className="w-4 h-4 text-accent" />
              </div>
              <div>
                <div className="text-sm font-semibold text-gray-100">{language === 'ar' ? 'مساعد MCCVR' : 'MCCVR Assistant'}</div>
                <div className="text-[10px] text-gray-500">{language === 'ar' ? 'مساعدة سريعة وتوجيه' : 'Quick help & guidance'}</div>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <button onClick={handleBack} className="p-1.5 hover:bg-gray-700 rounded-lg text-gray-400 hover:text-gray-200" title="Go back">
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button onClick={handleRestart} className="p-1.5 hover:bg-gray-700 rounded-lg text-gray-400 hover:text-gray-200" title="Start over">
                <RotateCcw className="w-4 h-4" />
              </button>
              <button onClick={() => setIsOpen(false)} className="p-1.5 hover:bg-gray-700 rounded-lg text-gray-400 hover:text-gray-200">
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map(msg => (
              <div key={msg.id} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] ${
                  msg.type === 'user'
                    ? 'bg-accent text-white rounded-2xl rounded-br-md px-4 py-2'
                    : 'space-y-2'
                }`}>
                  {msg.type === 'bot' ? (
                    <>
                      <div className="bg-gray-800 rounded-2xl rounded-bl-md px-4 py-2.5 text-sm text-gray-200">
                        {msg.text}
                      </div>
                      {msg.docLink && (
                        <Link
                          to={msg.docLink}
                          onClick={() => setIsOpen(false)}
                          className="inline-block text-xs text-accent hover:underline ml-1"
                        >
                          {language === 'ar' ? 'عرض الوثائق الكاملة ←' : 'View full documentation →'}
                        </Link>
                      )}
                      {msg.options && msg.options.length > 0 && (
                        <div className="flex flex-col gap-1.5 mt-1">
                          {msg.options.map(opt => (
                            <button
                              key={opt.nextNodeId}
                              onClick={() => handleOptionClick(opt.label, opt.nextNodeId)}
                              className="text-left px-3 py-2 rounded-xl border border-gray-600 hover:border-accent hover:bg-accent/5 text-sm text-gray-300 hover:text-gray-100 transition-colors"
                            >
                              {opt.label}
                            </button>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <span className="text-sm">{msg.text}</span>
                  )}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
        </div>
      )}
    </>
  );
}
