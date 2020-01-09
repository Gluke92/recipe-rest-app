import React, { Component } from "react";

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: this.props
        };
    }
    render() {
        console.log("Header is getting data", this.state.data.data.data); // this is working. The data is here!
        return (
            <div className="header">
                <h1>Occupation Overview</h1>
                <div>
                    {Object.values(this.state.data.data.data.occupation)[1]} in{" "}
                    {Object.values(this.state.data.data.data.region)[2]}
                </div>
            </div>
        );
    }
}

export default Header;
