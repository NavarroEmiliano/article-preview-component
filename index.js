const d = document;
const shareBtn = d.querySelector('.share-icon-container');
const userContainer = d.querySelector('.user-container');
const socialContainer = d.querySelector('.social-container')
const socialIconsContainer = d.querySelector('.social-icons-container')
const shareIconBlue = d.querySelector('.share-icon-blue');
const shareIconWhite = d.querySelector('.share-icon-white');

shareBtn.addEventListener('click', function() {
    shareBtn.classList.toggle('share-icon-container--active')
    socialIconsContainer.classList.toggle('active')
    shareIconBlue.classList.toggle('hidden');
    shareIconWhite.classList.toggle('hidden');
})