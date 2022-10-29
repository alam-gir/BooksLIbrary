// obsject constractors making. -----------------

function book(tittle, author, pages, readStatus){
    this.tittle = tittle;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
    this.info = ()=>{
        console.log(tittle + " " + "is BY" + " " + author + ". " + "this book has total" + " " + pages+ " " + "pages"+ ". " + readStatus);
    }

}

const harryPoter = new book("Harry Poter", "Alex", 554, "Readed earlier.");
const moonLight = new book("Moon Light", "Lora", 343, "Not readed yet.");

// harryPoter.info();
// moonLight.info();


// The prototype. -----------------

function person(name,age,profession){
    this.name = name;
    this.age = age;
    this.profession = profession;
}

person.prototype.print = function (){
    console.log(this.name);
}

const alamgir = new person("alamgir", 23, "developer");
const shaykat = new person("shaykat", 34, "engineer");
const ovi = new person("ovi", 43, "developer");

// alamgir.print();
// shaykat.print();
// ovi.print();




// store data to array 

let library = [
    {id:1,
    tittle: "harry Poter",
    pages: 34,
    author: "ariful islam",
    cover: "img address"
    },
    {
        id:1,
        tittle: "harry Poter",
        pages: 34,
        author: "ariful islam",
        cover: "img address"
    },
    {
        id:12,
        tittle: "harry Poter",
        pages: 34,
        author: "ariful islam",
        cover: "img address"
    },
    {
        id:13,
        tittle: "adil Poter",
        pages: 34,
        author: "ariful islam",
        cover: "img address"
    },
    {
        id:2,
        tittle: "nani Poter",
        pages: 34,
        author: "ariful islam",
        cover: "img address"
    },
    {
        id:3,
        tittle: "kabir Poter",
        pages: 34,
        author: "ariful islam",
        cover: "img address"
    },
    {
        id:4,
        tittle: "mami Poter",
        pages: 34,
        author: "ariful islam",
        cover: "img address"
    },
    {
        id:5,
        tittle: "guri Poter",
        pages: 34,
        author: "ariful islam",
        cover: "img address"
    }
]


library.push({
    id:120,
    tittle:"andadhun",
    pages: 56,
    author:"karim hasan",
    cover: "new img address"
})


library.push({
    id:121,
    tittle:"bandan",
    pages: 355,
    author:"rakib hasan",
    cover: "high flower img address"
})




// get and set data in array trail 

// const bookName = document.querySelector('.book-name');
// const submitBtn = document.querySelector('.submit-btn');

let students= [
    {
        name:"bob",
        age: 34,
        profession: "photography",
    },
    {
        name:"ovi",
        age: 22,
        profession: "developer",
    },
    {
        name:"shaykat",
        age: 324,
        profession: "civil",
    }
];

// localStorage.setItem("students",JSON.stringify(students));
// console.log(JSON.parse(localStorage.getItem("students")));

// create html element dynamically-------------

// const container = document.querySelector('.element-container');
// const newDiv = document.createElement("div");
// const anotherDiv = document.createElement("div");
// newDiv.classList.add('first-created');
// anotherDiv.classList.add('second-created');
// container.appendChild(anotherDiv);
// container.appendChild(newDiv);

// remove html element ------------------------
// container.removeChild(container.children[0]);


// get data from input and set it on local storage -----

// selector 

const inputText = document.querySelectorAll('input');
const bookName = document.querySelector('.book-name');
const authorName = document.querySelector('.author');
const totalPage = document.querySelector('.page');
const submitBtn = document.querySelector('.submit-btn');
const booksContainer = document.querySelector('.book-container');
const inputContainer = document.querySelector('.input-container');
const addBookBtnTop = document.querySelector('.add-btn-top');
const addBookBtnBottom = document.querySelector('.add-btn-bottom');
const formExitBtn = document.querySelector('.form-exit-btn');
const addBookBtnContainerBottom = document.querySelector('.add-book-btn-container-bottom')
const booksAndBtnContainer = document.querySelector('.books-and-btn');
const deleteAlertBox = document.querySelector('.delete-alert-box')
const deleteConfirmBtns = document.querySelectorAll('.delete-confirm-btns button')
const deleteAlertBoxBookName = document.querySelector('.book-name-container');

    

window.addEventListener('DOMContentLoaded', ()=>{
    displyBooks();
    popupAdd();
    deleteBooks();
    bookaddBtnBottom();
})

submitBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    makeEntry();
    displyBooks();
    deleteBooks();
    bookaddBtnBottom();
})



// make an array with inputed data 
function makeEntry(){
    // get previous books from localStorage ---------
    let previousBooks = JSON.parse(localStorage.getItem("allBooks")) || [];
    

       if(bookName.value.length > 1 && authorName.value.length > 1 && totalPage.value.length > 1){
        let entry= {
            "name": bookName.value,
            "author": authorName.value,
            "totalPage": totalPage.value
        }
        previousBooks.push(entry);
        const books = previousBooks;
        localStorage.setItem("allBooks",JSON.stringify(books))

        bookName.value = "";
        authorName.value= "";
        totalPage.value = "";

        inputContainer.addEventListener("submit", onSubmitted());
        
        scrollToEnd();
       }
       else alert("please! fill the details. or click X icon for exit adding book popup!")

       
       
    
}

// transfer inputed data from localStorage array to html element 
// selector 

function displyBooks(){
    // get data 
    const books = JSON.parse(localStorage.getItem("allBooks"));
    let count = 0;
    if(books !== null){
        const booksElement = books.map(item=>{
            return`<div class="book-card" data-id="${count++}">
            <button class="delete-btn"><img src="icon/delete.png" alt=""></button>
            <button class="edit-btn"><img src="icon/edit.png" alt=""></button>
            <h1>${item.name}</h1>
            <h2>${item.author}</h2>
            <h3>This Book Has ${item.totalPage} Pages.</h3>
        </div>`
        }).join("");
        booksContainer.innerHTML = booksElement;
    }

    
}



function onSubmitted(){
    inputContainer.classList.add('popup');
    booksAndBtnContainer.style.filter = "blur(0)";
}

function bookaddBtnBottom(){
    const books = JSON.parse(localStorage.getItem("allBooks"))
    if(books !== null){
        if(books.length > 15){
            addBookBtnContainerBottom.classList.add('add-book-btn-container-bottom-active');
        }
    }
}

function popupAdd(){
    
    addBookBtnTop.addEventListener('click', ()=>{
        inputContainer.classList.remove('popup');
        booksAndBtnContainer.style.filter = "blur(5px)";
    })
    // addBookBtnBottom.addEventListener('click', ()=>{
    //     inputContainer.classList.remove('popup');
    //     booksAndBtnContainer.style.filter = "blur(5px)";
    // })
    formExitBtn.addEventListener('click', ()=>{
        inputContainer.classList.add('popup');
        booksAndBtnContainer.style.filter = "blur(0)";
    })
}

// scroll to the last added book when book added 

function scrollToEnd(){
    let booksContainerBottom = pageYOffset + booksContainer.getBoundingClientRect().bottom;
    window.scrollTo(0,booksContainerBottom);
}

// delete book by delete btn

// iff click delete buttons then ----------
function deleteBooks(){
    
    const deleteBtns = document.querySelectorAll('.delete-btn');
    const books = JSON.parse(localStorage.getItem("allBooks"));

    deleteBtns.forEach(btn=>{

        btn.addEventListener('click',(e)=>{
             
            // make books container blurry
            booksAndBtnContainer.style.filter = "blur(5px)";
            let currentBook = parseInt(e.currentTarget.parentElement.dataset.id);
            console.log(currentBook)
                deleteAlertBox.classList.add('delete-alert-box-active');
                deleteConfirmBtns.forEach(confirmBtn=>{
                    confirmBtn.addEventListener('click', (e)=>{
                        
                        // iff click delete boxes yes button then ----------
                        if(e.currentTarget.dataset.id === "y"){
                            
                            
                            // delete an item from books 
                            books.splice(currentBook,1);

                            //now i have to set edited array in localStorage
                            localStorage.setItem("allBooks",JSON.stringify(books))
                            window.location.reload();

                            deleteAlertBox.classList.remove('delete-alert-box-active');
                            booksAndBtnContainer.style.filter = "blur(0)";
                        }

                        // iff click delete boxes no button then ----------
                        else deleteAlertBox.classList.remove('delete-alert-box-active');
                        booksAndBtnContainer.style.filter = "blur(0)";
                    })
                })
                deleteAlertBoxBookName.textContent = books[currentBook].name;

        })
    })
}
