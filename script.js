
 //Jss for Clicking on boxes to change text content of Contents of apple section
 
 function changeBoxContent(content) {
  'use strict';
  var displayBox = document.querySelector('.display-box');
  displayBox.textContent = content;
}

  
  
  function toggleBoxContainers() {
    
    var firstContainer = document.querySelector('#Outside-of-apple-containers');
    var secondContainer = document.querySelector('#insides-of-apple-containers');

    firstContainer.style.display = 'none';
    secondContainer.style.display = 'flex';

    
    // Add animation to the image
    document.getElementById("falling-image").classList.add("animate-image");

    // Wait for the animation to finish
    setTimeout(function() {
      // Switch to another image
      document.getElementById("falling-image").src = "images/BadApple.png";

      // Remove the animation class
      document.getElementById("falling-image").classList.remove("animate-image");
    }, 500); // Adjust the time according to your animation duration
  }
 
  function toggleBoxContainers2() {
    var firstContainer = document.querySelector('#Outside-of-apple-containers');
    var secondContainer = document.querySelector('#insides-of-apple-containers');

    firstContainer.style.display = 'flex';
    secondContainer.style.display = 'none';

    
    // Add animation to the image
    document.getElementById("falling-image").classList.add("animate-image");

    // Wait for the animation to finish
    setTimeout(function() {
      // Switch to another image
      document.getElementById("falling-image").src = "images/GoodApple.png";

      // Remove the animation class
      document.getElementById("falling-image").classList.remove("animate-image");
    }, 500); // Adjust the time according to your animation duration
  }
 
 
 //history of apples, making the text appear when clicked javascript
 // JavaScript code to toggle the additional content containers when the headers are clicked
 const headers = document.querySelectorAll(".header-clicked");
  
 headers.forEach(header => {
   header.addEventListener("click", () => {
     header.nextElementSibling.classList.toggle("active");
   });
 });




// JavaScript code to toggle the menu
function toggleMenu() {
    var menu = document.getElementById("menu");
    var hamburger = document.querySelector(".hamburger");
    menu.classList.toggle("active");
    
    hamburger.classList.toggle("active");

}

// Add event listener to the .hamburger element
document.addEventListener("DOMContentLoaded", function() {
  var hamburger = document.querySelector(".hamburger");
  hamburger.addEventListener("click", toggleMenu);
});

// javascript for changing apples image on the types of apples
let selectedButton = null;

function fadeOut(element, duration) {
  element.style.transition = `opacity ${duration / 1000}s`;
  element.style.opacity = 0;
}

function fadeIn(element, duration) {
  element.style.transition = `opacity ${duration / 1000}s`;
  element.style.opacity = 1;
}

function changeImageAndText(button, imageSrc, infoText, descriptionText,origintext) {
  // Check if a button is already selected
  if (selectedButton) {
    // Remove the 'selected' class from the previously selected button
    selectedButton.classList.remove('selected');
  }

  // Add the 'selected' class to the clicked button
  button.classList.add('selected');
  selectedButton = button;

  // Get the elements
  var image = document.getElementById('apple-image');
  var info = document.getElementById('info');
  var description = document.getElementById('Description');
  var origin = document.getElementById('Origin');

  // Fade out the elements
  fadeOut(image, 500);
  fadeOut(info, 500);
  fadeOut(description, 500);
  fadeOut(origin, 500);

  // Wait for the fade-out animation to complete
  setTimeout(function () {
    // Change the image source and text content
    image.src = imageSrc;
    info.textContent = infoText;
    description.textContent = descriptionText;
    origin.textContent = origintext;

    // Fade in the elements
    fadeIn(image, 500);
    fadeIn(info, 500);
    fadeIn(description, 500);
    fadeIn(origin,500);
  }, 500); // Wait for 500ms before starting the fade-in animation
}

