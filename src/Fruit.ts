export default class Fruit {

    readonly hasSeeds: boolean;

    constructor(public name: string, public sweet: boolean, public color: string, public calories: number) {
        this.hasSeeds = this.name === 'Grapes'
    }

    displayInfo(): string {

        const flag: string = this.sweet ? 'it\'s' : 'it\'s not';

        return `Fruit name is ${this.name} and ${flag} a sweet fruit. 
            The color of the fruit is ${this.color}. It has ${this.calories} calories
            This fruit ${this.hasSeeds ? 'has seeds' : 'is seedless'}
        `;
    }

}
