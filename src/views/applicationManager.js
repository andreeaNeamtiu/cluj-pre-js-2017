const navEvents = interview.addEventsNavigation();
const formEvents = interview.formEventsSetup();
const loginEvents = interview.eventsLogin();
// set up the collection of modules that app can use
interview.modules = {

    evaluations: {
        init() {
            // render
            const container = document.querySelector('#app');
            container.innerHTML = interview.evaluationsPage();
            // events
            navEvents.add();
        },
        destroy() {
            navEvents.remove();
        }
    },

    newEvaluation: {
        init() {
            // get object json for rendering the new evaluation page
            const newEvaluationObjURL = 'src/jsonData/newEvaluation.json';

            const newEvaluationPromise = new Promise(((resolve, reject) => {
                const xhr = new XMLHttpRequest();
                xhr.onreadystatechange = function () {
                    if (this.readyState === 4) {
                        if (this.readyState < 400) {
                            let newEvaluationObj;
                            try {
                                newEvaluationObj = JSON.parse(xhr.responseText);
                            } catch(e) {
                                console.error("hopaaa", e);
                                reject('error');
                            }
                            resolve(newEvaluationObj);
                        }
                        else {
                            reject('Something went terribly wrong!:((');
                        }
                    }
                };
                xhr.open('GET', newEvaluationObjURL, true);
                xhr.send();
            }));

            newEvaluationPromise.then((data) => {
                // render
                const container = document.querySelector('#app');
                container.innerHTML = interview.newEvaluationPage(data);
                // events
                formEvents.add();
                navEvents.add();
            }).catch((error) => {
                alert("Sorry... Page can not be loaded!");
            });
        },
        destroy() {
            formEvents.remove();
            navEvents.remove();
        }
    },

    login: {
        init() {
            // render
            const container = document.querySelector('#app');
            container.innerHTML = interview.loginPage();
            // events
            loginEvents.add();
        },
        destroy() {
            loginEvents.remove();
        }
    }
};
