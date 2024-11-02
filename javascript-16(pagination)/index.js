//script.js 
const cardsPerPage = 4; // Number of cards to show per page 
const dataContainer = document.getElementById('data-container'); 
const pagination = document.getElementById('pagination'); 
const prevButton = document.getElementById('prev'); 
const nextButton = document.getElementById('next'); 
const pageNumbers = document.getElementById('page-numbers'); 
const pageLinks = document.querySelectorAll('.page-link'); 

const cards = Array.from(dataContainer.getElementsByClassName('card'))

const totalpages = Math.ceil(cards.length/cardsPerPage);
let currentPage = 1;

function displayPage(page) {
	const startIndex = (page-1) * cardsPerPage
	const endIndex = startIndex + cardsPerPage
	cards.forEach((card,index)=>{
         if (index >= startIndex && index < endIndex) {
			card.style.display = 'block'
		 }else{
			card.style.display = 'none'
		 }
	})
}

function updatePagination() {
	pageNumbers.innerHTML =
	`page ${currentPage} of ${totalpages}`
	prevButton.disabled = currentPage === 1
	nextButton.disabled = currentPage === 3
	pageLinks.forEach((link)=>{
		const page = parseInt(link.getAttribute('data-page'))
		link.classList.toggle('active', page === currentPage)
	})
}

prevButton.addEventListener('click',function () {
	if (currentPage > 1) {
		currentPage --;
		displayPage(currentPage)
        updatePagination()
	}
})

nextButton.addEventListener('click',function () {
	if (currentPage < 3) {
		currentPage ++;
		displayPage(currentPage)
		updatePagination()
	}
})

pageLinks.forEach((value)=>{
     value.addEventListener('click',function (e) {
		e.preventDefault()
		const page = parseInt(value.getAttribute('data-page'))
		if (page !== currentPage) {
			currentPage = page
			displayPage(currentPage)
			updatePagination()
		}
	 })
})

displayPage(currentPage)
updatePagination()