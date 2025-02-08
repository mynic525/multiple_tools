// PDF Converter
function convertPDF() {
    const format = document.getElementById('pdf-format').value;
    alert(`Converting PDF to ${format.toUpperCase()}...`);
    // Add conversion logic here
}

// Image Converter
function convertImage() {
    const format = document.getElementById('image-format').value;
    alert(`Converting image to ${format.toUpperCase()}...`);
    // Add conversion logic here
}

// Word Counter
document.getElementById('word-input').addEventListener('input', function () {
    const text = this.value;
    const wordCount = text.split(/\s+/).filter(word => word.length > 0).length;
    document.getElementById('word-count').textContent = wordCount;
});

// URL Shortener
function shortenURL() {
    const url = document.getElementById('url-input').value;
    // Add URL shortening logic here
    const shortURL = "https://short.url/abc123"; // Example
    document.getElementById('short-url').textContent = shortURL;
    document.getElementById('short-url').href = shortURL;
}