function addScript(base, src) {
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = base + src + '?zz='+(new Date()).getTime();
  document.getElementsByTagName('head')[0].appendChild(script);
}

scriptBase = 'https://raw.githubusercontent.com/runvnc/holoships/master/';
addScript('three.min.js');
addScript('Projector.js');
addScript('CanvasRenderer.js');
