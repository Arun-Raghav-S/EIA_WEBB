import { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

// Initial fake task list
const initialTasks = [
  { id: 'task-1', content: 'Check sensor readings in Zone A' },
  { id: 'task-2', content: 'Verify yield data from last harvest' },
  { id: 'task-3', content: 'Assign team to Zone B' },
];

function TaskManagement() {
  const [tasks, setTasks] = useState(initialTasks);

  const onDragEnd = (result) => {
    if (!result.destination) return;
    const items = Array.from(tasks);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setTasks(items);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="tasks">
        {(provided) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            style={{ background: '#f0f0f0', padding: '10px', borderRadius: '5px' }}
          >
            {tasks.map((task, index) => (
              <Draggable key={task.id} draggableId={task.id} index={index}>
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    style={{
                      userSelect: 'none',
                      padding: 16,
                      margin: '0 0 8px 0',
                      background: snapshot.isDragging ? '#e0e0e0' : '#fff',
                      border: '1px solid #ccc',
                      borderRadius: '3px',
                      ...provided.draggableProps.style,
                    }}
                  >
                    {task.content}
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}

export default TaskManagement;
