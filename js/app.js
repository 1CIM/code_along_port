const root = document.getElementById('root')
const mainContainer = document.createElement('div')

const addActive = (tabLink) => {
  let areActive = document.querySelectorAll('.active')
  if (areActive.length > 0) {
    areActive[0].classList.remove('active')
  } 
  tabLink.classList.add('active')
}

const header = () => {
  let headerContainer = document.createElement('div')
  headerContainer.classList.add('ui', 'inverted', 'segment', 'basic')
  let nav = document.createElement('nav')
  nav.classList.add('ui', 'inverted', 'secondary', 'menu')
  let tabs = ['My Portfolio', 'About Me', 'My Projects', 'My Hemburgaa']
  tabs.forEach(tab => {
    let tabLink = document.createElement('a')
    tabLink.classList.add('item')
    tabLink.innerText = tab
    nav.appendChild(tabLink) // put tabLink in the nav
    tabLink.addEventListener('click', () => {
      startPage(tab) 
      addActive(tabLink)
    })
  })
  headerContainer.appendChild(nav)
  root.appendChild(headerContainer) // puts nav in the root
}

const startPage = async (tab) => {
  if (tab === 'About Me') {
    mainContainer.innerHTML = '<h2>About Me</h2> <p>Stuff about me</p>'
  } else if (tab === 'My Projects') {
    await displayProjects()
  } else if (tab === 'My Hemburgaa') {
    await displayHamburger()
  } else {
    mainContainer.innerHTML = '<h2>Hello World</h2>'
  }
  mainContainer.classList.add('ui', 'container')
  root.appendChild(mainContainer)
}

const fetchProjects = async () => {
  let response = await (await fetch('./js/projects.json')).json()
  return response.projects
}

const displayProjects = async () => {
  let projects = await fetchProjects() // Added to fetchProjects func and called here
  // let response = await (await fetch('./js/projects.json')).json()
  // let projects = response.projects 
  mainContainer.innerHTML = ''
  const projectsContainer = document.createElement('div')
  projectsContainer.classList.add('ui', 'cards')
  projects.forEach(project => {
    let card = document.createElement('div')
    let image = document.createElement('div')
    let cardContent = document.createElement('div')
    let cardDescription = document.createElement('div')
    card.classList.add('ui', 'card')
    image.classList.add('image')
    image.innerHTML = `<img src=${project.image}/>`
    cardContent.classList.add('content')
    cardContent.innerHTML = `<a class='header'>${project.title}</a>`
    cardDescription.classList.add('description')
    cardDescription.innerText = project.description

    card.append(image, cardContent, cardDescription)
    projectsContainer.appendChild(card)
  })
  mainContainer.appendChild(projectsContainer)
}

const fetchBurger = async () => {
  let response = await (await fetch('./js/burgers.json')).json()
  return response.burgers[0]
}

const displayHamburger = async () => {
  let burger = await fetchBurger()
  mainContainer.innerHTML = ''
  const burgerImg = document.createElement('img')
  burgerImg.classList.add('full_burger')
  burgerImg.src = burger.image1
  mainContainer.appendChild(burgerImg)
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