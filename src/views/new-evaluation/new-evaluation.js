interview.newEvaluationPage = function (options) {
    const newOptions = options || {};

    // get object json for rendering the page
    const newEvaluationObjURL = '../jsonData/newEvaluation.json';

    const newEvaluationPromise = new Promise(((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
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
        xhr.open('GET', newEvaluationObjURL);
        xhr.send();
    }));

    newEvaluationPromise.then((data) => {
        jsonObj = newEvaluationObj; // this is probabily not good
    }).catch((error) => {
        
    });

    let jsonObj = {}

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
        const textareaObj = options.map((el) => `
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

        const elements = options.data.map((object) => fieldset(object));

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
    ${newEvaluationBody(jsonObj)}
    ${interview.commonElements().footer}
    `;
};
