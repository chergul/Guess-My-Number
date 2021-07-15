'use strict';
// -Understanding the problem
// 1-System picks a Number
// 2-When the user push a number it needs to Understanding3-Deal with hightscore
// 4-Deal with again button

 const secretNumber = Math.trunc(Math.random() * 20) + 1;
 let scrore = 0;
 let highscore = 0;


document.querySelector('.check').addEventListener('.click', function() {
    //Convert string to a number so we can compera with math random numbers.
    const guessNumber = Number(document.querySelector('.guess'),value);
    console.log(guessNumber);

})
