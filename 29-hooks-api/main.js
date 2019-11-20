const { Map } = require('immutable');
const map1 = Map({ a: 1, b: 2, c: 3 });
const map2 = map1.set('b', 50);
console.log(map1.get('b') + " vs. " + map2.get('b')) // 2 vs. 50
const obj = { name: { first: 'Jean-Luc', last: 'Picard' } };
const copy = JSON.parse(JSON.stringify(obj));

copy.name.first = 'Johnny';
console.log(obj.name.first); // 'Jean-Luc'
