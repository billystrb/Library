let myLibrary = []

function Book(title,author,pagesNumber,read){
    this.title = title
    this.author = author
    this.pagesNumber = pagesNumber
    this.read = read
    this.info = function(){
        return (title + " by " + author + ", " + pagesNumber + ", " + read + '\n')
    }
}

function addBookToLibrary(aBook){
    myLibrary.push(aBook)
}

let hobbitBook = new Book("The Hobbit","J.R.R Tolkien","295 pages","not read yet")
let harryPotterBook = new Book("Harry Potter","J.K Rowling","304 pages","read")
let gameOfThronesBook = new Book("Game of Thrones","George R.R. Martin","378 pages","read")
addBookToLibrary(hobbitBook)
addBookToLibrary(harryPotterBook)
addBookToLibrary(gameOfThronesBook)

let br = document.createElement('br')

const container = document.querySelector('#container')
const button1 = document.querySelector('#btn1')
// button1.addEventListener('click',addToDiv)
button1.addEventListener('click',() => {printLibrary2(myLibrary)})


function printLibrary2(aLibrary){
    for(let i = 0; i<aLibrary.length; i++){
        let libContent = aLibrary[i].info()

        let libContentElement = document.createElement('div')
        libContentElement.textContent = libContent

        let removeButton = document.createElement('button')
        removeButton.textContent = 'Remove Item'

        let changeReadStatusButton = document.createElement('button')
        changeReadStatusButton.textContent = 'Change read status'

        container.appendChild(br)
        container.appendChild(libContentElement)
        container.appendChild(removeButton)
        container.appendChild(changeReadStatusButton)
        container.appendChild(br)

        removeButton.addEventListener('click',removeElem)

        function removeElem(){
            libContentElement.parentNode.removeChild(libContentElement)
            aLibrary.splice(i,1)
            removeButton.style.display = 'none'
            changeReadStatusButton.style.display = 'none'

        }

        changeReadStatusButton.addEventListener('click',chageReading)

        function chageReading(){
            changeReadStatusButton.removeEventListener('click',chageReading)
            if(aLibrary[i].read == 'read'){
                aLibrary[i].read = 'not read'
            }else{
                aLibrary[i].read = 'read'
            }
            console.log(aLibrary[i].read)

            let bookstatus = " Book status of " +  aLibrary[i].title + " changed to : " + aLibrary[i].read
            let bookstatusElement = document.createElement('div')
            bookstatusElement.textContent = bookstatus
            container.appendChild(bookstatusElement)

        }

    }
}

const button2 = document.querySelector('#btn2')
button2.addEventListener('click',formCreation)


function formCreation(){
    button2.removeEventListener('click',formCreation)

    let aForm = document.querySelector('#form')

    let titleSection = document.createElement('input')
    titleSection.setAttribute('type','Sumbit')
    titleSection.placeholder = 'Book title'

    let authorSection = document.createElement('input')
    authorSection.placeholder = 'Author name'

    let pagesSection = document.createElement('input')
    pagesSection.placeholder = 'Number of pages'

    let readSection = document.createElement('input')
    readSection.placeholder = 'Read or unread'

    let sumbitButton = document.createElement('button')
    sumbitButton.textContent = 'Sumbit'

    aForm.appendChild(titleSection)
    aForm.appendChild(authorSection)
    aForm.appendChild(pagesSection)
    aForm.appendChild(readSection)
    aForm.appendChild(sumbitButton)

    sumbitButton.addEventListener('click',getAttr)

    function getAttr(){
        let titleFetch = titleSection.value
        let authorFetch = authorSection.value
        let pagesFetch= pagesSection.value
        let readFetch = readSection.value

       let insertedBook = new Book(titleFetch,authorFetch,pagesFetch,readFetch)

       addBookToLibrary(insertedBook)
       let confirm = document.createElement('div')
       confirm.textContent = 'A new book has been added'
       aForm.appendChild(confirm)
    }

    

}