var books;

!localStorage.books
  ? (books = [])
  : (books = JSON.parse(localStorage.getItem("books")));



function Book(title, description) {
  this.title = title;
  this.description = description;
}

var radio = document.getElementsByName("add-book");
for (var i = 0; i < radio.length; i++) {
  radio[i].onchange = addForm;
}

function addForm() {
  console.log(books);
  var block = document.getElementById("radio-block");
  block.innerHTML = "";
  if (this.value == "create-book") {
    let newDiv = document.createElement("div");
    newDiv.className = "onload-book-form";
    newDiv.innerHTML = `
                Название книги 
                <input class="input-title-book" type="text" />
                <br />
                Текст книги
                <textarea class='text-book'></textarea>
                <button class="onload-book-btn" >ДОБАВИТЬ1</button>
                `;
    block.innerHTML = newDiv.outerHTML;
  } else if (this.value == "onload-book") {
    let newDiv = document.createElement("div");
    newDiv.className = "onload-book-form";
    newDiv.innerHTML = `
                Название книги
                <input class="input-title-book" type="text" />
                <br />
                <input type="file" class="file" />
                <button class="onload-book-btn" >ДОБАВИТЬ2</button>
              `;
    block.innerHTML = newDiv.outerHTML;
  }
  const deskBookTitle = document.querySelector(".input-title-book");
  const deskBookText = document.querySelector(".text-book");
  const addBookBtn = document.querySelector(".onload-book-btn");

  addBookBtn.onclick = function () {
    books.push(new Book(deskBookTitle.value, deskBookText.value));
    console.log(books);
    updateLocal();
    fillBookList();
    createTemplate();
    
  };
  
}

var bookList = document.querySelector(".book-list_all");

const createTemplate = (books, index) => {
  return `
        <div class="book-box">
            <p class="book-title">${books.title}</p>
            <button>ред.</button>
            <button>прочитал</button>
            <button>читать</button>
            <button>Х</button>
        </div>
    `;
};

const fillBookList = () => {
  bookList.innerHTML = "";
  if (books.length > 0) {
    // for (let i=0; i < books.length; i++) {
    //     bookList.innerHTML += 1
    // }
    books.forEach((item, index) => {
      bookList.innerHTML += createTemplate(item, index);
    });
  }
};



const updateLocal = () => {
  localStorage.setItem("books", JSON.stringify(books));
};



// function addBookItem() {
// var blockList = document.getElementById("book-list");
// var newDivBookList = document.createElement("div");
// newDivBookList.className = "book-list-item";
// newDivBookList.innerHTML = `
//     <div class="book-box">
//       <p class="book-title">${books.title}</p>
//       <button>ред.</button>
//       <button>прочитал</button>
//       <button>читать</button>
//       <button>Х</button>
//     </div>
// `;
// blockList.innerHTML = newDivBookList.outerHTML;
// console.log(JSON.parse(localStorage.getItem("books")));
// }
