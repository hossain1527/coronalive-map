import React, { Component } from "react";
import axios from "axios";

import Info from "./Info";

class Summary extends Component {
  state = {
    countries: [],
    latestDate: null,
    global: [],
    loading: true,
    country: "",
  };

  async componentDidMount() {
    const res = await axios.get("https://api.covid19api.com/summary");

    console.log(res);

    this.setState({ countries: res.data.Countries });
    this.setState({ global: res.data.Global });
    this.setState({ loading: false });
  }

  handleCountryChange = async (country) => {};

  render() {
    return (
      <React.Fragment>
        <Info
          worldwide={this.state.global}
          latestdate={this.state.latestDate}
        />
      </React.Fragment>
    );
  }
}

export default Summary;
