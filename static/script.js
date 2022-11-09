var TOTALSTOCK = { count: 0, POSTIVE: 0 };

var scanning = anime({
  targets: TOTALSTOCK,
  autoplay: false,
  count: 4665,
  POSTIVE: 2387,
  easing: 'linear',
  round: 1,
  update: function() {
    var total = document.querySelector('.STOCK-count');
    total.innerHTML = TOTALSTOCK.count;
    
    var POSTIVE = document.querySelector('.POSTIVE-count');
    POSTIVE.innerHTML = TOTALSTOCK.POSTIVE;
  }
});

document.querySelector('.play-count').onclick = scanning.restart;