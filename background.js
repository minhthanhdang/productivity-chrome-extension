// Event listener for when the extension is installed
chrome.runtime.onInstalled.addListener(() => {
  console.log('Extension installed');
});

// Event listener for when a message is received
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log('Message received:', message);
  // Handle the message here
  sendResponse('Message received!')
});
