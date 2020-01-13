chrome.webRequest.onBeforeRequest.addListener(
    function(ekin) {
      var ekinurl = ekin.url;
      var url = ekinurl.match(/(https?:\/\/|www\.?)(www\.)?([^\/\s]+)/ig)[0];
      url = url.replace("wikipedia.org","wikipedi0.org");
      var element = document.createElement('a');
      element.href = ekin.url;
      var path = element.pathname;
      return {redirectUrl:url+path};
    },{urls: ["*://wikipedia.org/*","*://www.wikipedia.org/*","*://*.wikipedia.org/*",],
    types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "font", "object", "xmlhttprequest", "ping", "csp_report", "media", "websocket", "other"]
  },["blocking"]);
  chrome.browserAction.onClicked.addListener(function(f) {
    chrome.tabs.update({
      url: "https://wikipedi0.org"
    });
  });