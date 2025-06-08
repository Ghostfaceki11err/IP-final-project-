document.addEventListener("DOMContentLoaded", function () {
    function getGreeting() {
        let now = new Date();
        let hours = now.getHours();
        let greeting;

        if (hours < 12) {
            greeting = "Good morning!";
        } else if (hours < 18) {
            greeting = "Good afternoon!";
        } else {
            greeting = "Good evening!";
        }

        document.getElementById("greeting").innerText = greeting;
    }

    getGreeting();
});