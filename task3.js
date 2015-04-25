var read = require('read');

read({ prompt : 'FirstNumber: ' }, function (err, first) {
  read({ prompt : 'SecondNumber: ',}, function (err, second) {
    console.log("FirstNumber:"+first,"SecondNumber: "+second);
	  var firstVal = parseInt(first, 10);
	  var secondVal= parseInt(second, 10);
	  var a,b,c;
	  a=firstVal+secondVal;
	  b=firstVal*secondVal;
	  c=secondVal/firstVal;
	  console.log("Summa= "+a, "Umnozhenie'= "+b, "Otnoshenie= "+c);
    process.stdin.destroy();
  });
})