// Attach click event handlers to the buttons when the document is ready
document.addEventListener('DOMContentLoaded', function() {
  // Fuji Apples button
  document.getElementById('fujiButton').addEventListener('click', function() {
    changeImageAndText(
      this,
      'images/Fuji.png',
      'Fuji Apples',
      'Originating from Japan, Fuji apples are a delightful combination of Red Delicious and Ralls Janet varieties. These medium to large-sized apples have a yellow-green background with an attractive red blush or stripes. What sets Fuji apples apart is their exceptional sweetness and crisp texture, making them a popular choice for snacking and baking alike. Whether eaten fresh or used in pies and salads, Fuji apples are a delicious treat.',
      'Japan'
    );
  });

  // GrannySmith Apples button
  document.getElementById('grannySmithButton').addEventListener('click', function() {
    changeImageAndText(
      this,
      'images/GrannySmith.png',
      'GrannySmith Apples',
      'Discovered in Australia, Granny Smith apples are easily recognizable by their bright green skin with occasional hints of pink or yellow. These apples are medium to large in size, offering a tart and refreshing flavor with a crisp and firm texture. Their tangy taste makes them a favorite for use in pies, tarts, and applesauce. Granny Smith apples are also enjoyed as a unique snacking option for those who prefer a bit of zing in their apples.',
      'Australia'
    );
  });

  // Gala Apples button
  document.getElementById('galaButton').addEventListener('click', function() {
    changeImageAndText(
      this,
      'images/Gala.png',
      'Gala Apples',
      'Hailing from New Zealand, Gala apples were created by crossing Kidd Orange Red with Golden Delicious. Sporting a lovely red-orange blush over a yellow base, these small to medium-sized apples are known for their sweet and aromatic flavor. Gala apples are a popular snacking choice due to their pleasant taste and relatively softer texture. They also work well in salads, applesauce, and lighter baked goods.',
      'New Zealand'
    );
  });
});

// java script for life cycle of apple 


var currentIndex = 0;
var contentData = [
  {
    title: "Blossom Stage",
    description: "This stage marks the beginning of the apple's lifecycle. Apple trees produce beautiful and fragrant blossoms in the spring. These blossoms are essential for pollination, as they contain male reproductive parts (pollen) that need to fertilize the female parts of the flower to form fruit.",
    imageSrc: "images/AppleBlossoms.png"
  },
  {
    title: "Pollination Stage",
    description: "During this stage, bees and other pollinators transfer pollen from one flower to another, allowing fertilization to occur. The transfer of pollen is crucial for the development of apples. Without proper pollination, apple trees won't bear fruit.",
    imageSrc: "images/Pollination.png"
  },
  {
    title: "Fruit Formation Stage",
    description: "After successful pollination, the fertilized flowers start developing into tiny green fruit known as young apples or fruitlets. These tiny fruits will grow in size over time as they continue to receive nutrients from the tree.",
    imageSrc: "images/YoungApple.jpg"
  },

  {
    title: "Growing Stage",
    description: "During this stage, the young apples continue to grow and mature on the apple tree. They undergo a process called cell division and elongation, increasing in size and developing their characteristic color, taste, and texture.",
    imageSrc: "images/GrowingStage.jpg"
  },
  {
    title: "Ripening Stage",
    description: "As the apples near maturity, they undergo chemical changes, including the conversion of starches into sugars and the development of their final color. The timing of ripening can vary depending on the apple variety.",
    imageSrc: "images/RipeApples.jpg"
  },

  {
    title: "Harvesting Stage",
    description: "Once the apples have reached their peak ripeness, they are ready for harvest. Harvesting usually takes place in late summer or early fall, depending on the apple variety and geographical location.",
    imageSrc: "images/HarvestApple.png"
  },

  {
    title: "Consumption Stage",
    description: "After harvesting, the apples are sorted, packed, and distributed to markets or stores for consumers to purchase and enjoy. The consumption stage marks the end of the apple's lifecycle as a fruit.",
    imageSrc: "images/AppleDIsplay.png"
  }
];

var titleElement = document.getElementById("title");
var descriptionElement = document.getElementById("description");
var imageElement = document.getElementById("lifecycle-images");

function fadeIn(element) {
  element.classList.remove("fade-out");
  element.classList.add("fade-in");
}

function fadeOut(element) {
  element.classList.remove("fade-in");
  element.classList.add("fade-out");
}

function setContent(index) {
  var content = contentData[index];
  fadeOut(titleElement);
  fadeOut(descriptionElement);
  fadeOut(imageElement);
  setTimeout(function () {
    titleElement.textContent = content.title;
    descriptionElement.textContent = content.description;
    imageElement.src = content.imageSrc;
    fadeIn(titleElement);
    fadeIn(descriptionElement);
    fadeIn(imageElement);
  }, 500);
}

