import React, {useState} from 'react';


const Addtodo = ({addTodo}) => {
    const [title,setTitle]=useState("");
    const [desc,setDesc]=useState("");

    const submit= (e)=>{
        e.preventDefault();
        if(!title || !desc){
            alert("Title or Description can not be blank")
        }
        else{
          addTodo(title,desc);
          setTitle("");
          setDesc("");
        }
    }

  return (

      
    <div className='contaner center' style={{ paddingLeft: '50px',paddingRight:'50px' }}>
        <h3>Add a ToDo</h3>
        <form onSubmit={submit}>
            <div className="mb-3">
                <label htmlFor="title" className="form-label">Todo Title</label>
                <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            </div>
            <div className="mb-3">
                <label htmlFor="desc" className="form-label">Todo Description</label>
                <input type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}} className="form-control" id="exampleInputPassword1"/>
            </div>
            <button type="submit" className="btn btn-success">Submit</button>
            </form>
            
    </div>
    )
}

export default Addtodo
