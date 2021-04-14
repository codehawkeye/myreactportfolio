import React, { Component } from "react";
import { Cell, Grid } from "react-mdl";

class About extends Component {
  render() {
    return (
      <div style={{textAlign: 'center'}}>
        <Grid>
          <Cell col={4}>
        <h1>About Me</h1>

        <p>
          {" "}
          I'm a full stack developer with a a passion for great usability and design.
          I have experience with serverside development,
          front-end framworks, and various javascript libraries: React,
          Node.js, jquery, MySQL, and MongoDB.  {" "}
            </p>
            </Cell>
          </Grid>
      </div>
    );
  }
}

export default About;
