function addScript(base, src) {
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = base + src + '?zz='+(new Date()).getTime();
  document.getElementsByTagName('head')[0].appendChild(script);
}

var base = 'https://raw.githubusercontent.com/mrdoob/threejs/master/';
addScript('build/three.min.js');
addScript('examples/js/renderers/Projector.js');
addScript('examples/js/renderers/CanvasRenderer.js');
