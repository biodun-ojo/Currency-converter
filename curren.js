console.log('pops go feel am')

const btn = document.getElementById('btn')
const input = document.getElementById('input')
const output = document.getElementById('output')
const fromOption = document.getElementById('fromOption')
const toOption = document.getElementById('toOption')
const catchz = 'f1db9cf4fbef7c0ff586c168'

let api = ` https://v6.exchangerate-api.com/v6/f1db9cf4fbef7c0ff586c168/latest/USD`

async function getrates() {
	let api = ` https://v6.exchangerate-api.com/v6/f1db9cf4fbef7c0ff586c168/latest/USD`

	const response = await fetch(api)

	if (!response.ok) {
		throw new Error('could not fethc IP data')
		//console.log('could not fethc IP data')
	}

	return await response.json();
}


//NGN/EUR = 1661.0797 / 0.9452 ≈ 1756.26 NGN/EUR

/* 
let inputValue = fromOption.value
let wantedOutput = toOption.value
*/

console.log(fromOption.value)
console.log(toOption.value)

let inp;
let out;

function destructure(data) {
	let inputValue = fromOption.value
	let wantedOutput = toOption.value

	const {
		conversion_rates: {
			[inputValue]: inputRate,
			[wantedOutput]: outputRate
		}
	} = data

	console.log(inputRate)
	console.log(outputRate)

	inp = inputRate
	out = outputRate
}

/*
fromOption.addEventListener('change', () => {
	const selectedValue = fromOption.value;
	console.log('Selected  value: ', selectedValue);

	// You can now use the selectedValue in your JavaScript code
	// For example, you can send it to a server using AJAX, or use it to update other elements on the page
});
*/




function calculation() {
	let convertingFromRate = inp;   //NGN
	let convertingToRate = out;     //EUR

	oneUnitRate = convertingFromRate / convertingToRate  //NGN rates to EUR for 1 EUR
	//somethig like NGN/EUR = 1661.0797 / 0.9452 ≈ 1756.26 NGN/EUR to get how naira is to euros

	let fromIputValue = input.value;

	toOutput = fromIputValue / oneUnitRate  //how much EUR you can get from an amount of NGN

	let toInputValue = toOutput

	let roundedNumber = toInputValue.toFixed(2)

	console.log(`${toInputValue} ${fromOption.value}/${toOption.value} or ${toOption.value}`)

	output.textContent = `${fromIputValue} ${fromOption.value} = ${roundedNumber} ${toOption.value}`
}



/*
function convertCurrency(amount, fromCurrency, toCurrency, exchangeRates) {
	// Get the exchange rates for both currencies
	const fromRate = exchangeRates[fromCurrency];
	const toRate = exchangeRates[toCurrency];

	// Calculate the exchange rate between the two currencies
	const exchangeRate = fromRate / toRate;

	// Convert the amount to the target currency
	const convertedAmount = amount * exchangeRate;

	return convertedAmount;
}

// Example usage:
const exchangeRates = {
	EUR: 1.10, // 1 EUR = 1.10 USD
	GBP: 1.25, // 1 GBP = 1.25 USD

const amount = 100;
const fromCurrency = "EUR";
const toCurrency = "GBP";

const result = convertCurrency(amount, fromCurrency, toCurrency, exchangeRates);
console.log(`${amount} ${fromCurrency} is equal to ${result} ${toCurrency}`);
*/




btn.addEventListener('click', async () => {
	//event.preventDefault()

	//let themain = adderss.value;

	try {
		const ratesdata = await getrates()
		console.log(ratesdata)
		destructure(ratesdata)
		calculation()
		/*
		const IPAddressData = await getIPAddress(themain)
		console.log(IPAddressData)
		destructure(IPAddressData)
		const convert = await ipToLongAndLatConverter(themain)
		console.log(convert)
		IpDestructure(convert)
		updateMap(lati, long)
		*/
	} catch (error) {
		console.error(error)
		//displayError(error)
	}


})




