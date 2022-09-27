const { allCities , cityId, cityEdit } = require("../models/cityModels")


const allCityController = async (req, res) => {
    
    try {
        const data = await allCities()
        return res.status(200).send(data)
    } catch (error) {
        console.log("error backend allCityController")
        return res.status(400).send({
            error: true,
            mensaje:'Error al obtener las ciudades'
        })
    }
}

const allCityIdController = async (req, res) => {
    const {id} = req.params
    try {
        const data = await cityId(id)
        return res.status(200).send(data)
    } catch (error) {
        console.log("error backend allCityIdController")
        return res.status(400).send({
            error: true,
            mensaje:'Error al obtener la ciudad'
        })
    }
}

const editCityController = async (req, res) => {
    const {city} = req.params
    const {monday,tuesday,wednesday,thursday,friday,saturday,sunday,monday_max,monday_min,tuesday_max, 
        tuesday_min,wednesday_max,wednesday_min,thursday_max,thursday_min,friday_max,friday_min,saturday_max,saturday_min,
        sunday_max,sunday_min,monday_img,tuesday_img,wednesday_img,thursday_img,friday_img,saturday_img,sunday_img} = req.body
    
        try {
        const data = await cityEdit(city,monday,tuesday,wednesday,thursday,friday,saturday,sunday,monday_max,monday_min,tuesday_max, 
            tuesday_min,wednesday_max,wednesday_min,thursday_max,thursday_min,friday_max,friday_min,saturday_max,saturday_min,
            sunday_max,sunday_min,monday_img,tuesday_img,wednesday_img,thursday_img,friday_img,saturday_img,sunday_img)
        return res.status(200).send(data)
    } catch (error) {
        console.log("error backend allCityIdController")
        return res.status(400).send({
            error: true,
            mensaje:'Error al obtener la ciudad'
        })
    }
}
editCityController

module.exports = {
    allCityController,
    allCityIdController,
    editCityController
}