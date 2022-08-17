const toggleDropdown = (drId) => {
  var dropdown = document.getElementById(drId);
  dropdown.classList.toggle("hidden");
};

window.onscroll = function() {
	if (window.scrollY > 200) {
		document.getElementById('toTop').classList.remove('translate-x-full');
		document.getElementById('toTop').classList.add('right-5');
	} else {
		document.getElementById('toTop').classList.add('translate-x-full');
		document.getElementById('toTop').classList.remove('right-5');
	}
	console.log(window.innerHeight)
}

const NavbarAnimation = () => {
  var nav = document.querySelector("nav");
  var prevScrollpos = window.pageYOffset;
      window.addEventListener('scroll', function () {
        var currentScrollPos = window.pageYOffset;
        if (Math.ceil(window.scrollY) > 200 && window.innerWidth > 768) {
          if (prevScrollpos > currentScrollPos) {
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
};

NavbarAnimation();
