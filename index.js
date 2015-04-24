function addScriptsrc) {
  var proj = document.getElementById('run').value;
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = 'https://raw.githubusercontent.com/'+proj+'/master/index.js?zz='+(new Date()).getTime();
  document.getElementsByTagName('head')[0].appendChild(script);
}

scriptBase = 'https://raw.githubusercontent.com/runvnc/holoships/master/';
addScript('three.min.js');
addScript('Projector.js');
addScript('CanvasRenderer.js');
