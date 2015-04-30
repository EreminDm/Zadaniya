

function Fu (k) {
	var f1 =Math.pow(k, 6);
	var f2 =Math.pow(k, 5);
	var f3 =Math.pow(k, 2);
var c=f1/6;
var p=f2;
var l=f3/2;
		return c - p + l;
	}
function Integ (a,b) {
	var i = 0;
	
	var i= Fu(b)-Fu(a);
	return i;
	
}
j1=Integ(0,1);
j2=Integ(-1,0);
j3=j1+Integ(6,0);
j4=j3+Integ(6,12);
	console.log (j1);
	console.log (j2);
	console.log (j3);
	console.log (j4);