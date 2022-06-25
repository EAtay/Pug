/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/index.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/index.scss ***!
  \*****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_font_lato_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js!./styles/font-lato.scss */ "./node_modules/css-loader/dist/cjs.js!./src/styles/font-lato.scss");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_main_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js!./styles/main.scss */ "./node_modules/css-loader/dist/cjs.js!./src/styles/main.scss");
// Imports




var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Lato&family=Montserrat:wght@700&family=Roboto&display=swap);"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_styles_font_lato_scss__WEBPACK_IMPORTED_MODULE_2__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_styles_main_scss__WEBPACK_IMPORTED_MODULE_3__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".header {\n  width: 100%;\n  height: 70px;\n  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px 0px;\n}\n.header .header__img {\n  width: 133px;\n  height: 29px;\n}\n.header .header__list {\n  height: 100%;\n  list-style-type: none;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 0;\n  padding: 0;\n}\n.header .header__list-item {\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 17px;\n  text-align: center;\n  letter-spacing: 0.03em;\n  text-transform: uppercase;\n  text-decoration: none;\n  font-family: \"Lato\";\n  color: #282c37;\n  cursor: pointer;\n}\n.header .header__list-item:hover {\n  color: #282c37;\n  font-weight: 600;\n}\n.header .header__icons {\n  display: flex;\n  justify-content: flex-end;\n}\n.header .header__icon {\n  width: 24px;\n  height: 24px;\n  margin-left: 24px;\n  transition: 0.2s;\n  cursor: pointer;\n}\n.header .header__icon:hover .icon_color {\n  fill: #47cf34;\n  transition: 0.2s;\n}\n.header .header__icon:hover .icon_color_blue {\n  fill: #0088cc;\n  transition: 0.2s;\n}\n.header .header__burger {\n  display: none;\n  cursor: pointer;\n}\n\n.burger {\n  display: flex;\n  height: 100%;\n  width: 100%;\n  background-color: #fff;\n  position: fixed;\n  top: 0;\n  right: -100%;\n  z-index: 4;\n  justify-content: center;\n  align-items: center;\n  transition: all 0.7s ease 0s;\n  overflow: auto;\n}\n\n.burger__contant {\n  width: 152px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.burger__logo {\n  width: 64px;\n  height: 68px;\n  margin-bottom: 80px;\n}\n\n.burger__link {\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 19px;\n  letter-spacing: 0.03em;\n  text-transform: uppercase;\n  text-decoration: none;\n  font-family: \"Lato\";\n  color: #282c37;\n  margin-bottom: 45px;\n}\n.burger__link .burger__link_margin {\n  margin-bottom: 116px;\n}\n\n.burger__btn_close {\n  width: 24px;\n  height: 24px;\n  position: absolute;\n  top: 24px;\n  left: 28px;\n  cursor: pointer;\n}\n\n.burger__icons {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n}\n\n.burger_show {\n  display: flex;\n  right: 0;\n}\n\n@media (max-width: 991px) {\n  .header .header__icons {\n    justify-content: space-between;\n  }\n  .header .header__icon {\n    margin-left: 0;\n  }\n}\n@media (max-width: 992px) {\n  .header .header__list {\n    display: none;\n    background: red;\n  }\n  .header .header__icons {\n    justify-content: flex-end;\n  }\n  .header .header__icon {\n    display: none;\n  }\n  .header .header__burger {\n    display: block;\n  }\n}\n#footer {\n  width: 100%;\n  height: 70px;\n  background: #3f4750;\n}\n#footer .footer__container {\n  padding: 20px 11px;\n  display: flex;\n  text-align: center;\n  align-items: center;\n}\n#footer .roots-footer {\n  text-align: left;\n}\n#footer .footer__title {\n  margin: 0;\n  font-family: \"Lato\";\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 17px;\n  letter-spacing: 0.03em;\n  color: #9fa7b0;\n}\n#footer .social-footer {\n  display: flex;\n  margin: 0;\n  justify-content: end;\n  list-style: none;\n  gap: 24px;\n}\n#footer .social__footer-item,\n#footer .social__footer-item_blue {\n  fill: #9FA7B0;\n}\n#footer .social__footer-item:hover {\n  transition: 0.2s;\n  fill: #47CF34;\n}\n#footer .social__footer-item_blue:hover {\n  transition: 0.2s;\n  fill: #0088cc;\n}\n\n.row-container-faq {\n  margin-top: 130px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n}\n.row-container-faq .faq-string {\n  margin: 38px 0;\n}\n.row-container-faq .faq-string .faq-item {\n  display: flex;\n  margin: 0 auto;\n  text-align: center;\n  align-items: center;\n  justify-content: space-between;\n}\n.row-container-faq .faq-string .faq-item .faq__svg {\n  width: 10%;\n}\n.row-container-faq .faq-string .faq-item .faq__text {\n  font-family: \"Lato\";\n  font-weight: 400;\n  font-size: 18px;\n  line-height: 22px;\n  text-align: left;\n  margin: 0;\n}\n.row-container-faq .faq-string .col-9 a {\n  color: #282c37;\n  text-decoration: none;\n}\n.row-container-faq .faq-string .col-9 a:hover {\n  color: #5391dc;\n  transition: 0.2s;\n  text-decoration: underline;\n}\n\n@media (max-width: 992px) {\n  .row-container-faq {\n    margin-top: 60px;\n  }\n  .service__blocks {\n    background: red;\n    padding: 0 15px;\n  }\n}\n@media (max-width: 768px) {\n  .row-container-faq {\n    margin-top: 120px;\n  }\n  .col-6 {\n    width: 100%;\n    margin: 40px 0 0;\n  }\n  .section__title {\n    background: none;\n  }\n}\n.services__title {\n  height: 200px;\n  position: relative;\n}\n.services__title-text {\n  font-weight: 700;\n  font-size: 30px;\n  line-height: 37px;\n  text-transform: uppercase;\n  margin-left: 50px;\n  padding-top: 130px;\n}\n.services__title-img-poly {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  z-index: -1;\n}\n.services__title-img-arrow {\n  position: absolute;\n  top: 0;\n  left: 90px;\n  z-index: -1;\n  width: 63%;\n  height: 85%;\n}\n.services__items {\n  margin-top: 36px;\n  justify-content: center;\n  margin-left: -7.5px;\n  margin-right: -7.5px;\n  padding-bottom: 58px;\n}\n.services__item {\n  background: #6ca7ef;\n  border-radius: 20px;\n  height: 249px;\n  margin: 7.5px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  padding: 45px;\n  text-decoration: none;\n  transition: 0.2s;\n}\n.services__item:hover {\n  background: #5391dc;\n  transition: 0.2s;\n}\n.services .col-sl-12,\n.services .col-md-6,\n.services .col-lg-4,\n.services .col-lg-8 {\n  padding: 0;\n}\n.services__item-text {\n  font-weight: 600;\n  font-size: 18px;\n  line-height: 22px;\n  text-align: center;\n  letter-spacing: 0.01em;\n  color: #ffffff;\n}\n.services__item-img {\n  height: 81px;\n}\n.services__item-img_startup {\n  height: 73px;\n}\n\n@media (min-width: 992px) {\n  .services__img-report_height {\n    height: 507px;\n  }\n  .services__img-idea_height {\n    height: 164px;\n  }\n  .services__img-search_height {\n    height: 328px;\n  }\n  .services__img-startup_height {\n    height: 328px;\n  }\n  .services__items {\n    display: flex;\n    justify-content: flex-end;\n  }\n  .item_up {\n    margin-top: -343px;\n  }\n  .services__item {\n    justify-content: center;\n  }\n  .services__item-text {\n    margin-top: 30px;\n  }\n  .services__img-idea_justify {\n    flex-direction: row;\n  }\n}\n@media (min-width: 1200px) {\n  .services__img-idea_justify .services__item-text {\n    display: inline-block;\n    width: 460px;\n    margin-left: 40px;\n  }\n}\n@media (max-width: 768px) {\n  .services__title-img-poly {\n    display: none;\n  }\n  .services__title-img-arrow {\n    display: none;\n  }\n  .services__title-text {\n    text-align: center;\n    padding-top: 80px;\n    margin-left: 0;\n  }\n  .services__title {\n    height: 140px;\n  }\n  .services__items {\n    padding-bottom: 34px;\n  }\n}\n.modal {\n  display: none;\n  position: fixed;\n  height: 100%;\n  width: 100%;\n  background-color: #fff;\n  top: 0;\n  left: 0;\n  justify-content: center;\n  align-items: center;\n}\n.modal .modal-content {\n  width: 292px;\n  border: none;\n  padding: 100px 0 20px 0;\n}\n.modal .modal__btn-close {\n  width: 24px;\n  height: 24px;\n  position: absolute;\n  top: 24px;\n  left: 28px;\n  cursor: pointer;\n}\n\n.modal_show {\n  display: flex;\n}\n\n.order {\n  width: 100%;\n}\n.order .form__title {\n  font-weight: 700;\n  font-size: 22px;\n  line-height: 26px;\n  letter-spacing: 0.03em;\n  text-transform: uppercase;\n  text-align: center;\n  margin-bottom: 34px;\n}\n.order__btn_width {\n  width: 100%;\n}\n.order__btn_send {\n  pointer-events: none;\n}\n.order__success {\n  font-weight: 700;\n  font-size: 18px;\n  line-height: 22px;\n  text-align: center;\n  color: #30b01e;\n  display: block;\n  height: 44px;\n  width: 200px;\n  margin: 36px auto 0;\n}\n.order__success-message {\n  font-weight: 700;\n  font-size: 18px;\n  line-height: 22px;\n  text-align: center;\n  color: #30b01e;\n  margin-top: 12px;\n}\n.order .sendBtn {\n  width: 100%;\n  color: #fff;\n  height: 48px;\n  background: #47cf34;\n  border-radius: 8px;\n  font-family: \"Montserrat\";\n  font-weight: 700;\n  font-size: 16px;\n  line-height: 20px;\n  text-align: center;\n  text-transform: uppercase;\n  color: #ffffff;\n}\n\n.input {\n  width: 100%;\n  font-size: 18px;\n  line-height: 22px;\n  padding: 14px 20px;\n  border: 1px solid #282c37;\n  border-radius: 8px;\n}\n.input_error {\n  border: 1px solid #cf4747;\n}\n.input:focus {\n  outline: 1px solid #282c37;\n}\n.input::placeholder {\n  color: #9fa7b0;\n  font-style: italic;\n}\n.input_multy {\n  height: 191px;\n}\n.input__message {\n  width: 100%;\n  height: 17px;\n  font-style: italic;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 17px;\n  color: #cf4747;\n  margin-bottom: 6px;\n  margin-left: 11px;\n}\n\n#service {\n  padding: 71px 164px 22px;\n  background: #e5e5e5;\n}\n#service .breadcrumb .breadcrumb-item {\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 16px;\n  color: #282c37;\n  position: relative;\n}\n#service .breadcrumb .breadcrumb-item a {\n  color: #9fa7b0;\n}\n#service .breadcrumb .bg-polygon {\n  position: absolute;\n  z-index: 0;\n  margin-top: 28px;\n  left: 140px;\n}\n#service .cube__img {\n  right: 0;\n  top: 20%;\n  width: 50%;\n  height: auto;\n  position: absolute;\n  z-index: 0;\n}\n@media (max-width: 991px) {\n  #service .bg-polygon {\n    display: none;\n  }\n  #service .cube__img {\n    display: none;\n  }\n}\n#service .container {\n  position: relative;\n  padding: 35px 0;\n}\n#service .container .trening_card {\n  padding: 41px 76px 39px 38px;\n  background: #fff;\n  box-shadow: 4px 4px 20px rgba(40, 44, 55, 0.2);\n  border-radius: 20px;\n  display: flex;\n  margin-bottom: 40px;\n  flex-wrap: wrap;\n}\n#service .container .trening_card .card__content .card__title {\n  font-family: \"Montserrat\";\n  font-weight: 700;\n  margin-bottom: 0;\n  font-size: 30px;\n  line-height: 37px;\n  color: #282c37;\n  padding-bottom: 30px;\n}\n#service .container .trening_card .card__content .card__context {\n  padding-bottom: 4px;\n  margin-bottom: 0;\n  font-family: \"Lato\";\n  font-weight: 400;\n  font-size: 18px;\n  line-height: 22px;\n  color: #282c37;\n}\n#service .container .trening_card .card__content .card__text {\n  margin-bottom: 0;\n  padding-bottom: 32px;\n  font-family: \"Lato\";\n  font-weight: 400;\n  font-size: 18px;\n  line-height: 22px;\n  color: #282c37;\n}\n#service .container .trening_card .card__content .card__btn {\n  height: 48px;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  display: flex;\n  padding: 0 23px;\n  border-radius: 8px;\n  background: #287ee7;\n}\n#service .container .trening_card .card__content .card__btn a {\n  display: flex;\n  align-items: center;\n  width: 100%;\n  justify-content: space-between;\n  font-family: \"Montserrat\";\n  font-weight: 700;\n  font-size: 16px;\n  line-height: 20px;\n  text-align: center;\n  text-transform: uppercase;\n  color: #ffffff;\n}\n#service .container .trening_card .card__content .card__btn:hover {\n  transition: 0.2s;\n  background: #4b9afb;\n}\n#service .container .trening_card .card__right__side {\n  padding: 15px 28px;\n}\n#service .container .trening_card .card__right__side .content__block {\n  display: flex;\n  flex-direction: wrap;\n  gap: 41px;\n}\n#service .container .trening_card .card__right__side .content__block .cube__content {\n  height: 25px;\n}\n#service .container .trening_card .card__right__side .content__block .card-text-side {\n  font-family: \"Lato\";\n  font-weight: 400;\n  font-size: 17px;\n  line-height: 20px;\n  color: #282c37;\n}\n#service .container .trening_card:nth-child(2) {\n  padding: 38px 76px 39px 38px;\n}\n#service .container .trening_card:nth-child(2) .card__content .card__title {\n  width: 90%;\n  padding-bottom: 24px;\n}\n#service .container .trening_card:nth-child(2) .card__content .card__context {\n  padding-bottom: 6px;\n}\n#service .container .trening_card:nth-child(3) {\n  padding: 38px 76px 39px 38px;\n}\n#service .container .trening_card:nth-child(3) .card__content .card__title {\n  padding-bottom: 26px;\n}\n#service .container .trening_card:nth-child(3) .card__content .card__context {\n  padding-bottom: 5px;\n}\n\n@media (max-width: 991px) {\n  #service {\n    padding: 50px 50px;\n  }\n  #service .container {\n    padding-top: 20px;\n  }\n}\n@media (max-width: 591px) {\n  #service {\n    padding: 50px 50px;\n  }\n  #service .breadcrumb .breadcrumb-item {\n    margin-bottom: 20px;\n    font-size: 16px;\n    line-height: 14px;\n  }\n  #service .container .trening_card {\n    padding: 2px 18px;\n    background: #fff;\n    box-shadow: 4px 4px 20px rgba(40, 44, 55, 0.2);\n    border-radius: 20px;\n    display: flex;\n    margin-bottom: 40px;\n  }\n  #service .container .trening_card:nth-child(2) {\n    padding: 2px 18px;\n  }\n  #service .container .trening_card:nth-child(3) {\n    padding: 2px 18px;\n  }\n}\n#training-page {\n  padding: 71px 164px 22px;\n  background: #e5e5e5;\n}\n#training-page .breadcrumb .breadcrumb-item {\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 16px;\n  color: #282c37;\n  position: relative;\n}\n#training-page .breadcrumb .breadcrumb-item a {\n  color: #9fa7b0;\n}\n#training-page .breadcrumb .bg-polygon {\n  position: absolute;\n  z-index: 0;\n  margin-top: 28px;\n  left: 150px;\n}\n#training-page .cube__img {\n  right: 0;\n  top: 20%;\n  width: 50%;\n  height: auto;\n  position: absolute;\n  z-index: 0;\n}\n@media (max-width: 991px) {\n  #training-page .bg-polygon {\n    display: none;\n  }\n  #training-page .cube__img {\n    display: none;\n  }\n  #training-page .cubes-img {\n    display: none;\n  }\n}\n#training-page .container {\n  position: relative;\n  padding: 27px 0 94px;\n}\n#training-page .container .page-title {\n  width: 90%;\n}\n#training-page .container .page-title .title-text {\n  font-family: \"Montserrat\";\n  font-style: normal;\n  font-weight: 700;\n  font-size: 44px;\n  line-height: 54px;\n  color: #282c37;\n}\n#training-page .container .page-title .page-context {\n  padding-top: 11px;\n  font-family: \"Lato\";\n  font-weight: 400;\n  font-size: 18px;\n  line-height: 22px;\n  color: #282c37;\n  margin-bottom: 4px;\n}\n#training-page .container .page-title .page-text {\n  font-family: \"Lato\";\n  font-weight: 400;\n  font-size: 18px;\n  line-height: 22px;\n  color: #282c37;\n}\n#training-page .container .page-title .page-items {\n  padding: 6px 34px;\n}\n#training-page .container .page-title .page-items .content__block {\n  margin-bottom: 8px;\n  align-items: center;\n  text-align: left;\n  display: flex;\n  gap: 46px;\n  padding: 4px 8px;\n}\n#training-page .container .page-title .page-items .content__block:nth-child(2) {\n  margin-bottom: 4px;\n}\n#training-page .container .page-title .page-items .cube__content {\n  height: 24px;\n}\n#training-page .container .page-title .page-items .card-text-side {\n  margin-bottom: 0;\n  font-family: \"Lato\";\n  font-weight: 400;\n  font-size: 17px;\n  line-height: 20px;\n  color: #282c37;\n}\n#training-page .container .page-title .page-items .card__btn {\n  margin: 44px 0 0 8px;\n  padding: 12px 23px 12px 88px;\n  height: 48px;\n  background: #30b01e;\n  border-radius: 8px;\n}\n#training-page .container .page-title .page-items .card__btn a {\n  font-family: \"Montserrat\";\n  font-style: normal;\n  font-weight: 700;\n  font-size: 16px;\n  line-height: 20px;\n  text-align: left;\n  text-transform: uppercase;\n  color: #ffffff;\n}\n#training-page .container .page-title .page-items .card__btn a img {\n  margin-left: 36px;\n}\n#training-page .container .page-title .page-items .card__btn:hover {\n  transition: 0.2s;\n  background: #47cf34;\n}\n#training-page .container .page-second-title {\n  margin-top: 156px;\n  width: 90%;\n  padding-left: 2px;\n}\n#training-page .container .page-second-title .title-text {\n  font-family: \"Montserrat\";\n  font-style: normal;\n  font-weight: 700;\n  font-size: 30px;\n  line-height: 37px;\n  color: #282c37;\n}\n#training-page .container .page-second-title .page-context {\n  padding-top: 39px;\n  font-family: \"Montserrat\";\n  font-style: normal;\n  font-weight: 700;\n  font-size: 20px;\n  line-height: 24px;\n  color: #282c37;\n}\n#training-page .container .page-second-title .page-items {\n  padding: 6px 34px;\n}\n#training-page .container .page-second-title .page-items .content__block {\n  margin-bottom: 8px;\n  align-items: center;\n  text-align: left;\n  display: flex;\n  gap: 19px;\n  padding: 4px 6px;\n}\n#training-page .container .page-second-title .page-items .content__block:nth-child(2) {\n  margin-bottom: 8px;\n}\n#training-page .container .page-second-title .page-items .cube__content {\n  height: 11px;\n}\n#training-page .container .page-second-title .page-items .card-text-side {\n  margin-bottom: 0;\n  font-family: \"Lato\";\n  font-weight: 400;\n  font-size: 17px;\n  line-height: 20px;\n  color: #282c37;\n}\n#training-page .container .page-third-title {\n  width: 100%;\n  margin-top: 28px;\n}\n#training-page .container .page-third-title .title-text {\n  font-family: \"Montserrat\";\n  font-weight: 700;\n  font-size: 20px;\n  line-height: 24px;\n  color: #282c37;\n}\n#training-page .container .page-third-title .page-items {\n  padding: 17px 36px;\n}\n#training-page .container .page-third-title .page-items .content__block {\n  margin-bottom: 17px;\n  align-items: center;\n  text-align: left;\n  display: flex;\n  gap: 19px;\n  flex-wrap: nowrap;\n  padding: 0 6px;\n}\n#training-page .container .page-third-title .page-items .cube__content {\n  height: 11px;\n}\n#training-page .container .page-third-title .page-items .card-text-side {\n  text-align: left;\n  font-family: \"Lato\";\n  align-items: center;\n  font-weight: 400;\n  font-size: 17px;\n  line-height: 20px;\n  color: #282c37;\n}\n#training-page .container .page-fourth-title {\n  width: 100%;\n  margin-top: 28px;\n}\n#training-page .container .page-fourth-title .title-text {\n  font-family: \"Montserrat\";\n  font-weight: 700;\n  font-size: 20px;\n  line-height: 24px;\n  color: #282c37;\n}\n#training-page .container .page-fourth-title .page-items {\n  padding: 17px 36px;\n}\n#training-page .container .page-fourth-title .page-items .content__block {\n  margin-bottom: 17px;\n  align-items: center;\n  text-align: left;\n  display: flex;\n  gap: 19px;\n  flex-wrap: nowrap;\n  padding: 0 6px;\n}\n#training-page .container .page-fourth-title .page-items .cube__content {\n  height: 11px;\n}\n#training-page .container .page-fourth-title .page-items .card-text-side {\n  text-align: left;\n  font-family: \"Lato\";\n  align-items: center;\n  font-weight: 400;\n  font-size: 17px;\n  line-height: 20px;\n  color: #282c37;\n}\n#training-page .container .page-five-title {\n  width: 100%;\n  margin-top: 28px;\n}\n#training-page .container .page-five-title .cubes-img {\n  right: -160px;\n  top: 47%;\n  height: auto;\n  position: absolute;\n  z-index: 0;\n}\n#training-page .container .page-five-title .title-text {\n  font-family: \"Montserrat\";\n  font-weight: 700;\n  font-size: 20px;\n  line-height: 24px;\n  color: #282c37;\n}\n#training-page .container .page-five-title .page-items {\n  padding: 17px 36px;\n}\n#training-page .container .page-five-title .page-items .content__block {\n  margin-bottom: 17px;\n  align-items: center;\n  text-align: left;\n  display: flex;\n  gap: 19px;\n  flex-wrap: nowrap;\n  padding: 0 6px;\n}\n#training-page .container .page-five-title .page-items .cube__content {\n  height: 11px;\n}\n#training-page .container .page-five-title .page-items .card-text-side {\n  text-align: left;\n  font-family: \"Lato\";\n  align-items: center;\n  font-weight: 400;\n  font-size: 17px;\n  line-height: 20px;\n  color: #282c37;\n}\n#training-page .container .page-six-title {\n  width: 100%;\n  margin-top: 28px;\n}\n#training-page .container .page-six-title .title-text {\n  font-family: \"Montserrat\";\n  font-weight: 700;\n  font-size: 20px;\n  line-height: 24px;\n  color: #282c37;\n}\n#training-page .container .page-six-title .page-items {\n  padding: 17px 36px;\n}\n#training-page .container .page-six-title .page-items .content__block {\n  margin-bottom: 17px;\n  align-items: center;\n  text-align: left;\n  display: flex;\n  gap: 19px;\n  flex-wrap: nowrap;\n  padding: 0 6px;\n}\n#training-page .container .page-six-title .page-items .card-text-side {\n  font-family: \"Lato\";\n  font-weight: 400;\n  font-size: 17px;\n  line-height: 20px;\n  color: #282c37;\n}\n#training-page .container .page-seven-title {\n  width: 100%;\n  margin-top: 28px;\n}\n#training-page .container .page-seven-title .title-text {\n  font-family: \"Montserrat\";\n  font-weight: 700;\n  font-size: 20px;\n  line-height: 24px;\n  color: #282c37;\n}\n#training-page .container .page-seven-title .page-items {\n  padding: 17px 36px;\n}\n#training-page .container .page-seven-title .page-items .content__block {\n  margin-bottom: 17px;\n  align-items: left;\n  text-align: left;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  padding: 0 6px;\n}\n#training-page .container .page-seven-title .page-items .card-text-side {\n  font-family: \"Lato\";\n  font-weight: 400;\n  font-size: 17px;\n  line-height: 20px;\n  color: #282c37;\n}\n#training-page .container .page-eight-title {\n  width: 100%;\n  margin-top: 28px;\n}\n#training-page .container .page-eight-title .title-text {\n  font-family: \"Montserrat\";\n  font-weight: 700;\n  font-size: 20px;\n  line-height: 24px;\n  color: #282c37;\n}\n#training-page .container .page-eight-title .page-items {\n  padding: 17px 36px;\n}\n#training-page .container .page-eight-title .page-items .content__block {\n  margin-bottom: 17px;\n  align-items: center;\n  text-align: left;\n  display: flex;\n  gap: 19px;\n  flex-wrap: nowrap;\n  padding: 0 6px;\n}\n#training-page .container .page-eight-title .page-items .cube__content {\n  height: 11px;\n}\n#training-page .container .page-eight-title .page-items .card-text-side {\n  text-align: left;\n  font-family: \"Lato\";\n  align-items: center;\n  font-weight: 400;\n  font-size: 17px;\n  line-height: 20px;\n  color: #282c37;\n}\n#training-page .container .page-nine-title {\n  width: 100%;\n  margin-top: 28px;\n}\n#training-page .container .page-nine-title .title-text {\n  font-family: \"Montserrat\";\n  font-weight: 700;\n  font-size: 20px;\n  line-height: 24px;\n  color: #282c37;\n}\n#training-page .container .page-nine-title .page-items {\n  padding: 17px 36px;\n}\n#training-page .container .page-nine-title .page-items .content__block {\n  margin-bottom: 17px;\n  align-items: center;\n  text-align: left;\n  display: flex;\n  gap: 19px;\n  flex-wrap: nowrap;\n  padding: 0 6px;\n}\n#training-page .container .page-nine-title .page-items .cube__content {\n  height: 11px;\n}\n#training-page .container .page-nine-title .page-items .card-text-side {\n  text-align: left;\n  font-family: \"Lato\";\n  align-items: center;\n  font-weight: 400;\n  font-size: 17px;\n  line-height: 20px;\n  color: #282c37;\n}\n#training-page .container .modal_window {\n  margin: 0 auto;\n}\n#training-page .container .modal-content {\n  margin: auto;\n  margin-top: 132px;\n  padding: 78px 56px;\n  border-radius: 20px;\n  background: #ffffff;\n  box-shadow: 4px 4px 20px rgba(40, 44, 55, 0.2);\n  align-items: center;\n}\n#training-page .container .modal-content .input {\n  background: #ffffff;\n  border: 1px solid #9fa7b0;\n  border-radius: 8px;\n  width: 100%;\n}\n#training-page .container .modal-content .sendBtn {\n  width: 100%;\n}\n@media (max-width: 878px) {\n  #training-page .container .modal-content {\n    margin-top: 30px;\n    padding: 40px 20px;\n  }\n}\n\n@media (max-width: 991px) {\n  #training-page {\n    padding: 50px 50px;\n  }\n  #training-page .container {\n    padding-top: 20px;\n  }\n  #training-page .container .page-title .title-text {\n    font-size: 20px;\n    line-height: 24px;\n  }\n  #training-page .container .page-title .page-context {\n    font-size: 12px;\n    line-height: 14px;\n    margin-bottom: 14px;\n  }\n  #training-page .container .page-title .page-text {\n    font-size: 12px;\n    line-height: 12px;\n  }\n  #training-page .container .page-second-title {\n    margin-top: 76px;\n  }\n  #training-page .container .page-second-title .title-text {\n    font-size: 20px;\n    line-height: 24px;\n  }\n  #training-page .container .page-second-title .page-context {\n    font-size: 12px;\n    line-height: 14px;\n    padding-top: 10px;\n    margin-bottom: 14px;\n  }\n  #training-page .container .page-second-title .page-text {\n    font-size: 12px;\n    line-height: 12px;\n  }\n  #training-page .container .page-second-title .page-items .card-text-side {\n    font-size: 13px;\n    line-height: 16px;\n  }\n  #training-page .container .page-third-title {\n    margin-top: 16px;\n  }\n  #training-page .container .page-third-title .title-text {\n    font-size: 20px;\n    line-height: 24px;\n  }\n  #training-page .container .page-third-title .page-context {\n    font-size: 12px;\n    line-height: 14px;\n    padding-top: 10px;\n    margin-bottom: 14px;\n  }\n  #training-page .container .page-third-title .page-text {\n    font-size: 12px;\n    line-height: 12px;\n  }\n  #training-page .container .page-third-title .page-items {\n    padding: 17px 20px;\n  }\n  #training-page .container .page-third-title .page-items .card-text-side {\n    font-size: 13px;\n    line-height: 16px;\n  }\n  #training-page .container .page-fourth-title {\n    margin-top: 16px;\n  }\n  #training-page .container .page-fourth-title .title-text {\n    font-size: 20px;\n    line-height: 24px;\n  }\n  #training-page .container .page-fourth-title .page-context {\n    font-size: 12px;\n    line-height: 14px;\n    padding-top: 10px;\n    margin-bottom: 14px;\n  }\n  #training-page .container .page-fourth-title .page-text {\n    font-size: 12px;\n    line-height: 12px;\n  }\n  #training-page .container .page-fourth-title .page-items {\n    padding: 17px 20px;\n  }\n  #training-page .container .page-fourth-title .page-items .card-text-side {\n    font-size: 13px;\n    line-height: 16px;\n  }\n  #training-page .container .page-five-title {\n    margin-top: 16px;\n  }\n  #training-page .container .page-five-title .title-text {\n    font-size: 20px;\n    line-height: 24px;\n  }\n  #training-page .container .page-five-title .page-context {\n    font-size: 12px;\n    line-height: 14px;\n    padding-top: 10px;\n    margin-bottom: 14px;\n  }\n  #training-page .container .page-five-title .page-text {\n    font-size: 12px;\n    line-height: 12px;\n  }\n  #training-page .container .page-five-title .page-items {\n    padding: 17px 20px;\n  }\n  #training-page .container .page-five-title .page-items .card-text-side {\n    font-size: 13px;\n    line-height: 16px;\n  }\n  #training-page .container .page-six-title {\n    margin-top: 16px;\n  }\n  #training-page .container .page-six-title .title-text {\n    font-size: 20px;\n    line-height: 24px;\n  }\n  #training-page .container .page-six-title .page-context {\n    font-size: 12px;\n    line-height: 14px;\n    padding-top: 10px;\n    margin-bottom: 14px;\n  }\n  #training-page .container .page-six-title .page-text {\n    font-size: 12px;\n    line-height: 12px;\n  }\n  #training-page .container .page-six-title .page-items {\n    padding: 17px 20px;\n  }\n  #training-page .container .page-six-title .page-items .card-text-side {\n    font-size: 13px;\n    line-height: 16px;\n  }\n  #training-page .container .page-seven-title {\n    margin-top: 16px;\n  }\n  #training-page .container .page-seven-title .title-text {\n    font-size: 20px;\n    line-height: 24px;\n  }\n  #training-page .container .page-seven-title .page-context {\n    font-size: 12px;\n    line-height: 14px;\n    padding-top: 10px;\n    margin-bottom: 14px;\n  }\n  #training-page .container .page-seven-title .page-text {\n    font-size: 12px;\n    line-height: 12px;\n  }\n  #training-page .container .page-seven-title .page-items {\n    padding: 17px 20px;\n  }\n  #training-page .container .page-seven-title .page-items .card-text-side {\n    font-size: 13px;\n    line-height: 16px;\n  }\n  #training-page .container .page-eight-title {\n    margin-top: 16px;\n  }\n  #training-page .container .page-eight-title .title-text {\n    font-size: 20px;\n    line-height: 24px;\n  }\n  #training-page .container .page-eight-title .page-context {\n    font-size: 12px;\n    line-height: 14px;\n    padding-top: 10px;\n    margin-bottom: 14px;\n  }\n  #training-page .container .page-eight-title .page-text {\n    font-size: 12px;\n    line-height: 12px;\n  }\n  #training-page .container .page-eight-title .page-items {\n    padding: 17px 20px;\n  }\n  #training-page .container .page-eight-title .page-items .card-text-side {\n    font-size: 13px;\n    line-height: 16px;\n  }\n  #training-page .container .page-nine-title {\n    margin-top: 16px;\n  }\n  #training-page .container .page-nine-title .title-text {\n    font-size: 20px;\n    line-height: 24px;\n  }\n  #training-page .container .page-nine-title .page-context {\n    font-size: 12px;\n    line-height: 14px;\n    padding-top: 10px;\n    margin-bottom: 14px;\n  }\n  #training-page .container .page-nine-title .page-text {\n    font-size: 12px;\n    line-height: 12px;\n  }\n  #training-page .container .page-nine-title .page-items {\n    padding: 17px 20px;\n  }\n  #training-page .container .page-nine-title .page-items .card-text-side {\n    font-size: 13px;\n    line-height: 16px;\n  }\n}\n@media (max-width: 591px) {\n  #training-page {\n    padding: 50px 50px;\n  }\n  #training-page .breadcrumb .breadcrumb-item {\n    margin-bottom: 20px;\n    font-size: 16px;\n    line-height: 14px;\n  }\n  #training-page .container .page-title .page-items .card__btn {\n    margin: 44px 0 0 8px;\n    padding: 0 40px;\n    background: #30b01e;\n    border-radius: 8px;\n    display: flex;\n    align-items: center;\n    flex-wrap: wrap;\n  }\n  #training-page .container .page-title .page-items .card__btn a {\n    font-size: 11px;\n  }\n  #training-page .container .page-title .page-items .card__btn a img {\n    margin-left: 10px;\n  }\n}\n@media (max-width: 420) {\n  #training-page .container .page-title .page-items .card__btn {\n    background: #30b01e;\n    border-radius: 8px;\n  }\n  #training-page .container .page-title .page-items .card__btn a img {\n    margin-left: 0px;\n  }\n}\n#service-page {\n  padding: 71px 164px 22px;\n  background: #e5e5e5;\n}\n#service-page .breadcrumb .breadcrumb-item {\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 16px;\n  color: #282c37;\n  position: relative;\n}\n#service-page .breadcrumb .breadcrumb-item a {\n  color: #9fa7b0;\n}\n#service-page .breadcrumb .bg-polygon {\n  position: absolute;\n  z-index: 0;\n  margin-top: 28px;\n  left: 150px;\n}\n#service-page .cube__img {\n  right: 0;\n  top: 20%;\n  width: 50%;\n  height: auto;\n  position: absolute;\n  z-index: 0;\n}\n@media (max-width: 991px) {\n  #service-page .bg-polygon {\n    display: none;\n  }\n  #service-page .cube__img {\n    display: none;\n  }\n}\n#service-page .container {\n  position: relative;\n  padding: 27px 0 94px;\n}\n#service-page .container .page-title {\n  width: 90%;\n}\n#service-page .container .page-title .title-text {\n  font-family: \"Montserrat\";\n  font-style: normal;\n  font-weight: 700;\n  font-size: 44px;\n  line-height: 54px;\n  color: #282c37;\n}\n#service-page .container .page-title .page-items {\n  padding: 33px 34px;\n}\n#service-page .container .page-title .page-items .content__block {\n  margin-bottom: 17px;\n  align-items: center;\n  text-align: left;\n  display: flex;\n  gap: 41px;\n  padding: 4px 8px;\n}\n#service-page .container .page-title .page-items .cube__content {\n  height: 24px;\n}\n#service-page .container .page-title .page-items .card-text-side {\n  margin-bottom: 0;\n  font-family: \"Lato\";\n  font-weight: 400;\n  font-size: 17px;\n  line-height: 20px;\n  color: #282c37;\n}\n#service-page .container .about-services {\n  margin: 70px 0;\n}\n#service-page .container .about-services .about__title {\n  font-family: \"Montserrat\";\n  font-weight: 700;\n  font-size: 30px;\n  line-height: 37px;\n  color: #282c37;\n}\n#service-page .container .about-services .about__content {\n  margin: 36px auto;\n  display: flex;\n  flex-direction: column;\n}\n#service-page .container .about-services .about__content .about__text {\n  margin-bottom: 22px;\n  font-family: \"Lato\";\n  font-weight: 400;\n  font-size: 18px;\n  line-height: 22px;\n  color: #000000;\n}\n#service-page .container .about-services .about__content .about__text .text_link {\n  color: #287ee7;\n}\n#service-page .container .about-services .marketing-plan {\n  text-align: left;\n  width: 100%;\n  align-items: center;\n}\n#service-page .container .about-services .marketing-plan .content__block {\n  padding-left: 100px;\n  display: flex;\n  width: auto;\n  align-items: center;\n  flex-wrap: nowrap;\n  margin-bottom: 16px;\n}\n#service-page .container .about-services .marketing-plan .content__block .cube__content {\n  height: 11px;\n  margin-right: 18px;\n}\n#service-page .container .modal-content {\n  margin: auto;\n  margin-top: 132px;\n  padding: 78px 56px;\n  border-radius: 20px;\n  background: #ffffff;\n  box-shadow: 4px 4px 20px rgba(40, 44, 55, 0.2);\n  align-items: center;\n}\n#service-page .container .modal-content .input {\n  background: #ffffff;\n  border: 1px solid #9fa7b0;\n  border-radius: 8px;\n  width: 100%;\n}\n#service-page .container .modal-content .sendBtn {\n  width: 100%;\n}\n@media (max-width: 878px) {\n  #service-page .container .modal-content {\n    margin-top: 80px;\n    padding: 40px 20px;\n  }\n}\n\n@media (max-width: 991px) {\n  #service-page {\n    padding: 50px 50px;\n  }\n  #service-page .container {\n    padding-top: 20px;\n  }\n  #service-page .container .page-title .title-text {\n    font-size: 20px;\n    line-height: 24px;\n  }\n  #service-page .container .page-title .page-items .card-text-side {\n    font-size: 15px;\n    line-height: 18px;\n  }\n  #service-page .container .about-services {\n    margin: 30px 0;\n  }\n  #service-page .container .about-services .about__title {\n    font-size: 20px;\n    line-height: 24px;\n  }\n  #service-page .container .about-services .about__content .about__text {\n    margin-bottom: 20px;\n    font-size: 16px;\n    line-height: 18px;\n  }\n  #service-page .container .about-services .marketing-plan .content__block {\n    padding-left: 40px;\n    margin-bottom: 10px;\n  }\n}\n@media (max-width: 591px) {\n  #service-page .breadcrumb .breadcrumb-item {\n    margin-bottom: 20px;\n    font-size: 16px;\n    line-height: 24px;\n  }\n  #service-page .container .order .sendBtn {\n    font-size: 11px;\n    line-height: 12px;\n  }\n}\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  border: none;\n  scroll-behavior: smooth;\n}\n\na {\n  text-decoration: none;\n}\n\n.container {\n  align-items: center;\n  justify-content: center;\n}", "",{"version":3,"sources":["webpack://./src/styles/header.scss","webpack://./src/index.scss","webpack://./src/styles/footer.scss","webpack://./src/styles/faq-section.scss","webpack://./src/styles/service-section.scss","webpack://./src/styles/modal.scss","webpack://./src/styles/trening.scss","webpack://./src/styles/training-page.scss","webpack://./src/styles/service.scss"],"names":[],"mappings":"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upBF;EMtpBE;IACE,iBAAA;ENwpBJ;EMtpBM;IACE,eAAA;IACA,iBAAA;ENwpBR;EMtpBM;IACE,eAAA;IACA,iBAAA;IACA,mBAAA;ENwpBR;EMtpBM;IACE,eAAA;IACA,iBAAA;ENwpBR;EMrpBI;IACE,gBAAA;ENupBN;EMtpBM;IACE,eAAA;IACA,iBAAA;ENwpBR;EMtpBM;IACE,eAAA;IACA,iBAAA;IACA,iBAAA;IACA,mBAAA;ENwpBR;EMtpBM;IACE,eAAA;IACA,iBAAA;ENwpBR;EMtpBM;IACE,eAAA;IACA,iBAAA;ENwpBR;EMrpBI;IACE,gBAAA;ENupBN;EMtpBM;IACE,eAAA;IACA,iBAAA;ENwpBR;EMtpBM;IACE,eAAA;IACA,iBAAA;IACA,iBAAA;IACA,mBAAA;ENwpBR;EMtpBM;IACE,eAAA;IACA,iBAAA;ENwpBR;EMtpBM;IACI,kBAAA;ENwpBV;EMvpBQ;IACE,eAAA;IACA,iBAAA;ENypBV;EMrpBI;IACE,gBAAA;ENupBN;EMtpBM;IACE,eAAA;IACA,iBAAA;ENwpBR;EMtpBM;IACE,eAAA;IACA,iBAAA;IACA,iBAAA;IACA,mBAAA;ENwpBR;EMtpBM;IACE,eAAA;IACA,iBAAA;ENwpBR;EMtpBM;IACI,kBAAA;ENwpBV;EMvpBQ;IACE,eAAA;IACA,iBAAA;ENypBV;EMrpBI;IACE,gBAAA;ENupBN;EMtpBM;IACE,eAAA;IACA,iBAAA;ENwpBR;EMtpBM;IACE,eAAA;IACA,iBAAA;IACA,iBAAA;IACA,mBAAA;ENwpBR;EMtpBM;IACE,eAAA;IACA,iBAAA;ENwpBR;EMtpBM;IACI,kBAAA;ENwpBV;EMvpBQ;IACE,eAAA;IACA,iBAAA;ENypBV;EMrpBI;IACE,gBAAA;ENupBN;EMtpBM;IACE,eAAA;IACA,iBAAA;ENwpBR;EMtpBM;IACE,eAAA;IACA,iBAAA;IACA,iBAAA;IACA,mBAAA;ENwpBR;EMtpBM;IACE,eAAA;IACA,iBAAA;ENwpBR;EMtpBM;IACI,kBAAA;ENwpBV;EMvpBQ;IACE,eAAA;IACA,iBAAA;ENypBV;EMrpBI;IACE,gBAAA;E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","sourcesContent":[".header {\r\n  width: 100%;\r\n  height: 70px;\r\n  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px 0px;\r\n\r\n  .header__img {\r\n    width: 133px;\r\n    height: 29px;\r\n  }\r\n\r\n  .header__list {\r\n    height: 100%;\r\n    list-style-type: none;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    margin-bottom: 0;\r\n    padding: 0;\r\n  }\r\n\r\n  .header__list-item {\r\n    font-weight: 500;\r\n    font-size: 14px;\r\n    line-height: 17px;\r\n    text-align: center;\r\n    letter-spacing: 0.03em;\r\n    text-transform: uppercase;\r\n    text-decoration: none;\r\n    font-family: \"Lato\";\r\n    color: #282c37;\r\n    cursor: pointer;\r\n  }\r\n  .header__list-item:hover {\r\n    color: #282c37;\r\n    font-weight: 600;\r\n  }\r\n  .header__icons {\r\n    display: flex;\r\n    justify-content: flex-end;\r\n  }\r\n\r\n  .header__icon {\r\n    width: 24px;\r\n    height: 24px;\r\n    margin-left: 24px;\r\n    transition: 0.2s;\r\n    cursor: pointer;\r\n  }\r\n  .header__icon:hover .icon_color {\r\n    fill: #47cf34;\r\n    transition: 0.2s;\r\n  }\r\n  .header__icon:hover .icon_color_blue {\r\n    fill: #0088cc;\r\n    transition: 0.2s;\r\n  }\r\n\r\n  .header__burger {\r\n    display: none;\r\n    cursor: pointer;\r\n  }\r\n}\r\n.burger {\r\n  display: flex;\r\n  height: 100%;\r\n  width: 100%;\r\n  background-color: #fff;\r\n  position: fixed;\r\n  top: 0;\r\n  right: -100%;\r\n  z-index: 4;\r\n  justify-content: center;\r\n  align-items: center;\r\n  transition: all 0.7s ease 0s;\r\n  overflow: auto;\r\n}\r\n.burger__contant {\r\n  width: 152px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n.burger__logo {\r\n  width: 64px;\r\n  height: 68px;\r\n  margin-bottom: 80px;\r\n}\r\n.burger__link {\r\n  font-weight: 500;\r\n  font-size: 16px;\r\n  line-height: 19px;\r\n  letter-spacing: 0.03em;\r\n  text-transform: uppercase;\r\n  text-decoration: none;\r\n  font-family: \"Lato\";\r\n  color: #282c37;\r\n  margin-bottom: 45px;\r\n  .burger__link_margin {\r\n    margin-bottom: 116px;\r\n  }\r\n}\r\n.burger__btn_close {\r\n  width: 24px;\r\n  height: 24px;\r\n  position: absolute;\r\n  top: 24px;\r\n  left: 28px;\r\n  cursor: pointer;\r\n}\r\n.burger__icons {\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n.burger_show {\r\n  display: flex;\r\n  right: 0;\r\n}\r\n\r\n@media (max-width: 991px) {\r\n  .header {\r\n    .header__icons {\r\n      justify-content: space-between;\r\n    }\r\n    .header__icon {\r\n      margin-left: 0;\r\n    }\r\n  }\r\n}\r\n\r\n@media (max-width: 992px) {\r\n  .header {\r\n    .header__list {\r\n      display: none;\r\n      background: red;\r\n    }\r\n    .header__icons {\r\n      justify-content: flex-end;\r\n    }\r\n    .header__icon {\r\n      display: none;\r\n    }\r\n    .header__burger {\r\n      display: block;\r\n    }\r\n  }\r\n}\r\n","@import url(\"https://fonts.googleapis.com/css2?family=Lato&family=Montserrat:wght@700&family=Roboto&display=swap\");\r\n@import \"./styles/header.scss\";\r\n@import \"./styles//footer.scss\";\r\n@import \"./styles/faq-section.scss\";\r\n@import \"./styles/service-section.scss\";\r\n@import \"./styles/modal.scss\";\r\n@import \"./styles/trening.scss\";\r\n@import \"./styles/training-page.scss\";\r\n@import \"./styles/service.scss\";\r\n@import url(./styles/font-lato.scss);\r\n@import url(./styles/main.scss);\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  border: none;\r\n  scroll-behavior: smooth;\r\n}\r\na {\r\n  text-decoration: none;\r\n}\r\n.container {\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n","#footer {\r\n  width: 100%;\r\n  height: 70px;\r\n  background: #3f4750;\r\n\r\n.footer__container {\r\n  padding: 20px 11px;\r\n  display: flex;\r\n  text-align: center;\r\n  align-items: center;\r\n}\r\n.roots-footer {\r\n  text-align: left;\r\n}\r\n.footer__title {\r\n  margin: 0;\r\n  font-family: \"Lato\";\r\n  font-weight: 400;\r\n  font-size: 14px;\r\n  line-height: 17px;\r\n  letter-spacing: 0.03em;\r\n  color: #9fa7b0;\r\n}\r\n.social-footer {\r\n  display: flex;\r\n  margin: 0;\r\n  justify-content: end;\r\n  list-style: none;\r\n  gap: 24px;\r\n}\r\n.social__footer-item,\r\n.social__footer-item_blue{\r\n  fill: #9FA7B0;\r\n}\r\n.social__footer-item:hover{\r\n  transition: 0.2s;\r\n  fill: #47CF34;\r\n}\r\n.social__footer-item_blue:hover{\r\n  transition: 0.2s;\r\n  fill: #0088cc;\r\n}\r\n}",".row-container-faq {\r\n  margin-top: 130px;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  flex-wrap: wrap;\r\n  .faq-string {\r\n    margin: 38px 0;\r\n    .faq-item {\r\n      display: flex;\r\n      margin: 0 auto;\r\n      text-align: center;\r\n      align-items: center;\r\n      justify-content: space-between;\r\n      .faq__svg {\r\n        width: 10%;\r\n      }\r\n      .faq__text {\r\n        font-family: \"Lato\";\r\n        font-weight: 400;\r\n        font-size: 18px;\r\n        line-height: 22px;\r\n        text-align: left;\r\n        margin: 0;\r\n      }\r\n    }\r\n    .col-9 a {\r\n      color: #282c37;\r\n      text-decoration: none;\r\n    }\r\n    .col-9 a:hover {\r\n      color: #5391dc;\r\n      transition: 0.2s;\r\n      text-decoration: underline;\r\n    }\r\n  }\r\n}\r\n@media (max-width: 992px) {\r\n  .row-container-faq {\r\n    margin-top: 60px;\r\n  }\r\n  .service__blocks {\r\n    background: red;\r\n    padding: 0 15px;\r\n  }\r\n}\r\n@media (max-width: 768px) {\r\n  .row-container-faq {\r\n    margin-top: 120px;\r\n  }\r\n  .col-6 {\r\n    width: 100%;\r\n    margin: 40px 0 0;\r\n  }\r\n  .section__title {\r\n    background: none;\r\n  }\r\n}\r\n",".services {\r\n  &__title {\r\n    height: 200px;\r\n    position: relative;\r\n\r\n    &-text {\r\n      font-weight: 700;\r\n      font-size: 30px;\r\n      line-height: 37px;\r\n      text-transform: uppercase;\r\n      margin-left: 50px;\r\n      padding-top: 130px;\r\n    }\r\n    &-img-poly {\r\n      position: absolute;\r\n      bottom: 0;\r\n      left: 0;\r\n      z-index: -1;\r\n    }\r\n    &-img-arrow {\r\n      position: absolute;\r\n      top: 0;\r\n      left: 90px;\r\n      z-index: -1;\r\n      width: 63%;\r\n      height: 85%;\r\n    }\r\n  }\r\n  &__items {\r\n    margin-top: 36px;\r\n    justify-content: center;\r\n    margin-left: -7.5px;\r\n    margin-right: -7.5px;\r\n    padding-bottom: 58px;\r\n  }\r\n  &__item {\r\n    background: #6ca7ef;\r\n    border-radius: 20px;\r\n    height: 249px;\r\n    margin: 7.5px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    padding: 45px;\r\n    text-decoration: none;\r\n    transition: 0.2s;\r\n    &:hover {\r\n      background: #5391dc;\r\n      transition: 0.2s;\r\n    }\r\n  }\r\n  & .col-sl-12,\r\n  .col-md-6,\r\n  .col-lg-4,\r\n  .col-lg-8 {\r\n    padding: 0;\r\n  }\r\n  &__item-text {\r\n    font-weight: 600;\r\n    font-size: 18px;\r\n    line-height: 22px;\r\n    text-align: center;\r\n    letter-spacing: 0.01em;\r\n    color: #ffffff;\r\n  }\r\n  &__item-img {\r\n    height: 81px;\r\n    &_startup {\r\n      height: 73px;\r\n    }\r\n  }\r\n}\r\n@media (min-width: 992px) {\r\n  .services__img-report_height {\r\n    height: 507px;\r\n  }\r\n  .services__img-idea_height {\r\n    height: 164px;\r\n  }\r\n  .services__img-search_height {\r\n    height: 328px;\r\n  }\r\n  .services__img-startup_height {\r\n    height: 328px;\r\n  }\r\n  .services__items {\r\n    display: flex;\r\n    justify-content: flex-end;\r\n  }\r\n  .item_up {\r\n    margin-top: -343px;\r\n  }\r\n  .services__item {\r\n    justify-content: center;\r\n  }\r\n  .services__item-text {\r\n    margin-top: 30px;\r\n  }\r\n  .services__img-idea_justify {\r\n    flex-direction: row;\r\n  }\r\n}\r\n\r\n@media (min-width: 1200px) {\r\n  .services__img-idea_justify .services__item-text {\r\n    display: inline-block;\r\n    width: 460px;\r\n    margin-left: 40px;\r\n  }\r\n}\r\n@media (max-width: 768px) {\r\n  .services__title-img-poly {\r\n    display: none;\r\n  }\r\n  .services__title-img-arrow {\r\n    display: none;\r\n  }\r\n  .services__title-text {\r\n    text-align: center;\r\n    padding-top: 80px;\r\n    margin-left: 0;\r\n  }\r\n  .services__title {\r\n    height: 140px;\r\n  }\r\n  .services__items {\r\n    padding-bottom: 34px;\r\n  }\r\n}\r\n",".modal {\r\n  display: none;\r\n  position: fixed;\r\n  height: 100%;\r\n  width: 100%;\r\n  background-color: #fff;\r\n  top: 0;\r\n  left: 0;\r\n  justify-content: center;\r\n  align-items: center;\r\n  .modal-content {\r\n    width: 292px;\r\n    border: none;\r\n    padding: 100px 0 20px 0;\r\n  }\r\n  .modal__btn-close {\r\n    width: 24px;\r\n    height: 24px;\r\n    position: absolute;\r\n    top: 24px;\r\n    left: 28px;\r\n    cursor: pointer;\r\n  }\r\n}\r\n.modal_show {\r\n  display: flex;\r\n}\r\n.order {\r\n  width: 100%;\r\n  .form__title {\r\n    font-weight: 700;\r\n    font-size: 22px;\r\n    line-height: 26px;\r\n    letter-spacing: 0.03em;\r\n    text-transform: uppercase;\r\n    text-align: center;\r\n    margin-bottom: 34px;\r\n  }\r\n  &__btn_width {\r\n    width: 100%;\r\n  }\r\n  &__btn_send {\r\n    pointer-events: none;\r\n  }\r\n  &__success {\r\n    font-weight: 700;\r\n    font-size: 18px;\r\n    line-height: 22px;\r\n    text-align: center;\r\n    color: #30b01e;\r\n    display: block;\r\n    height: 44px;\r\n    width: 200px;\r\n    margin: 36px auto 0;\r\n  }\r\n  &__success-message {\r\n    font-weight: 700;\r\n    font-size: 18px;\r\n    line-height: 22px;\r\n    text-align: center;\r\n    color: #30b01e;\r\n    margin-top: 12px;\r\n  }\r\n  .sendBtn {\r\n    width: 100%;\r\n    color: #fff;\r\n    height: 48px;\r\n    background: #47cf34;\r\n    border-radius: 8px;\r\n\r\n    font-family: \"Montserrat\";\r\n    font-weight: 700;\r\n    font-size: 16px;\r\n    line-height: 20px;\r\n    text-align: center;\r\n    text-transform: uppercase;\r\n    color: #ffffff;\r\n  }\r\n}\r\n.input {\r\n  width: 100%;\r\n  font-size: 18px;\r\n  line-height: 22px;\r\n  padding: 14px 20px;\r\n  border: 1px solid #282c37;\r\n  border-radius: 8px;\r\n  &_error {\r\n    border: 1px solid #cf4747;\r\n  }\r\n  &:focus {\r\n    outline: 1px solid #282c37;\r\n  }\r\n  &::placeholder {\r\n    color: #9fa7b0;\r\n    font-style: italic;\r\n  }\r\n  &_multy {\r\n    height: 191px;\r\n  }\r\n  &__message {\r\n    width: 100%;\r\n    height: 17px;\r\n    font-style: italic;\r\n    font-weight: 400;\r\n    font-size: 14px;\r\n    line-height: 17px;\r\n    color: #cf4747;\r\n    margin-bottom: 6px;\r\n    margin-left: 11px;\r\n  }\r\n  \r\n}\r\n","#service {\r\n  padding: 71px 164px 22px;\r\n  background: #e5e5e5;\r\n  .breadcrumb {\r\n    .breadcrumb-item {\r\n      font-weight: 400;\r\n      font-size: 16px;\r\n      line-height: 16px;\r\n      color: #282c37;\r\n      position: relative;\r\n      a {\r\n        color: #9fa7b0;\r\n      }\r\n    }\r\n    .bg-polygon {\r\n      position: absolute;\r\n      z-index: 0;\r\n      margin-top: 28px;\r\n      left: 140px;\r\n    }\r\n  }\r\n  .cube__img {\r\n    right: 0;\r\n    top: 20%;\r\n    width: 50%;\r\n    height: auto;\r\n    position: absolute;\r\n    z-index: 0;\r\n  }\r\n  @media (max-width: 991px) {\r\n    .bg-polygon {\r\n      display: none;\r\n    }\r\n    .cube__img {\r\n      display: none;\r\n    }\r\n  }\r\n  .container {\r\n    position: relative;\r\n    padding: 35px 0;\r\n    .trening_card {\r\n      padding: 41px 76px 39px 38px;\r\n      background: #fff;\r\n      box-shadow: 4px 4px 20px rgba(40, 44, 55, 0.2);\r\n      border-radius: 20px;\r\n      display: flex;\r\n      margin-bottom: 40px;\r\n      flex-wrap: wrap;\r\n      .card__content {\r\n        .card__title {\r\n          font-family: \"Montserrat\";\r\n          font-weight: 700;\r\n          margin-bottom: 0;\r\n          font-size: 30px;\r\n          line-height: 37px;\r\n          color: #282c37;\r\n          padding-bottom: 30px;\r\n        }\r\n        .card__context {\r\n          padding-bottom: 4px;\r\n          margin-bottom: 0;\r\n          font-family: \"Lato\";\r\n          font-weight: 400;\r\n          font-size: 18px;\r\n          line-height: 22px;\r\n          color: #282c37;\r\n        }\r\n        .card__text {\r\n          margin-bottom: 0;\r\n          padding-bottom: 32px;\r\n          font-family: \"Lato\";\r\n          font-weight: 400;\r\n          font-size: 18px;\r\n          line-height: 22px;\r\n          color: #282c37;\r\n        }\r\n        .card__btn {\r\n          height: 48px;\r\n          align-items: center;\r\n          justify-content: center;\r\n          text-align: center;\r\n          display: flex;\r\n          padding: 0 23px;\r\n          border-radius: 8px;\r\n          background: #287ee7;\r\n          a {\r\n            display: flex;\r\n            align-items: center;\r\n            width: 100%;\r\n            justify-content: space-between;\r\n            font-family: \"Montserrat\";\r\n            font-weight: 700;\r\n            font-size: 16px;\r\n            line-height: 20px;\r\n            text-align: center;\r\n            text-transform: uppercase;\r\n            color: #ffffff;\r\n          }\r\n        }\r\n        .card__btn:hover {\r\n          transition: 0.2s;\r\n          background: #4b9afb;\r\n        }\r\n      }\r\n      .card__right__side {\r\n        padding: 15px 28px;\r\n        .content__block {\r\n          display: flex;\r\n          flex-direction: wrap;\r\n          gap: 41px;\r\n          .cube__content {\r\n            height: 25px;\r\n          }\r\n          .card-text-side {\r\n            font-family: \"Lato\";\r\n            font-weight: 400;\r\n            font-size: 17px;\r\n            line-height: 20px;\r\n            color: #282c37;\r\n          }\r\n        }\r\n      }\r\n    }\r\n    .trening_card:nth-child(2) {\r\n      padding: 38px 76px 39px 38px;\r\n      .card__content {\r\n        .card__title {\r\n          width: 90%;\r\n          padding-bottom: 24px;\r\n        }\r\n        .card__context {\r\n          padding-bottom: 6px;\r\n        }\r\n      }\r\n    }\r\n    .trening_card:nth-child(3) {\r\n      padding: 38px 76px 39px 38px;\r\n      .card__content {\r\n        .card__title {\r\n          padding-bottom: 26px;\r\n        }\r\n        .card__context {\r\n          padding-bottom: 5px;\r\n        }\r\n      }\r\n    }\r\n  }\r\n}\r\n@media (max-width: 991px) {\r\n  #service {\r\n    padding: 50px 50px;\r\n    .container {\r\n      padding-top: 20px;\r\n    }\r\n  }\r\n}\r\n@media (max-width: 591px) {\r\n  #service {\r\n    padding: 50px 50px;\r\n    .breadcrumb .breadcrumb-item {\r\n      margin-bottom: 20px;\r\n      font-size: 16px;\r\n      line-height: 14px;\r\n    }\r\n    .container .trening_card {\r\n      padding: 2px 18px;\r\n      background: #fff;\r\n      box-shadow: 4px 4px 20px rgb(40 44 55 / 20%);\r\n      border-radius: 20px;\r\n      display: flex;\r\n      margin-bottom: 40px;\r\n    }\r\n    .container .trening_card:nth-child(2) {\r\n      padding: 2px 18px;\r\n    }\r\n    .container .trening_card:nth-child(3) {\r\n      padding: 2px 18px;\r\n    }\r\n  }\r\n}\r\n\r\n","#training-page {\r\n  padding: 71px 164px 22px;\r\n  background: #e5e5e5;\r\n  .breadcrumb {\r\n    .breadcrumb-item {\r\n      font-weight: 400;\r\n      font-size: 16px;\r\n      line-height: 16px;\r\n      color: #282c37;\r\n      position: relative;\r\n      a {\r\n        color: #9fa7b0;\r\n      }\r\n    }\r\n    .bg-polygon {\r\n      position: absolute;\r\n      z-index: 0;\r\n      margin-top: 28px;\r\n      left: 150px;\r\n    }\r\n  }\r\n  .cube__img {\r\n    right: 0;\r\n    top: 20%;\r\n    width: 50%;\r\n    height: auto;\r\n    position: absolute;\r\n    z-index: 0;\r\n  }\r\n  @media (max-width: 991px) {\r\n    .bg-polygon {\r\n      display: none;\r\n    }\r\n    .cube__img {\r\n      display: none;\r\n    }\r\n    .cubes-img {\r\n      display: none;\r\n    }\r\n  }\r\n  .container {\r\n    position: relative;\r\n    padding: 27px 0 94px;\r\n    .page-title {\r\n      width: 90%;\r\n      .title-text {\r\n        font-family: \"Montserrat\";\r\n        font-style: normal;\r\n        font-weight: 700;\r\n        font-size: 44px;\r\n        line-height: 54px;\r\n        color: #282c37;\r\n      }\r\n      .page-context {\r\n        padding-top: 11px;\r\n        font-family: \"Lato\";\r\n        font-weight: 400;\r\n        font-size: 18px;\r\n        line-height: 22px;\r\n        color: #282c37;\r\n        margin-bottom: 4px;\r\n      }\r\n      .page-text {\r\n        font-family: \"Lato\";\r\n        font-weight: 400;\r\n        font-size: 18px;\r\n        line-height: 22px;\r\n        color: #282c37;\r\n      }\r\n      .page-items {\r\n        padding: 6px 34px;\r\n        .content__block {\r\n          margin-bottom: 8px;\r\n          align-items: center;\r\n          text-align: left;\r\n          display: flex;\r\n          gap: 46px;\r\n          padding: 4px 8px;\r\n        }\r\n        .content__block:nth-child(2) {\r\n          margin-bottom: 4px;\r\n        }\r\n        .cube__content {\r\n          height: 24px;\r\n        }\r\n        .card-text-side {\r\n          margin-bottom: 0;\r\n          font-family: \"Lato\";\r\n          font-weight: 400;\r\n          font-size: 17px;\r\n          line-height: 20px;\r\n          color: #282c37;\r\n        }\r\n        .card__btn {\r\n          margin: 44px 0 0 8px;\r\n          padding: 12px 23px 12px 88px;\r\n          height: 48px;\r\n          background: #30b01e;\r\n          border-radius: 8px;\r\n          a {\r\n            font-family: \"Montserrat\";\r\n            font-style: normal;\r\n            font-weight: 700;\r\n            font-size: 16px;\r\n            line-height: 20px;\r\n            text-align: left;\r\n            text-transform: uppercase;\r\n            color: #ffffff;\r\n            img {\r\n              margin-left: 36px;\r\n            }\r\n          }\r\n        }\r\n        .card__btn:hover {\r\n          transition: 0.2s;\r\n          background: #47cf34;\r\n        }\r\n      }\r\n    }\r\n    .page-second-title {\r\n      margin-top: 156px;\r\n      width: 90%;\r\n      padding-left: 2px;\r\n      .title-text {\r\n        font-family: \"Montserrat\";\r\n        font-style: normal;\r\n        font-weight: 700;\r\n        font-size: 30px;\r\n        line-height: 37px;\r\n        color: #282c37;\r\n      }\r\n      .page-context {\r\n        padding-top: 39px;\r\n        font-family: \"Montserrat\";\r\n        font-style: normal;\r\n        font-weight: 700;\r\n        font-size: 20px;\r\n        line-height: 24px;\r\n        color: #282c37;\r\n      }\r\n      .page-items {\r\n        padding: 6px 34px;\r\n        .content__block {\r\n          margin-bottom: 8px;\r\n          align-items: center;\r\n          text-align: left;\r\n          display: flex;\r\n          gap: 19px;\r\n          padding: 4px 6px;\r\n        }\r\n        .content__block:nth-child(2) {\r\n          margin-bottom: 8px;\r\n        }\r\n        .cube__content {\r\n          height: 11px;\r\n        }\r\n        .card-text-side {\r\n          margin-bottom: 0;\r\n          font-family: \"Lato\";\r\n          font-weight: 400;\r\n          font-size: 17px;\r\n          line-height: 20px;\r\n          color: #282c37;\r\n        }\r\n      }\r\n    }\r\n    .page-third-title {\r\n      width: 100%;\r\n      margin-top: 28px;\r\n      .title-text {\r\n        font-family: \"Montserrat\";\r\n        font-weight: 700;\r\n        font-size: 20px;\r\n        line-height: 24px;\r\n        color: #282c37;\r\n      }\r\n      .page-items {\r\n        padding: 17px 36px;\r\n        .content__block {\r\n          margin-bottom: 17px;\r\n          align-items: center;\r\n          text-align: left;\r\n          display: flex;\r\n          gap: 19px;\r\n          flex-wrap: nowrap;\r\n          padding: 0 6px;\r\n        }\r\n        .cube__content {\r\n          height: 11px;\r\n        }\r\n        .card-text-side {\r\n          text-align: left;\r\n          font-family: \"Lato\";\r\n          align-items: center;\r\n          font-weight: 400;\r\n          font-size: 17px;\r\n          line-height: 20px;\r\n          color: #282c37;\r\n        }\r\n      }\r\n    }\r\n    .page-fourth-title {\r\n      width: 100%;\r\n      margin-top: 28px;\r\n      .title-text {\r\n        font-family: \"Montserrat\";\r\n        font-weight: 700;\r\n        font-size: 20px;\r\n        line-height: 24px;\r\n        color: #282c37;\r\n      }\r\n      .page-items {\r\n        padding: 17px 36px;\r\n        .content__block {\r\n          margin-bottom: 17px;\r\n          align-items: center;\r\n          text-align: left;\r\n          display: flex;\r\n          gap: 19px;\r\n          flex-wrap: nowrap;\r\n          padding: 0 6px;\r\n        }\r\n        .cube__content {\r\n          height: 11px;\r\n        }\r\n        .card-text-side {\r\n          text-align: left;\r\n          font-family: \"Lato\";\r\n          align-items: center;\r\n          font-weight: 400;\r\n          font-size: 17px;\r\n          line-height: 20px;\r\n          color: #282c37;\r\n        }\r\n      }\r\n    }\r\n    .page-five-title {\r\n      width: 100%;\r\n      margin-top: 28px;\r\n      .cubes-img {\r\n        right: -160px;\r\n        top: 47%;\r\n        height: auto;\r\n        position: absolute;\r\n        z-index: 0;\r\n      }\r\n      .title-text {\r\n        font-family: \"Montserrat\";\r\n        font-weight: 700;\r\n        font-size: 20px;\r\n        line-height: 24px;\r\n        color: #282c37;\r\n      }\r\n      .page-items {\r\n        padding: 17px 36px;\r\n        .content__block {\r\n          margin-bottom: 17px;\r\n          align-items: center;\r\n          text-align: left;\r\n          display: flex;\r\n          gap: 19px;\r\n          flex-wrap: nowrap;\r\n          padding: 0 6px;\r\n        }\r\n        .cube__content {\r\n          height: 11px;\r\n        }\r\n        .card-text-side {\r\n          text-align: left;\r\n          font-family: \"Lato\";\r\n          align-items: center;\r\n          font-weight: 400;\r\n          font-size: 17px;\r\n          line-height: 20px;\r\n          color: #282c37;\r\n        }\r\n      }\r\n    }\r\n    .page-six-title {\r\n      width: 100%;\r\n      margin-top: 28px;\r\n      .title-text {\r\n        font-family: \"Montserrat\";\r\n        font-weight: 700;\r\n        font-size: 20px;\r\n        line-height: 24px;\r\n        color: #282c37;\r\n      }\r\n      .page-items {\r\n        padding: 17px 36px;\r\n        .content__block {\r\n          margin-bottom: 17px;\r\n          align-items: center;\r\n          text-align: left;\r\n          display: flex;\r\n          gap: 19px;\r\n          flex-wrap: nowrap;\r\n          padding: 0 6px;\r\n        }\r\n        .card-text-side {\r\n          font-family: \"Lato\";\r\n          font-weight: 400;\r\n          font-size: 17px;\r\n          line-height: 20px;\r\n          color: #282c37;\r\n        }\r\n      }\r\n    }\r\n    .page-seven-title {\r\n      width: 100%;\r\n      margin-top: 28px;\r\n      .title-text {\r\n        font-family: \"Montserrat\";\r\n        font-weight: 700;\r\n        font-size: 20px;\r\n        line-height: 24px;\r\n        color: #282c37;\r\n      }\r\n      .page-items {\r\n        padding: 17px 36px;\r\n        .content__block {\r\n          margin-bottom: 17px;\r\n          align-items: left;\r\n          text-align: left;\r\n          display: flex;\r\n          flex-direction: column;\r\n          gap: 10px;\r\n          padding: 0 6px;\r\n        }\r\n        .card-text-side {\r\n          font-family: \"Lato\";\r\n          font-weight: 400;\r\n          font-size: 17px;\r\n          line-height: 20px;\r\n          color: #282c37;\r\n        }\r\n      }\r\n    }\r\n    .page-eight-title {\r\n      width: 100%;\r\n      margin-top: 28px;\r\n      .title-text {\r\n        font-family: \"Montserrat\";\r\n        font-weight: 700;\r\n        font-size: 20px;\r\n        line-height: 24px;\r\n        color: #282c37;\r\n      }\r\n      .page-items {\r\n        padding: 17px 36px;\r\n        .content__block {\r\n          margin-bottom: 17px;\r\n          align-items: center;\r\n          text-align: left;\r\n          display: flex;\r\n          gap: 19px;\r\n          flex-wrap: nowrap;\r\n          padding: 0 6px;\r\n        }\r\n        .cube__content {\r\n          height: 11px;\r\n        }\r\n        .card-text-side {\r\n          text-align: left;\r\n          font-family: \"Lato\";\r\n          align-items: center;\r\n          font-weight: 400;\r\n          font-size: 17px;\r\n          line-height: 20px;\r\n          color: #282c37;\r\n        }\r\n      }\r\n    }\r\n    .page-nine-title {\r\n      width: 100%;\r\n      margin-top: 28px;\r\n      .title-text {\r\n        font-family: \"Montserrat\";\r\n        font-weight: 700;\r\n        font-size: 20px;\r\n        line-height: 24px;\r\n        color: #282c37;\r\n      }\r\n      .page-items {\r\n        padding: 17px 36px;\r\n        .content__block {\r\n          margin-bottom: 17px;\r\n          align-items: center;\r\n          text-align: left;\r\n          display: flex;\r\n          gap: 19px;\r\n          flex-wrap: nowrap;\r\n          padding: 0 6px;\r\n        }\r\n        .cube__content {\r\n          height: 11px;\r\n        }\r\n        .card-text-side {\r\n          text-align: left;\r\n          font-family: \"Lato\";\r\n          align-items: center;\r\n          font-weight: 400;\r\n          font-size: 17px;\r\n          line-height: 20px;\r\n          color: #282c37;\r\n        }\r\n      }\r\n    }\r\n    .modal_window {\r\n      margin: 0 auto;\r\n    }\r\n    .modal-content {\r\n      margin: auto;\r\n      margin-top: 132px;\r\n      padding: 78px 56px;\r\n      border-radius: 20px;\r\n      background: #ffffff;\r\n      box-shadow: 4px 4px 20px rgba(40, 44, 55, 0.2);\r\n      align-items: center;\r\n      .input {\r\n        background: #ffffff;\r\n        border: 1px solid #9fa7b0;\r\n        border-radius: 8px;\r\n        width: 100%;\r\n      }\r\n      .sendBtn {\r\n        width: 100%;\r\n      }\r\n    }\r\n    @media (max-width: 878px) {\r\n      .modal-content {\r\n        margin-top: 30px;\r\n        padding: 40px 20px;\r\n      }\r\n    }\r\n  }\r\n}\r\n@media (max-width: 991px) {\r\n  #training-page {\r\n    padding: 50px 50px;\r\n    .container {\r\n      padding-top: 20px;\r\n      .page-title {\r\n        .title-text {\r\n          font-size: 20px;\r\n          line-height: 24px;\r\n        }\r\n        .page-context {\r\n          font-size: 12px;\r\n          line-height: 14px;\r\n          margin-bottom: 14px;\r\n        }\r\n        .page-text {\r\n          font-size: 12px;\r\n          line-height: 12px;\r\n        }\r\n      }\r\n      .page-second-title {\r\n        margin-top: 76px;\r\n        .title-text {\r\n          font-size: 20px;\r\n          line-height: 24px;\r\n        }\r\n        .page-context {\r\n          font-size: 12px;\r\n          line-height: 14px;\r\n          padding-top: 10px;\r\n          margin-bottom: 14px;\r\n        }\r\n        .page-text {\r\n          font-size: 12px;\r\n          line-height: 12px;\r\n        }\r\n        .page-items .card-text-side {\r\n          font-size: 13px;\r\n          line-height: 16px;\r\n        }\r\n      }\r\n      .page-third-title {\r\n        margin-top: 16px;\r\n        .title-text {\r\n          font-size: 20px;\r\n          line-height: 24px;\r\n        }\r\n        .page-context {\r\n          font-size: 12px;\r\n          line-height: 14px;\r\n          padding-top: 10px;\r\n          margin-bottom: 14px;\r\n        }\r\n        .page-text {\r\n          font-size: 12px;\r\n          line-height: 12px;\r\n        }\r\n        .page-items {\r\n            padding: 17px 20px;\r\n          .card-text-side {\r\n            font-size: 13px;\r\n            line-height: 16px;\r\n          }\r\n        }\r\n      }\r\n      .page-fourth-title {\r\n        margin-top: 16px;\r\n        .title-text {\r\n          font-size: 20px;\r\n          line-height: 24px;\r\n        }\r\n        .page-context {\r\n          font-size: 12px;\r\n          line-height: 14px;\r\n          padding-top: 10px;\r\n          margin-bottom: 14px;\r\n        }\r\n        .page-text {\r\n          font-size: 12px;\r\n          line-height: 12px;\r\n        }\r\n        .page-items {\r\n            padding: 17px 20px;\r\n          .card-text-side {\r\n            font-size: 13px;\r\n            line-height: 16px;\r\n          }\r\n        }\r\n      }\r\n      .page-five-title {\r\n        margin-top: 16px;\r\n        .title-text {\r\n          font-size: 20px;\r\n          line-height: 24px;\r\n        }\r\n        .page-context {\r\n          font-size: 12px;\r\n          line-height: 14px;\r\n          padding-top: 10px;\r\n          margin-bottom: 14px;\r\n        }\r\n        .page-text {\r\n          font-size: 12px;\r\n          line-height: 12px;\r\n        }\r\n        .page-items {\r\n            padding: 17px 20px;\r\n          .card-text-side {\r\n            font-size: 13px;\r\n            line-height: 16px;\r\n          }\r\n        }\r\n      }\r\n      .page-six-title {\r\n        margin-top: 16px;\r\n        .title-text {\r\n          font-size: 20px;\r\n          line-height: 24px;\r\n        }\r\n        .page-context {\r\n          font-size: 12px;\r\n          line-height: 14px;\r\n          padding-top: 10px;\r\n          margin-bottom: 14px;\r\n        }\r\n        .page-text {\r\n          font-size: 12px;\r\n          line-height: 12px;\r\n        }\r\n        .page-items {\r\n            padding: 17px 20px;\r\n          .card-text-side {\r\n            font-size: 13px;\r\n            line-height: 16px;\r\n          }\r\n        }\r\n      }\r\n      .page-seven-title {\r\n        margin-top: 16px;\r\n        .title-text {\r\n          font-size: 20px;\r\n          line-height: 24px;\r\n        }\r\n        .page-context {\r\n          font-size: 12px;\r\n          line-height: 14px;\r\n          padding-top: 10px;\r\n          margin-bottom: 14px;\r\n        }\r\n        .page-text {\r\n          font-size: 12px;\r\n          line-height: 12px;\r\n        }\r\n        .page-items {\r\n            padding: 17px 20px;\r\n          .card-text-side {\r\n            font-size: 13px;\r\n            line-height: 16px;\r\n          }\r\n        }\r\n      }\r\n      .page-eight-title {\r\n        margin-top: 16px;\r\n        .title-text {\r\n          font-size: 20px;\r\n          line-height: 24px;\r\n        }\r\n        .page-context {\r\n          font-size: 12px;\r\n          line-height: 14px;\r\n          padding-top: 10px;\r\n          margin-bottom: 14px;\r\n        }\r\n        .page-text {\r\n          font-size: 12px;\r\n          line-height: 12px;\r\n        }\r\n        .page-items {\r\n            padding: 17px 20px;\r\n          .card-text-side {\r\n            font-size: 13px;\r\n            line-height: 16px;\r\n          }\r\n        }\r\n      }\r\n      .page-nine-title {\r\n        margin-top: 16px;\r\n        .title-text {\r\n          font-size: 20px;\r\n          line-height: 24px;\r\n        }\r\n        .page-context {\r\n          font-size: 12px;\r\n          line-height: 14px;\r\n          padding-top: 10px;\r\n          margin-bottom: 14px;\r\n        }\r\n        .page-text {\r\n          font-size: 12px;\r\n          line-height: 12px;\r\n        }\r\n        .page-items {\r\n            padding: 17px 20px;\r\n          .card-text-side {\r\n            font-size: 13px;\r\n            line-height: 16px;\r\n          }\r\n        }\r\n      }\r\n    }\r\n  }\r\n}\r\n@media (max-width: 591px) {\r\n  #training-page {\r\n    padding: 50px 50px;\r\n    .breadcrumb .breadcrumb-item {\r\n      margin-bottom: 20px;\r\n      font-size: 16px;\r\n      line-height: 14px;\r\n    }\r\n    .container .page-title .page-items .card__btn {\r\n      margin: 44px 0 0 8px;\r\n      padding: 0 40px;\r\n      background: #30b01e;\r\n      border-radius: 8px;\r\n      display: flex;\r\n      align-items: center;\r\n      flex-wrap: wrap;\r\n      a {\r\n        font-size: 11px;\r\n        img {\r\n          margin-left: 10px;\r\n        }\r\n      }\r\n    }\r\n  }\r\n}\r\n@media (max-width: 420) {\r\n  #training-page {\r\n    .container .page-title .page-items .card__btn {\r\n      background: #30b01e;\r\n      border-radius: 8px;\r\n      a img {\r\n        margin-left: 0px;\r\n      }\r\n    }\r\n  }\r\n}\r\n","#service-page {\r\n  padding: 71px 164px 22px;\r\n  background: #e5e5e5;\r\n  .breadcrumb {\r\n    .breadcrumb-item {\r\n      font-weight: 400;\r\n      font-size: 16px;\r\n      line-height: 16px;\r\n      color: #282c37;\r\n      position: relative;\r\n      a {\r\n        color: #9fa7b0;\r\n      }\r\n    }\r\n    .bg-polygon {\r\n      position: absolute;\r\n      z-index: 0;\r\n      margin-top: 28px;\r\n      left: 150px;\r\n    }\r\n  }\r\n  .cube__img {\r\n    right: 0;\r\n    top: 20%;\r\n    width: 50%;\r\n    height: auto;\r\n    position: absolute;\r\n    z-index: 0;\r\n  }\r\n  @media (max-width: 991px) {\r\n    .bg-polygon {\r\n      display: none;\r\n    }\r\n    .cube__img {\r\n      display: none;\r\n    }\r\n  }\r\n  .container {\r\n    position: relative;\r\n    padding: 27px 0 94px;\r\n    .page-title {\r\n      width: 90%;\r\n      .title-text {\r\n        font-family: \"Montserrat\";\r\n        font-style: normal;\r\n        font-weight: 700;\r\n        font-size: 44px;\r\n        line-height: 54px;\r\n        color: #282c37;\r\n      }\r\n      .page-items {\r\n        padding: 33px 34px;\r\n        .content__block {\r\n          margin-bottom: 17px;\r\n          align-items: center;\r\n          text-align: left;\r\n          display: flex;\r\n          gap: 41px;\r\n          padding: 4px 8px;\r\n        }\r\n        .cube__content {\r\n          height: 24px;\r\n        }\r\n        .card-text-side {\r\n          margin-bottom: 0;\r\n          font-family: \"Lato\";\r\n          font-weight: 400;\r\n          font-size: 17px;\r\n          line-height: 20px;\r\n          color: #282c37;\r\n        }\r\n      }\r\n    }\r\n    .about-services {\r\n      margin: 70px 0;\r\n      .about__title {\r\n        font-family: \"Montserrat\";\r\n        font-weight: 700;\r\n        font-size: 30px;\r\n        line-height: 37px;\r\n        color: #282c37;\r\n      }\r\n      .about__content {\r\n        margin: 36px auto;\r\n        display: flex;\r\n        flex-direction: column;\r\n        .about__text {\r\n          margin-bottom: 22px;\r\n          font-family: \"Lato\";\r\n          font-weight: 400;\r\n          font-size: 18px;\r\n          line-height: 22px;\r\n          color: #000000;\r\n          .text_link {\r\n            color: #287ee7;\r\n          }\r\n        }\r\n      }\r\n      .marketing-plan {\r\n        text-align: left;\r\n        width: 100%;\r\n        align-items: center;\r\n        .content__block {\r\n          padding-left: 100px;\r\n          display: flex;\r\n          width: auto;\r\n          align-items: center;\r\n          flex-wrap: nowrap;\r\n          margin-bottom: 16px;\r\n          .cube__content {\r\n            height: 11px;\r\n            margin-right: 18px;\r\n          }\r\n        }\r\n      }\r\n    }\r\n    .modal-content {\r\n      margin: auto;\r\n      margin-top: 132px;\r\n      padding: 78px 56px;\r\n      border-radius: 20px;\r\n      background: #ffffff;\r\n      box-shadow: 4px 4px 20px rgba(40, 44, 55, 0.2);\r\n      align-items: center;\r\n      .input {\r\n        background: #ffffff;\r\n        border: 1px solid #9fa7b0;\r\n        border-radius: 8px;\r\n        width: 100%;\r\n      }\r\n      .sendBtn {\r\n        width: 100%;\r\n      }\r\n    }\r\n    @media (max-width: 878px) {\r\n      .modal-content {\r\n        margin-top: 80px;\r\n        padding: 40px 20px;\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n@media (max-width: 991px) {\r\n  #service-page {\r\n    padding: 50px 50px;\r\n    .container {\r\n      padding-top: 20px;\r\n      .page-title {\r\n        .title-text {\r\n          font-size: 20px;\r\n          line-height: 24px;\r\n        }\r\n        .page-items .card-text-side {\r\n          font-size: 15px;\r\n          line-height: 18px;\r\n        }\r\n      }\r\n      .about-services {\r\n        margin: 30px 0;\r\n        .about__title {\r\n          font-size: 20px;\r\n          line-height: 24px;\r\n        }\r\n        .about__content .about__text {\r\n          margin-bottom: 20px;\r\n          font-size: 16px;\r\n          line-height: 18px;\r\n        }\r\n        .marketing-plan .content__block {\r\n          padding-left: 40px;\r\n          margin-bottom: 10px;\r\n        }\r\n      }\r\n    }\r\n  }\r\n}\r\n@media (max-width: 591px) {\r\n  #service-page {\r\n    .breadcrumb .breadcrumb-item {\r\n      margin-bottom: 20px;\r\n      font-size: 16px;\r\n      line-height: 24px;\r\n    }\r\n    .container {\r\n      .order .sendBtn {\r\n        font-size: 11px;\r\n        line-height: 12px;\r\n      }\r\n    }\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/font-lato.scss":
/*!*************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/font-lato.scss ***!
  \*************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Lato-Medium.ttf */ "./src/fonts/Lato-Medium.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Lato-Regular.ttf */ "./src/fonts/Lato-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Lato-Semibold.ttf */ "./src/fonts/Lato-Semibold.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Lato-Italic.ttf */ "./src/fonts/Lato-Italic.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\r\n  font-family: \"Lato\";\r\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"truetype\"),\r\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"truetype\"),\r\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format(\"truetype\");\r\n  font-style: normal;\r\n}\r\n@font-face {\r\n  font-family: \"Lato italic\";\r\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format(\"truetype\");\r\n  font-style: italic;\r\n}   \r\n", "",{"version":3,"sources":["webpack://./src/styles/font-lato.scss"],"names":[],"mappings":"AAAA;EACE,mBAAmB;EACnB;;8DAEsD;EACtD,kBAAkB;AACpB;AACA;EACE,0BAA0B;EAC1B,+DAAuD;EACvD,kBAAkB;AACpB","sourcesContent":["@font-face {\r\n  font-family: \"Lato\";\r\n  src: url(\"../fonts/Lato-Medium.ttf\") format(\"truetype\"),\r\n    url(\"../fonts/Lato-Regular.ttf\") format(\"truetype\"),\r\n    url(\"../fonts/Lato-Semibold.ttf\") format(\"truetype\");\r\n  font-style: normal;\r\n}\r\n@font-face {\r\n  font-family: \"Lato italic\";\r\n  src: url(\"../fonts/Lato-Italic.ttf\") format(\"truetype\");\r\n  font-style: italic;\r\n}   \r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/main.scss":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/main.scss ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../asset/top-line.png */ "./src/asset/top-line.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../asset/bg-polygons.png */ "./src/asset/bg-polygons.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../asset/center-line.png */ "./src/asset/center-line.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../asset/top-line-ipad.png */ "./src/asset/top-line-ipad.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../asset/center-line-ipad.png */ "./src/asset/center-line-ipad.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ../asset/arrows.png */ "./src/asset/arrows.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "#main {\r\n  padding: 94px 0 0px;\r\n}\r\n.row-container {\r\n  display: flex;\r\n  padding-top: 20px;\r\n  align-items: center;\r\n  position: relative;\r\n  text-align: center;\r\n  justify-content: space-between;\r\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat;\r\n  background-position: left 222px top 0;\r\n}\r\n.left-content {\r\n  margin-top: -101px;\r\n  text-align: left;\r\n  padding: 10px 0;\r\n}\r\n.main-container-text {\r\n  padding: 108px 0 0 32px;\r\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") no-repeat;\r\n  background-position: left top 0px;\r\n  color: #282c37;\r\n}\r\n.main-title {\r\n  font-size: 44px;\r\n  margin-bottom: 4px;\r\n  line-height: 54px;\r\n  color: #282c37;\r\n  font-family: \"Montserrat\";\r\n  text-transform: uppercase;\r\n}\r\n.main-context {\r\n  margin-bottom: 22px;\r\n  font-size: 30px;\r\n  line-height: 37px;\r\n  font-family: \"Montserrat\";\r\n  text-transform: uppercase;\r\n}\r\n.main-text {\r\n  margin-bottom: 30px;\r\n  font-family: \"Lato\";\r\n  font-weight: 400;\r\n  font-size: 22px;\r\n  line-height: 26px;\r\n  width: 90%;\r\n  color: #282c37;\r\n}\r\n.main-discuss-btn {\r\n  font-family: \"Montserrat\";\r\n  height: 48px;\r\n  width: 264px;\r\n  border-radius: 8px;\r\n  background: #47cf34;\r\n  font-weight: 700;\r\n  font-size: 16px;\r\n  line-height: 20px;\r\n  text-align: center;\r\n  text-transform: uppercase;\r\n  color: #ffffff;\r\n}\r\n.main-discuss-btn:hover {\r\n  background: #30b01e;\r\n  transition: 0.2s;\r\n}\r\n.cube-container {\r\n  padding-left: 122px;\r\n  margin-top: -6px;\r\n}\r\n.cube-img svg {\r\n  width: 100%;\r\n}\r\n.center-line {\r\n  height: 202px;\r\n  z-index: -1;\r\n  width: 100%;\r\n  position: absolute;\r\n  top: 562px;\r\n  left: 0;\r\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") no-repeat;\r\n  background-position: center;\r\n}\r\n@media (max-width: 1200px) {\r\n  .cube-container {\r\n    padding-left: 22px;\r\n  }\r\n}\r\n@media (max-width: 992px) {\r\n  #main {\r\n    padding: 25px 0;\r\n  }\r\n  .row-container {\r\n    padding: 0 60px;\r\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") no-repeat;\r\n    background-position: left 220px top 24px;\r\n  }\r\n  .center-line {\r\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ") no-repeat;\r\n    background-position: center;\r\n    top: 370px;\r\n  }\r\n\r\n  .left-content {\r\n    margin-top: 0;\r\n  }\r\n  .main-container-text {\r\n    position: relative;\r\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") no-repeat;\r\n    background-position: left 10px top 0px;\r\n  }\r\n  .cube-container {\r\n    padding-top: 38px;\r\n    margin: 0 auto 0 0;\r\n    width: auto;\r\n  }\r\n  .cube-img svg {\r\n    height: 250.8px;\r\n  }\r\n  .main-title {\r\n    font-size: 28px;\r\n    line-height: 34px;\r\n  }\r\n  .main-context {\r\n    font-size: 18px;\r\n    line-height: 22px;\r\n  }\r\n  .main-text {\r\n    font-size: 14px;\r\n    margin-bottom: 14px;\r\n    line-height: 17px;\r\n  }\r\n}\r\n@media (max-width: 768px) {\r\n  #main {\r\n    padding: 45px 0;\r\n  }\r\n  .row-container {\r\n    background: none;\r\n    flex-direction: column-reverse;\r\n    padding: 0 40px;\r\n  }\r\n  .center-line {\r\n    height: 102px;\r\n    top: 626px;\r\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ") no-repeat;\r\n    background-position: center;\r\n  }\r\n  .main-container-text {\r\n    background: none;\r\n    padding: 12px 0;\r\n    text-align: center;\r\n    align-items: center;\r\n  }\r\n  .cube-container {\r\n    margin: 0 auto;\r\n    padding: 0;\r\n  }\r\n  .main-text {\r\n    margin-bottom: 14px;\r\n  }\r\n}\r\n@media (max-width: 390px) {\r\n  .cube-img svg {\r\n    height: auto;\r\n  }\r\n  .center-line {\r\n    top: 668px;\r\n  }\r\n}\r\n@media (max-width: 360px) {\r\n  .cube-img svg {\r\n    height: auto;\r\n  }\r\n  .center-line {\r\n    top: 638px;\r\n  }\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/styles/main.scss"],"names":[],"mappings":"AAAA;EACE,mBAAmB;AACrB;AACA;EACE,aAAa;EACb,iBAAiB;EACjB,mBAAmB;EACnB,kBAAkB;EAClB,kBAAkB;EAClB,8BAA8B;EAC9B,6DAAgD;EAChD,qCAAqC;AACvC;AACA;EACE,kBAAkB;EAClB,gBAAgB;EAChB,eAAe;AACjB;AACA;EACE,uBAAuB;EACvB,6DAAmD;EACnD,iCAAiC;EACjC,cAAc;AAChB;AACA;EACE,eAAe;EACf,kBAAkB;EAClB,iBAAiB;EACjB,cAAc;EACd,yBAAyB;EACzB,yBAAyB;AAC3B;AACA;EACE,mBAAmB;EACnB,eAAe;EACf,iBAAiB;EACjB,yBAAyB;EACzB,yBAAyB;AAC3B;AACA;EACE,mBAAmB;EACnB,mBAAmB;EACnB,gBAAgB;EAChB,eAAe;EACf,iBAAiB;EACjB,UAAU;EACV,cAAc;AAChB;AACA;EACE,yBAAyB;EACzB,YAAY;EACZ,YAAY;EACZ,kBAAkB;EAClB,mBAAmB;EACnB,gBAAgB;EAChB,eAAe;EACf,iBAAiB;EACjB,kBAAkB;EAClB,yBAAyB;EACzB,cAAc;AAChB;AACA;EACE,mBAAmB;EACnB,gBAAgB;AAClB;AACA;EACE,mBAAmB;EACnB,gBAAgB;AAClB;AACA;EACE,WAAW;AACb;AACA;EACE,aAAa;EACb,WAAW;EACX,WAAW;EACX,kBAAkB;EAClB,UAAU;EACV,OAAO;EACP,6DAAmD;EACnD,2BAA2B;AAC7B;AACA;EACE;IACE,kBAAkB;EACpB;AACF;AACA;EACE;IACE,eAAe;EACjB;EACA;IACE,eAAe;IACf,6DAAqD;IACrD,wCAAwC;EAC1C;EACA;IACE,6DAAwD;IACxD,2BAA2B;IAC3B,UAAU;EACZ;;EAEA;IACE,aAAa;EACf;EACA;IACE,kBAAkB;IAClB,6DAAmD;IACnD,sCAAsC;EACxC;EACA;IACE,iBAAiB;IACjB,kBAAkB;IAClB,WAAW;EACb;EACA;IACE,eAAe;EACjB;EACA;IACE,eAAe;IACf,iBAAiB;EACnB;EACA;IACE,eAAe;IACf,iBAAiB;EACnB;EACA;IACE,eAAe;IACf,mBAAmB;IACnB,iBAAiB;EACnB;AACF;AACA;EACE;IACE,eAAe;EACjB;EACA;IACE,gBAAgB;IAChB,8BAA8B;IAC9B,eAAe;EACjB;EACA;IACE,aAAa;IACb,UAAU;IACV,6DAA8C;IAC9C,2BAA2B;EAC7B;EACA;IACE,gBAAgB;IAChB,eAAe;IACf,kBAAkB;IAClB,mBAAmB;EACrB;EACA;IACE,cAAc;IACd,UAAU;EACZ;EACA;IACE,mBAAmB;EACrB;AACF;AACA;EACE;IACE,YAAY;EACd;EACA;IACE,UAAU;EACZ;AACF;AACA;EACE;IACE,YAAY;EACd;EACA;IACE,UAAU;EACZ;AACF","sourcesContent":["#main {\r\n  padding: 94px 0 0px;\r\n}\r\n.row-container {\r\n  display: flex;\r\n  padding-top: 20px;\r\n  align-items: center;\r\n  position: relative;\r\n  text-align: center;\r\n  justify-content: space-between;\r\n  background: url(../asset/top-line.png) no-repeat;\r\n  background-position: left 222px top 0;\r\n}\r\n.left-content {\r\n  margin-top: -101px;\r\n  text-align: left;\r\n  padding: 10px 0;\r\n}\r\n.main-container-text {\r\n  padding: 108px 0 0 32px;\r\n  background: url(../asset/bg-polygons.png) no-repeat;\r\n  background-position: left top 0px;\r\n  color: #282c37;\r\n}\r\n.main-title {\r\n  font-size: 44px;\r\n  margin-bottom: 4px;\r\n  line-height: 54px;\r\n  color: #282c37;\r\n  font-family: \"Montserrat\";\r\n  text-transform: uppercase;\r\n}\r\n.main-context {\r\n  margin-bottom: 22px;\r\n  font-size: 30px;\r\n  line-height: 37px;\r\n  font-family: \"Montserrat\";\r\n  text-transform: uppercase;\r\n}\r\n.main-text {\r\n  margin-bottom: 30px;\r\n  font-family: \"Lato\";\r\n  font-weight: 400;\r\n  font-size: 22px;\r\n  line-height: 26px;\r\n  width: 90%;\r\n  color: #282c37;\r\n}\r\n.main-discuss-btn {\r\n  font-family: \"Montserrat\";\r\n  height: 48px;\r\n  width: 264px;\r\n  border-radius: 8px;\r\n  background: #47cf34;\r\n  font-weight: 700;\r\n  font-size: 16px;\r\n  line-height: 20px;\r\n  text-align: center;\r\n  text-transform: uppercase;\r\n  color: #ffffff;\r\n}\r\n.main-discuss-btn:hover {\r\n  background: #30b01e;\r\n  transition: 0.2s;\r\n}\r\n.cube-container {\r\n  padding-left: 122px;\r\n  margin-top: -6px;\r\n}\r\n.cube-img svg {\r\n  width: 100%;\r\n}\r\n.center-line {\r\n  height: 202px;\r\n  z-index: -1;\r\n  width: 100%;\r\n  position: absolute;\r\n  top: 562px;\r\n  left: 0;\r\n  background: url(../asset/center-line.png) no-repeat;\r\n  background-position: center;\r\n}\r\n@media (max-width: 1200px) {\r\n  .cube-container {\r\n    padding-left: 22px;\r\n  }\r\n}\r\n@media (max-width: 992px) {\r\n  #main {\r\n    padding: 25px 0;\r\n  }\r\n  .row-container {\r\n    padding: 0 60px;\r\n    background: url(../asset/top-line-ipad.png) no-repeat;\r\n    background-position: left 220px top 24px;\r\n  }\r\n  .center-line {\r\n    background: url(../asset/center-line-ipad.png) no-repeat;\r\n    background-position: center;\r\n    top: 370px;\r\n  }\r\n\r\n  .left-content {\r\n    margin-top: 0;\r\n  }\r\n  .main-container-text {\r\n    position: relative;\r\n    background: url(../asset/bg-polygons.png) no-repeat;\r\n    background-position: left 10px top 0px;\r\n  }\r\n  .cube-container {\r\n    padding-top: 38px;\r\n    margin: 0 auto 0 0;\r\n    width: auto;\r\n  }\r\n  .cube-img svg {\r\n    height: 250.8px;\r\n  }\r\n  .main-title {\r\n    font-size: 28px;\r\n    line-height: 34px;\r\n  }\r\n  .main-context {\r\n    font-size: 18px;\r\n    line-height: 22px;\r\n  }\r\n  .main-text {\r\n    font-size: 14px;\r\n    margin-bottom: 14px;\r\n    line-height: 17px;\r\n  }\r\n}\r\n@media (max-width: 768px) {\r\n  #main {\r\n    padding: 45px 0;\r\n  }\r\n  .row-container {\r\n    background: none;\r\n    flex-direction: column-reverse;\r\n    padding: 0 40px;\r\n  }\r\n  .center-line {\r\n    height: 102px;\r\n    top: 626px;\r\n    background: url(../asset/arrows.png) no-repeat;\r\n    background-position: center;\r\n  }\r\n  .main-container-text {\r\n    background: none;\r\n    padding: 12px 0;\r\n    text-align: center;\r\n    align-items: center;\r\n  }\r\n  .cube-container {\r\n    margin: 0 auto;\r\n    padding: 0;\r\n  }\r\n  .main-text {\r\n    margin-bottom: 14px;\r\n  }\r\n}\r\n@media (max-width: 390px) {\r\n  .cube-img svg {\r\n    height: auto;\r\n  }\r\n  .center-line {\r\n    top: 668px;\r\n  }\r\n}\r\n@media (max-width: 360px) {\r\n  .cube-img svg {\r\n    height: auto;\r\n  }\r\n  .center-line {\r\n    top: 638px;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./index.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/index.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      /*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./index.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/index.scss",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./index.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/index.scss");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "./src/index.scss");
/* harmony import */ var _js_burger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/burger */ "./src/js/burger.js");
/* harmony import */ var _js_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/modal */ "./src/js/modal.js");




(0,_js_burger__WEBPACK_IMPORTED_MODULE_1__.burgerInit)()
;(0,_js_modal__WEBPACK_IMPORTED_MODULE_2__.modalInit)()

/***/ }),

