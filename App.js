import React  from 'react';
import { useState,useEffect } from 'react';
//import AddUserForm from './AddUserForm';
import {getUsers} from './request';
import { getBlogs , getDocument,getKnowledgw} from './request';
import ClayList from '@clayui/list'; 
//import { blogs } from './AddBlogs'
// import Pull1 from './Pull request/Pull1';
// import Form from './mycodes/Form';
// import Mediaform from './mycodes/Mediaform';
// import GET1 from './Pull request/Get';
// import Put1 from './Pull request/2ndPull';
// import DELETE from './Pull request/Delete';
// import DELETEIMAGE from './Pull request/ImageDelet';
import AddBlogs from './AddBlogs';
import AddDocument from './AddDocument';
import AddKnowledge from './AddKnowledge';
function App() {
//========================================Blog function==================================================//	
//================== Start of Delete blog=====================================//
	const [blogs, setBlogs] = useState([]);

	useEffect(() => {
		getBlogs().then(res => {
			setBlogs(res.items);
		})
	}, []);
	function deleteBlog(id){
        var result=confirm(`The Blogs with following ${id} is deleted`);
		if (result){
        fetch(`http://localhost:8080/o/headless-delivery/v1.0/blog-postings/${id}`, {
            method:'DELETE',
            headers:{
                'Authorization':'Basic dGVzdEBsaWZlcmF5LmNvbTpsZWFybg==',
            }
        }).then((res)=>{
            res.json();
        })
    }
	}
	//===============================End of DELETE Blogs==========================//

	//===============================Start of Edit Blogs==========================//
	useEffect(() => {
		getBlogs().then(res => {
			setBlogs(res.items);
		})
	}, []);
	function editBlog(id) {
		var reslut = confirm(`The document with following ${id} is to Update`);
		if (reslut) {
			const data = {
				headline: prompt("Please enter your headline", "Headline"),
				articleBody: prompt("Please enter your articleBody", "ArticleBody"),
			};
			fetch(`http://localhost:8080/o/headless-delivery/v1.0/blog-postings/${id}`, {
				method: 'PUT',
				body: JSON.stringify(data),
				headers: {
					'Content-Type': 'application/json',
					'Authorization': 'Basic dGVzdEBsaWZlcmF5LmNvbTpsZWFybg==',
				}
			}).then((res) => {
				res.json();
			})
		}
	}
	//==================================End of Edit Blogs==============================//
//===========================================================================================================================//	
	//==================================Start of Documnet delete=======================//
	const [document, setDocumnet] = useState([]);
	useEffect(() => {
		getDocument().then(res => {
			setDocumnet(res.items);
		})
	}, []);
	function deleteDocumnet(id) {
		var result=confirm(`The document with following ${id} is deleted`);
		if (result){
        fetch(`http://localhost:8080/o/headless-delivery/v1.0/documents/${id}`, {
            method:'DELETE',
            headers:{
                'Authorization':'Basic dGVzdEBsaWZlcmF5LmNvbTpsZWFybg==',
            }
        }).then((res)=>{
            res.json();
        })
    }	
	}
	//=================================END of Document delete===========================================//
//===================================Knowlege operation start=========================================================//
	//============================================Delete Knowlege operation==============================//
	const [knowledge, setKnowledge] = useState([]);
	useEffect(() => {
		getKnowledgw().then(res => {
			setKnowledge(res.items);
		})
	}, []);
	function deleteKnowledge(id) {
		var result = confirm(`The Knowledge with following ${id} is deleted`);
		if (result) {
			fetch(`http://localhost:8080/o/headless-delivery/v1.0/knowledge-base-articles/${id}`, {
				method: 'DELETE',
				headers: {
					'Authorization': 'Basic dGVzdEBsaWZlcmF5LmNvbTpsZWFybg==',
				}
			}).then((res) => {
				res.json();
			})
		}	
	}

	function editKnowledge (id) {
		var reslut = confirm(`The Knowledge with following ${id} is to Update`);
		if (reslut) {
			const data = {
				title: prompt("Please enter your headline", "Headline"),
				articleBody: prompt("Please enter your articleBody", "ArticleBody"),
			};
			fetch(`http://localhost:8080/o/headless-delivery/v1.0/knowledge-base-articles/${id}`, {
				method: 'PUT',
				body: JSON.stringify(data),
				headers: {
					'Content-Type': 'application/json',
					'Authorization': 'Basic dGVzdEBsaWZlcmF5LmNvbTpsZWFybg==',
				}
			}).then((res) => {
				res.json();
			})
		}
	}
	return (
		<div className="row"> 
		{/* =================Start of Input and Buttoms of Blogs ================================*/}
			<div className="col">
			<AddBlogs />
				<h1>Blog ID:</h1>
				<div>
                <h1>Blogs: </h1>
                {blogs.map(blog=>(
                    <div key={blog.id}>
                        <ClayList.Item flex>
                            <ClayList.ItemField>{blog.id}</ClayList.ItemField>
                            <ClayList.ItemField expand>
                            <ClayList.ItemTitle>{blog.headline}</ClayList.ItemTitle>
                            <ClayList.ItemText>{blog.articleBody}</ClayList.ItemText></ClayList.ItemField>
                            <ClayList.ItemField>
							<button className="btn btn-secondary" onClick={()=>deleteBlog(blog.id)}>Delete</button>
							<button className="btn btn-secondary" onClick={()=>editBlog(blog.id)}>UPDATE</button>
				                             </ClayList.ItemField>
                        </ClayList.Item>
                    </div>
                ))}
               
				</div> 
			</div>
			{/* ============================End of Input of Buttom blogs ===============================*/}

			{/* ============================Start of Document and Media input form and Buttons============= */}
			<div className="col">
			<AddDocument />
				<h1>Document ID:</h1>
				<div>
                <h1>Document: </h1>
                {document.map(doc=>(
                    <div key={document.id}>
                        <ClayList.Item flex>
                            <ClayList.ItemField>{doc.id}</ClayList.ItemField>
							<ClayList.ItemField expand></ClayList.ItemField>
                            <ClayList.ItemField>
							<button className="btn btn-secondary" onClick={()=>deleteDocumnet(doc.id)}>Delete</button>				                             
							</ClayList.ItemField>
                        </ClayList.Item>
                    </div>
                ))}
               
				</div> 
			</div>
			{/* ===================================End of Document and =============================================== */}
			{/* ===================================Satrt of Knowledge and buttom=======================================  */}
			<div className="col">
			<AddKnowledge />
				<h1>Knowledge ID:</h1>
				<div>
                <h1>Knowledge: </h1>
                {knowledge.map(kn=>(
                    <div key={knowledge.id}>
                        <ClayList.Item flex>
                            <ClayList.ItemField>{kn.id}</ClayList.ItemField>
                            <ClayList.ItemField expand>	
                            <ClayList.ItemTitle>{kn.title}</ClayList.ItemTitle>
                            <ClayList.ItemText>{kn.articleBody}</ClayList.ItemText></ClayList.ItemField>
                            <ClayList.ItemField>
							<button className="btn btn-secondary" onClick={()=>deleteKnowledge(kn.id)}>Delete</button>
							<button className="btn btn-secondary" onClick={()=>editKnowledge(kn.id)}>UPDATE</button>
				                             </ClayList.ItemField>
                        </ClayList.Item>
                    </div>
                ))}
               
				</div> 
			</div>
			{/* =================================End of knowlege based buttons======================================= */}
		</div>
	);
}

export default App;