//	list of shaders we'll load
var shaderList = ['index_files/starsurface', 'index_files/starhalo', 'index_files/starflare', 'index_files/galacticstars', 'index_files/galacticdust', 'index_files/datastars', 'index_files/cubemapcustom', 'index_files/corona'];

//	a small util to pre-fetch all shaders and put them in a data structure (replacing the list above)
function loadShaders( list, callback ){
	var shaders = {};	

	var expectedFiles = list.length * 2;
	var loadedFiles = 0;

	function makeCallback( name, type ){
		return function(data){
			if( shaders[name] === undefined ){
				shaders[name] = {};
			}
			
			shaders[name][type] = data;

			//	check if done
			loadedFiles++;
			if( loadedFiles == expectedFiles ){				
				callback( shaders );
			}

		};
	}
	
	for( var i=0; i<list.length; i++ ){
		var vertexShaderFile = list[i] + '.vsh';
		var fragmentShaderFile = list[i] + '.fsh';	

		//	find the filename, use it as the identifier	
		var splitted = list[i].split('/');
		var shaderName = splitted[splitted.length-1];
		$(document).load( vertexShaderFile, makeCallback(shaderName, 'vertex') );
		$(document).load( fragmentShaderFile,  makeCallback(shaderName, 'fragment') );
	}
}