let images = [
    "bison.png",
    "chicken.png",
    "deer.png",
    "dinosaur.png",
    "eagle.png",
    "elephant.png",
    "flamingo.png",
    "fox.png",
    "frog.png",
    "goose.png",
    "gorilla.png",
    "grizzly_bear.png",
    "hedgehog.png",
    "hippo.png",
    "horse.png",
    "lion.png",
    "man.png",
    "monkey.png",
    "octopus.png",
    "otter.png",
    "owl.png",
    "polar_bear.png",
    "raccoon.png",
    "red_panda.png",
    "rhino.png",
    "shark.png",
    "sheep.png",
    "shrimp.png",
    "sloth.png",
    "snake.png",
    "squirrel.png",
    "tiger.png",
    "turtle.png",
    "whale.png",
];

let phrases = [
    "Oh hell no",
    "You'd better pray",
    "Jury's out on this one",
    "You know, I think he can",
    "He's got a fighting chance!",
    "That lil thing? Absolutely!",
]

function imagePath(imageName) {
    return "images/" + imageName;
}

// Function to help the below function 
// className - selects the image 
function setHidden(className, hidden) {
    let elem = document.body.querySelector(className);
    elem.hidden = hidden;
}

// Removes starter image and initializes battle images
function imageReplacement() {
    setHidden(".starter_image", true);
    setHidden(".david", false);
    setHidden(".animal", false);
    setImageSource(".animal");
}

// Function to randomize the animal on the page
function setImageSource(className) {
    // Explains which image is going to be displayed 
    let randomInt = getRandomInt(images.length);
    let imageToDisplay = imagePath(images[randomInt]);
    // Selects the image element
    let elem = document.body.querySelector(className);
    // Sets the png for the image element 
    elem.src = imageToDisplay;
    // Set alt text later 

    let randomPhraseIndex = getRandomInt(phrases.length);
    let phrase = (phrases[randomPhraseIndex]);

    setHidden(".text_phrase", false);
    let textElem = document.body.querySelector(".text_phrase");
    textElem.innerHTML = phrase;
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}