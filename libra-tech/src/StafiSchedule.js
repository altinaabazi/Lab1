import React, { Component } from 'react';
import { variables } from './Variables.js';
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';
import './StafiSchedule.css';

export class StafiSchedule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      schedules: [],
      modalTitle: "",
      scheduleId: 0,
      fillon: "",
      mbaron: "",
      sektori: "",
      stafi: ""
    };
  
    this.handleModalHidden = this.handleModalHidden.bind(this);
    this.addClick = this.addClick.bind(this);  // Bind addClick
    this.editClick = this.editClick.bind(this);  // Bind editClick
    this.deleteClick = this.deleteClick.bind(this);  // Bind deleteClick
    this.changeFillon = this.changeFillon.bind(this);  // And so on for other methods...
    this.changeMbaron = this.changeMbaron.bind(this);
    this.changeSektori = this.changeSektori.bind(this);
    this.changeStafi = this.changeStafi.bind(this);
    console.log('Constructor called');
  }
  

  componentDidMount() {
    console.log('Component did mount');
    this.refreshSchedules();
    const modal = document.getElementById("scheduleModal");
    if (modal) {
      modal.addEventListener("hidden.bs.modal", this.handleModalHidden);
      console.log('Event listener added');
    } else {
      console.log('Modal not found');
    }
  }

  componentWillUnmount() {
    console.log('Component will unmount');
    const modal = document.getElementById("scheduleModal");
    if (modal) {
      modal.removeEventListener("hidden.bs.modal", this.handleModalHidden);
      console.log('Event listener removed');
    }
  }

  handleModalHidden() {
    console.log('Modal hidden');
    this.setState({
      modalTitle: "",
      scheduleId: 0,
      fillon: "",
      mbaron: "",
      sektori: "",
      stafi: ""
    });
  }
  refreshSchedules() {
    fetch(variables.API_URL + 'StafiSchedule')
      .then(response => response.json())
      .then(data => {
        this.setState({ schedules: data });
      })
      .catch(error => console.error('Error fetching schedules:', error));
}


  changeFillon = (e) => {
    console.log('Changing fillon');
    this.setState({ fillon: e.target.value });
  }
  changeMbaron = (e) => {
    console.log('Changing mbaron');
    this.setState({ mbaron: e.target.value });
  }
  changeSektori = (e) => {
    console.log('Changing sektori');
    this.setState({ sektori: e.target.value });
  }
  changeStafi = (e) => {
    console.log('Changing stafi');
    this.setState({ stafi: e.target.value });
  }

  addClick() {
    console.log('Adding schedule',);
    this.setState({
      modalTitle: "Add Schedule",
      scheduleId: 0,
      fillon: "",
      mbaron: "",
      sektori: "",
      stafi: ""
    });
  }

  editClick(schedule) {
    console.log('Editing schedule', schedule);
    this.setState({
      modalTitle: "Edit Schedule",
      scheduleId: schedule.scheduleId,
      fillon: schedule.fillon,
      mbaron: schedule.mbaron,
      sektori: schedule.sektori,
      stafi: schedule.stafi
    });
  }


 
  createStaffSchedule() {
    fetch(variables.API_URL + 'schedule', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            fillon: this.state.fillon,
            mbaron: this.state.mbaron,
            sektori: this.state.sektori,
            stafi: this.state.stafi,
        })
    })
    .then(res => {
        if (!res.ok) {
            return res.json().then(data => Promise.reject(data));
        }
        return res.json();
    })
    .then(result => {
        alert('U shtua me sukses');
        this.refreshSchedules();
        document.getElementById("exampleModal").classList.remove("show");
        document.querySelector(".modal-backdrop").remove();
        this.setState({
            fillon: "",
            mbaron: "",
            sektori: "",
            stafi: "",
            scheduleId: 0
        });
    })
    .catch(error => {
        console.error('Failed to create staff schedule:', error);
        alert('Failed: ' + (error.message || 'Unknown Error'));
    });
}



  updateStaffSchedule() {
    fetch(variables.API_URL + 'schedule', {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        fillon: this.state.fillon,
        mbaron: this.state.mbaron,
        sektori: this.state.sektori,
        stafi: this.state.stafi,
      })
    })
      .then(res => {
        if (res.ok) {
          alert('Updated');
          this.refreshSchedules();
          document.getElementById("exampleModal").classList.remove("show");
          document.querySelector(".modal-backdrop").remove();


        } else {
          alert('Failed');
        }
      })
      .catch(error => {
        console.error('Error updating book:', error);
        alert('Failed');
      });
  }

