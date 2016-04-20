import React, {Component} from 'react';
import d3 from 'd3';

class Graph extends Component {
  constructor() {
    super();
    this.state = {data: []};
  }
  componentWillMount() {
    this.load_data();
  }
  load_data() {
    let date_format = d3.time.format('%m/%d/%Y');
    d3.csv(this.props.url)
      .row((d) => {
        if (!d['base salary']) {
          return null;
        }
        return {employer: d.employer,
                submit_date: date_format.parse(d['submit date']),
                start_date: date_format.parse(d['start date']),
                case_status: d['case status'],
                job_title: d['job title'],
                //clean_job_title: this.clean_jobs(d['job title']),
                clean_job_title: d['job title'],
                base_salary: Number(d['base salary']),
                salary_to: d['salary to'] ? Number(d['salary to']) : null,
                city: d['city'],
                state: d['state']};
      })
      .get((error, rows)) => {
        if (error) {
          console.error(error);
          console.error(error.stack);
        } else {
          this.setState({'data': rows});
        }
      });
  }
  render() {
    if (!this.state.data.length) {
      return (
        <h2>Loading...</h2>
      );
    }
    return (
      <div><svg></svg></div>
    );
  }
}

export default Graph;
