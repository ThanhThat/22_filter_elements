const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

$(".nav-list").addEventListener("click", function (e) {
  const btnLink = e.target.closest(".btn-link");

  if (btnLink) {
    $(".btn-link.active").classList.remove("active");
    btnLink.classList.add("active");

    const btnType = btnLink.getAttribute("type-food");

    $$(".food-item").forEach((item) => {
      const itemType = item.firstElementChild.getAttribute("type-food");

      if (btnType === "all" || btnType === itemType)
        item.classList.remove("hide");
      else if (btnType !== itemType) item.classList.add("hide");
    });
  }
});
