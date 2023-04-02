let dropdown = document.querySelector(".dropdown")

fetch(`https://api.sampleapis.com/avatar/characters`).then(response => response.json()).then(data => {
    console.log(data);
    data.forEach(character => {
        console.log(character)
        let tag = document.createElement("option")
        tag.innerText = character.name
       
        tag.value = character.id
        dropdown.append(tag)
    })

    // dropdown.addEventListener("change", (e) => {
    //     let selectedCharacter = e.target.childNodes[e.target.selectedIndex + 2].textContent
    
    //     fetch(`https://last-airbender-api.fly.dev/api/v1/characters?name=${selectedCharacter}`).then(response => response.json()).then(characterList => {
    //         character = characterList[0]
    //         console.log(character)
    //         let card = document.querySelector(".character-card")
    //         card.innerHTML = ""
    
    
    //         let name = document.createElement("h3")
    //         name.textContent = character.name
    //         card.append(name)
    
    // console.log(character.photoUrl)
    
    //         let image = document.createElement("img")
    //         image.src = character.photoUrl
    //         card.append(image)
    
    //         let h3affiliation = document.createElement('h3')
    //         h3affiliation.textContent = `Affiliation :`
    //         let origin = document.createElement("p")
    //         origin.textContent = character.affiliation
    //         card.append(h3affiliation , origin)
    
    //         let h3status = document.createElement('h3')
    //         h3status.textContent = `Allies :`
    //           let status = document.createElement("p")
    //         status.textContent = character.allies
    //         card.append(h3status ,status)
    
    //         let h3position = document.createElement('h3')
    //         h3position.textContent = `Enemies :`
    //         let species = document.createElement("p")
    //         species.textContent = character.enemies
    //         card.append(h3position ,species)
    
        
    //     })
    // })
    
    
    
    