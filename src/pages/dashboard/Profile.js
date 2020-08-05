import React from "react";
import { Grid, GridItem } from "../../component/Grid/Grid";
import Card, { CardHead } from "../../component/Card/Card";
import PageTitle from "../../component/PageTitle/PageTitle";
import { TextField, FormRow } from "../../component/Forms";
import Gravater from "../../component/Gravatar/Gravater";
import { useUserState } from "../../contexts";
// import Table from "../../component/Table/Table";

export  function Profile() {
  // const columns = [
  //   { title: "Gyms name", field: "name" },
  //   { title: "date", field: "date" },
  //   { title: "status", field: "status" },
  //   { title: "location", field: "location" },
  // ];
  // const data = [
  //   {
  //     name: "Lara Gyms",
  //     date: "mon 12th june",
  //     status: "successfull",
  //     location: "no 12 james street",
  //   },
  //   {
  //     name: "Lara Gyms",
  //     date: "mon 12th june",
  //     status: "successfull",
  //     location: "no 12 james street",
  //   },
  //   {
  //     name: "Lara Gyms",
  //     date: "mon 12th june",
  //     status: "successfull",
  //     location: "no 12 james street",
  //   },
  //   {
  //     name: "Lara Gyms",
  //     date: "mon 12th june",
  //     status: "successfull",
  //     location: "no 12 james street",
  //   },
  // ];

  const { user } = useUserState();
  return (
    <>
      <PageTitle title="Profile" button="incomplete" />
      <Grid align="flex-start">
        <GridItem>
          <Grid direction={"column"}>
            <GridItem shadow auto border borderRadius={5}>
              <div className="card-flex">
                <div className="card-info" style={{ width: "50%" }}>
                  <Gravater src="/images/customer.jpg" />
                </div>
                <div
                  className="card-icon"
                  style={{
                    width: "50%",
                    textAlign: "left",
                    verticalAlign: "center",
                    margin: "1.5rem",
                    color: "var(--p)",
                  }}
                >
                  <h2>{user.username || "coder"}</h2>
                  <button className="btn btn-general">Change</button>
                </div>
              </div>
            </GridItem>
            <GridItem shadow borderRadius={5}>
              <Card>
                <CardHead title="Financial Info" />
              </Card>
            </GridItem>
            <GridItem shadow borderRadius={5}>
              <Card>
                <CardHead title="Booking History" />
                {/* <Table data={data} columns={columns} /> */}
              </Card>
            </GridItem>
          </Grid>
        </GridItem>

        <GridItem>
          <Grid direction={"column"}>
            <GridItem shadow borderRadius={5}>
              <Card>
                <CardHead title="Basic Info" />
                <form style={{ padding: 20 }}>
                  <FormRow>
                    <TextField
                      type="text"
                      name="username"
                      value={user.username}
                      placeholder="enter user name"
                      label="Username"
                      onChange={() => {}}
                    />
                    <TextField
                      type="email"
                      name="username"
                      value={user.email}
                      placeholder="example@gmail.com"
                      label="Email"
                      onChange={() => {}}
                    />

                    <TextField
                      type="text"
                      name="username"
                      placeholder="enter user name"
                      label="Username"
                    />
                    <TextField
                      type="email"
                      name="username"
                      placeholder="example@gmail.com"
                      label="Email"
                    />
                  </FormRow>
                  <button className="btn btn-general">Save changes</button>
                </form>
              </Card>
            </GridItem>
            <GridItem shadow borderRadius={5}>
              <Card>
                <CardHead title="Contact" />
                <form style={{ padding: 20 }}>
                  <FormRow>
                    <TextField label="Residential Address" />
                  </FormRow>
                  <FormRow>
                    <TextField
                      type="text"
                      name="telephone1"
                      defaultValue="+234"
                      label="Telephone1"
                      onChange={() => {}}
                    />
                    <TextField
                      type="text"
                      name="telephone1"
                      defaultValue="+234"
                      label="Telephone2"
                      onChange={() => {}}
                    />
                    <TextField
                      type="text"
                      name="city"
                      label="City"
                      placeholder="city"
                    />
                    <TextField
                      type="text"
                      name="country"
                      label="Country"
                      placeholder="country"
                    />
                    <TextField
                      type="text"
                      name="zipcode"
                      label="ZipCode"
                      placeholder="zipcode"
                    />
                  </FormRow>
                  <button className="btn btn-general">Save Changes</button>
                </form>
              </Card>
            </GridItem>
          </Grid>
        </GridItem>
      </Grid>
    </>
  );
}
