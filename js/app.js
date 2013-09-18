$(document).ready(function(){
		$('input:radio').change(function(){
			var $this = $(this);
			$this.closest('div').find('div.gray').removeClass('gray');
			$this.closest('.gray').addClass('green');
		});
});


