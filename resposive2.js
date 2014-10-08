
	$(document).ready(function(){	
		$("#adauga").click(function(){
			$("#p2").before("<li>alt element</li>");
			});
		
		$("#but_form").click(function(){
			$("#doi").show().html("<form>Numele:<input type='text' name='numele'><td>Email:<input type='text' name='email'><td>Comentariu:<textarea cols='20' rows='5' id='test1'></textarea><td><input type='reset'></form>");
			});
		$("#but_sel").click(function(){
			$("#p2").append(" <tr>" + $("#test1").val()+"</tr>");
			});
		});

