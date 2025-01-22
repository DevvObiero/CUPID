const textContainer = document.getElementById("text-container");
const poeticTextContainer = document.getElementById("poetic-text");

const texts = [
  { text: "Hi Charnele", duration: 6000, class: "initial" }, // First text with large font size
  {
    text: "Ever since I met you, I started forgetting  possibilities of a future without you",
    duration: 7000,
    class: ""
  },
  { text: "You mean a lot to me", duration: 3000, class: "" },
  { text: "But staying hurts a lot", duration: 3000, class: "" },
  { text: "I'm scared", duration: 3000, class: "" },
  { text: "One day I will forget everything", duration: 3000, class: "" },
  { text: "But you...", duration: 3000, class: "" },
  { text: "Never", duration: 3000, class: "" },
  { text: "I see you", duration: 3000, class: "" },
  {
    text: "In every beautiful flower I come across",
    duration: 3000,
    class: ""
    },
    { text: "Every beautiful thing", duration: 3000, class: "" }
  
  { text: "Maybe when we're ready", duration: 3000, class: "" },
  { text: "We'll start things over", duration: 3000, class: "" },
  { text: "Because for me...", duration: 3000, class: "" },
  { text: "There will never be another you", duration: 3000, class: "" }
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
