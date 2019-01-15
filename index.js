let express = require('express')
let app = express() 

// app.get('/greeting/:name', (req, res) => {
//   res.send(`hello ${req.params.name}`)
// })

let calcTip = (total, tipPercentage)=>{
	return total*tipPercentage/100
}

app.get('/tip/:total/:tipPercentage', (req, res) => {
  res.send(`Total tip ${calcTip(req.params.total, req.params.tipPercentage)}`)
})

app.listen(9000)
