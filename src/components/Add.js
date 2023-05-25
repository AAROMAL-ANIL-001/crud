import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Employees from "./Employees";
import { Link, useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";

// function Add() {
//   const [name, setName] = useState("");
//   const [age, setAge] = useState("");
//   let history = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const ids = uuid();
//     let uniqueId = ids.slice(0, 8);

//     let a = name,
//       b = age;

//     Employees.push({ id: uniqueId, Name: a, Age: b });
//     history("/");
//   };
//   return (
//     <div>
//       <Form className="d-grid gap-2" style={{ margin: "15rem" }}>
//         <Form.Group className="mb-3" controlId="formName">
//           <Form.Control
//             type="text"
//             placeholder="enter name"
//             required
//             onChange={(e) => setName(e.target.value)}
//           ></Form.Control>
//         </Form.Group>
//         <Form.Group className="mb-3" controlId="formAge">
//           <Form.Control
//             type="text"
//             placeholder="enter age"
//             required
//             onChange={(e) => setAge(e.target.value)}
//           ></Form.Control>
//         </Form.Group>
//         <Button type="submit" onClick={(e) => handleSubmit(e)}>
//           Submit
//         </Button>
//       </Form>
//     </div>
//   );
// }

function Add() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const history = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const ids = uuid();
    const uniquId = ids.slice(0, 8);

    let a = name,
      b = age;

    Employees.push({ id: uniquId, Name: a, Age: b });
    history("/");
  };
  return (
    <div>
      <Form className="d-grip gap-2" style={{ margin: "15rem" }}>
        <Form.Group controlId="forName" className="mb-3">
          <Form.Control
            type="text"
            required
            placeholder="Enter name"
            onChange={(e) => setName(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="forAge" className="mb-3">
          <Form.Control
            type="text"
            required
            placeholder="Enter age"
            onChange={(e) => setAge(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Button type="submit" onClick={(e) => handleSubmit(e)}>
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Add;
