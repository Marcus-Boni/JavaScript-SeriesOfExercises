const paragraphs = Array.from(document.querySelectorAll('.card p'));
const originTexts = paragraphs.map(p => p.innerText);
const maxLength = 100;

paragraphs.forEach((p, i) => {
    if (p.innerText.length > maxLength) {
        p.textContent = p.innerHTML.slice(0, maxLength) + '...';

        const btn = document.createElement('button');
        btn.innerHTML = '<i class="fas fa-chevron-down"></i>'
        p.parentElement.classList.add('text-hidden')

        const toggleText = (e, p, i) => {
            const btnIcon = e.currentTarget.firstElementChild
            const card = e.currentTarget.parentElement

            card.classList.toggle('text-hidden')
            btnIcon.classList.toggle('fa-chevron-down')
            btnIcon.classList.toggle('fa-chevron-up')

            if(card.classList.contains('text-hidden')) {
                p.textContent = originTexts[i].slice(0, maxLength) + '...';
            } else {
                p.textContent = originTexts[i]
            }
        }

        btn.addEventListener('click', e => {
            toggleText(e, p, i)
        })

        p.parentElement.appendChild(btn)
    }
})
