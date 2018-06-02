
document.addEventListener("DOMContentLoaded", () => {
  var config = {
    configOption: "Hey As I cannot share my api key here so added this line up Here You add the api key database url and other properties that will let firebase know this is oyur project"
  };
  firebase.initializeApp(config);
  //Google Login
  var Googleprovider = new firebase.auth.GoogleAuthProvider();
  var googlebutton = document.querySelector("#GoogleLogin");
  googlebutton.addEventListener("click", () => {
    firebase.auth().signInWithRedirect(Googleprovider);
  })

  firebase.auth().getRedirectResult().then(function (result) {
    if (result.credential) {

      var token = result.credential.accessToken;

    }
    var user = result.user;
    if (user) {

      document.querySelector("#LoginButton").classList.add("hidden");
      document.querySelector("#UserDetails").classList.remove("hidden");
      document.querySelector("#LogOut").classList.remove("hidden");
      document.querySelector("#profilePic").src = user.photoURL;
      document.querySelector("#UserName").textContent = `Hey ${user.displayName} Welcome To Talspo Is Your Email ${user.email}`
    }
  }).catch(function (error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    console.log(errorCode, errorMessage)
  });


  //facebook login
  var FaceBookprovider = new firebase.auth.FacebookAuthProvider();
  document.querySelector("#FacebookLogin").addEventListener("click", () => {
    firebase.auth().signInWithRedirect(FaceBookprovider);
  })
  firebase.auth().getRedirectResult().then(function (result) {
    if (result.credential) {
      // Facebook Access Token.  Used to access the Facebook API.
      var token = result.credential.accessToken;

    }
    // signed-in user info.
    var user = result.user;
    if (user) {
      document.querySelector("#LoginButton").classList.add("hidden");
      document.querySelector("#UserDetails").classList.remove("hidden");
      document.querySelector("#LogOut").classList.remove("hidden");
      document.querySelector("#profilePic").src = user.photoURL;
      document.querySelector("#UserName").textContent = `Hey ${user.displayName} Welcome To Talspo Is Your Email ${user.email}`
    }
  }).catch(function (error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorCode, errorMessage)
  });
  //Check if User is present or not authstatechange

  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      //Signed In
      //This is repeated Code 
      document.querySelector("#LoginButton").classList.add("hidden");
      document.querySelector("#UserDetails").classList.remove("hidden");
      document.querySelector("#LogOut").classList.remove("hidden");
      document.querySelector("#profilePic").src = user.photoURL;
      document.querySelector("#UserName").textContent = `Hey ${user.displayName} Welcome To Talspo Is Your Email ${user.email}`

    } else {
      //Repeated Code Did it due to rush

      document.querySelector("#LoginButton").classList.remove("hidden");
      document.querySelector("#UserDetails").classList.add("hidden");
      document.querySelector("#LogOut").classList.add("hidden");
    }
  });
  //Log out Button
  document.querySelector("#LogOut").addEventListener("click", () => {
    firebase.auth().signOut().then(function () {
      document.querySelector("#LoginButton").classList.remove("hidden");
      document.querySelector("#UserDetails").classList.add("hidden");
      document.querySelector("#LogOut").classList.add("hidden");
    }).catch(function (error) {
      console.log(error.code, error.message)
    });
  })

  //Materialize Css Code
  var Paralxinstances = M.Parallax.init(document.querySelectorAll('.parallax'), {

  })
  var Sliderinstances = M.Slider.init(document.querySelectorAll('.slider'), {
    interval: 3000,
    duration: 650
  });


  var SideNavinstances = M.Sidenav.init(document.querySelectorAll('.sidenav'), {
    inDuration: 200
  });

  AOS.init({
    disable: 'mobile',
    offset: 200,
    duration: 600,
    easing: 'ease-in-sine',
    delay: 100,
  });
})

