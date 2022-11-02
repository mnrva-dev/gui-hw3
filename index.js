var data = []
const form = document.getElementById('form')
const mdl = document.getElementById('md-l')
const mdu = document.getElementById('md-u')
const mrl = document.getElementById('mr-l')
const mru = document.getElementById('mr-u')
const errdisplay = document.getElementById('err')

function validateform() {
    for (i of form.elements) {
        if (i.type === "number" && (parseInt(i.value) > 50 || parseInt(i.value) < -50 || i.value == undefined || i.value == "")) {
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
    if (parseInt(mdl.value) >= parseInt(mdu.value)) {
        mdl.style = "border: 2px solid var(--color-error);"
        errdisplay.innerText = "Lower bounds must be less than upper bounds"
        return false
    }
    if (parseInt(mrl.value) >= parseInt(mru.value)) {
        mrl.style = "border: 2px solid var(--color-error);"
        errdisplay.innerText = "Lower bounds must be less than upper bounds"
        console.log()
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
    console.log('form is valid')
    
    var table = document.createElement('table')

    table.setAttribute('id', 'table')
    document.getElementById('table-container').innerHTML = ''
    document.getElementById('table-container').appendChild(table)

    let row = document.createElement('tr')
    for (j = parseInt(mrl.value) - 1; j <= parseInt(mru.value); j++) {
        let h = document.createElement('th')
        if (j == parseInt(mrl.value) - 1) {
            h.innerHTML = 'X'
            row.appendChild(h)
            continue
        }
        h.innerHTML = j
        row.appendChild(h)
    }

    table.appendChild(row)

    for (i = parseInt(mdl.value); i <= parseInt(mdu.value); i++) {
        let row = document.createElement('tr')
        let h = document.createElement('th')
        h.innerHTML = i
        row.appendChild(h)
        for (j = parseInt(mrl.value); j <= parseInt(mru.value); j++) {
            let point = document.createElement('td')
            point.innerHTML = i * j
            row.appendChild(point)
        }
        table.appendChild(row)
    }
})