function nextContent() {
  if (currentIndex < contentData.length - 1) {
    currentIndex++;
    setContent(currentIndex);
  }
}

function previousContent() {
  if (currentIndex > 0) {
    currentIndex--;
    setContent(currentIndex);
  }
}

var nextButton = document.getElementById("lcbutton");
var prevButton = document.getElementById("prevbutton");

nextButton.addEventListener("click", nextContent);
prevButton.addEventListener("click", previousContent);
//end of js for lifecycle of apples

// the java script for intro 
// Get references to the necessary elements
const intro = document.getElementById('intro');
const display = document.getElementById('display-image');
const leftArrow = document.getElementById('left-arrow');
const rightArrow = document.getElementById('right-arrow');
const indicators = document.querySelectorAll('.indicator');

// Define an array of image URLs
const images = [
  'url("images/ManyRedApples.jpg")',
  'url("images/ManyGreenApples.jpg")',
  'url("images/ManyOrangeApples.jpg")'
];

const Displayimg = [
  'images/apple.png',
  'images/PixelGreenApple.png',
  'images/PixelGalaApples.png'
];

const imageCount = images.length;
const DisplayimageCount = Displayimg.length;
let currentImageIndex = 0;
let currentDisplayImageIndex = 0;

// Function to update the background image and indicators
function updateBackgroundImage() {
  intro.style.backgroundImage = images[currentImageIndex];

  indicators.forEach((indicator, index) => {
    if (index === currentImageIndex) {
      indicator.classList.add('active');
    } else {
      indicator.classList.remove('active');
    }
  });
}

function updateDisplayImage() {
  const displayImageElement = document.getElementById('display-image');
  displayImageElement.src = Displayimg[currentDisplayImageIndex];

  indicators.forEach((indicator, index) => {
    if (index === currentDisplayImageIndex) {
      indicator.classList.add('active');
    } else {
      indicator.classList.remove('active');
    }
  });
}

// Add click event listeners to the arrow buttons
leftArrow.addEventListener('click', () => {
  currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
  currentDisplayImageIndex = (currentDisplayImageIndex - 1 + Displayimg.length) % Displayimg.length;
  updateDisplayImage();
  updateBackgroundImage();
});

rightArrow.addEventListener('click', () => {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  currentDisplayImageIndex = (currentDisplayImageIndex + 1) % Displayimg.length;
  updateDisplayImage();
  updateBackgroundImage();
});

// Update the initial background image and indicators
updateBackgroundImage();
updateDisplayImage();


// clear button javascript code
// Get a reference to the form and the clear button
const form = document.getElementById("contact-form");
const clearButton = document.getElementById("clear-button");

// Function to reset the form fields
function clearForm() {
  form.reset();
}

// Attach an event listener to the clear button
clearButton.addEventListener("click", clearForm);


//javascript for mini-game
// Game variables
let score = 0;
let basketLeft = 0;
let appleTop = 0;
let appleInterval;
let isMovingLeft = false;
let isMovingRight = false;

// DOM elements
const basket = document.getElementById('basket');
const apple = document.getElementById('apple');
const scoreDisplay = document.getElementById('score');
const startButton = document.getElementById('start-button');
const gameContainer = document.getElementById('game-container');

// Event listeners
document.addEventListener('keydown', handleKeyDown);
document.addEventListener('keyup', handleKeyUp);
startButton.addEventListener('click', startGame);
gameContainer.addEventListener('click', handleContainerClick);


// Move the basket
function moveBasket() {
  const containerWidth = document.getElementById('game-container').offsetWidth;
  const basketWidth = basket.offsetWidth;

  const maxLeft = containerWidth - basketWidth; // Maximum left position of the basket

  if (isMovingLeft && basketLeft > 0) {
    basketLeft -= containerWidth * 0.02; // Adjust the movement speed as needed
    if (basketLeft < 0) {
      basketLeft = 0; // Ensure the basket doesn't go beyond the left boundary
    }
  }

  if (isMovingRight && basketLeft < maxLeft) {
    basketLeft += containerWidth * 0.02; // Adjust the movement speed as needed
    if (basketLeft > maxLeft) {
      basketLeft = maxLeft; // Ensure the basket doesn't go beyond the right boundary
    }
  }

  basket.style.left = basketLeft + 'px';
}

