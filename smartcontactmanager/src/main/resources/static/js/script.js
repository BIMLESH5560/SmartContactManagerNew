const toggleSideBar = () => {
	if ($('.sidebar').is(':visible')) {
		$('.sidebar').css('display', 'none');
		$('.content').css('margin-left', '0%');
		$('.content').css('width', '100%');
	} else {
		$('.sidebar').css('display', 'block');
		$('.content').css('margin-left', '23%');
	}
};

const search = () => {
	const query = $('#search-input').val();
	if (query === '') {
		$('.search-result').hide();
		return;
	}
	fetch(`/search/${encodeURIComponent(query)}`)
		.then((response) => response.json())
		.then((data) => {
			let text = `<div class='list-group'>`;
			data.forEach((contact) => {
				text += `<a href='/user/${contact.cid}/contact' class='list-group-item list-group-action'>${contact.name}</a>`;
			});
			text += `</div>`;
			$('.search-result').html(text).show();
		});
};

const searchForUser = () => {
	const query = $('#search-input').val();
	if (query === '') {
		$('.search-result').hide();
		return;
	}
	fetch(`/search-user/${encodeURIComponent(query)}`)
		.then((response) => response.json())
		.then((data) => {
			let text = `<div class='list-group'>`;
			data.forEach((user) => {
				text += `<a href='/admin/user-profile/${user.id}' class='list-group-item list-group-action'>${user.name}</a>`;
			});
			text += `</div>`;
			$('.search-result').html(text).show();
		});
};
