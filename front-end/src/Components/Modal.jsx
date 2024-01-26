import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Box, Grid, Link, TextField } from "@mui/material";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Edituser } from "../redux/Action";

const EditModal = ({ user }) => {
  const [show, setShow] = useState(false);

  const [name, setName] = useState(user.name);
  const [age, setAge] = useState(user.age);
  const [gender, setGender] = useState(user.gender);
  const [image, setImage] = useState(user.image);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();

  const handleEdit = () => {
    dispatch(Edituser(user._id, { name, age, gender, image }));
    handleClose();
  };

  return (
    <>
      <Button
        style={{ marginLeft: "65px" }}
        variant="dark"
        onClick={handleShow}
      >
        Edit user
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Box component="form" noValidate sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  defaultValue={user.name}
                  onChange={(e) => setName(e.target.value)}
                  name="Name"
                  required
                  fullWidth
                  id="firstName"
                  label="Name"
                  autoFocus
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Image"
                  defaultValue={user.image}
                  onChange={(e) => setImage(e.target.value)}
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Gender"
                  defaultValue={user.gender}
                  type="text"
                  id="password"
                  autoComplete="new-password"
                  onChange={(e) => setGender(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Age"
                  defaultValue={user.age}
                  type="number"
                  id="password"
                  autoComplete="new-password"
                  onChange={(e) => setAge(e.target.value)}
                />
              </Grid>
            </Grid>
          </Box>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleEdit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default EditModal;
