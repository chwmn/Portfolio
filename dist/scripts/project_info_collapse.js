let button = document.querySelectorAll(".plus");

for (let i = 0; i < button.length; i++) {
  let display = new Boolean(false);

  button[i].onclick = () => {
    info =
      button[i].parentElement.previousElementSibling.querySelectorAll(".info");

    if (display == false) {
      button[i].classList.remove("open");
      button[i].classList.add("close");

      for (let i = 0; i < info.length; i++) {
        info[i].classList.remove("hidden");
        info[i].classList.add("shown");
      }

      display = true;
    } else if (display == true) {
      button[i].classList.remove("close");
      button[i].classList.add("open");

      for (let i = 0; i < info.length; i++) {
        info[i].classList.add("hidden");
        info[i].classList.remove("shown");
      }

      display = false;
    }
  };
}
