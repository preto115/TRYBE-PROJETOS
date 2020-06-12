new Pikaday({
  field: document.getElementById('datepicker'),
  firstDay: 0,
  maxDate: new Date(),
  toString(date) {
    return moment(date).format('DD/MM/YYYY');
  },
});
/*
const buttonSubmit = document.getElementById('facebook-register');
buttonSubmit.addEventListener('click', validation.init('.js-form'));
*/
