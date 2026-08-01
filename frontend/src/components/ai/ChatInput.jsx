import { useState } from "react";
import { Send } from "lucide-react";

function ChatInput({ onSend }) {
  const [text, setText] = useState("");

  const handleSend = () => {
    if (!text.trim()) return;

    onSend(text);
    setText("");
  };

  return (
    <div className="border-t bg-white sticky bottom-0">

      <div className="max-w-6xl mx-auto px-6 py-5 flex gap-4">

        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Ask anything..."
          className="flex-1 border rounded-xl px-5 py-3 outline-none"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSend();
            }
          }}
        />

        <button
          onClick={handleSend}
          className="bg-orange-600 text-white px-6 rounded-xl"
        >
          <Send />
        </button>

      </div>

    </div>
  );
}

export default ChatInput;