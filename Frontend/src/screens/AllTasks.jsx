import { Button, Col, Container } from "react-bootstrap";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { getError } from "../utils/getError";
import { burl } from "../utils/urls";
import TasksList from "../components/tasksList";
import {useNavigate} from "react-router-dom";
import UncompletedTasks from "../components/uncompletedTasks";

const AllTask = () => {
    const navigate = useNavigate();
  const [isloading, setIsLoading] = useState(false);
  const [tasks, setTasks] = useState("");
  const handleDelete = async (id) => {
    try {
      const { deleted } = await axios.delete(burl + `/api/tasks/delete/${id}`);
      toast.success("deleted successfully");
    } catch (err) {
      toast.error(getError(err));
    }
  };
  const handleUpdate = async (id) => {
    try {
      const { update } = await axios.put(burl + `/api/tasks/update/${id}`);

      if(update){ toast.success("task updated")};
    } catch (err) {
      toast.error(getError(err));
    }
  };
  useEffect(() => {
    const fetchTasks = async () => {
      setIsLoading(true);
      try {
        const { data } = await axios.get(burl + "/api/tasks/allTasks");
        if (data) {
          setTasks(data);
        }
      } catch (err) {
        toast.error(getError(err));
      }
    };
    fetchTasks();
  }, [handleDelete]);
  return (
    <div>
      <Container className="my-3">
        <h1 className="taskheader">uncomplete tasks</h1>
        {tasks && (
          <TasksList
            tasks={tasks}
            handleDelete={handleDelete}
            handleUpdate={handleUpdate}
          />
        )}
        <h1 className="taskheader">completed tasks</h1>
        {tasks && (
          <UncompletedTasks
            tasks={tasks}
            handleDelete={handleDelete}
          />
        )}
      </Container>
    </div>
  );
};

export default AllTask;
