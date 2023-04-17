const login = "admin"
const pass = "admin"

//logowanie
function loginn(){
    const formLogin = document.getElementById("login").value
    const formPass = document.getElementById("haslo").value

    if(formLogin==login && formPass==pass){
        alert("zalogowano")
        localStorage.setItem("czy_zalogowany", "proste_ze_tak")
    }
    else{
        alert("nie zalogowano")
        localStorage.setItem("czy_zalogowany","niestety_nie")
    }
}
//przekierowanie
function admin(){
    const czy_zalogowany = localStorage.getItem("czy_zalogowany")
    if(czy_zalogowany!="true"){
        window.location.href = "login.html"   
    }
}
