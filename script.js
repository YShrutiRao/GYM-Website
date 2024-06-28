document.addEventListener("DOMContentLoaded", function() {
    
    const menuButton = document.querySelector('.menu-button');
    const navLinks = document.querySelector('.nav_links');
    menuButton.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  
    
    const exploreCards = document.querySelectorAll('.explore_card');
    let currentCardIndex = 0;
    const totalCards = exploreCards.length;
  
    function showCard(index) {
      exploreCards.forEach(card => {
        card.style.display = 'none';
      });
      exploreCards[index].style.display = 'block';
    }
  
    function nextCard() {
      currentCardIndex = (currentCardIndex + 1) % totalCards;
      showCard(currentCardIndex);
    }
  
    function prevCard() {
      currentCardIndex = (currentCardIndex - 1 + totalCards) % totalCards;
      showCard(currentCardIndex);
    }
  
    const explorePrevBtn = document.querySelector('.explore_nav span:first-child');
    const exploreNextBtn = document.querySelector('.explore_nav span:last-child');
    explorePrevBtn.addEventListener('click', prevCard);
    exploreNextBtn.addEventListener('click', nextCard);
  
    
    const modalButtons = document.querySelectorAll('.btn');
    const modalOverlay = document.querySelector('.modal-overlay');
  
    modalButtons.forEach(button => {
      button.addEventListener('click', () => {
        modalOverlay.classList.add('active');
      });
    });
  
    modalOverlay.addEventListener('click', event => {
      if (event.target === modalOverlay) {
        modalOverlay.classList.remove('active');
      }
    });
  });
  