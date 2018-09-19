import React from 'react';
import'./JobCard.css';

class JobCard extends React.Component {
  render() {
    return (
    <div className = "JobCard">
      <div className = 'JobCard-Title'>
        <h3>{this.props.jobCardData.job_no}</h3>
        <h3>Placeholder Name</h3>
      </div>
      <div>Job No: {this.props.jobCardData.job_no}</div>
      <div>Brand: {this.props.jobCardData.brand}</div>
    </div>

  )};

}

export default JobCard;
