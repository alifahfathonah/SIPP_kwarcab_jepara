$('#btn-login').click(function(event) {
	var base 		= $('#base').val()
	var username 	= $('input[name="username"]').val()
	var password 	= $('input[name="password"]').val()

	$.ajax({
		url: base+'auth/validasi',
		type: 'post',
		dataType: 'json',
		data: {username: username,password : password},
	})
	.done(function(data) {
		var status = data.success
		if (status == 1) {
			Swal.fire({
				title: 'Sukses',
				text: data.message,
				icon: 'success',
				confirmButtonColor: '#3085d6',
				confirmButtonText: 'Ok'
			}).then((result) => {
				if (result.isConfirmed) {
					location.href = base+'beranda';
				}
			})
		}
		else
		{
			Swal.fire({
				title: 'Error',
				text: data.message,
				icon: 'error',
				confirmButtonColor: '#3085d6',
				confirmButtonText: 'Ok'
			}).then((result) => {
				if (result.isConfirmed) {
					location.href = base+'auth';
				}
			})
		}

	})
	.fail(function() {
		Swal.fire({
			title: 'Error',
			text: 'server eror, silahkan ulangi atau gunakan koneksi yang baik',
			icon: 'error',
			confirmButtonColor: '#3085d6',
			confirmButtonText: 'Ok'
		}).then((result) => {
			if (result.isConfirmed) {
				location.href = base+'auth';
			}
		})
	});	
});