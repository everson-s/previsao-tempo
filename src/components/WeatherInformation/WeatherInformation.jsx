function WeatherInformation({weather}){

    console.log(weather)
    return(
        <div>
            <h2>{weather.name}</h2>
            <p>{weather.description}</p>
        </div>
    )
}

export default WeatherInformation