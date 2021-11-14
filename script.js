
// set value of variables to use as global variables

let redValue = 128
let greenValue = 87
let blueValue = 240

// query the range sliders and get their values

var red = document.querySelector("#red");
var green = document.querySelector("#green");
var blue = document.querySelector("#blue");

// var square = document.querySelector("#square");

// get the document body
var body = document.querySelector("#body");


function decToHex(num) {
    let hex = parseInt(num, 10).toString(16)
    return hex
}

// let hexStr = number.toString(16);

// function to change backround colour used in each listener

function rgbBackground() {
    
    let rgb = `rgb(${redValue}, ${greenValue}, ${blueValue})`
    console.log(rgb)

    // change numbers
    document.getElementById("red_number").innerHTML = redValue;
    document.getElementById("green_number").innerHTML = greenValue;
    document.getElementById("blue_number").innerHTML = blueValue;

    // change rgb
    document.getElementById("rgb").innerHTML = rgb;

    // update body colour
    body.style["background-color"] =  rgb;

    // hex
    let octet1 = decToHex(redValue)
    let octet2 = decToHex(greenValue)
    let octet3 = decToHex(blueValue)

    console.log(octet1)
    console.log(octet2)
    console.log(octet3)

    let hex = `#${octet1}${octet2}${octet3}`
    document.getElementById("hex").innerHTML = hex;

}


function setClipboard(text) {
    var type = "text/plain";
    var blob = new Blob([text], { type });
    var data = [new ClipboardItem({ [type]: blob })];

    navigator.clipboard.write(data).then(
        function () {
        /* success */
        },
        function () {
        /* failure */
        }
    );
}


  

// Listeners for each slider

red.addEventListener("input", function() {

    redValue = this.value
    rgbBackground();

});

green.addEventListener("input", function() {

    greenValue = this.value
    rgbBackground();

});

blue.addEventListener("input", function() {

    blueValue = this.value
    rgbBackground();

});




