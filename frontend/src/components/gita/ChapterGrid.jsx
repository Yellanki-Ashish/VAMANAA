import ChapterCard from "./ChapterCard";
import gitaChapters from "../../data/gitaChapters";

function ChapterGrid() {
  return (
    <section className="py-20">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {gitaChapters.map((chapter) => (
            <ChapterCard
              key={chapter.id}
              chapter={chapter}
            />
          ))}

        </div>

      </div>

    </section>
  );
}

export default ChapterGrid;