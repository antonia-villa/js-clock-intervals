
	// Declare global variable
    var degrees = 45;

	// Retrieve current date and time
    var time = new Date();
    var hr = time.getHours();
    var min = time.getMinutes();
    var sec = time.getSeconds();

	// Format hour for 12-Hour Clock
    if (hr > 12) {
        hr = hr - 12;
   }

     console.log(hr);
    console.log(min);
    console.log(sec);

    var degrees_hour_hand = (hr/12)*360

// Format Hours to Degrees 
function hour(){

	// var degrees_hour_hand = (hr/12)*360
	var hour_hand = document.getElementById("hour");
	hour_hand.style.transform = "rotate(" + degrees_hour_hand + "deg)";
}

setInterval(hour, 1000*60*60);
	// Format Minutes to Degrees 
	// var degrees_minute_hand = (min/60)*360
	// var minute_hand = document.getElementById("minute");
	// minute_hand.style.transform = "rotate(" + degrees_minute_hand + "deg)";

	// // Format Seconds to Degrees 
	// var degrees_second_hand = (sec/60)*360
	// var second_hand = document.getElementById("second");
	// second_hand.style.transform = "rotate(" + degrees_second_hand + "deg)";


