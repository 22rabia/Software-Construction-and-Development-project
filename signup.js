
var email=document.getElementById("email").value;
function check() {
   password = document.getElementById("password").value;
   confirmPassword = document.getElementById("confirmPassword").value;

   var passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  if(password.length <8 ){
   if (password.test(password)) {
       document.getElementById("password").innerHTML = "Password should be at least 8 characters and contain one special character";
   } else {
       document.getElementById("password").innerHTML = "";
   }
  }

  if (confirmPassword.length > 0) {
    if (confirmPassword != password) {
      document.getElementById("confirm").innerHTML = "Password does not match";
    }  else {
      document.getElementById("confirm").innerHTML = "";
    }
  
    

  }
  else if (confirmPassword.length === 0) {
    document.getElementById("confirm").innerHTML = "";
  }
 
}
function execute(){
  if(email.length==0 ||password.length==0|| confirmPassword.length === 0  ){
    document.querySelector(".invalid").innerHTML="";
    document.querySelector(".fail").innerHTML="";
    
  }
}
setTimeout(execute,3000);

setTimeout(function(){
  document.querySelector(".sucess").innerHTML="";
}
,3000)

document.addEventListener("keyup", check);
