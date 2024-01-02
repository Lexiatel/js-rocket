 // colour changing block
 let changeColor = function () {
 	let currentClassName = 
 	document.getElementById('colors').className;

 	if (currentClassName == 'colors') {
 		document.getElementById('colors').className = 'colorsGreen';
 	}

 	else {
 		document.getElementById('colors').className ='colors';


 	}


 	}
// Click Me Button
 let button = function (){
 	alert('You can do this too!');

 	}
// Console Message for Do Something
 let doSomething = function (){
console.log('Doing Something');
 	}
// Default Console Message
console.log('Hello there, friends!');
