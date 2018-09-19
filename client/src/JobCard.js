import React from 'react';
import'./JobCard.css';

class JobCard extends React.Component {
  render() {
    return (
    <div className = "JobCard">
<<<<<<< HEAD
      <div className = 'JobCard-Title'>
      <h3>{this.props.jobCardData.job_no}</h3>
        <h3>Placeholder Name</h3>
      </div>


=======
      <div>Job No: {this.props.jobCardData.job_no}</div>
>>>>>>> d4087a4517fda525b0f8f36ea7e669c194459746
      <div>Brand: {this.props.jobCardData.brand}</div>
    </div>

  )};

}

export default JobCard;
