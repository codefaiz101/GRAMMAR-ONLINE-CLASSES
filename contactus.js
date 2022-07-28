// Initialize Firebase (ADD YOUR OWN DATA)
var config = {
  apiKey:"AIzaSyBfQo05NMD-h2jTDbEuKq779oY-tA2hpGc",
  authDomain: "education-36072.firebaseapp.com",
  databaseURL: "https://education-36072-default-rtdb.firebaseio.com/",
  projectId: "education-36072",
  storageBucket:  "education-36072.appspot.com",
  messagingSenderId:  "319029732361",
};
firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('USERS');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var address = getInputVal('address');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var message = getInputVal('message');

  // Save message
  saveMessage(name, address, email, phone, message);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, address, email, phone, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    address:address,
    email:email,
    phone:phone,
    message:message
  });
}
