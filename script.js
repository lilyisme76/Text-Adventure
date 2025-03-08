let input, button, slider, menu, fullscreenButton;
let displayText = "Enter text and press Animate!";
let textSizeValue = 30;
let textStyleValue = "normal";

function setup() {
    let canvas = createCanvas(600, 400);
    canvas.parent("canvas-container");


    input = select("#textInput");
    button = select("#startButton");
    slider = select("#sizeSlider");
    menu = select("#styleMenu");
    fullscreenButton = select("#fullscreenButton");


    button.mousePressed(updateText);
    input.changed(updateText);
    slider.input(updateSize);
    menu.changed(updateStyle);
    fullscreenButton.mousePressed(toggleFullscreen);
}

function draw() {
    background(255, 255, 255);
    textSize(textSizeValue);
    textAlign(CENTER, CENTER);

    textFont("Futura, sans-serif");
    if (textStyleValue === "bold") {
        textStyle(BOLD);
    } else if (textStyleValue === "italic") {
        textStyle(ITALIC);
    } else {
        textStyle(NORMAL);
    }

    fill(46, 52, 133);
    text(displayText, width / 2, height / 2);
}

function updateText() {
    let userText = input.value().trim();
    if (userText !== "") {
        displayText = userText;
    } else {
        displayText = "Enter text and press Animate!";
    }
}


function updateSize() {
    textSizeValue = slider.value();
}


function updateStyle() {
    textStyleValue = menu.value();
}


function toggleFullscreen() {
    let fs = fullscreen();
    fullscreen(!fs);
}


function keyPressed() {
    if (keyCode === ESCAPE) {
        fullscreen(false);
    }
}
