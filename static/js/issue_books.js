$(document).ready(function(){	
	
	$('#issueBook').click(function(){
		$('#issuedBookModal').modal({
			backdrop: 'static',
			keyboard: false
		});		
		$("#issuedBookModal").on("shown.bs.modal", function () {
			$('#issuedBookForm')[0].reset();				
			$('.modal-title').html("<i class='fa fa-plus'></i> Cấp sách");					
			$('#action').val('cấpSách');
			$('#save').val('Lưu');
		});
	});			
});