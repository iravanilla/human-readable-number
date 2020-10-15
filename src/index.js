module.exports = function toReadable (number) {
  const numbersUpTo19 = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', "thirteen", 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const numbersUpTo90 = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  
  function numnum (number) {
    if (number < 20) {
        return numbersUpTo19[number];
    } 

    if (number > 19 && number < 100) {
        let oneNumber = numbersUpTo90[Math.floor(number/10) - 2];
        let twoNumber = numbersUpTo19[number%10];

        return (number % 10 === 0) ? oneNumber : oneNumber + ' ' + twoNumber;
    }
  }

    if (number >= 0 && number <100) {
        return numnum(number);
    }

    if (number > 99 && number < 1000) {
        let oneNumber = numbersUpTo19[Math.floor(number/100)] + ' hundred';

        return (number % 100 === 0) ? oneNumber : oneNumber + ' ' + numnum(number % 100);
    }
}
