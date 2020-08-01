import React from "react";
import PageTitle from "../../component/PageTitle/PageTitle";
import { Grid, GridItem } from "../../component/Grid/Grid";
import Card, { CardHead } from "../../component/Card/Card";
import Chart from "./component/Chart";
import { useUserState } from "../../contexts";
export default function Dashboard() {
  const { error } = useUserState();
  if (error) {
    alert(error);
  }
  return (
    <>
      <PageTitle title="Dashboard" button="Book Gymns" />
      <Grid>
        <GridItem shadow border borderRadius={5} flex>
          <div className="card-flex">
            <div className="card-info">
              <h3>Bookings so far</h3>
              <h2> 50 Bookings</h2>
            </div>
            <div className="card-icon">
              <i className="fa fa-book"></i>
            </div>
          </div>
        </GridItem>
        <GridItem shadow border borderRadius={5}>
          <div className="card-flex">
            <div className="card-info">
              <h3>Discount Earned</h3>
              <h2>$40,0000</h2>
            </div>
            <div className="card-icon">
              <i className="fa fa-dollar-sign"></i>
            </div>
          </div>
        </GridItem>
        <GridItem shadow border borderRadius={5} bcolor="warning">
          <div className="card-flex">
            <div className="card-info">
              <h3>Profile Info</h3>
              <h2>incomplete</h2>
            </div>
            <div className="card-icon" style={{ color: "red" }}>
              <i className="fa fa-user-times"></i>
            </div>
          </div>
        </GridItem>
        <GridItem shadow border borderRadius={5}>
          <div className="card-flex">
            <div className="card-info">
              <h3>FeedBack</h3>
              <h2>50</h2>
            </div>
            <div className="card-icon">
              <i className="fa fa-bell"></i>
            </div>
          </div>
        </GridItem>
      </Grid>
      <Grid align="flex-start">
        <GridItem shadow fitContent>
          <Card>
            <CardHead title="Bookings Overview" />
            <Chart />
          </Card>
        </GridItem>
        <GridItem shadow auto fitContent>
          <Card>
            <CardHead />
            <Chart />
          </Card>
        </GridItem>
      </Grid>
    </>
  );
}
