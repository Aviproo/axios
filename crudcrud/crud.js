let button = document.querySelector(".button");
let body = document.querySelector("body");
let main = document.querySelector(".main");
button.addEventListener("click", ButtonClicked);

function ButtonClicked() {
  let name = document.querySelector(".name").value;
  let email = document.querySelector(".email").value;
  let number = document.querySelector(".number").value;
  let data = {
    name: name,
    email: email,
    number: number,
  };
  axios
    .post(
      "https://crudcrud.com/api/ddcd6265ab1847c4848569071113d31e/AppointmentData",
      data
    )
    .then((res) => {
      main.innerHTML = `<div>Name:${data.name}-email:${data.email}-number:${data.number}<button>Delete</button> <button>Edit</button> </div>`;
    })
    .catch((err) => {
      main.innerHTML = `<h4>Something went wrong</h4>`;
    });
}
