let express = require('express')
let app = express()

app.use('/assets', express.static('public'))
app.set('view engine', 'ejs')


app.get("/", (request, response) => {
    response.render("./Layouts/home-view")
})


app.listen(80)