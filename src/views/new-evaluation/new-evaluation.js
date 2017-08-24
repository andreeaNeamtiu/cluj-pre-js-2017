function newEvaluationPage (options) {
    const newOptions = options || {};

    const technicalLevelElements =  {
        title: 'Technical Level',
        headers: ['Trainee', 'Junior', 'Middle', 'Senior'],
        columnData: [
          {
            inputLevels: ['trainee']
          },
          
          {
            inputLevels: ['junior1', 'junior2', 'junior3']
          },
          
          {
            inputLevels: ['middle1', 'middle2', 'middle3']
          },
          
          {
            inputLevels: ['senior1', 'senior2', 'senior3']
          }
        ]
      }

    const textareaSectionElements = [
        {
          header: 'Should the candidate be hired?',
          placeholder: 'The type of project that is suitable for the candidate. &#10; Is guidance required for the candidate'
        },
        {
          header: 'General Impression',
          placeholder: '*required'
        },
        {
          header: 'Workflow, Leadership &amp; Soft Skills',
          placeholder: 'Describe the environment in which the candidate works. &#10; Describe any guidance or management experience.'
        }
      ]

    return `
    ${NAV()}
    ${newEvaluationBody(
        technicalLevelElements
    )}
    ${Footer()}
    `;
}

function newEvaluationBody (options={}) {
    return `
    <!-- Section1 -->
	<div class = "fieldset-container">
        <form method="POST" action="action.php">
        
        ${inputSection()}
        ${technicalLevel(options)}
        ${textareaSection()}
            <section>
                ${fieldsetSection()}
                <button id = "submitButton" type = "submit" name = "submit">SUBMIT</button>
            </section>
        </form>
	</div>
    `;
}

function inputSection (options={}) {
    return `
    <section>
        <input type = "name" name = "candidate" placeholder = "Candidate">
        <input type = "name" name = "interviewer" placeholder = "Interviewer">
        <input type = "date" name = "date">
    </section>
    `;
}
function technicalLevelTableHeader (options={}) {

    const headerElements = options.map(function(header) {
        return `
            <th>${header}</th>
        `;
    })
    return headerElements.join('');
}

function technicalLevelTableColumn (options={}) {
    const column = options.inputLevels.map(function(input) {
        return `
        <input type = "radio" name = "technicalLevel" value = "${input}">
        `;
    }) 
    return`
    <td>
        ${column.join('')}
    </td>
    `;
}

