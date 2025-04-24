document.addEventListener("DOMContentLoaded", function () {
    let reportBug = document.getElementById("reportBug");

    if (reportBug) {
        reportBug.addEventListener("submit", function (event) {
            event.preventDefault(); 

            let username = document.getElementById("username").value.trim();
            let email = document.getElementById("email").value.trim();
            let server = document.getElementById("server").value;
            let description = document.getElementById("description").value.trim();
            let consent = document.getElementById("consent").checked;

            if (username === "") {
                alert("Nama pengguna tidak boleh kosong!");
                return;
            }

            if (email === "" || !email.includes("@")) {
                alert("Masukkan email yang valid!");
                return;
            }

            if (server === "") {
                alert("Pilih server yang sesuai!");
                return;
            }

            if (description.length < 20) {
                alert("Deskripsi bug minimal harus 20 karakter!");
                return;
            }

            if (!consent) {
                alert("Anda harus menyetujui persyaratan sebelum mengirim laporan!");
                return;
            }

            alert("Laporan bug berhasil dikirim. Terima kasih telah membantu kami meningkatkan Palorant!");

            reportBug.reset();
        });
    } else {
        console.error("Element form dengan ID 'reportBug' tidak ditemukan!");
    }
});
