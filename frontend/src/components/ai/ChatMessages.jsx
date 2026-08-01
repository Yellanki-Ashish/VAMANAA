import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

function ChatMessages({ messages }) {
  return (
    <div className="max-w-5xl mx-auto w-full px-6 py-8 space-y-6">
      {messages.map((message, index) => (
        <div
          key={index}
          className={`flex ${
            message.sender === "user"
              ? "justify-end"
              : "justify-start"
          }`}
        >
          <div
            className={`max-w-3xl rounded-2xl px-6 py-4 shadow ${
              message.sender === "user"
                ? "bg-orange-600 text-white"
                : "bg-white"
            }`}
          >
            {message.sender === "user" ? (
              <p>{message.text}</p>
            ) : (
              <div className="markdown">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {message.text}
                </ReactMarkdown>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ChatMessages;