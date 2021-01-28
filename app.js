const editableElement = document.querySelector('#editableText');
editableElement.contentEditable = true;

editableElement.addEventListener('keydown', e => {
   if(e.keyCode === 13) {
      editableElement.blur();
   }
});