import React,{Component} from 'react';
import {variables} from './Variables.js';

export class MjeteShkollore extends Component{

    constructor(props){
        super(props);

        this.state={
            tipet:[],
            mjetet:[],
            modalTitle:"",
            ID:0,
            Pershkrimi:"",
            Tipi:"",
            ImgPath:"img.png",
            Cmimi:0.0,
            Sasia:0,
            PhotoFileName:variables.PHOTO_URL,
            
        }
    }

    refreshList(){

        fetch(variables.API_URL+'mjeteShkollore')
        .then(response=>response.json())
        .then(data=>{
            this.setState({mjetet:data});
        });

        fetch(variables.API_URL+'Tipi')
        .then(response=>response.json())
        .then(data=>{
            this.setState({tipet:data});
        });
    }

    componentDidMount(){
        this.refreshList();
    }
    
    changePershkrimi=(e)=>{
        this.setState({Pershkrimi:e.target.value});
    }
    changeTipi=(e)=>{
        this.setState({Tipi:e.target.value});
    }
    changeCmimi=(e)=>{
        this.setState({Cmimi:e.target.value});
    }
    changeSasia=(e)=>{
        this.setState({Sasia:e.target.value});
    }
   

    addClick(){
        this.setState({
            modalTitle:"Shto MjeteShkollore",
            ID:0,
            Pershkrimi:"",
            Tipi:"",
            Cmimi:0,
            Sasia:0,
            ImgPath:"anonymous.png"
        });
    }
    editClick(emp){
        this.setState({
            modalTitle:"Ndrysho MjeteShkollore",
            ID:emp.ID,
            Pershkrimi:emp.Pershkrimi,
            Tipi:emp.Tipi,
            Cmimi:emp.Cmimi,
            Sasia:emp.Sasia,
            ImgPath:emp.ImgPath
        });
    }

    createClick(){
        fetch(variables.API_URL+'MjeteShkollore',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                Pershkrimi:this.state.Pershkrimi,
                Tipi:this.state.Tipi,
                ImgPath:this.state.ImgPath,
                Cmimi:this.state.Cmimi,
                Sasia:this.state.Sasia
                
                
            })
        })
        .then(res=>res.json())
        .then((result)=>{
            alert('U shtua me sukses');
            this.refreshList();
        },(error)=>{
            alert('Failed');
        })
    }


    updateClick(){
        fetch(variables.API_URL+'MjeteShkollore',{
            method:'PUT',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                ID:this.state.ID,
                Pershkrimi:this.state.Pershkrimi,
                Tipi:this.state.Tipi,
                ImgPath:this.state.ImgPath,
                Cmimi:this.state.Cmimi,
                Sasia:this.state.Sasia
                
            })
        })
        .then(res=>res.json())
        .then((result)=>{
            alert('Failed');
           
        },(error)=>{
            alert('Updated');
            this.refreshList();
        })
    }

    deleteClick(id){
        if(window.confirm('A jeni i sigurt?')){
        fetch(variables.API_URL+'MjeteShkollore/'+id,{
            method:'DELETE',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            }
        })
        .then(res=>res.json())
        .then((result)=>{
            alert('Failed');
           
        },(error)=>{
            alert('Success');
            this.refreshList();
        })
        }
    }

    imageUpload=(e)=>{
        e.preventDefault();

        const formData=new FormData();
        formData.append("file",e.target.files[0],e.target.files[0].name);

        fetch(variables.API_URL+'MjeteShkollore/savefile',{
            method:'POST',
            body:formData
        })
        .then(res=>res.json())
        .then(data=>{
            this.setState({ImgPath:data});
        })
    }

    render(){
        const {
            tipet,
            mjetet,
            modalTitle,
            ID,
            Pershkrimi,
            Tipi,
            Cmimi,
            Sasia,
            PhotoFileName,
            ImgPath
            
        }=this.state;

        return(
<div>

    <button type="button"
    className="btn btn-primary m-2 float-end"
    data-bs-toggle="modal"
    data-bs-target="#exampleModal"
    onClick={()=>this.addClick()}>
        Shto MjeteShkollore
    </button>
    <table className="table table-striped">
    <thead>
    <tr>
        <th>
            ID
        </th>
        <th>
            Pershkrimi
        </th>
        <th>
            Tipi
        </th>
        <th>
            Cmimi
        </th>
        <th>
            Sasia
        </th>
        <th>
            Options
        </th>
    </tr>
    </thead>
    <tbody>
        {mjetet.map(emp=>
            <tr key={emp.ID}>
                <td>{emp.ID}</td>
                <td>{emp.Pershkrimi}</td>
                <td>{emp.Tipi}</td>
                <td>{emp.Cmimi}</td>
                <td>{emp.Sasia}</td>
                <td>
                <button type="button"
                className="btn btn-light mr-1"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                onClick={()=>this.editClick(emp)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                    <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                    </svg>
                </button>

                <button type="button"
                className="btn btn-light mr-1"
                onClick={()=>this.deleteClick(emp.ID)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
                    <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                    </svg>
                </button>

                </td>
            </tr>
            )}
    </tbody>
    </table>

<div className="modal fade" id="exampleModal" tabIndex="-1" aria-hidden="true">
<div className="modal-dialog modal-lg modal-dialog-centered">
<div className="modal-content">
   <div className="modal-header">
       <h5 className="modal-title">{modalTitle}</h5>
       <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"
       ></button>
   </div>

   <div className="modal-body">
    <div className="d-flex flex-row bd-highlight mb-3">
     
     <div className="p-2 w-50 bd-highlight">
    
        <div className="input-group mb-3">
            <span className="input-group-text">Pershkrimi</span>
            <input type="text" className="form-control"
            value={Pershkrimi}
            onChange={this.changePershkrimi}/>
        </div>

        <div className="input-group mb-3">
            <span className="input-group-text">Tipi</span>
            <select className="form-select"
            onChange={this.changeTipi}
            value={Tipi}>
                {tipet.map(dep=><option key={dep.TipiID}>
                    {dep.TipiEmri}
                </option>)}
            </select>
        </div>

        <div className="input-group mb-3">
            <span className="input-group-text">Cmimi</span>
            <input type="number" className="form-control" min="0"
            value={Cmimi}
            onChange={this.changeCmimi}/>
        </div>

        
        <div className="input-group mb-3">
            <span className="input-group-text">Sasia</span>
            <input type="number" className="form-control" min="0"
            value={Sasia}
            onChange={this.changeSasia}/>
        </div>



     </div>
     <div className="p-2 w-50 bd-highlight">
         <img width="250px" height="250px"
         src={PhotoFileName+ImgPath}/>
         <input className="m-2" type="file" onChange={this.imageUpload}/>
     </div>
    </div>

    {ID==0?
        <button type="button"
        className="btn btn-primary float-start"
        onClick={()=>this.createClick()}
        >Create</button>
        :null}

        {ID!=0?
        <button type="button"
        className="btn btn-primary float-start"
        onClick={()=>this.updateClick()}
        >Update</button>
        :null}
   </div>

</div>
</div> 
</div>


</div>
        )
    }
}
export default MjeteShkollore;