import React,{ useState } from 'react'

import ClayForm, {ClayInput} from '@clayui/form';


function AddKnowledge() {
    const [articleBody,setArticleBody]=useState('');
    const [title,setTitle]=useState('');
    const onKnowledge=()=>{
        document.getElementById("addKnowledge").addEventListener('submit',e =>{
        e.preventDefault;
            const data = {articleBody,title};
        const link='http://localhost:8080/o/headless-delivery/v1.0/sites/20121/knowledge-base-articles'
        Liferay.Util.fetch(link,{
            method: "POST",
            body: JSON.stringify(data),
            headers:{
                'Content-Type':'application/json',
                'Authorization':'Basic dGVzdEBsaWZlcmF5LmNvbTpsZWFybg==',
            }
        
        }).then((response)=>{
            return response.Json();
    })
    }
)}
  return (
    <div>
      <div>
      <h1>KnowledgeBlogs:</h1>
      <form id="addKnowledge" onClick={() => onKnowledge()}>
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
				<label htmlFor="title">Title</label>

				<ClayInput
					id="title"
                    onChange={event => setTitle(event.target.value)}
					placeholder="Enter title"
					type="text"
                    value={title}
					
				/>
			</ClayForm.Group>
			<button className="btn btn-primary"  type="submit">Upload Knowledge</button>
            </form>
            </div>
    </div>
  )
}

export default AddKnowledge;
