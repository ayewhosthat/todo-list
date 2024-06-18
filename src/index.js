import './style.css';

const myProjects = [];
let currentProject = 0;
// this variable keeps track of which project we are viewing so that our program knows which project in our array to modify
// say we are editing the name of a project for example

const projectNameHeading = document.querySelector('.project-name-heading')
function loadProjectName(projectName) {
    projectNameHeading.textContent = projectName;
}
loadProjectName("My First Project");

class Project {
    constructor(name) {
        this.name = name;
    }
    set projectName(newName) {
        this.name = newName;
    }
}

// class for a todo item
class Item {
    constructor(title, description, priority, deadline, notes) {
        this.title = title;
        this.description = description;
        this.priority = priority;
        this.deadline = deadline;
        this.notes = notes;
    }
    set itemTitle(newTitle) {
        this.title = newTitle;
    }
    set itemDescription(newDes) {
        this.description = newDes;
    }
    set itemPriority(newPriority) {
        this.priority = newPriority;
    }
    set itemDeadline(newDeadline) {
        this.deadline = newDeadline;
    }
    set itemNotes(newNote) {
        this.notes = newNote;
    }
}

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

// function to add new project to screen under 'My Projects' section
function addProjectToScreen(projectName) {
    const projectList = document.querySelector('.projects-list');
    const entry = document.createElement('li');
    entry.textContent = projectName;
    projectList.appendChild(entry);
    entry.addEventListener('click', () => {
        loadProjectName(projectName);
    });
};

// add new project to library upon submitting new project name
newProjectForm.addEventListener('submit', (e) => {
    e.preventDefault(); // prevent default behaviour
    const newProjectName = document.getElementById('project-name').value;
    newProjectForm.reset();
    projectModal.close();
    let proj = new Project(newProjectName);
    myProjects.push(proj);
    addProjectToScreen(newProjectName);
});