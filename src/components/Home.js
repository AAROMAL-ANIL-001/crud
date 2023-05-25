import React from "react";

import { Button, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Employees from "./Employees";
import { Link, useNavigate } from "react-router-dom";

function Home() {
  const history = useNavigate();

  const handleDelete = (id) => {
    const index = Employees.map((e) => e.id).indexOf(id);
    Employees.splice(index, 1);
    history("/");
  };

  const handleEdit = (id, name, age) => {
    localStorage.setItem("Name", name);
    localStorage.setItem("Age", age);
    localStorage.setItem("Id", id);
  };
  return (
    <>
      <div style={{ margin: "10rem" }}>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {Employees && Employees.length > 0
              ? Employees.map((item) => (
                  <tr>
                    <td>{item.Name}</td>
                    <td>{item.Age}</td>
                    <td>
                      <Link to={"/edit"} style={{ textDecoration: "none" }}>
                        <Button
                          onClick={() =>
                            handleEdit(item.id, item.Name, item.Age)
                          }
                        >
                          Edit
                        </Button>{" "}
                      </Link>
                      &nbsp;
                      <Button onClick={() => handleDelete(item.id)}>
                        Delete
                      </Button>
                    </td>
                  </tr>
                ))
              : "No data available"}
          </tbody>
        </Table>
        <br />
        <Link to={"/create"} className="d-grid gap-2">
          <Button size="lg">Create</Button>{" "}
        </Link>
      </div>
    </>
  );
}

export default Home;
