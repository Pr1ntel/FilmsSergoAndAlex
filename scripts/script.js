function showFilmsItems(filmsItems) {
    let tableFilmsItemsDiv = document.getElementById("table-films-items-div");

    let html = "";

    html += `<table class="table">`;
    html += `<thead>
        <tr>
            <th>№</th>
            <th>Дата</th>
            <th>Задача</th>
            <th>Действие</th>
        </tr>
        </thead>`;
    html += `<tbody>`;

    todoItems.forEach((todoItem, index) => {
        html += `<tr>
                <td>${index + 1}</td>
                <td>${formatDateToDDMMYYYY(new Date(todoItem.date))}</td>
                <td>${todoItem.description}</td>
                <td><button class="btn btn-danger" onclick="buttonDeleteTodoItem_Click(${todoItem.id})">Удалить</button></td>
            </tr>`;
    });

    html += `</tbody>`;
    html += `</table>`;

    tableTodoItemsDiv.innerHTML = html;
}

async function loadFromServerAndShowFilms() {
    let response = await fetch("http://localhost:8080/films/getAll");

    if (response.ok) {
        let FilmsItems = await response.json();
        showTodoItems(todoItems);
    } else {
        let error = await response.json()
        alert(error.errorMessage);
    }
}