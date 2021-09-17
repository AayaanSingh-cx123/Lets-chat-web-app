var firebaseConfig = {
    apiKey: "AIzaSyCB_hN7nYW7xBkaFeLRIL5AJ8vGO53ifCg",
    authDomain: "lets-chat-web-app-31a06.firebaseapp.com",
    databaseURL: "https://lets-chat-web-app-31a06-default-rtdb.firebaseio.com",
    projectId: "lets-chat-web-app-31a06",
    storageBucket: "lets-chat-web-app-31a06.appspot.com",
    messagingSenderId: "1043651266506",
    appId: "1:1043651266506:web:bf0ef2bf30c2188f507133",
    measurementId: "G-5GEP9JV35N"
  }; 
   // Initialize Firebase
firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome"+user_name+"!";
function addroom(){
    Room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").child(Room_name).update({
          purpose : "adding room name"
    });
    localStorage.setItem("room_name", Room_name);

    window.location ="chat_page.html";
}
function getData() {
    firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
    console.log("Room Name - " + Room_names);
    row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
    document.getElementById("output").innerHTML += row;
   
    //End code
    });});}
getData();
function redirectToRoomName(name) {
     console.log(name); 
     localStorage.setItem("room_name", name); 
     window.location = "chat_page.html";
     }
function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="index.html";
}