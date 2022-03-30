function save() {
    event.preventDefault()
    let name = document.querySelector("input[name='name']").value
    let programmingLang = document.querySelector("select[name='programming-lang']").value  /* assim: option:checked ou assim: .value */
    alert("Nome: " + name + "\nLinguagem de Programação: " + programmingLang)
}