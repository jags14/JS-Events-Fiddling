var checklist = document.getElementById("checkList");
var items = checklist.querySelectorAll("li");
var inputs = checklist.querySelectorAll("input");



for(var i=0; i<items.length; i++){
    items[i].addEventListener("click", editItem);
    inputs[i].addEventListener("blur", updateItem);
    inputs[i].addEventListener("keypress", itemkeypress);

}

function editItem(){
    this.className = "edit";
    var input = this.querySelector("input");
    input.focus();
   // console.log("My input value is " + input.value);
    input.setSelectionRange(0, input.value.length);
}

function updateItem(){
    //console.log("we blurred! " + this.value);
    this.previousElementSibling.innerHTML = this.value;
    this.parentNode.className = "";
}

function itemkeypress(event){
    //console.log(event);
    if(event.which === 13){
        updateItem.call(this);
    }
}

