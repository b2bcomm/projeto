window.addEventListener("DOMContentLoaded", function () {
    // eventos de envio de formulários
  
    var form = document.getElementById("my-form");
 //
    var status = document.getElementById("status");
  
    // -------------
  
    function success() {
      form.reset();
      status.classList.add("success");
      status.innerHTML = "Obrigado!";
    }
  
    function error() {
      status.classList.add("error");
      status.innerHTML = "Oops! Temos um problema.";
    }
  
    // lidar com o evento de envio de formulário
  
    form.addEventListener("submit", function (ev) {
      ev.preventDefault();
      var data = new FormData(form);
      ajax(form.method, form.action, data, success, error);
    });
  });
  
  //
  
  function ajax(method, url, data, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function () {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        success(xhr.response, xhr.responseType);
      } else {
        error(xhr.status, xhr.response, xhr.responseType);
      }
    };
    xhr.send(data);
  }