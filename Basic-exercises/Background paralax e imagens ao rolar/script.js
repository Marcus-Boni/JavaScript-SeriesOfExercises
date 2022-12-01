(function () {
  document.body.classList.remove("no-js");

  let elements = [...document.querySelectorAll("[data-addclass-on-scroll]")];

  window.addEventListener("scroll", addClassOnScroll);

  function isElementIntoView(el) {
    let rect = el.getBoundingClientRect();
    return (
      (rect.top <= 0 && rect.bottom >= 0) ||
      (rect.top >= 0 && rect.bottom <= innerHeight)
    );
  }

  function addClassOnScroll() {
    if (elements.length === 0) {
      window.removeEventListener("scroll", addClassOnScroll);
      console.log("removeu evento");
    }

    elements.forEach((el) => {
      if (isElementIntoView(el)) {
        let delay =
          parseInt(el.getAttribute("data-addclass-on-scroll-delay")) || 0;

        setTimeout(() => {
          const _class = el.getAttribute("data-addclass-on-scroll");
          el.classList.add(_class);
          el.removeAttribute("data-addclass-on-scroll");
          el.removeAttribute("data-addclass-on-scroll-delay");
          elements = [
            ...document.querySelectorAll("[data-addclass-on-scroll]"),
          ];
        }, delay);
      }
    });
  }
  addClassOnScroll();
})();
