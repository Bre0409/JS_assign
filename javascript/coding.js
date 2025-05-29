// style X on header with color and size. create underline on hover(mouseover)

function styleHeaderLinks() {
  const headerLinks = document.querySelectorAll('header a');
  
  headerLinks.forEach(link => {
    link.style.color = '#fff';
    link.style.fontSize = '40px';
    link.style.textDecoration = 'none';

    link.addEventListener('mouseover', () => {
      link.style.textDecoration = 'underline';
    });

    link.addEventListener('mouseout', () => {
      link.style.textDecoration = 'none';
    });
  });
}

document.addEventListener('DOMContentLoaded', styleHeaderLinks);

// When blue pill(enter) clicked hide buttons, display 3 boxes and display X on header

      function showBoxes(){
        const boxes = document.querySelector('.boxes');
        boxes.style.display = 'grid'
      }
     
      function hideButton(){
        const buttons = document.querySelector('.codingbtns');
        buttons.style.display = 'none'
      }
     
      function displayNavbar(){
        const buttons = document.querySelector('header');
        buttons.style.display = 'flex'
      }
      