import React from "react";
import PageTitle from "../../component/PageTitle/PageTitle";
import Table from "../../component/Table/Table";
import Card, { CardHead } from "../../component/Card/Card";
export function Users() {
  const columns = [
    { title: "name", field: "name" },
    { title: "email", field: "email" },
    { title: "telephone", field: "telephone" },
  ];
  const data = [
    { name: "john", email: "ogheneovo@gmail.com", telephone: "080346789" },
    { name: "john", email: "ogheneovo@gmail.com", telephone: "080346789" },
    { name: "john", email: "ogheneovo@gmail.com", telephone: "080346789" },
    { name: "john", email: "ogheneovo@gmail.com", telephone: "080346789" },
  ];
  return (
    <>
      <PageTitle title="Bookings" button="send feedback" />
      <Card shadow>
        <CardHead title="Users Request" />
        <div style={{ padding: "1rem" }}>
          <Table data={data} columns={columns} />
        </div>
      </Card>
    </>
  );
}


