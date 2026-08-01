import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function RamayanaVersePage() {

  const { kanda, chapter, verse } = useParams();

  const [data, setData] = useState(null);

  useEffect(() => {

    async function loadVerse() {

      const response = await fetch(
        `http://127.0.0.1:8000/ramayana/${encodeURIComponent(kanda)}/${chapter}/${verse}`
      );

      const result = await response.json();

      setData(result);

    }

    loadVerse();

  }, [kanda, chapter, verse]);

  if (!data) {

    return <h2 className="text-center mt-20">Loading...</h2>;

  }

  return (

    <div className="max-w-5xl mx-auto p-8">

      <h1 className="text-4xl font-bold mb-6">

        {data.title}

      </h1>

      <p className="text-lg mb-4">

        {data.kanda}

      </p>

      <p>

        Chapter {data.chapter} • Verse {data.verse}

      </p>

      <div className="bg-orange-50 p-6 rounded-xl mt-6">

        <p>

          {data.english}

        </p>

      </div>

    </div>

  );

}

export default RamayanaVersePage;