saveStaffSchedule = () => {
    const { scheduleId, fillon, mbaron, sektori, stafi } = this.state;
    const url = scheduleId ? `${variables.API_URL}StafiSchedule/${scheduleId}` : `${variables.API_URL}StafiSchedule`;
    const method = scheduleId ? 'PUT' : 'POST';
    const body = JSON.stringify({
        fillon, mbaron, sektori, stafi
    });

    console.log(method === 'POST' ? 'Creating staff schedule' : 'Updating staff schedule:', body);

    fetch(url, {
        method: method,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: body
    })
    .then(res => {
        if (!res.ok) throw new Error('Response not OK');
        return res.json();
    })
    .then(result => {
        alert(`Staff schedule ${scheduleId ? 'updated' : 'added'} successfully`);
        this.refreshSchedules();
        document.getElementById("scheduleModal").classList.remove("show");
        document.querySelector(".modal-backdrop").remove();
    })
    .catch(error => {
        console.error(`Failed to ${scheduleId ? 'update' : 'add'} staff schedule:`, error);
        alert(`Failed to ${scheduleId ? 'update' : 'add'} staff schedule`);
    });
}

  deleteClick(id) {
    console.log('Deleting schedule', id);
    if (window.confirm('Are you sure?')) {
      fetch(variables.API_URL + 'schedule/' + id, {
        method: 'DELETE',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
      .then(res => {
        if (!res.ok) {
          throw new Error('Delete response not OK');
        }
        return res.json();
      })
      .then(result => {
        console.log('Delete result', result);
        alert('Schedule Deleted');
        this.refreshSchedules();
      })
      .catch(error => {
        console.error('Failed to delete schedule:', error);
        alert('Failed to delete schedule');
      });
    }
  }

  render() {
    const {
      schedules,
      modalTitle,
      fillon,
      mbaron,
      sektori,
      stafi
    } = this.state;

    console.log('Rendering component', this.state);
    return (
      <div>
        <Header />
        <Sidebar />
        <div className="container-fluid" style={{ marginLeft: '110px' }}>
          <table className='table table-striped'>
            <thead>
              <tr>
                <th>Fillon</th>
                <th>Mbaron</th>
                <th>Sektori</th>
                <th>Stafi</th>
                <th>Options</th>
              </tr>
            </thead>
            <tbody>
              {schedules.map(schedule =>
                <tr key={schedule.scheduleId}>
                  <td>{schedule.fillon}</td>
                  <td>{schedule.mbaron}</td>
                  <td>{schedule.sektori}</td>
                  <td>{schedule.stafi}</td>
                  <td>
                    <button className="btn btn-light mr-1" onClick={() => this.editClick(schedule)}>Edit</button>
                    <button className="btn btn-danger" onClick={() => this.deleteClick(schedule.scheduleId)}>Delete</button>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
          <div className="d-flex justify-content-end">
            <button type="button" className="btn btn-primary m-2" data-bs-toggle="modal" data-bs-target="#scheduleModal" onClick={this.addClick}>
              Add New Schedule
            </button>
          </div>
        </div>
        <Footer />
        {/* Modal Code */}
        <div className="modal fade" id="scheduleModal" tabIndex="-1" aria-hidden="true">
          <div className="modal-dialog modal-lg modal-dialog-centered">
              <div className="modal-content">
                  <div className="modal-header">
                      <h5 className="modal-title">{modalTitle}</h5>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                      <form>
                          <div className="mb-3">
                              <label htmlFor="fillon" className="form-label">Fillimi i Orari-t</label>
                              <input type="text" className="form-control" id="fillon" value={this.state.fillon} onChange={this.changeFillon} />
                          </div>
                          <div className="mb-3">
                              <label htmlFor="mbaron" className="form-label">Mbarimi i Orari-t</label>
                              <input type="text" className="form-control" id="mbaron" value={this.state.mbaron} onChange={this.changeMbaron} />
                          </div>
                          <div className="mb-3">
                              <label htmlFor="sektori" className="form-label">Sektori</label>
                              <input type="text" className="form-control" id="sektori" value={this.state.sektori} onChange={this.changeSektori} />
                          </div>
                          <div className="mb-3">
                              <label htmlFor="stafi" className="form-label">Stafi</label>
                              <input type="text" className="form-control" id="stafi" value={this.state.stafi} onChange={this.changeStafi} />
                          </div>
                      </form>
                  </div>
                  <div className="modal-footer">
                      <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                      <button type="button" className="btn btn-primary" onClick={this.createStaffSchedule}>Save Changes</button>
                  </div>
              </div>
          </div>
        </div>
      </div>
    );
    
  }
}

export default StafiSchedule;
