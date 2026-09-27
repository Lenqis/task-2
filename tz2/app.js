let users = [
    { name: 'Иван', age: 17 },
    { name: 'Савелий', age: 18 },
    { name: 'Аккакий', age: 27 },
    { name: 'Наталья', age: 10 },
    { name: 'Владислав', age: 67 }
];

function filterAdults(users) {
    let adultUsers = []
    for (let i = 0; i < users.length; i++) {
        if (users[i].age >= 18) {
            adultUsers.push(users[i]);
        };
    };
    return adultUsers;
};

let result = filterAdults(users);

for (let i = 0; i < result.length; i++) {
    console.log(result[i])
};