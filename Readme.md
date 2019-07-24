Filter unique elements in arrays:

```
const arrFilterUnique = require('arr-filter-unique');

arrFilterUnique([1, 1, 2, 3, 3, 4, 5, 5]);
// [1, 2, 3, 4, 5]

arrFilterUnique([{ id: 1 }, { id: 1 }, { id: 2 }], 'id');
// [{id: 1}, {id: 2}]

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

arrFilterUnique(movies, 'starring.lastname');
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

```