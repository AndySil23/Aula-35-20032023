const users = [
    "usuário 1",
    "usuário 2",
    "usuário 3"
];


function createUser() {
    console.log("usuário criado!");
};

function updateUser() {
    console.log("usuário atualizado!");
};

function listUser() {
    return "lista de usuários";
};

function deleteteUser() {
    console.log("usuário deltado!");
};



module.exports = {
    users,
    createUser,
    listUser,
    updateUser,
    deleteteUser
};