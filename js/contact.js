let form,firstName,lastName,email,message;var firebaseConfig={apiKey:"AIzaSyC7U2Ri262Q0WSfK8O0K9ZQRHlyeBhDMkw",authDomain:"pspa-3ead3.firebaseapp.com",databaseURL:"https://pspa-3ead3-default-rtdb.firebaseio.com",projectId:"pspa-3ead3",storageBucket:"pspa-3ead3.appspot.com",messagingSenderId:"603912410904",appId:"1:603912410904:web:6a167cfc39c121ba6a706d"};function setData(e){alert("kyky"),e.preventDefault();let a=firebase.database().ref("users");a.push({firstName:firstName.value,lastName:lastName.value,email:email.value,message:message.value}).then(e=>{clearForm(),alert("Дані надіслані"),console.log("key: ",e.key)})}function clearForm(){firstName.value="",lastName.value="",email.value="",message.value=""}firebase.initializeApp(firebaseConfig),window.onload=function(){console.log("onload"),form=document.forms.users,firstName=form.elements.firstname,lastName=form.elements.lastname,email=form.elements.email,message=form.elements.message,form.addEventListener("submit",setData)};
