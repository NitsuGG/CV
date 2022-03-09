let express = require('express')
const jauge = require('./public/Script/jauge')
let app = express()

app.use(express.urlencoded({ extended: false})) //Utilisé pour receptionné les donnée d'un formulaire
app.use(express.json())

app.use('/assets', express.static('public'))
app.set('view engine', 'ejs')


app.get("/", (request, response) => {

    response.render("./Layouts/home-view")
})


app.listen(80)