import React, { useState, useEffect } from "react";

function App() {
  const mantras = [
    {
        english: "I am enough.",
        sanskrit: "अहमस्मि पर्याप्तः", 
        transliteration: "Aham Asmi Paryāptaḥ",
        meaning: "I am sufficient/enough."
    },
    {
        english: "I choose joy.",
        sanskrit: "आनन्दं चिन्व्हे", 
        transliteration: "Ānandaṃ Cinvhe",
        meaning: "I select/gather joy."
    },
    {
        english: "My mind is calm.",
        sanskrit: "मनः शान्तम् अस्ति", 
        transliteration: "Manaḥ Śāntam Asti",
        meaning: "The mind is peaceful."
    },
    {
        english: "I embrace the present moment.",
        sanskrit: "वर्तमाने तिष्ठामि", 
        transliteration: "Vartamāne Tiṣṭhāmi",
        meaning: "I dwell in the present."
    },
    {
        english: "I am capable of achieving my goals.",
        sanskrit: "सिद्धिं साधयामि", 
        transliteration: "Siddhiṃ Sādhayāmi",
        meaning: "I accomplish success/perfection."
    },
    {
        english: "Today, I create my own peace.",
        sanskrit: "अद्य शान्तिं करोमि", 
        transliteration: "Adya Śāntiṃ Karomi",
        meaning: "Today, I make/create peace."
    },
    {
        english: "I release all fear and worry.",
        sanskrit: "अभयम्", 
        transliteration: "Abhayam",
        meaning: "Fearlessness (A single powerful concept)."
    },
    {
        english: "My potential is limitless.",
        sanskrit: "शक्तयः अनन्ताः", 
        transliteration: "Śaktayaḥ Anantāḥ",
        meaning: "My powers/energies are infinite."
    },
    {
        english: "I trust my intuition.",
        sanskrit: "प्रज्ञां श्रद्धे", 
        transliteration: "Prajñāṃ Śraddhe",
        meaning: "I have faith in my wisdom/intuition."
    },
    {
        english: "I am grateful for all that I have.",
        sanskrit: "कृतज्ञोऽहम्", 
        transliteration: "Kṛtajño'ham",
        meaning: "I am grateful."
    }
  ];

  // 🎯 State for the current mantra OBJECT
  const [currentMantra, setCurrentMantra] = useState(mantras[0]); 

  // 🎯 State for background color
  const [bgColor, setBgColor] = useState("bg-gray-50");

  // 🎨 Available background colors (Tailwind CSS classes)
  const colors = [
    "bg-gray-100",
    "bg-red-100",
    "bg-blue-100",
    "bg-green-100",
    "bg-yellow-100",
    "bg-purple-100",
    "bg-pink-100",
    "bg-indigo-100",
  ];

  // Utility function to pick a random item different from the current one
  const getRandomDifferent = (list, current) => {
    let newItem;
    // For mantras, we compare the entire object (using JSON.stringify for a simple object comparison)
    // For colors, we compare the strings directly
    const listStringified = JSON.stringify(list);
    const currentStringified = JSON.stringify(current);
    
    do {
      newItem = list[Math.floor(Math.random() * list.length)];
    } while (JSON.stringify(newItem) === currentStringified);
    
    return newItem;
  };

  // Function to update both mantra and background color
  const updateMantraAndBackground = () => {
    setCurrentMantra(getRandomDifferent(mantras, currentMantra));
    setBgColor(getRandomDifferent(colors, bgColor));
  };

  // Effect to show a random mantra on the first load
  useEffect(() => {
    updateMantraAndBackground();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    // 1. OUTER DIV: Handles Centering and Dynamic Background Color
    <div
      className={`${bgColor} flex items-center justify-center min-h-screen p-4 font-sans transition-colors duration-700`}
    >
      {/* 2. INNER DIV: The Mantra Card */}
      <div
        className="bg-white p-8 rounded-2xl shadow-xl max-w-lg w-full text-center 
                   border-t-4 border-indigo-500 transform transition duration-500 
                   hover:shadow-2xl hover:scale-[1.01]"
      >
        <h1 className="text-3xl font-extrabold text-indigo-700 mb-8 pb-2 tracking-tight">
          Daily Positive Mantra
        </h1>

        {/* 3. ENGLISH AFFIRMATION SECTION */}
        <div className="mb-8">
            <h2 className="text-lg font-bold text-gray-600 mb-2">English Affirmation</h2>
            <p className="text-3xl font-extrabold text-gray-900 min-h-[3rem] p-2">
                {currentMantra.english}
            </p>
        </div>

        {/* 4. SANSKRIT SECTION */}
        <div className="mb-10 p-4 bg-indigo-50 rounded-lg border-l-4 border-indigo-400">
            <h2 className="text-lg font-bold text-indigo-700 mb-2">Sanskrit </h2>
            <p className="text-4xl font-serif text-indigo-900 mb-2" style={{ fontFamily: 'serif' }}>
                {currentMantra.sanskrit}
            </p>
            <p className="text-sm italic text-gray-500">
                ({currentMantra.transliteration})
            </p>
            <p className="text-md font-medium mt-3 text-indigo-800">
                Meaning: {currentMantra.meaning}
            </p>
        </div>

        {/* 5. BUTTON */}
        <button
          onClick={updateMantraAndBackground}
          className="bg-indigo-600 text-white font-semibold py-3 px-8 
                      rounded-full shadow-lg transition duration-300 ease-in-out 
                      transform hover:-translate-y-1 hover:shadow-xl focus:outline-none 
                      focus:ring-4 focus:ring-indigo-300 active:bg-indigo-800"
        >
          Generate New Mantra
        </button>
      </div>
    </div>
  );
}

export default App;