
(function () {
  window.addEventListener("scroll", contrastMenu);

  const menu = document.querySelector(".nav");
  const links = menu.querySelectorAll("ul li a");
  return links[0].classList.add("actived");

  function contrastMenu() {
    let positions = [...links].map((link) => {
      let href = link.getAttribute("href");
      let h2 = document.querySelector(href);
      return h2.getBoundingClientRect().top;
    });

    let activedLink = getLastSeenElement(positions);
    let menuActived = menu.querySelector(".actived");

    if (menuActived) {
      menuActived.classList.remove("actived");
    }
    if (activedLink) {
      return activedLink.classList.add("actived");
    }
  }

  function getLastSeenElement(_positions) {
    let positions = _positions.filter((n) => n < innerHeight / 2);

    return links[positions.length - 1];
  }
})();
