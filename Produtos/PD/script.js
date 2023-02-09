
/*
    Criar a divCard para exibir as imagens dos produtos ao clicar na foto de miniatura do produto
*/
const divCard = document.createElement('div');
divCard.setAttribute('class', "divCard");
divCard.setAttribute('class', "divCard"); 

/*
    Foi criado um elemento de html para a tag de link (a) para fechar o divCard. Quando o usuário clicar o botão fechar será chamada uma função que recolhe a divCard.
*/

const fechar = document.createElement('a');
fechar.innerHTML = "Fechar";
fechar.setAttribute('class', "fechar");
divCard.appendChild(fechar);

/*
    Criar uma imagem para que ao clicar nas fotos dos produtos seja mostrado a foto selecionada 
*/

const imgCard = document.createElement('img');
imgCard.setAttribute('id', "imgCard");
divCard.appendChild(imgCard);


//função não é reutilizada, ou seja ela só consegue ser utilizada no botão fechar.
fechar.onclick = function(){

    document.getElementsByClassName("divCard")[0].style.height = "0vh";
    document.getElementById("imgCard").style.opacity = "0";
}



const body = window.document.body;

function paginaProdutos(){

    const header = document.createElement('header'); 
    const h1 = document.createElement('h1');
    h1.innerHTML = 'Produtos';
    header.appendChild(h1);

    const main = document.createElement('main');

    var position = 0;

    while (position <listaProdutos.length){

        var divPD1 = document.createElement ('div')
        var divPD2 = document.createElement('div');
        var h2nome = document.createElement('h2');
        var img1 = document.createElement('img'); 
        var p = document.createElement ('p');

        var x = 0; // variavel para a criação do segundo laço

        divPD1.setAttribute('class', 'divPD1');
        
        divPD2.setAttribute('class','divPD2'); // segunda div, usada para as fotos pequenas dentro do laço

        
        h2nome.innerHTML = listaProdutos[position].brand;
        
        img1.setAttribute('src',`${listaProdutos[position].thumbnail}`);
        img1.setAttribute('class','img1');
        
        
        p.setAttribute('class', 'p');
        p.innerHTML = listaProdutos[position].category;

        divPD1.appendChild (h2nome);
        divPD1.appendChild(img1); 
        divPD1.appendChild (p);

        
        // laço para as imagens pequenas  
        while(x < listaProdutos[position].images.length){
           
            var img2 = document.createElement ('img');
            img2.setAttribute('src', listaProdutos[position].images[x]);
            img2.setAttribute('class', 'img2');
            
            img2.addEventListener("click",exibirImagem.bind(this,listaProdutos[position].images[x]));

            divPD2.appendChild(img2);
            x++;
        }
        
        
        divPD1.appendChild(divPD2);
        
        
        main.appendChild(divPD1);
        
        
        position++;

    }
 
    body.appendChild(divCard);
    body.appendChild(header);
    body.appendChild(main);
    

}
body.addEventListener("load",paginaProdutos());

function exibirImagem(foto){

    document.getElementsByClassName("divCard")[0].style.height = "60vh";
    document.getElementById("imgCard").src = foto;
    document.getElementById("imgCard").style.opacity = "1";
}


// create é utilizado quando usamos um div create.Element
// appenchild adicição de tags criadas com create.Element