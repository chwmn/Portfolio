let button = document.querySelectorAll(".plus");

for (let i = 0; i < button.length; i++) {
  let display = new Boolean(false);

  button[i].onclick = () => {
    info =
      button[i].parentElement.previousElementSibling.querySelectorAll(".info");
    // headInfo =
    //   button[i].parentElement.previousElementSibling.querySelectorAll("h3");
    // processInfo = button[i].previousElementSibling;

    if (display == false) {
      button[i].classList.remove("open");
      button[i].classList.add("close");

      for (let i = 0; i < info.length; i++) {
        info[i].classList.remove("hidden");
        info[i].classList.add("shown");
      }

      // for (let i = 0; i < headInfo.length; i++) {
      //   headInfo[i].classList.remove("hide");
      //   headInfo[i].classList.add("show");
      // }

      // processInfo.classList.remove("hidden");
      // processInfo.classList.add("shown");
      display = true;
    } else if (display == true) {
      button[i].classList.remove("close");
      button[i].classList.add("open");

      for (let i = 0; i < info.length; i++) {
        info[i].classList.add("hidden");
        info[i].classList.remove("shown");
      }

      // for (let i = 0; i < headInfo.length; i++) {
      //   headInfo[i].classList.remove("show");
      //   headInfo[i].classList.add("hide");
      // }

      // processInfo.classList.remove("shown");
      // processInfo.classList.add("hidden");
      display = false;
    }
  };
}
