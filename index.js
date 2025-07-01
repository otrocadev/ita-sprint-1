// BURGER MENU
const mainLogo = document.getElementById('main-logo')
const bgrLogo = document.getElementById('bgr-logo')

const mobileMenu = document.getElementById('mobile-menu')
const closeMenuBtn = document.getElementById('close-menu-btn')

bgrLogo.addEventListener('click', (e) => {
  mobileMenu.classList.add('active')
  mainLogo.classList.add('inactive')
  bgrLogo.classList.add('inactive')
})

closeMenuBtn.addEventListener('click', (e) => {
  mobileMenu.classList.remove('active')
  mainLogo.classList.remove('inactive')
  bgrLogo.classList.remove('inactive')
})

// FEATURES
const simpleBookmarkingBtn = document.getElementById('simple-bookmatking-btn')
const speedySearchingBtn = document.getElementById('speedy-searching-btn')
const easySharingBtn = document.getElementById('easy-sharing-btn')

const simpleBookmarking = document.getElementById('simple-bookmatking')
const speedySearching = document.getElementById('speedy-searching')
const easySharing = document.getElementById('easy-sharing')

const showSelectedMenuOption = (menuOption) => {
  simpleBookmarkingBtn
    .getElementsByTagName('span')[0]
    .classList.remove('selected')
  speedySearchingBtn
    .getElementsByTagName('span')[0]
    .classList.remove('selected')
  easySharingBtn.getElementsByTagName('span')[0].classList.remove('selected')

  menuOption.getElementsByTagName('span')[0].classList.add('selected')
}

const showSelectedContent = (option) => {
  simpleBookmarking.classList.remove('selected')
  speedySearching.classList.remove('selected')
  easySharing.classList.remove('selected')

  option.className = 'selected'
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
    emailInput.classList.remove('inactive')
    alertIcon.classList.remove('inactive')
    errorMessage.classList.remove('inactive')
  }

  if (validateEmail(emailTextCamp.value)) {
    emailInput.classList.add('inactive')
    alertIcon.classList.add('inactive')
    errorMessage.classList.add('inactive')
  }
})
