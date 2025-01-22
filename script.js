window.onload = function () {
  const textContainer = document.querySelector(".text-container");
  const poeticTextContainer = document.getElementById("poetic-text");

  const texts = [
    "Hi Charnelle",
    "Ever since I met you",
    "I started Forgeting a future without you",
    "You mean a lot to me.",
    "But staying Hurts a lot ",
    "I'm Scared ",
    "One day i will forget everything ",
    "But  You...",
    "Never",
    "I see you ",
    "In every beautiful flower I come across"
  ];

  let currentTextIndex = 0;

  function changeText() {
    // Show the current text
    textContainer.textContent = texts[currentTextIndex];
    textContainer.style.opacity = 1;

    // Fade out the text after a certain duration
    setTimeout(() => {
      textContainer.style.opacity = 0;
    }, 4000); // Fade out after 4 seconds

    // Increment text index for next change
    currentTextIndex++;

    // Handle the last text case (poetic and final text)
    if (currentTextIndex < texts.length) {
      setTimeout(changeText, 7000); // Change text every 5 seconds (overlap with fade out)
    }
  }

  // Start the text change process
  changeText();
};
