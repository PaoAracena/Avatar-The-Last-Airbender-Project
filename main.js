let dropdown = document.querySelector(".dropdown")

fetch(`https://api.sampleapis.com/avatar/characters`).then(response => response.json()).then(data => {
    console.log(data)
    data.forEach(character => {
        console.log(character)
        let tag = document.createElement("option")
        tag.innerText = character.name
        tag.value = character.id
        dropdown.append(tag)
    });
})