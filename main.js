

(function () {
    const btn = document.getElementById("btn");
    const allQuotes = [
        {

            quote: "If opportunity doesn’t knock, build a door.",

            author: "Milton Berle"
        },

        {

            quote: "Whenever you find yourself on the side of the majority, it is time to pause and reflect.",

            author: "Mark Twain"
        },

        {

            quote: "I haven’t failed. I’ve just found 10,000 ways that won’t work.",

            author: "Thomas Edison"
        },

        {

            quote: "The difference between ordinary and extraordinary is that little extra",

            author: "Jimmy Johnson"
        },

        {

            quote: "Believe you can and you’re halfway there.",

            author: " Theodore Roosevelt"
        },

        {

            quote: "If you want to lift yourself up, lift up someone else.",

            author: " Booker T. Washington"
        },

        {

            quote: "A person who never made a mistake never tried anything new",

            author: " Albert Einstein"
        },

        {

            quote: "Great minds discuss ideas; average minds discuss events; small minds discuss people.",

            author: " Eleanor Roosevelt"
        },

        {

            quote: "For every minute you are angry, you lose sixty seconds of happiness.",

            author: " Ralph Waldo Emerson"
        },

        {

            quote: "Courage doesn’t always roar. Sometimes courage is the little voice at the end of the day that says 'I’ll try again tomorrow.'",

            author: " Mary Anne Radmacher"
        },
    ];


    btn.addEventListener("click", function () {
        let index = Math.floor(Math.random() * allQuotes.length);

        document.querySelector(".main-quote").innerHTML = allQuotes[index].quote;
        document.querySelector(".author").innerHTML = allQuotes[index].author;
    });
})();