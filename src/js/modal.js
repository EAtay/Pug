import { showHideToggle } from "./burger";

const modalOpenBtn = document.querySelector(".main-discuss-btn");
const modalClodeBtn = document.querySelector(".modal__btn-close");
const form = document.querySelector(".order");

export const checkValid = (value) => {
  if (value === "") {
    return {
      valid: false,
      error: "поле обязательно*",
    };
  }
  return { valid: true };
};

const getInputs = () => {
  const name = document.querySelector("#name");
  const email = document.querySelector("#email");
  const message = document.querySelector("#message");
  return [name, email, message];
};

const checkFormValid = () => {
  const links = getInputs();
  let bool = true;
  links.forEach((input) => {
    const result = checkValid(input.value);
    if (!result.valid) {
      bool = false;
      input.classList.add("input_error");
      input.nextElementSibling.textContent = result.error;
    }
  });
  return bool;
};

const addFocusListener = () => {
  const links = getInputs();
  links.forEach((input) => {
    input?.addEventListener("focus", function (e) {
      if (e.target.classList.contains("input_error")) {
        e.target.classList.remove("input_error");
        e.target.nextElementSibling.textContent = "";
      }
    });
  });
};
const cleanForm = () => {
  const links = getInputs();
  const submitBtn = document.querySelector(".sendBtn");
  submitBtn.classList.remove("order__btn_send");
  submitBtn.textContent = "отправить";
  document.querySelector(".order__success").textContent = "";
  links.forEach((input) => {
    input.value = "";
    input.nextElementSibling.textContent = "";
    input.classList.remove("input_error");
  });
};
const handleSubmit = (e) => {
  e.preventDefault();
  const submitBtn = document.querySelector(".sendBtn");
  submitBtn.classList.add("order__btn_send");
  submitBtn.style.background = "#9fa7b0";
  submitBtn.textContent = "идет отправка...";
  setTimeout(function () {
    if (checkFormValid()) {
      document.querySelector(".order__success").textContent =
        "Ваша заявка успешно отправлена!";
    } else {
      submitBtn.style.background = "#47cf34";
      submitBtn.classList.remove("order__btn_send");
      submitBtn.textContent = "отправить";
    }
  }, 1000);
};

export const modalInit = () => {
  const submitBtn = document.querySelector(".sendBtn");
  form?.addEventListener("submit", (e) => handleSubmit(e));
  modalOpenBtn?.addEventListener("click", () => showHideToggle("modal"));
  modalClodeBtn?.addEventListener("click", () => {
    showHideToggle("modal");
    document.body.style.overflow = "auto";
    cleanForm();
    submitBtn.style.background = "#47cf34";
  });
  addFocusListener();
};
