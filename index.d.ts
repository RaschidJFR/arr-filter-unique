declare module 'arr-filter-unique' {

  /**
   * @param {string} key If provided, objects are compared by this key. Can use dot notation: `path.to.identifying.key`
   * @return {any[]} The filtered array with no repeated elements (according to the identifying key passed)
   * @example
   * 	const arrFilterUnique = require('arr-filter-unique');
   * 	const uniqueAuthorLastnames = arrFilterUnique(books, 'author.lastname');
   * @author Raschid J.F. Rafaelly <lachachi&commat;gmail.com>
   */
  function arrFilterUnique<T>(array: Array<T>, key?: string): Array<T>;

  export default arrFilterUnique;
}