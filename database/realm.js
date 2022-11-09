import Realm from 'realm';

export const SCHEMA_NAME = 'Todo';

export const TodoSchema = {
    name: SCHEMA_NAME,
    properties: {
        id: 'int',
        title: 'string',
        dueDate: 'string',
        status: 'string',
    },
    primaryKey: 'id',
};

const dbOptions = {
    path: 'todoMobi.realm',
    schema: SCHEMA_NAME,
}

export const insertTodo = (todo) => new Promise((resolve, reject) => {
    Realm.open(dbOptions)
        .then(realm => {
            realm.write( () => {
                realm.create(SCHEMA_NAME, todo);
                resolve(todo);
            })
        }).catch((error) => {
            reject(error);
        })
})

export const getAllTodos = (username) => new Promise((resolve, reject) => {
    Realm.open(dbOptions)
        .then(realm => {
            let todos = realm.objects(SCHEMA_NAME).filtered(`user=='${username}'`);
            resolve(todos);
        }).catch((error) => {
            reject(error);
        })
})

export const updateTodo = (todo) => new Promise((resolve, reject) => {
    Realm.open(dbOptions)
        .then(realm => {
            realm.write( () => {
                todo.status = JSON.stringify(!JSON.parse(todo.status));
            })
            resolve(todo);
        }).catch((error) => {
            reject(error);
        })
})