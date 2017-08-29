const formEventsSetup = function () {
    let form = document.querySelector('form');
    form.addEventListener('submit', listener);
};

const listener = function (e) {
    e.preventDefault();
    let formElements = document.getElementById('formGroup').elements;
    let obj = {};
    for (let i = 0; i < formElements.length; i++) {
        let item = formElements.item(i);
        obj[item.name] = item.value;
    }
    console.log(obj);
};
