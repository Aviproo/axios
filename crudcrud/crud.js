let button = document.querySelector(".button");
let body = document.querySelector("body");
let ul = document.querySelector(".ul");
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
      "https://crudcrud.com/api/df64dd8c34c94a33840d3620099ee491/AppointmentData",
      data
    )
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      ul.innerHTML = `<h4>Something went wrong</h4>`;
    });
  axiosget();
  location.reload();
}
function axiosget() {
  axios
    .get(
      "https://crudcrud.com/api/df64dd8c34c94a33840d3620099ee491/AppointmentData"
    )
    .then((res) => {
      let resdata = "";

      for (let i = 0; i < res.data.length; i++) {
        resdata += `<li class= "div">${res.data[i].name}-${res.data[i].email}-${res.data[i].number}<button id=${res.data[i]._id} onclick="dlt(this.id)">Delete</button> <button id=${res.data[i]._id} onclick="edit(this.id)" >Edit</button> </li>`;
      }
      ul.innerHTML = resdata;
    })
    .catch((rej) => {
      ul.innerHTML = `<h4>Something went wrong</h4>`;
    });
}
axiosget();

function dlt(btnId) {
  axios.delete(
    `https://crudcrud.com/api/df64dd8c34c94a33840d3620099ee491/AppointmentData/${btnId}`
  );
  document.querySelector(".div").remove();
}
function edit(btnId) {
  axios
    .get(
      `https://crudcrud.com/api/df64dd8c34c94a33840d3620099ee491/AppointmentData/${btnId}`
    )
    .then((res) => {
      console.log(res);
      document.querySelector(".name").value = res.data.name;
      document.querySelector(".email").value = res.data.email;
      document.querySelector(".number").value = res.data.number;
    })
    .catch((err) => console.log(err));
  document.querySelector(".div").remove();
}
