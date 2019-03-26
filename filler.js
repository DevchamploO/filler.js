
(function (window) {
'use strict'
	var loremText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?";

	var fillerElems = document.getElementsByClassName('filler');
	var loremArray = loremText.split(/[ ,]+/);
	var loremArraySize = loremArray.length;
	var textForNode;
	var index = 0;
	var fillerSize;

	//fills each HTML element marked with the attribute data-lorem
	for(var i=0; i<fillerElems.length; i++) {
		fillerSize = parseInt(fillerElems[i].dataset.lorem);
		index = 0;
	        textForNode = "";

		//Uses the value of data-lorem as total number of words to add as text node
		 while(fillerSize > 0) {
		 	textForNode = textForNode + loremArray[index];
			if(fillerSize > 1) {
				textForNode = textForNode + " ";
			}
			index++;
			fillerSize--;
			if(index == loremArraySize) {
				index = 0;
				textForNode = textForNode + " ";
			}
		 }

		//Puts the filler text into the element marked with data-lorem
		var textToPrint = document.createTextNode(textForNode);
		fillerElems[i].appendChild(textToPrint);
	}
}) (window);

