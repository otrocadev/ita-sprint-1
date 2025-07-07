// BURGER MENU
const mainLogo = document.getElementById('main-logo')
const bgrLogo = document.getElementById('bgr-logo')

const mobileMenu = document.getElementById('mobile-menu')
const closeMenuBtn = document.getElementById('close-menu-btn')

bgrLogo.addEventListener('click', (e) => {
  mobileMenu.classList.remove('hidden')
  mainLogo.classList.add('hidden')
  bgrLogo.classList.add('hidden')
})

closeMenuBtn.addEventListener('click', (e) => {
  mobileMenu.classList.add('hidden')
  mainLogo.classList.remove('hidden')
  bgrLogo.classList.remove('hidden')
})

mobileMenu.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    mobileMenu.classList.add('hidden')
    mainLogo.classList.remove('hidden')
    bgrLogo.classList.remove('hidden')
  })
})

// FEATURES
const simpleBookmarkingBtn = document.getElementById('simple-bookmarking-btn')
const speedySearchingBtn = document.getElementById('speedy-searching-btn')
const easySharingBtn = document.getElementById('easy-sharing-btn')

const simpleBookmarking = document.getElementById('simple-bookmarking')
const speedySearching = document.getElementById('speedy-searching')
const easySharing = document.getElementById('easy-sharing')

const showSelectedMenuOption = (menuOption) => {
  simpleBookmarkingBtn.getElementsByTagName('span')[0].className = ''
  speedySearchingBtn.getElementsByTagName('span')[0].className = ''
  easySharingBtn.getElementsByTagName('span')[0].className = ''

  menuOption.getElementsByTagName('span')[0].className =
    'border-b-4 border-secondary py-6'
}

const showSelectedContent = (option) => {
  simpleBookmarking.classList.remove('flex')
  speedySearching.classList.remove('flex')
  easySharing.classList.remove('flex')

  simpleBookmarking.classList.add('hidden')
  speedySearching.classList.add('hidden')
  easySharing.classList.add('hidden')

  option.classList.remove('hidden')
  option.classList.add('flex')
}

const toggleMenuElement = (option, menuOption) => {
  if (option.classList.contains('selected')) return
  if (!option.classList.contains('selected')) {
    showSelectedContent(option)
    showSelectedMenuOption(menuOption)
  }
  return
}

simpleBookmarkingBtn.addEventListener('click', (e) => {
  toggleMenuElement(simpleBookmarking, simpleBookmarkingBtn)
})

speedySearchingBtn.addEventListener('click', (e) => {
  toggleMenuElement(speedySearching, speedySearchingBtn)
})

easySharingBtn.addEventListener('click', (e) => {
  toggleMenuElement(easySharing, easySharingBtn)
})

// EMAIL VALIDATION

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return re.test(email)
}

const form = document.getElementsByTagName('form')[0]
const emailTextCamp = document.getElementById('email-text-camp')
const emailInput = document.getElementById('email-input')
const alertIcon = document.getElementById('alert-icon')
const errorMessage = document.getElementById('error-message')

form.addEventListener('submit', (e) => {
  e.preventDefault()

  if (!validateEmail(emailTextCamp.value)) {
    emailInput.classList.remove('hidden')
    alertIcon.classList.remove('hidden')
    errorMessage.classList.remove('hidden')
  }

  if (validateEmail(emailTextCamp.value)) {
    emailInput.classList.add('hidden')
    alertIcon.classList.add('hidden')
    errorMessage.classList.add('hidden')
  }
})
