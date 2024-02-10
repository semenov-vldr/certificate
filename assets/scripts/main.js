"use strict";
"use strict";

var certificate = document.querySelector('#certificate');
if (certificate) {
  // tel Mask
  $("#input-tel").inputmask("+7 (999) 999-99-99");
  $("#date").inputmask("99.99.9999");
  $("#time").inputmask("99:99");
  var srcImgActive;
  var priceTabs = certificate.querySelectorAll('.certificate__price-item');
  var steps = certificate.querySelectorAll(".certificate__step");
  var step1 = steps[0];
  var step2 = steps[1];
  step2.classList.add("hidden");
  var Step_1_img = step1.querySelector('img');
  var Step_2_img = step2.querySelector('img');
  var btnNext = step1.querySelector("#btn-next");
  var btnPrev = step2.querySelector("#btn-prev");
  //const btnPay = step2.querySelector("#btn-pay");

  // Перекл номинала сертификата
  priceTabs.forEach(function (priceTab) {
    priceTab.addEventListener("click", function () {
      priceTabs.forEach(function (tab) {
        return tab.classList.remove('price-active');
      });
      priceTab.classList.add('price-active');
      var dataPrice = +priceTab.dataset.price;
      Step_1_img.src = "./assets/img/gifts_".concat(dataPrice, ".jpg");
      srcImgActive = Step_1_img.src;
      btnNext.disabled = false;
    });
  });
  btnNext.addEventListener("click", function () {
    step2.classList.remove("hidden");
    step1.classList.add("hidden");
    Step_2_img.src = srcImgActive;
  });
  btnPrev.addEventListener("click", function () {
    step2.classList.add("hidden");
    step1.classList.remove("hidden");
  });
  var formTabs = step2.querySelectorAll(".certificate__form-tabs button");
  formTabs[0].classList.add('whom-active');
  var fieldsetFriend = step2.querySelector(".certificate__fieldset-friend");
  formTabs.forEach(function (formTab, index) {
    formTab.addEventListener("click", function () {
      formTabs.forEach(function (tab) {
        return tab.classList.remove('whom-active');
      });
      formTab.classList.add('whom-active');
      if (formTabs[1].classList.contains('whom-active')) {
        fieldsetFriend.classList.add("hidden");
      } else {
        fieldsetFriend.classList.remove("hidden");
      }
    });
  });
}
"use strict";

function mobileFooterNav() {
  var footer = document.querySelector("footer.footer");
  if (!footer) return;
  var footerNavs = footer.querySelectorAll(".footer-nav");
  footerNavs.forEach(function (footerNav) {
    var footerTitle = footerNav.querySelector(".footer__title");
    footerTitle.addEventListener("click", function () {
      footerTitle.classList.toggle("js-mobile-nav-open");
    });
  });
}
mobileFooterNav();
"use strict";