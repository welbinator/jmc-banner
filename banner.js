<script type="text/javascript">var myArray = [1,2,3,4,5,6,7,8,9,10,11,12];
var secondArray = [6,2,1,4,5,3,6,2,1,4,5,3];
var number = '';
function loopThroughSecondArray(secondArray) {
	for (var k = 0; k < secondArray.length; k++) {
		(function (k) {
			setTimeout(function () {
				number = secondArray[k];
				
				
				
				}, 3500 * k);
		})(k);
	}
}

function loopThroughMyArray(myArray) {
    for (var i = 0; i < myArray.length; i++) {
        // for each iteration console.log a word
        // and make a pause after it
        (function (i) {
            setTimeout(function () {
             loopThroughSecondArray(secondArray);
							$("#headerImages" + number).removeAttr("style").removeClass().addClass("headerImages" + myArray[i]);
                console.log(number);
            }, 3500 * i);
        })(i);
    }
}
loopThroughMyArray(myArray);
setInterval(function()  {
	loopThroughMyArray(myArray);
}, 42000);</script>
