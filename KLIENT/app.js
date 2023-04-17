async function loginn(){
    const formlogin = document.getElementById("login").value
    const formpass = document.getElementById("haslo").value

    const data = await fetch(`http://localhost:3001/login/${formlogin}/${formpass}`)
    const json = await data.json()

    console.log(json)

    localStorage.setItem("login", JSON.stringify(json))

}
function adminPage(){
   const login = JSON.parse(localStorage.getItem("login"))

   if(login.upr!="admin"){
    window.location.href = "login.html"
   }
}