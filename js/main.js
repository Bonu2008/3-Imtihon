var elList = document.querySelector(".list")


function Pokemon(_pokemon) {

    for (var j = 0; j < _pokemon.length; j++) {
        var newLi = document.createElement("li")
        var newImg = document.createElement("img")
        var newSpan = document.createElement("span")
        var newHeading = document.createElement("h2")
        var newHeading = document.createElement("h2")
        var newText = document.createElement("p")
        var newBtn = document.createElement("button")
        var newVazn = document.createElement("span")
        var newYosh = document.createElement("span")


        newLi.setAttribute("class", "item")
        newImg.setAttribute("class", "item__img")
        newImg.setAttribute("src", _pokemon[j].img)
        newImg.setAttribute("alt", _pokemon[j].name)
        newImg.setAttribute("width", 157)
        newImg.setAttribute("height", 157)
        newSpan.setAttribute("class", "line")
        newHeading.setAttribute("class", "heading")
        newText.setAttribute("class", "text")
        newBtn.setAttribute("data-uuid", "close")
        newBtn.setAttribute("class", "btn")
        newBtn.setAttribute("type", "button")
        newVazn.setAttribute("class", "span__vazin")
        newYosh.setAttribute("class", "span__yosh")

        newHeading.textContent = _pokemon[j].name
        newText.textContent = _pokemon[j].type
        newBtn.textContent = "❤️"
        newVazn.textContent = _pokemon[j].weight
        newYosh.textContent = _pokemon[j].avg_spawns + " age"

        newLi.appendChild(newImg)
        newLi.appendChild(newSpan)
        newLi.appendChild(newHeading)
        newLi.appendChild(newText)
        newLi.appendChild(newBtn)
        newLi.appendChild(newVazn)
        newLi.appendChild(newYosh)
        elList.appendChild(newLi)
    }
}

Pokemon(pokemons)

var elButton = document.querySelectorAll(".btn")
var TextLike = document.querySelector(".count__text")
var cound = 0;

setInterval(function add(){
    TextLike.textContent = cound
}, 500)

for (var j = 0; j < elButton.length; j++) {
    elButton[j].addEventListener("click", (evt) => {
        if(evt.target.dataset.uuid == "close"){
            cound += 1
            evt.target.dataset.uuid = "open"

        }else if(evt.target.dataset.uuid == "open"){
            cound -= 1
            evt.target.dataset.uuid = "close"
        }
    })
}