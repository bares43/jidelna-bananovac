# Jídelna - banánovač

## Chrome
* Nainstalovat plugin https://chrome.google.com/webstore/detail/custom-javascript-for-web/poakhlngfciodnhlhhgnaaelnpjljija
* Vytvořit pro objednávací systém nový skript, který bude načítat jQuery
```javascript
function addScript(url) {
  var head;
  head = document.getElementsByTagName('head')[0];
  if (!head) {
    return;
  }
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = url;
  head.appendChild(script);
}

addScript('');
```