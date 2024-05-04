console.log('background is running')

chrome.runtime.onMessage.addListener(async (request) => {
  if (request) {
    // console.log(request)
    const tabId = request?.tabData.id
    chrome.webNavigation.onCompleted.addListener((details) => {
      if (details.tabId == tabId) {
        chrome.scripting.executeScript({
          target: { tabId },
          func: () => {
            var divs = document.querySelectorAll("div");
            var div = Array.from(divs).find(div => div.textContent.includes("Đã thích"));
            
            console.log(div);
          }
        })
      }
    })
  }
})
