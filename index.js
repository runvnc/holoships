function addScript(base, src) {
	
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = base + src + '?zz='+(new Date()).getTime();
  document.getElementsByTagName('head')[0].appendChild(script);
}

function addScript2(base, src) {
  alert('addscript2');
	  (function() {
    var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
    po.src = src;
    var s = document.getElementsByTagName('head')[0]; s.appendChild(po);
    alert('done');
  })();	
}

var base = 'https://raw.githubusercontent.com/mrdoob/three.js/master/';
addScript(base, 'build/three.min.js');
addScript(base, 'examples/js/renderers/Projector.js');
addScript(base, 'examples/js/renderers/CanvasRenderer.js');
addScript('https://raw.githubusercontent.com/runvnc/holoships/master/', 'game.js');



