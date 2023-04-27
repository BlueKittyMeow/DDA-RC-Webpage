//Load Nav bar
function loadNav() {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState === 4) {
            if (this.status === 200) {
                document.getElementById("nav").innerHTML = this.responseText;
            } else {
                document.getElementById("nav").innerHTML = "Error loading navigation.";
            }
        }
    };
    xhttp.open("GET", "partials/nav.html", true);
    xhttp.send();
}

//Nav bar Equipment submenu behavior
function checkActivePage() {
    const currentPage = window.location.pathname.split('/').pop().split('.')[0];
    if (currentPage === 'equipment' || currentPage.startsWith('cameras') || currentPage.startsWith('projectors') || currentPage.startsWith('lighting') || currentPage.startsWith('tripods') || currentPage.startsWith('microphones') || currentPage.startsWith('speakers') || currentPage.startsWith('computers') || currentPage.startsWith('memory') || currentPage.startsWith('drawing') || currentPage.startsWith('vr') || currentPage.startsWith('stop')) {
        document.querySelector('.dropdown-content').style.display = 'block';
    }
}

// Load Header
function loadHeader() {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState === 4) {
            if (this.status === 200) {
                document.getElementById("header").innerHTML = this.responseText;
            } else {
                document.getElementById("header").innerHTML = "Error loading header.";
            }
        }
    };
    xhttp.open("GET", "partials/header.html", true);
    xhttp.send();
}

// Load Footer
function loadFooter() {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState === 4) {
            if (this.status === 200) {
                document.getElementById("footer").innerHTML = this.responseText;
            } else {
                document.getElementById("footer").innerHTML = "Error loading footer.";
            }
        }
    };
    xhttp.open("GET", "partials/footer.html", true);
    xhttp.send();
}




// Load Content
function loadContent() {
    loadHeader();
    loadNav();
    loadFooter();
}

// Call loadContent when the page loads
document.addEventListener('DOMContentLoaded', loadContent);
