let tBody    = document.querySelector("#js-tbody"),
    htmlTpl    = document.querySelector("#table-row").textContent.trim(),
    compiled   = _.template(htmlTpl),
    url        = "http://fecore.net.ua/rest/",
    get        = document.querySelector('#get')
    btnAdd     = document.querySelector('#addUser'),
    btnDel     = document.querySelector('.delete'),
    btnRefresh = document.querySelector('#update'),
    updateView = users => {
        let htmlString = "";

        users.forEach(user => {
            htmlString += compiled(user);
        });
        tBody.innerHTML = htmlString;
    };

const getAllUsers = () =>
    fetch(url)
        .then(response => {
            if (response.ok) return response.json();
            throw new Error("Error fetching data");
        })
            .catch(err => {
                console.error("Error: ", err);
            });

const getUsers = () => {
    getAllUsers().then(users => {
        updateView(users); //render User-list according to data
    });
};

const addUser = () => {
    newUrl = `${url}?action=1&name=${document.querySelector('#user').value}&score=${document.querySelector('#score').value}`;
    //make url with access (action=1) to add user to data

    document.querySelector('.add-user').reset(); //clearing input
    fetch(newUrl)
        .then(getUsers)
                .catch(err => {
                    console.error("Error: ", err);
                });
};

const removeUser = () => {
    newUrl = `${url}?action=3&id=${document.querySelector('#restId').value}`;
    //make url with access (action=3) to delete user from data by id

    document.querySelector('.del').reset();
    fetch(newUrl)
        .then(getUsers)
                .catch(err => {
                    console.error("Error: ", err);
                });
};

const updateUser = () => {
    newUrl = `${url}?action=2&id=${document.querySelector("#searchId").value}&name=${document.querySelector('#refreshName').value}&score=${document.querySelector('#refreshScore').value}`;
    //make url with access (action=2) to make change in data
    document.querySelector('.update').reset();
        
    fetch(newUrl)
        .then(getUsers) //update user-list
        .catch(err => {
            console.error("Error: ", err);
        });
};

get.addEventListener('click', getUsers);
btnAdd.addEventListener('click', addUser);
btnDel.addEventListener('click', removeUser);
btnRefresh.addEventListener('click', updateUser);
