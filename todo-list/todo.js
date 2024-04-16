let items = ["helloworld" , "js" , "123"];

const itemsDiv = document.querySelector("#items");
const input = document.querySelector("#itemInput");
const strorageKey = "items";

// THIS WILL DISPLAY ITEMS IN HTML
function displayItems(){
    itemsDiv.innerHTML = null;
    for (const [idx,item] of Object.entries(items)) {4
        //<div>
        //<p>Helloworld</p>
        //<button>delete note</button>
        //</div>
                                                     
        // DIV TO STORE BOTH P AND BTN
        const container = document.createElement("div");
        container.style.marginBottom = "10px";
        
        const text = document.createElement("p");
        text.style.display = "inline";
        text.style.marginRight = "10px";
        // stores the value of item  in the paragraph
        text.textContent = item;

        const button = document.createElement("button");
        button.textContent = "Delete note";

        button.onclick = () =>  removeItem(idx);

        container.appendChild(text);
        container.appendChild(button);
        itemsDiv.appendChild(container);
    }
}
displayItems();

// TO STORE AND LOAD ITEMS IN THE BROWSER ON THE CLIENT SIDE
function loadItems(){
    const oldItems = localStorage.getItem(strorageKey)
    if (oldItems) {
        items = JSON.parse(oldItems);
        displayItems();
    }
}

function saveItems(){
    const strItems = JSON.stringify(items);
    localStorage.setItem(strorageKey, strItems);
}

function addItem(){
    const value = input.value;
    
    //IF THE NOTE IS EMPTY AND THERE IS NO VALUE INIT
    if (!value) {
        alert("you can not add an empty item");
        return
    } 
    items.push(value);
    displayItems();
    input.value = "";
    saveItems();
}

function removeItem(idx){
    items.splice(idx, 1);
    displayItems();
    saveItems();
}

document.addEventListener("DOMContentLoaded" , loadItems);

