function validar() {
  var email = document.querySelector("#email");
  var subject = document.querySelector("#subject");
  var name = document.querySelector("#name");
  var emailRegex = validarEmail(email.value);

  if (emailRegex) {
    alert("E-mail inválido");
    email.focus(); 
    } else if (subject.value == "") {
      alert("Insira uma mensagem");
      subject.focus();
      } else if (name.value === "") {
        alert("Insira uma mensagem");
        name.focus();
  } else {
    alert("Obrigada pelo contato " + name.value);
  }
}

function validarEmail(email) {
  var reg = /(\w+([-+.']\w+)*){0,17}@{1}(\w+([-.]\w+)*\.\w+([-.]\w+)*){0,15}/;
  if (reg.test(email)) {
    return false;
  } else {
    return true;
  }
}