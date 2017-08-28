const formEventsSetup = function () {
    var form = document.querySelector("form");
    form.addEventListener('submit', listener);
}

const listener = function (e) {
    e.preventDefault();
    var formElements = document.getElementById("formGroup").elements;
    var obj = {};
    for(let i = 0; i < formElements.length; i++) {
        var item = formElements.item(i);
        obj[item.name] = item.value;
    }
    console.log(obj);
};

