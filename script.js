const quotes = [
  { quote: "The Eucharist is my highway to heaven.", saint: "St. Carlo Acutis" },
  { quote: "Start by doing what’s necessary; then do what’s possible; and suddenly you are doing the impossible.", saint: "St. Francis of Assisi" },
  { quote: "If you want to change the world, go home and love your family.", saint: "St. Mother Teresa" },
  { quote: "Pray, hope, and don’t worry. God is merciful.", saint: "St. Padre Pio" },
  { quote: "The future starts today, not tomorrow.", saint: "St. John Paul II" },
  { quote: "The Internet is not evil; it depends on how you use it.", saint: "St. Carlo Acutis" },
  { quote: "God has created me to do Him some definite service.", saint: "St. John Henry Newman" },
  { quote: "To fall in love with God is the greatest romance; to seek Him, the greatest adventure.", saint: "St. Augustine of Hippo" },
  { quote: "The blood of the martyrs is the seed of the Church.", saint: "Tertullian" },
  { quote: "Pray as though everything depended on God. Work as though everything depended on you.", saint: "St. Augustine" },
  { quote: "Faith is to believe what you do not see; the reward of faith is to see what you believe.", saint: "St. Augustine" },
  { quote: "The world offers you comfort, but you were not made for comfort. You were made for greatness.", saint: "Pope Benedict XVI" },
  { quote: "Spread love everywhere you go. Let no one ever come to you without leaving happier.", saint: "St. Mother Teresa" },
  { quote: "Christ has no body now but yours; no hands, no feet on earth but yours.", saint: "St. Teresa of Ávila" },
  { quote: "Holiness consists simply in doing God’s will, and being just what God wants us to be.", saint: "St. Thérèse of Lisieux" },
  { quote: "For me, prayer is a surge of the heart; it is a simple look turned toward heaven.", saint: "St. Thérèse of Lisieux" },
  { quote: "We must always say, ‘Thy will be done.’", saint: "St. Dominic Savio" },
  { quote: "If you are what you should be, you will set the whole world on fire!", saint: "St. Catherine of Siena" },
  { quote: "He who labors as he prays lifts his heart to God with his hands.", saint: "St. Benedict of Nursia" },
  { quote: "Let nothing disturb you, let nothing frighten you; all things pass, God never changes.", saint: "St. Teresa of Ávila" },
  { quote: "Joy is prayer; joy is strength; joy is love; joy is a net of love by which you can catch souls.", saint: "St. Mother Teresa" },
  { quote: "Do not be afraid to be saints.", saint: "St. John Paul II" },
  { quote: "Without love, deeds, even the most brilliant, count as nothing.", saint: "St. Thérèse of Lisieux" },
  { quote: "Charity is the soul of faith, it gives it life; without love, faith dies.", saint: "St. Anthony of Padua" },
  { quote: "The devil fears hearts on fire with love of God.", saint: "St. Catherine of Siena" },
  { quote: "He who trusts himself is lost. He who trusts in God can do all things.", saint: "St. Alphonsus Liguori" },
  { quote: "You learn to speak by speaking, to study by studying, to run by running, to work by working, and to love by loving.", saint: "St. Francis de Sales" },
  { quote: "God writes straight with crooked lines.", saint: "St. Teresa of Ávila" },
  { quote: "Don’t let your sins make you lose confidence in God’s mercy.", saint: "St. Augustine" },
  { quote: "The saints did not all begin well, but they ended well.", saint: "St. John Vianney" },
  { quote: "Let us love God, but with the strength of our arms, in the sweat of our brow.", saint: "St. Vincent de Paul" },
  { quote: "In the evening of life, we will be judged on love alone.", saint: "St. John of the Cross" },
  { quote: "You cannot be half a saint; you must be a whole saint or no saint at all.", saint: "St. Thérèse of Lisieux" },
  { quote: "When we pray, the voice of the heart must be heard more than that proceeding from the mouth.", saint: "St. Bonaventure" },
  { quote: "The measure of love is to love without measure.", saint: "St. Francis de Sales" },
  { quote: "Let us never forget that love is service.", saint: "St. Teresa of Calcutta" },
  { quote: "Faith in action is love, and love in action is service.", saint: "St. Mother Teresa" },
  { quote: "The saints are the sinners who keep on trying.", saint: "St. Josemaría Escrivá" },
  { quote: "The best way to prepare for the coming of Christ is never to forget His presence.", saint: "St. Francis de Sales" },
  { quote: "One act of pure love is worth a thousand imperfect prayers.", saint: "St. John Vianney" },
  { quote: "Love God, serve God; everything is in that.", saint: "St. Clare of Assisi" },
  { quote: "He who sings prays twice.", saint: "St. Augustine" },
  { quote: "The Lord is more anxious to forgive our sins than a woman is to carry her baby out of a burning building.", saint: "St. John Chrysostom" },
  { quote: "If you are humble nothing will touch you, neither praise nor disgrace, because you know what you are.", saint: "St. Mother Teresa" },
  { quote: "All the darkness in the world cannot extinguish the light of a single candle.", saint: "St. Francis of Assisi" },
  { quote: "Let us love, since that is what our hearts were made for.", saint: "St. Thérèse of Lisieux" },
  { quote: "Do not wish to be anything but what you are, and try to be that perfectly.", saint: "St. Francis de Sales" },
  { quote: "Holiness is not the luxury of the few; it is a simple duty for you and for me.", saint: "St. Mother Teresa" },
  { quote: "Love is repaid by love alone.", saint: "St. John of the Cross" }
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

// When the page loads or refreshes, pick a random quote
window.addEventListener("load", newQuote);

// Also allow user to get new quotes manually
newQuoteBtn.addEventListener("click", newQuote);

// Copy to clipboard button
copyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(`${quoteEl.textContent} ${saintEl.textContent}`);
  copyBtn.textContent = "✅ Copied!";
  setTimeout(() => (copyBtn.textContent = "📋 Copy Quote"), 2000);
});
// Saintly Sparks - Daily Streak + Level Tracker
const streakMessage = document.getElementById("streak-message");
const levelName = document.getElementById("level-name");
const progressBar = document.getElementById("level-progress");

function updateStreak() {
  const today = new Date().toDateString();
  const lastVisit = localStorage.getItem("lastVisit");
  let streak = parseInt(localStorage.getItem("streak")) || 0;

  if (lastVisit === today) {
    streakMessage.textContent = `You've already viewed your Saintly Spark today! 🌞`;
  } else {
    if (lastVisit) {
      const diffDays = Math.floor(
        (new Date(today) - new Date(lastVisit)) / (1000 * 60 * 60 * 24)
      );
      if (diffDays === 1) {
        streak++;
      } else if (diffDays > 1) {
        streak = 1;
      }
    } else {
      streak = 1;
    }

    localStorage.setItem("streak", streak);
    localStorage.setItem("lastVisit", today);
    streakMessage.textContent = `You've viewed your Saintly Spark for ${streak} day${streak > 1 ? "s" : ""} in a row! 🔥 Keep shining!`;
  }

  // Define levels
  let level = "🌱 Beginner";
  let progress = (streak % 7) * (100 / 7); // Each week fills bar
  if (streak >= 7 && streak < 14) level = "🌼 Faith Builder";
  if (streak >= 14 && streak < 21) level = "🔥 Faith Warrior";
  if (streak >= 21 && streak < 30) level = "🌟 Spirit Shiner";
  if (streak >= 30) level = "👑 Eternal Spark";

  levelName.textContent = `Level: ${level}`;
  progressBar.style.width = `${progress}%`;
}

updateStreak();



