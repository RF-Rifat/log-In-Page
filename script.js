let add = document.getElementById('addMoney');
let totalMoney = document.getElementById('totalMoney');
let btnAdd = document.getElementById("add");
let remove = document.getElementById('removeMoney');
let btnRemove = document.getElementById("remove");

let total = 0;

// Add Function
btnAdd.addEventListener("click",function(){
    addMoney = parseInt(add.value);
        if(add.value == ""){
            alert("Insert Your Amount");
        }else{
            total = total + addMoney;
            totalMoney.innerHTML = `${total} $`;
            add.value = "";
    }
})

// Remove function
btnRemove.addEventListener("click",function(){
    removeMoney = parseInt(remove.value);
        if(remove.value == ""){
            return false
        }else{
            total = total - removeMoney;
            totalMoney.innerHTML = `${total} $`;
            remove.value = "";
    }
})

