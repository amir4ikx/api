let doc = document
let wrap = doc.querySelector(".wrap")
let btn = doc.querySelector(".more")
let img;
let c = 8;

fetch('https://jsonplaceholder.typicode.com/photos')
    .then(response => response.json())
    .then(response => {

        for (i = 0; i < 9; i++) {

            img = doc.createElement("img")
            img.src = response[i].url
            wrap.append(img)

            if (window.outerWidth < 600) {
                img.src = response[i].thumbnailUrl
            }
        }
        btn.onclick = () => {

            for (let index = 0; index < 5; index++) {
                c++
                img = doc.createElement("img")
                img.src = response[c].url
                wrap.append(img)
                if (window.outerWidth < 600) {
                    img.src = response[c].thumbnailUrl
                }
            }
        }
    })

