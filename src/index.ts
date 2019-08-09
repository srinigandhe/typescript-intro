import {MapReader} from "./CsvFileReader";

const csvFileReader = new MapReader('./src/football.csv');

console.log(csvFileReader.mapRow());
