let nomeCadastro = [];
let senhaCadastro = [];

function Cadastrar(){
    let nomeDigitado= document.getElementById("nomeCadastro").value;
    let senhaDigitada= document.getElementById("senhaCadastro").value;
 if(nomeDigitado!=="" && senhaDigitada!==""){
    nomeCadastro.push(nomeDigitado);
    senhaCadastro.push(senhaDigitada);

 }else{
    alert("Algo foi preenchido incorreto, Verifique!")
 }
}
function Entrar(){
   nomeDigitado = document.getElementById("cadastroLogin").value
   senhaDigitada= document.getElementById("senhaLongin").value
   if(nomeCadastro.includes(nomeDigitado)){
      if(senhaCadastro[nomeCadastro.indexOf(nomeDigitado)]==senhaDigitada){
         window.location.href="logado.html"
      }else{
         alert("usuário com senha incorreta!")
      }


   }else{
      alert("usuário sem cadastro!")
   }


}



