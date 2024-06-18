// Mã sinh viên, tên sinh viên, email, mật khẩu, ngày sinh, khoá học, điểm toán, điểm lý, điểm hoá
// Tính điểm trung bình

function SinhVien() {
  this.txtMaSV = ""
  this.txtTenSV = ""
  this.txtEmail = ""
  this.txtPass = ""
  this.txtNgaySinh = ""
  this.khSV = ""
  this.txtDiemToan = ""
  this.txtDiemLy = ""
  this.txtDiemHoa = ""

  // phương thức
  this.tinhDiemTrungBinh = function () {
    return (this.txtDiemToan * 1 + this.txtDiemHoa * 1 + this.txtDiemLy * 1) / 3
  }
}
