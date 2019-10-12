$(document).ready(function() {
$.ajax({
url: "https://www.monsterindia.com/middleware/jobsearch?query=net&limit=25&sort=1"
}).then(function(data) {
$('.greeting-id').append(data.jobSearchStatus);
$('.greeting-content').append(data.jobSearchResponse.data[0].id);
$("ol").append("<li>list item <a href='javascript:void(0);'</a></li>"); 

	var trHTML = '';
	console.log(data.jobSearchResponse.data.length);
	for(var i = 0; i < data.jobSearchResponse.data.length; i++)
			{   
			trHTML += 
			'<tr><td>' + data.jobSearchResponse.data[i].jobId + 
					'</td><td>' + data.jobSearchResponse.data[i].summary + 
					'</td><td>' + data.jobSearchResponse.data[i].title + 
					'</td><td>' + data.jobSearchResponse.data[i].locations +  
					'</td><td>' + data.jobSearchResponse.data[i].updatedAt +  
					'</td><td>' + data.jobSearchResponse.data[i].companyName +  
					'</td><td>' + data.jobSearchResponse.data[i].postedBy +  
					'</td><td>' + data.jobSearchResponse.data[i].skills +
					'</td><td>' + data.jobSearchResponse.data[i].exp +
					'</td></tr>';            
			};

			$('#records_table').append(trHTML);
			});
			
			  $("#myInput").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#records_table tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });

			});