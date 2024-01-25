document.addEventListener("DOMContentLoaded", function () {
  var rotatingImage = document.getElementById("rotatingImage");
  var s1d1 = document.querySelector(".s1d1");
  var s1d1p1 = document.querySelector(".s1d1p1");
  var s1d1p2 = document.querySelector(".s1d1p2");

  var isRotated = false;

  window.addEventListener("scroll", function () {
    // Check if the user is scrolling down
    if (window.scrollY > 0 && !isRotated) {
      rotatingImage.classList.add("rotate");
      s1d1p2.classList.add("rotate"); // Add rotate class to the text
      s1d1p2.classList.add("scrolling-down"); // Add scrolling-down class to the text
      isRotated = true;
    } else if (window.scrollY === 0 && isRotated) {
      rotatingImage.classList.remove("rotate");
      s1d1p2.classList.remove("rotate"); // Remove rotate class from the text
      s1d1p2.classList.remove("scrolling-down"); // Remove scrolling-down class from the text
      isRotated = false;
    }

    // Check if scrolling down and apply animation to s1d1 elements
    if (window.scrollY > 0) {
      s1d1.classList.add("scrolling-down");
      s1d1p1.classList.add("scrolling-down");
      s1d1p2.classList.add("scrolling-down");

      var scrollPercentage = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
      var animationPercentage = Math.min(scrollPercentage / 25, 1); // Limit to 100%

      // Adjust the gap, scale, translation, and font size dynamically
      s1d1p2.style.gap = 40 + (1960 * animationPercentage) + "px";
      s1d1p2.style.transform = "scale(" + (1 + animationPercentage) + ")";
      s1d1p1.style.transform = "translateX(" + (-100 * animationPercentage) + "vw)";
      s1d1p2.style.fontSize = 120 + (80 * animationPercentage) + "px"; // Adjust the initial and final font size values
    } else {
      // Remove the class when scrolling up
      s1d1.classList.remove("scrolling-down");
      s1d1p1.classList.remove("scrolling-down");
      s1d1p2.classList.remove("scrolling-down");

      // Reset gap, scale, translation, and font size
      s1d1p2.style.gap = "40px";
      s1d1p2.style.transform = "scale(1)";
      s1d1p1.style.transform = "translateX(0)";
      s1d1p2.style.fontSize = "120px";
    }
  });
});

window.addEventListener(
  "scroll",
  () => {
    document.body.style.setProperty(
      "--scroll",
      window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
    );
  },
  false
);
