// export function getUsers() {
// 	return Liferay.Util.fetch(
// 		'/o/headless-admin-user/v1.0/user-accounts',
// 		{method: 'GET'}
// 	).then(res => res.json());
// }
// export function addUser({emailAddress, familyName, givenName, userName}) {
// 	const data = {
// 		userName,
// 		emailAddress,
// 		familyName,
// 		givenName
// 	};
// 	const headers = new Headers();

// 	headers.append('Content-Type', 'application/json');

// 	const request = {
// 		body: JSON.stringify(data),
// 		headers,
// 		method: 'POST'
// 	};

// 	return Liferay.Util.fetch(
// 		'/o/headless-admin-user/v1.0/user-accounts',
// 		request
// 	).then(res => res.json());
    
// }
//==========================Get Blogs===============================================//
export function getBlogs() {
	return Liferay.Util.fetch(
		'http://localhost:8080/o/headless-delivery/v1.0/sites/20121/blog-postings',
		{method: 'GET'}
	).then(res => res.json());
    }
	//======================================End=========================================//
//=================================AddBlogs============================================//
export function addBlogs({headline,articleBody}) {
    const data = {
        headline,
        articleBody
    };
    const headers = new Headers();

	headers.append('Content-Type', 'application/json');

	const request = {
		body: JSON.stringify(data),
		headers,
		method: 'POST'
	};

	return Liferay.Util.fetch(
		'http://localhost:8080/o/headless-delivery/v1.0/sites/20121/blog-postings',
		request
	).then(res => res.json());
}
//============================================End======================================//
//=========================================Start of Document and get and ==================//
export function getDocument() {
	return Liferay.Util.fetch(
		'http://localhost:8080/o/headless-delivery/v1.0/sites/20121/documents',
		{method: 'GET'}
	).then(res => res.json());
}
//==========================================END=======================================//\
//==========================Start of Knowledge based article=========================//
export function getKnowledgw() {
	return Liferay.Util.fetch(
		'http://localhost:8080/o/headless-delivery/v1.0/sites/20121/knowledge-base-articles',
		{method: 'GET'}
	).then(res => res.json());
}
//=================================End===============================================//