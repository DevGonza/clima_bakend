const {request} = require('../db/config')


const allCities = async () => {
    const data = await request("SELECT * FROM city")
    
    return {
        data,
        error: false
    }
}

const cityId = async (id) => {
    const data = await request(`SELECT * FROM city WHERE id = ${id}`)
    
    return {
        data,
        error: false
    }
}

const cityEdit = async (city,monday,tuesday,wednesday,thursday,friday,saturday,sunday,monday_max,monday_min,tuesday_max, 
    tuesday_min,wednesday_max,wednesday_min,thursday_max,thursday_min,friday_max,friday_min,saturday_max,saturday_min,
    sunday_max,sunday_min,monday_img,tuesday_img,wednesday_img,thursday_img,friday_img,saturday_img,sunday_img) => {
    console.log(monday)
    const data = await request(`
    UPDATE city 
    SET monday='${monday}',tuesday='${tuesday}',wednesday='${wednesday}',thursday='${thursday}',friday='${friday}',saturday='${saturday}',sunday='${sunday}',monday_max=${monday_max},monday_min=${monday_min},tuesday_max=${tuesday_max},
    tuesday_min=${tuesday_min},wednesday_max=${wednesday_max},wednesday_min=${wednesday_min},thursday_max=${thursday_max},thursday_min=${thursday_min},friday_max=${friday_max},friday_min=${friday_min},saturday_max=${saturday_max},saturday_min=${saturday_min},
    sunday_max=${sunday_max},sunday_min=${sunday_min},monday_img='${monday_img}',tuesday_img='${tuesday_img}',wednesday_img='${wednesday_img}',thursday_img='${thursday_img}',friday_img='${friday_img}',saturday_img='${saturday_img}',sunday_img='${sunday_img}'
    WHERE city = '${city}';
    `)
    
    if(data.changedRows===0) {
            return {
                error: true,
                msg:"Ciudad no encontrada o modificada recientemente"
            }
        }else{
        return{
            error: false,
            data,
            msg:"Modificacón realizada con exito"
        }
        
    }
}



module.exports={
    allCities,
    cityId,
    cityEdit
}