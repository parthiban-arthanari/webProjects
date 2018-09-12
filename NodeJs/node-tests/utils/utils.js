module.exports.add = (a,b) => a + b;
module.exports.square = (x) => x * x;

module.exports.asynAdd = (a, b, callback) => {
    setTimeout(() => {
        callback(a + b);
    }, 1000);
}

module.exports.asynSquare = (x, callback) => {
    setTimeout(() => {
        callback(x*x);
    }, 5000);
}

module.exports.setName = (user, fullname) => {
    var name = fullname.split(' ');
    user.firstName = name[0];
    user.lastName = name[1];
    return user;
}