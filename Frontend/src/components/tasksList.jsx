import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const TasksList = ({ tasks, handleDelete, handleUpdate }) => {
  if (tasks.length !== 0) {
    return (
      <div className="uncompleted">
        {tasks
          ? tasks.map((task, key) =>
              task.status !== true ? (
                <div
                  key={key}
                  sm={6}
                  md={4}
                  lg={3}
                  className="mb-3 taskContainer"
                >
                  <h3>{task.name}</h3>
                  <h4>{task.description}</h4>
                  <div>
                    <Link
                      to={`/updateTask/${task._id}`}
                      className="btn btn-info updeletebtn"
                    >
                      update task
                    </Link>
                    <Button
                      onClick={() => handleDelete(task._id)}
                      className="bg-danger mx-2 updeletebtn"
                    >
                      delete
                    </Button>
                  </div>
                </div>
              ) : undefined
            )
          : null}
      </div>
    );
  } else {
    return (
      <div className="uncompleted">
        <h2 className="text-center taskHeader">there is no uncompleted task</h2>
        <Link to={"/addTask"} className="text-center addLink btn btn-primary">Add Task</Link>
      </div>
    );
  }
};

export default TasksList;
