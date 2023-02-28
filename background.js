chrome.browserAction.onClicked.addListener(function(tab) {
    var code = 'document.body.innerHTML += "<p>This is some added HTML code</p>";';
    chrome.tabs.executeScript({
      code: code
    });
  });
  