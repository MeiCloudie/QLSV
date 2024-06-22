// một thẻ chứa thông báo
// value dữ liệu người dùng nhập

// Kiểm tra xem người dùng đã nhập dữ liệu hay chưa (kiểm tra rỗng)
function checkEmptyValue(value, span) {
  if (value) {
    // xử lí khi dữ liệu được người dùng nhập vào
    // tham số span đại diện cho một câu lệnh DOM tới thẻ span thông báo
    span.innerHTML = ""
    return true
  } else {
    // xử lí khi dữ liệu là chuỗi rỗng
    span.innerHTML = "Vui lòng không bỏ trống trường này"
    return false
  }
}
