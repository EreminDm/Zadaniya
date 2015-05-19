var fs = require ('fs');
var html = fs.readFileSync ('data/habr.html');
var htmlString = html.toString();
var Marker=0;
var TitleMass = [];
var Data = htmlString;	
var Punkt =Data.indexOf ('class="post_title"', Marker);
var Punkt1 =Data.indexOf ('</a>', Punkt);		


function Get (){
	var p=Punkt+18;
	var p1=Punkt1;
	var res = Data.substring(p, p1);	
	return res;
}	

function Print (TitleMass) {
	console.log (TitleMass[0]);
	console.log ( TitleMass[TitleMass.length-1]);
}

while (Punkt != -1 ){
Marker=Punkt1+1;
var title = Get();
TitleMass.push (title);
Punkt =Data.indexOf ('class="post_title"', Marker);
Punkt1 =Data.indexOf ('</a>', Punkt);	
}	

Print(TitleMass);
