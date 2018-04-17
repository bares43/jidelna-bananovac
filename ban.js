var bannedFoodKey = 'bannedFood';
var bannedClass = 'banned-food';
var banBtnClass = 'banned-food-btn';

function loadBannedFood() {
  var bannedFood = JSON.parse(localStorage.getItem(bannedFoodKey));
  if (!Array.isArray(bannedFood)) {
    bannedFood = [];
  }

  return bannedFood;
}

function ban(food) {
  var bannedFood = loadBannedFood();

  if (!bannedFood.includes(food)) {
    bannedFood.push(food);
  }

  localStorage.setItem(bannedFoodKey, JSON.stringify(bannedFood));
}

function annulBan(food) {
  var bannedFood = loadBannedFood();

  bannedFood = bannedFood.filter(item => item !== food);

  localStorage.setItem(bannedFoodKey, JSON.stringify(bannedFood));
}

function render() {
  $("." + banBtnClass).remove();
  $("." + bannedClass).removeClass(bannedClass);

  loadBannedFood().forEach(function (food) {
    $(".TdAltNazev:contains('" + food + "')").addClass(bannedClass);
  });

  $(".TdAltNazev").each(function () {
    var el = $(this);
    var btn = $("<button>");
    btn.addClass(banBtnClass);

    if (el.is("." + bannedClass)) {
      btn.text("Zrušit ban");
    } else {
      btn.text("Zabanovat");
    }

    el.append(btn);
  })
}

$(document).on("click", "." + banBtnClass, function (e) {
  e.preventDefault();
  e.stopImmediatePropagation();
  var el = $(this).parent();
  var food = el.contents().get(0).nodeValue;
  if (el.is("." + bannedClass)) {
    annulBan(food);
  } else {
    ban(food);
  }

  render();
});

function addGlobalStyle(css) {
  var head, style;
  head = document.getElementsByTagName('head')[0];
  if (!head) {
    return;
  }
  style = document.createElement('link');
  style.type = 'text/css';
  style.href = css;
  style.rel = 'stylesheet';
  head.appendChild(style);
}

addGlobalStyle('');

render();