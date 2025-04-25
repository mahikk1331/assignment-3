let input;
let userText = "earthquake";
let slider;
let points = [];
let font
let slidervalue = 20
let mul = 1

function preload() {
	font = loadFont("./FnFontVF.ttf")
}

function setup() {
	createCanvas(1240, 860);
	textSize(200);

	input = createInput(userText);
	input.position(20, 20);
	input.input(updateText);

	slider = createSlider(0.05, 1, 0.2, 0.01);
	slider.position(20, 60);
	slider.style('width', '200px');

}

function updateText() {
	userText = input.value();
	slidervalue = slider.value()
	console.log(slidervalue)

	points = font.textToPoints(userText, 50 + random() * slidervalue * 20 * mul, height / 2 + random() * slidervalue * 20 * mul, 200, {
		sampleFactor: slidervalue,
		simplifyThreshold: 0
	});
}

function draw() {
	updateText()
	background(30);
	fill(255);
	noStroke();

	if (slider.value() !== lastSampleFactor) {
		points = font.textToPoints(userText, 50, height / 2, 200, {
			sampleFactor: slider.value(),
			simplifyThreshold: 0
		});
		lastSampleFactor = slider.value();
	}

	for (let pt of points) {
		ellipse(pt.x, pt.y, 5, 5);
	}
}

function mousePressed() {
	mul += .1
}

let lastSampleFactor = 0.2;
