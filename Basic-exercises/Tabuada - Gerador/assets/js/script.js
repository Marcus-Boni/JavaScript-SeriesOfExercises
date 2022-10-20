const q = (el) => document.querySelector(el);

const number = q('.number');
const table =  q('.table')

function count () {
    if (number.value.length == 0) {
        window.alert('ERRO! Please verify the box')
    } else {
        let n = Number(number.value);
        table.innerHTML = '';
        for (i = 0; i <= 10; i++) {
            let res = `${n} x ${i} = ${n*i}✔ `
            table.append(res)
        }
    }
}

const btn = q('.btn');
btn.addEventListener('click', count)