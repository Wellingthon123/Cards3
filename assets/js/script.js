document.addEventListener('DOMContentLoaded', function() {
  var buttons = document.querySelectorAll('.ler_mais');

  buttons.forEach(function(button) {
      button.addEventListener('click', function() {
          var card = button.closest('.card');
          var content = card.querySelector('.content');
          var isActive = card.classList.contains('active');

          
          document.querySelectorAll('.card').forEach(function(otherCard) {
              otherCard.classList.remove('active');
              otherCard.querySelector('.ler_mais').textContent = 'Ler mais';
          });

          
          if (!isActive) {
              card.classList.add('active');
              button.textContent = 'Ler menos';
          } else {
              card.classList.remove('active');
              button.textContent = 'Ler mais';
          }
      });
  });
});


