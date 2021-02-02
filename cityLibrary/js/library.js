/**
 * 
 * library.js
 * 
 * @author Gashaw Kassa
 * @since 2021-02-01
 */
/* 
window.onload = libraryApp

function libraryApp(){

    fetchBooklists()

}

async function fetchBooklists(){

    try{
        let listOfBooks = await fetch("https://elibraryrestapi.herokuapp.com/elibrary/api/book/list")
        let res = await listOfBooks.json()
        console.log(res)
        let output = document.getElementById("booksTable")
        for(let i = 0; i < res.length; i++){
            output.innerHTML += "<td>" + res[i].bookId + "</td>"
        + "<td>" + res[i+1].isbn + "</td>" + "<td>" + res[i+2].title + "</td>" +
        "<td>" + res[i+3].overDueFee + "</td>" + "<td>" + res[i+4].publisher + "</td>" +
        "<td>" + res[i+5].datePublished + "</td>"
        }
    } catch (err) {console.log(err)}

} */


