/**
 * @param key If provided, objects are compared by this key. Can use dot notation: `path.to.identifying.key`
 * @return The filtered array with no repeated elements (according to the identifying key passed)
 * @example
 * 	const arrFilterUnique = require('arr-filter-unique');
 * 	const uniqueAuthorLastnames = arrFilterUnique(books, 'author.lastname');
 * @author Raschid J.F. Rafaelly <lachachi&commat;gmail.com>
 */
declare function arrFilterUnique<T>(array: T[], key?: string): T[];

declare namespace arrFilterUnique { }
export = arrFilterUnique;