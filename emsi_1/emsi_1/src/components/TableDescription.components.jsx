import React, { Component } from "react";

class TableDescription extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            data: this.props
         }
    }
    render() { 
        console.log("Table Description is getting data", this.state.data.data.data)
        return ( 
            <div className="table">
                <h3>Industries Employing Computer Programmers</h3>
                <table>
                    <thead>
                        <tr>
                            <th align="left">Region</th>
                            <th align="right">2013 Jobs</th>
                            <th align="right">2018 Jobs</th>
                            <th align="right">Change</th>
                            <th align="right">% Change</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td align="left">
                                {Object.keys(this.state.data.data.data.trend_comparison)[2]}
                            </td>
                            <td align="right">
                                {this.state.data.data.data.trend_comparison.regional[0]}
                            </td>
                            <td align="right">
                                {this.state.data.data.data.trend_comparison.regional[5]}
                            </td>
                            <td align="right">
                                {this.state.data.data.data.trend_comparison.regional[5] -
                                    this.state.data.data.data.trend_comparison.regional[0]}
                            </td>
                            <td align="right">
                                {(
                                    ((this.state.data.data.data.trend_comparison.regional[5] -
                                        this.state.data.data.data.trend_comparison.regional[0]) /
                                        this.state.data.data.data.trend_comparison.regional[0]) *
                                    100
                                ).toFixed(1)}
                                %
                  </td>
                        </tr>
                        <tr>
                            <td align="left">
                                {Object.keys(this.state.data.data.data.trend_comparison)[3]}
                            </td>
                            <td align="right">{this.state.data.data.data.trend_comparison.state[0]}</td>
                            <td align="right">{this.state.data.data.data.trend_comparison.state[5]}</td>
                            <td align="right">
                                {this.state.data.data.data.trend_comparison.state[5] -
                                    this.state.data.data.data.trend_comparison.state[0]}
                            </td>
                            <td align="right">
                                {(
                                    ((this.state.data.data.data.trend_comparison.state[5] -
                                        this.state.data.data.data.trend_comparison.state[0]) /
                                        this.state.data.data.data.trend_comparison.state[0]) *
                                    100
                                ).toFixed(1)}
                                %
                  </td>
                        </tr>
                        <tr>
                            <td align="left">
                                {Object.keys(this.state.data.data.data.trend_comparison)[4]}
                            </td>
                            <td align="right">{this.state.data.data.data.trend_comparison.nation[0]}</td>
                            <td align="right">{this.state.data.data.data.trend_comparison.nation[4]}</td>
                            <td align="right">
                                {this.state.data.data.data.trend_comparison.nation[4] -
                                    this.state.data.data.data.trend_comparison.nation[0]}
                            </td>
                            <td align="right">
                                {(
                                    ((this.state.data.data.data.trend_comparison.nation[4] -
                                        this.state.data.data.data.trend_comparison.nation[0]) /
                                        this.state.data.data.data.trend_comparison.nation[0]) *
                                    100
                                ).toFixed(1)}
                                %
                  </td>
                        </tr>
                    </tbody>
                </table>
            </div>
         );
    }
}
 
export default TableDescription;