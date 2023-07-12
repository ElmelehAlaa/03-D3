const addTasks = (SubmitTask) => {
  SubmitTask.preventDefault();
  const input = document.getElementById("task");

  const ul = document.querySelector("ul");
  ul.innerHTML += `<li>  <span onclick='completa(event)'>${input.value}</span><button onclick='elimina(event)'> ELIMINA </button> </li>`;
};
const completa = (clickEvent) => {
  clickEvent.target.classList.toggle("completo");
};

const elimina = (clickEvent) => {
  console.log(clickEvent);
  clickEvent.target.parentElement.style.display = "none";
};
