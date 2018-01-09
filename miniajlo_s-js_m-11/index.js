let tBody    = document.querySelector("#js-tbody"),
    htmlTpl    = document.querySelector("#table-row").textContent.trim(),
    compiled   = _.template(htmlTpl),
    refresh    = document.querySelector('#refresh'),
    url        = "http://fecore.net.ua/rest/",
    btnAdd     = document.querySelector('#addUser'),
    btnDel     = document.querySelector('.delete'),
    btnRefresh = document.querySelector('#refresh'),
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
        updateView(users);
    });
};

const addUser = () => {
    let user = document.querySelector('#user').value,
        score = document.querySelector('#score').value,
        newUrl = `${url}?action=1&name=${user}&score=${score}`;
    document.querySelector('#score').value = "";
    document.querySelector('#user').value = "";

    fetch(newUrl, {
            method: "post",
            mode: "cors",
        })
            .then(response => {
                if (response.ok) return response.json();
                throw new Error("Error fetching data");
            })
                .catch(err => {
                    console.error("Error: ", err);
                });
};

const removeUser = () => {
    let id      = document.querySelector('#restId').value,
        newUrl  = `${url}?action=3&id=${id}`;
    document.querySelector('#restId').value = "";
    fetch(newUrl, {
            method: 'post',
        })
            .then(response => {
                if (response.ok) return response.json();
                throw new Error("Error fetching data");
            })
                .catch(err => {
                    console.error("Error: ", err);
                });
};

const updateUser = () => {
    let searchId     = document.querySelector("#searchId").value,
        refreshName  = document.querySelector('#refreshName').value,
        refreshScore = document.querySelector('#refreshScore').value;
        newUrl       = `${url}?action=2&id=${searchId}&name=${refreshName}&score=${refreshScore}`;
        document.querySelector("#searchId").value = "";
        document.querySelector('#refreshName').value = "";
        document.querySelector('#refreshScore').value = "";
    fetch(newUrl, {
            method: 'post',
        })
        .then(response => {
            if (response.ok) return response.json();
            throw new Error("Error fetching data");
        })
        .catch(err => {
            console.error("Error: ", err);
        });
};

refresh.addEventListener('click', getUsers);
btnAdd.addEventListener('click', addUser);
btnDel.addEventListener('click', removeUser);
btnRefresh.addEventListener('click', updateUser);