document.addEventListener('DOMContentLoaded', () => {
const cardArray = [
    {
        name: 'flareon',
        img: 'images/flareon.png'
    },
    {
        name: 'flareon',
        img: 'images/flareon.png'
    },
    {
        name: 'vaporeon',
        img: 'images/vaporeon.png'
    },
    {
        name: 'vaporeon',
        img: 'images/vaporeon.png'
    },
    {
        name: 'jolteon',
        img: 'images/jolteon.png'
    },
    {
        name: 'jolteon',
        img: 'images/jolteon.png'
    },
    {
        name: 'espeon',
        img: 'images/espeon.png'
    },
    {
        name: 'espeon',
        img: 'images/espeon.png'
    },
    {
        name: 'leafeon',
        img: 'images/leafeon.png'
    },
    {
        name: 'leafeon',
        img: 'images/leafeon.png'
    },
    {
        name: 'umbreaon',
        img: 'images/umbreon.png'
    },
    {
        name: 'umbreaon',
        img: 'images/umbreon.png'
    },
]
    cardArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.grid');
    const resultDisplay = document.querySelector('#result')
    var cardsChosen = []
    var cardsChosenId = []
    var cardsWon = []

    //board
    function createBoard() {
        for(let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img')
            card.setAttribute('src', 'images/pokeball.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
    }

    //check matches
    function checkForMatch() {
        var cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0];
        const optionTwoId = cardsChosenId[1];
        if (cardsChosen[0] === cardsChosen[1]) {
            alert('Match!')
            cards [optionOneId].setAttribute('src', 'images/check.png')
            cards [optionTwoId].setAttribute('src', 'images/check.png')
            cardsWon.push(cardsChosen)
        } else {
            cards [optionOneId].setAttribute('src', 'images/pokeball.png')
            cards [optionTwoId].setAttribute('src', 'images/pokeball.png')
        }
        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = cardsWon.length
        if (cardsWon.length === cardArray.length/2) {
            resultDisplay.textContent = 'Congratulations!'
        }
    }


    //flip card
    function flipCard() {
        var cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500)
        }
    }

    createBoard()




})