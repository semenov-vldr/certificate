const certificate = document.querySelector('#certificate');

if (certificate) {

  // tel Mask
  $("#input-tel").inputmask("+7 (999) 999-99-99");
  $("#date").inputmask("99.99.9999");
  $("#time").inputmask("99:99");


  let srcImgActive;
  const priceTabs = certificate.querySelectorAll('.certificate__price-item');

  const steps = certificate.querySelectorAll(".certificate__step");
  const step1 = steps[0];
  const step2 = steps[1];

  step2.classList.add("hidden");

  const Step_1_img = step1.querySelector('img');
  const Step_2_img = step2.querySelector('img');

  const btnNext = step1.querySelector("#btn-next");
  const btnPrev = step2.querySelector("#btn-prev");
  //const btnPay = step2.querySelector("#btn-pay");

  // Перекл номинала сертификата
  priceTabs.forEach(priceTab => {
    priceTab.addEventListener("click", () => {
      priceTabs.forEach(tab => tab.classList.remove('price-active'));
      priceTab.classList.add('price-active');
      const dataPrice = +priceTab.dataset.price;
      Step_1_img.src = `./assets/img/gifts_${dataPrice}.jpg`;
      //Step_1_img.src = `/wp-content/uploads/2022/12/gifts_${dataPrice}.jpg`;
      srcImgActive = Step_1_img.src;
      btnNext.disabled = false;
    });
  });


  btnNext.addEventListener("click", () => {
    step2.classList.remove("hidden");
    step1.classList.add("hidden");
    Step_2_img.src= srcImgActive;

  });

  btnPrev.addEventListener("click", () => {
    step2.classList.add("hidden");
    step1.classList.remove("hidden");
  });

  const formTabs = step2.querySelectorAll(".certificate__form-tabs button");
  formTabs[0].classList.add('whom-active');

  const fieldsetFriend = step2.querySelector(".certificate__fieldset-friend");

  formTabs.forEach((formTab, index) => {
    formTab.addEventListener("click", () => {
      formTabs.forEach(tab => tab.classList.remove('whom-active'));
      formTab.classList.add('whom-active');

      if (formTabs[1].classList.contains('whom-active')) {
        fieldsetFriend.classList.add("hidden")
      } else {
        fieldsetFriend.classList.remove("hidden");
      }
    });
  });

  const closeBtn = certificate.querySelector('.certificate__close');
  closeBtn.addEventListener("click", () => {
    certificate.classList.remove("js-visible");
  });

  const btnOpen = document.querySelector('.btn-open');
  btnOpen.addEventListener("click", () => {
    certificate.classList.add("js-visible");
  });

  document.body.addEventListener("click", (evt) => {
    if (evt.target === certificate) {
      certificate.classList.remove("js-visible");
    }
  });
}
