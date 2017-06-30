
	$(document).ready( function() {
		loadpost();
		
		setTimeout(function(){

			var children = $('#posts div').children();
				console.log("TOTI COPIII",children);	
		
			var primElem = $('#posts div').first();
				console.log("PRIMUL ELEM",primElem);
				
			var lastElem = $('#posts div').last();
				console.log("ULTIMUL ELEM",lastElem);

			$( "#posts div" ).children().append( "<p>Text append</p>" );
			
			
			$("#posts div loadButton").eq(2).hide();
			
			$( "#posts div" ).eq(3).children().css('color','green');
			$( "#posts div" ).eq(3).children().eq(1).css('color','magenta');
		

			$("#posts div").eq(0).children().eq(0).text("Am schimbat textul");
			
			console.log("TOTI COPIII",children);
			
			var sibling = $('#posts div').siblings()
				console.log("TOTI FRATII",sibling);
				
			var parent = $('#posts div').parent()
				console.log("TOTI PARINTII",parent);
				
			$('.lists2').css('background-color','#e86b1e');

			
		
		},2000)
	
	setTimeout(function(){

		customcss('#colorplay','font-size','80px');
		customcss('.lists1','border-size','2px');
		customcss('.lists1','border-style','solid');
		customcss('.lists1','border-color','green');
		
		customcss('.lists2','border-size','3px');
		customcss('.lists2','border-style','dotted');
		customcss('.lists2','border-color','black');
	},1000)
	
	
	})
	
	
	
	
function loadpost() {
		var root='http://jsonplaceholder.typicode.com'
	
	
	  $.ajax({
    url: root + '/users',
    method: 'GET'
  }).then(function(data) {
   $.map(data, function(post, index ) {	
    var template1 = '<div class="lists1">' +
					'<h2 class="heading">' + '(<strong>' + post.id  +'</strong>)' + post.name +  '</h2>' +                   
					'<p>' + '<strong>email: </strong>' + post.email + '</p>' +
					'<p>' + '<strong>Street: </strong>' + post.address.street + '</p>' +
					'<p>' + '<strong>Suite: </strong>' + post.address.suite + '</p>' +
					'<p>' + '<strong>City: </strong>' + post.address.city + '</p>' +
					'<p>' + '<strong>Zipcode: </strong>' + post.address.zipcode + '</p>' +									
					'<p>' + '<strong>Phone: </strong>' + post.phone + '</p>' +									
					'<p>' + '<strong>Website: </strong>' + post.website + '</p>' +									
					'<p>' + '<strong>Company: </strong>' + post.company.name + '</p>' +									
					'<p>' + '<strong>CatchPhrase: </strong>' + post.company.catchPhrase + '</p>' +									
					'<p>' + '<strong>Bs: </strong>' + post.company.bs + '</p>' +									
                    '</div>';
	var template2 = '<div class="lists2">' +
					'<h2 class="heading">' + '(<strong>' + post.id  +'</strong>)' + post.name +  '</h2>' +                   
					'<p>' + '<strong>email: </strong>' + post.email + '</p>' +
					'<p>' + '<strong>Street: </strong>' + post.address.street + '</p>' +
					'<p>' + '<strong>Suite: </strong>' + post.address.suite + '</p>' +
					'<p>' + '<strong>City: </strong>' + post.address.city + '</p>' +
					'<p>' + '<strong>Zipcode: </strong>' + post.address.zipcode + '</p>' +									
					'<p>' + '<strong>Phone: </strong>' + post.phone + '</p>' +									
					'<p>' + '<strong>Website: </strong>' + post.website + '</p>' +									
					'<p>' + '<strong>Company: </strong>' + post.company.name + '</p>' +									
					'<p>' + '<strong>CatchPhrase: </strong>' + post.company.catchPhrase + '</p>' +									
					'<p>' + '<strong>Bs: </strong>' + post.company.bs + '</p>' +									
                    '</div>';
     if (index % 2==0){
	$('#posts').append(template1)
  }
  else {
	$('#posts').append(template2)
  }
 
	
 
$('#posts div').eq(2).css("background-color", "red");
$('#posts div').eq(7).css("background-color", "red");


		

   });
  });
  	
  
  
  }
 
function hidding() {

$("#posts div").eq(2).hide();
}
 function showing() {
 $("#posts div").eq(2).show();
 }
  
function changeLocation() {
	return window.location.href = 'https://google.com';
}

	function customcss(selector,atribut,val) {
			$(selector).css(atribut,val)
		}	
	
	
 
  
 
  
  
  