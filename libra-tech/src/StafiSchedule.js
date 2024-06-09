import React, { Component } from 'react';
import { variables } from './Variables.js';
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';

export class StafiSchedule extends Component {
  constructor(props) {
    super(props);

    this.state = {
      schedules: [],
      modalTitle: "",
      scheduleId: 0,
      staffId: "",
      sector: "",
      startTime: "",
      endTime: ""
    };
  }

  componentDidMount() {
    this.refreshSchedules();
  }

  refreshSchedules() {
    fetch(variables.API_URL + 'schedule')
      .then(response => response.json())
      .then(data => {
        this.setState({ schedules: data });
      });
  }

  addClick() {
    this.setState({
      modalTitle: "Add Schedule",
      scheduleId: 0,
      staffId: "",
      sector: "",
      startTime: "",
      endTime: ""
    });
  }

  editClick(schedule) {
    this.setState({
      modalTitle: "Edit Schedule",
      scheduleId: schedule.ScheduleId,
      staffId: schedule.StaffId,
      sector: schedule.Sector,
      startTime: schedule.StartTime,
      endTime: schedule.EndTime
    });
  }

  createOrUpdateSchedule() {
    if (this.state.scheduleId === 0) {
      fetch(variables.API_URL + 'schedule', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          StaffId: this.state.staffId,
          Sector: this.state.sector,
          StartTime: this.state.startTime,
          EndTime: this.state.endTime
        })
      })
      .then(res => res.ok ? alert('Schedule Added') : alert('Failed'))
      .then(this.refreshSchedules());
    } else {
      fetch(variables.API_URL + 'schedule', {
        method: 'PUT',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ScheduleId: this.state.scheduleId,
          StaffId: this.state.staffId,
          Sector: this.state.sector,
          StartTime: this.state.startTime,
          EndTime: this.state.endTime
        })
      })
      .then(res => res.ok ? alert('Schedule Updated') : alert('Failed'))
      .then(this.refreshSchedules());
    }
  }

  deleteClick(id) {
    if (window.confirm('Are you sure?')) {
      fetch(variables.API_URL + 'schedule/' + id, {
        method: 'DELETE',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
      .then(res => res.ok ? alert('Schedule Deleted') : alert('Failed'))
      .then(this.refreshSchedules());
    }
  }

  render() {
    const {
      schedules,
      modalTitle,
      staffId,
      sector,
      startTime,
      endTime
    } = this.state;

    return (
      <div>
        <body id="page-top">
          <Header />
          <div className="container">
            <Sidebar />
            <div className="container-fluid" style={{ marginLeft: '110px' }}>
              <div className='d-flex justify-content-between'>
                <button type="button" className="btn btn-primary m-2" data-bs-toggle="modal" data-bs-target="#scheduleModal" onClick={() => this.addClick()}>
                  Add Schedule
                </button>
              </div>

              {/* Modal for Add/Edit Schedule */}
              <div className="modal fade" id="scheduleModal" tabIndex="-1" aria-hidden="true">
                <div className="modal-dialog modal-lg modal-dialog-centered">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title">{modalTitle}</h5>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>

                    <div className="modal-body">
                      {/* Form for schedule */}
                      <div className="input-group mb-3">
                        <span className="input-group-text">Staff ID</span>
                        <input type="text" className="form-control" value={staffId} onChange={e => this.setState({ staffId: e.target.value })} />
                      </div>
                      <div className="input-group mb-3">
                        <span className="input-group-text">Sector</span>
                        <input type="text" className="form-control" value={sector} onChange={e => this.setState({ sector: e.target.value })} />
                      </div>
                      <div className="input-group mb-3">
                        <span className="input-group-text">Start Time</span>
                        <input type="time" className="form-control" value={startTime} onChange={e => this.setState({ startTime: e.target.value })} />
                      </div>
                      <div className="input-group mb-3">
                        <span className="input-group-text">End Time</span>
                        <input type="time" className="form-control" value={endTime} onChange={e => this.setState({ endTime: e.target.value })} />
                      </div>

                      <button type="button" className="btn btn-primary float-end" onClick={() => this.createOrUpdateSchedule()}>
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* List Schedules */}
              <table className='table table-striped'>
                <thead>
                  <tr>
                    <th>Staff ID</th>
                    <th>Sector</th>
                    <th>Start Time</th>
                    <th>End Time</th>
                    <th>Options</th>
                  </tr>
                </thead>
                <tbody>
                  {schedules.map(schedule =>
                    <tr key={schedule.ScheduleId}>
                      <td>{schedule.StaffId}</td>
                      <td>{schedule.Sector}</td>
                      <td>{schedule.StartTime}</td>
                      <td>{schedule.EndTime}</td>
                      <td>
                        <button className="btn btn-primary" onClick={() => this.editClick(schedule)}>Edit</button>
                        <button className="btn btn-danger" onClick={() => this.deleteClick(schedule.ScheduleId)}>Delete</button>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
              <Footer />
            </div>
          </div>
        </body>
      </div>
    );
  }
}

export default StafiSchedule;
