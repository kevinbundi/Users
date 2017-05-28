$(document).ready(function(){
	$('form').submit(function(){
		$('tbody').append("<tr><td>" + $('#1').val() + "</td><td>" + $('#2').val() + "</td><td>" + $('#3').val() + "</td></tr>") 
		$('.form-control').val("") 
		return false; 
	})
})