var radio = document.getElementsByName('add-book');
        for (var i=0; i<radio.length; i++) {
            radio[i].onchange = testRadio;
        }

        function testRadio () {
            if (this.value=='onload-book') {
                let newDiv = document.createElement('div');
                div.className = "onload-book-form";
                newDiv.innerHTML = "Форма для загрузки книги";
                document.getElementsByClassName("form-add-book").appendChild(newDiv);
                // document.body.append(div)
            }
            else if (this.value=='create-book') {
                let div = document.createElement('div');
                div.className = "create-book-form";
                div.innerHTML = "Форма для написания книги";
                document.body.append(div)
            }
        }