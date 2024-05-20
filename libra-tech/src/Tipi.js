// import React,{Component} from 'react';

// export class Tipi extends Component{
//     render(){
//         return(
//             <div>
//                 <h3>This is Tipi page</h3>
//             </div>
//         )
//     }
// }
import React,{Component} from 'react';
import {variables} from './Variables.js';

export class Tipi extends Component{

    constructor(props){
        super(props);

        this.state={
            tipet:[],
            modalTitle:"",
            TipiEmri:"",
            TipiID:0,

            TipiIDFilter:"",
            TipiEmriFilter:"",
            TipetWithoutFilter:[]
        }
    }

    FilterFn(){
        var TipiIDFilter=this.state.TipiIDFilter;
        var TipiEmriFilter = this.state.TipiEmriFilter;

        var filteredData=this.state.TipetWithoutFilter.filter(
            function(el){
                return el.TipiID.toString().toLowerCase().includes(
                    TipiIDFilter.toString().trim().toLowerCase()
                )&&
                el.TipiEmri.toString().toLowerCase().includes(
                    TipiEmriFilter.toString().trim().toLowerCase()
                )
            }
        );

        this.setState({tipet:filteredData});

    }

    sortResult(prop,asc){
        var sortedData=this.state.TipeWithoutFilter.sort(function(a,b){
            if(asc){
                return (a[prop]>b[prop])?1:((a[prop]<b[prop])?-1:0);
            }
            else{
                return (b[prop]>a[prop])?1:((b[prop]<a[prop])?-1:0);
            }
        });

        this.setState({tipet:sortedData});
    }

    changeTipiIDFilter = (e)=>{
        this.state.TipiIDFilter=e.target.value;
        this.FilterFn();
    }
    changeTipiEmriFilter = (e)=>{
        this.state.TipiEmriFilter=e.target.value;
        this.FilterFn();
    }

    refreshList(){
        fetch(variables.API_URL+'Tipi')
        .then(response=>response.json())
        .then(data=>{
            this.setState({tipet:data,TipiWithoutFilter:data});
        });
    }

    componentDidMount(){
        this.refreshList();
    }
    
    changeTipiEmri =(e)=>{
        this.setState({TipiEmri:e.target.value});
    }

    addClick(){
        this.setState({
            modalTitle:"Add Tip",
            TipiID:0,
            TipiEmri:""
        });
    }
    editClick(dep){
        this.setState({
            modalTitle:"Edit Tip",
            TipiID:dep.TipiID,
            TipiEmri:dep.TipiEmri
        });
    }

    createClick(){
        fetch(variables.API_URL+'Tipi',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                TipiEmri:this.state.TipiEmri
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
        fetch(variables.API_URL+'Tipi',{
            method:'PUT',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                TipiID:this.state.TipiID,
                TipiEmri:this.state.TipiEmri
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
        fetch(variables.API_URL+'Tipi/'+id,{
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

    render(){
        const {
            tipet,
            modalTitle,
            TipiID,
            TipiEmri
        }=this.state;

        return(
<div>

    <button type="button"
    className="btn btn-primary m-2 float-end"
    data-bs-toggle="modal"
    data-bs-target="#exampleModal"
    onClick={()=>this.addClick()}>
        Shto Tipin
    </button>
    <table className="table table-striped">
    <thead>
    <tr>
        <th>
            <div className="d-flex flex-row">

            
            {/* <input className="form-control m-2"
            onChange={this.changeTipiIDFilter}
            placeholder="Filter"/>
            
            <button type="button" className="btn btn-light"
            onClick={()=>this.sortResult('TipiID',true)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-down-square-fill" viewBox="0 0 16 16">
                <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5a.5.5 0 0 1 1 0z"/>
                </svg>
            </button>

            <button type="button" className="btn btn-light"
            onClick={()=>this.sortResult('TipiID',false)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up-square-fill" viewBox="0 0 16 16">
                <path d="M2 16a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2zm6.5-4.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 1 0z"/>
                </svg>
            </button> */}

            </div>
            TipiID
        </th>
        <th>
        <div className="d-flex flex-row">
        {/* <input className="form-control m-2"
            onChange={this.changeTipiEmriFilter}
            placeholder="Filter"/>

            <button type="button" className="btn btn-light"
            onClick={()=>this.sortResult('TipiEmri',true)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-down-square-fill" viewBox="0 0 16 16">
                <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5a.5.5 0 0 1 1 0z"/>
                </svg>
            </button>

            <button type="button" className="btn btn-light"
            onClick={()=>this.sortResult('TipiEmri',false)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up-square-fill" viewBox="0 0 16 16">
                <path d="M2 16a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2zm6.5-4.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 1 0z"/>
                </svg>
            </button> */}
            </div>
            TipiEmri
      
        </th>
        <th>
            Options
        </th>
    </tr>
    </thead>
    <tbody>
        {tipet.map(dep=>
            <tr key={dep.TipiID}>
                <td>{dep.TipiID}</td>
                <td>{dep.TipiEmri}</td>
                <td>
                <button type="button"
                className="btn btn-light mr-1"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                onClick={()=>this.editClick(dep)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                    <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                    </svg>
                </button>

                <button type="button"
                className="btn btn-light mr-1"
                onClick={()=>this.deleteClick(dep.TipiID)}>
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
       <div className="input-group mb-3">
        <span className="input-group-text">TipiEmri</span>
        <input type="text" className="form-control"
        value={TipiEmri}
        onChange={this.changeTipiEmri}/>
       </div>

        {TipiID==0?
        <button type="button"
        className="btn btn-primary float-start"
        onClick={()=>this.createClick()}
        >Create</button>
        :null}

        {TipiID!=0?
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
export default Tipi;