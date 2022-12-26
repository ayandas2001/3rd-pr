import React from 'react'
import ClayForm, {ClayInput} from '@clayui/form';


function AddDocument() {
    const AddDocuments=()=>{
		document.getElementById("files").addEventListener('submit',e=>{
			e.preventDefault;
			const Data=document.getElementById("filess").files;
			const addData=new FormData;
			for(const myFiles of Data){
			addData.append('file',myFiles);

			const link='http://localhost:8080/o/headless-delivery/v1.0/sites/20121/documents';
            Liferay.Util.fetch(link, {
			body:addData,
            method:"POST",
            headers:{
            'Authorization':'Basic dGVzdEBsaWZlcmF5LmNvbTpMZWFybg==',
						'Accept':'*/*'
            }
            }).then((response)=>{
                    return response.text();
            })
		}}
		)}
        // function deleteBlog(id) {
        //     alert(`The document with following ${id} is deleted`);
        //     fetch(`http://localhost:8080/o/headless-delivery/v1.0/documents/${id}`, {
        //         method: 'DELETE',
        //         headers: {
        //             'Authorization': 'Basic dGVzdEBsaWZlcmF5LmNvbTpMZWFybg==',
        //         }
        //     }).then((res) => {
        //         res.json();
        //     })
        // }
	


	
  return (
    <div>
      <h1>AddDocument:</h1>
      <form id="files" onClick={() => AddDocuments()}>
      <ClayForm.Group>
          <label htmlFor="filess">Enter id to update</label>
          <ClayInput
            type="file"
            multiple
            id="filess"


          />
      </ClayForm.Group>
      <button className="btn btn-primary" type="submit">Upload files</button>
        
      </form>

    </div>
  )
}

export default AddDocument;