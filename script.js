function logar(){
    var enviar = document.getElementById('enviar') ;
    var email = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;
    var continuar = document.getElementById('continue');
    
 
      if(email === "admin" && senha === "admin"){
         alert('Sucesso');
         window.location.href="continue.html";
         
      } else {
         alert('Usuario ou senha incorretos');
      }
 }
 