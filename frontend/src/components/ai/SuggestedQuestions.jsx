const questions = [
  "What is Dharma?",
  "Explain Karma.",
  "Who is Krishna?",
  "What is Moksha?",
  "How to overcome fear?",
  "Meaning of Bhagavad Gita 2.47",
];

function SuggestedQuestions({ onSelect }) {
  return (
    <div className="max-w-6xl mx-auto px-6 py-8">

      <h2 className="text-2xl font-bold mb-6">
        Suggested Questions
      </h2>

      <div className="flex flex-wrap gap-4">

        {questions.map((question) => (
          <button
            key={question}
            onClick={() => onSelect(question)}
            className="bg-orange-100 px-6 py-3 rounded-full hover:bg-orange-200 transition"
          >
            {question}
          </button>
        ))}

      </div>

    </div>
  );
}

export default SuggestedQuestions;