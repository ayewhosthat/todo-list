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