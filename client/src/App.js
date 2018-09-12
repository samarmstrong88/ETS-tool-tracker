import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import JobCard from './JobCard';
import FilterBar from './FilterBar';
import Header from './Header';

// import backgroundImage from '../public/background.png';

// const styles = {
//   backgroundImage: `url(${backgroundImage})`,
//   backgroundRepeat: 'repeat'
// }


class App extends Component {


  constructor(props) {
    super(props);

    this.handleStatusChange = this.handleStatusChange.bind(this);
    this.handleCategoryChange = this.handleCategoryChange.bind(this);
    // this.handleCategoryChange = this.handleCategoryChange.bind(this));

    this.state = {
      jobData: [],
      selectedCategory: 'Warranty',
      statusList: ['to-be-started']
    }
  }

  componentDidMount() {
    fetch('http://etstooltracker.qwugpm3akq.us-east-1.elasticbeanstalk.com/job/all')
    .then(res => res.json())
    .then(res => this.setState({jobData: res}))
    // .then(console.log(this.state.jobData))
  };

  handleStatusChange(e) {
    var statusList = this.state.statusList;

    if (statusList.includes(e.target.value)){
      var index = statusList.indexOf(e.target.value);
      statusList.splice(index, 1);
      this.setState({statusList})
    }
    else {
      statusList.push(e.target.value);
      this.setState({statusList})
    }
     // this.setState({selectedStatus: e.target.value});
  }

  handleCategoryChange(e) {

    this.setState({selectedCategory: e.target.value});

  }

  render() {
    return (
      <div className="App">
        <Header/>
        <FilterBar
          selectedCategory = {this.state.selectedCategory}
          statusList = {this.state.statusList}
          handleStatusChange = {this.handleStatusChange}
          handleCategoryChange = {this.handleCategoryChange}
          />
        <div className = 'ContentArea'>
          <ul>
            {this.state.jobData
              .filter((job) => {
                if (this.state.selectedCategory === 'all') return true;
                if (job.category === this.state.selectedCategory) return true;
                else return false

              })
              .filter((job) => {
                if (this.state.statusList.includes(job.status)) return true
              })
              .sort((a,b) => b.job_no - a.job_no)
              .map((job, key) => {
              return <JobCard jobCardData={job} key = {job._id}/>
              }
            )}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
