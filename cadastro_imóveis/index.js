function send() {
    event.preventDefault()
    let type = document.querySelector("input[name='type']").value
    let area = document.querySelector("input[name='area']").value
    let rent = document.querySelector("input[name='rented']").value
    
    let = newListValue = document.createElement("li")
    newListValue.innerText = "Tipo: " + type + ", " + "Área: " + area + ", " + "Alugado? " + rent

    let removeButton = document.createElement("button")
    removeButton.type = "button"
    removeButton.innerText = "Remover"
    removeButton.setAttribute("onclick", "removeHouse(this)")

    newListValue.appendChild(removeButton)


    document.getElementById("house-list").appendChild(newListValue)
   
}

function showList() {
    
    
}

function removeHouse(button) {
    let liToRemove = button.parentNode
    document.getElementById("house-list").removeChild(liToRemove)
}