function technicalLevelTableBody (options={}) {

    const inputElements = options.map(function(items) {
        return technicalLevelTableColumn(items);
    })
    const row = inputElements.join('');
   return `
    <tr class = "radioButtons">
    ${inputElements}
    </tr>
    `;
}
function technicalLevel (options={}) {
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

function textarea (options={}) {
    return `
    <section>
        <h2>${options.header}</h2>
        <textarea rows = "6" cols = "" placeholder = "${options.placeholder}"></textarea>
    </section>
    `;
}

function textareaSection (options={}) {
    return `
    ${textarea({
        header: 'Should the candidate be hired?',
        placeholder: 'The type of project that is suitable for the candidate. &#10; Is guidance required for the candidate'
      })}
    ${textarea({
        header: 'General Impression',
        placeholder: '*required'
      })}
    ${textarea({
        header: 'Workflow, Leadership &amp; Soft Skills',
        placeholder: 'Describe the environment in which the candidate works. &#10; Describe any guidance or management experience.'
      })}
    `;
}

function listItem (options={}) {
    /*const optionTag = options.items.map(function(optionsTag){
        return fieldset(optionsTag)
    })
    const elem = optionTag.join('');*/
    return `
    <li>
        <label>${options.label}</label>
        <select name = "classes">
            <option disabled></option>
        </select>
    </li>
    `;
}

function fieldsetSection (options={}) {
    const data = {

        legend: 'OOP, Design Patterns',
        label: 'Classes',
        items: ['Evaluation']
    };
    
    return `
    ${fieldset(data)}
    ${fieldset(data)}
    ${fieldset(data)}
    ${fieldset(data)}
    ${fieldset(data)}
    ${fieldset(data)}
    `;
}
function fieldset (options={}) {
    return `
    <!-- Section6 -->
    <fieldset>
        <legend>${options.legend}</legend>
        <ul>
            ${listItem({label: options.label, items: options.items})}
        </ul>
    </fieldset>
    `;
}

function fieldsetSection2 (options={}) {
    return`
    <fieldset>
    <legend>HTTP</legend>
    <ul>
        <li>
            <label>Protocol</label>
            <select name = "protocol">
                <option disabled>Evaluation</option>
            </select>
        </li>
        <li>
            <label>Response codes</label>
            <select name = "responseCodes">
                <option disabled>Evaluation</option>
            </select>
        </li>
        <li>
            <label>REST</label>
            <select name = "rest">
                <option disabled>Evaluation</option>
            </select>
        </li>
        <li>
            <label>Headers</label>
            <select name = "headers">
                <option disabled>Evaluation</option>
            </select>
        </li>
        <li>
            <label>Request methods</label>
            <select name = "requestMethods">
                <option disabled">Evaluation</option>
            </select>
        </li>
        <li>
            <label>Sessions &amp; Cookies</label>
            <select name = "sessionsCookies">
                <option disabled>Evaluation</option>
            </select>
        </li>
    </ul>
</fieldset>
    `;
}

function fieldsetSection3(options={}) {
    return `
    <fieldset>
    <legend>HTML</legend>
    <ul>
        <li>
            <label>Doctype</label>
            <select name = "doctype">
                <option disabled>Evaluation</option>
            </select>
        </li>
        <li>
            <label>Tags</label>
            <select name = "tags">
                <option disabled>Evaluation</option>
            </select>
        </li>
        <li>
            <label>Basic SEO</label>
            <select name = "basicseo">
                <option disabled>Evaluation</option>
            </select>
        </li>
        <li>
            <label>Syntax rules</label>
            <select name = "syntaxRules">
                <option disabled>Evaluation</option>
            </select>
        </li>
        <li>
            <label>Attributes</label>
            <select name = "attributes">
                <option disabled>Evaluation</option>
            </select>
        </li>
    </ul>
    </fieldset>
    `;
}

function fieldsetSection4(options={}) {
    return `
    <fieldset>
    <legend>CSS</legend>
    <ul>
        <li>
            <label>Usage</label>
            <select name = "usage">
                <option disabled>Evaluation</option>
            </select>
        </li>
        <li>
            <label>Box modeling</label>
            <select name = "boxModeling">
                <option disabled>Evaluation</option>
            </select>
        </li>
        <li>
            <label>CSS 3.0</label>
            <select name = "css">
                <option disabled>Evaluation</option>
            </select>
        </li>
        <li>
            <label>Selectors</label>
            <select name = "selectors">
                <option disabled>Evaluation</option>
            </select>
        </li>
        <li>
            <label>Styling</label>
            <select name = "styling">
                <option disabled>Evaluation</option>
            </select>
        </li>
        <li>
            <label>Dynamic Stylesheets</label>
            <select name = "dynamicStylesheets">
                <option disabled>Evaluation</option>
            </select>
        </li>
    </ul>
</fieldset>
    `;
}

function fieldsetSection5(options={}) {
    return `
    <fieldset>
    <legend>Javascript</legend>
    <ul>
        <li>
            <label>Data types &amp; variables</label>
            <select name = "dataTypesVariables">
                <option disabled>Evaluation</option>
            </select>
        </li>
        <li>
            <label>Object manipulation</label>
            <select name = "objectManipulation">
                <option disabled>Evaluation</option>
            </select>
        </li>
        <li>
            <label>DOM Manipulation</label>
            <select name = "domManipulation">
                <option disabled>Evaluation</option>
            </select>
        </li>
        <li>
            <label>Functions</label>
            <select name = "functions">
                <option disabled>Evaluation</option>
            </select>
        </li>
        <li>
            <label>Templating</label>
            <select name = "templating">
                <option disabled>Evaluation</option>
            </select>
        </li>
        <li>
            <label>Event Handling</label>
            <select name = "eventHandling">
                <option disabled>Evaluation</option>
            </select>
        </li>
        <li>
            <label>Prototype &amp; OOP</label>
            <select name = "prototypeoop">
                <option disabled>Evaluation</option>
            </select>
        </li>
        <li>
            <label>Testing (unit, E2E)</label>
            <select name = "testing">
                <option disabled>Evaluation</option>
            </select>
        </li>
        <li>
            <label>AJAX</label>
            <select name = "ajax">
                <option disabled>Evaluation</option>
            </select>
        </li>
        <li>
            <label>Debugging</label>
            <select name = "debugging">
                <option disabled>Evaluation</option>
            </select>
        </li>
        <li>
            <label>Websockets</label>
            <select name = "websockets">
                <option disabled>Evaluation</option>
            </select>
        </li>
        <li>
            <label>Tooling</label>
            <select name = "tooling">
                <option disabled>Evaluation</option>
            </select>
        </li>
        <li>
            <label>Libraries</label>
            <select name = "libraries">
                <option disabled>Evaluation</option>
            </select>
        </li>
        <li>
            <label>Promises</label>
            <select name = "promises">
                <option disabled>Evaluation</option>
            </select>
        </li>
        <li>
            <label>Browser Engines</label>
            <select name = "browserEngines">
                <option disabled>Evaluation</option>
            </select>
        </li>
        <li>
            <label>Frameworks</label>
            <select name = "frameworks">
                <option disabled>Evaluation</option>
            </select>
        </li>
    </ul>
</fieldset>
    `;
}

function fieldsetSection6(options={}) {
    return `
    <fieldset>
    <legend>NodeJS</legend>
    <ul>
        <li>
            <label>Backend frameworks</label>
            <select name = "backendFrameworks">
                <option disabled>Evaluation</option>
            </select>
        </li>
        <li>
            <label>Templating</label>
            <select name = "templating">
                <option disabled>Evaluation</option>
            </select>
        </li>
        <li>
            <label>DOM Manipulation</label>
            <select name = "domManipulation">
                <option disabled>Evaluation</option>
            </select>
        </li>
        <li>
            <label>Unit Testing</label>
            <select name = "unitTesting">
                <option disabled>Evaluation</option>
            </select>
        </li>
    </ul>
</fieldset>
    `;
}



window.onload = function() {
    const appEl = document.querySelector('#app');
    appEl.innerHTML = newEvaluationPage();
}