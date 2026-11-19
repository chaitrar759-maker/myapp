
const form = document.getElementById("placementForm");

// Student photo preview
document.getElementById("photo").addEventListener("change", function() {

    const file = this.files[0];
    const preview = document.getElementById("preview");

    if (file) {
        if (!file.type.startsWith("image/")) {
            alert("Please select an image file.");
            this.value = "";
            preview.style.display = "none";
            return;
        }

        preview.src = URL.createObjectURL(file);
        preview.style.display = "block";
    }
});

// Registration form
form.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const cgpa = Number(document.getElementById("cgpa").value);

    if (cgpa < 0 || cgpa > 10) {
        alert("Please enter a valid CGPA between 0 and 10.");
        return;
    }

    document.getElementById("message").innerHTML =
        "🎉 Congratulations " + name +
        "! Your registration was successful.";

    alert("Welcome to CampusConnect, " + name + "!");

    form.reset();
    document.getElementById("preview").style.display = "none";
});
