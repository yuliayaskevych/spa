let form
let firstName
let lastName
let email
let message

document.querySelector('[href="#contact"]').addEventListener('click', viewForm);
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyC7U2Ri262Q0WSfK8O0K9ZQRHlyeBhDMkw",
  authDomain: "pspa-3ead3.firebaseapp.com",
  databaseURL: "https://pspa-3ead3-default-rtdb.firebaseio.com",
  projectId: "pspa-3ead3",
  storageBucket: "pspa-3ead3.appspot.com",
  messagingSenderId: "603912410904",
  appId: "1:603912410904:web:6a167cfc39c121ba6a706d"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// функція, яка записує дані в БД Firebase
function setData(e) {
  e.preventDefault();
  let db = firebase.database().ref('users');
  db.push({ firstName: firstName.value, lastName: lastName.value, email: email.value, message: message.value })
    .then(snap => { clearForm(); alert('Дані надіслані'); console.log('key: ', snap.key) })
}

// функція, яка очищує форму після надсилання
function clearForm() {
  firstName.value = '';
  lastName.value = '';
  email.value = '';
  message.value = '';
}

// функція, яка ініцалізує змінні елементами з сторінки,
// та додає слухач події submit на форму
function viewForm() {
  console.log('viewForm');
  checkElement('[name="users"]') //use whichever selector you want
    .then((element) => {
      console.info(element);
      //Do whatever you want now the element is there
      console.log('onload');

      form = document.forms.users;
      firstName = form.elements.firstname;
      lastName = form.elements.lastname;
      email = form.elements.email;
      message = form.elements.message;
      form.addEventListener('submit', setData);
    });

}

function rafAsync() {
  return new Promise(resolve => {
    requestAnimationFrame(resolve); //faster than set time out
  });
}

function checkElement(selector) {
  if (document.querySelector(selector) === null) {
    return rafAsync().then(() => checkElement(selector));
  } else {
    return Promise.resolve(true);
  }
}
