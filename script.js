let todoTasks = [];
let completedTasks = [];
let taskId = 0;

let completed = true;

let descriptionTask;

// Shows all tasks
function showAllTasks() {
  if (todoTasks.length === 0) {
    alert('Inga uppgifter att visa.');
    return;
  }

  let tasksDescription = '';

  for (let i = 0; i < todoTasks.length; i++) {
    tasksDescription += `Klar? ${todoTasks[i].done} Uppgift: ${todoTasks[i].taskDescription} \n`;
  }

  alert('Din att göra lista: \n' + tasksDescription);
}

// Add tasks and then add to todoTasks array
function addTasks(descriptionTask) {
  const todo = {
    id: taskId++,
    taskDescription: descriptionTask,
    done: false,
  };

  todoTasks.push(todo);
  alert('Lade till uppgift: ' + descriptionTask);
}

// Mark task as complete
function taskComplete() {
  if (todoTasks.length === 0) {
    alert('Inga uppgifter att visa.');
    return;
  }

  let tasksDescription = '';

  for (let i = 0; i < todoTasks.length; i++) {
    tasksDescription += `ID: ${todoTasks[i].id} Uppgift: ${todoTasks[i].taskDescription} \n`;
  }

  let taskIdToComplete = Number(
    prompt(
      'Ange ID för uppgiften som ska markeras som klar: \n' + tasksDescription
    )
  );

  // Letar med .find() om id finns i array och om det finns returnerar true
  let findIdArray = todoTasks.find((task) => task.id === taskIdToComplete);

  // Om id ej finns alert error
  if (!findIdArray) {
    alert('Uppgiften med det ID:t finns inte.');
    return;
  }
  // Tar den hittade ID i task array och gör om den från i objectet .done = true
  findIdArray.done = true;
}

function taskRemove() {
  if (todoTasks.length === 0) {
    alert('Inga uppgifter att visa.');
    return;
  }
  let tasksDescription = '';

  for (let i = 0; i < todoTasks.length; i++) {
    tasksDescription += `ID: ${todoTasks[i].id} Klar? ${todoTasks[i].done} Uppgift: ${todoTasks[i].taskDescription} \n`;
  }

  let taskIdToRemove = Number(
    prompt('Ange ID för uppgiften som ska raderas: \n' + tasksDescription)
  );

  // findindex
  let findIdArray = todoTasks.findIndex((task) => task.id === taskIdToRemove);

  if (findIdArray === -1) {
    alert('Uppgiften med det ID:t finns inte.');
    return;
  }
  todoTasks.splice(findIdArray, 1);
  alert('Uppgift raderad.');
}

while (completed) {
  let chosenOption = prompt(`
    1. Lägg till nya uppgifter
    2. Visa alla aktuella uppgifter.
    3. Markera uppgifter som klara.
    4. Ta bort uppgifter.
    5. Avsluta programmet`);

  switch (chosenOption) {
    case '1':
      // todoTasks.push
      descriptionTask = prompt('Lägg till en uppgift');
      addTasks(descriptionTask);
      break;
    case '2':
      showAllTasks();
      break;
    case '3':
      taskComplete();
      break;
    case '4':
      taskRemove();
      break;
    case '5':
      completed = false;
      break;
    default:
      alert('Error: måste ange 1-5');
  }
}
