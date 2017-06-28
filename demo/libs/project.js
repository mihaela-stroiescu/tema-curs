
	$(document).ready( function() {
		setTimeout(function(){
			customcss('.nav','background','#d8edd7')
		},1000)
			
		setTimeout(function(){
			customcss('#colorplay','font-weight','bold')
		},2000)	
			
		setTimeout(function(){
			customcss('#colorplay','color','black')
		},3000)
		
		
	})

	function customcss(selector,atribut,val) {
			$(selector).css(atribut,val)
		}
		
	function setCustom(key,val) {
		window.localStorage.setItem(key,val);
	}
	
	function getCustom(key) {
		var text=window.localStorage.getItem(key);
		appendText('#colorplay',text)
	}
	function appendText(x,y) {
		$(x).append(y)
	}
	
	function changeImg(url) {
		$('.mountain').attr('src',url);
	}
	
	
	
	
function loadpost() {
		var root='http://jsonplaceholder.typicode.com'
	
	
	  $.ajax({
    url: root + '/posts',
    method: 'GET'
  }).then(function(data) {
   $.map(data, function(post, index ) {
    var template = '<div>' +
					'<h2>' + post.title + '</h2>' +
                    '<p>' + post.body + '</p>' +
                    '</div>';
    $('#posts').append(template);

   });
  });
  }