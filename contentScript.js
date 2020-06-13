// ページ読み込みイベント
addEventListener("load", removeDislikeButton, false);

// ページ内遷移イベント
chrome.runtime.onMessage.addListener((request) => {
  if (request.type === "onUpdated") {
    removeDislikeButton();
  }
});

function removeDislikeButton() {
  const jsLoaded = () => {
    console.log("try");
    const buttons = document
      .getElementById("top-level-buttons")
      ?.getElementsByTagName("ytd-toggle-button-renderer");
    if (buttons != null && buttons.length >= 2) {
      buttons[1].remove();
      // sentiment が残っている場合は削除する
      document.getElementById("sentiment")?.remove();
      clearInterval(jsInitCheckTimer);
    }
  };
  // delay の値はお好みで
  const jsInitCheckTimer = setInterval(jsLoaded, 200);
}
