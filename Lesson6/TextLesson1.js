const favoriteBooks = [
    {
        id: 1,
        title: 'Head First JavaScript Programming',
        author: 'Eric Freeman',
        price: 29.99,
        genre: 'Programming',
    },
    {
        id: 2,
        title: 'You Don’t Know JS',
        author: 'Kyle Simpson',
        price: 39.99,
        genre: 'Programming',
    },
    {
        id: 3,
        title: 'JavaScript: The Definitive Guide',
        author: 'David Flanagan',
        price: 49.99,
        genre: 'Programming',
    },
    {
        id: 4,
        title: 'Lord of the Rings',
        author: 'J.R.R. Tolkien',
        price: 29.99,
        genre: 'Fantasy',
    },
    {
        id: 5,
        title: 'The Witcher',
        author: 'Andrzej Sapkowski',
        price: 19.99,
        genre: 'Fantasy',
    },
]

// function printBookAuthors(books) {
//     for (let book of books) {
//         console.log(book.author)
//     }
// }
// const printBookAuthors = function(books) {
//     for (let book of books) {
//         console.log(book.author)
//     }
// }
// printBookAuthors(favoriteBooks)

const printBookAuthors = (books) => {
    for (let book of books) {
        console.log(book.author)
    }
}

const sum = (a, b) => a + b // При такой записи результат выражения a + b автоматически возвращается из функции
const res = sum(5, 3) // Получим 8

console.log(res)

// const printCheapBooks = (books)=>{
//     for(let book of books)
//         if (book.price<30) console.log(`${book.title} - ${book.price}`)
// }
//
// printCheapBooks(favoriteBooks)


const logCheapBooks = (book) => {
    if (book.price < 30) {
        console.log(`${book.title} - ${book.price}`)
    }
}


const processBooks = (books, callback) => {
    for (let i = 0; i < books.length; i++) {
        const book = books[i]

        callback(book)
    }
}

processBooks(favoriteBooks, logCheapBooks)
favoriteBooks.forEach((book, index) => {
    console.log(book.author, index)
})

const bookTitles = favoriteBooks.map((book) => {
    return book.title
})

// или сокращённо:
// const bookTitles = favoriteBooks.map(book => book.title)

console.log(bookTitles)