var myCards = [];
var myCoins = 20;
var itemsToBuy = [];

let myMoneyElement = document.getElementById("myMoney").value;

const TYPE_CARD = ["ATK","DEF","REFLECT"];
const PATH = ["src/inci.jpg", 'src/dkpunch.jpg','src/dksideb.jpg'];
const PATH_ELEMENTS = ["/src/shield.png","/src/swords.png"];

const ALLCARDS = [
    {
        id: 1,
        name: "Alolan Whip",
        src: PATH[0],
        cost: 4,
        life: 1,
        def: 6,
        type: TYPE_CARD[0],
        type_element: PATH_ELEMENTS[0],
        attack: 6
    },
    {
        id: 2,
        name: "Giant Punch",
        src: PATH[1],
        cost: 8,
        life: 8,
        def: 7,
        type: TYPE_CARD[0],
        type_element: PATH_ELEMENTS[1],
        attack: 6
    },
    {
        id: 3,
        name: "Side B",
        src: PATH[2],
        cost: 3,
        life: 1,
        def: 8,
        type: TYPE_CARD[0],
        type_element: PATH_ELEMENTS[1],
        attack: 4
    },
];

function buyCard() {
    let total = 0;
    for(let item of itemsToBuy)
    {
        total += item.cost;
    }

    
    if(myCoins > total && itemsToBuy.length > 0){
        for(let item of itemsToBuy)
        {
            myCards.push(item);
        }
        console.log(myCards);
        renderCards(ALLCARDS, 2);
        renderMoney(total,2);
    }
    else {
        console.log("Dinero insuficiente!");
    }
};

function getCard(e){
    let idElement = parseInt(e.id);
    // console.log(idElement);

    let selectedITem = ALLCARDS.find((card) => card.id == idElement);

    if(selectedITem != undefined){
        itemsToBuy.push(selectedITem);
        ALLCARDS.splice(selectedITem.id -1, 1);

    }
    // console.log(selectedITem);

    console.log(itemsToBuy);
    // console.log(ALLCARDS);
    // renderCards(ALLCARDS, 2);
}

function renderCards(deck, option){

    let idElement;
    (option == 1) ? idElement = "deck" : idElement = "store-items";
    // console.log(idElement);
    // console.log(idElement);
    // console.log(deck);
    // store div
    let parentDiv = document.getElementById(idElement);
    while (parentDiv.firstChild) parentDiv.removeChild(parentDiv.firstChild);

    for(let card of ALLCARDS){
        // console.log(card);

        let newCard = document.createElement("div");
        let newHead = document.createElement("div");
        let newCenter = document.createElement("div");
        let newCenterImg = document.createElement("img");
        let newFooter = document.createElement("div");
        let newType = document.createElement("div");
        let newTypeImg = document.createElement("img");
        let newCost = document.createElement("div");

        newCard.setAttribute("id", card.id);
        newCard.setAttribute("class", "store-card");
        newCard.setAttribute( "onClick", "getCard(this);");

        // newCard.innerHTML = 's';

        newHead.setAttribute("class", "store-card-head");
        newCenter.setAttribute("class", "store-card-center");
        newFooter.setAttribute("class", "store-card-footer");

        newType.setAttribute("class", "store-card-type");
        newCost.setAttribute("class", "store-card-cost");

        newTypeImg.setAttribute("src", card.type_element);
        newCenterImg.setAttribute("src", card.src);

        newCost.innerText = card.cost;
        newFooter.innerText = card.name;

        //APPEND BLOCK
        // --------------------------------
        newType.appendChild(newTypeImg);
        newCenter.appendChild(newCenterImg);

        newHead.appendChild(newType);
        newHead.appendChild(newCost);

        newCard.appendChild(newCenter);
        newCard.appendChild(newFooter);
        newCard.appendChild(newHead);

        parentDiv.appendChild(newCard);
    }
}

function renderMoney(cost, option){
    if(option == 1){
        myCoins+=cost;
    }
    else {
        myCoins-=cost;
    }

    myMoneyElement = myCoins;
    console.log(myMoneyElement, cost);
    // console.log(itemsToBuy.length);
};

function passTurnInShop(){
    console.log("Paso turno en tienda!.");
}

renderCards(ALLCARDS, 2);
// renderMoney();
