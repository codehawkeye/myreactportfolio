import React, { Component } from "react";
import { Card, CardTitle, CardActions, Grid, Cell } from "react-mdl";

class About extends Component {
  render() {
    return (
      <Grid className="demo-grid-1">
      <Cell col={3}></Cell>
      <Cell col={4}> <div style={{ textAlign: "center" }}>
        <Card
          shadow={0}
          style={{
            paddingTop: "10",
            width: "600px",
            height: "500px",
            background: "#3E4EB8",
          }}
        >
          <CardTitle expand style={{ alignItems: "flex-start", color: "#fff" }}>
            <h2 style={{ marginTop: "0" }}></h2>
            
            <h4>
              {" "}
              I'm a full stack developer with a a passion for great usability
              and design. I have experience with server-side development,
              front-end frameworks, and various javascript libraries: React,
              Node.js, jQuery, MySQL, and MongoDB.{" "}
            </h4>
          </CardTitle>
          <CardActions
            border
            style={{
              borderColor: "rgba(255, 255, 255, 0.2)",
              display: "flex",
              boxSizing: "border-box",
              alignItems: "center",
              color: "#fff",
            }}
          ></CardActions>
        </Card>
        </div></Cell>
      <Cell col={4}>4</Cell>
 
     
        </Grid>
    );
  }
}

export default About;
