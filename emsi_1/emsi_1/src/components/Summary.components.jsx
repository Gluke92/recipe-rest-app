import React, { Component } from "react";

class Summary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: this.props
    };
  }
  render() {
    console.log("Summary is receiving data", this.state.data.data.data); // this is working. The data is here!
    return (
      <>
        <h2>
          Occupational Summary for{" "}
          {Object.values(this.state.data.data.data.occupation)[1]}
        </h2>
        <div className="summary">
          <div className="block">
            <h1>{this.state.data.data.data.summary.jobs.regional}</h1>
            <h4>Jobs ({this.state.data.data.data.summary.jobs.year})</h4>
            <h3>
              {(
                (this.state.data.data.data.summary.jobs.regional /
                  this.state.data.data.data.summary.jobs.national_avg) *
                100
              ).toFixed(0)}
              {"% "}
              <a className="green">
                {(this.state.data.data.data.summary.jobs.regional /
                  this.state.data.data.data.summary.jobs.national_avg) *
                  100 <
                100
                  ? "below"
                  : "above"}
              </a>{" "}
              the national average.
            </h3>
          </div>
          <div className="block">
            <h1>
              <a className="green">
                {this.state.data.data.data.summary.jobs_growth.regional > 0 ? "+" : "-"}{" "}
                {this.state.data.data.data.summary.jobs_growth.regional} %
              </a>
            </h1>
            <h4>
              % Change ({this.state.data.data.data.summary.jobs_growth.start_year} -{" "}
              {this.state.data.data.data.summary.jobs_growth.end_year})
            </h4>
            <h3>
              Nation:{" "}
              <a className="green">
                {this.state.data.data.data.summary.jobs_growth.national_avg > 0
                  ? "+"
                  : "-"}
                {this.state.data.data.data.summary.jobs_growth.national_avg} %
              </a>{" "}
            </h3>
          </div>
          <div className="block">
            <h1>${this.state.data.data.data.summary.earnings.regional}/hr</h1>
            <h4>Median Hourly Earnings</h4>
            <h3>
              Nation: $
              {this.state.data.data.data.summary.earnings.national_avg.toFixed(2)}
            </h3>
          </div>
        </div>
      </>
    );
  }
}

export default Summary;
