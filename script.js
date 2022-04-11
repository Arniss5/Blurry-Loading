//VARIABLES
const bg = document.querySelector('.background');
const percent = document.querySelector('.percentage');

//starting value of percent
let count = 0


//FUNCTIONS

//set interval to call blur() function every 30ms
let blurCount = setInterval(blur, 30);

//mapping percentage to opacity
function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}


function blur() {
    count++
    //if counter teached 100, clear interval ( clearInterval(name of interval))
    if (count > 99) {
        clearInterval(blurCount)
    }
    bg.style.filter = `blur(${scale(count, 0, 100, 30, 0)}px)`;

    percent.innerText = count;
    percent.style.opacity = scale(count, 0, 100, 1, 0);

}