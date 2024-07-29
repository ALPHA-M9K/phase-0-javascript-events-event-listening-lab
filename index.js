
function addingEventListener() {
    const button = document.getElementById('button');
  
    if (button) {
      button.addEventListener('click', function() {
        alert('I was clicked!');
      });
    } 
  }

  addingEventListener();
  
  