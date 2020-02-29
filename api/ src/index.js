const app = require('express')()

app.get('/', (req, res) => {
    return res.send("Hello world")
})

app.listen(process.env.API_PORT || 3000)