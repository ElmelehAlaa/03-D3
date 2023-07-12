const addTasks = (SubmitTask) => {
  SubmitTask.preventDefault();
  const form = SubmitTask.target;
  const input = document.getElementById("newTask");
  // const singleTask = SubmitTask.target.elements[0] andava bene.
  const ul = document.querySelector("ul");
  ul.innerHTML += `<li onclick='completa(event)'>${input.value}</li>`;
  const completa = (clickEvent) => {
    clickEvent.target.classList.toggle("completa");
  };
  const elimina = (clickEvent) => {
    clickEvent.target.parentElement.style.display = "none";
  };
};
