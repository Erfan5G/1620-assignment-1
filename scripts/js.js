//-------------------------------------| Dark them button(first way) |--------------------------------------------------------

// const ThemeBtnref = document.querySelector('.Dark-theme')
// function themechanger () { 
//     ThemeBtnref.classList.toggle('active');
//     if (ThemeBtnref.classList.contains('active')) {
//         const selectheader = document.querySelector('header') 
//         console.log(selectheader)
//         selectheader.classList.add('black-back')
//         const selectnote = document.querySelector('.NOTES') 
//         selectnote.classList.add("white-text")
//         const selectlist = document.querySelector('ul') 
//         selectlist.classList.add('white-text')
//         const selectmain = document.querySelector('main') 
//         selectmain.classList.add('gray-back') 
//         selectmain.classList.add('birght-text')
//         ThemeBtnref.textContent = 'Light';
//         const selectFooter = document.querySelector('.Footer-Text') 
//         selectFooter.classList.add('birght-text') 
//         const seletfooterimages = document.querySelector('.Footer-images')
//         seletfooterimages.classList.add('black-back')
        
        
//     }
//     else{
//         const selectheader = document.querySelector('header') 
//         selectheader.classList.remove('black-back')
//         const selectnote = document.querySelector('.NOTES') 
//         selectnote.classList.remove("white-text")
//         const selectlist = document.querySelector('ul') 
//         selectlist.classList.remove('white-text')
//         const selectmain = document.querySelector('main') 
//         selectmain.classList.remove('gray-back') 
//         selectmain.classList.remove('birght-back')
//         ThemeBtnref.textContent = 'Dark';
//         const selectFooter = document.querySelector('.Footer-Text') 
//         selectFooter.classList.remove('birght-text') 
//         const seletfooterimages = document.querySelector('.Footer-images')
//         seletfooterimages.classList.remove('black-back')
        
//     }
// }
// ThemeBtnref.addEventListener('click', themechanger)


//==================------------------| Dark them button(Second way)-easier |-------------------------===================
const ThemeBtnref = document.querySelector('.Dark-theme');

function toggleTheme() {
  ThemeBtnref.classList.toggle('active');

  if (ThemeBtnref.classList.contains('active')) {
    applyDarkTheme();
  } else {
    applyLightTheme();
  }
}

function applyDarkTheme() {
  document.querySelector('header').classList.add('black-back');
  document.querySelector('.NOTES').classList.add('white-text');
  document.querySelector('ul').classList.add('white-text');
  document.querySelector('main').classList.add('gray-back', 'birght-text');
  document.querySelector('.Footer-Text').classList.add('birght-text');
  document.querySelector('.Footer-images').classList.add('gray-back');
  document.querySelector('textarea').classList.add('dark-back')

  ThemeBtnref.textContent = 'Light';
}

function applyLightTheme() {
  document.querySelector('header').classList.remove('black-back');
  document.querySelector('.NOTES').classList.remove('white-text');
  document.querySelector('ul').classList.remove('white-text');
  document.querySelector('main').classList.remove('gray-back', 'birght-text');
  document.querySelector('.Footer-Text').classList.remove('birght-text');
  document.querySelector('.Footer-images').classList.remove('gray-back');

  ThemeBtnref.textContent = 'Dark';
}

ThemeBtnref.addEventListener('click', toggleTheme);



//=---------------------------------------| Notes Functions |-------------------------------------------------------------=
// # Declare notesArray
let notesArray = [
    { title: "Note one", body: "First Default Note " },
    { title: "Note two", body: "Second Defualt Note provided in the JS " }
  ];
  
  // Define and target the DOM 
  const cancelButton = document.querySelector(".Cancel");
  const newNoteButton = document.querySelector(".New-Note");
  const saveButton = document.querySelector(".Save");
  const textarea = document.querySelector("textarea");
  const sidebar = document.querySelector("ul");
  
  //Hiding Save-Cancel Buttons and Textarea "when page is loaded", using Hide class 
  cancelButton.classList.add("HIDE")
  saveButton.classList.add("HIDE")
  textarea.classList.add("HIDE")
  
  // Function to hide textarea, save and cancel buttons
  function hideElements() {
    cancelButton.classList.add("HIDE");
    saveButton.classList.add("HIDE");
    textarea.classList.add("HIDE");
  }
  
  // Function to show textarea, save and cancel buttons
  function showElements() {
    cancelButton.classList.remove("HIDE");
    saveButton.classList.remove("HIDE");
    textarea.classList.remove("HIDE");
  }
  
  // Event listener for "Cancel" button
  cancelButton.addEventListener("click", hideElements);
  
  // Event listener for "new note" button
  newNoteButton.addEventListener("click", function() {
    if (textarea.classList.contains('HIDE')) {
      showElements();
      // textarea.textContent = ''   -->   Doesn't work here! 
      textarea.value = ""; 
    }  else {
        let sure = prompt('If you type yes your text is gone and if you want to cancel, type no') 
        if (sure.toLowerCase() === 'yes'){
            hideElements()
        } else {
            alert("Cancelled! ")
        }
        
    }
    
  });
  
  // When clicking save button 
  saveButton.addEventListener("click", function() {
    const noteTitle = prompt("Please enter a title for your note:");
    //Check if the user response is Valid 
    if (noteTitle !== null && noteTitle.trim() !== "") {
      // Add new note to notes titles we  already have ! Here also textContent doesn't work! 
      notesArray.push({ title: noteTitle, body: textarea.value });
  
      // Add a new note to sidebar
      const newNoteListItem = document.createElement("li");
      newNoteListItem.textContent = noteTitle;
      sidebar.appendChild(newNoteListItem);
  
      // Hide textarea, save and cancel buttons
      hideElements();
    }
  });
  
  // Event listener for sidebar
  sidebar.addEventListener("click", function(event) {
    // Check if clicked element is a list item
    showElements()
    if (event.target.tagName === "LI") {
      // Find if the target is in the sidebar or not 
      const clickedTitle = event.target.textContent;

      //About this line of code: It takes a function as an argument, 
      // which is an arrow function that checks if the title property of each object in the notesArray,
      //is equal to clickedTitle! 

      const clickedNote = notesArray.find(note => note.title === clickedTitle);
  
      // Display clicked note in textarea
      textarea.value = clickedNote.body;
    }
  });
  