const quotes = [
    { text: "Believe in yourself.", author: "Unknown" },
    { text: "Success is not final, failure is not fatal.", author: "Winston Churchill" },
    { text: "Dream big and dare to fail.", author: "Norman Vaughan" },
    { text: "Stay hungry, stay foolish.", author: "Steve Jobs" },
    { text: "Hard work beats talent when talent doesn’t work hard.", author: "Tim Notke" }
];

function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote").innerText = quotes[randomIndex].text;
    document.getElementById("author").innerText = "- " + quotes[randomIndex].author;
}