function ChapterHeader({ chapter }) {
  return (
    <section className="bg-gradient-to-r from-orange-600 to-amber-500 text-white py-16">
      <div className="max-w-7xl mx-auto px-6">

        <h1 className="text-5xl font-bold">
          Chapter {chapter.id}
        </h1>

        <h2 className="text-3xl mt-4">
          {chapter.name}
        </h2>

        <p className="text-xl mt-4">
          {chapter.sanskrit}
        </p>

        <p className="mt-6 text-lg">
          {chapter.description}
        </p>

      </div>
    </section>
  );
}

export default ChapterHeader;