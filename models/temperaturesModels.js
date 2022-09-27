const {request} = require('../db/config')


const allTemperatures = async () => {
    const data = await request("SELECT * FROM city_temperature")
    
    return {
        data,
        error: false
    }
}

const idCityTemperatures = async (id_city,friday) => {
    const data = await request(`SELECT * FROM city_temperature WHERE id_city = ${id_city} and date_weather = "${friday}" `)
    
    return {
        data,
        error: false
    }
}

const dayCityTemperatures = async (city,Week_day,date_weather,Twelve_AM,One_AM,Two_AM,Three_AM,Four_AM,Five_AM,Six_AM,Seven_AM,Eight_AM,
    Nine_AM,Ten_AM,Eleven_AM,Twelve_PM,One_PM,Two_PM,Three_PM,Four_PM,Five_PM,Six_PM,Seven_PM,Eight_PM,
    Nine_PM,Ten_PM,Eleven_PM,Forecast_Twelve_AM,Forecast_One_AM,Forecast_Two_AM,Forecast_Three_AM,Forecast_Four_AM,
    Forecast_Five_AM,Forecast_Six_AM,Forecast_Seven_AM,Forecast_Eight_AM,Forecast_Nine_AM,Forecast_Ten_AM,Forecast_Eleven_AM,
    Forecast_Twelve_PM,Forecast_One_PM,Forecast_Two_PM,Forecast_Three_PM,Forecast_Four_PM,Forecast_Five_PM,Forecast_Six_PM,
    Forecast_Seven_PM,Forecast_Eight_PM,Forecast_Nine_PM,Forecast_Ten_PM,Forecast_Eleven_PM,img_Twelve_AM,img_One_AM,img_Two_AM,
    img_Three_AM,img_Four_AM,img_Five_AM,img_Six_AM,img_Seven_AM,img_Eight_AM,img_Nine_AM,img_Ten_AM,img_Eleven_AM,img_Twelve_PM,
    img_One_PM,img_Two_PM,img_Three_PM,img_Four_PM,img_Five_PM,img_Six_PM,img_Seven_PM,img_Eight_PM,img_Nine_PM,img_Ten_PM,
    img_Eleven_PM) => {
    
    
    const data = await request(`
    UPDATE city_temperature
    SET city='${city}', date_weather='${date_weather}' , Twelve_AM=${Twelve_AM} , One_AM=${One_AM} , Two_AM=${Two_AM} , Three_AM=${Three_AM} , Four_AM=${Four_AM} , Five_AM=${Five_AM} , Six_AM=${Six_AM} , Seven_AM=${Seven_AM} , Eight_AM=${Eight_AM} ,
    Nine_AM=${Nine_AM} , Ten_AM=${Ten_AM} , Eleven_AM=${Eleven_AM} , Twelve_PM=${Twelve_PM} , One_PM=${One_PM} , Two_PM=${Two_PM} , Three_PM=${Three_PM} , Four_PM=${Four_PM} , Five_PM=${Five_PM} , Six_PM=${Six_PM} , Seven_PM=${Seven_PM} , Eight_PM=${Eight_PM} ,
    Nine_PM=${Nine_PM} ,Ten_PM=${Ten_PM} , Eleven_PM=${Eleven_PM} , Forecast_Twelve_AM='${Forecast_Twelve_AM}',Forecast_One_AM='${Forecast_One_AM}',Forecast_Two_AM='${Forecast_Two_AM}',Forecast_Three_AM='${Forecast_Three_AM}',Forecast_Four_AM='${Forecast_Four_AM}',
    Forecast_Five_AM='${Forecast_Five_AM}',Forecast_Six_AM='${Forecast_Six_AM}',Forecast_Seven_AM='${Forecast_Seven_AM}',Forecast_Eight_AM='${Forecast_Eight_AM}',Forecast_Nine_AM='${Forecast_Nine_AM}',Forecast_Ten_AM='${Forecast_Ten_AM}',Forecast_Eleven_AM='${Forecast_Eleven_AM}',
    Forecast_Twelve_PM='${Forecast_Twelve_PM}',Forecast_One_PM='${Forecast_One_PM}',Forecast_Two_PM='${Forecast_Two_PM}',Forecast_Three_PM='${Forecast_Three_PM}',Forecast_Four_PM='${Forecast_Four_PM}',Forecast_Five_PM='${Forecast_Five_PM}',Forecast_Six_PM='${Forecast_Six_PM}',
    Forecast_Seven_PM='${Forecast_Seven_PM}',Forecast_Eight_PM='${Forecast_Eight_PM}',Forecast_Nine_PM='${Forecast_Nine_PM}',Forecast_Ten_PM='${Forecast_Ten_PM}',Forecast_Eleven_PM='${Forecast_Eleven_PM}',img_Twelve_AM='${img_Twelve_AM}',img_One_AM='${img_One_AM}',img_Two_AM='${img_Two_AM}',
    img_Three_AM='${img_Three_AM}',img_Four_AM='${img_Four_AM}',img_Five_AM='${img_Five_AM}',img_Six_AM='${img_Six_AM}',img_Seven_AM='${img_Seven_AM}',img_Eight_AM='${img_Eight_AM}',img_Nine_AM='${img_Nine_AM}',img_Ten_AM='${img_Ten_AM}',img_Eleven_AM='${img_Eleven_AM}',img_Twelve_PM='${img_Twelve_PM}',
    img_One_PM='${img_One_PM}',img_Two_PM='${img_Two_PM}',img_Three_PM='${img_Three_PM}',img_Four_PM='${img_Four_PM}',img_Five_PM='${img_Five_PM}',img_Six_PM='${img_Six_PM}',img_Seven_PM='${img_Seven_PM}',img_Eight_PM='${img_Eight_PM}',img_Nine_PM='${img_Nine_PM}',img_Ten_PM='${img_Ten_PM}',
    img_Eleven_PM='${img_Eleven_PM}'
    WHERE city = '${city}'
    AND Week_day = '${Week_day}'
    `)
    
    if(data.changedRows===0) {
        return {
            error: true,
            msg:"Ciudad/fecha invalida o clima modificado recientemente"
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
    allTemperatures,
    idCityTemperatures,
    dayCityTemperatures
}
