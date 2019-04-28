const test_suite = require('./checker.js');
let number_of_tests, passed_tests;

let board1 = [ [ '⚫️', '⚫️', '⚫️', '⚫️', '⚫️', '⚪️', '⚪️', '⚫️' ],
		       [ '⚫️', '⚪️', '⚫️', '⚫️', '⚫️', '⚪️', '⚫️', '⚪️' ],
		       [ '⚫️', '⚪️', '⚪️', '⚫️', '⚪️', '⚫️', '⚪️', '⚫️' ],
		       [ '⚫️', '🔴', '⚫️', '⚪️', '⚫️', '⚫️', '⚪️', '⚫️' ],
		       [ '⚪️', '⚪️', '⚪️', '⚪️', '🔴', '⚪️', '⚫️', '🔴' ],
		       [ '⚪️', '⚫️', '⚫️', '⚪️', '⚪️', '🔴', '🔴', '🔴' ],
		       [ '⚪️', '⚫️', '🔴', '🔴', '⚪️', '🔴', '🔴', '🔴' ],
		       [ '⚪️', '⚫️', '🔴', '🔴', '🔴', '🔴', '⚪️', '🔴' ] ]


console.log("------------------------------------------------------------")
console.log("Running " + number_of_tests + "tests")
// console.log(test_suite.find_all_4s(board1));
console.log(test_suite.find_all_fours(test_suite.generate_random_board()));

console.log("------------------------------------------------------------")
console.log("Testing Complete! "   )
console.log(passed_tests + " out of " + number_of_tests + " tests passed")
console.log("------------------------------------------------------------")

