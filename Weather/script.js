const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'fa335700b4msh02d2e7e5945dde1p168a5bjsn6fb048b809c7',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));