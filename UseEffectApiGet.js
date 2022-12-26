import {useState} from 'react';
// import Form from './Form';
function GetApp(){
     const[user,setUser]=useState('');
     const[articleBody,setArticle]=useState('');
     const[headline,setHeadline]=useState('');
    //  const [selectedFile, setSelectedFile] = useState();
    // const [selectedFile, setSelectedFile] = useState();
	// const [isSelected, setIsSelected] = useState(false);
    const [selectedFile, setSelectedFile] = useState();
    const [isSelected, setIsSelected] = useState(false);
    
     function GetCall(){
        const url="http://localhost:8080/o/headless-delivery/v1.0/sites/20121/blog-postings";
   
        fetch(url,{
            headers:{'Authorization':"Basic dGVzdEBsaWZlcmF5LmNvbTpMZWFybg==",
                    "Content-Type":"application/json"
                    }
        })
        .then((response)=>{
            return response.json();
        })
        .then((dataa)=>{
            console.log(dataa);
        })
        .catch((error)=>{
            console.log(error);
        });
    }

    function PostCall(f){
            f.preventDefault();
            const data = {articleBody,headline};
            const urrl = "http://localhost:8080/o/headless-delivery/v1.0/sites/20121/blog-postings";
            fetch(urrl, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Authorization': "Basic dGVzdEBsaWZlcmF5LmNvbTpMZWFybg==",
                    'Content-Type': "application/json"
                }
            })
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    console.log(data);
                    setUser(data);
                })
                .catch((err) => {
                    console.log(err);
                });
        }

        const DeleteCall=(e)=>{
            e.preventDefault();
            const link=`http://localhost:8080/o/headless-delivery/v1.0/blog-postings/${user.id}`;
            fetch(link, {
            method:"DELETE",
            headers:{
                        'Authorization':'Basic ' + btoa ('test@liferay.com:Learn')
            }
            }).then((response)=>{
                    return response.text();
            })
            .then(()=>{
                console.log("deleted");
            }).catch(()=>{
                console.log("Hauni kichi b")
            })
         }
        // const DeleteCall=(e)=>{
        //     e.preventDefault();
        //     const url=`http://localhost:8080/o/headless-delivery/v1.0/blog-postings/${user.id}`;
        //     fetch(url,{
        //         method:"DELETE",
        //         headers:{
        //             'Authorization':'Basic ' + btoa ('test@liferay.com:Learn')
        //         }
        //     }).then((res)=>{
        //         return res.text();
        //     }).then(()=>{
        //         console.log("deleted");
        //     })
        //   }
      
    
        const changeHandler = (event) => {
            setSelectedFile(event.target.files[0]);
            setIsSelected(true);
        };
    
        const handleSubmission = () => {
            const formData = new FormData();
            formData.append('File', selectedFile);
        
        
        fetch(
			'http://localhost:8080/o/headless-delivery/v1.0/sites/20121/documents',
			{
				method: 'POST',
				body: formData,
                headers: {
                    'Authorization': "Basic dGVzdEBsaWZlcmF5LmNvbTpMZWFybg==",
                    'Access': "*/*"
                }
			}
		)
			.then((response) => response.json())
			.then((result) => {
				console.log('Success:', result);
			})
			.catch((error) => {
				console.error('Error:', error);
			});
	
        };
        
	
 
        
    return(
        <>
            <button onClick={GetCall}>get</button>
            <form onSubmit={PostCall}>
                articleBody:<input type='text' value={articleBody} onChange={(event)=>{
                                                        setArticle(event.target.value) }} />
                headlineBod:<input type='text' value={headline}  onChange={(eventt)=>{
                                                        setHeadline(eventt.target.value)}}/>
                <input type='submit' />
            </form>
            <p>user id is: {user.id}</p>
            <button onClick={DeleteCall}>for delete</button>
            
            <div>
			<input type="file" name="file" onChange={changeHandler} />
			{isSelected ? (
				<div>
					<p>Filename: {selectedFile.name}</p>
					<p>Filetype: {selectedFile.type}</p>
					<p>Size in bytes: {selectedFile.size}</p>
					<p>
						lastModifiedDate:{' '}
						{selectedFile.lastModifiedDate.toLocaleDateString()}
					</p>
				</div>
			) : (
				<p>Select a file to show details</p>
			)}
			<div>
				<button onClick={handleSubmission}>Submit</button>
			</div>
		</div>
            
        </>
    )
    
    

}

    //const[data,setData]=useState("");
    //const [load,setLoad]=useState(true);
   
export default GetApp;


