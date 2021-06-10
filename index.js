const usersView = document.getElementById('users');
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

// функція, яка отримує дані з БД firebase
function getData() {
    var dbRef = firebase.database().ref('users');
    dbRef.on('value', snap => renderData(Object.keys(snap.val()).map(key => ({ ...snap.val()[key], id: key }))));
}
// функція, яка відображає дані
function renderData(data) {
    usersView.innerHTML = '';
    // console.log(data)
    data.map(renderRow).forEach(row => usersView.appendChild(row))
}

// функція, яка будує 1 рядок
function renderRow(obj) {
    const row = document.createElement('tr');
    row.innerHTML += `<td scope="row">${obj.firstName}</td>`;
    row.innerHTML += `<td>${obj.lastName}</td>`;
    row.innerHTML += `<td>${obj.email}</td>`;
    row.innerHTML += `<td class="text-left">${obj.message}</td>`;
    row.innerHTML += `<td><button type="button" onclick="closedQuestions('${obj.id}')" class="btn btn-outline-success">Опрацьовано</button></td>`;

    return row;
}

// функція, яка видаляє дані з бази
function closedQuestions(id) {
    var dbRef = firebase.database().ref(`users/${id}`);
    dbRef.remove()
        .then(() => console.log("Remove succeeded."))
        .catch((error) => console.log("Remove failed: " + error.message));
}

document.addEventListener('DOMContentLoaded', getData);