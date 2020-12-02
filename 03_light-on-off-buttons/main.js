window.addEventListener('DOMContentLoaded', function () {
  const dtatusDiv = document.querySelector('.status')
  document.getElementById('on').addEventListener('click',
    function () {
      document.body.classList.add('light')

      dtatusDiv.classList.remove('off')
      dtatusDiv.classList.add('on')
      document.querySelector('.status span').textContent = ('開')

    })

  document.getElementById('off').addEventListener('click',
    function () {
      document.body.classList.remove('light')

      dtatusDiv.classList.remove('on')
      dtatusDiv.classList.add('off')
      document.querySelector('.status span').textContent = ('關')
    })
})