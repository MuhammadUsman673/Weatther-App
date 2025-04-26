const baseUrl="https://api.weatherapi.com/v1/current.json?key=518fc8daa79b44c9be8140654243012"
export const getWeatherDataForCity=async(city)=>{
    const response= await fetch(`${baseUrl}&q=${city}&aqi=yes`)
    return response.json()
}

export const getWeatherDataForLocation=async(lat,lan)=>{
    const response= await fetch(`${baseUrl}&q=${lat},${lan}&aqi=yes`)
    return response.json()
}

