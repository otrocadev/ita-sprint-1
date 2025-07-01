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
  if (option.classList.contains('selected')) return 0
  if (!option.classList.contains('selected')) {
    showSelectedContent(option)
    showSelectedMenuOption(menuOption)
  }
  return 0
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
