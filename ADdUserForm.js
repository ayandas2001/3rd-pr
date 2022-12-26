// import React, {useCallback, useEffect, useState} from 'react';
// import ClayForm, {ClayInput} from '@clayui/form';

// import {addUser} from './request';

// function AddUserForm() {
// 	const [emailAddress, setEmailAddress] = useState('');
// 	const [familyName, setFamilyName] = useState('');
// 	const [givenName, setGivenName] = useState('');
// 	const [userName, setUserName] = useState('');

// 	const onButtonSubmit = useCallback(() => {
// 		addUser({
// 			emailAddress,
// 			familyName,
// 			givenName,
// 			userName
// 		}).then(() => {
// 			setEmailAddress('');
// 			setFamilyName('');
// 			setGivenName('');
// 			setUserName('');
// 		});
// 	},
// 	[
// 		addUser,
// 		emailAddress,
// 		familyName,
// 		givenName,
// 		userName
// 	]);

// 	return (
// 		<div>
// 			<h1>Add User Form</h1>

// 			<ClayForm.Group>
// 				<label htmlFor="givenName">Given Name</label>

// 				<ClayInput
// 					id="givenName"
// 					onChange={event => setGivenName(event.target.value)}
// 					placeholder="Joe"
// 					type="text"
// 					value={givenName}
// 				/>
// 			</ClayForm.Group>
// 			<ClayForm.Group>
// 				<label htmlFor="familyName">Family Name</label>

// 				<ClayInput
// 					id="familyName"
// 					onChange={event => setFamilyName(event.target.value)}
// 					placeholder="Bloggs"
// 					type="text"
// 					value={familyName}
// 				/>
// 			</ClayForm.Group>
// 			<ClayForm.Group>
// 				<label htmlFor="emailAddress">Email Address</label>

// 				<ClayInput
// 					id="emailAddress"
// 					onChange={event => setEmailAddress(event.target.value)}
// 					placeholder="type here"
// 					type="text"
// 					value={emailAddress}
// 				/>
// 			</ClayForm.Group>
// 			<ClayForm.Group>
// 				<label htmlFor="userName">User Name</label>

// 				<ClayInput
// 					id="userName"
// 					onChange={event => setUserName(event.target.value)}
// 					placeholder="jBloggs"
// 					type="text"
// 					value={userName}
// 				/>
// 			</ClayForm.Group>

// 			<button className="btn btn-primary" onClick={() => onButtonSubmit()}>Add User</button>
// 		</div>
// 	);
// }

// export default AddUserForm;

// import React, {useCallback, useEffect, useState} from 'react';
// import ClayForm, {ClayInput} from '@clayui/form';
// import { AddUser } from './Request';


// function ADdUserForm() {
	
// 	const [articleBody, setArticleBody] = useState('');
// 	const [headline, setHeadline] = useState('');

// 	const onButtonSubmit = useCallback(() => {
// 		AddUser({
// 			articleBody,
// 			headline
// 		}).then(() => {
// 			setArticleBody('');
// 			setHeadline('');
			
// 		});
// 	},
// 	[
// 		AddUser,
// 		articleBody,
// 		headline
// 	]);

// 	return (
// 		<div>
// 			<h1>Posting Data</h1>

// 			<ClayForm.Group>
// 				<label htmlFor="articlebody">Article Body</label>

// 				<ClayInput
// 					id="articlebody"
// 					onChange={event => setArticleBody(event.target.value)}
// 					placeholder="Enter article body"
// 					type="text"
// 					value={articleBody}
// 				/>
// 			</ClayForm.Group>
// 			<ClayForm.Group>
// 				<label htmlFor="headline">Head Line</label>

// 				<ClayInput
// 					id="headline"
// 					onChange={event => setHeadline(event.target.value)}
// 					placeholder="Enter headline"
// 					type="text"
// 					value={headline}
// 				/>
// 			</ClayForm.Group>
// 			<button className="btn btn-primary" onClick={() => onButtonSubmit()}>Add User</button>
// 			<button onClick={Delete}>Delete</button>
// 		</div>
// 	);
// }

// export default ADdUserForm;
import React from 'react';
import {useCallback,useState} from 'react';
import ClayForm, {ClayInput} from '@clayui/form';
import { AddUser } from './Request';

function ADdUserForm(){
	const [articleBody,setArticleBody]=useState('');
	const [headline,setHeadline]=useState('');
	const [id,setId] =useState('');
	//const [files,setFiles]=useState();
	// const [show,setShow]=useState(false);
	

	const onButtonSubmit=useCallback(()=>{
		AddUser({
			id,
			articleBody,
			headline
		}).then(()=>{
			setId(''),
			setArticleBody(''),
			setHeadline('')
		})

	},[
		AddUser,
		id,
		articleBody,
		headline
	]);
	// const AddDocument=()=>{
	// 	document.getElementById("files").addEventListener('submit',e=>{
	// 		e.preventDefault;
	// 		const Data=document.getElementById("filess").files;
	// 		const addData=new FormData;
	// 		for(const myFiles of Data){
	// 		addData.append('file',myFiles);

	// 		const link='http://localhost:8080/o/headless-delivery/v1.0/sites/20121/documents';
    //         Liferay.Util.fetch(link, {
	// 		body:addData,
    //         method:"POST",
    //         headers:{
    //                     'Authorization':'Basic dGVzdEBsaWZlcmF5LmNvbTpMZWFybg==',
	// 					'Accept':'*/*'
    //         }
    //         }).then((response)=>{
    //                 return response.text();
    //         })
	// 	}}
	// 	)}
	


	
	return (
		<div>
			<h2>.................Posting Data...............</h2>

			<ClayForm.Group>
				<label htmlFor="articlebody">Article Body</label>

				<ClayInput
					id="articlebody"
					onChange={event => setArticleBody(event.target.value)}
					placeholder="Enter article body"
					type="text"
					value={articleBody}
				/>
			</ClayForm.Group>
			<ClayForm.Group>
				<label htmlFor="headline">Head Line</label>

				<ClayInput
					id="headline"
					onChange={event => setHeadline(event.target.value)}
					placeholder="Enter headline"
					type="text"
					value={headline}
				/>
			</ClayForm.Group>
			<button className="btn btn-primary" onClick={() => onButtonSubmit()}>Add User</button>
			<ClayForm.Group>
				<label htmlFor="id1">Enter id to update</label>

				<ClayInput
					id="id1"
					onChange={event => setId(event.target.value)}
					placeholder="Enter id"
					type="text"
					value={id}
				/>
			</ClayForm.Group>

			{/* <ClayForm.Group>
				<form id="files" onClick={()=>AddDocument()}>
				  <label htmlFor="filess">Enter id to update</label>
				  <ClayInput
					type="file"
					value={files} multiple
					id="filess"
					/>
					<button type="submit">Submit</button>
				</form>

				
				
			</ClayForm.Group> */}


			
			{/* <button className='btn btn-primary' onClick={() => onButtonSubmit()}>Update</button> */}

		</div>
	);
	}
export default ADdUserForm;