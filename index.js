const express = require('express')
const app = express()
const PORT = 3000

app.get('/', function (req, res) {
  console.log("Adres IP: " + req.ip);
  res.send("Adres IP: " + req.ip + " <br/> Obecna data: " + new Date);
});

app.listen(PORT, () => {
  console.log(`Data uruchomienia: ${new Date}`)
  console.log(`Imię i nazwisko: Jakub Nowakowski`)
  console.log(`Port TCP: ${PORT}`)
}) 