import { Button } from "react-bootstrap";

const UncompletedTasks = ({ tasks, handleDelete, handleUpdate }) => {
  if (tasks.length !== 0) {
    return (
      <div className="uncompleted">
        {tasks
          ? tasks.map((task, key) =>
              task.status === true ? (
                <div key={key} className="mb-3 taskContainer">
                  <h3>{task.name}</h3>
                  <h4>{task.description}</h4>
                  <div>
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
        <h2 className="text-center taskHeader">there is no completed task</h2>
      </div>
    );
  }
};

export default UncompletedTasks;
