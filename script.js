

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


var rgbToHex = function (rgb) { 
    var hex = Number(rgb).toString(16);
    if (hex.length < 2) {
         hex = "0" + hex;
    }
    return hex;
  };

// let hexStr = number.toString(16);

// function to change backround colour used in each listener

function rgbBackground() {


    let rgb = `rgb(${redValue}, ${greenValue}, ${blueValue})`
    // console.lxog(rgb)

    // change numbers
    document.getElementById("red_number").innerHTML = redValue;
    document.getElementById("green_number").innerHTML = greenValue;
    document.getElementById("blue_number").innerHTML = blueValue;

    // change rgb
    document.getElementById("rgb").innerHTML = rgb;

    // update body colour
    body.style["background-color"] =  rgb;

    // hex
    let octet1 = rgbToHex(redValue)
    let octet2 = rgbToHex(greenValue)
    let octet3 = rgbToHex(blueValue)

    // console.log(octet1)
    // console.log(octet2)
    // console.log(octet3)

    let hex = `#${octet1}${octet2}${octet3}`
    document.getElementById("hex").innerHTML = hex;

    switch(true) {
        case (redValue < 80 && greenValue < 80 && blueValue > 80):
            // code block
            body.style["color"] =  "white";
            break;
        case (greenValue < 80 && redValue > 80 && blueValue < 80):
            // code block
            body.style["color"] =  "white";
            break;
        case (blueValue < 80 && redValue < 80 && greenValue > 80):
            // code block
            body.style["color"] =  "white";
            break;
            case (blueValue < 80 && redValue < 80 && greenValue < 80):
                // code block
                body.style["color"] =  "white";
                break;
        default:
          // code block
          body.style["color"] =  "black";
      }
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


// copy to clipboard when text is clicked


function copyButtonHex(){
    var content = document.getElementById('hex').innerHTML;

    var promise = navigator.clipboard.writeText(content)
        .then(() => {
        console.log("Text copied to clipboard...")

    })
        .catch(err => {
        console.log('Something went wrong', err);
    })

}

function copyButton(id) {
    var copyText = document.getElementById(id).childNodes[0].nodeValue;

    // console.log(copyText)

    var promise = navigator.clipboard.writeText(copyText)
        .then(() => {
        console.log("Text copied to clipboard...")

    })
        .catch(err => {
        console.log('Something went wrong', err);
    })
    
    var tooltip = document.getElementById(id);
    tooltip.innerHTML = "Copied: " + copyText;
}
  

function outFunc(id) {
    var copyText = document.getElementById(id).childNodes[0].nodeValue;
    var newCopyText = copyText.replace('Copied: ','');
    var reset = document.getElementById(id);
   
    reset.innerHTML = newCopyText + "<span class=\"tooltiptext\" id=\""+id+"Tooltip\">Copy to clipboard</span>";

    // console.log(reset.innerHTML)
}