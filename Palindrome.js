function checkPalindrome() {
    const text = document.getElementById('inputText').value;
    const cleanedText = text.replace('').toLowerCase();
    const reversedText = cleanedText.split('').reverse().join('');
    const resultElement = document.getElementById('result');

    if (cleanedText === reversedText && cleanedText !== '') {
        resultElement.textContent = `"${text}" is a palindrome!`;
    } else {
        resultElement.textContent = `"${text}" is not a palindrome.`;
    }
}