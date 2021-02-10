// Selectors
const submitBtn = document.getElementById('submit--btn')
const string = document.getElementById('input--area__string')
const bottomHTML = document.querySelector('.bottom')

// Event
submitBtn.addEventListener('click', () => {
    // Constant that reads the vowels from the string
    const countVowels = str => Array.from(str)
        .filter(letter => 'aeiou'.includes(letter)).length;

    // Calculated total number of vowels within the string
    const total = countVowels(string.value)

     // Will create a statment showing how many vowels are in the string
     const statement = document.createElement('p')
     statement.innerText = `This statement has ${total} vowels`
     statement.classList.add('vowelstatement')
     bottomHTML.appendChild(statement)


})


// Functions
/*
function getVowels(str) {
    str = string.value 
    let total = 0

    return str.replace(/[^aeiou]/gi, "").length


    // Will create a statment showing how many vowels are in the string
    const statement = document.createElement('p')
    statement.innerText = 'This statement has x vowels'
    statement.classList.add('vowelstatement')
    bottomHTML.appendChild(statement)

    console.log(getVowels(string.value))
}

console.log(getVowels(string.value)) */



