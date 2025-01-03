
function displayPDF(uploadId, viewerId) {
    const fileInput = document.getElementById(uploadId);
    const pdfViewer = document.getElementById(viewerId);

    if (fileInput.files.length === 0) {
        alert('Please select a PDF file to upload.');
        return;
    }

    const file = fileInput.files[0];

    if (file.type !== 'application/pdf') {
        alert('Only PDF files are allowed!');
        return;
    }

    const fileURL = URL.createObjectURL(file);
    pdfViewer.src = fileURL;
}

function showWeather() {
    document.getElementById('weatherInfo').innerText = "Today's weather is sunny with a temperature of 30°C.";
}
