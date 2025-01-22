document.addEventListener("DOMContentLoaded", function () {
  const textContainer = document.getElementById("text-container");
  const poeticTextContainer = document.getElementById("poetic-text");
  const buttonsContainer = document.getElementById("buttons-container");

  let textIndex = 0;
  const texts = [
    { content: "Hi Charnel", duration: 6000 },
    {
      content:
        "Ever since I met you, I started forgetting of a future without you.",
      duration: 4000
    },
    { content: "You mean a lot to me.", duration: 3000 },
    { content: "Will you be my Valentine?", duration: 3000 }
  ];

  function changeText() {
    if (textIndex < texts.length) {
      // Set the new text content
      if (textIndex === 0) {
        textContainer.textContent = texts[textIndex].content;
        textContainer.style.opacity = 1; // Fade in
      } else {
        poeticTextContainer.textContent = texts[textIndex].content;
        poeticTextContainer.style.opacity = 1; // Fade in
      }

      setTimeout(() => {
        // Fade out the current text
        if (textIndex === 0) {
          textContainer.style.opacity = 0;
        } else {
          poeticTextContainer.style.opacity = 0;
        }

        setTimeout(() => {
          textIndex++;
          changeText();
        }, 1000); // Wait for fade-out to complete before changing text
      }, texts[textIndex].duration);
    } else {
      // Show the buttons after all text has displayed
      buttonsContainer.style.display = "block";
    }
  }

  // Start the text changes
  changeText();
});
