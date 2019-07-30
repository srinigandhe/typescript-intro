import Fruit from './Fruit';

const mango = new Fruit('mango', true, 'yellow', 150 );

console.log(mango.displayInfo());

const apple = new Fruit('Apple', true, 'red', 100);

console.log(apple.displayInfo());

const avocado = new Fruit('Avocado', false, 'green', 50);

console.log(avocado.displayInfo());
