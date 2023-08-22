// Configuração do Firebase de seu aplicativo
//ADICIONE OS LINKS DO FIREBASE AQUI
const firebaseConfig = {
    apiKey: "AIzaSyA6iPtjqoE5PS3ZO72EVwkYSMZsyqF3IIs",
    authDomain: "project-fcf46.firebaseapp.com",
    databaseURL: "https://project-fcf46-default-rtdb.firebaseio.com",
    projectId: "project-fcf46",
    storageBucket: "project-fcf46.appspot.com",
    messagingSenderId: "382085972497",
    appId: "1:382085972497:web:169cd3e17e8215778267b0",
    measurementId: "G-JZPC0MPCGR"
  };


// Inicialize o Firebase
firebase.initializeApp(firebaseConfig);

function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    

localStorage.setItem("user_name", user_name);

window.location = "chat_room.html";
    
}



