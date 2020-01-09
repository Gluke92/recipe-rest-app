import React, { Component } from 'react';

class EmploymentTable extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            data: this.props
         }
    }
    render() { 
        console.log("Employment Table is receiving data", this.state);
        return ( 
            <>
            <h3>
                Industries Employing {Object.values(this.state.data.data.data.occupation)[1]}
            </h3>
            <div className="table">
                <table>
                    <thead>
                        <tr>
                            <th align="left">Industry</th>
                            <th align="right">Occupation Jobs in Industry (2015)</th>
                            <th align="right">% of Occupation in Industry</th>
                            <th align="right">% of Total Jobs in Industry</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td align="left">
                                {
                                    Object.values(
                                        Object.values(this.state.data.data.data.employing_industries)[2][0]
                                    )[1]
                                }
                            </td>
                            <td align="right">
                                {
                                    Object.values(
                                        Object.values(this.state.data.data.data.employing_industries)[2][0]
                                    )[2]
                                }
                            </td>
                            <td align="right">
                                {(
                                    (Object.values(
                                        Object.values(this.state.data.data.data.employing_industries)[2][0]
                                    )[2] /
                                        Object.values(
                                            Object.values(this.state.data.data.data.employing_industries)
                                        )[1]) *
                                    100
                                ).toFixed(2)}
                                %
                  </td>
                            <td align="right">
                                {" "}
                                {(
                                    (Object.values(
                                        Object.values(this.state.data.data.data.employing_industries)[2][0]
                                    )[2] /
                                        Object.values(
                                            Object.values(this.state.data.data.data.employing_industries)[2][0]
                                        )[3]) *
                                    100
                                ).toFixed(1)}
                                %{" "}
                            </td>
                        </tr>
                        <tr>
                            <td align="left">
                                {
                                    Object.values(
                                        Object.values(this.state.data.data.data.employing_industries)[2][1]
                                    )[1]
                                }
                            </td>
                            <td align="right">
                                {
                                    Object.values(
                                        Object.values(this.state.data.data.data.employing_industries)[2][1]
                                    )[2]
                                }
                            </td>
                            <td align="right">
                                {(
                                    (Object.values(
                                        Object.values(this.state.data.data.data.employing_industries)[2][1]
                                    )[2] /
                                        Object.values(
                                            Object.values(this.state.data.data.data.employing_industries)
                                        )[1]) *
                                    100
                                ).toFixed(2)}
                                %
                  </td>
                            <td align="right">
                                {(
                                    (Object.values(
                                        Object.values(this.state.data.data.data.employing_industries)[2][1]
                                    )[2] /
                                        Object.values(
                                            Object.values(this.state.data.data.data.employing_industries)[2][1]
                                        )[3]) *
                                    100
                                ).toFixed(1)}
                                %
                  </td>
                        </tr>
                        <tr>
                            <td align="left">
                                {
                                    Object.values(
                                        Object.values(this.state.data.data.data.employing_industries)[2][2]
                                    )[1]
                                }
                            </td>
                            <td align="right">
                                {
                                    Object.values(
                                        Object.values(this.state.data.data.data.employing_industries)[2][2]
                                    )[2]
                                }
                            </td>
                            <td align="right">
                                {(
                                    (Object.values(
                                        Object.values(this.state.data.data.data.employing_industries)[2][2]
                                    )[2] /
                                        Object.values(
                                            Object.values(this.state.data.data.data.employing_industries)
                                        )[1]) *
                                    100
                                ).toFixed(2)}
                                %
                  </td>
                            <td align="right">
                                {(
                                    (Object.values(
                                        Object.values(this.state.data.data.data.employing_industries)[2][2]
                                    )[2] /
                                        Object.values(
                                            Object.values(this.state.data.data.data.employing_industries)[2][2]
                                        )[3]) *
                                    100
                                ).toFixed(1)}
                                %
                  </td>
                        </tr>
                        <tr>
                            <td align="left">
                                {
                                    Object.values(
                                        Object.values(this.state.data.data.data.employing_industries)[2][3]
                                    )[1]
                                }
                            </td>
                            <td align="right">
                                {
                                    Object.values(
                                        Object.values(this.state.data.data.data.employing_industries)[2][3]
                                    )[2]
                                }
                            </td>
                            <td align="right">
                                {(
                                    (Object.values(
                                        Object.values(this.state.data.data.data.employing_industries)[2][3]
                                    )[2] /
                                        Object.values(
                                            Object.values(this.state.data.data.data.employing_industries)
                                        )[1]) *
                                    100
                                ).toFixed(2)}
                                %
                  </td>
                            <td align="right">
                                {(
                                    (Object.values(
                                        Object.values(this.state.data.data.data.employing_industries)[2][3]
                                    )[2] /
                                        Object.values(
                                            Object.values(this.state.data.data.data.employing_industries)[2][3]
                                        )[3]) *
                                    100
                                ).toFixed(1)}
                                %
                  </td>
                        </tr>
                        <tr>
                            <td align="left">
                                {
                                    Object.values(
                                        Object.values(this.state.data.data.data.employing_industries)[2][4]
                                    )[1]
                                }
                            </td>
                            <td align="right">
                                {
                                    Object.values(
                                        Object.values(this.state.data.data.data.employing_industries)[2][4]
                                    )[2]
                                }
                            </td>
                            <td align="right">
                                {(
                                    (Object.values(
                                        Object.values(this.state.data.data.data.employing_industries)[2][4]
                                    )[2] /
                                        Object.values(
                                            Object.values(this.state.data.data.data.employing_industries)
                                        )[1]) *
                                    100
                                ).toFixed(2)}
                                %
                  </td>
                            <td align="right">
                                {(
                                    (Object.values(
                                        Object.values(this.state.data.data.data.employing_industries)[2][4]
                                    )[2] /
                                        Object.values(
                                            Object.values(this.state.data.data.data.employing_industries)[2][4]
                                        )[3]) *
                                    100
                                ).toFixed(1)}
                                %
                  </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            </>
         );
    }
}
 
export default EmploymentTable;