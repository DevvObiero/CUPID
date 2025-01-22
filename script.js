const textContainer = document.getElementById("text-container");
const poeticTextContainer = document.getElementById("poetic-text");

const texts = [
  { text: "Hi Charnele", duration: 6000, class: "initial" }, // First text with large font size
  {
    text: "Ever since I met you",
    duration: 7000,
    class: ""
  },
  {
    text: "I started forgetting any possibilities of a future without you",
    duration: 6000,
    class: ""
  },
  { text: "You mean a lot to me", duration: 3000, class: "" },
  { text: "But right now staying hurts a lot", duration: 3000, class: "" },
  { text: "I'm scared", duration: 3000, class: "" },
  { text: "And Insecure", duration: 3000, class: "" },

  { text: "One day I will forget everything", duration: 3000, class: "" },
  { text: "But you...", duration: 3000, class: "" },
  { text: "Never", duration: 3000, class: "" },
  { text: "I see you", duration: 3000, class: "" },
  {
    text: "In every beautiful flower I come across",
    duration: 3000,
    class: ""
  },
  { text: "In everything that brings me joy", duration: 3000, class: "" },
  { text: "Maybe when we're ready", duration: 3000, class: "" },
  { text: "When the time is right", duration: 3000, class: "" },
  { text: "We'll start things over", duration: 3000, class: "" },
  { text: "Because to me...", duration: 3000, class: "" },
  { text: "There will never be another you", duration: 3000, class: "" },
  { text: "There will never be another you", duration: 3000, class: "" },
  { text: "So I decided to make this", duration: 3000, class: "" },
  { text: "I think i'll go to sleep now", duration: 3000, class: "" },
  {
    text: "At least ,in my dreams  ",
    duration: 3000,
    class: ""
  },
  { text: "I might be able to look you in the eye", duration: 3000, class: "" },

  { text: "I LOVE YOU", duration: 6000, class: "" }
];

let currentIndex = 0;

function showText() {
  const currentText = texts[currentIndex];

  // Set the text and class
  textContainer.textContent = currentText.text;
  textContainer.className = "text-container " + currentText.class; // Reset the class to apply the size change

  // Fade in the text
  textContainer.style.opacity = "1";

  // Fade out the text after the specified duration
  setTimeout(() => {
    textContainer.style.opacity = "0";
    currentIndex = (currentIndex + 1) % texts.length;
    setTimeout(showText, 1000); // Small delay before the next text appears
  }, currentText.duration);
}

// Start the text animation
showText();

//music button

const playBtn = document.getElementById("play-btn");
const audio = document.getElementById("background-music");

// Play the audio when the play button is clicked
playBtn.addEventListener("click", function () {
  audio.play();
  playBtn.style.display = "none"; // Hide the play button after clicking
});
