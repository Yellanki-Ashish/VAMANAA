function MessageBubble({ sender, text }) {
  const isUser = sender === "user";

  return (
    <div
      className={`flex ${
        isUser ? "justify-end" : "justify-start"
      } mb-6`}
    >
      <div
        className={`max-w-xl rounded-3xl px-6 py-4 ${
          isUser
            ? "bg-orange-600 text-white"
            : "bg-white shadow"
        }`}
      >
        {text}
      </div>
    </div>
  );
}

export default MessageBubble;