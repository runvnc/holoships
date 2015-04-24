function addScript(base, src) {
	
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = base + src + '?zz='+(new Date()).getTime();
  document.getElementsByTagName('head')[0].appendChild(script);
}

function addScript2(base, src) {
  alert('k')
	  (function() {
    var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
    po.src = src;
    var s = document.getElementsByTagName('script')[0]; s.parentNode.appendChild(po, s);
    alert('j')
  })();	
}

var base = 'https://raw.githubusercontent.com/mrdoob/three.js/master/';
addScript2(base, 'build/three.min.js');
addScript2(base, 'examples/js/renderers/Projector.js');
addScript2(base, 'examples/js/renderers/CanvasRenderer.js');
addScript2('https://raw.githubusercontent.com/runvnc/holoships/master/', 'game.js');



