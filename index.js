let express = require('express')
let app = express() 

app.get('/greeting/:name', (req, res) => {
  res.send(`hello ${req.params.name}`)
})

// app.get('/:book',(req,res)=>{
// 	let book = fileStream.readStream(`book/$(req.params.book).txt`)
// 	book.pipe(response)
// })

app.listen(9000)