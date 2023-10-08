const body = document.querySelector('body')
const button = document.getElementById('add')
const bookContainer = document.querySelector('.container')

const btnSave = document.querySelector(".save")
const newBookForm = document.querySelector(".new_book")
const aux = document.querySelector(".special")
const btnCancelSave = document.querySelector(".cancel-save")
const onLoad = document.querySelector(".on_load")

const btnCheck = document.getElementById('check')
btnCheck.checked='true'
btnCheck.addEventListener('change',validCheck, false)

function validCheck () {
    var checked = btnCheck.checked;
    console.log(checked)
    if(!checked){
        onLoad.style.display="block"
    }else {
        onLoad.style.display="none"
    }
}

const newBooksImgs = ['./libro_3.jpg','./Lorca-3_Bodas.jpg']


const urlCover = document.getElementById('urlCover')
const bookTitle = document.getElementById('bookTitle')
const bookAuthor = document.getElementById('bookAuthor')
const issueBook = document.getElementById('issueBook')
const userBook = document.getElementById('userBook')
function infoBook(){
    return validateYear()
}

function validateURL (){
    let res = null
    if (urlCover.value.split()!=""){
        res = urlCover.value.startsWith('https://') ? urlCover.value : null
    }
}

function validateString(stringToValidate){
    return stringToValidate.value.split()!="" ? stringToValidate.value : null
}

function validateYear(){
    let res = null
    if (issueBook.value.split()!=""){
        if (issueBook.value.length==4){
            if (Number(issueBook.value) && Number(issueBook.value)<=2023){
                res = Number(issueBook.value)
            }
        }
    }
return res
}

function Book() {
    const imgCover = document.createElement('img') 
    imgCover.src=newBooksImgs[0]
    const bookCover = document.createElement('div')
    bookCover.classList.add('imgBk')
    bookCover.append(imgCover)
    const title = document.createElement('h2')
    title.innerText = 'Title'
    const info = document.createElement('p')
    info.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur aperiam omnis veniam voluptas architecto error? Perspiciatis ipsam officiis molestias sequi hic. Quaerat animi voluptatibus non."
    const content = document.createElement('div')
    content.classList.add('content')
    content.append(title,info)
    const book = document.createElement('div')
    book.classList.add('book')
    book.append(bookCover,content)
    bookContainer.append(book)
}

function close() {
    newBookForm.style.visibility="hidden"
    newBookForm.style.opacity="0"
    aux.style.visibility="hidden"
    aux.style.opacity="0"
}

btnSave.addEventListener('click', ()=>{
    Book();
    console.log(infoBook())
    close();
})



button.addEventListener('click',()=>{
    newBookForm.style.visibility="visible"
    newBookForm.style.opacity="1"
    aux.style.visibility="visible"
    aux.style.opacity="1"
})



btnCancelSave.addEventListener('click',close)