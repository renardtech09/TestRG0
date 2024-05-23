document.addEventListener("DOMContentLoaded", function() {
    var menuIcon = document.getElementById("menu-icon");
    var menu = document.getElementById("menu");
  
    menuIcon.addEventListener("click", function() {
      menu.classList.toggle("active");
    });
  
    document.addEventListener("click", function(event) {
      var isClickInsideMenu = menu.contains(event.target);
      var isClickOnMenuIcon = menuIcon.contains(event.target);
      if (!isClickInsideMenu && !isClickOnMenuIcon) {
        menu.classList.remove("active");
      }
    });
});

  
document.addEventListener("DOMContentLoaded", function() {
    var background1 = document.getElementById("nav1");
    var elm1 = document.getElementById("nav1");

    var background2 = document.getElementById("nav2");
    var elm2 = document.getElementById("nav2");
    
    var background3 = document.getElementById("nav3");
    var elm3 = document.getElementById("nav3");

    var background4 = document.getElementById("nav4");
    var elm4 = document.getElementById("nav4");

    var background5 = document.getElementById("nav5");
    var elm5 = document.getElementById("nav5");
    
    background1.addEventListener("click", function() {
        elm1.classList.toggle("back");
    });
    background2.addEventListener("click", function() {
      elm2.classList.toggle("back");
    });
    background3.addEventListener("click", function() {
        elm3.classList.toggle("back");
    });
    background4.addEventListener("click", function() {
      elm4.classList.toggle("back");
    });
    background5.addEventListener("click", function() {
        elm5.classList.toggle("back");
    });


    document.addEventListener("click", function(event) {
        var isClickInsidenav1 = nav1.contains(event.target);
        if (!isClickInsidenav1) {
          nav1.classList.remove("back");
        }
        var isClickInsidenav2 = nav2.contains(event.target);
        if (!isClickInsidenav2) {
          nav2.classList.remove("back");
        }
        var isClickInsidenav3 = nav3.contains(event.target);
        if (!isClickInsidenav3) {
          nav3.classList.remove("back");
        }
        var isClickInsidenav4 = nav4.contains(event.target);
        if (!isClickInsidenav4) {
          nav4.classList.remove("back");
        }
        var isClickInsidenav5 = nav5.contains(event.target);
        if (!isClickInsidenav5) {
          nav5.classList.remove("back");
        }
    });
        
});



document.querySelectorAll('.price').forEach(function(element) {
    element.addEventListener('click', function() {
        var elementInfo = {
            id: element.dataset.id,
            img: element.dataset.img,
            price: element.dataset.price,
        };
        localStorage.setItem('element_' + elementInfo.id, JSON.stringify(elementInfo));
    });
});


var panierUl = document.getElementById('panier');
for (var i = 0; i < localStorage.length; i++) {
    var key = localStorage.key(i);
    if (key.indexOf('element_') === 0) {
        var elementInfo = JSON.parse(localStorage.getItem(key));
        var elementLi = document.createElement('li');
        elementLi.innerHTML = `
            <img src="${elementInfo.img}" alt="">
            <div>
                <div class="price"><i class="material-symbols-outlined">currency_franc</i><span>${elementInfo.price}</span>
            </div>
        `;
        panierUl.appendChild(elementLi);
    }
}
document.getElementById('clear').addEventListener('click', function() {
    for (var i = 0; i < localStorage.length; i++) {
        var key = localStorage.key(i);
        if (key.indexOf('element_') === 0) {
            localStorage.removeItem(key);
        }
    }
    location.reload();
});
function genererLienPanierUtilisateur() {
    // Générer le lien vers le panier avec les sélections de l'utilisateur
    var lienVersPanier = "https://votresite.com/monpanier.html";

    // Récupérer les sélections de l'utilisateur depuis le localStorage
    var selectionsUtilisateur = [];
    for (var i = 0; i < localStorage.length; i++) {
        var key = localStorage.key(i);
        if (key.indexOf('element_') === 0) {
            selectionsUtilisateur.push(JSON.parse(localStorage.getItem(key)).id);
        }
    }

    // Ajouter les sélections de l'utilisateur comme paramètres d'URL
    if (selectionsUtilisateur.length > 0) {
        lienVersPanier += "?selection=" + selectionsUtilisateur.join(",");
    }

    return lienVersPanier;
}

// Appel de la fonction pour générer le lien vers le panier avec les sélections de l'utilisateur
var lienPanierUtilisateur = genererLienPanierUtilisateur();
console.log(lienPanierUtilisateur); // Afficher le lien généré dans la console
