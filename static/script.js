document.querySelectorAll("nav ul li a").forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();
        const section = this.getAttribute("href").substring(1);
        document.getElementById("content").innerHTML = `<h2>${section}</h2><p>Content for ${section}</p>`;
    });
});

document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => {
        let nameElement = document.querySelector(".name");
        nameElement.classList.add("typed"); // Start glow effect
    }, 3000); // Ensure typing animation is completed first
});
 


//Cursor Removal after the Name typing

document.addEventListener("DOMContentLoaded", function () {
    const nameElement = document.querySelector(".name");
    const nameText = "Karthik";
    
    let index = 0;
    function typeWriter() {
        if (index < nameText.length) {
            nameElement.textContent += nameText.charAt(index);
            index++;
            setTimeout(typeWriter, 150);
        } else {
            nameElement.style.borderRight = "none"; // Remove cursor after typing
        }
    }

    typeWriter();
});


document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => {
        let nameElement = document.querySelector(".name");
        nameElement.classList.add("typed"); // Start glow effect
    }, 3000); // Wait for typing animation to complete
});

//Form validation in the home page for message
function validateForm() {
    let name = document.getElementById("name").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let message = document.getElementById("message").value.trim();
    
    if (name === "" || phone === "" || message === "") {
        alert("All fields are required.");
        return false;
    }

    // Validate phone number (Assuming 10-digit number)
    let phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(phone)) {
        alert("Enter a valid 10-digit phone number.");
        return false;
    }

    return true;
}

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from reloading the page

    var formData = new FormData(this);

    fetch("/submit-form", {
        method: "POST",
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        alert("Message sent successfully!");
        document.getElementById("contactForm").reset(); // Clear the form
    })
    .catch(error => {
        console.error("Error:", error);
    });
});