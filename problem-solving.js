

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }
  console.log(getRandomNumber(1,6));

  const students = ["Minoar", "Tamim", "Adib", "Nasir"];
  console.log(students.sort());

  const roll_numbers =[3, 5, 1, 6, 2, 30];
  console.log(roll_numbers.sort(function(a, b){
            return b- a;
  }));

  function isLeapYear (year){
    if((year % 400 === 0 ) || ((year % 4 === 0) && (year % 100 !== 0))) {
        console.log(`${year} is a leap year`);
    } else {
        console.log(`${year} is not a leap year`);

    }

  }
  isLeapYear(2028);

  const vowels = ["a", "e","i", "o", "u"< "A", "E", "I", "O", "U"];
  function countVowels(sentence){
    let count = 0;
    const letters = Array.from (sentence);
       
    letters.forEach(function(value, index, array){
       if (vowels.includes(value)){
        count++;
       }
    });
    return count;

  }
  console.log(countVowels ("I love Bangladesh"));



  const numbers = [1, 4, 5, 5, 6, 8, 9, 10, 4];

  const duplicates = numbers.filter(function(value, index, array) {
    return array.indexOf(value) === index
  });
  console.log (duplicates);