const generateBtn = document.getElementById("generate-btn");
const qrInput = document.getElementById("qr-text");
const qrContainer = document.getElementById("qrcode");

// Function to generate the QR
function generateQR() {
    const text = qrInput.value;

    // Validation
    if (!text.trim()) {
        alert("Please enter some text!");
        return;
    }

    // Clear previous QR Code
    qrContainer.innerHTML = "";

    // Generate new QR Code
    new QRCode(qrContainer, {
        text: text,
        width: 150,
        height: 150,
        colorDark : "#000000",
        colorLight : "#ffffff",
        correctLevel : QRCode.CorrectLevel.H
    });
}

// Event Listener for Button Click
generateBtn.addEventListener("click", generateQR);

// Event Listener for "Enter" key inside the input box
qrInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        generateQR();
    }
});