
    // Selectăm butonul cu clasa "container-nav-el-3-acces"
    const button = document.querySelector('.container-nav-el-3-acces');

    // Selectăm elementul cu clasa "container-meniu-tel-total"
    const menu = document.querySelector('.container-meniu-tel-total');

    // Adăugăm un ascultător de eveniment pentru clic pe buton
    button.addEventListener('click', function() {
        // Verificăm dacă meniul este ascuns
        if (menu.style.display === '' || menu.style.display === 'none') {
            // Afisam meniul prin setarea "display: block;"
            menu.style.display = 'block';
            // Adaugam clasa "dn-efect-mobil-in"
            menu.classList.add('dn-efect-mobil-in');
            // Scoatem clasa "dn-efect-mobil-out"
            menu.classList.remove('dn-efect-mobil-out');
        } else {
            // Adaugam clasa "dn-efect-mobil-out"
            menu.classList.add('dn-efect-mobil-out');
            // Scoatem clasa "dn-efect-mobil-in"
            menu.classList.remove('dn-efect-mobil-in');
            // Aplicam delay-ul folosind setTimeout
            setTimeout(function() {
                // Ascundem meniul prin setarea "display: none;"
                menu.style.display = 'none';
            }, 1000); // Schimbați valoarea delay-ului în milisecunde aici (în exemplul de mai sus, este 500 ms)
        }
    });