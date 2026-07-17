import { useEffect, useState } from 'react';

export function Todo() {
  let [todoText, setTodoText] = useState('');
  let [tasks, setTasks] = useState(() => {
    let storage = JSON.parse(localStorage.getItem('task'));
    return storage || [];
  });

  function handleAddTask() {
    if (!todoText) return;
    let newItem = { task: todoText, id: Date.now(), isComplite: false };
    setTasks((prev) => [...prev, newItem]);

    setTodoText('');
  }
  function handleDelete(id) {
    setTasks((task) => task.filter((item) => item.id !== id));
  }
  function compliteTask(id) {
    setTasks((tasks) =>
      tasks.map((task) => (task.id === id ? { ...task, isCompleted: true } : task))
    );

    setTimeout(() => {
      setTasks((task) => task.filter((item) => item.id !== id));
    }, 2300);
  }
  useEffect(() => {
    localStorage.setItem('task', JSON.stringify(tasks));
  }, [tasks]);

  useEffect(
    function () {
      function handleEnter(e) {
        if (e.code === 'Enter') handleAddTask();
      }
      document.addEventListener('keydown', handleEnter);
      return () => document.removeEventListener('keydown', handleEnter);
    },
    [todoText] // 💡 اضافه کردن متن برای آپدیت شدن دائمِ افکت
  );
  return (
    <div className="TodoCountainer">
      <div>
        <h2>Mini Todo App</h2>
      </div>
      <div className="inpTodo">
        <input
          type="text"
          name=""
          id=""
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
        />
        <button onClick={handleAddTask}>Add</button>
      </div>
      <div className="listTodo">
        <ul>
          {tasks.map((task) => {
            return (
              <li key={task.id} style={task.isCompleted ? { backgroundColor: '#79c2258a' } : {}}>
                {task.task}
                <div>
                  <span>
                    <svg
                      onClick={() => handleDelete(task.id)}
                      width="24px"
                      height="24px"
                      viewBox="0 -5 32 32"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      xmlnsXlink="http://www.bohemiancoding.com/sketch/ns"
                      fill="#e11414"
                      stroke="#e11414"
                    >
                      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        <title>delete</title> <desc>Created with Sketch Beta.</desc> <defs> </defs>{' '}
                        <g
                          id="Page-1"
                          stroke="none"
                          strokeWidth="1"
                          fill="none"
                          fillRule="evenodd"
                          sketch:type="MSPage"
                        >
                          {' '}
                          <g
                            id="Icon-Set"
                            sketch:type="MSLayerGroup"
                            transform="translate(-516.000000, -1144.000000)"
                            fill="#e61919"
                          >
                            <path
                              d="M538.708,1151.28 C538.314,1150.89 537.676,1150.89 537.281,1151.28 L534.981,1153.58 L532.742,1151.34 C532.352,1150.95 531.718,1150.95 531.327,1151.34 C530.936,1151.73 530.936,1152.37 531.327,1152.76 L533.566,1154.99 L531.298,1157.26 C530.904,1157.65 530.904,1158.29 531.298,1158.69 C531.692,1159.08 532.331,1159.08 532.725,1158.69 L534.993,1156.42 L537.232,1158.66 C537.623,1159.05 538.257,1159.05 538.647,1158.66 C539.039,1158.27 539.039,1157.63 538.647,1157.24 L536.408,1155.01 L538.708,1152.71 C539.103,1152.31 539.103,1151.68 538.708,1151.28 L538.708,1151.28 Z M545.998,1162 C545.998,1163.1 545.102,1164 543.996,1164 L526.467,1164 L518.316,1154.98 L526.438,1146 L543.996,1146 C545.102,1146 545.998,1146.9 545.998,1148 L545.998,1162 L545.998,1162 Z M543.996,1144 L526.051,1144 C525.771,1143.98 525.485,1144.07 525.271,1144.28 L516.285,1154.22 C516.074,1154.43 515.983,1154.71 515.998,1154.98 C515.983,1155.26 516.074,1155.54 516.285,1155.75 L525.271,1165.69 C525.467,1165.88 525.723,1165.98 525.979,1165.98 L525.979,1166 L543.996,1166 C546.207,1166 548,1164.21 548,1162 L548,1148 C548,1145.79 546.207,1144 543.996,1144 L543.996,1144 Z"
                              id="delete"
                              sketch:type="MSShapeGroup"
                            ></path>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </span>
                  <span onClick={() => compliteTask(task.id)}>
                    <svg
                      fill="#6fe421"
                      width="24px"
                      height="24px"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      stroke="#6fe421"
                    >
                      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        <path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm5.676,8.237-6,5.5a1,1,0,0,1-1.383-.03l-3-3a1,1,0,1,1,1.414-1.414l2.323,2.323,5.294-4.853a1,1,0,1,1,1.352,1.474Z"></path>
                      </g>
                    </svg>
                  </span>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
