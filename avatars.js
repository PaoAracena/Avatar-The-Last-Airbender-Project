let dropdown = document.querySelector(".dropdown")

fetch(`https://last-airbender-api.fly.dev/api/v1/characters/avatar`).then(response => response.json()).then(data => {
    console.log(data);
    data.forEach(character => {
        // console.log(character)
        let tag = document.createElement("option")
        tag.innerText = character.name
        tag.value = character.id
        dropdown.append(tag)
    });
})
dropdown.addEventListener("change", (e) => {
    console.log(dropdown.value)

    fetch(`https://last-airbender-api.fly.dev/api/v1/characters/avatar/${dropdown.value}`).then(response => response.json()).then(character => {
        console.log(character)
        let card = document.querySelector(".character-card")
        card.innerHTML = ""


        let name = document.createElement("h3")
        name.textContent = character.name
        card.append(name)

        let status = document.createElement("p")
        status.textContent = character.profession
        card.append(status)

        let species = document.createElement("p")
        species.textContent = character.position
        card.append(species)

        let origin = document.createElement("p")
        origin.textContent = character.affiliation
        card.append(origin)

        let image = document.createElement
    })
})