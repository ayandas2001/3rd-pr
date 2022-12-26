import React,{useState,useEffect} from 'react';
import ADdUserForm from './ADdUserForm';
import AddDocument from './AddDocument';
import {GetUsers, DGetUsers, KGetUsers } from './Request';
import ClayList from '@clayui/list';
import Knowledge from './Knowledge';

//function for App.js------------------------------------------------------------------------------//
function App() {
	const [users, setUsers] = useState([]);
	const [document, setDocument] = useState([]);
	const [knowledge, SetKnowledge] = useState([]);
	
	//useeffect for blogs postings get data--------------------------------------------------------//
	useEffect(() => {
		GetUsers().then(res => {
			setUsers(res.items);
		})
	}, []);
	//end of blogs postiong get data-------------------------------------------------------------//
	//function for  Blog delete blog postings--------------------------------------------------------//
	function deleteBlog(id) {
		var Result=confirm(`The document with following ${id} is deleted`);
		if(Result)
		{
		fetch(`http://localhost:8080/o/headless-delivery/v1.0/blog-postings/${id}`, {
			method: 'DELETE',
			headers: {
				'Authorization': 'Basic dGVzdEBsaWZlcmF5LmNvbTpMZWFybg==',
			}
		}).then((res) => {
			res.json();
		})
	}}
	//end of delete blog postings---------------------------------------------------------------//


	//useeffect for documents get data----------------------------------------------------------//
	useEffect(() => {
		DGetUsers().then(res => {
			setDocument(res.items);
		})
	}, []);
	//function for documents delete data--------------------------------------------------------//
	function deleteDocument(id) {
		var Result=confirm(`The document with following ${id} is deleted`);
		if(Result)
		{
		fetch(`http://localhost:8080/o/headless-delivery/v1.0/documents/${id}`, {
			method: 'DELETE',
			headers: {
				'Authorization': 'Basic dGVzdEBsaWZlcmF5LmNvbTpMZWFybg==',
			}
		}).then((res) => {
			res.json();
		})
	}}
	//end for documents delete data--------------------------------------------------------------//


	//useeffect for knowledge base---------------------------------------------------------------//
	useEffect(() => {
		KGetUsers().then(res => {
			SetKnowledge(res.items);
		})
	}, []);
	//function for delete knowledge-------------------------------------------------------------//
	function deleteKnowledge(id) {
		var Result=confirm(`The document with following ${id} is deleted`);
		if(Result)
		{
		fetch(`http://localhost:8080/o/headless-delivery/v1.0/knowledge-base-articles/${id}`, {
			method: 'DELETE',
			headers: {
				'Authorization': 'Basic dGVzdEBsaWZlcmF5LmNvbTpMZWFybg==',
			}
		}).then((res) => {
			res.json();
		})
	}}
	//end of function for delete knowledge -------------------------------------------------------//

	return (
		<div>
			<h1>Blogs: </h1>
			{
				users.map(blog => (
					<div key={users.id}>
						<ClayList.Item flex>

							<ClayList.ItemField>{blog.id}</ClayList.ItemField>
							<ClayList.ItemField expand>
								<ClayList.ItemText>Article Body-:{blog.headline}</ClayList.ItemText>
								<ClayList.ItemText>Head Line-:{blog.articleBody}</ClayList.ItemText>
							</ClayList.ItemField>

							<ClayList.ItemField>
								<button className="btn btn-secondary" onClick={() => deleteBlog(blog.id)}>Delete</button>
							</ClayList.ItemField>
						</ClayList.Item>
					</div>
				))
			}
			<div>
				<ADdUserForm />
			</div>

			<div>
				<h1>Documents: </h1>
				{
					document.map(bl => (
						<div key={document.id}>
							<ClayList.Item flex>
								<ClayList.ItemField>{bl.id}</ClayList.ItemField>
								<ClayList.ItemField>
									<button className="btn btn-secondary" onClick={() => deleteDocument(bl.id)}>Delete</button>
								</ClayList.ItemField>
							</ClayList.Item>
						</div>
					))
				}
			</div>
			<div>
				<AddDocument />
			</div>
			<div>
				<h1>Knowledge Based</h1>
				{
					knowledge.map(know => (
						<div key={know.id}>
							<ClayList.Item flex>
								<ClayList.ItemField>{know.id}</ClayList.ItemField>
								<ClayList.ItemField expand>
									<ClayList.ItemText>Article Body-:{know.articleBody}</ClayList.ItemText>
									<ClayList.ItemText>title-:{know.title}</ClayList.ItemText>
								</ClayList.ItemField>
								<ClayList.ItemField>
									<button className="btn btn-secondary" onClick={() => deleteKnowledge(know.id)}>Delete</button>
								</ClayList.ItemField>
							</ClayList.Item>
						</div>
					))
				}
			</div>
			<div>
				<Knowledge />
			</div>
		</div>
	)
}

export default App;
