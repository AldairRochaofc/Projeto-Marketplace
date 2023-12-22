//On this Java Script Code we will Generate page based on the shop data base. We also need to create an cart system e make it comunicates with each other.
//utilize fetch para fazer a comunicação com o JSON FILE. mas também podemos utilizar servidores git para providenciar um código mais limpo



//I'm using this code to simplify my idea
const sellItens = document.body.querySelector("#gridItemsAVenda");
const itemsHTML = [];

for (let j = 1; j <= 10; j++) {
    for (let i = 1; i <= 5; i++) {
        itemsHTML.push(`<div class="col-2 mb-3">
                            <div class="bg-black bg-opacity-75 text-white p-3 h-100 w-100 item-hover">Item ${j},${i}</div>
                        </div>`);
    }
}
sellItens.innerHTML = `<div class="row mx-n2">${itemsHTML.join('')}</div>`;
