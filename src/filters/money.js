import Vue from 'vue';

Vue.filter('money', (price) => {
  const formatter = new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency: 'RUB',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  return formatter.format(price).replace('₽', '');
});
