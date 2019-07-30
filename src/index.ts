const today = {
    date: new Date(),
    weather: 'Sunny'
}

const logWeather = (forecast: {date: Date, weather: string}): string => {
    return `On ${forecast.date} the weather is/was ${forecast.weather}`
};

const destructuredLogWeather = ({date, weather}:{date: Date, weather: string}): void => {
    console.log(`${date} :: ${weather}`)
};


console.log(logWeather(today));
console.log(destructuredLogWeather(today));
