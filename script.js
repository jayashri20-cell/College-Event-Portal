/* ================= MOBILE MENU ================= */

function toggleMenu() {

    const navbar = document.getElementById("navbar");

    if (navbar) {
        navbar.classList.toggle("active");
    }

}


/* ================= REGISTRATION FORM ================= */

document.addEventListener("DOMContentLoaded", function () {

    const registrationForm =
        document.getElementById("registrationForm");


    if (registrationForm) {

        registrationForm.addEventListener("submit", function (e) {

            e.preventDefault();


            const name =
                document.getElementById("name").value.trim();

            const email =
                document.getElementById("email").value.trim();

            const mobile =
                document.getElementById("mobile").value.trim();

            const department =
                document.getElementById("department").value.trim();

            const selectedEvent =
                document.getElementById("event").value;

            const message =
                document.getElementById("formMessage");


            /* Empty field validation */

            if (
                name === "" ||
                email === "" ||
                mobile === "" ||
                department === "" ||
                selectedEvent === ""
            ) {

                message.innerHTML =
                    "❌ Please fill in all the required fields.";

                message.style.color = "red";

                return;

            }


            /* Email validation */

            const emailPattern =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


            if (!emailPattern.test(email)) {

                message.innerHTML =
                    "❌ Please enter a valid email address.";

                message.style.color = "red";

                return;

            }


            /* Mobile validation */

            const mobilePattern =
                /^[0-9]{10}$/;


            if (!mobilePattern.test(mobile)) {

                message.innerHTML =
                    "❌ Please enter a valid 10-digit mobile number.";

                message.style.color = "red";

                return;

            }


            /* SUCCESS MESSAGE */

            message.innerHTML =
                "✅ Registration Successful!<br>" +
                "Thank you, <b>" + name + "</b>.<br>" +
                "You have successfully registered for " +
                "<b>" + selectedEvent + "</b>.";


            message.style.color = "green";

            message.style.backgroundColor = "#e8f8ee";

            message.style.padding = "15px";

            message.style.marginTop = "20px";

            message.style.borderRadius = "8px";

            message.style.border =
                "1px solid green";


            /* Clear form after success */

            registrationForm.reset();

        });

    }


    /* ================= EVENT FROM URL ================= */

    const urlParams =
        new URLSearchParams(window.location.search);

    const eventFromURL =
        urlParams.get("event");


    if (eventFromURL) {

        const eventSelect =
            document.getElementById("event");

        if (eventSelect) {

            eventSelect.value = eventFromURL;

        }

    }

});