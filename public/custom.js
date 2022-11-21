// JEM OF BACKGROUND Image
      var jemImage = ['dodo-jem/onepiece.jpg', 'dodo-jem/cutething.jpg', 'dodo-jem/smartsheet.jpg', 'dodo-jem/nature3d.jpg', 'dodo-jem/jem.webp', 'dodo-jem/book.webp', 'dodo-jem/climber.webp', 'dodo-jem/light-house.png', 'dodo-jem/medi-nature.png', 'dodo-jem/modern-fueling.webp', 'dodo-jem/nature-boat.png', 'dodo-jem/nature-care.webp', 'dodo-jem/nature-luv.webp', 'dodo-jem/santa.jpg', 'dodo-jem/venture.webp', 'dodo-jem/warming-nature.webp'];
      var jemCount = jemImage.length;
      var randomGenerator = Math.floor(Math.random() * jemCount);

      window.onload = function() {
            const newJem = document.getElementById('randomDashImage');
            newJem.style.backgroundImage = 'url('+jemImage[randomGenerator]+')';
            newJem.style.backgroundPosition = 'center';
            newJem.style.backgroundRepeat = 'no-repeat';
            newJem.style.backgroundSize = 'cover';            
      };