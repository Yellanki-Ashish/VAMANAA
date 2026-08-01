function DailyChallenge() {
  return (
    <section className="pb-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="rounded-3xl bg-gradient-to-r from-orange-500 to-yellow-400 p-10 text-white">

          <h2 className="text-4xl font-bold">
            Daily Challenge
          </h2>

          <p className="mt-6 text-xl">
            Read one verse from the Bhagavad Gita and write one lesson
            you learned today.
          </p>

          <button className="mt-8 bg-white text-orange-700 px-8 py-4 rounded-xl font-bold">
            Mark as Completed
          </button>

        </div>

      </div>
    </section>
  );
}

export default DailyChallenge;