// Handle container click

// Handle container click event to move the basket to the clicked position
function handleContainerClick(event) {
  // Get the width of the game container and the basket
  const containerWidth = gameContainer.offsetWidth;
  const basketWidth = basket.offsetWidth;

  // Calculate the maximum left position for the basket to prevent it from going outside the container
  const maxLeft = containerWidth - basketWidth;

  // Get the x-coordinate of the click relative to the game container
  const clickX = event.clientX - gameContainer.offsetLeft;

  // Calculate the left position for the basket based on the click position
  const targetLeft = clickX - basketWidth / 2;

  // Check if the targetLeft position is within the valid range (0 to maxLeft)
  if (targetLeft >= 0 && targetLeft <= maxLeft) {
    // Update the basketLeft variable to hold the new position of the basket
    basketLeft = targetLeft;

    // Move the basket to the new position by updating the left CSS property
    basket.style.left = basketLeft + 'px';
  }
}

// Reset the apple position to a random location at the top of the game container
function resetApple() {
  // Get the width and height of the game container and the apple
  const containerWidth = document.getElementById('game-container').offsetWidth;
  const containerHeight = document.getElementById('game-container').offsetHeight;
  const appleWidth = apple.offsetWidth;
  const appleHeight = apple.offsetHeight;

  // Generate a random x-coordinate within the container width to position the apple horizontally
  const randomX = Math.floor(Math.random() * (containerWidth - appleWidth));

  // Set the top position of the apple to be above the game container (hidden)
  appleTop = -appleHeight;
  apple.style.top = appleTop + 'px';

  // Set the left position of the apple to the randomly generated x-coordinate
  apple.style.left = randomX + 'px';
}

// Update apple position
function updateApplePosition() {
  const containerHeight = document.getElementById('game-container').offsetHeight;
  const appleHeight = apple.offsetHeight;

  appleTop += containerHeight * 0.01; // Adjust the falling speed as needed
  apple.style.top = appleTop + 'px';

  if (appleTop >= containerHeight) {
    clearInterval(appleInterval);
    resetApple();
    showLosePopup();
    startButton.disabled = false;
  }
}

// Start the game
function startGame() {
  resetApple();
  appleInterval = setInterval(updateApplePosition, 10);
  startButton.disabled = true;
  requestAnimationFrame(updateGame);
}

// Update the game
function updateGame() {
  moveBasket();
  checkCollision();

  if (startButton.disabled) {
    requestAnimationFrame(updateGame);
  }
}

// Keydown event handler
function handleKeyDown(event) {
  if (event.key === 'ArrowLeft') {
    isMovingLeft = true;
  }

  if (event.key === 'ArrowRight') {
    isMovingRight = true;
  }
}

// Keyup event handler
function handleKeyUp(event) {
  if (event.key === 'ArrowLeft') {
    isMovingLeft = false;
  }

  if (event.key === 'ArrowRight') {
    isMovingRight = false;
  }
}

// Check for collision
function checkCollision() {

  // Get the bounding rectangles of the basket and the apple
  const basketRect = basket.getBoundingClientRect();
  const appleRect = apple.getBoundingClientRect();


  // Check if the apple overlaps with the basket
  if (
    basketRect.top <= appleRect.bottom &&
    basketRect.right >= appleRect.left &&
    basketRect.left <= appleRect.right
  ) {
    // Apple caught: Increment the score, update the score display, and reset the apple position
    score++;
    scoreDisplay.textContent = score;
    resetApple();
  } 
  
  else if (appleRect.bottom >= window.innerHeight) {
    // Apple missed: Reset the score to zero, update the score display, stop the apple dropping interval,
    // reset the apple position, show a lose popup, and enable the start button
    score = 0;
    scoreDisplay.textContent = score;

    clearInterval(appleInterval);
    resetApple();
    showLosePopup();
    startButton.disabled = false;
  }
}

// Show the lose popup
function showLosePopup() {
  const popup = document.createElement('div');
  popup.id = 'lose-popup';
  popup.textContent = 'You Lose!';
  document.body.appendChild(popup);
  setTimeout(function () {
    popup.remove();
  }, 1000);
}

