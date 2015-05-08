var fs = require('fs');
var SizeOfFile = 0;
function ReadSize (a) {
	fs.realpath('C:/Users/Admin/Documents/GitHub/Zadaniya/', function(err, path) {
		if (err) {
		console.log(err);
		}
		console.log('Path is : ' + path);
	});

	fs.readdir('C:/Users/Admin/Documents/GitHub/Zadaniya/', function(err, files) {
		if (err) return;


		for (var i in files) {
		var currentFile =path.join ( 'C:/Users/Admin/Documents/GitHub/Zadaniya/', files[i]);
		try {
			var stats=fs.statSync(currentFile);
			}

			catch (e) {
						console.log (e);
			}

		if (stats.isFile()){
				SizeOfFile=SizeOfFile+stats.size;
				console.log (SizeOfFile);
		}

				else { 
				SizeOfFile=SizeOfFile+ReadSize(currentFile);
				}

		  }
			return SizeOfFile;
			console.log (SizeOfFile);
	}); 
}
console.log (SizeOfFile);