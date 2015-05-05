		var Cows=16;
 		var LitersInDay=16;
		var CounDays=30;
        var tenge=200;
		var price = 800000;
	function LitersPerCounDays (Cows,LitersInDay) {
	
		var literspercoundays= Cows*LitersInDay*CounDays;
		var cost=literspercoundays*tenge;
		var MU=Cows-16;
		var NewCost=MU*LitersInDay*CounDays*tenge;
		var CowPrice=MU*price;
		var Revenue=CowPrice/NewCost;
		console.log ("When we have "+Cows+" Cows, We have "+literspercoundays+         		" in "+CounDays+" Days, and it costed "+cost);
		console.log ("Cow price ="+CowPrice+" Okup9tsya "+ Revenue);	
		}
		
	LitersPerCounDays (Cows,LitersInDay);
	LitersPerCounDays (Cows+7,LitersInDay);	
	LitersPerCounDays (Cows+13,LitersInDay);	
	LitersPerCounDays (Cows+17,LitersInDay);
	LitersPerCounDays (Cows+100,LitersInDay-2);	