function helloWorld() {
    console.log("Hello world");
    document.getElementsByClassName("h1")[0].textContent = "Moi maailma";
}

function addItems() {
    const lista = document.getElementById("my-list")

    let newLi = document.createElement("li");

    newLi.innerText = document.getElementById("message").value;

    lista.appendChild(newLi);

}