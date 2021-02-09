// Selectors
const submitBtn = document.getElementById('submit--btn')
const string = document.getElementById('input--area__string')
const bottomHTML = document.querySelector('.bottom')

// Event
submitBtn.addEventListener('click', getVowels)


// Functions

function getVowels() {
    let str = string.value
    let total = 0



    const statement = document.createElement('p')
    statement.innerText = 'This statement has x vowels'
    statement.classList.add('vowelstatement')
    bottomHTML.appendChild(statement)
}
