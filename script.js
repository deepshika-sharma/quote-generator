let newQuote = document.querySelector(".new_quote");
let quote = document.querySelector(".quote");
let quoteAuthor = document.querySelector(".author");
let tweet = document.querySelector(".tweet");
let loader = document.querySelector(".loader");
let card = document.querySelector(".card");

// console.log(tweetBtn);

let quotes = [];

const showLoader = () => {
  loader.hidden = false;
  card.style.display = "none";
};

const hideLoader = () => {
  loader.hidden = true;
  card.style.display = "block";
};

// Quote generator
const getQuote = async () => {
  showLoader();
  const apiUrl = "https://type.fit/api/quotes";
  try {
    const response = await fetch(apiUrl);
    quotes = await response.json();
    setQuote(quotes);
    // quote.innerText = quotes[0].text;
    // quoteAuthor.innerText = quotes[0].author;
  } catch (error) {}
};

const setQuote = (quotes) => {
  showLoader();
  // Random quotes from the array of quotes
  // console.log(quotes.length);
  let quoteIndex = Math.floor(Math.random() * quotes.length + 1);
  let { text, author } = quotes[quoteIndex];
  quote.textContent = text;

  // no author
  if (!author) {
    quoteAuthor.textContent = "Anonymous";
  } else {
    quoteAuthor.textContent = author;
  }
  hideLoader();
  //   console.log(data[quoteIndex]);
};

// Tweet a quote
const tweetQuote = () => {
  // getting the current quote and author
  let tweetText = quote.textContent;
  let tweetAuthor = quoteAuthor.textContent;
  let twitterUrl = `https://twitter.com/intent/tweet?text=${tweetText} - ${tweetAuthor}`;

  window.open(twitterUrl, "_blank");
};

// Event Listeners
newQuote.addEventListener("click", () => {
  setQuote(quotes);
});
tweet.addEventListener("click", tweetQuote);

// on Load
getQuote();
