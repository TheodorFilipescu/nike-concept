var listaObiecte = [
    {
      id: 1,
      imagine: "./images/DONE-nike-albastru-umb.webp",
      titlu: "NIKE AIR JORDAN BLUE",
      review: 4.5,
      pret: 1000,
      descriere: "Familiar colours, applied with a classic colour-blocking scheme, characterise this Air Jordan 1. The shoe brings genuine University Blue leather to the ankle, heel, toe and outsole, with black on the Swoosh and collar and contrasting white on the quarter panel, midsole, tongue and toe box. A black Wings logo with University Blue branding on the tongue helps finish off the model's clean and classic detailing.",
      moneda: "$",
      imagine2: "./images/DONE-nike-albastru-umb.webp",
      backgroundImg: "url('../images/fundal-albastru.png')"
    },
    {
      id: 2,
      imagine: "./images/DONE-nike-grey-umb.webp",
      titlu: "NIKE AIR JORDAN GREY",
      review: 4.2,
      pret: 1300,
      descriere: "The Air Jordan 1 Mid White Light Smoke Gray has a gray leather upper on a white leather background. The Swoosh, Jordan Wings logo and outsole feature several black additions. The white corset and white tongue enhance the clarity of the model.",
      moneda: "$",
      imagine2: "./images/DONE-nike-grey-umb.webp",
      backgroundImg: "url('../images/fundal-gri.png')"
    },
    {
      id: 3,
      imagine: "./images/DONE-nike-verde-umb.webp",
      titlu: "NIKE AIR JORDAN GREEN",
      review: 4.8,
      pret: 2500,
      descriere: "This Jordan 1 Retro High is composed of a white tumbled leather upper with pine green and black overlays. A black leather Swoosh, sail midsole, and pine green outsole completes this design. These sneakers released in September of 2018 and retailed for $160. If you are looking for the Jordan 1 Retro High Pine Green Black 2020",
      moneda: "$",
      imagine2: "./images/DONE-nike-verde-umb.webp",
      backgroundImg: "url('../images/fundal-verde.png')"
    }
  ];

// ID-ul obiectului curent afișat
var obiectCurentID = 1;

function afiseazaDetaliiObiect(id) {
  var obiectCautat = listaObiecte.find(function (obiect) {
    return obiect.id === id;
  });

  if (obiectCautat) {
    document.getElementById("titlu").innerText = obiectCautat.titlu;
    document.getElementById("review").innerText = "Reviews: " + obiectCautat.review;
    document.getElementById("pret").innerText = "Price: " + obiectCautat.pret + " " + obiectCautat.moneda;
    document.getElementById("descriere").innerText = obiectCautat.descriere;
    document.getElementById("imagine").src = obiectCautat.imagine; // Adaugam imaginea corespunzatoare obiectului
    document.getElementById("backgroundImg").style.backgroundImage = obiectCautat.backgroundImg;
    document.getElementById("imagine2").src = obiectCautat.imagine2;
  } else {
    console.log("ID-ul cautat nu exista in lista de obiecte.");
  }
}

