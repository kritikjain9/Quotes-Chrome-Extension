fetch("https://quotes15.p.rapidapi.com/quotes/random/", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "quotes15.p.rapidapi.com",
		"x-rapidapi-key": "3ccf20bac2msh121dfd2b2a2cad3p16558cjsn4a1b6e512013"
	}
})
.then(data => data.json())
.then(quoteData => {
    const quoteText = quoteData.content;
    const quoteElement = document.getElementById("quoteElement");

    quoteElement.innerHTML = quoteText;
})