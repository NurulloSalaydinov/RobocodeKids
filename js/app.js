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



{/* <div class="my-5 flex justify-around items-center">
              <div class="cursor-pointer bg-blue-500 p-2 rounded">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#fff" class="bi bi-chevron-up" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"/> </svg>
              </div>
              <div>
                <h4 class="text-lg font-bold text-center">24</h4>
              </div>
              <div class="cursor-pointer bg-red-500 p-2 rounded">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#fff" class="bi bi-chevron-down" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/> </svg>
              </div>
            </div> */}