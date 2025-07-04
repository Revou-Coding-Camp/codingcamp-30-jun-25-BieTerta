document.addEventListener('DOMContentLoaded', function() {
    // === Bagian untuk Welcoming Speech di index.html ===
    const welcomeMessageElement = document.getElementById('welcomeMessage');
    if (welcomeMessageElement) { // Pastikan elemen ada di halaman ini (index.html)
        // Minta nama pengguna
        let userName = prompt("Halo! Siapa nama Anda?");

        // Jika pengguna memasukkan nama, perbarui pesan selamat datang
        if (userName && userName.trim() !== '') {
            welcomeMessageElement.textContent = `Halo, ${userName.trim()}! Selamat Datang!`;
        } else {
            welcomeMessageElement.textContent = `Halo, Pengunjung! Selamat Datang!`;
        }
    }


    // === Bagian untuk Validasi Formulir Kontak di index.html ===
    const contactForm = document.getElementById('contactForm');

    // Hanya tambahkan event listener jika form kontak ada di halaman ini
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Mencegah pengiriman formulir default

            // Hapus pesan kesalahan sebelumnya
            clearErrorMessages();

            let isValid = true;

            // Dapatkan elemen formulir
            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const phoneInput = document.getElementById('phone');
            const messageTextarea = document.getElementById('message');

            // Validasi Nama
            if (nameInput.value.trim() === '') {
                displayError('nameError', 'Nama wajib diisi.');
                isValid = false;
            }

            // Validasi Email
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (emailInput.value.trim() === '') {
                displayError('emailError', 'Email wajib diisi.');
                isValid = false;
            } else if (!emailPattern.test(emailInput.value.trim())) {
                displayError('emailError', 'Format email tidak valid.');
                isValid = false;
            }

            // Validasi Nomor Telepon (pemeriksaan sederhana untuk tidak kosong dan hanya angka)
            const phonePattern = /^\d+$/; // Hanya angka
            if (phoneInput.value.trim() === '') {
                displayError('phoneError', 'Nomor Telepon wajib diisi.');
                isValid = false;
            } else if (!phonePattern.test(phoneInput.value.trim())) {
                displayError('phoneError', 'Nomor Telepon hanya boleh berisi angka.');
                isValid = false;
            } else if (phoneInput.value.trim().length < 8 || phoneInput.value.trim().length > 15) {
                displayError('phoneError', 'Nomor Telepon harus antara 8 hingga 15 digit.');
                isValid = false;
            }


            // Validasi Pesan
            if (messageTextarea.value.trim() === '') {
                displayError('messageError', 'Pesan wajib diisi.');
                isValid = false;
            }

            if (isValid) {
                // Jika semua validasi berhasil, Anda dapat melakukan sesuatu dengan data formulir
                console.log('Formulir Berhasil Dikirim!');
                console.log('Nama:', nameInput.value.trim());
                console.log('Email:', emailInput.value.trim());
                console.log('Nomor Telepon:', phoneInput.value.trim());
                console.log('Pesan:', messageTextarea.value.trim());

                // Tampilkan nilai formulir di HTML atau sebagai alert
                const submittedData = `
Nama: ${nameInput.value.trim()}
Email: ${emailInput.value.trim()}
Nomor Telepon: ${phoneInput.value.trim()}
Pesan: ${messageTextarea.value.trim()}
`;
                alert('Terima kasih atas pesan Anda!\n\nData yang Anda kirim:\n' + submittedData);


                // Secara opsional, kosongkan formulir setelah pengiriman berhasil
                contactForm.reset();
            }
        });
    }


    function displayError(elementId, message) {
        const errorElement = document.getElementById(elementId);
        if (errorElement) {
            errorElement.textContent = message;
        }
    }

    function clearErrorMessages() {
        const errorElements = document.querySelectorAll('.error-message');
        errorElements.forEach(element => {
            element.textContent = '';
        });
    }
});
