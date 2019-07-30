const today = {
    date: new Date(),
    weather: 'Sunny'
}

const logWeather = (forecast: { date: Date, weather: string }): string => {
    return `On ${forecast.date} the weather is/was ${forecast.weather}`
};

const destructuredLogWeather = ({date, weather}: { date: Date, weather: string }): void => {
    console.log(`${date} :: ${weather}`)
};


console.log(logWeather(today));
console.log(destructuredLogWeather(today));

const profile = {
    myName: 'Alex',
    age: 20,
    coords: {
        lat: 0,
        lng: 15
    },
    setAge(age: number): void {
        this.age = age;
    }
};

profile.setAge(30);
const {age, myName}: { age: number, myName: string } = profile;

console.log(age, myName);


const {coords: {lat, lng}}: { coords: { lat: number, lng: number } } = profile;
console.log(lat, lng);

