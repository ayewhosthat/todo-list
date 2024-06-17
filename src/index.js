import './style.css';

// function to clear the page
const main = document.querySelector('.main');
function clearPage() {
    main.innerHTML = '';
}

// add event listener to 'new project' button
const newProject = document.querySelector('.add-project');
const projectModal = document.querySelector('.project-modal');
newProject.addEventListener('click', () => {
    // show modal
    projectModal.showModal();
});

// add event listener to close 'new project' form
const closeNewProject = document.querySelector('.close-project-modal');
const newProjectForm = document.querySelector('.new-project-form');
closeNewProject.addEventListener('click', () => {
    projectModal.close();
    newProjectForm.reset();
});