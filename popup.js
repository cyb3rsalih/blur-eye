// Get the blur level slider and the blur text element
let blurLevel = document.getElementById("blurLevel");
let blurText = document.getElementById("blurText");

// Update the text element with the current value of the slider
blurLevel.addEventListener("input", function() {
  blurText.textContent = `Blur Level: ${blurLevel.value}`;
});

// Send a message to the content script to update the blur level when the slider is changed
blurLevel.addEventListener("change", function() {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {blurLevel: blurLevel.value});
  });
});
