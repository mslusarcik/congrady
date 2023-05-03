/* Přidání položky "Napsali o nás" do menu na desktopu */
function addItemInMenu() {
  //Variables
  var redesignHtml =
    '<ul class="navigation-submenu navigation-menu"> <li class="menu-item-864"> <a href="/napsali-o-nas/">Napsali o nás</a> </li> </ul>';
  var menuItem822 = $('.menu-item-822');

  //Do the magic
  $(menuItem822).append(redesignHtml);
  $(menuItem822).addClass('navigation-submenu-trigger-wrap icon-menu-arrow-wrap');
}

function elementLoaded(el, cb) {
  var maxAttempts = 15;
  var currAttempts = 0;
  if (jQuery(el).length) {
    // Element is now loaded.
    cb(jQuery(el));
  } else {
    // Repeat every 250ms.
    if (currAttempts <= maxAttempts) {
      setTimeout(function () {
        currAttempts++;
        elementLoaded(el, cb);
      }, 250);
    }
  }
}

function createSecondaryMenu() {
  if (jQuery(polozkyMenu).length > 0) {
    let secondaryMenuHtml = `<div class="secondary-menu"><div class="inner-secondary-menu"><ul class="secondary-menu-list">`;
    jQuery(polozkyMenu).each(function (index, value) {
      console.log(value.nazev + ': ' + value.odkaz);
      secondaryMenuHtml += `
        <li><a href="${value.odkaz}">${value.nazev}</a></li>
        `;
    });
    secondaryMenuHtml += `</ul></div></div>`;
    jQuery(secondaryMenuHtml).insertBefore(jQuery('#main-wrapper'));
  }
}

function addIgIconToHeader() {
  const igHtml =
    '<span class="checkout-instagram header-social-icon"> <a href="https://www.instagram.com/congrady/" title="Instagram" target="_blank" class="instagram">&nbsp;</a> </span>';
  const liHtml =
    '<span class="checkout-linkedin header-social-icon"> <a href="https://www.linkedin.com/company/congrady/" title="LinkedIn" target="_blank" class="linkedin">&nbsp;</a> </span>';
  jQuery(liHtml).insertAfter(jQuery('.checkout-facebook.header-social-icon'));
  jQuery(igHtml).insertAfter(jQuery('.checkout-facebook.header-social-icon'));
}

//Init
$(document).ready(function () {
  if ($('#menu').length > 0 && window.matchMedia('(min-width: 40.01em)').matches) {
    addItemInMenu();
  }
  if (jQuery('#header .header-social-icon').length > 0) {
    addIgIconToHeader();
  }
  if (true) {
    createSecondaryMenu();
  }
  if (true) {
    jQuery('#footer #newsletter').removeClass('hidden').insertBefore(jQuery('#footer'));
  }
  elementLoaded('#footer .instagram-widget', function (elm) {
    jQuery(elm).insertAfter(jQuery('#main'));
    jQuery('.custom-footer__instagram').remove();
  });
});
