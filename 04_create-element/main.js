// let's start coding:
window.addEventListener('DOMContentLoaded', function () {
  document.getElementById('create-element').addEventListener('click',
    function () {
      // debugger
      const div = document.createElement('div')
      div.classList = 'time'
      div.textContent = (new Date()).toString()
      document.querySelector('.right').appendChild(div)
    })

  document.getElementById('reset-inner-html').addEventListener('click',
    function () {
      document.querySelector('.right').innerHTML = '<div class="title">DOM practice...</div>'
    })

  document.getElementById('remove').addEventListener('click',
    function () {
      // if (document.querySelector('.time:last-child'))
      //   document.querySelector('.time:last-child').remove()
      if (document.querySelector('.time')) {
        document.querySelector('.right').removeChild(document.querySelector('.time'))
      }
    })

  document.getElementById('create-element-insert-adjacent').addEventListener('click',
    function () {
      const div = document.createElement('div')
      div.className = 'time'
      div.textContent = 'A' + (new Date()).toString()
      document.querySelector('.title').insertAdjacentElement('afterbegin', div)
    }
  )
})