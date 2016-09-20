window.onload = function(){
	var allnodes = document.body.getElementsByTagName("*");

	for (var i=1; i < allnodes.length; i = i + 1) {
		 var nodeNumber = allnodes[i].nodeType;
		 var currentNode = allnodes[i];
		 
		 if (nodeNumber != 3 && currentNode.nodeName != 'DIV' ){
			var oldText = currentNode.innerHTML;
			currentNode.innerHTML = oldText + "<div class = 'hoverNode'>"+ currentNode.nodeName +"</div>";
			currentNode.addEventListener("click", clickCheck);
		 }	 
	}	
	function clickCheck() {
		alert(currentNode.id + currentNode.parentNode.nodeName);
	}

		
	

}