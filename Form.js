function validateForm() {
		var first_name = document.getElementById("first");
		var last_name = document.getElementById("last");
		var zip_code = document.getElementById("zip");
		
		if ( ( first_name.value == null || first_name.value == "" ) || !( first_name.value.length >= 3 && first_name.value.length <= 50) ) {
			document.getElementById("errors").innerHTML = "Please enter a valid first name.";
			return false;
		};
		
		if ( ( last_name.value == null || last_name.value == "" ) || !( last_name.value.length >= 3 && first_name.value.length <= 50) ) {
			document.getElementById("errors").innerHTML = "Please enter a valid last name.";
			return false;
		}
		
		if ( isNaN( zip_code.value ) || zip_code.value == null || zip_code.value == "" || zip_code.value.length != 5) {
			document.getElementById("errors").innerHTML = "Please enter a valid zip code.";
			return false;
		};
			
};


//  1) Ensure no fields are empty
//	2) Names between 3 and 50 characters
//	3) Zip code --> only numbers
//	4) Give useful feedback to user in #errors
//	5) Do not allow page to refresh