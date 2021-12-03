import Vue from 'vue';

Vue.filter('date', (val) => {
  const date = new Date(val);
  const day = date.getDate();
  let month = date.getMonth() + 1;
  month = (month < 10) ? `0${month}` : month;
  const year = date.getFullYear();

  return `${day}.${month}.${year}`;
});
