function getAdmins(map) {

    let admins =  [];
    for ([key, value] of map) {
        if (value === 'Admin') {
            getadmins.push(key);
        }
    }
    return admins;
}

const usuarios = new Map();

usuarios.set('Marcia', 'Admin');
usuarios.set('Fernanda', 'Admin');
usuarios.set('Sabrina', 'User');
usuarios.set('Giovanna', 'Admin');

console.log(getAdmins(usuarios));