import React from 'react';
import'./JobCard.css';

class JobCard extends React.Component {
  render() {
    return (
    <div className = "JobCard">
      <div>Job No: {this.props.jobCardData.job_no}</div>
      <div>Brand: {this.props.jobCardData.brand}</div>
    </div>

  )};

}

export default JobCard;
