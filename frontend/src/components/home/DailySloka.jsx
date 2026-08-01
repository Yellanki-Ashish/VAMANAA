import { useEffect, useState } from "react";
import { getDailySloka } from "../../api/daily";

function DailySloka() {

  const [sloka, setSloka] = useState(null);

  useEffect(() => {

    async function fetchSloka() {

      try {

        const data = await getDailySloka();

        setSloka(data);

      } catch (error) {

        console.log(error);

      }

    }

    fetchSloka();

  }, []);

  if (!sloka) {

    return (
      <div className="text-center py-8">
        Loading Today's Sloka...
      </div>
    );

  }

  return (

    <div className="bg-orange-50 rounded-xl shadow-md p-6 mt-6">

      <h2 className="text-2xl font-bold text-orange-700 mb-4">

        📖 Today's Sloka

      </h2>

      <p className="font-semibold">

        Chapter {sloka.chapter} • Verse {sloka.verse}

      </p>

      <p className="italic mt-2">

        {sloka.title}

      </p>

      <p className="mt-4 text-gray-700">

        {sloka.english}

      </p>

    </div>

  );

}

export default DailySloka;