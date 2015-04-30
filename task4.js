var fs = require('fs');
var Filelist = [];
var Dirlist= [];
fs.realpath('C:/Users/Admin/Documents/GitHub/Zadaniya/', function(err, path) {
	if (err) {
	console.log(err);
	return;
}
	console.log('Path is : ' + path);
});
fs.readdir('C:/Users/Admin/Documents/GitHub/Zadaniya/', function(err, files) {
	if (err) return;
	for (var i in files) {
	var currentFile = 'C:/Users/Admin/Documents/GitHub/Zadaniya/' + files[i];
	try {
			var stats=fs.statSync(currentFile);
			if (stats.isFile()){
				Filelist.push(currentFile);
			}
			else { 
				Dirlist.push (currentFile);
			}
		}
		catch (e) {
			console.log (e);
		}
	}
	for (t=0;t<Dirlist.length;t++) {
									console.log("Dir "+Dirlist[t]);
	}
	for (k=0;k<Filelist.length;k++) {
									console.log("File "+Filelist[k]);
	}
	
});