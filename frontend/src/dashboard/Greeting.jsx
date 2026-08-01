function Greeting() {
  const hour = new Date().getHours();

  let greeting = "Good Evening";

  if (hour < 12) {
    greeting = "Good Morning";
  } else if (hour < 18) {
    greeting = "Good Afternoon";
  }

  return (
    <section className="py-10">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-orange-700 font-semibold">
          {greeting} 🙏
        </h2>

        <h1 className="text-5xl font-bold mt-2">
          Welcome to Vamanaa
        </h1>

        <p className="mt-4 text-gray-600 text-lg">
          Continue your journey of wisdom and self-discovery.
        </p>

      </div>
    </section>
  );
}

export default Greeting;