let newQuote = document.querySelector(".new-quote");
let quote = document.querySelector(".quote");
let quoteAuthor = document.querySelector(".author");

// console.log(tweetBtn);

// Quote generator
newQuote.addEventListener("click", () => {
  let quoteIndex = Math.floor(Math.random() * 1643 + 1);
  fetch("https://type.fit/api/quotes")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      let { text, author } = data[quoteIndex];
      quote.innerText = text;
      quoteAuthor.innerText = author;
      //   console.log(data[quoteIndex]);
    });
});