function afiseazaObiectAnterior() {
    // Actualizăm ID-ul obiectului curent cu ID-ul anterior
    obiectCurentID = obiectCurentID > 1 ? obiectCurentID - 1 : listaObiecte.length;
  
    // Adăugăm clasa "fade-out" pe imaginea curentă
    document.getElementById("imagine").classList.add("fade-out");
    document.getElementById("titlu").classList.add("opacity-out");
    document.getElementById("review").classList.add("opacity-out");
    document.getElementById("pret").classList.add("opacity-out");
    document.getElementById("descriere").classList.add("opacity-out");
    document.getElementById("backgroundImg").classList.add("opacity-out2");
    document.getElementById("imagine2").classList.add("mobile-out");
  
    // Apelăm funcția pentru a afișa detaliile obiectului actualizat după 1 secundă (1000 milisecunde)
    setTimeout(function () {
      afiseazaDetaliiObiect(obiectCurentID);
  
      // Îndepărtăm clasa "fade-out" de pe imaginea curentă după ce a fost afișată animația
      document.getElementById("imagine").classList.remove("fade-out");
      document.getElementById("titlu").classList.remove("opacity-out");
      document.getElementById("review").classList.remove("opacity-out");
      document.getElementById("pret").classList.remove("opacity-out");
      document.getElementById("descriere").classList.remove("opacity-out");
      document.getElementById("backgroundImg").classList.remove("opacity-out2");
      document.getElementById("imagine2").classList.remove("mobile-out");

      // Adăugăm clasa "fade-in" pe imaginea următoare pentru a realiza animația de revenire
      document.getElementById("imagine").classList.add("fade-in");
      document.getElementById("titlu").classList.add("opacity-in");
      document.getElementById("review").classList.add("opacity-in");
      document.getElementById("pret").classList.add("opacity-in");
      document.getElementById("descriere").classList.add("opacity-in");
      document.getElementById("backgroundImg").classList.add("opacity-in2");
      document.getElementById("imagine2").classList.add("mobile-in");
    }, 500);
  
    // Îndepărtăm clasa "fade-in" de pe imaginea curentă după ce a fost afișată animația de revenire
    setTimeout(function () {
      document.getElementById("imagine").classList.remove("fade-in");
      document.getElementById("titlu").classList.remove("opacity-in");
      document.getElementById("review").classList.remove("opacity-in");
      document.getElementById("pret").classList.remove("opacity-in");
      document.getElementById("descriere").classList.remove("opacity-in");
      document.getElementById("backgroundImg").classList.remove("opacity-in2");
      document.getElementById("imagine2").classList.remove("mobile-in");
    }, 1500); // Păstrăm clasa "fade-in" timp de 2 secunde pentru a obține un efect echilibrat între animații
  }
  
  function afiseazaObiectUrmator() {
    // Actualizăm ID-ul obiectului curent cu ID-ul următor
    obiectCurentID = obiectCurentID < listaObiecte.length ? obiectCurentID + 1 : 1;
  
    // Adăugăm clasa "fade-out" pe imaginea curentă
    document.getElementById("imagine").classList.add("fade-out");
    document.getElementById("titlu").classList.add("opacity-out");
    document.getElementById("review").classList.add("opacity-out");
    document.getElementById("pret").classList.add("opacity-out");
    document.getElementById("descriere").classList.add("opacity-out");
    document.getElementById("backgroundImg").classList.add("opacity-out2");
    document.getElementById("imagine2").classList.add("mobile-out");
  
    // Apelăm funcția pentru a afișa detaliile obiectului actualizat după 1 secundă (1000 milisecunde)
    setTimeout(function () {
      afiseazaDetaliiObiect(obiectCurentID);
  
      // Îndepărtăm clasa "fade-out" de pe imaginea curentă după ce a fost afișată animația
      document.getElementById("imagine").classList.remove("fade-out");
      document.getElementById("titlu").classList.remove("opacity-out");
      document.getElementById("review").classList.remove("opacity-out");
      document.getElementById("pret").classList.remove("opacity-out");
      document.getElementById("descriere").classList.remove("opacity-out");
      document.getElementById("backgroundImg").classList.remove("opacity-out2");
      document.getElementById("imagine2").classList.remove("mobile-out");
  
      // Adăugăm clasa "fade-in" pe imaginea următoare pentru a realiza animația de revenire
      document.getElementById("imagine").classList.add("fade-in");
      document.getElementById("titlu").classList.add("opacity-in");
      document.getElementById("review").classList.add("opacity-in");
      document.getElementById("pret").classList.add("opacity-in");
      document.getElementById("descriere").classList.add("opacity-in");
      document.getElementById("backgroundImg").classList.add("opacity-in2");
      document.getElementById("imagine2").classList.add("mobile-in");
    }, 500);
  
    // Îndepărtăm clasa "fade-in" de pe imaginea curentă după ce a fost afișată animația de revenire
    setTimeout(function () {
      document.getElementById("imagine").classList.remove("fade-in");
      document.getElementById("titlu").classList.remove("opacity-in");
      document.getElementById("review").classList.remove("opacity-in");
      document.getElementById("pret").classList.remove("opacity-in");
      document.getElementById("descriere").classList.remove("opacity-in");
      document.getElementById("backgroundImg").classList.remove("opacity-in2");
      document.getElementById("imagine2").classList.remove("mobile-in");
    }, 1500); // Păstrăm clasa "fade-in" timp de 2 secunde pentru a obține un efect echilibrat între animații
  }
  

// Apelam funcția pentru a afișa detaliile obiectului cu ID-ul 1
afiseazaDetaliiObiect(1);
