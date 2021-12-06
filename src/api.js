const router = require('express').Router();
const books = require('./data')

let booksDirectory = books;
router.get('/books', (req,res)=>{
    res.send(booksDirectory)
})
router.get('/books/:id', (req,res)=>{
    const {id} = req.params;
    const book = booksDirectory.find(b => b.isbn === id)
    if (!book) return res.status(400).send('Book not found')
    res.send(book)
})
router.post('/books', (req,res)=>{
    const {
        title,
        isbn,
        pageCount,
        publishedDate,
        thumbnailUrl,
        shortDescription,
        longDescription,
        status,
        authors,
        categories
    } = req.body;

    const bookExist = booksDirectory.find(b => b.isbn === isbn)
    if (bookExist) return res.send('Book Already Exists')

    const book = {
        title,
        isbn,
        pageCount,
        publishedDate,
        thumbnailUrl,
        shortDescription,
        longDescription,
        status,
        authors,
        categories
    }
    booksDirectory.push(book)
    res.send(book)

})

router.put('/books/:id', (req,res)=>{
    
})

router.delete('/books/:id', (req,res)=>{
    
})
module.exports = router;