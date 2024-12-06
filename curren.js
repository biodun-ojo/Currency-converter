console.log('pops go feel am')

const btn = document.getElementById('btn')
const input = document.getElementById('input')
const output = document.getElementById('output')
// const fromOption = document.getElementById('fromOption')
// const toOption = document.getElementById('toOption')
const fromSearch = document.getElementById('fromSearch')
const diaplayDiv = document.getElementById('newShow')
const fromSearch2 = document.getElementById('fromSearch2')
const diaplayDiv2 = document.getElementById('newShow2')
const catchz = 'f1db9cf4fbef7c0ff586c168'


async function getrates() {
	let api = ` https://v6.exchangerate-api.com/v6/f1db9cf4fbef7c0ff586c168/latest/USD`

	const response = await fetch(api)

	if (!response.ok) {
		throw new Error('could not fethc IP data')
	}

	return await response.json();
}

//NGN/EUR = 1661.0797 / 0.9452 ≈ 1756.26 NGN/EUR

// console.log(fromSearch.value)
// console.log(fromSearch2.value)

let inp;
let out;

function destructure(data) {
	let inputValue = fromSearch.value
	let wantedOutput = fromSearch2.value

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

	console.log(`${toInputValue} ${fromSearch.value}/${fromSearch2.value} or ${fromSearch2.value}`)

	output.textContent = `${fromIputValue} ${fromSearch.value} = ${roundedNumber} ${fromSearch2.value}`
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

//const pickMe = document.querySelectorAll('.them')


fromSearch.addEventListener('input', () => {

	//console.log('hello')
	diaplayDiv.innerHTML = ''

	const fromSearchz = document.getElementById('fromSearch')


	currencies.forEach(options => {

		if ((options.code.includes(fromSearchz.value.toUpperCase())) || (options.CurrencyName.toUpperCase().includes(fromSearchz.value.toUpperCase())) || ((!(Array.isArray(options.CountryName))) && options.CountryName.toUpperCase().includes(fromSearchz.value.toUpperCase()))) {   // the search.value should be arr 
			console.log(options.code + "  " + options.CurrencyName + "  " /* options.CountryName */)
			//display to DOM

			const drops = document.createElement('div');
			drops.classList = 'them'
			const codeDiv = document.createElement('div');
			codeDiv.textContent = options.code;
			const currencyNameDiv = document.createElement('div');
			currencyNameDiv.textContent = options.CurrencyName;
			drops.appendChild(codeDiv)
			drops.appendChild(currencyNameDiv)
			diaplayDiv.appendChild(drops)


		} else if (Array.isArray(options.CountryName)) {
			for (let i = 0; i < options.CountryName.length; i++) {
				if (options.CountryName[i].toUpperCase().includes(fromSearchz.value.toUpperCase())) {
					console.log(options.code + "  " + options.CurrencyName + "  " /*+ options.CountryName[i] */)

					const drops = document.createElement('div');
					drops.classList = 'them'
					const codeDiv = document.createElement('div');
					codeDiv.textContent = options.code;
					const currencyNameDiv = document.createElement('div');
					currencyNameDiv.textContent = options.CurrencyName;
					drops.appendChild(codeDiv)
					drops.appendChild(currencyNameDiv)
					diaplayDiv.appendChild(drops)
				}
			}
			console.log(' ')
		} else {
			//diaplayDiv.innerHTML = ''
		}
	})


	if (fromSearchz.value === '') {
		diaplayDiv.innerHTML = ''
	}
})


setInterval( () => {
	console.clear()
	//console.log('bolu na my guy')
	const pickMe = document.querySelectorAll('.them')
	console.log(pickMe)
	pickMe.forEach ( divs => {
		divs.addEventListener('click', () => {
			//console.log('e work??')
			console.log(divs.firstElementChild.textContent)
			fromSearch.value = divs.firstElementChild.textContent
			diaplayDiv.innerHTML = ''
		})
	})
}, 1000)




fromSearch2.addEventListener('input', () => {

	//console.log('hello')
	diaplayDiv2.innerHTML = ''

	const fromSearch2z = document.getElementById('fromSearch2')


	currencies.forEach(options => {

		if ((options.code.includes(fromSearch2z.value.toUpperCase())) || (options.CurrencyName.toUpperCase().includes(fromSearch2z.value.toUpperCase())) || ((!(Array.isArray(options.CountryName))) && options.CountryName.toUpperCase().includes(fromSearch2z.value.toUpperCase()))) {   // the search.value should be arr 
			console.log(options.code + "  " + options.CurrencyName + "  " /* options.CountryName */)
			//display to DOM

			const drops = document.createElement('div');
			drops.classList = 'them2'
			const codeDiv = document.createElement('div');
			codeDiv.textContent = options.code;
			const currencyNameDiv = document.createElement('div');
			currencyNameDiv.textContent = options.CurrencyName;
			drops.appendChild(codeDiv)
			drops.appendChild(currencyNameDiv)
			diaplayDiv2.appendChild(drops)


		} else if (Array.isArray(options.CountryName)) {
			for (let i = 0; i < options.CountryName.length; i++) {
				if (options.CountryName[i].toUpperCase().includes(fromSearch2z.value.toUpperCase())) {
					console.log(options.code + "  " + options.CurrencyName + "  " /*+ options.CountryName[i] */)

					const drops = document.createElement('div');
					drops.classList = 'them2'
					const codeDiv = document.createElement('div');
					codeDiv.textContent = options.code;
					const currencyNameDiv = document.createElement('div');
					currencyNameDiv.textContent = options.CurrencyName;
					drops.appendChild(codeDiv)
					drops.appendChild(currencyNameDiv)
					diaplayDiv2.appendChild(drops)
				}
			}
			console.log(' ')
		} else {
			//diaplayDiv.innerHTML = ''
		}
	})


	if (fromSearch2z.value === '') {
		diaplayDiv2.innerHTML = ''
	}
})


setInterval( () => {
	console.clear()
	//console.log('bolu na my guy2')
	const pickMe = document.querySelectorAll('.them2')
	console.log(pickMe)
	pickMe.forEach ( divs => {
		divs.addEventListener('click', () => {
			//console.log('e work??')
			console.log(divs.firstElementChild.textContent)
			fromSearch2.value = divs.firstElementChild.textContent
			diaplayDiv2.innerHTML = ''
		})
	})
}, 1000)