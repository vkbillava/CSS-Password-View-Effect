const root = document.documentElement;
const eye = document.getElementById("eyeball");
const beam = document.getElementById("beam");
const passwordInput = document.getElementById("password");

root.addEventListener("mousemove", (event) => {
    let rect = beam.getBoundingClientRect();
    let mouseX = rect.right + (rect.width / 2);
    let mouseY = rect.top + (rect.height / 2);
    let rad = Math.atan2(mouseX - event.pageX, mouseY - event.pageY);
    let degrees = (rad * (20 / Math.PI) * -1) - 350;

    root.style.setProperty('--beamDegrees', `${degrees}deg`);
});

eye.addEventListener("click", (event) => {
    event.preventDefault();
    document.body.classList.toggle("show-password");
    passwordInput.type = passwordInput.type === "password" ? "text" : "password";
    passwordInput.focus();
});