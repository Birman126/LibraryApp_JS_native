var radio = document.getElementsByName('add-book');
        for (var i=0; i<radio.length; i++) {
            radio[i].onchange = addForm;
        }

function addForm () {
    var block = document.getElementById('radio-block')
    block.innerHTML = ""
            if (this.value=='create-book') {
                let newDiv = document.createElement('div');
                console.log(newDiv);
                newDiv.className = "onload-book-form";
                newDiv.innerHTML = `<input class="input-title-book" type="text" />
                <br />
                <textarea></textarea>`
                block.innerHTML = newDiv.outerHTML;
            }
            else if (this.value=='onload-book') {
                let newDiv = document.createElement('div');
                console.log(newDiv);
                newDiv.className = "onload-book-form";
                newDiv.innerHTML = `
                <input type="file" class="file" />
                <button class="onload-book-btn">Добавить книгу</button>
              `
                block.innerHTML = newDiv.outerHTML;
            }
        }