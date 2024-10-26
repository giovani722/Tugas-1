function tampilkanData(event) {
    event.preventDefault();

const email = document.getElementById("email").value;
const username = document.getElementById("username").value;
const pilihKelas = document.getElementById("pilihKelas").value;
const jenisKelamin = document.querySelector('input[name="jenis_kelamin"]:checked').value;
const outputTable = document.getElementById("outputTable");

outputTable.innerHTML = `
<table>
    <tr><th>Data Diri</th><th>Keterangan</th></tr>
    <tr><td>Email</td><td>${email}</td></tr>
    <tr><td>Username</td><td>${username}</td></tr>
    <tr><td>Kelas</td><td>${pilihKelas}</td></tr>
    <tr><td>Jenis Kelamin</td><td>${jenisKelamin}</td></tr>
    </table>
    
`
window.confirm("Apakah anda yakin ?")
}



function Profile() {
    window.location = "./profile.html";
}