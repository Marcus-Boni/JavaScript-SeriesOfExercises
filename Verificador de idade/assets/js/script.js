const btn = document.querySelector('.btn');

function verify() {
    let data = new Date();
    let year = data.getFullYear();
    let fYear = document.querySelector('.date');
    let res = document.querySelector('.res h2');
    if (fYear.value.length == 0 || fYear.value > year) {
        window.alert('ERRO! Verify the dices and try again');
    } else {
        let rsex = document.getElementsByName('sex');
        let age = year - fYear.value;
        let img = document.querySelector('img');
        let section = document.querySelector('section');
        let photoArea = document.querySelector('.photo_area');
        let gender;

        
        if (rsex[0].checked) {
            section.style.height = 'auto';
            photoArea.style.display = 'block';
            gender = 'Man';
            img.setAttribute('src', 'assets/images/Man.jpg')
        } else if (rsex[1].checked) {
            section.style.height = 'auto';
            photoArea.style.display = 'block';
            gender = 'Woman';
            img.setAttribute('src', 'assets/images/Woman.jpg')
        }
        res.innerHTML = `Age of the ${gender} calculated: ${age}`;
    }
    
}

btn.addEventListener('click', verify);
