$(document).ready(function(){
	$("#loginform").submit(function(e){
		e.preventDefault();
		$.ajax({
             url:'https://maherhamidi.com/schoolthing/pdfgen/auth.php',
			 data: $(this).serialize(),
			 type:'POST',
			 cache:false,
			 success:function(response){
				$("#error").html(response);
			 }
		});
	})
});