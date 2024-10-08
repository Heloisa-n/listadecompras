
const item = document.getElementById("input_compras");
const btnSalvar = document.getElementById("btn_itens");
const listaDeCompras = document.getElementById("lista-de-compras");//classe da UL 
const listaDeItensComprados = document.getElementById("lista-de-comprados");
const itensComprados = document.getElementById("itens-comprados")
//funções:

function adicionarItem(evento) {

    evento.preventDefault()//ñ deixa a pagina recarregar assim que chama a função, isso acontece por estar dentro de um campo 'form'.
    const itemDaLista = document.createElement("li"); //cria uma li.
    itemDaLista.id = "itens-da-lista";
    const containerLista = document.createElement("div"); // cria uma div.
    const containerNomeDoItem = document.createElement("div");
    const nomeDoItem = document.createElement("p");
    nomeDoItem.id = "texto_item"

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
        containerCheckbox.classList.add("container_item_lista")
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
        checkboxCostumizado.classList.add("checkbox-costumizado");
        rotuloCheckbox.appendChild(checkboxCostumizado);

        //---------------mandando para lista de comprados--------------


        //tirar da lista de compras
        checkboxCostumizado.addEventListener("click", () => {
            itemDaLista.classList.add("oculto");
            containerLista.classList.add("oculto");
            dataEHoraItem.remove();
            //Container pai
            const containerListaComprados = document.createElement("div");
            containerListaComprados.classList.add("container_lista");
            itensComprados.appendChild(containerListaComprados);
            //container do checkbox
            const itensListaComprados = document.createElement("div");
            itensListaComprados.classList.add("itens_lista");
            itensListaComprados.id = "itens_lista";
            containerListaComprados.appendChild(itensListaComprados);
            //checkbox
            const checkboxContainerComprados = document.createElement("div");
            checkboxContainerComprados.classList.add("container_item_lista");
            itensListaComprados.appendChild(checkboxContainerComprados);
            //label
            const rotuloCheckboxComprados = document.createElement("label");
            rotuloCheckboxComprados.classList.add("checkbox-1");
            rotuloCheckboxComprados.id = "checkbox-1";
            checkboxContainerComprados.appendChild(rotuloCheckboxComprados);
            checkboxContainerComprados.appendChild(nomeDoItem);
            nomeDoItem.classList.add("texto-riscado")
            //input
            const inputDoCheckboxComprados = document.createElement("input");
            inputDoCheckboxComprados.type = "checkbox"
            inputDoCheckboxComprados.classList.add("checkbox-input")
            inputDoCheckboxComprados.checked = true;
            inputDoCheckboxComprados.id = "checkbox-1";
            rotuloCheckboxComprados.appendChild(inputDoCheckboxComprados);

            //checkbox costumizado
            const checkboxCostumizadoComprados = document.createElement("div");
            checkboxCostumizadoComprados.classList.add("checkbox-costumizado", "checked");
            rotuloCheckboxComprados.appendChild(checkboxCostumizadoComprados);
            //Delete/edite
            const containerRemoverEditar = document.createElement("div");
            itensListaComprados.appendChild(containerRemoverEditar);
            //botao remover
            const botaoRemover = document.createElement("button");
            containerRemoverEditar.appendChild(botaoRemover);
            botaoRemover.classList.add("btn_item_lista");
            //img botao remover
            const imagemRemover = document.createElement("img");
            botaoRemover.appendChild(imagemRemover);
            imagemRemover.src = "img/delete.svg";
            //função de remover item da lista
            botaoRemover.addEventListener("click", () => {
                itensListaComprados.remove();
                containerRemoverEditar.remove();
            })

            checkboxCostumizadoComprados.addEventListener("click", () => {
                containerCheckbox.appendChild(nomeDoItem);
                nomeDoItem.classList.remove("texto-riscado")
                containerLista.appendChild(dataEHoraItem);
                containerListaComprados.remove()

                itemDaLista.classList.remove("oculto");
                containerLista.classList.remove("oculto");
            })

            //--------------------------------------------------------------


        })


        //data e hora

        const date = new Date;
        // const diaMesAno = (`(${date.getDay()}/${date.getMonth()}/${date.getFullYear()}) ás ${date.getHours()}:${date.getMinutes()}.`);
        const diaMesAno = (`${new Date().toLocaleDateString("pt-BR",{weekday:"long"})} (${new Date().toLocaleDateString()}) ás ${new Date().toLocaleTimeString("pt-BR", {hour: "numeric", minute:"numeric"})}.`);
        const dataEHoraItem = document.createElement("p");
        dataEHoraItem.classList.add("item-data-texto");
        dataEHoraItem.innerHTML = diaMesAno;
        containerLista.appendChild(dataEHoraItem);

        //container data e hora

        //

        //botao de remover item da lista 
        const botaoRemover = document.createElement("button");
        const imagemRemover = document.createElement("img");

        imagemRemover.src = "img/delete.svg";
        botaoRemover.classList.add("btn_item_lista");

        containerBotoes.appendChild(botaoRemover);
        botaoRemover.appendChild(imagemRemover);

        itensDaLista.appendChild(containerBotoes)

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
        botaoEditar.classList.add("btn_item_lista", "btn-Editar");

        containerBotoes.appendChild(botaoEditar)
        botaoEditar.appendChild(imagemEditar);

        botaoEditar.addEventListener("click", () => {

            let editarItem = prompt("Digite o item que deseja adicionar:");

            nomeDoItem.innerHTML = editarItem;
        })
        //


        item.value = ""

    }

    itemDaLista.appendChild(containerLista); // coloca a div ''containerLista'' dentro da li criada.

    listaDeCompras.appendChild(itemDaLista);



}

//botões:   

btnSalvar.addEventListener("click", adicionarItem);

//scroll

const altura = listaDeCompras.style.height = "190px";
const alturaComprados = listaDeItensComprados.style.height = "190px";

if (listaDeCompras.style.height == altura) {
    listaDeCompras.classList.add("scroll");
}

if(listaDeItensComprados.style.height == alturaComprados){
    listaDeItensComprados.classList.add("scroll");
}