/***/ "./src/js/burger.js":
/*!**************************!*\
  !*** ./src/js/burger.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "burgerInit": () => (/* binding */ burgerInit),
/* harmony export */   "renderModalLink": () => (/* binding */ renderModalLink),
/* harmony export */   "showHideToggle": () => (/* binding */ showHideToggle)
/* harmony export */ });
const burgerOpenBtn = document.querySelector(".header__burger");
const burgerCloseBtn = document.querySelector(".burger__btn_close");

const showHideToggle = (className) => {
  const link = document.querySelector(`.${className}`);
  link.classList.toggle(`${className}_show`);
  document.body.style.overflow = 'hidden';
};

const burgerInit = () => {
  burgerOpenBtn.addEventListener("click", () => showHideToggle("burger"));
  burgerCloseBtn.addEventListener("click", function(e){
    showHideToggle("burger");
  document.body.style.overflow = 'auto';
});
};

const renderModalLink = () => {
  const links = document.querySelectorAll(".burger__link");
  links.forEach((link) =>
    link.addEventListener("click", () => {
      showHideToggle("burger");
      document.body.style.overflow = 'auto';
    })
  );
};
renderModalLink();


/***/ }),

/***/ "./src/js/modal.js":
/*!*************************!*\
  !*** ./src/js/modal.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkValid": () => (/* binding */ checkValid),
