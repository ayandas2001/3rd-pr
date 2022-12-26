import React, { useState ,useCallback} from 'react'
import { KAddUsers } from './Request';
import ClayForm, {ClayInput} from '@clayui/form';

function Knowledge() {
    const [articleBody,setArticleBody]=useState('');
    const [title,setTitle]=useState('');
    const [id,setId]=useState('');

    const onButtonSubmit=useCallback(()=>{
		KAddUsers({
			id,
			articleBody,
			title
		}).then(()=>{
			setId(''),
			setArticleBody(''),
			setTitle('')
		})

	},[
		KAddUsers,
		id,
		articleBody,
		title
	]);
  return (
      
      <div>
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
				<label htmlFor="title">Title</label>

				<ClayInput
					id="title"
					onChange={event => setTitle(event.target.value)}
					placeholder="Enter title"
					type="text"
					value={title}
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
     </div></div>
  )
}

export default Knowledge