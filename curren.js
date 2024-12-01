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
	}

	return await response.json();
}

//NGN/EUR = 1661.0797 / 0.9452 ≈ 1756.26 NGN/EUR

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

btn.addEventListener('click', async () => {
	//event.preventDefault()

	try {
		const ratesdata = await getrates()
		console.log(ratesdata)
		destructure(ratesdata)
		calculation()

	} catch (error) {
		console.error(error)
	}
})

/*
currencies.forEach(option => {
	const optionElement = document.createElement('option');
	optionElement.textContent = option;
	optionElement.classList = 'them'
	optionElement.value = option;
	// Set the value attribute if needed
	fromOption.appendChild(optionElement);
});

currencies.forEach(option => {
	const optionElement = document.createElement('option');
	optionElement.textContent = option;
	optionElement.classList = 'them'
	optionElement.value = option;
	// Set the value attribute if needed
	toOption.appendChild(optionElement)
});

currencies.forEach(option => {
	const optionElement = document.createElement('option');
	optionElement.classList = 'them'
	option.forEach(item => {
		const div = document.createElement('div');
		const div2 = document.createElement('div');
		div = option[0]
		div2 = option[1]
		optionElement.value = option[0];
	})
	toOption.appendChild(optionElement)
})
*/

currencies.forEach(options => {
	console.log("code:" + options.code);
	console.log("CurrencyName:" + options.CurrencyName);

	if (Array.isArray(options.CountryName)) {
		//console.log("myVariable is an array!");
		console.log("CountryName:" + options.CountryName[0])
	} else {
		//console.log("myVariable is not an array") 
	    console.log("CountryName:" + options.CountryName)
	}
})


if ("array".includes("arr")) {   // the search.value should be arr 
	console.log('true')
} else {
	console.log('false')
}