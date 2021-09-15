let tooltip = document.querySelector(".tooltip");
let tweetBtn = document.querySelector("button.tweet");
let newQuote = document.querySelector(".new-quote");

console.log(tweetBtn);

newQuote.addEventListener(onclick, (e) => {
  e.preventDefault();
  console.log("clicked!!");
});
