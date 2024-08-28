
const item = document.getElementById("input_compras");
const btnSalvar = document.getElementById("btn_itens");
const listaDeCompras = document.getElementById("lista-de-compras");//classe da UL 
const btnDelete = document.querySelector(".remover");

//funções:

function adicionarItem(evento) {
    evento.preventDefault()//ñ deixa a pagina recarregar assim que chama a função, isso acontece por estar dentro de um campo 'form'.
    const itemDaLista = document.createElement("li"); //cria uma li.
    const containerLista = document.createElement("div"); // cria uma div.
    const containerNomeDoItem = document.createElement("div");
    const nomeDoItem = document.createElement("p");

    containerLista.classList.add("container_lista");//adiciona a classe ''container_lista'' a div criada.

    containerNomeDoItem.appendChild(nomeDoItem);
    const containerBotoes = document.createElement("div");

    nomeDoItem.innerText = item.value; //captura oq foi digitado do usuário usando o ''value''.

    //Não deixa adicionar sem nada escrito
    if (item.value === "") {
        alert('Escreva algo')

    } else {

        //checkbox
        const itensDaLista = document.createElement("div");
        itensDaLista.classList.add("itens_lista");
        containerLista.appendChild(itensDaLista);

        //checkbox container
        const containerCheckbox = document.createElement("div");
        containerCheckbox.classList.add("checkbox-container", "container_lista")
        itensDaLista.appendChild(containerCheckbox);
        //label
        const rotuloCheckbox = document.createElement("label");
        rotuloCheckbox.classList.add("checkbox-1");
        rotuloCheckbox.id = "checkbox-1";
        containerCheckbox.appendChild(rotuloCheckbox);
        containerCheckbox.appendChild(nomeDoItem);
        //caixinha do checkbox
        const inputDoCheckbox = document.createElement("input");
        inputDoCheckbox.type = "checkbox";
        inputDoCheckbox.id = "checkbox-1";
        inputDoCheckbox.classList.add("checkbox-input");
        rotuloCheckbox.appendChild(inputDoCheckbox);
        // caixinha costumizada do checkbox
        const checkboxCostumizado = document.createElement("div");
        checkboxCostumizado.classList.add("checkbox-costumizado", "checked");
        rotuloCheckbox.appendChild(checkboxCostumizado);

        //Seleção da checkbox

        // checkboxCostumizado.addEventListener("click", () => {
        //     checkboxCostumizado.classList.add("checked-after");
        // })

        //data e hora

        const date = new Date;
        const diaMesAno = (`(${date.getDay()}/${date.getMonth()}/${date.getFullYear()}) ás ${date.getHours()}:${date.getMinutes()}.`)
        const dataEHoraItem = document.createElement("p");
        dataEHoraItem.classList.add("item-data-texto");

        dataEHoraItem.innerHTML = diaMesAno;

        listaDeCompras.appendChild(dataEHoraItem);

        //

        //botao de remover item da lista 
        const botaoRemover = document.createElement("button");
        const imagemRemover = document.createElement("img");

        imagemRemover.src = "img/delete.svg";
        botaoRemover.classList.add("btn_item_lista");
        botaoRemover.classList.add("remover");

        containerBotoes.appendChild(botaoRemover)
        botaoRemover.appendChild(imagemRemover);
        //

        //função de remover item da lista
        botaoRemover.addEventListener("click", () => {
            itemDaLista.remove();
            dataEHoraItem.remove();
        })
        // 

        //botao de editar item da lista 
        const botaoEditar = document.createElement("button");
        const imagemEditar = document.createElement("img");

        imagemEditar.src = "img/edit.svg";
        botaoEditar.classList.add("btn_item_lista");

        containerBotoes.appendChild(botaoEditar)
        botaoEditar.appendChild(imagemEditar);
        //


        item.value = ""
    }

    itemDaLista.appendChild(containerLista); // coloca a div ''containerLista'' dentro da li criada.
    containerLista.appendChild(containerBotoes)
    listaDeCompras.appendChild(itemDaLista);

}


//botões:   

btnSalvar.addEventListener("click", adicionarItem);

