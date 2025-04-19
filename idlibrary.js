function showMainStatus() {
    document.getElementById("mainstatuses").classList.toggle("show");
}

function showDebuffs() {
    document.getElementById("debuffs").classList.toggle("show");
}

document.addEventListener("DOMContentLoaded", function() {
    const tagElements = document.querySelectorAll(".tag");

    tagElements.forEach(tag => {
        tag.addEventListener("click", function() {
            const tagValue = this.id || this.innerText;
            const prevName = localStorage.getItem("prevName");
            localStorage.setItem("prevName", tagValue);
            const allCards = document.querySelectorAll(".identity-card");
            
            if(prevName == tagValue) {
                allCards.forEach(card => {
                    card.style.display = "block";
                });
                localStorage.setItem("prevName", "none");
                return;
            }
            
            filterByTag(tagValue);
        });
    });
});

function filterByTag(name) {
    const tagElements = document.querySelectorAll(".identity-tag");
    const matchingCards = [];
    
    for(let i = 0; i < tagElements.length; i++) {
        if(tagElements[i].innerText.toLowerCase() === name.toLowerCase()) {
            const card = tagElements[i].closest(".identity-card");
            if(card) {
                matchingCards.push(card);
            }
        }
    }

    const allCards = document.querySelectorAll(".identity-card");
    
    // Hide all cards first
    allCards.forEach(card => {
        card.style.display = "none";
    });
    
    // Show only matching cards
    matchingCards.forEach(card => {
        card.style.display = "block";
    });
}