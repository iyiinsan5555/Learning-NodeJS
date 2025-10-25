

function add(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function subst(a, b) {
    return a - b;
}

function absolute(n) {
    if (n < 0) {
        return n * -1;
    } else {
        return n;
    }
}


module.exports.functions = {add, divide, subst, multiply, absolute}