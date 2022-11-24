; (function () {
    "use strict"

    //ARMAZENAR O DOM EM VARIÁVEIS
    const itemInput = document.querySelector('#item-input')
    const todoAddForm = document.querySelector('#todo-add')
    const ul = document.querySelector('#todo-list')
    const lis = ul.getElementsByTagName('li')

    let arrTasks = getSavedData()

    function getSavedData() {
        let tasksData = JSON.parse(localStorage.getItem('tasks'))
        return localStorage.getItem('tasks') !== null ? tasksData : [
            {
                name: "task 1",
                createdAt: Date.now(),
                completed: false
            },
            {
                name: "task 2",
                createdAt: Date.now(),
                completed: false,
            }
        ]
    }

    function setNewData() {
        localStorage.setItem("tasks", JSON.stringify(arrTasks))
    }

    setNewData()

    const generateLiTask = obj => {
        const li = document.createElement('li')
        const p = document.createElement('p')
        const checkButton = document.createElement('button')
        const editButton = document.createElement('i')
        const deleteButton = document.createElement('i')

        li.className = 'todo-item'

        checkButton.className = 'button-check'
        checkButton.innerHTML = `
            <i class="fas fa-check ${obj.completed ? '' : 'displayNone'}" data-action='checkButton'></i>`
        checkButton.setAttribute('data-action', 'checkButton')
        li.appendChild(checkButton)

        p.className = 'task-name'
        p.textContent = obj.name
        li.appendChild(p)

        editButton.className = 'fas fa-edit'
        editButton.setAttribute('data-action', 'editButton')
        li.appendChild(editButton)

        const containerEdit = document.createElement('div')
        containerEdit.className = 'editContainer'

        const inputEdit = document.createElement('input')
        inputEdit.setAttribute('type', 'text')
        inputEdit.className = 'editInput'
        inputEdit.placeholder = obj.name
        containerEdit.appendChild(inputEdit)

        const containerEditButton = document.createElement('button')
        containerEditButton.className = 'editButton'
        containerEditButton.textContent = 'Edit'
        containerEditButton.setAttribute('data-action', 'containerEditButton')
        containerEdit.appendChild(containerEditButton)

        const containerCancelButton = document.createElement('button')
        containerCancelButton.className = ('cancelButton')
        containerCancelButton.textContent = 'Cancel'
        containerCancelButton.setAttribute('data-action', 'containerCancelButton')
        containerEdit.appendChild(containerCancelButton)

        li.appendChild(containerEdit)

        deleteButton.className = 'fas fa-trash-alt'
        deleteButton.setAttribute('data-action', 'deleteButton')
        li.appendChild(deleteButton)

        return li
    }

    const renderTasks = () => {
        ul.innerHTML = ''
        arrTasks.forEach(task => {
            ul.appendChild(generateLiTask(task))
        })
    }

    const addTask = task => {

        arrTasks.push({
            name: task,
            createdAt: Date.now(),
            completed: false
        })
        setNewData()

    }

    const clickedUl = e => {
        const dataAction = e.target.getAttribute('data-action')
        if (!dataAction) return

        let currentLi = e.target
        while (currentLi.nodeName !== "LI") {
            currentLi = currentLi.parentElement
        }

        const currentLiIndex = [...lis].indexOf(currentLi)

        const actions = {
            editButton: () => {
                const editContainer = currentLi.querySelector(".editContainer");

                [...ul.querySelectorAll(".editContainer")].forEach(container => {
                    container.removeAttribute("style")
                });

                editContainer.style.display = "flex"

                currentLi.querySelector('li .editContainer .editInput').focus()
                setNewData()
            },
            deleteButton: () => {
                arrTasks.splice(currentLiIndex, 1)
                renderTasks()
                setNewData()
                itemInput.focus()
            },
            containerEditButton: () => {
                const val = currentLi.querySelector('.editInput').value
                arrTasks[currentLiIndex].name = val
                renderTasks()
                setNewData()
                itemInput.focus()
            },
            containerCancelButton: () => {
                currentLi.querySelector('.editContainer').removeAttribute('style')
                currentLi.querySelector('.editInput').placeholder = arrTasks[currentLiIndex].name
                currentLi.querySelector('.editInput').value = ''

                itemInput.focus()
            },
            checkButton: () => {
                arrTasks[currentLiIndex].completed = !arrTasks[currentLiIndex].completed
                arrTasks[currentLiIndex].completed
                    ? currentLi.querySelector('.fa-check').classList.remove('displayNone')
                    : currentLi.querySelector('.fa-check').classList.add('displayNone')

                renderTasks()
                setNewData()
            }
        }

        if (actions[dataAction]) {
            actions[dataAction]()
        }
    }

    todoAddForm.addEventListener("submit", function (e) {
        e.preventDefault()
        console.log(itemInput.value)
        addTask(itemInput.value)
        renderTasks()

        itemInput.value = ""
        itemInput.focus()
    })

    ul.addEventListener('click', clickedUl)

    renderTasks()

})();