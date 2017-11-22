

// function BookShelfList(props) {
//   return(
//     <li key={props.data.id}>
//         <div className="book">
//             <div className="book-top">
//                 <div className="book-cover" style={{
//                   width: 128,
//                   height: 193,
//                   backgroundImage: `url(${props.data.imageLinks.thumbnail})`
//                 }}></div>
//                 <div className="book-shelf-changer">
//                     <select onChange={(event) => props.updateShelf(props.data, event.target.value) }>
//                         <option value="none" disabled>Move to...</option>
//                         <option value="currentlyReading">Currently Reading</option>
//                         <option value="wantToRead">Want to Read</option>
//                         <option value="read">Read</option>
//                         <option value="none">None</option>
//                     </select>
//                 </div>
//             </div>
//             <div className="book-title">{props.data.title}</div>
//             {props.data.authors.map((author, index) => (
//                 <div key={index} className="book-authors">{author}</div>
//             ))}
//         </div>
//     </li>
//   )
// }


// <li key={book.id}>
//             <div className="book">
//                 <div className="book-top">
//                     <div className="book-cover" style={{
//                       width: 128,
//                       height: 193,
//                       backgroundImage: `url(${book.imageLinks.thumbnail})`
//                     }}></div>
//                     <div className="book-shelf-changer">
//                         <select onChange={(event) => updateOption(book, event.target.value) }>
//                         <option value="none" disabled>Move to...</option>
//                         <option value="currentlyReading">Currently Reading</option>
//                             <option value="wantToRead">Want to Read</option>
//                             <option value="read">Read</option>
//                             <option value="none">None</option>
//                         </select>
//                     </div>
//                 </div>
//                 <div className="book-title">{book.title}</div>
//                 {book.authors.map((author, index) => (
//                     <div key={index} className="book-authors">{author}</div>
//                 ))}
//             </div>
//         </li>
//     ))}
//     </ol>
//
//     </div>
// </div>
//
// <div className="bookshelf">
//     <h2 className="bookshelf-title">Read</h2>
//     <div className="bookshelf-books">
//
//     <ol className="books-grid">
//
//     {books.filter((book) => book.shelf === "read").map( book => (
//
//         <li key={book.id}>
//             <div className="book">
//                 <div className="book-top">
//                     <div className="book-cover" style={{
//                       width: 128,
//                       height: 193,
//                       backgroundImage: `url(${book.imageLinks.thumbnail})`
//                     }}></div>
//                     <div className="book-shelf-changer">
//                         <select onChange={(event) => updateOption(book, event.target.value) }>
//                             <option value="none" disabled>Move to...</option>
//                             <option value="currentlyReading">Currently Reading</option>
//                             <option value="wantToRead">Want to Read</option>
//                             <option value="read">Read</option>
//                             <option value="none">None</option>
//                         </select>
//                     </div>
//                 </div>
//                 <div className="book-title">{book.title}</div>
//                 {book.authors.map((author, index) => (
//                     <div key={index} className="book-authors">{author}</div>
//                 ))}
//             </div>
//         </li>
//     ))}
//     </ol>
