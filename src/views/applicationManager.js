const navEvents = interview.addEventsNavigation();
const formEvents = interview.formEventsSetup();

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
            // get object json for rendering the login page
            const loginObjURL = 'src/jsonData/login.json';
            
            const loginPromise = new Promise(((resolve, reject) => {
                const xhr = new XMLHttpRequest();
                xhr.onreadystatechange = function () {
                    if (this.readyState === 4) {
                        if (this.readyState < 400) {
                            let loginObj;
                            try {
                                loginObj = JSON.parse(xhr.responseText);
                            } catch(e) {
                                console.error("hopaaa", e);
                                reject('error');
                            }
                            resolve(loginObj);
                        }
                        else {
                            reject('Something went terribly wrong!:((');
                        }
                    }
                };
                xhr.open('GET', loginObjURL, true);
                xhr.send();
            }));

            loginPromise.then((data) => {
                // render
                const container = document.querySelector('#app');
                container.innerHTML = interview.loginPage();
                // events
                const loginEvents = interview.eventsLogin(data);
                loginEvents.add();
            }).catch((error) => {
                alert("Sorry... Page can not be loaded!");
            });
        },
        destroy() {
            
            // get object json for destroy the login page
            const loginObjURL = 'src/jsonData/login.json';
  
            const loginPromise = new Promise(((resolve, reject) => {
                const xhr = new XMLHttpRequest();
                xhr.onreadystatechange = function () {
                    if (this.readyState === 4) {
                        if (this.readyState < 400) {
                            let loginObj;
                            try {
                                loginObj = JSON.parse(xhr.responseText);
                            } catch(e) {
                                console.error("hopaaa", e);
                                reject('error');
                            }
                            resolve(loginObj);
                        }
                        else {
                            reject('Something went terribly wrong!:((');
                        }
                    }
                };
                xhr.open('GET', loginObjURL, true);
                xhr.send();
            }));

            loginPromise.then((data) => {
                const loginEvents = interview.eventsLogin(data);
                loginEvents.remove();
            });
        }
    }
};
