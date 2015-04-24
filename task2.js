var mass = [1,2,3,4,5,6,7,8,15,32];
var mass1 = [];
mass1.length=0;
var i,t;

var n1=mass[1]-mass[0];
mass1.push(n1);

for (i=0;i<mass.length-1;i++) {

	t=mass [1+i];
    n=t-mass[0+i];
	mass1.push(n);
	console.log ("t="+t);
	console.log ("n="+n);
}





console.log(mass1);

