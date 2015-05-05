var g = 0;
		
	function Dist (t) {
		var t2 =Math.pow (t,2);
		var Rast = g*t2/2;
		return Rast;
		}
	function Speed (t){
		var speed=g*t;
		return speed;
		}
	function Time (h) {
		var time = 2*h/g;
		var time1 = Math.sqrt(time);
		return time1;
		}
	function EndSpeed (h) {
		var speed=2*g*h;
		var speedsqr= Math.sqrt(speed);
		return speedsqr;	
		}

	function MakeAll (PlanetName,l,p,gravityConst){
		g = gravityConst;
		j1=Dist(l);
		j2=Speed(l);
		j3=Time(p);
		j4=EndSpeed(p);

		console.log (PlanetName);
		console.log ("Растояние за "+l+"сек= "+ j1);
		console.log ("Скорость по прошествии "+l+"сек="+j2);
		console.log ("Время свободного падения с высоты "+l+"м="+j3);
		console.log ("Скорость падения с высоты "+p+"м="+j4);

	}

MakeAll("Earth", 20,200,9.8);
MakeAll("Mars", 20,200,3.71);	