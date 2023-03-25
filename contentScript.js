// Define a default blur level
let blurLevel = 0;

// Get all <img> tags and apply the default blur level
let images = document.getElementsByTagName("img");
for (let i = 0; i < images.length; i++) {
  images[i].style.filter = `blur(${blurLevel}px)`;
}

// Listen for messages from the popup and update the blur level
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.blurLevel) {
    blurLevel = request.blurLevel;
    for (let i = 0; i < images.length; i++) {
      images[i].style.filter = `blur(${blurLevel}px)`;
    }
  }
});
