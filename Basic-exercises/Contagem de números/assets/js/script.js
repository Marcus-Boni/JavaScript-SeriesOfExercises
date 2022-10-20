const q = (el) => document.querySelector(el);

function verify() {

    const start = q('.start');
    const end = q('.end');
    const steps = q('.steps');
    const res = q('.counting');

    if (start.value.length == 0 || end.value.length == 0 || steps.value.length == 0) {
        window.alert('Something is missing! Please check the boxes')
    } else {
        res.innerHTML = 'Preparing the count... <br>';
        
        setTimeout(() => {
            
            let s = Number(start.value);
            let e = Number(end.value);
            let sp = Number(steps.value);
            
            if (sp <= 0) {
                window.alert('Wrong number, please complete Steps with 1 or more')
            }

            if (s < e) {
                for ( let c = s; c <= e; c += sp ) {
                    res.innerHTML += `  ${c} 👉 `;
                }
            } else {
                for ( let c = s; c >= e; c -= sp ) {
                    res.innerHTML += `  ${c} 👉 `;
                }
            }
            res.innerHTML += `🏁`
        }, 500);
        
    }
}

const btn = q('.btn');
btn.addEventListener('click', verify);

