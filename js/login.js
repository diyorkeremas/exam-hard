const form = document.querySelector('.form');
const input1 = document.querySelector('.input1');
const input2 = document.querySelector('.input2');
const btn = document.querySelector('.btn')


let URL = 'https://reqres.in/api/login';



form.addEventListener("submit",(e)=> {
    e.preventDefault();
    
    let options = {
        "method":"POST",
        "headers":{
            "Content-Type":"application/json"
        },
        "body":JSON.stringify(
            {
                "email": input1.value,
                "password": input2.value
            }
        )
    }



    async function login() {
        let response = await fetch(URL, options);
        let data = await response.json();
        if(data?.token) {
            localStorage.setItem('token',data.token);
            window.location.replace('./index.html')
        }
    }
    login()
})

