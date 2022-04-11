//VARIABLES
const bg = document.querySelector('.background');
const percent = document.querySelector('.percentage');

//starting value of percent
let count = 0


//FUNCTIONS

//set interval to call blur() function every 30ms
let blurCount = setInterval(blur, 30);

//mapping percentage to opacity
//(current num1, start of range for num1, end of range for num1, start range for num 2, end of range for num2) OUTPUT- current num2
function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}


function blur() {
    count++
    //if counter reached 100, clear interval ( clearInterval(name of interval))
    if (count > 99) {
        clearInterval(blurCount)
    }
    //set filter: blur() value
    bg.style.filter = `blur(${scale(count, 0, 100, 30, 0)}px)`;

    //make percentage go from 0 to 100
    percent.innerText = count +'%';
    // set opacity
    percent.style.opacity = scale(count, 0, 100, 1, 0);

}