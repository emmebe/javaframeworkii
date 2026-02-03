function sayHi() {
    alert("Hi!");
}

let sayBye = function() {
    alert("Bye now!");
};

let func = sayHi;

func();
sayHi();

function ask(question, yes, no) {
    if (confirm(question)) yes();
    else no();
}

ask(
    "Do you agree?",
    function() { alert("You agreed."); },
    function() { alert("You canceled the execution."); }
)
