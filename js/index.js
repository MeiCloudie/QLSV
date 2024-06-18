/** Các chức năng có trong dự án quản lí sinh viên
 * Thêm Sinh Viên
 * Đưa dữ liệu các sinh viên hiển thị lên bảng
 * Xoá Sinh Viên
 * Chỉnh sửa thông tin sinh viên
 * Reset dữ liệu sinh viên trên form
 * Lưu và lấy dữ liệu được lưu trữ ở localStorage
 * Validation dữ liệu người dùng nhập (Ràng buộc)
 * Tìm kiếm sinh viên
 *
 */
let arrSinhVien = getLocalStorage()
renderArrSinhVien()
// 3 ==> đưa lên giao diện

// Thêm Sinh Viên
let formQLSV = document.getElementById("formQLSV")
formQLSV.onsubmit = function (event) {
  event.preventDefault()

  // sử dụng querySelectorAll
  let arrField = document.querySelectorAll("#formQLSV input, #formQLSV select")
  // khởi tạo một đối tượng từ lớp đối tượng SinhVien
  let sinhVien = new SinhVien()

  for (let field of arrField) {
    // destructuring
    let { value, id } = field // txtMaSV // txtTenSV
    sinhVien[id] = value
  }

  arrSinhVien.push(sinhVien)
  // lưu trữ mảng đã được thêm 1 phần tử mới vào localStorage
  saveLocalStorage()

  // hiển thị dữ liệu từ mảng lên giao diện
  renderArrSinhVien()
  // phương thức reset
  formQLSV.reset()
}

// Hiển thị dữ liệu trong mảng lên giao diện
function renderArrSinhVien(arr = arrSinhVien) {
  let content = ""
  for (let sinhVien of arr) {
    // console.log(sinhVien);
    // sinhVien laf object đang có dữ liệu và không có phương thức tính điểm trung bình
    // newSinhVien được khởi tạo từ lớp đối tượng sinhvien có phương thức nhưng không có dữ liệu (được nhận)
    let newSinhVien = new SinhVien()
    Object.assign(newSinhVien, sinhVien)
    // destructuring
    let { txtMaSV, txtTenSV, txtEmail, txtNgaySinh, khSV } = newSinhVien
    let diemTrungBinh = newSinhVien.tinhDiemTrungBinh()

    content += `
    <tr>
      <td>${txtMaSV}</td>
      <td>${txtTenSV}</td>
      <td>${txtEmail}</td>
      <td>${txtNgaySinh}</td>
      <td>${khSV}</td>
      <td>${diemTrungBinh.toFixed(2)}</td>
      <td>
        <button class="btn btn-danger">Xoá</button>
        <button class="btn btn-warning">Sửa</button>
      </td>
    </tr>
    `
  }
  document.getElementById("tbodySinhVien").innerHTML = content
}

// Thực hiện lưu trữ localStorage
// [] ==> ["a"] ==> ["a","b"] ==>
function saveLocalStorage(key = "arrSinhVien", value = arrSinhVien) {
  let stringJson = JSON.stringify(value)
  localStorage.setItem(key, stringJson)
}

// Thực hiện lấy dữ liệu từ localStorage
function getLocalStorage(key = "arrSinhVien") {
  // lấy dữ liệu từ localStorage lên
  let dataLocal = localStorage.getItem(key)
  // convert từ chuỗi JSON về object
  let newDataLocal = JSON.parse(dataLocal)
  console.log(newDataLocal)
  // if (newDataLocal) {
  //   return newDataLocal;
  // } else {
  //   return [];
  // }
  return newDataLocal ? newDataLocal : []
}

// // Các phương thức tương tác với localStorage
// // Phương thức thêm dữ liệu vào localStorage
// let sinhVienLam = {
//   hoTen: "Lâm Trần",
//   tuoi: 22,
// };
// // Trước khi lưu trữ dữ liệu object cần chuyển đổi dữ liệu về một chuỗi JSON
// let sinhVienLamJSON = JSON.stringify(sinhVienLam);
// // tham số đầu tiên đại diện cho key cần lưu trữ
// // tham số thứ 2 sẽ là giá trị cần lưu trữ
// // localStorage.setItem("hoTen", sinhVienLamJSON);

// let arrNumber = [21, 45, 33];
// let arrNumberJSON = JSON.stringify(arrNumber);
// // yêu cầu : thực hiện lưu trữ mảng arrNumber ở localstorage với tên key là arrNumber
// localStorage.setItem("arrNumber", arrNumberJSON);

// // Phương thức lấy dữ liệu từ localStorage
// let localLam = localStorage.getItem("hoTen");
// let convertLocalLam = JSON.parse(localLam);
// console.log(convertLocalLam);

// // Phương thức xoá dữ liệu từ localStorage
// localStorage.removeItem("arrNumber");
