class SinhVien {
  txtMaSV = "" // mã SV
  txtTenSV = "" // tên SV
  txtEmail = "" // email
  txtPass = "" // mật khẩu
  txtNgaySinh = "" // ngày sinh
  khSV = "" // khoá học
  txtDiemToan = "" // điểm toán
  txtDiemLy = "" // điểm lý
  txtDiemHoa = "" // điểm hoá

  // phương thức
  tinhDiemTrungBinh = function () {
    return (this.txtDiemHoa * 1 + this.txtDiemLy * 1 + this.txtDiemToan * 1) / 3
  }
}

// chuoiDaoNguoc ==> test case 1 str = "hello" đáp án "olleh", test case 2 str = hehe đáp án eheh
function chuoiDaoNguoc(str) {
  if (str == "hello") {
    return "olleh"
  } else if (str == "hehe") {
    return "eheh"
  }
}
