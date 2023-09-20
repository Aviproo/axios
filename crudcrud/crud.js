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
      "https://crudcrud.com/api/d56312a79cd84d428069d94b9922dd3f/AppointmentData",
      data
    )
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      ul.innerHTML = `<h4>Something went wrong</h4>`;
    });
  axiosget();
}
function axiosget() {
  axios
    .get(
      "https://crudcrud.com/api/d56312a79cd84d428069d94b9922dd3f/AppointmentData"
    )
    .then((res) => {
      let resdata = "";
      console.log(res);
      for (let i = 0; i < res.data.length; i++) {
        resdata += `<li class= "div">${res.data[i].name}-${res.data[i].email}-${res.data[i].number}<button id=${res.data[i]._id} onclick="dlt(this.id)">Delete</button> <button>Edit</button> </li>`;
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
    `https://crudcrud.com/api/d56312a79cd84d428069d94b9922dd3f/AppointmentData/${btnId}`
  );
  document.querySelector(".div").remove();
}
