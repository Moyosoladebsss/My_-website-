document.getElementById("menuBtn").addEventListener("click", () => {
  document.getElementById("menu").classList.toggle("open");
});

document.querySelectorAll("#menu a").forEach(link => {
  link.addEventListener("click", () => {
    document.getElementById("menu").classList.remove("open");
  });
});

document.getElementById("year").textContent = new Date().getFullYear();

document.getElementById("sendBtn").addEventListener("click", () => {
  const name = document.getElementById("name").value.trim();
  const service = document.getElementById("service").value;
  const details = document.getElementById("details").value.trim();

  if (name === "") {
    alert("Please enter your name.");
    return;
  }

  const phone = "2349056714721"
  const message = "Hello ADPRIME FACILITY, my name is " + name +
    ". I need: " + service + ". " + details;

  window.open("https://wa.me/" + phone + "?text=" + encodeURIComponent(message), "_blank");
});
