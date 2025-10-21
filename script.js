const quotes = [
  { quote: "The Eucharist is my highway to heaven.", saint: "St. Carlo Acutis" },
  { quote: "Start by doing what’s necessary; then do what’s possible; and suddenly you are doing the impossible.", saint: "St. Francis of Assisi" },
  { quote: "If you want to change the world, go home and love your family.", saint: "St. Mother Teresa" },
  { quote: "Pray, hope, and don’t worry. God is merciful.", saint: "St. Padre Pio" },
  { quote: "The future starts today, not tomorrow.", saint: "St. John Paul II" },
  { quote: "The Internet is not evil; it depends on how you use it.", saint: "St. Carlo Acutis" },
  { quote: "God has created me to do Him some definite service.", saint: "St. John Henry Newman" }
];

const quoteEl = document.getElementById("quote");
const saintEl = document.getElementById("saint");
const newQuoteBtn = document.getElementById("new-quote");
const copyBtn = document.getElementById("copy-quote");

function newQuote() {
  const random = quotes[Math.floor(Math.random() * quotes.length)];
  quoteEl.textContent = `"${random.quote}"`;
  saintEl.textContent = `– ${random.saint}`;
}

newQuoteBtn.addEventListener("click", newQuote);
copyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(`${quoteEl.textContent} ${saintEl.textContent}`);
  copyBtn.textContent = "✅ Copied!";
  setTimeout(() => copyBtn.textContent = "📋 Copy Quote", 2000);
});

newQuote();