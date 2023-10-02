const getTheTitles = function(books) {
    const tBook=[];
    for (const book of books) {
        tBook.push(book.title);
    }
    return tBook;
};

// Do not edit below this line
module.exports = getTheTitles;
