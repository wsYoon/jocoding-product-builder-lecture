document.addEventListener('DOMContentLoaded', () => {
  const generateButton = document.getElementById('generate-button');
  const lotteryNumbersDiv = document.getElementById('lottery-numbers');

  generateButton.addEventListener('click', () => {
    const numbers = generateLotteryNumbers();
    lotteryNumbersDiv.innerHTML = `<p>${numbers.join(', ')}</p>`;
  });

  function generateLotteryNumbers() {
    const numbers = new Set();
    while (numbers.size < 6) {
      const randomNumber = Math.floor(Math.random() * 45) + 1;
      numbers.add(randomNumber);
    }
    return Array.from(numbers).sort((a, b) => a - b);
  }
});
