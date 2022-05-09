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
    const deskBookTitle = document.querySelector(".input-title-book");
    const deskBookText = document.querySelector(".text-book");
    const addBookBtn = document.querySelector(".onload-book-btn");
    addBookBtn.onclick = function () {
      books.push(new Book(deskBookTitle.value, deskBookText.value));
      
      updateLocal();
      fillBookList();
      createTemplate();
    };
  } else if (this.value == "onload-book") {
    let newDiv = document.createElement("div");
    newDiv.className = "onload-book-form";
    newDiv.innerHTML = `
                Название книги
                <input class="input-file-title-book" type="text" />
                <br />
                <form action='#' id='form-file'>
                <input type="file" id="file" />
                <input type='submit' class="onload-book-file-btn">
                </form>              
                  `;
    block.innerHTML = newDiv.outerHTML;
    const addBookFileBtn = document.querySelector(".onload-book-file-btn");
    const deskBookFileTitle = document.querySelector(".input-file-title-book");
    
    
  
    addBookFileBtn.onclick = function () {
      const file = document.getElementById("file").files[0];
      
      let reader = new FileReader();
      reader.onload = function () {
        console.log(reader.result);
        books.push(new Book(deskBookFileTitle.value, reader.result));
      }
      reader.readAsText(file);
      console.log(reader.result);
      // books.push(new Book(deskBookFileTitle.value, reader.result));
      
      updateLocal();
      fillBookList();
      createTemplate();
    };
  }
}

var bookList = document.querySelector(".book-list_all");

const createTemplate = (books, index) => {
  return `
        <div class="book-box">
            <p class="book-title">${books?.title}</p>
            
            <button onclick="deleteBook(${index})" class="btn-delete">Х</button>
        </div>
    `;
};

const fillBookList = () => {
  bookList.innerHTML = "";
  if (books.length > 0) {
    books.forEach((item, index) => {
      bookList.innerHTML += createTemplate(item, index);
    });
  }
};

const updateLocal = () => {
  localStorage.setItem("books", JSON.stringify(books));
};

const deleteBook = index => {
  books.splice(index, 1);
  updateLocal();
  fillBookList();
}