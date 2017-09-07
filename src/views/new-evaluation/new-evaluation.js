interview.newEvaluationPage = function(options) {
    const newOptions = options || {};
    
    const jsonObj = {
        technicalLevelElements: {
            title: 'Technical Level',
            headers: ['Trainee', 'Junior', 'Middle', 'Senior'],
            columnData: [
                {
                    inputLevels: ['trainee'],
                },
    
                {
                    inputLevels: ['junior1', 'junior2', 'junior3'],
                },
    
                {
                    inputLevels: ['middle1', 'middle2', 'middle3'],
                },
    
                {
                    inputLevels: ['senior1', 'senior2', 'senior3'],
                },
            ],
        },

        textareaSectionElements: [
            {
                header: 'Should the candidate be hired?',
                placeholder: 'The type of project that is suitable for the candidate. &#10; Is guidance required for the candidate',
            },
            {
                header: 'General Impression',
                placeholder: '*required',
            },
            {
                header: 'Workflow, Leadership &amp; Soft Skills',
                placeholder: 'Describe the environment in which the candidate works. &#10; Describe any guidance or management experience.',
            },
        ],
    
        fieldsetSectionElements: {
            data: [{
                legend: 'OOP, Design Patterns',
                items: [{
                    label: 'Classes',
                    name: 'classes',
                    option: ['1', '2', '3'],
                },
                {
                    label: 'Exception handling',
                    name: 'exceptionHandling',
                    option: ['1', '2', '3'],
                },
                {
                    label: 'Version Control',
                    name: 'versionControl',
                    option: ['1', '2', '3'],
                },
                {
                    label: 'Access Modifiers',
                    name: 'accessModifier',
                    option: ['1', '2', '3'],
                },
                {
                    label: 'Design Patterns',
                    name: 'designPatterns',
                    option: ['1', '2', '3'],
                },
                {
                    label: 'Issue Tracking',
                    name: 'issueTracking',
                    option: ['1', '2', '3'],
                },
                {
                    label: 'Polymorphism',
                    name: 'polymorphism',
                    option: ['1', '2', '3'],
                },
                {
                    label: 'RegEx',
                    name: 'regEx',
                    option: ['1', '2', '3'],
                }],
            },
            {
                legend: 'HTTP',
                items: [{
                    label: 'Protocol',
                    name: 'protocol',
                    option: ['1', '2', '3'],
                },
                {
                    label: 'Response Codes',
                    name: 'responseCodes',
                    option: ['1', '2', '3'],
                },
                {
                    label: 'REST',
                    name: 'rest',
                    option: ['1', '2', '3'],
                },
                {
                    label: 'Headers',
                    name: 'headers',
                    option: ['1', '2', '3'],
                },
                {
                    label: 'Request Methods',
                    name: 'requestMethods',
                    option: ['1', '2', '3'],
                },
                {
                    label: 'Sessions &amp; Cookies',
                    name: 'sessions',
                    option: ['1', '2', '3'],
                }],
            },
            {
                legend: 'HTML',
                items: [{
                    label: 'Doctype',
                    name: 'doctype',
                    option: ['1', '2', '3'],
                },
                {
                    label: 'Tags',
                    name: 'tags',
                    option: ['1', '2', '3'],
                },
                {
                    label: 'Basic SEO',
                    name: 'basicSeo',
                    option: ['1', '2', '3'],
                },
                {
                    label: 'Syntax rules',
                    name: 'syntaxRules',
                    option: ['1', '2', '3'],
                },
                {
                    label: 'Attributes',
                    name: 'attributes',
                    option: ['1', '2', '3'],
                }],
            },
            {
                legend: 'CSS',
                items: [{
                    label: 'Usage',
                    name: 'usage',
                    option: ['1', '2', '3'],
                },
                {
                    label: 'Box Modeling',
                    name: 'boxModeling',
                    option: ['1', '2', '3'],
                },
                {
                    label: 'CSS 3.0',
                    name: 'css',
                    option: ['1', '2', '3'],
                },
                {
                    label: 'Selectors',
                    name: 'selectors',
                    option: ['1', '2', '3'],
                },
                {
                    label: 'Styling',
                    name: 'styling',
                    option: ['1', '2', '3'],
                },
                {
                    label: 'Dynamic stylesheet',
                    name: 'dynamicStylesheet',
                    option: ['1', '2', '3'],
                }],
            },
            {
                legend: 'Javascript',
                items: [{
                    label: 'Data types &amp; variables',
                    name: 'dataTypesAndVariables',
                    option: ['1', '2', '3'],
                },
                {
                    label: 'Object Manipulation',
                    name: 'objectManipulation',
                    option: ['1', '2', '3'],
                },
                {
                    label: 'DOM Manipulation',
                    name: 'domManipulation',
                    option: ['1', '2', '3'],
                },
                {
                    label: 'Functions',
                    name: 'functions',
                    option: ['1', '2', '3'],
                },
                {
                    label: 'Templating',
                    name: 'templating',
                    option: ['1', '2', '3'],
                }, {
                    label: 'Event Handling',
                    name: 'eventHandling',
                    option: ['1', '2', '3'],
                }, {
                    label: 'Prototype &amp; OOP',
                    name: 'prototype',
                    option: ['1', '2', '3'],
                }, {
                    label: 'Testing(unit, E2E)',
                    name: 'testing',
                    option: ['1', '2', '3'],
                }, {
                    label: 'AJAX',
                    name: 'ajax',
                    option: ['1', '2', '3'],
                }, {
                    label: 'Debugging',
                    name: 'debugging',
                    option: ['1', '2', '3'],
                }, {
                    label: 'Websockets',
                    name: 'websockets',
                    option: ['1', '2', '3'],
                }, {
                    label: 'Tooling',
                    name: 'tooling',
                    option: ['1', '2', '3'],
                }, {
                    label: 'Libraries',
                    name: 'libraries',
                    option: ['1', '2', '3'],
                }, {
                    label: 'Promises',
                    name: 'promises',
                    option: ['1', '2', '3'],
                }, {
                    label: 'Browser Engines',
                    name: 'browserEngines',
                    option: ['1', '2', '3'],
                }, {
                    label: 'Frameworks',
                    name: 'frameworks',
                    option: ['1', '2', '3'],
                }],
            },
            {
                legend: 'NodeJs',
                items: [{
                    label: 'Backend frameworks',
                    name: 'backendFrameworks',
                    option: ['1', '2', '3'],
                },
                {
                    label: 'Templating',
                    name: 'templating',
                    option: ['1', '2', '3'],
                },
                {
                    label: 'DOM Manipulation',
                    name: 'domM',
                    option: ['1', '2', '3'],
                },
                {
                    label: 'Unit Testing',
                    name: 'unitTesting',
                    option: ['1', '2', '3'],
                }],
            }],
        }
    }

    // page elements
    function newEvaluationBody(options = {}) {
        return `
        <!-- Section1 -->
        <div class = "fieldset-container">
            <form id="formGroup" method="POST" action="action.php">
            
            ${inputSection()}
            ${technicalLevel(options.technicalLevelElements)}
            ${textareaSection(options.textareaSectionElements)}
                <section>
                    ${fieldsetSection(options.fieldsetSectionElements)}
                    <button class="submitButton" id="submitButton" type = "submit" name = "submit">SUBMIT</button>
                </section>
            </form>
        </div>
        `;
    }
    
    function inputSection(options = {}) {
        return `
        <section>
            <input type = "name" name = "candidate" placeholder = "Candidate">
            <input type = "name" name = "interviewer" placeholder = "Interviewer">
            <input type = "date" name = "date">
        </section>
        `;
    }
    
    function technicalLevelTableHeader(options = {}) {
        const headerElements = options.map((header) => `
                <th>${header}</th>
            `);
        return headerElements.join('');
    }
    
    function technicalLevelTableColumn(options = {}) {
        const column = options.inputLevels.map((input) => `
            <input type = "radio" name = "technicalLevel" value = "${input}">
            `);
        return `
        <td>
            ${column.join('')}
        </td>
        `;
    }
    
    function technicalLevelTableBody(options = {}) {
        const inputElements = options.map((items) => technicalLevelTableColumn(items));
        const row = inputElements.join('');
        return `
        <tr class = "radioButtons">
        ${inputElements}
        </tr>
        `;
    }
    
    function technicalLevel(options = {}) {
        return `
        <!-- Section2 -->
        <section>
            <h2>${options.title}</h2>
            <table>
            <tr>
                ${technicalLevelTableHeader(options.headers)}
            </tr>
                ${technicalLevelTableBody(options.columnData)}
                
            </table>
        </section>
        `;
    }
    
    function textarea(options = {}) {
        return `
            <h2>${options.header}</h2>
            <textarea name = "${options.header}" rows = "6" cols = "" placeholder = "${options.placeholder}"></textarea>
        `;
    }
    
    function textareaSection(options = {}) {
        const  textareaObj = options.map((el) => `
            <section>
                ${textarea(el)}
            </section>
        `);
        return textareaObj.join('');
    }
    
    function listItem(options = {}) {
        const optionTag = options.map((el) => {
            const optionElement = el.option.map((elem) => `
                <option>${elem}</option>
                `);
    
            return `
            <li>
                <label>${el.label}</label>
                <select name="${el.name}">
                    <option selected="selected" disabled>Elements</option>
                    ${optionElement.join('')}
                </select>
            </li>
            `;
        });
    
        return optionTag.join('');
    }
    
    function fieldsetSection(options = {}) {
        /*
        function fieldset(p) {
            return `<div>${p.legend}</div>`
        } */
    
        const elements = options.data.map((object) => fieldset(object) );
    
        return elements.join('');
    }
    /*
        fieldsetSectionElement.data = [obj1, onj2]
        elements = []
        
        1 iteration
        object => obj1
        elements => ['<div>OOP, Design Patterns</div>']
    
        2 iteration
        object => obj2
        elements => ['<div>OOP, Design Patterns</div>', '<div><HTTP/div>']
        */
    
    function fieldset(options = {}) {
        return `
        <fieldset>
            <legend>${options.legend}</legend>
            <ul>
                ${listItem(options.items)}
            </ul>
        </fieldset>
        `;
    }

    return `
    ${interview.commonElements().nav}
    ${newEvaluationBody(
        jsonObj
    )}
    ${interview.commonElements().footer}
    `;
}