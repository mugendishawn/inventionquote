document.addEventListener("DOMContentLoaded", () => {
  const API_KEY = "Z5wvgpVcY3tc4wd3V2NX5qZN";

  const titleEl = document.getElementById("title");
  const snippetEl = document.getElementById("snippet");
  const inventorEl = document.getElementById("inventor");
  const yearEl = document.getElementById("year");
  const generateBtn = document.getElementById("generateBtn");

  generateBtn.addEventListener("click", () => {
    titleEl.textContent = "Generating invention...";
    snippetEl.textContent = "";
    inventorEl.textContent = "";
    yearEl.textContent = "";

    const query = "famous invention";
    const url = `https://www.searchapi.io/api/v1/search?engine=google_patents&q=${encodeURIComponent(query)}&api_key=${API_KEY}`;

    fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (!data.organic_results || data.organic_results.length === 0) {
          titleEl.textContent = "No invention found.";
          return;
        }

        const patent = data.organic_results[Math.floor(Math.random() * data.organic_results.length)];

        titleEl.textContent = patent.inventor || "Unknown inventor";

        snippetEl.textContent = patent.title || "Unknown invention";
    })
})
});