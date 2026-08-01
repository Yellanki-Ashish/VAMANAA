function DailyQuote() {
  return (
    <section className="pb-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="rounded-3xl bg-gradient-to-r from-orange-600 to-amber-500 text-white p-10 shadow-xl">

          <span className="uppercase tracking-widest text-sm font-semibold">
            Today's Wisdom
          </span>

          <h2 className="text-3xl font-bold mt-4">
            Bhagavad Gita 2.47
          </h2>

          <p className="text-2xl mt-8 leading-relaxed">
            कर्मण्येवाधिकारस्ते मा फलेषु कदाचन।
          </p>

          <p className="mt-6 text-lg italic">
            "You have the right to perform your prescribed duties,
            but you are not entitled to the fruits of your actions."
          </p>

        </div>

      </div>
    </section>
  );
}

export default DailyQuote;