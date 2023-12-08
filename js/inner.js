// document.write("hello world");

// // cách gán phần tử vào trong DOM

// const heading = document.querySelector("#heading-1");
// const listitem = document.querySelector("#listitem");
// heading.innerHTML = "Xin chào";

const users = [
  {
    userId: 1,
    username: "Nguyen Duc Hung",
    gender: 0,
    dateOfBirth: "03/11/2023",
    address: "Ha Noi",
  },
  {
    userId: 2,
    username: "Nguyen Duc A",
    gender: 1,
    dateOfBirth: "03/11/2023",
    address: "Ha Noi",
  },
  {
    userId: 3,
    username: "Nguyen Duc B",
    gender: 2,
    dateOfBirth: "03/11/2023",
    address: "Ha Noi",
  },
];

listitem.innerHTML = `<li>HTML</li>
<li>CSS</li>
<li>JS</li>`;

//lấy ra phần tử tbody
const tbodyElement = document.querySelector("#tbody");

let trHtmls = users.map((user, index) => {
  return `<tr>
  <td>${index + 1}</td>
  <td>${user.username}</td>
  <td>${user.gender === 0 ? "NAm" : user.gender === 1 ? " Nữ" : "khác"}</td>
  <td>${user.dateOfBirth}</td>
  <td>${user.address}</td>

  <td>
  <button>Sửa</button>
  </td>
  <td>
  <button>Xóa</button></td>
</tr>`;
});

// chuyển đổi mảng thành chuỗi
// let trHtml = trHtmls.join("");

// tbodyElement.innerHTML = trHtml;

// console.log(trHtml);

// //dùng DOM để hiện thị profile của từng employees
// //employeesId,employeesName,gender,dateOfBirth, image, createdAt

// const employees = [
//   {
//     employeeId: 1,
//     employeeName: "Nguyen Duc B Hung",
//     gender: 0,
//     dateOfBirth: "03/11/2023",
//     image: "image",
//     createdAt: new Date().toISOString().split("T")[0],
//   },
//   {
//     employeeId: 2,
//     employeeName: "Nguyen Duc d",
//     gender: 1,
//     dateOfBirth: "03/11/2023",
//     image: "image",
//     createdAt: new Date().toISOString().split("T")[0],
//   },
//   {
//     employeeId: 3,
//     employeeName: "Nguyen Duc c",
//     gender: 2,
//     dateOfBirth: "03/11/2023",
//     image: "image",
//     createdAt: new Date().toISOString().split("T")[0],
//   },
// ];

// //Lấy ra phần tử tbody -1

// const tbodySecondElement = document.querySelector("#tbody-1");

// let trHtmlsSecond = employees.map((employee, index) => {
//   return `
//     <tr>
//           <td>${index + 1}</td>
//           <td>${employee.employeeName}</td>
//           <td>${
//             employee.gender === 0
//               ? "nam"
//               : employee.gender === 1
//               ? "nữ"
//               : "khác"
//           }</td>
//           <td>${employee.dateOfBirth}</td>
//           <td>${employee.image}</td>
//           <td>${employee.createdAt}</td>
//         </tr>`;
// });

// let trHtmlSecond = trHtmlsSecond.join("");
// tbodySecondElement.innerHTML = trHtmlSecond;
// console.log(trHtmlSecond);

// let listitem1 = document.getElementById("listItem1");
// //tạo 1 phần tử trong DOM
// let liElement = document.createElement("li");
// liElement.innerHTML = "HTML";

// //gán phần tử con vào cha
// // element_cha.appenchild(element_con)
// listitem1.appendChild(liElement);

const tbody1 = document.getElementById("tbody1");
//hiển thị danh sách user theo kiểu append
users.forEach((user, index) => {
  // tạo phần tử tr
  let trElement = document.createElement("tr");

  // tạo các phần tử td
  const idCell = document.createElement("td");
  idCell.innerHTML = index + 1;
  // Append td vào trong tr của bảng( phần tbody)
  trElement.appendChild(idCell);

  const nameCell = document.createElement("td");
  nameCell.innerHTML = user.username;
  // Append td vào trong tr của bảng( phần tbody)
  trElement.appendChild(nameCell);

  const genderCell = document.createElement("td");
  genderCell.innerHTML =
    user.gender === 0 ? "Nam" : user.gender === 1 ? "nữ" : "khác";
  // Append td vào trong tr của bảng( phần tbody)
  trElement.appendChild(genderCell);

  const dateOfBirthCell = document.createElement("td");
  dateOfBirthCell.innerHTML = user.dateOfBirth;
  // Append td vào trong tr của bảng( phần tbody)
  trElement.appendChild(dateOfBirthCell);

  const addressCell = document.createElement("td");
  addressCell.innerHTML = user.address;
  // Append td vào trong tr của bảng( phần tbody)
  trElement.appendChild(addressCell);

  const btnUpdateCell = document.createElement("td");
  btnUpdateCell.innerHTML = "<button>Sửa</button>";
  // Append td vào trong tr của bảng( phần tbody)
  trElement.appendChild(btnUpdateCell);
  const btnDeleteCell = document.createElement("td");
  btnDeleteCell.innerHTML = "<button>Xóa</button>";
  // Append td vào trong tr của bảng( phần tbody)
  trElement.appendChild(btnDeleteCell);

  //append tr vào tbody
  tbody1.appendChild(trElement);
});

let heading3 = document.getElementById("heading3");

//innerHTML: đọc và chỉnh sửa văn bản trong HTML
//innerText: trả về nội dung mà người dùng nhìn thấy. Nó sẽ bắt các script bằng js
//textContent: : trả về nội dung có trong DOM, nó sẽ bỏ qua các script và style

console.log(heading3.innerHTML);
console.log(heading3.innerText);
console.log(heading3.textContent);

let btnElement = document.querySelectorAll(".btn");
btnElement.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    console.log(e.target.innerHTML);
  });
});


