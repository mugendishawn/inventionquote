const API_KEY = "Z5wvgpVcY3tc4wd3V2NX5qZN"; 
const generateBtn = document.getElementById("generateBtn");

const quoteEl = document.getElementById("quote");
const inventorEl = document.getElementById("inventor");
const yearEl = document.getElementById("year");

generateBtn.addEventListener("click", () => {
  quoteEl.textContent = "Generating invention...";
  inventorEl.textContent = "";
  yearEl.textContent = "";

  const query = "famous invention";

  const url = `https://www.searchapi.io/api/v1/search?engine=google_patents&q=${encodeURIComponent(query)}&api_key=${API_KEY}`;

  fetch(url)
    .then(res => res.json())
    .then(data => {
     console.log("API RESPONSE:", data);

      if (!data.organic_results || data.organic_results.length === 0) {
        quoteEl.textContent = "No invention found.";
        return;
      }

      const patent =
        data.organic_results[
          Math.floor(Math.random() * data.organic_results.length)
        ];

      quoteEl.textContent = `"${patent.title || "Unknown invention"}"`;

      inventorEl.textContent =
        patent.inventors && patent.inventors.length > 0
          ? `— ${patent.inventors.join(", ")}`
          : "— Inventor not listed";

      let year = "Year unknown";
      if (patent.publication_number) {
        const match = patent.publication_number.match(/\d{4}/);
        if (match) year = match[0];
      }

      yearEl.textContent = year;
    })
    .catch(err => {
      console.error(err);
      quoteEl.textContent = "Error generating invention.";
    });
});
