function toggleTable() {
    var table = document.getElementById("diabetes-table");
    if (table.style.display === "none") {
        table.style.display = "table";  // Show the table
    } else {
        table.style.display = "none";  // Hide the table
    }
}

function toggleContent() {
    var content = document.getElementById("type2-content");
    if (content.style.display === "none") {
        content.style.display = "block";  // Show the content
    } else {
        content.style.display = "none";  // Hide the content
    }
}

function toggleGalleryContent() {
    var content = document.getElementById("gallery-content");
    if (content.style.display === "none") {
        content.style.display = "block";  // Show the gallery content
    } else {
        content.style.display = "none";  // Hide the gallery content
    }
}
