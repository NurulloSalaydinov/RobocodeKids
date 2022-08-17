const toggleDropdown = (drId) => {
  var dropdown = document.getElementById(drId);
  dropdown.classList.toggle("hidden");
};

const NavbarAnimation = () => {
  var nav = document.querySelector("nav");
  var prevScrollpos = window.pageYOffset;
  window.addEventListener("resize", () => {
    if (window.matchMedia("(max-width: 768px)").matches) {
      window.addEventListener('scroll', function () {
		console.log(window.scrollY)
        var currentScrollPos = window.pageYOffset;
        if (Math.ceil(window.scrollY) > 200) {
          if (prevScrollpos > currentScrollPos) {
            console.log("scrolltop");
            nav.style = "position: fixed !important;transform: translateY(0)";
          } else {
            nav.style =
              "position: relative !important;transform: translateY(-100%)";
          }
          prevScrollpos = currentScrollPos;
        } else {
          nav.style = "";
        }
      });
    } else {
      nav.style = "";
    }
  });
};

NavbarAnimation();