currencies = [
	"AED",

	"AFN",

	"ALL",

	"AMD",

	"ANG",

	"AOA",

	"ARS",

	"AUD",

	"AWG",

	"AZN",

	"BAM",

	"BBD",

	"BDT",

	"BGN",

	"BHD",

	"BIF",

	"BMD",

	"BND",

	"BOB",

	"BRL",

	"BSD",

	"BTN",

	"BWP",

	"BYN",

	"BZD",

	"CAD",

	"CDF",

	"CHF",

	"CLP",

	"CNY",

	"COP",

	"CRC",

	"CUP",

	"CVE",

	"CZK",

	"DJF",

	"DKK",

	"DOP",

	"DZD",

	"EGP",

	"ERN",

	"ETB",

	"EUR",

	"FJD",

	"FKP",

	"FOK",

	"GBP",

	"GEL",

	"GGP",

	"GHS",

	"GIP",

	"GMD",

	"GNF",

	"GTQ",

	"GYD",

	"HKD",

	"HNL",

	"HRK",

	"HTG",

	"HUF",

	"IDR",

	"ILS",

	"IMP",

	"INR",

	"IQD",

	"IRR",

	"ISK",

	"JEP",

	"JMD",

	"JOD",

	"JPY",

	"KES",

	"KGS",

	"KHR",

	"KID",

	"KMF",

	"KRW",

	"KWD",

	"KYD",

	"KZT",

	"LAK",

	"LBP",

	"LKR",

	"LRD",

	"LSL",

	"LYD",

	"MAD",

	"MDL",

	"MGA",

	"MKD",

	"MMK",

	"MNT",

	"MOP",

	"MRU",

	"MUR",

	"MVR",

	"MWK",

	"MXN",

	"MYR",

	"MZN",

	"NAD",

	"NGN",

	"NIO",

	"NOK",

	"NPR",

	"NZD",

	"OMR",

	"PAB",

	"PEN",

	"PGK",

	"PHP",

	"PKR",

	"PLN",

	"PYG",

	"QAR",

	"RON",

	"RSD",

	"RUB",

	"RWF",

	"SAR",

	"SBD",

	"SCR",

	"SDG",

	"SEK",

	"SGD",

	"SHP",

	"SLE",

	"SLL",

	"SOS",

	"SRD",

	"SSP",

	"STN",

	"SYP",

	"SZL",

	"THB",

	"TJS",

	"TMT",

	"TND",

	"TOP",

	"TRY",

	"TTD",

	"TVD",

	"TWD",

	"TZS",

	"UAH",

	"UGX",

	"USD",

	"UYU",

	"UZS",

	"VES",

	"VND",

	"VUV",

	"WST",

	"XAF",

	"XCD",

	"XDR",

	"XOF",

	"XPF",

	"YER",

	"ZAR",

	"ZMW",

	"ZWL",
]


const show = document.getElementById('show')
const show2 = document.getElementById('show2')

currencies.forEach(option => {
	const optionElement = document.createElement('option');
	optionElement.textContent = option;
	optionElement.classList = 'them'
	optionElement.value = option;
	// Set the value attribute if needed
	fromOption.appendChild(optionElement);
	//toOption.appendChild(optionElement)
	//show2.appendChild(optionElement);
});

currencies.forEach(option => {
	const optionElement = document.createElement('option');
	optionElement.textContent = option;
	optionElement.classList = 'them'
	optionElement.value = option;
	// Set the value attribute if needed
	//fromOption.appendChild(optionElement);
	toOption.appendChild(optionElement)
	//show2.appendChild(optionElement);
});

/*
fromOption.addEventListener('click', () => {

	//show.style.display = 'block'

	currencies.forEach(option => {
		const optionElement = document.createElement('option');
		//optionElement.textContent = option;
		optionElement.classList = 'them'
		//optionElement.value = option;
		// Set the value attribute if needed
		fromOption.appendChild(optionElement);
		//show2.appendChild(optionElement);
	});

	const them = document.getElementsByClassName('them')

	console.log(them)

	/* 
	if (them) {
		them.forEach(element => {
			element.addEventListener('click', () => {
				fromOption.textContent = option
				//show.style.display = 'none'
				// Do something when the element is clicked
				console.log('Element clicked:', element.textContent);
			});
		});
	} else {
		console.log('not available')
	}
	
}) */




/*

const them = document.getElementsByClassName('them')

them.forEach(element => {
	element.addEventListener('click', () => {
		fromOption.textContent = option
		show.style.display = 'none'
		// Do something when the element is clicked
		console.log('Element clicked:', element.textContent);
	});
});

them.addEventListener('click', () => {
	fromOption.textContent = option
	show.style.display = 'none'

})

currencies.forEach(option => {
	const optionElement = document.createElement('option');
	optionElement.textContent = option;
	optionElement.value = option;
	// Set the value attribute if needed
	show.appendChild(optionElement);
	//show2.appendChild(optionElement);

});
*/