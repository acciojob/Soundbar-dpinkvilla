//your JS code here. If required.
let applause=document.getElementById("id-1").addEventListener("click", function() {
	let audio1=document.getElementById("sound-1"); 
	audio1.play();
    
});

let stop1=document.querySelector(".stop").addEventListener("click",function() {
	let stopaudio=document.querySelectorAll("#sounds audio");
	stopaudio.forEach((Element) =>Element.pause()); 
    
});

