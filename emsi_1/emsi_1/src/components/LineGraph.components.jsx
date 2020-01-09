import React, {Component} from "react";
import { Line } from "react-chartjs-2";

class LineGraphComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            data: this.props
        }
    }
    
    render() { 
      const data3 = {
          labels: ["2013", "2014", "2015", "2016", "2017", "2018"],
          datasets: [
            {
              label: "state",
              fill: false,
              borderColor: "rgba(175,60,150,0.4)",
              data: this.state.data.data.data.trend_comparison.regional
            },
            {
              label: "regional",
              fill: false,
              borderColor: "rgba(125,80,100,0.4)",
              data: this.state.data.data.data.trend_comparison.state
            },
            {
              label: "national",
              fill: false,
              borderColor: "rgba(75,192,192,0.4)",
              data: this.state.data.data.data.trend_comparison.nation
            }
          ]
        }
      console.log("Data is coming from inside the LineGraph Component", this.state.data2)
      console.log("Searching for datasets...found regional", this.state.data.data.data.trend_comparison.regional)
      console.log("Searching for datasets...found state", this.state.data.data.data.trend_comparison.state)
      console.log("Searching for datasets...found national", this.state.data.data.data.trend_comparison.nation)
        return (
            <div className="graph">
              <h3>Regional Trends</h3>
              <Line data={data3} />
            </div>
        );
    }
}
 
export default LineGraphComponent
