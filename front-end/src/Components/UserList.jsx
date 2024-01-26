import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Deletuser, Getusers } from "../redux/Action";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Row } from "react-bootstrap";
import EditModal from "./Modal";

const UserList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(Getusers());
  }, []);

  const users = useSelector((state) => state.users);

  
  return (
    <div style={{ marginTop: "20px", gap: "80px", display: "flex" }}>
      <Row style={{ gap: "10px" }}>
        {users.map((e) => (
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={e.image} />
            <Card.Body>
              <Card.Title>{e.name}</Card.Title>
              <Card.Text>{e.gender}</Card.Text>
              <Card.Text>{e.age}</Card.Text>

              <div>
                <Button
                  variant="danger"
                  onClick={() => dispatch(Deletuser(e._id))}
                >
                  Delete
                </Button>
                <EditModal user={e}/>
              </div>
            </Card.Body>
          </Card>
        ))}
      </Row>
    </div>
  );
};

export default UserList;
