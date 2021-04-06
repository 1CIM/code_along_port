const root = document.getElementById('root')

const header = () => {
  let headerContainer = document.createElement('div')
  headerContainer.classList.add('ui', 'inverted', 'segment')
  let nav = document.createElement('nav')
  nav.classList.add('ui', 'inverted', 'secondary', 'menu')
  let headerContent = document.createElement('a')
  headerContent.classList.add('item')
  headerContent.innerText = 'My Portfolio'
  
  nav.appendChild(headerContent) // put header in the nav
  headerContainer.appendChild(nav)
  root.appendChild(headerContainer) // puts nav in the root
}

const startPage = () => {
  let startPageContainer = document.createElement('div')
  startPageContainer.classList.add('ui', 'container')
  let content = document.createElement('h1')
  content.innerText = 'Hello World'

  startPageContainer.appendChild(content)
  root.appendChild(startPageContainer)
}

const footer = () => {
  let footer = document.createElement('footer')
  footer.innerHTML = '<h4>Made with HTML, CSS & JavaScript</h4>'
  // same as above
  root.appendChild(footer)
}

document.addEventListener('DOMContentLoaded', () => {
  header()
  startPage()
  footer()
})