let token = localStorage.getItem("token");

if(!token) {
    window.location.replace("./login.html")
}

let btnde = document.querySelector('.btnde')
let home = document.querySelector('.home')
let img = document.querySelector('.btnde img')
let elForm = document.querySelector('.form')
let elInput = document.querySelector('.input')
let list = document.querySelector('.match-list')
let btn = document.querySelector('.btn')
let ulBig = document.querySelector('.ul-big')
let elBtn = document.querySelector('.btn1')
let search = 'python'


btnde.addEventListener('click',() => {
    home.classList.toggle("home-dark");
    img.srch = "./imgs/moon-stars.svg"
});


btn.addEventListener('click',(e)=> {
    e.preventDefault()
    window.location.replace("./login.html")
});

const chaList = document.querySelector('.characList');
const searchL = document.querySelector('.input');

searchL.addEventListener('onkeyup', (e)=> {
    console.log(e.target.value);
})

const loadCHar = async () => {
    try{
        const res = await fetch("https://www.googleapis.com/books/v1/volumes?q=search+terms");
        let hpcha = await res.json();
        displayCHa(hpcha)
        console.log(hpcha);
    }catch (err) {
        console.log(err);
    }
};

const displayCHa = (characters) => {
    const htmls = characters
    .map((characters) => {
        return `
        <div class="foden">
        <div class="takoy-big">
            <img class="imgde" src="${dog.items[i].volumeInfo.imageLinks.smallThumbnail}" alt="">
            <div class="plar">
            <p class="php">${dog.items[i].volumeInfo.title}</p>
            <p>${dog.items[i].volumeInfo.authors}</p>
            <p>${dog.items[i].volumeInfo.publishedDate}</p>
            </div>
            <div class="bttn">
                <button class="btn1">Bookmark</button>
                <button class="btn2">More Info</button>
            </div>
            <button class="btn3">Read</button>
        </div>
    </div>
        `
    })
    .join('');
    chaList.innerHTML = htmls
}

loadCHar

async function getResponse(){
    let data = await fetch("https://www.googleapis.com/books/v1/volumes?q=${search.toLowerCase}+terms")
    try{ 
    let dog = await data.json();
    for(let obj in dog.items) {
        for(let i = 0; i <= 10; i++) {
            const elLI = document.createElement('li')
            elLI.innerHTML = `
            <div class="foden">
            <div class="takoy-big">
                <img class="imgde" src="${dog.items[i].volumeInfo.imageLinks.smallThumbnail}" alt="">
                <div class="plar">
                <p class="php">${dog.items[i].volumeInfo.title}</p>
                <p>${dog.items[i].volumeInfo.authors}</p>
                <p>${dog.items[i].volumeInfo.publishedDate}</p>
                </div>
                <div class="bttn">
                    <button class="btn1">Bookmark</button>
                    <button class="btn2">More Info</button>
                </div>
                <button class="btn3">Read</button>
            </div>
        </div>
            `
            ulBig.append(elLI);

            if(i == 0) {
                let big = document.querySelector('.big-one')
                let book = document.querySelector('.btn1')
                book.addEventListener('click',(e)=> {
                    e.preventDefault();
                    if(e.target.className === "btn1") {
                        let creatLi = document.createElement('li')
                        creatLi.innerHTML = `
                        <li class="bookmarks__item">
                        <div class="bookmarks__item-content">
                                <h3 class="bookmarks__subtitle">Python</h3>
                                <p class="bookmarks__text">David M. Beazley</p>
                        </div>
                        <div class="bookmarks__img-wrapper">
                        <button class="read">  <img
                            class="bookmarks__book-icon"
                            src="../imgs/book-section-icon1.svg"
                            alt="book icon"
                                /></button>
                            <button class="delete">  <img
                                class="bookmarks__book-icon"
                                src="../imgs/book-section-icon2.svg"
                                alt="book icon"
                                /></button>
                                </div>
                        </li>
                        `
                        big.appendChild(creatLi);
                        
                        let del = document.querySelector('.delete')
        
                        del.addEventListener('click',(e)=> {
                            e.preventDefault()
                            creatLi.remove(del)
                        })
                    }
                    
                })
            }
            
        }
    }


} catch(error){
}
}
getResponse()