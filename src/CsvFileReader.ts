import fs from 'fs';

enum MatchResult {
    Home = 'H',
    Away = 'A',
    Draw = 'D'
}

type MatchDetails = [Date, string, string, number, number, MatchResult, string]

abstract class CsvFileReader {
    protected constructor(public fileName: string) {}

    read(): string[][] {
        return fs.readFileSync(this.fileName, {
            encoding: 'utf-8'
        }).split('\n').map((item: string): string[] => item.split(','))
    }

    abstract mapRow(): MatchDetails[];
}


export class MapReader extends CsvFileReader {
    constructor(public fileName: string) {
        super(fileName);
    }

    getDateFormat(str: string): Date {
        const [date, month, year] = str.split('/').map((x: string) => parseInt(x));
        return new Date(year, month - 1, date)
    }

    mapRow(): MatchDetails[] {
        return this.read()
            .map((item: string[]) => {
            return [
                this.getDateFormat(item[0]),
                item[1],
                item[2],
                parseInt(item[3]),
                parseInt(item[4]),
                item[5] as MatchResult,
                item[6]
            ]
        })
    }
}
