import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import {
  Button,
  Container,
  Form,
  FormControl,
  FormGroup,
  FormLabel,
} from "react-bootstrap";
import { burl } from "../utils/urls";
import { getError } from "../utils/getError";
const AddingTask = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  // const [inputError,setInputError] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(burl + "/api/tasks/addTask", {
        name,
        description,
      });
      toast.success("task added");
      navigate("/");
    } catch (err) {
      toast.error(getError(err));
    }
  };
  return (
    <div className="my-3">
      <div className="container small-container">
        <h3 className="my-3">Add task</h3>
        <Form onSubmit={handleSubmit}>
          <FormGroup className="mb-2" controlId="name">
            <FormLabel>task name</FormLabel>
            <FormControl
              type="text"
              required
              onChange={(e) => setName(e.target.value)}
            />
          </FormGroup>
          <FormGroup className="mb-2" controlId="description">
            <FormLabel>description</FormLabel>
            
            <textarea 
            className="form-control"
            onChange={(e) => setDescription(e.target.value)}
            >
            </textarea>
          </FormGroup>
          <div>
            <Button type="submit">Add Task</Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default AddingTask;
