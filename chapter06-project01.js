window.onload = function(){
	document.getElementById("mainForm").onsubmit = function(x){
		//declaring variable equal to the class
		var classNum = document.getElementsByClassName("required");
		//This varible used to keep the length the same
		var check = document.getElementsByClassName("required");
		
		//Have to use For Loop to loop through each index of the class
		for(var i = 0; i < check.length; i++){	
		
			//Setting the classNum variable to the first index of the class
			classNum = document.getElementsByClassName("required")[i].value;	

			//Checking if the input field is blank or null
			if(classNum == "" || classNum == null){
				//Add the class 'turnred' to the existing class to changing background color
				document.getElementsByClassName('required')[i].classList.add('turnred');
				//Doesn't allow the form to be submitted
				x.preventDefault();
			}
			//Removes the class turnred
			else{
				document.getElementsByClassName('required')[i].classList.remove('turnred');
			}		
		}
			//Seperated from loop because checkboxes are hard use by class name
			//Used an ID instead
			if(document.getElementById("checking").checked == false ){
				document.getElementById('color').classList.add('turnred');
				x.preventDefault();
			}
			//Removes the class turned
			else{
				document.getElementById('color').classList.remove('turnred');
			}		
	}
}
