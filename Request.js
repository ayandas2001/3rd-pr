// import ClayForm, {ClayInput} from '@clayui/form';
import React from 'react';
//-----------------------------------------function for get data in blog postiongs--------------------------------------//
export function GetUsers() {
	return Liferay.Util.fetch(
		'http://localhost:8080/o/headless-delivery/v1.0/sites/20121/blog-postings',
		{method: 'GET'}
	).then(res => res.json());
}
//--------------------------------------end of function get blog postings----------------------------------------------//


//--------------------------------------function for postings blogs postings----------------------------------------------//
export function AddUser({id,articleBody,headline}) {
	const data = {
		id,
		articleBody,
		headline
	};
	const url=data.id ? `http://localhost:8080/o/headless-delivery/v1.0/blog-postings/${data.id}`:
	'http://localhost:8080/o/headless-delivery/v1.0/sites/20121/blog-postings';

	const headers = new Headers();
	headers.append('Content-Type', 'application/json');
	headers.append('Authorization', 'Basic dGVzdEBsaWZlcmF5LmNvbTpMZWFybg==');

	const request = {
		body: JSON.stringify(data),
		headers,
		method: data.id ? 'PUT' : 'POST'
	};

	return Liferay.Util.fetch(url,
		request
	).then(res => res.json());
}
//--------------------------------------end of function post blog postings----------------------------------------------//





//--------------------------------------function for get documents-----------------------------------------------------//
export function DGetUsers() {
	return Liferay.Util.fetch(
		'http://localhost:8080/o/headless-delivery/v1.0/sites/20121/documents',
		{method: 'GET'}
	).then(res => res.json());
}
//-------------------------------------end of dunction for get documents-------------------------------------------------//

export function KGetUsers() {
	return Liferay.Util.fetch(
		'http://localhost:8080/o/headless-delivery/v1.0/sites/20121/knowledge-base-articles',
		{method: 'GET'}
	).then(res => res.json());
}

//--------------------------------------function get blog postings----------------------------------------------//
export function KAddUsers({id,articleBody,title}) {
	const data = {
		id,
		articleBody,
		title
	};
	
	const url=data.id ? `http://localhost:8080/o/headless-delivery/v1.0/knowledge-base-articles/${data.id}`:
	'http://localhost:8080/o/headless-delivery/v1.0/sites/20121/knowledge-base-articles';

	const headers = new Headers();
	headers.append('Content-Type', 'application/json');
	headers.append('Authorization', 'Basic dGVzdEBsaWZlcmF5LmNvbTpMZWFybg==');

	const request = {
		body: JSON.stringify(data),
		headers,
		method: data.id ? 'PUT' : 'POST'
	};

	return Liferay.Util.fetch(url,
		request
	).then(res => res.json());
}