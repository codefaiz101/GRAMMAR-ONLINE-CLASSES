firebase.auth().onAuthStateChanged((user)=>{
if(!user){
location.replace("loginindex2.html")
}else{
document.getElementById("user").innerHTML = "Hello, "+user.email
}
})

function logout(){
firebase.auth().signOut()
}

