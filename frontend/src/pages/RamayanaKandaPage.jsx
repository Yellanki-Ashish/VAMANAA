import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function RamayanaKandaPage() {

  const { kanda } = useParams();

  const navigate = useNavigate();

  const [verses, setVerses] = useState([]);

  useEffect(() => {

    async function loadVerses() {

      const response = await fetch(
        "http://127.0.0.1:8000/ramayana/" + encodeURIComponent(kanda)
      );

      const data = await response.json();

      setVerses(data);

    }

    loadVerses();

  }, [kanda]);

  return (

    <div className="max-w-5xl mx-auto p-8">

      <h1 className="text-4xl font-bold mb-8">

        {decodeURIComponent(kanda)}

      </h1>

      {verses.map((verse, index) => (

        <div
          key={index}
          onClick={() =>
            navigate(
              `/ramayana/${encodeURIComponent(kanda)}/${verse.chapter}/${verse.verse}`
            )
          }
          className="bg-white rounded-xl shadow-md p-6 mb-6 cursor-pointer hover:shadow-xl transition"
        >

          <h2 className="font-bold text-xl">

            Chapter {verse.chapter}

          </h2>

          <h3>

            Verse {verse.verse}

          </h3>

          <p className="mt-4">

            {verse.english}

          </p>

        </div>

      ))}

    </div>

  );

}

export default RamayanaKandaPage;