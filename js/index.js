// lấy theo id
// let headingElement = document.getElementById("heading");
// console.log([headingElement]);

// lấy theo class

// let itemElement = document.getElementsByClassName("item");
// console.log(itemElement);

// lấy theo querySelector

// let itemElement = document.querySelector("#heading");
// let itemElement = document.querySelectorAll(".item");
// console.log(itemElement);

// let inputTextElement = document.querySelector('input[type="text"]')
// console.log(inputTextElement);

// let inputRadioElement =  document.querySelector('input[type = "radio"]')
// console.log(inputRadioElement);

// let inputDateElement =  document.querySelector('input[type = "date"]')
// console.log(inputDateElement);

const getItem1 = () => {
  console.log("gọi hàm");
};

const getItem2 = () => {
  console.log("gọi item 2");
};

// lấy ra phần tử button-submit
let btnSubmit = document.querySelector("#btnSubmit");

btnSubmit.addEventListener("click", () => {
  console.log("Submit");
});

//lấy ra phần tử input

let emailInput = document.querySelector("#emailInput");
emailInput.addEventListener("input", (event) => {
  console.log("event:", event.target.value);
});

//tạo 1 mảng rỗng và lưu trữ các tên
// tạo nút button và input để lấy dữ liệu.
//Khi click vào nút thì push tên lấy từ input vào trong mảng

const names = [];

// lấy element của input và button

let inputElement = document.querySelector("#InputValue");

let countryOption = document.querySelector("#country");
let btnSave = document.querySelector("#btnSave");

const radioElement = document.querySelectorAll('input[type="radio"]');
const checkboxElement = document.querySelectorAll('input[type="checkbox"]');

let genderValue = "nam";
const hobbies = [];

// lấy giá trị trong checkbox

checkboxElement.forEach((element) => {
  element.addEventListener("change", (event) => {
    //kiểm tra những ô checkbox nào được checked
    if (event.target.checked) {
      hobbies.push(event.target.value);
    } else {
      // tìm kiếm phần tử trong mảng
      let index = hobbies.indexOf(event.target.value);

      // xóa phần tử không được checked
      if (index !== -1) {
        hobbies.splice(index, 1);
      }
    }
  });
});

/**
 * Thêm dữ liệu vào mảng
 * @param {*} value giátrị lấy từ input
 * @param {*} arr  mảng chứa dữ liệu
 */
const handleAddName = (value, arr) => {
  arr.push(value);
};

const loadData = () => {
  console.log(names);
  console.log(genderValue);
  console.log(hobbies);
};

btnSave.addEventListener("click", () => {
  const inputValue = inputElement.value.trim(); // trim dể bỏ khoảng trắng

  // lấy giá trị từ radio

  radioElement.forEach((element) => {
    // kiểm tra radio nào được checked thì sẽ lấy gía trị của nó
    if (element.checked) {
      genderValue = element.value;
    }
  });

  handleAddName(inputValue, names);

  // sau khi submit thì focus vào input
  inputElement.focus();

  inputElement.value = ""; // reset giá trị trong ô input
  loadData();
});

//lắng nghe sự kiện thay đổi trong select option
countryOption.addEventListener("change", (event) => {
  console.log(event.target.value);
});
