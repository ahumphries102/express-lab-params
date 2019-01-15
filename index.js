let express = require('express')
let app = express() 

// app.get('/greeting/:name', (req, res) => {
//   res.send(`hello ${req.params.name}`)
// })

// let calcTip = (total, tipPercentage)=>{
// 	return total*tipPercentage/100
// }

// app.get('/tip/:total/:tipPercentage', (req, res) => {
//   res.send(`Total tip ${calcTip(req.params.total, req.params.tipPercentage)}`)
// })

let magicEight = ()=>{
	let arr = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]
	let randVal = arr[Math.floor(Math.random()*(arr.length+1))]
	
	return randVal
}
app.get('/magic/Will%20I%20Be%20A%20Millionaire', (req, res) => {
  res.send(`Shake Shake ${magicEight()}`)
})

app.listen(9000)
