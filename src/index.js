import './style.css';
import Icon from './pencil.svg';
const editIconDiv = document.querySelector('.name-and-icon');
const icon = new Image();
icon.classList.add('edit-icon')
icon.src = Icon;
editIconDiv.appendChild(icon);
const projectHeader = document.createElement('h1');
projectHeader.classList.add('project-name-heading');
editIconDiv.appendChild(projectHeader);
const myProjects = [];
let currentProject = 0;
// this variable keeps track of which project we are viewing so that our program knows which project in our array to modify
// say we are editing the name of a project for example

const projectNameHeading = document.querySelector('.project-name-heading')
function loadProjectName(projectName) {
    projectNameHeading.textContent = projectName;
    projectNameHeading.setAttribute('id', projectName.replace(/\W/g, '').replaceAll(' ', ''));
}

class Project {
    constructor(name) {
        this.name = name;
        this.todoitems = [];
    }
    set projectName(newName) {
        this.name = newName;
    }
    addTodoItem(item) {
        this.todoitems.push(item);
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
    entry.classList.add(projectName.replace(/\W/g, '').replaceAll(' ', '')); // for reference later on when we change the project name
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

// add 'default' project
const myFirstProject = new Project('My First Project');
myProjects.push(myFirstProject);
addProjectToScreen(myFirstProject.name);
loadProjectName(myFirstProject.name);

// show modal to rename project
const renameProject = document.querySelector('.rename-project');
const renameButton = document.querySelector('.edit-icon');
renameButton.addEventListener('click', () => {
    renameProject.showModal();
});

// add event listeners to close/submit the rename project form
const closeRename = document.getElementById('close-rename');
const renameForm = document.getElementById('rename-form');
closeRename.addEventListener('click', () => {
    renameForm.reset();
    renameProject.close()
});

renameForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let searchID = document.querySelector('.project-name-heading').textContent.replace(/\W/g, '').replaceAll(' ', '');
    const projectListItem = document.querySelector(`.${searchID}`);
    // call function to set the name of the project to new value
    const newProjectName = document.getElementById('submit-rename-form').value.replace(/\W/g, '').replaceAll(' ', '');
    projectListItem.textContent = newProjectName;
    // update the class of the original item
    projectListItem.classList.remove(searchID);
    projectListItem.classList.add(newProjectName);
    document.querySelector('.project-name-heading').textContent = newProjectName;
    document.querySelector('.project-name-heading').setAttribute('id', newProjectName);
    renameForm.reset();
    renameProject.close();
});

// show modal for adding an item
const itemModal = document.querySelector('.todo-dialog');
const addTodo = document.querySelector('.add-todo-item');
const addTodoForm = document.getElementById('new-todo-form');
addTodo.addEventListener('click', () => {
    itemModal.showModal();
});

// event listeners for closing the add item modal
const closeNewItem = document.getElementById('close-add-item');
closeNewItem.addEventListener('click', () => {
    addTodoForm.reset();
    itemModal.close();
});

addTodoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('item-name').value;
    const description = document.getElementById('item-description').value;
    const deadline = document.getElementById('item-deadline').value;
    const priority = document.querySelector('#priority:checked').value
    const notes = document.getElementById('item-notes').value;
    addTodoForm.reset();
    itemModal.close();
    // create new todo item
    const newItem = new Item(name, description, deadline, priority, notes);
    // get current project and push new item
    
});