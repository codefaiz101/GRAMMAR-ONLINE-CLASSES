
var config = {
    apiKey: "AIzaSyBfQo05NMD-h2jTDbEuKq779oY-tA2hpGc",
  authDomain: "education-36072.firebaseapp.com",
  databaseURL: "https://education-36072-default-rtdb.firebaseio.com/",
  projectId:  "education-36072",
  storageBucket:  "education-36072.appspot.com",
  messagingSenderId:  "319029732361",

 };


firebase.initializeApp(config);

const dbRef = firebase.database().ref();

const userRef = dbRef.child('USERS');
const userListUI = document.getElementById("userList");

userRef.on("child_added", snap => {

let user = snap.val();

let $li = document.createElement("li");
$li.innerHTML = user.email;

$li.setAttribute("child-key", snap.key);
$li.addEventListener("click", userClicked)
userListUI.append($li);
});

function userClicked(e) {

var userID = e.target.getAttribute("child-key");

const userRef = dbRef.child('USERS/' + userID);
const userDetailUI = document.getElementById("userDetail");

userDetailUI.innerHTML = ""

userRef.on("child_added", snap => {
  

var $p = document.createElement("p");

$p.innerHTML = snap.key + " - " + snap.val()
userDetailUI.append($p);

});

}


