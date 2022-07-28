firebase.auth().onAuthStateChanged((user3)=>{
if(!user3){
location.replace("loginindex3.html")
}else{
document.getElementById("user3").innerHTML = "Hello, "+user.email
}
})

function logout(){
firebase.auth().signOut()
}

