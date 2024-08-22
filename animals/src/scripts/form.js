import Animal from "../model/animals.model.js"

$('#petForm').on('submit', function(e) {
    e.preventDefault()
    const nome = $('#nome').val()
    const raca = $('#raca').val()
    const especie = $('#especie').val()
    const idade = $('#idade').val()
    const peso = $('#peso').val()
    const cor = $('#cor').val()
    const dono = $('#dono').val()

    const animal = new Animal(nome, raca, especie, idade, peso, cor, dono)
    
    const animalList = []
    
    animalList.push(animal)

    animalList.forEach(animal => {
       alert('Animal cadastrado')
    })

    console.log(animalList)
    console.log(animal)
    
    function displayAnimal(animal) {
        const animalContainer = document.createElement('div')
        animalContainer.innerHTML = `
            <h3>${animal.nome}</h3>
            <p>Raça: ${animal.raca}</p>
            <p>Espécie: ${animal.especie}</p>
            <p>Idade: ${animal.idade}</p>
            <p>Peso: ${animal.peso}</p>
            <p>Cor: ${animal.cor}</p>
            <p>Dono: ${animal.dono}</p>
        `
        document.body.appendChild(animalContainer)
    }

    animalList.forEach(animal => {
        displayAnimal(animal)
    })
})

