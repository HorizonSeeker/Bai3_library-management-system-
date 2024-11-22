$(document).ready(function(){
	$('#addBook').click(function(){
		$('#bookModal').modal({
			backdrop: 'static',
			keyboard: false
		});		
		$("#bookModal").on("shown.bs.modal", function () {
			$('#bookForm')[0].reset();				
			$('.modal-title').html("<i class='fa fa-plus'></i> Thêm sách");
			$('#action').val('addBook');
			$('#save').val('Lưu');
		});
	});		
});