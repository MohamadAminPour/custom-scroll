let scrollPage = document.getElementById('scrollPage')

window.addEventListener('scroll', function () {
   let scrollTop = window.scrollY

   let documentHeight = document.body.clientHeight

   let windowHeight = window.innerHeight

   let scrollPecent = scrollTop / (documentHeight - windowHeight)

   let scrollPecentRound = Math.round(scrollPecent * 100)

   scrollPage.style.width = (scrollPecentRound + "%")
})