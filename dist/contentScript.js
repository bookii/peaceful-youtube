// page loading event
addEventListener("load", removeDislikeButton, false);

// page transition event
chrome.runtime.onMessage.addListener((request) => {
  if (request.type === "onUpdated") {
    removeDislikeButton();
  }
});

function removeDislikeButton() {
  var counter = 0;
  const jsLoaded = () => {
    // prevent infinite loops
    if (counter > 20) {
      console.log("Failed to remove dislike button.");
      clearInterval(jsInitCheckTimer);
    }

    counter += 1;
    const buttons = document
      .getElementsByTagName("ytd-video-primary-info-renderer")
      ?.item("top-level-buttons")
      ?.getElementsByTagName("ytd-toggle-button-renderer");
    if (buttons != null && buttons.length >= 2) {
      buttons[1].remove();
      // Remove the line below like/dislike buttons, if it remains.
      document.getElementById("sentiment")?.remove();
      clearInterval(jsInitCheckTimer);
    }
  };

  // Set delay param as you like.
  const jsInitCheckTimer = setInterval(jsLoaded, 200);
}
