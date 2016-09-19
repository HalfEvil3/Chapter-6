window.onload = function(){
	document.getElementById("mainForm").onsubmit = function(x){
		var classNum = document.getElementsByClassName("required");
		var check = document.getElementsByClassName("required");
		
		for(var i = 0; i < check.length; i++){

			classNum = document.getElementsByClassName("required")[i].value;	

			if(classNum == "" || classNum == null){

				document.getElementsByClassName('required')[i].classList.add('turnred');
				x.preventDefault();
			}
			else{
				document.getElementsByClassName('required')[i].classList.remove('turnred');
			}
			
		}
			if(document.getElementById("checking").checked == false ){

				document.getElementById('color').classList.add('turnred');
				x.preventDefault();
			}
			else{
				document.getElementById('color').classList.remove('turnred');

			}
	}
}