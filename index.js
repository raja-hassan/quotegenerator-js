const quotes = [
    {
        text: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        author: "Winston Churchill"
    },
    {
        text: "The only limit to our realization of tomorrow will be our doubts of today.",
        author: "Franklin D. Roosevelt"
    },
    {
        text: "The way to get started is to quit talking and begin doing.",
        author: "Walt Disney"
    },
    {
        text: "You miss 100% of the shots you don't take.",
        author: "Wayne Gretzky"
    },
    {
        text: "The only thing we have to fear is fear itself.",
        author: "Franklin D. Roosevelt"
    },
    {
        text: "The only true wisdom is in knowing you know nothing.",
        author: "Socrates "
    },
    {
        text: "The greatest glory in living lies not in never falling, but in rising every time we fall. ",
        author: "Nelson Mandela "
    },
    {
        text: "We can complain because rose bushes have thorns, or rejoice because thorns have roses.",
        author: "Alphonse Karr "
    },
    {
        text: "Be yourself; everyone else is already taken. ",
        author: "Oscar Wilde "
    },
    {
        text: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment. ",
        author: "Ralph Waldo Emerson. "
    },
];

function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

function displayQuote() {
    const { text, author } = getRandomQuote();
    document.getElementById("quote").textContent = text;
    document.getElementById("author").textContent = author;
}

document.getElementById("new-quote").addEventListener("click", displayQuote);
displayQuote();
