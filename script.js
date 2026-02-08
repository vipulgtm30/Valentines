let count = 0;
const phrases = [
  "Select Yes Button",
  "Are you Sure",
  "Why are you doing this?",
  "Baby Please",
  "What if I asked really nicely?",
  "Pretty please",
  "PLEASE POOKIE",
  "Think of my puppy eyes! 🥺",
  "Don't break my heart, snack buddy! 🍫",
  "One more chance for eternal cuddles?",
  "You're my favorite plot twist—say yes!",
  "If no, I'll cry into my ice cream 😭",
  "Baby, you're my sunshine... don't eclipse it!",
  "Pretty please with pizza on top? 🍕",
  "I'll share my Netflix password forever!",
  "Nooo, my heart just did a sad dance 💃",
  "One yes = unlimited hugs quota! 🤗",
  "Yes"
];

function showMessage(response) {

  if(count == phrases.length){
    response = "Yes";
  }

  const mainPrompt = document.querySelector(".message")?.remove();

  if (response === "No") {
    const noButton = document.getElementById("no-button");
    const container = document.querySelector(".container");
    const maxWidth = window.innerWidth - noButton.offsetWidth - 10;
    const maxHeight = window.innerHeight - noButton.offsetHeight - 10;

    // Set button position to absolute
    noButton.style.position = "absolute";

    // Change image source to "gun.gif"
    document.getElementsByClassName("image")[0].src = "images/gun.gif";

    // Generate random coordinates within the visible container
    const randomX = Math.max(10, Math.floor(Math.random() * maxWidth));
    const randomY = Math.max(10, Math.floor(Math.random() * maxHeight));

    // Apply new coordinates to the button
    noButton.style.left = randomX + "px";
    noButton.style.top = randomY + "px";

    // Update text content and hide name message
    document.getElementById("question").textContent =
      "The no button is just for visuals";
    document.getElementById("name").style.display = "none";

    noButton.textContent = phrases[count];

    let phrase = noButton.textContent;
    if(phrase === "Yes"){
      console.log(phrase);
    }

    count++;

    // Optional: You can also add a timeout to reset the position after a few seconds
  }

  if (response === "Yes") {
    // Remove name message and no button
    document.getElementById("name").remove();
    document.getElementById("no-button").remove();

    // Update text content, show message, and change image source to "dance.gif"
    const yesMessage = document.getElementById("question");
    yesMessage.textContent = "LESGOOO see you on the 14th babygirl😘😘";
    yesMessage.style.display = "block";
    yesMessage.style.fontStyle = "normal";
    document.getElementsByClassName("image")[0].src = "images/dance.gif";

    // Remove yes button
    document.getElementById("yesButton").remove();

    // Change background image
    document.body.style.backgroundImage =
      "url('images/simple-cute-heart-pattern-wallpaper-copules-anniversary_1017-49423.avif')";
  }
}
