import RamayanaCard from "../components/ramayana/RamayanaCard";

const kandas = [

  {
    kanda: "Bala Kanda",
    title: "Birth of Lord Rama",
    description:
      "Describes the birth of Lord Rama and his childhood.",
  },

  {
    kanda: "Ayodhya Kanda",
    title: "Exile",
    description:
      "Rama accepts exile to protect Dharma.",
  },

  {
    kanda: "Aranya Kanda",
    title: "Forest Life",
    description:
      "Life in the forest and Sita's abduction.",
  },

  {
    kanda: "Kishkindha Kanda",
    title: "Hanuman Meets Rama",
    description:
      "Friendship with Sugriva and Hanuman.",
  },

  {
    kanda: "Sundara Kanda",
    title: "Journey to Lanka",
    description:
      "Hanuman crosses the ocean to find Sita.",
  },

  {
    kanda: "Yuddha Kanda",
    title: "War",
    description:
      "The battle between Rama and Ravana.",
  },

  {
    kanda: "Uttara Kanda",
    title: "Coronation",
    description:
      "Rama returns to Ayodhya and becomes king.",
  },

];

function Ramayana() {

  return (

    <div className="max-w-7xl mx-auto px-6 py-10">

      <h1 className="text-5xl font-bold text-center mb-10">

        Ramayana

      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        {kandas.map((item, index) => (

          <RamayanaCard
            key={index}
            kanda={item.kanda}
            title={item.title}
            description={item.description}
          />

        ))}

      </div>

    </div>

  );

}

export default Ramayana;