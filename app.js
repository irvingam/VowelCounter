// Selectors
const submitBtn = document.getElementById('submit--btn')
const string = document.getElementById('input--area__string')
const bottomHTML = document.querySelector('.bottom')
const vowelstatement = document.getElementsByTagName('p')

// Event
submitBtn.addEventListener('click', () => {
    // Constant that reads the vowels from the string
    const countVowels = str => Array.from(str)
        .filter(letter => 'aeiouAEIOU'.includes(letter)).length;

    // Calculated total number of vowels within the string
    let total = countVowels(string.value)

    // Alert to show how many vowels are present
    alert(`This statement has ${total} vowels`)

    // Clears text input
    string.value = ""
})