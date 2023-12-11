document.getElementById("caption").innerHTML = `<h1>Quote of the Day</h1>  
   <p>Press the button below to recieve a random quote!</p>
   <button onclick = "getQuote()">New Quote</button>
`;
var prevNumber = -1;

function getQuote() {
  var allQuotes = [
    {
      quote: "“Be yourself; everyone else is already taken.”",
      author: "― Oscar Wilde",
    },
    {
      quote: "“So many books, so little time.”",
      author: "― Frank Zappa",
    },
    {
      quote:
        "“Perhaps one did not want to be loved so much as to be understood.”",
      author: "― George Orwell, 1984",
    },
    {
      quote: "“A room without books is like a body without a soul.”",
      author: "― Marcus Tullius Cicero",
    },
    {
      quote: "“You only live once, but if you do it right, once is enough.”",
      author: "― Mahatma Gandhi",
    },
    {
      quote:
        "“A friend is someone who knows all about you and still loves you.”",
      author: "― Elbert Hubbard",
    },
    {
      quote: "“Be the change that you wish to see in the world.”",
      author: "― Mae West",
    },
    {
      quote: "“If you tell the truth, you don't have to remember anything.”",
      author: "― Mark Twain",
    },
    {
      quote: "“The only way out of the labyrinth of suffering is to forgive.”",
      author: "― John Green",
    },
    {
      quote: "“Knowing yourself is the beginning of all wisdom.”",
      author: "― Aristotle",
    },
    {
      quote: "“Always forgive your enemies; nothing annoys them so much.”",
      author: "― Oscar Wilde",
    },
    {
      quote:
        "“To live is the rarest thing in the world. Most people exist, that is all.”",
      author: "― Oscar Wilde",
    },
    {
      quote:
        "“Some people never go crazy. What truly horrible lives they must lead.”",
      author: "― Charles Bukowski",
    },
    {
      quote: "“It matters not what someone is born, but what they grow to be.”",
      author: "― J.K. Rowling, Harry Potter and the Goblet of Fire",
    },
    {
      quote:
        "“The difference between genius and stupidity is: genius has its limits.”",
      author: "― Alexandre Dumas-fils",
    },
    {
      quote: "“If you can make a woman laugh, you can make her do anything.”",
      author: "― Marilyn Monroe",
    },
    {
      quote: "“Do one thing every day that scares you.”",
      author: "― Eleanor Roosevelt",
    },
    {
      quote: "“The only true wisdom is in knowing you know nothing.”",
      author: "― Socrates",
    },
    {
      quote: "“A day without laughter is a day wasted.”",
      author: "― Nicolas Chamfort",
    },
    {
      quote:
        "“Perhaps one did not want to be loved so much as to be understood.”",
      author: "― George Orwell, 1984",
    },
  ];

  do {
    var number = Math.floor(Math.random() * allQuotes.length);
  } while (number === prevNumber);
  prevNumber = number;

  document.getElementById("demo").innerHTML = `
     <p>${allQuotes[number].quote}</p>
     <span>${allQuotes[number].author}</span>`;
  // document.getElementById("demo").innerHTML =
  //   allQuotes[number].quote + "<br/>" + allQuotes[number].author;
}
