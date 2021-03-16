//carregar as coisas que precisa para ejs
const express= require ('express');
const app = express();

// função anonima para que essas informaçoes não sejam acessadas 
(function (){
    const pesquisa = Document.getElementById("pesquisa");
    const perfil = document.getElementById("perfil");
    const url = "https://api.github.com/orgs/grupotesseract/public_members";
    const client_id = "Iv1.5ea53de766e5b33c";
    const client_secret = "dfc4b2ef84326f07a87961cf954fa5aed16ec89e";
    
    //função assincrona 
    async function getUsuario(usuario){
        const perfilResponse = await fetch(`${ url}/${usuario}? client_id=${client_id}&client_secret=${client_secret}`)
        
        //convertendo pra json 
        const perfil = perfilResponse.json();
        return perfil;
    }

     function showPerfil(usuario){
       perfil.innerHTML= `<div class="row"> 
       <div class="col -md-4"> 
         <div class="card" style="width: 18rem;">  
          <img class="card-img-top" src="${usario.avatar_url}">  
            <ul class="list-group-flush">
             <li class="list-group-item"><span class="badge"></span></li>
             <li class="list-group-item"><span class="badge"></span></li>
             <li class="list-group-item"><span class="badge"></span></li>
            </ul>
            <div class="card-body">
              <a href="" class="btn btn-badge btn-block"> Visualizar Perfil</a>
            </div>
          </div>
       </div>
       <div class="col -md8"><div id="repost"></div></div>
     </div> `
       


     }
    pesquisa.addEventListener("keyup", (e) =>{
        const usuario = e.target.value;
        
        //validação da pesquisa
        if(usuario.lenght >0){
            getUsuario(usuario) .then(res => console.log(res))
        }
    })
})();



app.set('view engine', 'ejs');


//pagina index
const handlerRaiz = (req,res,)=>{
    res.render('index');
};

//rota
app.get('/', handlerRaiz);

app.listen(3001, () =>{
    console.log('Servido On');
});