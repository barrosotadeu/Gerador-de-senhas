const letrasMinusculas = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'i', 'j', 'l', 'k', 'm', 'n', 'o', 'p', 'q', 'r', 's','t','u', 'y','w','x','z'];
const letrasMaiusculas = letrasMinusculas.map(e => e.toUpperCase());


const numeros = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
let senha = '';





document.getElementById('botao').addEventListener('click', (e) =>{
    e.preventDefault();
    senha = '';

    let conjuntoDeCaracteres = [];
    const opcoesClicadas = document.querySelectorAll('[name=escolher-caracteres]:checked');    
    for(let i = 0; i < opcoesClicadas.length; i++){        
        if(opcoesClicadas[i].value == 'numeros'){
            conjuntoDeCaracteres = conjuntoDeCaracteres.concat(numeros);
        }else if(opcoesClicadas[i].value == 'letrasMaiusculas') {
            conjuntoDeCaracteres = conjuntoDeCaracteres.concat(letrasMaiusculas);
        }else if(opcoesClicadas[i].value == 'letrasMinusculas'){
            conjuntoDeCaracteres = conjuntoDeCaracteres.concat(letrasMinusculas);
        }
    }
    if(conjuntoDeCaracteres.length <= 0){
        document.getElementById("senha").innerHTML = 'Por favor, selecione pelo menos uma opção.';
        return;
    }
    
   
    let quantidade = parseInt(document.getElementById('select-quantidade').value);    
    for(let i = 0; i < quantidade; i++){
        let caracterAAdicionarIndex = Math.floor(Math.random() * conjuntoDeCaracteres.length);
        senha += conjuntoDeCaracteres[caracterAAdicionarIndex];        
        
    }
    document.getElementById('senha').innerHTML = senha;
    document.getElementById('botao-copiar-senha').style.display = 'inline';
})

function copiarSenha(){
    alert(`Senha ${senha} copiada com sucesso!`);
    navigator.clipboard.writeText(senha);

}

document.getElementById('botao-copiar-senha').addEventListener('click', copiarSenha);