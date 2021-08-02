const meus_orcamento = []; 

async function InclurProduto(quantidade, codigo) {
  const meus_orcamento0 = JSON.parse(sessionStorage.getItem("items"));
  if (meus_orcamento0) {
    JSON.parse(sessionStorage.getItem("items")).forEach((item) => {
      meus_orcamento.push(item);
    });
  }
  const { data } =  await axios.get(`/api/orcamento/${codigo}`);
  const data2 = await axios.get(`/api/anunciantes/${codigo}`);
  const novoProduto = {
    codigo: data[0].codigo,
    codfornecedor: data2.id_participantes,
    fornecedor: data2.data,
    foto: data[0].foto,
    nome: data[0].nome,
    descricao: data[0].descricao,
    marca: data[0].marca,
    quantidade: quantidade,
    embalagem: data[0].embalagem,
  };
  meus_orcamento.push(novoProduto);
  sessionStorage.setItem("items", JSON.stringify(meus_orcamento));
  window.location.href = "/meusorcamento";
}

function bindEvents() {
  const btn = document.getElementById("inclur_produto");
  btn.addEventListener("click", async (event) => {
    let quantidade = document.getElementById("txtQtde1").value;
    let codigo = document.getElementById("codigo").value;
    InclurProduto(quantidade, codigo);
  });
}

async function renderScreen() {
  bindEvents();
}

async function initialize() {
  await renderScreen();
}

window.onload = function () {

  var quant_js = parseInt(0);
  $('.btn-number').click(function (e) {
      e.preventDefault();
      fieldName = $(this).attr('data-field');
      type = $(this).attr('data-type');
      var input = $("input[name='" + fieldName + "']");
      var currentVal = parseInt(input.val());
      if (!isNaN(currentVal)) {
          if (type === 'minus') {
              if (currentVal > input.attr('min')) {
                  input.val(currentVal - 1).change();
              }
              if (parseInt(input.val()) === input.attr('min')) {
                  $(this).attr('disabled', true);
              }
          } else if (type === 'plus') {
              input.val(currentVal + 1).change();
              if (parseInt(input.val()) > input.attr('min')) {
                  $(this).attr('disabled', false);
              }
          }
      } else {
          input.val(0);
      }
      $('#frmProduto').formValidation('revalidateField', 'txtQtde1');
  });

  $('.input-number').focusin(function () {
      $(this).data('oldValue', $(this).val());
  });

  $('.input-number').change(function () {
      minValue = parseInt('1');
      valueCurrent = parseInt($(this).val());
      name = $(this).attr('name');
      if (valueCurrent >= minValue) {
          $(".btn-number[data-type='minus'][data-field='" + name + "']").removeAttr('disabled');
      } else {
          //alert('Quantidade mínima deve ser 1');
          $(this).val($(this).data('oldValue'));
      }
  });

  $(".input-number").keydown(function (e) {
      if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 190]) !== -1 ||
              (e.keyCode === 65 && e.ctrlKey === true) ||
              (e.keyCode >= 35 && e.keyCode <= 39)) {
          return;
      }
      if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
          e.preventDefault();
      }
  });
  
  initialize();
};
