function validar() {
    var email = document.querySelector("#email");
    var subject = document.querySelector("#subject");
    var emailRegex = validarEmail(email.value);
  
    if (emailRegex) {
      alert("Erro no envio: Endereço de E-mail inválido");
      email.focus();
      
    } else if (subject.value === "") {
      alert("Erro no envio: Insira uma mensagem");
      subject.focus();
    } else {
      
        alert("Obrigada pelo contato " + email.value.substring(0, 32));
    }
  }
  
  function validarEmail(email) {
    var reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    if (reg.test(email)) {
      return false;
    } else {
      return true;
    }
  }