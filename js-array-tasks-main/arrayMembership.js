
/**problem ---
 *  Checking Array Membership with ‘includes’
Instructions:

Create an array of books containing different book.

Use the includes method to check if the array contains a javascript book.

Print a message to the console indicating whether the element is present in the array or not.
 */

let books = ['bangla', 'english', 'math', 'physics'];
const search = 'javascript';

if (books.includes(search)) {
    console.log('the books is present on the array');
}
else {
    console.log(' this book is not avilable');
}