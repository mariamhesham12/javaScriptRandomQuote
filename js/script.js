var quotes = [
  `“Be yourself; everyone else is already taken.”<br>
        ― Oscar Wilde`,
  `“A room without books is like a body without a soul.”<br>
       ― Marcus Tullius Cicero`,
  `“Be the change that you wish to see in the world.”<br>
        ― Mahatma Gandhi`,
  `“You only live once, but if you do it right, once is enough.”<br>
        ― Mae West`,
  `“In three words I can sum up everything I've learned about life: it goes on.”<br>
        ― Robert Frost`,
];

var lastIndex = -1;
var randomIndex;
function getRandomQuote(){
do{
randomIndex = Math.floor(Math.random() * quotes.length);}
while(lastIndex===randomIndex)

lastIndex=randomIndex

var quote=`<p>${quotes[randomIndex]}</p>`
document.getElementById("quoteBox").innerHTML=quote
}