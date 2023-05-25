import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Employees from "./Employees";
import { Link, useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";

function Edit() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [id, setId] = useState("");
  const history = useNavigate();

  const index = Employees.map((e) => e.id).indexOf(id);

  const handleSubmit = (e) => {
    e.preventDefault();

    let a = Employees[index];
    a.Name = name;
    a.Age = age;

    history("/");
  };

  useEffect(() => {
    setName(localStorage.getItem("Name"));
    setAge(localStorage.getItem("Age"));
    setId(localStorage.getItem("Id"));
  }, []);

  return (
    <div>
      <Form className="d-grip gap-2" style={{ margin: "15rem" }}>
        <Form.Group controlId="forName" className="mb-3">
          <Form.Control
            type="text"
            required
            placeholder="Enter name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="forAge" className="mb-3">
          <Form.Control
            type="text"
            required
            placeholder="Enter age"
            onChange={(e) => setAge(e.target.value)}
            value={age}
          ></Form.Control>
        </Form.Group>
        <Button type="submit" onClick={(e) => handleSubmit(e)}>
          Update
        </Button>
      </Form>
    </div>
  );
}
export default Edit;
