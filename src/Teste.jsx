import React from 'react';

const Teste = () => {
    return (
        <>
        <AddTask handleTaskAddition={handleTaskAddition} />
        <Tasks
            tasks={tasks}
            handleTaskClick={handleTaskClick}
            handleTaskDeletion={handleTaskDeletion}
            />
            {TaskDetails}
        </>
    );
}
 
export default Teste;