

const Task = () => {
    <div className="task">
        <h1>{task.taskName}</h1>
        <button onClick={() => deleteTask(task.id)}> X </button>
    </div>
}