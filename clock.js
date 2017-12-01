
// Declare EventListener to set interval of page refresh
document.addEventListener("DOMContentLoaded", function() { 
	setInterval(tick, 1000); }); 

// Execute motion of clock for current date/time
function tick() {
    var time = new Date();
    clock_tick(time);
 };

// Set Clock Hands 
function clock_tick(){

	// Declare Local time parts
	var time = new Date();
	var hr = time.getHours();
    var min = time.getMinutes();
    var sec = time.getSeconds();


	// Format hour to degrees; rotate clock
	var degrees_hour_hand = (hr/12)*360;
	var hour_hand = document.getElementById("hour");
	hour_hand.style.transform = "rotate(" + degrees_hour_hand + "deg)";

	// Format minutes to degrees; rotate clock
	var degrees_minute_hand = (min/60)*360;
	var minute_hand = document.getElementById("minute");
	minute_hand.style.transform = "rotate(" + degrees_minute_hand + "deg)";

	// Format seconds to degrees; rotate clock
	var degrees_second_hand = (sec/60)*360;
	var second_hand = document.getElementById("second");
	second_hand.style.transform = "rotate(" + degrees_second_hand + "deg)";
};

