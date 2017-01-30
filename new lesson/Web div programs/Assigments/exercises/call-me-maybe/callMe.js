var names = ["Anna", "Bill", "Charlay", "Dexter", "Emily", "Frank", "George", "Hal", "Isaac", "Jill"];
for (var i = 0; i < names.length; i++) {
    attemptCall(names[i], dontCall, call, sendText);
}

function attemptCall(name, dontCall, call, sendText) {
    var count = 0;
    for (var i = 0; i < name.length; i++) {
        if (name.charAt(i).toUpperCase() === 'A') {
            count++;
        }
    }
    if (count > 1) {
        sendText(name);
    } else if (name.length % 2 !== 0) {
        dontCall(name);
    } else if (name.length % 2 === 0) {
        call(name);
    }
}

function dontCall(name) {
    console.log("you didn't call " + name);
}

function call(name) {
    console.log("you called " + name);
}

function sendText(name) {
    console.log("send message " + name);
}