/* harmony export */   "modalInit": () => (/* binding */ modalInit)
/* harmony export */ });
/* harmony import */ var _burger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./burger */ "./src/js/burger.js");


const modalOpenBtn = document.querySelector(".main-discuss-btn");
const modalClodeBtn = document.querySelector(".modal__btn-close");
const form = document.querySelector(".order");

const checkValid = (value) => {
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

const modalInit = () => {
  const submitBtn = document.querySelector(".sendBtn");
  form?.addEventListener("submit", (e) => handleSubmit(e));
  modalOpenBtn?.addEventListener("click", () => (0,_burger__WEBPACK_IMPORTED_MODULE_0__.showHideToggle)("modal"));
  modalClodeBtn?.addEventListener("click", () => {
    (0,_burger__WEBPACK_IMPORTED_MODULE_0__.showHideToggle)("modal");
    document.body.style.overflow = "auto";
    cleanForm();
    submitBtn.style.background = "#47cf34";
  });
  addFocusListener();
};


/***/ }),

/***/ "./src/asset/arrows.png":
/*!******************************!*\
  !*** ./src/asset/arrows.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6d55ea7ceb2dcc234af0.png";

/***/ }),

/***/ "./src/asset/bg-polygons.png":
/*!***********************************!*\
  !*** ./src/asset/bg-polygons.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e52f0350e11945400ce9.png";

/***/ }),

