const button = document.getElementById('button-login');
let enabled = false;
validation.init('form');
const form = document.querySelectorAll('form')[0];
form.addEventListener('submit', function (e) {
  e.preventDefault();
  if (document.querySelectorAll('.validate-error').length === 0) {
    const formulario = document.createElement('div');
    const p1 = document.createElement('p');
    p1.innerHTML = `\nNome: ${document.getElementById('nome').value}`;
    formulario.appendChild(p1);
    const p2 = document.createElement('p');
    p2.innerHTML = `\nSobrenome: ${document.getElementById('sobre-nome').value}`;
    formulario.appendChild(p2);
    const p3 = document.createElement('p');
    p3.innerHTML = `\nE-mail: ${document.getElementsByClassName('input-celular-email')[0].value}`;
    formulario.appendChild(p3);
    const p4 = document.createElement('p');
    p4.innerHTML = `\nData de Nascimento: ${document.getElementsByClassName('data')[0].value}`;
    formulario.appendChild(p4);
    const p5 = document.createElement('p');
    p5.innerHTML = `\nSexo: ${document.querySelector('input:checked').value}`;
    formulario.appendChild(p5);
    alert(`O formulário está correto? ${formulario.innerText}`);
    this.submit();
    alert('Dados enviados com sucesso');
  }
});
validation.addClassValidation('#customClassValidation', '.my-class-invalid', 'Field is invalid');
document.getElementById('customClassValidation').addEventListener('click', function (e) {
  if (enabled) {
    e.target.className = e.target.className.replace(/my-class-invalid$/, '');
  } else {
    e.target.className += ' my-class-invalid';
  }
  enabled = !enabled;
});
button.addEventListener('click', function () {
  alert(document.querySelector('.user-email-phone').value);
});
