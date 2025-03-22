function toggleFooter() {
    const footerText = document.getElementById('footer-text');
    footerText.style.display = footerText.style.display === 'block' ? 'none' : 'block';
}
function toggleFooter() {
    var footerText = document.getElementById("footer-text");
    if (footerText.style.display === "none") {
        footerText.style.display = "block";
    } else {
        footerText.style.display = "none";
    }
}