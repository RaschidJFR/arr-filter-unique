/**
 * @param {string} key If provided, objects are compared by this key. Can use dot notation: `path.to.identifying.key`
 * @return {any[]} The filtered array with no repeated elements (according to the identifying key passed)
 * @example
 * 	const arrFilterUnique = require('arr-filter-unique');
 * 	const uniqueAuthorLastnames = arrFilterUnique(books, 'author.lastname');
 * @author Raschid J.F. Rafaelly <lachachi&commat;gmail.com>
 */
function arrFilterUnique(array, key = undefined) {
  return array.filter((o, i, arr) => arr.findIndex(oo => {
    if (!key) return o == oo;
    else return getValue(o, key) == getValue(oo, key);
  }) == i);

  function getValue(object, path) {
    const segments = path.split('.');

    if (segments.length < 2)
      return object[path];

    const k = segments.shift();
    return getValue(object[k], segments.join('.'));
  }
}

module.exports = arrFilterUnique;