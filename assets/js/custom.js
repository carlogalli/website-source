// https://getbootstrap.com/docs/4.1/components/modal/
$('.js-abstract-modal').click(function (e) {
	  e.preventDefault();
	  let filename = $(this).attr('data-filename');
	  let modal = $('#abstractModal');
	  modal.find('.modal-body p').load(filename)
	  modal.modal('show');
	})