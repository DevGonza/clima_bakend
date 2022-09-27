const { allTemperatures, idCityTemperatures, dayCityTemperatures } = require("../models/temperaturesModels")


const allTemperatureController = async (req, res) => {
    
    try {
        const data = await allTemperatures()
        return res.status(200).send(data)
    } catch (error) {
        console.log("error backend allProductsController")
        return res.status(400).send({
            error: true,
            mensaje:'Error al obtener las temperaturas'
        })
    }
}

const cityIdTemperatureController = async (req, res) => {
    const {id_city,friday} = req.params

    try {
        const data = await idCityTemperatures(id_city,friday)
        return res.status(200).send(data)
    } catch (error) {
        console.log("error backend cityIdTemperatureController")
        return res.status(400).send({
            error: true,
            mensaje:'Error al obtener la temperatura por id'
        })
    }
}

const dayTemperatureController = async (req, res) => {
    const {city} = req.params
    const {Week_day,date_weather,Twelve_AM,One_AM,Two_AM,Three_AM,Four_AM,Five_AM,Six_AM,Seven_AM,Eight_AM,
    Nine_AM,Ten_AM,Eleven_AM,Twelve_PM,One_PM,Two_PM,Three_PM,Four_PM,Five_PM,Six_PM,Seven_PM,Eight_PM,
    Nine_PM,Ten_PM,Eleven_PM,Forecast_Twelve_AM,Forecast_One_AM,Forecast_Two_AM,Forecast_Three_AM,Forecast_Four_AM,
    Forecast_Five_AM,Forecast_Six_AM,Forecast_Seven_AM,Forecast_Eight_AM,Forecast_Nine_AM,Forecast_Ten_AM,Forecast_Eleven_AM,
    Forecast_Twelve_PM,Forecast_One_PM,Forecast_Two_PM,Forecast_Three_PM,Forecast_Four_PM,Forecast_Five_PM,Forecast_Six_PM,
    Forecast_Seven_PM,Forecast_Eight_PM,Forecast_Nine_PM,Forecast_Ten_PM,Forecast_Eleven_PM,img_Twelve_AM,img_One_AM,img_Two_AM,
    img_Three_AM,img_Four_AM,img_Five_AM,img_Six_AM,img_Seven_AM,img_Eight_AM,img_Nine_AM,img_Ten_AM,img_Eleven_AM,img_Twelve_PM,
    img_One_PM,img_Two_PM,img_Three_PM,img_Four_PM,img_Five_PM,img_Six_PM,img_Seven_PM,img_Eight_PM,img_Nine_PM,img_Ten_PM,
    img_Eleven_PM} = req.body

    try {
        const data = await dayCityTemperatures(city,Week_day,date_weather,Twelve_AM,One_AM,Two_AM,Three_AM,Four_AM,Five_AM,Six_AM,Seven_AM,Eight_AM,
            Nine_AM,Ten_AM,Eleven_AM,Twelve_PM,One_PM,Two_PM,Three_PM,Four_PM,Five_PM,Six_PM,Seven_PM,Eight_PM,
            Nine_PM,Ten_PM,Eleven_PM,Forecast_Twelve_AM,Forecast_One_AM,Forecast_Two_AM,Forecast_Three_AM,Forecast_Four_AM,
            Forecast_Five_AM,Forecast_Six_AM,Forecast_Seven_AM,Forecast_Eight_AM,Forecast_Nine_AM,Forecast_Ten_AM,Forecast_Eleven_AM,
            Forecast_Twelve_PM,Forecast_One_PM,Forecast_Two_PM,Forecast_Three_PM,Forecast_Four_PM,Forecast_Five_PM,Forecast_Six_PM,
            Forecast_Seven_PM,Forecast_Eight_PM,Forecast_Nine_PM,Forecast_Ten_PM,Forecast_Eleven_PM,img_Twelve_AM,img_One_AM,img_Two_AM,
            img_Three_AM,img_Four_AM,img_Five_AM,img_Six_AM,img_Seven_AM,img_Eight_AM,img_Nine_AM,img_Ten_AM,img_Eleven_AM,img_Twelve_PM,
            img_One_PM,img_Two_PM,img_Three_PM,img_Four_PM,img_Five_PM,img_Six_PM,img_Seven_PM,img_Eight_PM,img_Nine_PM,img_Ten_PM,
            img_Eleven_PM)
        return res.status(200).send(data)
    } catch (error) {
        console.log("error backend dayCityTemperatures")
        return res.status(400).send({
            error: true,
            mensaje:'Error al obtener la temperatura por hora'
        })
    }
}


module.exports = {
    allTemperatureController,
    cityIdTemperatureController,
    dayTemperatureController
}





