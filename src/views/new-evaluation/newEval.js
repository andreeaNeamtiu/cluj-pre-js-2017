const formEventsSetup = function () {
    let form = document.querySelector('form');
    form.addEventListener('submit', listener);
};

const listener = function (e) {
    e.preventDefault();
    let radioInputs = document.querySelectorAll('input');
    let selectElements = document.querySelectorAll('select');
    let textareaElements = document.querySelectorAll('textarea');

    let obj = {};
    selectElements.forEach(function(item) {
        obj[item.name] = item.value;
    })

    textareaElements.forEach(function(item) {
        obj[item.name] = item.value;
    })    

    for (let i = 0; i < radioInputs.length; i++) {
        let item = radioInputs.item(i);

        if(item.checked || item.type === "text" || item.type === "date") {
            obj[item.name] = item.value;
        }
    }
    console.log(obj);

    //local storage
    let arr = [];
    if(localStorage.length !== 0) {
        arr = JSON.parse(localStorage.getItem("evaluations"));
    }
    arr.push(obj);
    localStorage.setItem("evaluations", JSON.stringify(arr));
};