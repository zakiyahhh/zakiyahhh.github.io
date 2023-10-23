let data_mahasiswa=JSON.parse(localStorage.getItem("data")) || [];

renderData();

function checkObject(data) {
    for (const key in data) {
      if (data[key] === null || data[key] === '') {
        return false;
      }
    }
    return true;
  }

function addData(){
    const inputName=document.querySelector(".nama");
    const nama=inputName.value;
    const inputNIM=document.querySelector(".nim");
    const NIM=inputNIM.value;
    const inputProdi=document.querySelector(".prodi");
    const prodi=inputProdi.value;
    const inputEmail=document.querySelector(".email");
    const email=inputEmail.value;
    const inputPass=document.querySelector(".password");
    const password=inputPass.value;
    const inputJenkel=document.querySelector(".jenkel");
    const jenis_kelamin=inputJenkel.value;
    const inputTanggal=document.querySelector(".tanggal");
    const tgl_lahir=inputTanggal.value;
    const inputAlamat=document.querySelector(".alamat");
    const alamat=inputAlamat.value;

    data={
        nama:nama,
        NIM:NIM,
        prodi:prodi,
        email:email,
        password:password,
        jenis_kelamin:jenis_kelamin,
        tgl_lahir:tgl_lahir,
        alamat:alamat,
    }
    const validasi=checkObject(data);

    if(validasi){
        data_mahasiswa.push(data);
        localStorage.setItem("data", JSON.stringify(data_mahasiswa));
        alert("Data Berhasil Di Input");
    }
}

function renderData(){
    let dataHTML = "";
  
    for (let i = 0; i < data_mahasiswa.length; i++) {
      const nama = data_mahasiswa[i].nama;
      const NIM = data_mahasiswa[i].NIM;
      const prodi = data_mahasiswa[i].prodi;
      const email = data_mahasiswa[i].email;
      const password = data_mahasiswa[i].password;
      const jenis_kelamin = data_mahasiswa[i].jenis_kelamin;
      const tgl_lahir = data_mahasiswa[i].tgl_lahir;
      const alamat = data_mahasiswa[i].alamat;
      
      const html = `<tr><td>${nama}</td><td>${NIM}}</td><td>${prodi}</td><td>${email}</td><td>${password}</td><td>${jenis_kelamin}</td><td>${tgl_lahir}</td><td>${alamat}</td></tr>`;
      dataHTML += html;
    }
    document.querySelector(".data_mahasiswa").innerHTML += dataHTML;
}

function clearData(){
    localStorage.clear();
    location.reload();
}