/***/ "./src/asset/center-line-ipad.png":
/*!****************************************!*\
  !*** ./src/asset/center-line-ipad.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "13d04c309eb9f6d49484.png";

/***/ }),

/***/ "./src/asset/center-line.png":
/*!***********************************!*\
  !*** ./src/asset/center-line.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a9bc9b4c87da53aea203.png";

/***/ }),

/***/ "./src/asset/top-line-ipad.png":
/*!*************************************!*\
  !*** ./src/asset/top-line-ipad.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3227cab2ba8cf9580631.png";

/***/ }),

/***/ "./src/asset/top-line.png":
/*!********************************!*\
  !*** ./src/asset/top-line.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "496808088a9975d4f1c7.png";

/***/ }),

/***/ "./src/fonts/Lato-Italic.ttf":
/*!***********************************!*\
  !*** ./src/fonts/Lato-Italic.ttf ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "555ca862aca4c09ec360.ttf";

/***/ }),

/***/ "./src/fonts/Lato-Medium.ttf":
/*!***********************************!*\
  !*** ./src/fonts/Lato-Medium.ttf ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b56347b7f25900c4fd4c.ttf";

/***/ }),

/***/ "./src/fonts/Lato-Regular.ttf":
/*!************************************!*\
  !*** ./src/fonts/Lato-Regular.ttf ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "faacec1c82ca10ed3b76.ttf";

/***/ }),

