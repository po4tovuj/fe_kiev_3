const firstname = document.getElementById("first_name");
const lastname = document.getElementById("last_name");
const tel = document.getElementById("tel");
const submitBtn = document.getElementById("submit-btn");
const resultsList = document.querySelector(".results");
submitBtn.addEventListener("click", validate);

function validate(event) {
    event.preventDefault();
    let results = {};
    let phoneReg = /^\+?[38]?[8]?[0]{1}[1-9]{1}\d{8}$/;
    let nameReg = /^[A-Z]{1}([^а-яёєіїґ’'`]i?)[a-z]+((\s[A-Z]{1}([^а-яёєіїґ’'`]i?)[a-z]+)+)?$|^[А-ЯЁ]{1}([^a-zєіїґ’'`]i?)[а-яё]+((\s[А-ЯЁ]{1}([^a-zєіїґ’'`]i?)[а-яё]+)+)?$|^[А-ЯЄІЇҐ’'`]{1}([^a-zыэъ]i?)[а-яєіїґ’'`]+((\s[А-ЯЄІЇҐ’'`]{1}([^a-zыэъ]i?)[а-яєіїґ’'`]+)+)?$/;
    results.firstName = nameReg.test(firstname.value);
    results.lastName = nameReg.test(lastname.value);
    results.phone = phoneReg.test(tel.value);
    showResults(results);
    if (results.firstName && results.lastName && results.phone) {
        document.querySelector('form').reset();
    }
}

function showResults(results) {
    let markup = '';
    for (let key in results) {
        if (results[key]) {
            markup += `<li class="success"> SUCCESS: '${key}' passed validation</li>`;
        } else {
            markup += `<li class="error"> ERROR: '${key}' failed validation</li>`;
        }
    }
    if (1) {
        return resultsList.innerHTML = markup;
    } else {
        throw new Error();
    }
}