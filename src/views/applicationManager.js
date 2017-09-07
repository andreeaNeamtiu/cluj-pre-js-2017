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
            // render
            const container = document.querySelector('#app');
            container.innerHTML = interview.newEvaluationPage();
            // events
            formEvents.add();
            navEvents.add();
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
