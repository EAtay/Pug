const burgerOpenBtn = document.querySelector(".header__burger");
const burgerCloseBtn = document.querySelector(".burger__btn_close");

export const showHideToggle = (className) => {
  const link = document.querySelector(`.${className}`);
  link.classList.toggle(`${className}_show`);
  document.body.style.overflow = 'hidden';
};

export const burgerInit = () => {
  burgerOpenBtn.addEventListener("click", () => showHideToggle("burger"));
  burgerCloseBtn.addEventListener("click", function(e){
    showHideToggle("burger");
  document.body.style.overflow = 'auto';
});
};

export const renderModalLink = () => {
  const links = document.querySelectorAll(".burger__link");
  links.forEach((link) =>
    link.addEventListener("click", () => {
      showHideToggle("burger");
      document.body.style.overflow = 'auto';
    })
  );
};
renderModalLink();
