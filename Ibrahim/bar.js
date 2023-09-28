const addCardButton = document.getElementById("addCardButton");

const cardContainer = document.getElementById("cardContainer");

addCardButton.addEventListener("click", function() {
    const card = document.createElement("div");
    card.className ='card2';
    const h1 = document.createElement('h1');
    h1.innerHTML = 'hi'
    card.appendChild(h1)
        card.textContent = "محتوى الكارد";

    cardContainer.appendChild(card);
});






