chrome.runtime.onInstalled.addListener(()=> {
    chrome.storage.sync.get(["geminiApiKey"],(result) => {
        if (!result.geminiApiKey) {
            chrome.tabs.create({ 
                url:"options.html"
            });
        } else {
            console.error("chrome.tabs.create is undefined. Possibly wrong context or permissions.");
        }
     });
});