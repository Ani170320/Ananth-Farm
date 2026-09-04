"use client";

import { useChat } from "@ai-sdk/react";
import {
  X,
  Send,
  Bot,
  User,
  Loader2,
  Sparkles,
  ShoppingBag,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/context/CartContext";
import { products } from "@/data/products";

interface AskAnanthChatProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AskAnanthChat({ isOpen, onClose }: AskAnanthChatProps) {
  const {
    messages,
    input,
    handleInputChange,
    handleSubmit,
    isLoading,
    append,
    setMessages,
  } = useChat({
    api: "/api/chat",
    onToolCall({ toolCall }) {
      if (toolCall.toolName === "add_to_cart") {
        const { productId, quantity } = toolCall.args as { productId: string, quantity: number };
        const product = products.find((p) => p.id === productId);
        if (product) {
          addToCart(
            {
              id: product.id,
              name: product.name,
              price: product.price,
              image: product.image,
              weight: product.weight,
              description: product.description,
            },
            quantity,
          );
          setIsCartOpen(true);
        }
      }
    },
  });

  const { addToCart, setIsCartOpen } = useCart();
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [hasStarted, setHasStarted] = useState(false);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Initial greeting
  useEffect(() => {
    if (isOpen && messages.length === 0 && !hasStarted) {
      setMessages([
        {
          id: "greeting",
          role: "assistant",
          content:
            "Hi! 👋 I'm Ask Ananth. I can help you choose mangoes, learn about our farm, explore gifting options, tree adoption, or answer questions about ordering. What can I help you with?",
        },
      ]);
      setHasStarted(true);
    }
  }, [isOpen, messages.length, hasStarted, setMessages]);

  const suggestedQuestions = [
    "🥭 Which mango should I buy?",
    "🎁 Help me choose a gift box",
    "📦 What box is best for my family?",
    "🌳 Tell me about tree adoption",
    "🚜 Tell me about Ananth Farm",
  ];

  const handleSuggestionClick = (question: string) => {
    append({ role: "user", content: question });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-dark/40 backdrop-blur-sm z-50"
          />

          {/* Chat Panel */}
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-50 w-[calc(100%-32px)] md:w-[400px] h-[600px] max-h-[85vh] bg-white rounded-3xl shadow-2xl flex flex-col overflow-hidden border border-forest/10"
          >
            {/* Header */}
            <div className="bg-forest text-cream p-5 flex items-center justify-between shadow-sm relative z-10">
              <div className="flex items-center gap-3">
                <div className="bg-mango/20 p-2 rounded-xl text-mango">
                  <Sparkles size={20} />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg leading-none">
                    Ask Ananth 🌱
                  </h3>
                  <p className="text-cream/70 text-xs mt-1">
                    Your personal mango & farm assistant
                  </p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="text-cream/60 hover:text-cream hover:bg-white/10 p-2 rounded-full transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-5 bg-cream/30 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.role === "user" ? "justify-end" : "justify-start"} gap-2 max-w-full`}
                >
                  {message.role === "assistant" && (
                    <div className="w-8 h-8 rounded-full bg-forest text-mango flex flex-shrink-0 items-center justify-center mt-auto shadow-sm">
                      <Bot size={16} />
                    </div>
                  )}

                  <div
                    className={`flex flex-col max-w-[80%] ${message.role === "user" ? "items-end" : "items-start"}`}
                  >
                    <div
                      className={`px-4 py-3 shadow-sm text-sm whitespace-pre-wrap leading-relaxed ${
                        message.role === "user"
                          ? "bg-forest text-white rounded-2xl rounded-br-sm"
                          : "bg-white text-forest border border-forest/5 rounded-2xl rounded-bl-sm"
                      }`}
                    >
                      {message.content}

                      {/* Render tool invocation message if present (Vercel AI SDK stores tool calls in the message parts if configured, but normally it just yields empty content if it's a tool-only message. We'll rely on the backend sending a normal message if we used streamText's built-in text generation) */}
                    </div>

                    {/* Tool Calls */}
                    {message.toolInvocations?.map((toolInvocation) => {
                      if (toolInvocation.toolName === "add_to_cart") {
                        return (
                          <div
                            key={toolInvocation.toolCallId}
                            className="mt-2 bg-mango/10 border border-mango/30 rounded-xl p-3 flex items-center gap-3 text-forest w-full"
                          >
                            <div className="bg-mango p-2 rounded-full text-dark">
                              <ShoppingBag size={14} />
                            </div>
                            <div className="flex-1 text-xs">
                              {'result' in toolInvocation ? (
                                <strong>Added to your cart! 🥭</strong>
                              ) : (
                                <span>Adding to cart...</span>
                              )}
                            </div>
                          </div>
                        );
                      }
                      return null;
                    })}
                  </div>

                  {message.role === "user" && (
                    <div className="w-8 h-8 rounded-full bg-mango text-forest flex flex-shrink-0 items-center justify-center mt-auto shadow-sm">
                      <User size={16} />
                    </div>
                  )}
                </div>
              ))}

              {isLoading && messages[messages.length - 1]?.role === "user" && (
                <div className="flex justify-start gap-2">
                  <div className="w-8 h-8 rounded-full bg-forest text-mango flex items-center justify-center mt-auto shadow-sm">
                    <Bot size={16} />
                  </div>
                  <div className="px-4 py-3 bg-white text-forest border border-forest/5 rounded-2xl rounded-bl-sm shadow-sm flex items-center gap-2">
                    <Loader2
                      size={16}
                      className="animate-spin text-forest/50"
                    />
                    <span className="text-xs text-forest/60">
                      Ananth is typing...
                    </span>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Suggested Prompts (only show if few messages) */}
            {messages.length <= 2 && !isLoading && (
              <div className="px-4 py-3 bg-white border-t border-forest/5 flex gap-2 overflow-x-auto no-scrollbar scroll-smooth">
                {suggestedQuestions.map((q, i) => (
                  <button
                    key={i}
                    onClick={() => handleSuggestionClick(q)}
                    className="flex-shrink-0 bg-cream hover:bg-mango/20 text-forest text-xs px-3 py-2 rounded-full border border-forest/10 transition-colors whitespace-nowrap"
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}

            {/* Input Area */}
            <div className="p-4 bg-white border-t border-forest/10 relative z-10">
              <form
                onSubmit={handleSubmit}
                className="flex items-center gap-2 relative"
              >
                <input
                  type="text"
                  value={input}
                  onChange={handleInputChange}
                  placeholder="Ask a question..."
                  className="flex-1 bg-cream/50 border border-forest/20 text-forest text-sm rounded-full pl-5 pr-12 py-3 focus:outline-none focus:ring-2 focus:ring-mango transition-shadow placeholder:text-forest/40"
                  disabled={isLoading}
                />
                <button
                  type="submit"
                  disabled={isLoading || !input.trim()}
                  className="absolute right-1.5 p-2 bg-forest text-mango rounded-full hover:bg-forest/90 disabled:opacity-50 disabled:hover:bg-forest transition-colors"
                >
                  <Send size={16} />
                </button>
              </form>
              <div className="text-center mt-2">
                <span className="text-[10px] text-forest/40 font-medium">
                  AI can make mistakes. Please verify important information.
                </span>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
