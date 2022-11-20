const otp = document.querySelectorAll(".otp");

otp[0].focus();

otp.forEach((inputs, index) => {
  inputs.addEventListener("keydown", (e) => {
    if (e.key >= 0 && e.key < 9) {
      setTimeout(() => {
        otp[index + 1].focus();
      }, 10);
    } else if (e.key === "Backspace") {
      setTimeout(() => {
        otp[index - 1].focus();
      }, 10);
    }
  });
});


  