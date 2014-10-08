
	$(document).ready(function(){	
		$("#adauga").click(function(){
			$("#p2").before("<li>alt element</li>");
			});
		
		$("#but_form").click(function(){
			$("#doi").show().html("<form>Numele:<input type='text' name='n'><br>Email:<input type='text' name='e'><br>Comentariu:<textarea cols='20' rows='5' id='test1'></textarea><br><input type='reset'></form>");
			});
		$("#but_sel").click(function(){
			$("#p2").append(" <b>" + $("#test1").val()+"</b>");
			});
		});

