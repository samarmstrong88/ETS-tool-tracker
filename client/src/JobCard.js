import React from 'react';

class JobCard extends React.Component {
  render() {
    return (
    <div>
      <div>Job No: {this.props.jobCardData.job_no}</div>
      <div>Brand: {this.props.jobCardData.brand}</div>
    </div>

  )};

}

export default JobCard;
