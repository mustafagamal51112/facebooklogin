
  const firebaseConfig = {
    
    apiKey: "AIzaSyBkx4LR2-CQ_mRwG39nPVeTAO8wXn0AWPs",
    authDomain: "test-b2b78.firebaseapp.com",
    databaseURL: "https://test-b2b78-default-rtdb.firebaseio.com",
    projectId: "test-b2b78",
    storageBucket: "test-b2b78.appspot.com",
    messagingSenderId: "904152492652",
    appId: "1:904152492652:web:00eb059ab62032ce344649"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);





// reffreence database

var Dbref =  firebase.database().ref()

let emil = document.getElementById('emil')
let password = document.getElementById('password')
let send = document.getElementById('send')


send.onclick =()=>{
  var myuser = {
    Emil:emil.value,
    password:password.value,
  }
  Dbref.push(myuser)
}




// studentname.on("value", snap=> userdata.innerHTML  = snap.val())




