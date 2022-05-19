const characters = document.querySelectorAll('.character')

characters.forEach((character) => {

    character.addEventListener('mouseenter', () => {
        const selectedCharacter = document.querySelector('.selected')
        selectedCharacter.classList.remove('selected')
        character.classList.add('selected')

        const imageFirstPlayer = document.getElementById('first-player')
        imageFirstPlayer.src = `./src/assets/${character.id}.png`

        const firstName = document.getElementById('first-character-name')
        const nameCharacter = character.getAttribute('data-name');

        firstName.innerHTML = `${nameCharacter}`

        if (character.id === 'scorpion') {
            imageFirstPlayer.style.height = '140%';
            imageFirstPlayer.style.top = '38%';
        } else if (character.id === 'kitana') {
            imageFirstPlayer.style.height = '130%';
            imageFirstPlayer.style.top = '42%';
        } else {
            imageFirstPlayer.style.height = '';
            imageFirstPlayer.style.top = '';
        };
    });
});