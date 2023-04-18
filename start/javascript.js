function pievienot(){
    let uzdevums = document.getElementById('text').value;
    const listItem = document.createElement("li");
    listItem.textContent = uzdevums;
    document.getElementById("list").appendChild(listItem);
    document.getElementById('text').value = "";
}
