import { useEffect, useState } from "react";
import {
  Container,
  Form,
  FormControl,
  FormGroup,
  FormLabel,
} from "react-bootstrap";
import axios from "axios";
import { toast } from "react-toastify";
import { getError } from "../utils/getError";
import { burl } from "../utils/urls";
import { useNavigate, useParams } from "react-router-dom";

const UpdateTask = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState(false);
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchTask = async () => {
      try {
        const  data  = await axios.get(burl + `/api/tasks/task/${id}`);
        if (data) {
          setName(data.data.name);
          setDescription(data.data.description)
        }
      } catch (err) {
        toast.error(getError(err));
      }
    };
    fetchTask();
  }, []);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const updated = await axios.put(burl + `/api/tasks/update/${id}`, {
        name,
        description,
        status,
      });
      toast.success("task updated");
      navigate("/");
    } catch (err) {
      toast.error(getError(err));
    }
  };
  return (
    <Container className="container small-container">
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <FormLabel>name</FormLabel>
          <FormControl
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </FormGroup>
        <FormGroup>
          <FormLabel>description</FormLabel>
          <textarea
            className="form-control"
            type="text"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor="status" className="form-label">
            status
          </label>
          <br />
          <input
            className="m-1"
            type="radio"
            name="status"
            id="uncompleted"
            onChange={() => setStatus(false)}
          />
          uncompleted
          <br />
          <input
            className="m-1"
            type="radio"
            name="status"
            id="completed"
            onChange={() => setStatus(true)}
          />
          completed
        </FormGroup>
        <div className="mt-2">
          <button type="submit" className="btn btn-success">
            update
          </button>
        </div>
      </Form>
    </Container>
  );
};

export default UpdateTask;
