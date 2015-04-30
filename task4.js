var fs = require('fs');
var Filelist=[];
var Dirlist=[];

 
		   
		 
fs.realpath('C:/', function(err, path) {
	if (err) {
		console.log(err);
		return;
	} var a = path.join("C:/Users/u", file);  
         var stat = null; 
         try{ 
             stat = fs.statSync(a); 
         }
	console.log('Path is : ' + file);
});
	 


fs.readdirSync('C:/', function(err, files) {
	
	if (err) return;


	files.forEach (function(f) {
		
		if (stat.isFile()) { 
             Filelist.push(f); 
         } else { 
             Dirlist.push(f); 
      }; 
return f;
	});

});
		   
console.log (Filelist);
console.log (Dirlist);
		   