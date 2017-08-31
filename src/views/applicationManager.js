/*
//factory pattern
const setup = function() {}

setup.prototype.app = function (options) {
    if(options.isLogged === false) {
        return {
            view: new LoginPage(),
            setupEvents: new AddEventsLogin()
        }
    }
    return {
        view: new EvaluationsPage(),
        setupEvents: new navEvents()
    }
};*/