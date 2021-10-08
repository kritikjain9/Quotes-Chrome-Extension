fetch("https://icanhazdadjoke.com/slack")
.then(data => data.json())
.then(quoteData => {
    const quoteText = quoteData.attachments[0].text;
    const quoteElement = document.getElementById("quoteElement");

    quoteElement.innerHTML = quoteText;
})