function sum() {
    let numbers = Array.from(arguments);
    return numbers.reduce((sum, current) => {
        return sum + current
    }, 0);
};

function average() {
    return sum(...arguments) / arguments.length;
};


(function () {

    alunos.forEach(aluno => {
        aluno.media = average(...aluno.notas)
    });

    const html = alunos.map(aluno => `
    <tr>
        <td>${aluno.nome}</td>
        ${aluno.notas.map(n => `<td> ${n} </td>`).join('')}
        <td>${aluno.media}</td>
    </tr>
    `).join('');

    document.querySelector('tbody').innerHTML = html;

    const trs = document.querySelectorAll('tbody tr');
    const btn = document.querySelector('.btn');

    function changeColor () {
        trs.forEach( (el) => {
            let values = el.querySelector('td:nth-child(6)').innerHTML;
            values > 6 ? el.classList.add('aproved') : el.classList.add('reproved');
            el.classList.toggle('toggle');
        });
    };
    btn.addEventListener('click', changeColor);
})();


// FORMA SEM O JSON
/* const trHeader = document.querySelector('thead tr');
const ths = trHeader.querySelectorAll('th');
const thsStudents = document.querySelectorAll('[student-grad]');
const indexGrad = {};

Array.from(thsStudents).forEach( (th) => {
    let prop = th.getAttribute("student-grad");
    indexGrad[prop] = getIndex(prop);
})

function getIndex(index) {
    const th = trHeader.querySelector(`[student-grad="${index}"]`);
    const i = [...ths].indexOf(th);
    return i
}
console.log(indexGrad)
const trs = document.querySelectorAll('tbody tr');
let total = 0;
let x = 0;
while (trs[x]) {
    const tds = trs[x].querySelectorAll('td');

    total = average(
        parseFloat(tds[indexGrad.n1].textContent),
        parseFloat(tds[indexGrad.n2].textContent),
        parseFloat(tds[indexGrad.n3].textContent),
        parseFloat(tds[indexGrad.n4].textContent)
    );

    tds[indexGrad.average].textContent = total;
    x++;
}; */
/* n1: getIndex("n1"),
n2: getIndex("n2"),
n3: getIndex("n3"),
n4: getIndex("n4"),
mean: getIndex("average") */