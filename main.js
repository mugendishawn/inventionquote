const inventions = [
  { quote: "Telephone", inventor: "Alexander Graham Bell", year: "1876", link: "https://en.wikipedia.org/wiki/Telephone" },
  { quote: "Light Bulb", inventor: "Thomas Edison", year: "1879", link: "https://en.wikipedia.org/wiki/Light_bulb" },
  { quote: "Printing Press", inventor: "Johannes Gutenberg", year: "1440", link: "https://en.wikipedia.org/wiki/Printing_press" },
  { quote: "Steam Engine", inventor: "James Watt", year: "1765", link: "https://en.wikipedia.org/wiki/Steam_engine" },
  { quote: "Airplane", inventor: "Wright Brothers", year: "1903", link: "https://en.wikipedia.org/wiki/Wright_brothers" },
  { quote: "Vaccination", inventor: "Edward Jenner", year: "1796", link: "https://en.wikipedia.org/wiki/Vaccination" },
  { quote: "Radio", inventor: "Guglielmo Marconi", year: "1895", link: "https://en.wikipedia.org/wiki/Radio" },
  { quote: "Automobile", inventor: "Karl Benz", year: "1886", link: "https://en.wikipedia.org/wiki/Automobile" },
  { quote: "Computer", inventor: "Charles Babbage", year: "1837", link: "https://en.wikipedia.org/wiki/Charles_Babbage" },
  { quote: "Internet", inventor: "Vint Cerf & Bob Kahn", year: "1969", link: "https://en.wikipedia.org/wiki/Internet" }
];

function generateQuote() {
  const random = Math.floor(Math.random() * inventions.length);
  const invention = inventions[random];

  document.getElementById("quote").innerText = `"${invention.quote}"`;
  document.getElementById("inventor").innerText = `Inventor: ${invention.inventor}`;
  document.getElementById("year").innerText = `Year: ${invention.year}`;
}

document.getElementById("generateBtn").addEventListener("click", generateQuote);

generateQuote();