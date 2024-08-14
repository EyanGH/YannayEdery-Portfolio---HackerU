document.addEventListener('DOMContentLoaded', function() {
    const cardName = 'Dark Magician';
    const apiUrl = `https://db.ygoprodeck.com/api/v7/cardinfo.php?name=${encodeURIComponent(cardName)}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const card = data.data[0]; 
            displayCard(card);
        })
        .catch(error => console.error('Error fetching card data:', error));

    function displayCard(card) {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');

        cardElement.innerHTML = `
            <h2>${card.name}</h2>
            <img src="${card.card_images[0].image_url}" alt="${card.name}">
            <p>Type: ${card.type}</p>
            <p>ATK: ${card.atk}</p>
            <p>DEF: ${card.def}</p>
            <p>${card.desc}</p>
        `;

        document.body.appendChild(cardElement);
    }
});


document.addEventListener('DOMContentLoaded', function() {
    const playerDeck = document.getElementById('playerDeck');
    const playerHand = document.getElementById('playerHand');
    const playerMonsterZone = document.getElementById('playerMonsterZone');
    

const deck = [
    { name: 'Blue-Eyes White Dragon', type: 'Monster', attack: 3000, defense: 2500 },
    { name: 'Dark Magician', type: 'Monster', attack: 2500, defense: 2100 },
    { name: 'Kuriboh', type: 'Monster', attack: 300, defense: 200 },
    { name: 'Mirror Force', type: 'Trap', effect: 'Destroy all your opponent\'s Attack Position monsters.' },
    { name: 'Monster Reborn', type: 'Spell', effect: 'Target 1 monster in either player\'s Graveyard; Special Summon it.' },
    // Add more cards here
];


    let hand = [];


    function drawCard() {
        if (deck.length > 0) {
            const drawnCard = deck.pop();
            hand.push(drawnCard);
            updateHand();
            updateDeckCount();
        }
    }


    function updateHand() {
        playerHand.innerHTML = '';
        hand.forEach(card => {
            const cardElement = document.createElement('div');
            cardElement.classList.add('card');
            cardElement.textContent = card.name;
            cardElement.addEventListener('click', function() {
                summonMonster(card);
            });
            playerHand.appendChild(cardElement);
        });
    }


    function updateDeckCount() {
        playerDeck.textContent = `Deck (${deck.length})`;
    }


    function summonMonster(card) {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');
        cardElement.textContent = `${card.name}\nATK: ${card.attack}\nDEF: ${card.defense}`;
        playerMonsterZone.appendChild(cardElement);
        

        hand = hand.filter(c => c !== card);
        updateHand();
    }


    for (let i = 0; i < 5; i++) {
        drawCard();
    }
    
    updateDeckCount();
});


