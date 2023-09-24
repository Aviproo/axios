let btnsub = document.querySelector(".btnsub");
let showoutput = document.querySelector(".main");
let todo = document.querySelector(".todo");
let done = document.querySelector(".done");
btnsub.addEventListener("click", clicked);
function clicked() {
  let name = document.querySelector(".name").value;
  let email = document.querySelector(".email").value;

  let data = {
    name: name,
    email: email,
  };
  axios
    .post(
      "https://crudcrud.com/api/b439bf83ab424561a802c33f7e04e6d8/Appointment",
      data
    )
    .then((res) => {
      fetchApi();
    })
    .catch((rej) => {
      console.log(rej);
    });
}
function fetchApi() {
  axios
    .get(
      "https://crudcrud.com/api/b439bf83ab424561a802c33f7e04e6d8/Appointment"
    )
    .then((res) => {
      let content = "";
      for (let i = 0; i < res.data.length; i++) {
        content += `<div class="div">${res.data[i].name}-${res.data[i].email}
        <button id=${res.data[i]._id} onclick=del(this.id)>✔️</button>
        <button id=${res.data[i]._id} onclick=del(this.id)>❌</button></div>`;
      }
      todo.innerHTML = content;
    })
    .catch((rej) => {
      todo.innerHTML = `<h4>Something went wrong</h4>`;
    });
}
fetchApi();
function del(delId) {
  axios
    .get(
      `https://crudcrud.com/api/b439bf83ab424561a802c33f7e04e6d8/Appointment/${delId}`
    )
    .then((res) => {
      let content = `${res.data.name}-${res.data.email}`;
      let div = document.createElement("div");
      div.append(content);
      done.appendChild(div);
    });
  axios.delete(
    `https://crudcrud.com/api/b439bf83ab424561a802c33f7e04e6d8/Appointment/${delId}`
  );
  document.querySelector(".div").remove();
}
function edit(editId) {
  axios
    .get(
      `https://crudcrud.com/api/b439bf83ab424561a802c33f7e04e6d8/Appointment/${delId}`
    )
    .then((res) => {
      let content = `${res.data.name}-${res.data.email}`;
      let div = document.createElement("div");
      div.append(content);
      done.appendChild(div);
    });
  axios.delete(
    `https://crudcrud.com/api/b439bf83ab424561a802c33f7e04e6d8/Appointment/${delId}`
  );
  document.querySelector(".div").remove();
}
