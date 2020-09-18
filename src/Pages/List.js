import React, { useState, useEffect } from "react";
import { Card, CardImg, CardText, CardBody, Row, Col } from "reactstrap";
import ReactLoading from "react-loading";
// import ReactDOM from "react-dom";import { useState, useEffect } from "react-hook-form";

const userLists = () => {
  const [users, setUsers] = useState([]);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    const config = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Origin: "https://q5p4r.csb.app/"
      }
    };
    fetch("https://wibrb.sse.codesandbox.io/", config)
      .then((res) => res.json())
      .then((data) => {
        setloading(false);
        setUsers(data.user);
      });
  }, []);

  if (loading) {
    return (
      <div
        className="row justify-content-center align-items-center"
        style={{
          maxWidth: "100vw",
          marginTop: "13%"
        }}
      >
        <ReactLoading
          type="spin"
          color="#ec5990"
          height={"10%"}
          width={"10%"}
        />
      </div>
    );
  }

  return (
    <div className=" container my-5">
      <h1 style={{ color: "white" }}> List of all Users</h1>
      <Row className="justify-content-center align-items-center my-3">
        {users.map((element, index) => {
          return (
            <Col key={index} md={5} className="mb-3">
              <Card>
                <CardImg
                  top
                  width="150px"
                  height="250px"
                  src={element.profilePic}
                  alt="Card image cap"
                />
                <CardBody>
                  <CardText className="texts">
                    <b>First Name</b> : {element.firstName} <br />
                    <b>Last Name </b>: {element.lastName} <br />
                    <b>Email </b>: {element.email} <br />
                    <b>Phone Number </b>: {element.phoneNumber} <br />
                    <b>Gender </b>: {element.gender} <br />
                    <b>Age </b>: {element.age} <br />
                    <b>notes :</b>{" "}
                  </CardText>
                  <ul>
                    {" "}
                    {element.notes.map((element, index) => {
                      return <li key={`li${index}`}> {element} </li>;
                    })}
                  </ul>
                </CardBody>
              </Card>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default userLists;
