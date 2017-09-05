const interview = {};

// find page
page = [];
if (page == 0) {
    page = 'login';
} 
else {
//   destroy(lastPage);
//    init(newPage);
}
//modules
interview.modules = {
    moduleEvaluations: {
        init() {
            const container = document.querySelector('#app');
            //render
            container.innerHTML = interview.EvaluationsPage();
            //events
            interview.AddEventsNavigation();
        },
    },

    moduleNewEvaluation: {
        init() {
            const container = document.querySelector('#app');
            //render
            container.innerHTML = interview.newEvaluationPage();
            //events
            interview.formEventsSetup();
            interview.AddEventsNavigation();
        },
    },

    moduleLogin: {
        init() {
            const container = document.querySelector('#app');
            //render
            container.innerHTML = interview.LoginPage();
            //events
            interview.AddEventsLogin();
        },
    }

    /*const removeEvents = {
        for (let i = 0; i < elements.length; i++) {
            let element = elements[i];
            element.removeEventListener();
        }
    };
    
    const destroyPage = function() {
        removeEvents();
        elements = undefined;
    } */
};
