// alert("Сайт находится в стадии разработки!")

var toastTrigger = document.getElementById('liveToastBtn')
var toastTrigger_btn_White = document.getElementById('btn_White')
var toastTrigger_btn_Auto = document.getElementById('btn_Auto')
var toastTrigger_btn_Black = document.getElementById('btn_Black')
var toastLiveExample = document.getElementById('liveToast')
if (toastTrigger, toastTrigger_btn_White, toastTrigger_btn_Auto, toastTrigger_btn_Black) {
  toastTrigger.addEventListener('click', function () {
    var toast = new bootstrap.Toast(toastLiveExample)
    toast.show()
  })
  toastTrigger_btn_White.addEventListener('click', function () {
    var toast = new bootstrap.Toast(toastLiveExample)
    toast.show()
  })
  toastTrigger_btn_Auto.addEventListener('click', function () {
    var toast = new bootstrap.Toast(toastLiveExample)
    toast.show()
  })
  toastTrigger_btn_Black.addEventListener('click', function () {
    var toast = new bootstrap.Toast(toastLiveExample)
    toast.show()
  })
} 
var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
})
