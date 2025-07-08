// pages/index.js

// Function to handle login
function login() {
    const user = document.getElementById('username').value.trim();
    const pass = document.getElementById('password').value.trim();
    const msg = document.getElementById('message');

    if (user === "dijoo" && pass === "321") {
        msg.innerHTML = "<div class='success'>Login berhasil! Selamat datang, Reseller.</div>";
        // Redirect to dashboard if needed
        // window.location.href = "dashboard.html";
    } else {
        msg.innerHTML = "<div class='error'>Username atau password salah!</div>";
    }
}

// Function to handle chat with admin
function chatWA(alasan, reseller) {
    if (!alasan || !reseller) {
        alert("Silakan isi semua kolom terlebih dahulu.");
        return;
    }

    const message = `Halo Admin,%0ASaya reseller dengan nama: *${reseller}*%0AIngin menghubungi Anda karena: *${alasan}*`;
    const phone = "6283838172352"; // Admin's phone number
    const waURL = `https://wa.me/${phone}?text=${message}`;

    window.open(waURL, '_blank');
}

// Function to create a panel
async function createPanel(usernameInput, planInput) {
    const resultDiv = document.getElementById('result');
    const errorDiv = document.getElementById('error');
    resultDiv.classList.add('hidden');
    errorDiv.classList.add('hidden');
    resultDiv.textContent = '';
    errorDiv.textContent = '';

    // Validate inputs
    if (!usernameInput) {
        errorDiv.textContent = "Please enter a username.";
        errorDiv.classList.remove('hidden');
        return;
    }

    if (!planInput) {
        errorDiv.textContent = "Please select a valid plan.";
        errorDiv.classList.remove('hidden');
        return;
    }

    // Simulate creating a panel (replace with actual API call)
    resultDiv.textContent = "Creating user and server panel, please wait...";
    resultDiv.classList.remove('hidden');

    // Mock response
    setTimeout(() => {
        resultDiv.textContent = `Panel created for ${usernameInput} with plan ${planInput}`;
    }, 2000);
}


