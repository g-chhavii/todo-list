let items = ["helloworld" , "js" , "123"];

const itemsDiv = document.querySelector("#items");
const input = document.querySelector("#itemInput");
const strorageKey = "items";


// THIS WILL DISPLAY ITEMS IN HTML
function displayItems(){

    itemsDiv.innerHTML = null;
    //when rewriting all itmes so that evrything is removed inn the items


    // "Object.entries" allows u to loop and access the
    //index and items of the array at the same time & take items and return them in pairs 
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

        //to delete an item if the parent function is being called then 
        //the note will delete even if user doesnt want to, to avoid that
        //itis set to a function where if button is clicked
        //the other remove function will be called
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

