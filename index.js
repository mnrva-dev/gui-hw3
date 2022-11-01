var data = []
const table = document.getElementById('table')
const form = document.getElementById('form')
const mdl = document.getElementById('md-l')
const mdu = document.getElementById('md-u')
const mrl = document.getElementById('mr-l')
const mru = document.getElementById('mr-u')
const errdisplay = document.getElementById('err')

function validateform() {
    for (i of form.elements) {
        if (i.type === "number" && (i.value > 50 || i.value < -50 || i.value == undefined || i.value == "")) {
            i.style = "border: 2px solid var(--color-error);"
            errdisplay.innerText = "All values must be between -50 and 50"
            return false
        } else {
            i.style = ""
        }
    }
    errdisplay.innerText = ""
    return true
}

function validatevalues() {
    if (mdl.value >= mdu.value) {
        mdl.style = "border: 2px solid var(--color-error);"
        errdisplay.innerText = "Lower bounds must be less than upper bounds"
        return false
    }
    if (mrl.value >= mru.value) {
        mrl.style = "border: 2px solid var(--color-error);"
        errdisplay.innerText = "Lower bounds must be less than upper bounds"
        return false
    }
    mdl.style = ''
    mrl.style = ''
    errdisplay.innerText = ''
    return true
}

form.addEventListener('submit', (e) => {
    e.preventDefault()
    if (!validateform()) {
        console.log('invalid input')
        return false
    }
    if (!validatevalues()) {
        console.log('invalid values')
        return false
    }
    for (i = mdl.value; i <= mdu.value; i++) {
        let row = document.createElement('tr')
        for (j = mrl.value; j <= mru.value; j++) {
            let point = document.createElement('td')
            point.innerHTML = i * j
            console.log(i * j)
            row.appendChild(point)
        }
        table.appendChild(row)
    }
})