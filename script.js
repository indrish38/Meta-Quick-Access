const firebaseConfig = {
    apiKey: "AIzaSyBVzR3zsP7MbU5B5_oGNsLX5UVtTSK-bEc",
    authDomain: "database-5b5ce.firebaseapp.com",
    databaseURL: "https://database-5b5ce-default-rtdb.firebaseio.com",
    projectId: "database-5b5ce",
    storageBucket: "database-5b5ce.appspot.com",
    messagingSenderId: "1058646393950",
    appId: "1:1058646393950:web:6872e469cea67e94cf20cf",
    measurementId: "G-FCKBJST9NB"
};

firebase.initializeApp(firebaseConfig);

var auth = firebase.auth();
var formdb = firebase.database();

document.getElementById('regform').addEventListener('submit', submitSignupForm);

function submitSignupForm(e){
    e.preventDefault();

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    auth.createUserWithEmailAndPassword(email, password)
    .then(()=>{
        var user = auth.currentUser
        formdb.ref().child('user-data/' + user.email.replace(/[@|.]/g,'-')).set({
            email: email,
            name: name,
            password: password,
            last_login: Date.now()
        });
        alert("Registeration Success");
    }).catch((error)=>{
        // alert(error.code);
        alert(error.message);
    });
}

function alert(s){
    const alert = document.querySelector(".alert");
    alert.innerHTML = s;
    console.log(alert.innerHTML);

    alert.style.display = 'block';

    setTimeout(()=>{
        alert.style.display = 'none';
    }, 3000);
}