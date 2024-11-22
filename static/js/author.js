$(document).ready(function(){
	$('#addAuthor').click(function(){
		$('#authorModal').modal({
			backdrop: 'static',
			keyboard: false
		});		
		$("#authorModal").on("shown.bs.modal", function () {
			$('#authorForm')[0].reset();				
			$('.modal-title').html("<i class='fa fa-plus'></i> Thêm tác giả");					
			$('#action').val('addAuthor');
			$('#save').val('Lưu');
		});
	});		
});