/***/ "./src/fonts/Lato-Semibold.ttf":
/*!*************************************!*\
  !*** ./src/fonts/Lato-Semibold.ttf ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "637ae3cbe5f4341bfb7b.ttf";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			if (cachedModule.error !== undefined) throw cachedModule.error;
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		try {
/******/ 			var execOptions = { id: moduleId, module: module, factory: __webpack_modules__[moduleId], require: __webpack_require__ };
/******/ 			__webpack_require__.i.forEach(function(handler) { handler(execOptions); });
/******/ 			module = execOptions.module;
/******/ 			execOptions.factory.call(module.exports, module, module.exports, execOptions.require);
/******/ 		} catch(e) {
/******/ 			module.error = e;
/******/ 			throw e;
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/******/ 	// expose the module execution interceptor
/******/ 	__webpack_require__.i = [];
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript update chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.hu = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "." + __webpack_require__.h() + ".hot-update.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get mini-css chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.miniCssF = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return undefined;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get update manifest filename */
/******/ 	(() => {
/******/ 		__webpack_require__.hmrF = () => ("main." + __webpack_require__.h() + ".hot-update.json");
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("c11696962b99c60487e4")
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "pug:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			;
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hot module replacement */
/******/ 	(() => {
/******/ 		var currentModuleData = {};
/******/ 		var installedModules = __webpack_require__.c;
/******/ 		
/******/ 		// module and require creation
/******/ 		var currentChildModule;
/******/ 		var currentParents = [];
/******/ 		
/******/ 		// status
/******/ 		var registeredStatusHandlers = [];
/******/ 		var currentStatus = "idle";
/******/ 		
/******/ 		// while downloading
/******/ 		var blockingPromises = 0;
/******/ 		var blockingPromisesWaiting = [];
/******/ 		
/******/ 		// The update info
/******/ 		var currentUpdateApplyHandlers;
/******/ 		var queuedInvalidatedModules;
/******/ 		
/******/ 		// eslint-disable-next-line no-unused-vars
/******/ 		__webpack_require__.hmrD = currentModuleData;
/******/ 		
/******/ 		__webpack_require__.i.push(function (options) {
/******/ 			var module = options.module;
/******/ 			var require = createRequire(options.require, options.id);
/******/ 			module.hot = createModuleHotObject(options.id, module);
/******/ 			module.parents = currentParents;
/******/ 			module.children = [];
/******/ 			currentParents = [];
/******/ 			options.require = require;
/******/ 		});
/******/ 		
/******/ 		__webpack_require__.hmrC = {};
/******/ 		__webpack_require__.hmrI = {};
/******/ 		
/******/ 		function createRequire(require, moduleId) {
/******/ 			var me = installedModules[moduleId];
/******/ 			if (!me) return require;
/******/ 			var fn = function (request) {
/******/ 				if (me.hot.active) {
/******/ 					if (installedModules[request]) {
/******/ 						var parents = installedModules[request].parents;
/******/ 						if (parents.indexOf(moduleId) === -1) {
/******/ 							parents.push(moduleId);
/******/ 						}
/******/ 					} else {
/******/ 						currentParents = [moduleId];
/******/ 						currentChildModule = request;
/******/ 					}
/******/ 					if (me.children.indexOf(request) === -1) {
/******/ 						me.children.push(request);
/******/ 					}
/******/ 				} else {
/******/ 					console.warn(
/******/ 						"[HMR] unexpected require(" +
/******/ 							request +
/******/ 							") from disposed module " +
/******/ 							moduleId
/******/ 					);
/******/ 					currentParents = [];
/******/ 				}
/******/ 				return require(request);
/******/ 			};
/******/ 			var createPropertyDescriptor = function (name) {
/******/ 				return {
/******/ 					configurable: true,
/******/ 					enumerable: true,
/******/ 					get: function () {
/******/ 						return require[name];
/******/ 					},
/******/ 					set: function (value) {
/******/ 						require[name] = value;
/******/ 					}
/******/ 				};
/******/ 			};
/******/ 			for (var name in require) {
/******/ 				if (Object.prototype.hasOwnProperty.call(require, name) && name !== "e") {
/******/ 					Object.defineProperty(fn, name, createPropertyDescriptor(name));
/******/ 				}
/******/ 			}
/******/ 			fn.e = function (chunkId) {
/******/ 				return trackBlockingPromise(require.e(chunkId));
/******/ 			};
/******/ 			return fn;
/******/ 		}
/******/ 		
/******/ 		function createModuleHotObject(moduleId, me) {
/******/ 			var _main = currentChildModule !== moduleId;
/******/ 			var hot = {
/******/ 				// private stuff
/******/ 				_acceptedDependencies: {},
/******/ 				_acceptedErrorHandlers: {},
/******/ 				_declinedDependencies: {},
/******/ 				_selfAccepted: false,
/******/ 				_selfDeclined: false,
/******/ 				_selfInvalidated: false,
/******/ 				_disposeHandlers: [],
/******/ 				_main: _main,
/******/ 				_requireSelf: function () {
/******/ 					currentParents = me.parents.slice();
/******/ 					currentChildModule = _main ? undefined : moduleId;
/******/ 					__webpack_require__(moduleId);
/******/ 				},
/******/ 		
/******/ 				// Module API
/******/ 				active: true,
/******/ 				accept: function (dep, callback, errorHandler) {
/******/ 					if (dep === undefined) hot._selfAccepted = true;
/******/ 					else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 					else if (typeof dep === "object" && dep !== null) {
/******/ 						for (var i = 0; i < dep.length; i++) {
/******/ 							hot._acceptedDependencies[dep[i]] = callback || function () {};
/******/ 							hot._acceptedErrorHandlers[dep[i]] = errorHandler;
/******/ 						}
/******/ 					} else {
/******/ 						hot._acceptedDependencies[dep] = callback || function () {};
/******/ 						hot._acceptedErrorHandlers[dep] = errorHandler;
/******/ 					}
/******/ 				},
/******/ 				decline: function (dep) {
/******/ 					if (dep === undefined) hot._selfDeclined = true;
/******/ 					else if (typeof dep === "object" && dep !== null)
/******/ 						for (var i = 0; i < dep.length; i++)
/******/ 							hot._declinedDependencies[dep[i]] = true;
/******/ 					else hot._declinedDependencies[dep] = true;
/******/ 				},
/******/ 				dispose: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				addDisposeHandler: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				removeDisposeHandler: function (callback) {
/******/ 					var idx = hot._disposeHandlers.indexOf(callback);
/******/ 					if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 				},
/******/ 				invalidate: function () {
/******/ 					this._selfInvalidated = true;
/******/ 					switch (currentStatus) {
/******/ 						case "idle":
/******/ 							currentUpdateApplyHandlers = [];
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							setStatus("ready");
/******/ 							break;
/******/ 						case "ready":
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							break;
/******/ 						case "prepare":
/******/ 						case "check":
/******/ 						case "dispose":
/******/ 						case "apply":
/******/ 							(queuedInvalidatedModules = queuedInvalidatedModules || []).push(
/******/ 								moduleId
/******/ 							);
/******/ 							break;
/******/ 						default:
/******/ 							// ignore requests in error states
/******/ 							break;
/******/ 					}
/******/ 				},
/******/ 		
/******/ 				// Management API
/******/ 				check: hotCheck,
/******/ 				apply: hotApply,
/******/ 				status: function (l) {
/******/ 					if (!l) return currentStatus;
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				addStatusHandler: function (l) {
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				removeStatusHandler: function (l) {
/******/ 					var idx = registeredStatusHandlers.indexOf(l);
/******/ 					if (idx >= 0) registeredStatusHandlers.splice(idx, 1);
/******/ 				},
/******/ 		
/******/ 				//inherit from previous dispose call
/******/ 				data: currentModuleData[moduleId]
/******/ 			};
/******/ 			currentChildModule = undefined;
/******/ 			return hot;
/******/ 		}
/******/ 		
/******/ 		function setStatus(newStatus) {
/******/ 			currentStatus = newStatus;
/******/ 			var results = [];
/******/ 		
/******/ 			for (var i = 0; i < registeredStatusHandlers.length; i++)
/******/ 				results[i] = registeredStatusHandlers[i].call(null, newStatus);
/******/ 		
/******/ 			return Promise.all(results);
/******/ 		}
/******/ 		
/******/ 		function unblock() {
/******/ 			if (--blockingPromises === 0) {
/******/ 				setStatus("ready").then(function () {
/******/ 					if (blockingPromises === 0) {
/******/ 						var list = blockingPromisesWaiting;
/******/ 						blockingPromisesWaiting = [];
/******/ 						for (var i = 0; i < list.length; i++) {
/******/ 							list[i]();
/******/ 						}
/******/ 					}
/******/ 				});
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function trackBlockingPromise(promise) {
/******/ 			switch (currentStatus) {
/******/ 				case "ready":
/******/ 					setStatus("prepare");
/******/ 				/* fallthrough */
/******/ 				case "prepare":
/******/ 					blockingPromises++;
/******/ 					promise.then(unblock, unblock);
/******/ 					return promise;
/******/ 				default:
/******/ 					return promise;
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function waitForBlockingPromises(fn) {
/******/ 			if (blockingPromises === 0) return fn();
/******/ 			return new Promise(function (resolve) {
/******/ 				blockingPromisesWaiting.push(function () {
/******/ 					resolve(fn());
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function hotCheck(applyOnUpdate) {
/******/ 			if (currentStatus !== "idle") {
/******/ 				throw new Error("check() is only allowed in idle status");
/******/ 			}
/******/ 			return setStatus("check")
/******/ 				.then(__webpack_require__.hmrM)
/******/ 				.then(function (update) {
/******/ 					if (!update) {
/******/ 						return setStatus(applyInvalidatedModules() ? "ready" : "idle").then(
/******/ 							function () {
/******/ 								return null;
/******/ 							}
/******/ 						);
/******/ 					}
/******/ 		
/******/ 					return setStatus("prepare").then(function () {
/******/ 						var updatedModules = [];
/******/ 						currentUpdateApplyHandlers = [];
/******/ 		
/******/ 						return Promise.all(
/******/ 							Object.keys(__webpack_require__.hmrC).reduce(function (
/******/ 								promises,
/******/ 								key
/******/ 							) {
/******/ 								__webpack_require__.hmrC[key](
/******/ 									update.c,
/******/ 									update.r,
/******/ 									update.m,
/******/ 									promises,
/******/ 									currentUpdateApplyHandlers,
/******/ 									updatedModules
/******/ 								);
/******/ 								return promises;
/******/ 							},
/******/ 							[])
/******/ 						).then(function () {
/******/ 							return waitForBlockingPromises(function () {
/******/ 								if (applyOnUpdate) {
/******/ 									return internalApply(applyOnUpdate);
/******/ 								} else {
/******/ 									return setStatus("ready").then(function () {
/******/ 										return updatedModules;
/******/ 									});
/******/ 								}
/******/ 							});
/******/ 						});
/******/ 					});
/******/ 				});
/******/ 		}
/******/ 		
/******/ 		function hotApply(options) {
/******/ 			if (currentStatus !== "ready") {
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw new Error(
/******/ 						"apply() is only allowed in ready status (state: " +
/******/ 							currentStatus +
/******/ 							")"
/******/ 					);
/******/ 				});
/******/ 			}
/******/ 			return internalApply(options);
/******/ 		}
/******/ 		
/******/ 		function internalApply(options) {
/******/ 			options = options || {};
/******/ 		
/******/ 			applyInvalidatedModules();
/******/ 		
/******/ 			var results = currentUpdateApplyHandlers.map(function (handler) {
/******/ 				return handler(options);
/******/ 			});
/******/ 			currentUpdateApplyHandlers = undefined;
/******/ 		
/******/ 			var errors = results
/******/ 				.map(function (r) {
/******/ 					return r.error;
/******/ 				})
/******/ 				.filter(Boolean);
/******/ 		
/******/ 			if (errors.length > 0) {
/******/ 				return setStatus("abort").then(function () {
/******/ 					throw errors[0];
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			// Now in "dispose" phase
/******/ 			var disposePromise = setStatus("dispose");
/******/ 		
/******/ 			results.forEach(function (result) {
/******/ 				if (result.dispose) result.dispose();
/******/ 			});
/******/ 		
/******/ 			// Now in "apply" phase
/******/ 			var applyPromise = setStatus("apply");
/******/ 		
/******/ 			var error;
/******/ 			var reportError = function (err) {
/******/ 				if (!error) error = err;
/******/ 			};
/******/ 		
/******/ 			var outdatedModules = [];
/******/ 			results.forEach(function (result) {
/******/ 				if (result.apply) {
/******/ 					var modules = result.apply(reportError);
/******/ 					if (modules) {
/******/ 						for (var i = 0; i < modules.length; i++) {
/******/ 							outdatedModules.push(modules[i]);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			});
/******/ 		
/******/ 			return Promise.all([disposePromise, applyPromise]).then(function () {
/******/ 				// handle errors in accept handlers and self accepted module load
/******/ 				if (error) {
/******/ 					return setStatus("fail").then(function () {
/******/ 						throw error;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				if (queuedInvalidatedModules) {
/******/ 					return internalApply(options).then(function (list) {
/******/ 						outdatedModules.forEach(function (moduleId) {
/******/ 							if (list.indexOf(moduleId) < 0) list.push(moduleId);
/******/ 						});
/******/ 						return list;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				return setStatus("idle").then(function () {
/******/ 					return outdatedModules;
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function applyInvalidatedModules() {
/******/ 			if (queuedInvalidatedModules) {
/******/ 				if (!currentUpdateApplyHandlers) currentUpdateApplyHandlers = [];
/******/ 				Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 					queuedInvalidatedModules.forEach(function (moduleId) {
/******/ 						__webpack_require__.hmrI[key](
/******/ 							moduleId,
/******/ 							currentUpdateApplyHandlers
/******/ 						);
/******/ 					});
/******/ 				});
/******/ 				queuedInvalidatedModules = undefined;
/******/ 				return true;
/******/ 			}
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/css loading */
/******/ 	(() => {
/******/ 		var createStylesheet = (chunkId, fullhref, resolve, reject) => {
/******/ 			var linkTag = document.createElement("link");
/******/ 		
/******/ 			linkTag.rel = "stylesheet";
/******/ 			linkTag.type = "text/css";
/******/ 			var onLinkComplete = (event) => {
/******/ 				// avoid mem leaks.
/******/ 				linkTag.onerror = linkTag.onload = null;
/******/ 				if (event.type === 'load') {
/******/ 					resolve();
/******/ 				} else {
/******/ 					var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 					var realHref = event && event.target && event.target.href || fullhref;
/******/ 					var err = new Error("Loading CSS chunk " + chunkId + " failed.\n(" + realHref + ")");
/******/ 					err.code = "CSS_CHUNK_LOAD_FAILED";
/******/ 					err.type = errorType;
/******/ 					err.request = realHref;
/******/ 					linkTag.parentNode.removeChild(linkTag)
/******/ 					reject(err);
/******/ 				}
/******/ 			}
/******/ 			linkTag.onerror = linkTag.onload = onLinkComplete;
/******/ 			linkTag.href = fullhref;
/******/ 		
/******/ 			document.head.appendChild(linkTag);
/******/ 			return linkTag;
/******/ 		};
/******/ 		var findStylesheet = (href, fullhref) => {
/******/ 			var existingLinkTags = document.getElementsByTagName("link");
/******/ 			for(var i = 0; i < existingLinkTags.length; i++) {
/******/ 				var tag = existingLinkTags[i];
/******/ 				var dataHref = tag.getAttribute("data-href") || tag.getAttribute("href");
/******/ 				if(tag.rel === "stylesheet" && (dataHref === href || dataHref === fullhref)) return tag;
/******/ 			}
/******/ 			var existingStyleTags = document.getElementsByTagName("style");
/******/ 			for(var i = 0; i < existingStyleTags.length; i++) {
/******/ 				var tag = existingStyleTags[i];
/******/ 				var dataHref = tag.getAttribute("data-href");
/******/ 				if(dataHref === href || dataHref === fullhref) return tag;
/******/ 			}
/******/ 		};
/******/ 		var loadStylesheet = (chunkId) => {
/******/ 			return new Promise((resolve, reject) => {
/******/ 				var href = __webpack_require__.miniCssF(chunkId);
/******/ 				var fullhref = __webpack_require__.p + href;
/******/ 				if(findStylesheet(href, fullhref)) return resolve();
/******/ 				createStylesheet(chunkId, fullhref, resolve, reject);
/******/ 			});
/******/ 		}
/******/ 		// no chunk loading
/******/ 		
/******/ 		var oldTags = [];
/******/ 		var newTags = [];
/******/ 		var applyHandler = (options) => {
/******/ 			return { dispose: () => {
/******/ 				for(var i = 0; i < oldTags.length; i++) {
/******/ 					var oldTag = oldTags[i];
/******/ 					if(oldTag.parentNode) oldTag.parentNode.removeChild(oldTag);
/******/ 				}
/******/ 				oldTags.length = 0;
/******/ 			}, apply: () => {
/******/ 				for(var i = 0; i < newTags.length; i++) newTags[i].rel = "stylesheet";
/******/ 				newTags.length = 0;
/******/ 			} };
/******/ 		}
/******/ 		__webpack_require__.hmrC.miniCss = (chunkIds, removedChunks, removedModules, promises, applyHandlers, updatedModulesList) => {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			chunkIds.forEach((chunkId) => {
/******/ 				var href = __webpack_require__.miniCssF(chunkId);
/******/ 				var fullhref = __webpack_require__.p + href;
/******/ 				var oldTag = findStylesheet(href, fullhref);
/******/ 				if(!oldTag) return;
/******/ 				promises.push(new Promise((resolve, reject) => {
/******/ 					var tag = createStylesheet(chunkId, fullhref, () => {
/******/ 						tag.as = "style";
/******/ 						tag.rel = "preload";
/******/ 						resolve();
/******/ 					}, reject);
/******/ 					oldTags.push(oldTag);
/******/ 					newTags.push(tag);
/******/ 				}));
/******/ 			});
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = __webpack_require__.hmrS_jsonp = __webpack_require__.hmrS_jsonp || {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		var currentUpdatedModulesList;
/******/ 		var waitingUpdateResolves = {};
/******/ 		function loadUpdateChunk(chunkId, updatedModulesList) {
/******/ 			currentUpdatedModulesList = updatedModulesList;
/******/ 			return new Promise((resolve, reject) => {
/******/ 				waitingUpdateResolves[chunkId] = resolve;
/******/ 				// start update chunk loading
/******/ 				var url = __webpack_require__.p + __webpack_require__.hu(chunkId);
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				var loadingEnded = (event) => {
/******/ 					if(waitingUpdateResolves[chunkId]) {
/******/ 						waitingUpdateResolves[chunkId] = undefined
/******/ 						var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 						var realSrc = event && event.target && event.target.src;
/******/ 						error.message = 'Loading hot update chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 						error.name = 'ChunkLoadError';
/******/ 						error.type = errorType;
/******/ 						error.request = realSrc;
/******/ 						reject(error);
/******/ 					}
/******/ 				};
/******/ 				__webpack_require__.l(url, loadingEnded);
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		self["webpackHotUpdatepug"] = (chunkId, moreModules, runtime) => {
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					currentUpdate[moduleId] = moreModules[moduleId];
/******/ 					if(currentUpdatedModulesList) currentUpdatedModulesList.push(moduleId);
/******/ 				}
/******/ 			}
/******/ 			if(runtime) currentUpdateRuntime.push(runtime);
/******/ 			if(waitingUpdateResolves[chunkId]) {
/******/ 				waitingUpdateResolves[chunkId]();
/******/ 				waitingUpdateResolves[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		var currentUpdateChunks;
/******/ 		var currentUpdate;
/******/ 		var currentUpdateRemovedChunks;
/******/ 		var currentUpdateRuntime;
/******/ 		function applyHandler(options) {
/******/ 			if (__webpack_require__.f) delete __webpack_require__.f.jsonpHmr;
/******/ 			currentUpdateChunks = undefined;
/******/ 			function getAffectedModuleEffects(updateModuleId) {
/******/ 				var outdatedModules = [updateModuleId];
/******/ 				var outdatedDependencies = {};
/******/ 		
/******/ 				var queue = outdatedModules.map(function (id) {
/******/ 					return {
/******/ 						chain: [id],
/******/ 						id: id
/******/ 					};
/******/ 				});
/******/ 				while (queue.length > 0) {
/******/ 					var queueItem = queue.pop();
/******/ 					var moduleId = queueItem.id;
/******/ 					var chain = queueItem.chain;
/******/ 					var module = __webpack_require__.c[moduleId];
/******/ 					if (
/******/ 						!module ||
/******/ 						(module.hot._selfAccepted && !module.hot._selfInvalidated)
/******/ 					)
/******/ 						continue;
/******/ 					if (module.hot._selfDeclined) {
/******/ 						return {
/******/ 							type: "self-declined",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					if (module.hot._main) {
/******/ 						return {
/******/ 							type: "unaccepted",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					for (var i = 0; i < module.parents.length; i++) {
/******/ 						var parentId = module.parents[i];
/******/ 						var parent = __webpack_require__.c[parentId];
/******/ 						if (!parent) continue;
/******/ 						if (parent.hot._declinedDependencies[moduleId]) {
/******/ 							return {
/******/ 								type: "declined",
/******/ 								chain: chain.concat([parentId]),
/******/ 								moduleId: moduleId,
/******/ 								parentId: parentId
/******/ 							};
/******/ 						}
/******/ 						if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 						if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 							if (!outdatedDependencies[parentId])
/******/ 								outdatedDependencies[parentId] = [];
/******/ 							addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 							continue;
/******/ 						}
/******/ 						delete outdatedDependencies[parentId];
/******/ 						outdatedModules.push(parentId);
/******/ 						queue.push({
/******/ 							chain: chain.concat([parentId]),
/******/ 							id: parentId
/******/ 						});
/******/ 					}
/******/ 				}
/******/ 		
/******/ 				return {
/******/ 					type: "accepted",
/******/ 					moduleId: updateModuleId,
/******/ 					outdatedModules: outdatedModules,
/******/ 					outdatedDependencies: outdatedDependencies
/******/ 				};
/******/ 			}
/******/ 		
/******/ 			function addAllToSet(a, b) {
/******/ 				for (var i = 0; i < b.length; i++) {
/******/ 					var item = b[i];
/******/ 					if (a.indexOf(item) === -1) a.push(item);
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			// at begin all updates modules are outdated
/******/ 			// the "outdated" status can propagate to parents if they don't accept the children
/******/ 			var outdatedDependencies = {};
/******/ 			var outdatedModules = [];
/******/ 			var appliedUpdate = {};
/******/ 		
/******/ 			var warnUnexpectedRequire = function warnUnexpectedRequire(module) {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" + module.id + ") to disposed module"
/******/ 				);
/******/ 			};
/******/ 		
/******/ 			for (var moduleId in currentUpdate) {
/******/ 				if (__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 					var newModuleFactory = currentUpdate[moduleId];
/******/ 					/** @type {TODO} */
/******/ 					var result;
/******/ 					if (newModuleFactory) {
/******/ 						result = getAffectedModuleEffects(moduleId);
/******/ 					} else {
/******/ 						result = {
/******/ 							type: "disposed",
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					/** @type {Error|false} */
/******/ 					var abortError = false;
/******/ 					var doApply = false;
/******/ 					var doDispose = false;
/******/ 					var chainInfo = "";
/******/ 					if (result.chain) {
/******/ 						chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 					}
/******/ 					switch (result.type) {
/******/ 						case "self-declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of self decline: " +
/******/ 										result.moduleId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of declined dependency: " +
/******/ 										result.moduleId +
/******/ 										" in " +
/******/ 										result.parentId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "unaccepted":
/******/ 							if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 							if (!options.ignoreUnaccepted)
/******/ 								abortError = new Error(
/******/ 									"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "accepted":
/******/ 							if (options.onAccepted) options.onAccepted(result);
/******/ 							doApply = true;
/******/ 							break;
/******/ 						case "disposed":
/******/ 							if (options.onDisposed) options.onDisposed(result);
/******/ 							doDispose = true;
/******/ 							break;
/******/ 						default:
/******/ 							throw new Error("Unexception type " + result.type);
/******/ 					}
/******/ 					if (abortError) {
/******/ 						return {
/******/ 							error: abortError
/******/ 						};
/******/ 					}
/******/ 					if (doApply) {
/******/ 						appliedUpdate[moduleId] = newModuleFactory;
/******/ 						addAllToSet(outdatedModules, result.outdatedModules);
/******/ 						for (moduleId in result.outdatedDependencies) {
/******/ 							if (__webpack_require__.o(result.outdatedDependencies, moduleId)) {
/******/ 								if (!outdatedDependencies[moduleId])
/******/ 									outdatedDependencies[moduleId] = [];
/******/ 								addAllToSet(
/******/ 									outdatedDependencies[moduleId],
/******/ 									result.outdatedDependencies[moduleId]
/******/ 								);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 					if (doDispose) {
/******/ 						addAllToSet(outdatedModules, [result.moduleId]);
/******/ 						appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 			currentUpdate = undefined;
/******/ 		
/******/ 			// Store self accepted outdated modules to require them later by the module system
/******/ 			var outdatedSelfAcceptedModules = [];
/******/ 			for (var j = 0; j < outdatedModules.length; j++) {
/******/ 				var outdatedModuleId = outdatedModules[j];
/******/ 				var module = __webpack_require__.c[outdatedModuleId];
/******/ 				if (
/******/ 					module &&
/******/ 					(module.hot._selfAccepted || module.hot._main) &&
/******/ 					// removed self-accepted modules should not be required
/******/ 					appliedUpdate[outdatedModuleId] !== warnUnexpectedRequire &&
/******/ 					// when called invalidate self-accepting is not possible
/******/ 					!module.hot._selfInvalidated
/******/ 				) {
/******/ 					outdatedSelfAcceptedModules.push({
/******/ 						module: outdatedModuleId,
/******/ 						require: module.hot._requireSelf,
/******/ 						errorHandler: module.hot._selfAccepted
/******/ 					});
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			var moduleOutdatedDependencies;
/******/ 		
/******/ 			return {
/******/ 				dispose: function () {
/******/ 					currentUpdateRemovedChunks.forEach(function (chunkId) {
/******/ 						delete installedChunks[chunkId];
/******/ 					});
/******/ 					currentUpdateRemovedChunks = undefined;
/******/ 		
/******/ 					var idx;
/******/ 					var queue = outdatedModules.slice();
/******/ 					while (queue.length > 0) {
/******/ 						var moduleId = queue.pop();
/******/ 						var module = __webpack_require__.c[moduleId];
/******/ 						if (!module) continue;
/******/ 		
/******/ 						var data = {};
/******/ 		
/******/ 						// Call dispose handlers
/******/ 						var disposeHandlers = module.hot._disposeHandlers;
/******/ 						for (j = 0; j < disposeHandlers.length; j++) {
/******/ 							disposeHandlers[j].call(null, data);
/******/ 						}
/******/ 						__webpack_require__.hmrD[moduleId] = data;
/******/ 		
/******/ 						// disable module (this disables requires from this module)
/******/ 						module.hot.active = false;
/******/ 		
/******/ 						// remove module from cache
/******/ 						delete __webpack_require__.c[moduleId];
/******/ 		
/******/ 						// when disposing there is no need to call dispose handler
/******/ 						delete outdatedDependencies[moduleId];
/******/ 		
/******/ 						// remove "parents" references from all children
/******/ 						for (j = 0; j < module.children.length; j++) {
/******/ 							var child = __webpack_require__.c[module.children[j]];
/******/ 							if (!child) continue;
/******/ 							idx = child.parents.indexOf(moduleId);
/******/ 							if (idx >= 0) {
/******/ 								child.parents.splice(idx, 1);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// remove outdated dependency from module children
/******/ 					var dependency;
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									dependency = moduleOutdatedDependencies[j];
/******/ 									idx = module.children.indexOf(dependency);
/******/ 									if (idx >= 0) module.children.splice(idx, 1);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				},
/******/ 				apply: function (reportError) {
/******/ 					// insert new code
/******/ 					for (var updateModuleId in appliedUpdate) {
/******/ 						if (__webpack_require__.o(appliedUpdate, updateModuleId)) {
/******/ 							__webpack_require__.m[updateModuleId] = appliedUpdate[updateModuleId];
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// run new runtime modules
/******/ 					for (var i = 0; i < currentUpdateRuntime.length; i++) {
/******/ 						currentUpdateRuntime[i](__webpack_require__);
/******/ 					}
/******/ 		
/******/ 					// call accept handlers
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							var module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								var callbacks = [];
/******/ 								var errorHandlers = [];
/******/ 								var dependenciesForCallbacks = [];
/******/ 								for (var j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									var dependency = moduleOutdatedDependencies[j];
/******/ 									var acceptCallback =
/******/ 										module.hot._acceptedDependencies[dependency];
/******/ 									var errorHandler =
/******/ 										module.hot._acceptedErrorHandlers[dependency];
/******/ 									if (acceptCallback) {
/******/ 										if (callbacks.indexOf(acceptCallback) !== -1) continue;
/******/ 										callbacks.push(acceptCallback);
/******/ 										errorHandlers.push(errorHandler);
/******/ 										dependenciesForCallbacks.push(dependency);
/******/ 									}
/******/ 								}
/******/ 								for (var k = 0; k < callbacks.length; k++) {
/******/ 									try {
/******/ 										callbacks[k].call(null, moduleOutdatedDependencies);
/******/ 									} catch (err) {
/******/ 										if (typeof errorHandlers[k] === "function") {
/******/ 											try {
/******/ 												errorHandlers[k](err, {
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k]
/******/ 												});
/******/ 											} catch (err2) {
/******/ 												if (options.onErrored) {
/******/ 													options.onErrored({
/******/ 														type: "accept-error-handler-errored",
/******/ 														moduleId: outdatedModuleId,
/******/ 														dependencyId: dependenciesForCallbacks[k],
/******/ 														error: err2,
/******/ 														originalError: err
/******/ 													});
/******/ 												}
/******/ 												if (!options.ignoreErrored) {
/******/ 													reportError(err2);
/******/ 													reportError(err);
/******/ 												}
/******/ 											}
/******/ 										} else {
/******/ 											if (options.onErrored) {
/******/ 												options.onErrored({
/******/ 													type: "accept-errored",
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k],
/******/ 													error: err
/******/ 												});
/******/ 											}
/******/ 											if (!options.ignoreErrored) {
/******/ 												reportError(err);
/******/ 											}
/******/ 										}
/******/ 									}
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// Load self accepted modules
/******/ 					for (var o = 0; o < outdatedSelfAcceptedModules.length; o++) {
/******/ 						var item = outdatedSelfAcceptedModules[o];
/******/ 						var moduleId = item.module;
/******/ 						try {
/******/ 							item.require(moduleId);
/******/ 						} catch (err) {
/******/ 							if (typeof item.errorHandler === "function") {
/******/ 								try {
/******/ 									item.errorHandler(err, {
/******/ 										moduleId: moduleId,
/******/ 										module: __webpack_require__.c[moduleId]
/******/ 									});
/******/ 								} catch (err2) {
/******/ 									if (options.onErrored) {
/******/ 										options.onErrored({
/******/ 											type: "self-accept-error-handler-errored",
/******/ 											moduleId: moduleId,
/******/ 											error: err2,
/******/ 											originalError: err
/******/ 										});
/******/ 									}
/******/ 									if (!options.ignoreErrored) {
/******/ 										reportError(err2);
/******/ 										reportError(err);
/******/ 									}
/******/ 								}
/******/ 							} else {
/******/ 								if (options.onErrored) {
/******/ 									options.onErrored({
/******/ 										type: "self-accept-errored",
/******/ 										moduleId: moduleId,
/******/ 										error: err
/******/ 									});
/******/ 								}
/******/ 								if (!options.ignoreErrored) {
/******/ 									reportError(err);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					return outdatedModules;
/******/ 				}
/******/ 			};
/******/ 		}
/******/ 		__webpack_require__.hmrI.jsonp = function (moduleId, applyHandlers) {
/******/ 			if (!currentUpdate) {
/******/ 				currentUpdate = {};
/******/ 				currentUpdateRuntime = [];
/******/ 				currentUpdateRemovedChunks = [];
/******/ 				applyHandlers.push(applyHandler);
/******/ 			}
/******/ 			if (!__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 				currentUpdate[moduleId] = __webpack_require__.m[moduleId];
/******/ 			}
/******/ 		};
/******/ 		__webpack_require__.hmrC.jsonp = function (
/******/ 			chunkIds,
/******/ 			removedChunks,
/******/ 			removedModules,
/******/ 			promises,
/******/ 			applyHandlers,
/******/ 			updatedModulesList
/******/ 		) {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			currentUpdateChunks = {};
/******/ 			currentUpdateRemovedChunks = removedChunks;
/******/ 			currentUpdate = removedModules.reduce(function (obj, key) {
/******/ 				obj[key] = false;
/******/ 				return obj;
/******/ 			}, {});
/******/ 			currentUpdateRuntime = [];
/******/ 			chunkIds.forEach(function (chunkId) {
/******/ 				if (
/******/ 					__webpack_require__.o(installedChunks, chunkId) &&
/******/ 					installedChunks[chunkId] !== undefined
/******/ 				) {
/******/ 					promises.push(loadUpdateChunk(chunkId, updatedModulesList));
/******/ 					currentUpdateChunks[chunkId] = true;
/******/ 				} else {
/******/ 					currentUpdateChunks[chunkId] = false;
/******/ 				}
/******/ 			});
/******/ 			if (__webpack_require__.f) {
/******/ 				__webpack_require__.f.jsonpHmr = function (chunkId, promises) {
/******/ 					if (
/******/ 						currentUpdateChunks &&
/******/ 						__webpack_require__.o(currentUpdateChunks, chunkId) &&
/******/ 						!currentUpdateChunks[chunkId]
/******/ 					) {
/******/ 						promises.push(loadUpdateChunk(chunkId));
/******/ 						currentUpdateChunks[chunkId] = true;
/******/ 					}
/******/ 				};
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.hmrM = () => {
/******/ 			if (typeof fetch === "undefined") throw new Error("No browser support: need fetch API");
/******/ 			return fetch(__webpack_require__.p + __webpack_require__.hmrF()).then((response) => {
/******/ 				if(response.status === 404) return; // no update available
/******/ 				if(!response.ok) throw new Error("Failed to fetch update manifest " + response.statusText);
/******/ 				return response.json();
/******/ 			});
/******/ 		};
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=bundle.js.map