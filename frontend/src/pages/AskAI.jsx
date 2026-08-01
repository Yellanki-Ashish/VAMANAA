import { useState } from "react";

import ChatHeader from "../components/ai/ChatHeader";
import SuggestedQuestions from "../components/ai/SuggestedQuestions";
import ChatMessages from "../components/ai/ChatMessages";
import ChatInput from "../components/ai/ChatInput";

import { askAI } from "../api/ai";

function AskAI() {
  const [messages, setMessages] = useState([
    {
      sender: "ai",
      text: "🙏 Welcome to Vamanaa AI. Ask me anything about the Bhagavad Gita, Ramayana, Mahabharata, or Sanatana Dharma.",
    },
  ]);

  const [loading, setLoading] = useState(false);

  const handleSend = async (question) => {
    if (!question.trim()) return;

    // Add user message
    setMessages((prev) => [
      ...prev,
      {
        sender: "user",
        text: question,
      },
    ]);

    setLoading(true);

    try {
      // Call FastAPI
      const reply = await askAI(question);

      // Add AI reply
      setMessages((prev) => [
        ...prev,
        {
          sender: "ai",
          text: reply,
        },
      ]);
    } catch (error) {
      console.error(error);

      setMessages((prev) => [
        ...prev,
        {
          sender: "ai",
          text: "⚠️ Unable to connect to the AI server.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-orange-50 flex flex-col">

      <ChatHeader />

      <SuggestedQuestions onSelect={handleSend} />

      <div className="flex-1 overflow-y-auto">

        <ChatMessages messages={messages} />

        {loading && (
          <div className="max-w-6xl mx-auto px-6 pb-6">
            <div className="bg-white rounded-2xl shadow p-4 inline-block">
              🙏 Vamanaa AI is thinking...
            </div>
          </div>
        )}

      </div>

      <ChatInput onSend={handleSend} />

    </div>
  );
}

export default AskAI;