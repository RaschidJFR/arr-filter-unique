💡 Filter unique elements in arrays!

```js
function arrFilterUnique(array, key = undefined)
```

## Usage


Simplest use:

```js
const arrFilterUnique = require('arr-filter-unique');
// For typescript use: import * as arrFilterUnique from 'arr-filter-unique';

arrFilterUnique([1, 1, 2, 3, 3, 4, 5, 5]);
// [1, 2, 3, 4, 5]
```

Filter elements by id:

```js
arrFilterUnique([{ id: 1 }, { id: 1 }, { id: 2 }], 'id');
// [{id: 1}, {id: 2}]
```

Filter by a deeper property:

```js
const movies = [
  {
    title: 'Pretty Woman',
    starring: {
      name: 'Julia',
      lastname: 'Roberts'
    },
  {
    title: '17 Again',
    starring: {
      name: 'Matthew',
      lastname: 'Perry'
    },
  {
    title: 'The Smurfs',
    starring: {
      name: 'Katy',
      lastname: 'Perry'
    }
];

const uniqueLastnameMovies = arrFilterUnique(movies, 'starring.lastname');
// [{
// title: 'Pretty Woman',
// starring: {
//   name: 'Julia',
//   lastname: 'Roberts'
// },
// {
// title: '17 Again',
// starring: {
//   name: 'Matthew',
//   lastname: 'Perry'
// }]


// Now I would just want the lastnames:
const uniqueLastnames = uniqueLastnameMovies.map(movie => movie.starring.lastname);
// ['Roberts', 'Perry']
```

### API
| Parameter | Type     | Needed | Description                                                                                    |
| --------- | -------- | ------ | ---------------------------------------------------------------------------------------------- |
| `array`   | `any[]`  | yes    | The array to filter                                                                            |
| `key`     | `string` | no     | If provided, objects are compared by this key. Can use dot notation: `path.to.identifying.key` |


**Returns:** The filtered array with no repeated elements (according to the identifying key passed).

## Contribute
Hope this helps you. Feel free to clone and send PR 🙂

## Credits
Raschid JF. Rafaelly

<hello@raschidjfr.dev>

https://raschidjfr.dev
