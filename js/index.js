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

let arrSinhVien = []

// Thêm Sinh Viên
let formQLSV = document.getElementById("formQLSV")
formQLSV.onsubmit = function (event) {
  event.preventDefault()
  console.log("Tôi là submit")
  // sử dụng querySelectorAll
  let arrField = document.querySelectorAll("#formQLSV input, #formQLSV select")
  //   console.log(arrField)
  let sinhVien = new SinhVien()
  for (let field of arrField) {
    // console.log(field.value)
    // console.log(field.id)

    // Destructuring
    let { value, id } = field
    sinhVien[id] = value
  }
  console.log(sinhVien)
  arrSinhVien.push(sinhVien)

  // phương thức reset
  formQLSV.reset()
}

// Nút Reset
let btnReset = document.getElementById("btnReset")
btnReset.onclick = function () {
  formQLSV.reset()
}
