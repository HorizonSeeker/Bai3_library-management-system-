$(document).ready(function(){
	$('#addPublisher').click(function(){
		$('#publisherModal').modal({
			backdrop: 'static',
			keyboard: false
		});		
		$("#publisherModal").on("shown.bs.modal", function () {
			$('#publisherForm')[0].reset();				
			$('.modal-title').html("<i class='fa fa-plus'></i> Thêm nhà xuất bản");					
			$('#action').val('addPublisher');
			$('#save').val('Lưu');
		});
	});
});