const express = require('express');
const axios = require('axios')
const app = express();
const cors = require('cors')

const dotenv = require('dotenv');
dotenv.config({path: './config.env'});
app.use(cors())
app.use(express.json())

app.get('/api/v1/',(req, res, next)=>{
    res.send('Success')
});
app.post('/api/v1/weather', async (req, res, next)=>{
    console.log(req.body.city)
    var datafails;
    const {city} = req.body
    const data = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY_B}&units=metric`).catch((err)=>{
        datafails=null
    })
    if(data){
        const d = new Date(Date.now())
        console.log(`Sending Success response at ${d.toString()}`)
        res.status(200).json({
            status: true,
            data: data.data
        })
    }
    else{
        console.log(`Sending fail response at ${Date.now().toString()}`)
        res.status(200).json({
            status: false,
        })
    }
});

const PORT = process.env.PORT || 5000
app.listen(PORT, (err)=>{
    if(err) console.log(err)
    else console.log('listening at port 5000...')
})

