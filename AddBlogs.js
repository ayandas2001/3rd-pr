import React, {useCallback, useEffect, useState} from 'react';
import ClayForm, {ClayInput} from '@clayui/form';
import {addBlogs, getBlogs,deleteBlogs} from './request';

 function AddBlogs() {
  const [headline, setHeadline] = useState('');
	const [articleBody, setArticleBody] = useState('');
  const [blogs, setBlogs] = useState([]);

    const onButtonSubmit = useCallback(() => {
		addBlogs({
			headline,
            articleBody
		}).then(() => {
            setGivenName('');
			setFamilyName('');
        });
	},
	[
        addBlogs,
		headline,
        articleBody
	]);

  return (
    <div>
      <h1>Blog Posting</h1>

    <ClayForm.Group>
    <label htmlFor="givenName">Heading</label>

    <ClayInput
        id="givenName"
        onChange={event => setHeadline(event.target.value)}
        type="text"
        value={headline}
    />
    </ClayForm.Group>
    <ClayForm.Group>
    <label htmlFor="familyName">ArticleBody</label>

    <ClayInput
        id="familyName"
        onChange={event => setArticleBody(event.target.value)}
        placeholder="Bloggs"
        type="text"
        value={articleBody}
    />
    </ClayForm.Group>
<button className="btn btn-primary" onClick={() => onButtonSubmit()}>AddBlogs</button><br></br>
{/* <button className="btn1 btn-primary" onClick={() => onButtonDelete()}>DELETEBlogs</button> */}

    </div>
  )
}
export default AddBlogs;
