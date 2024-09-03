let map;
let activeInfoWindow;

function initMap() {

    const mapOptions = {
        center: { lat: 51.9194, lng: 19.1451 },
        zoom: 7
};


map = new google.maps.Map(document.getElementById('map'), mapOptions);

  
const locations = [
    {
        position: { lat: 52.404760, lng: 16.931100 }, 
        title: "Galeria w Poznaniu",
        info: "Nasza galeria w Poznaniu <br> znajduje się na ulicy Półwiejskiej.",
        icon: "https://img.icons8.com/ios-filled/50/000000/paint-palette.png", 
        open_day: "Poniedziałek-Sobota",
        open: "10:00-18:00",
    },
    {
        position: { lat: 52.229675, lng: 21.012230 }, 
        title: "Galeria w Warszawie",
        info: "Nasza galeria w Warszawie <br> znajduje się na ulicy Nowy Świat.",
        icon: "https://img.icons8.com/ios-filled/50/000000/paint-palette.png",
        open_day: "Poniedziałek-Sobota",
        open: "10:00-18:00",
    },
    {
        position: { lat: 53.123487, lng: 18.007225 }, 
        title: "Galeria w Bydgoszczy",
        info: "Nasza galeria w Bydgoszczy <br> znajduje się na ulicy Gdańskiej.",
        icon: "https://img.icons8.com/ios-filled/50/000000/paint-palette.png",
        open_day: "Poniedziałek-Sobota",
        open: "10:00-18:00",
    },
    {
        position: { lat: 52.542358, lng: 17.607974 }, 
        title: "Galeria w Gnieźnie",
        info: "Nasza galeria w Gnieźnie <br> znajduje się na ulicy Kwiatowej.",
        icon: "https://img.icons8.com/ios-filled/50/000000/paint-palette.png",
        open_day: "Poniedziałek-Sobota",
        open: "10:00-18:00",
    },
    {
        position: { lat: 50.061946, lng: 19.936856 }, 
        title: "Galeria w Krakowie",
        info: "Nasza galeria w Krakowie <br> znajduje się na ulicy Floriańskiej.",
        icon: "https://img.icons8.com/ios-filled/50/000000/paint-palette.png",
        open_day: "Poniedziałek-Sobota",
        open: "10:00-18:00",
    },
];



locations.forEach((location) => {

    const marker = new google.maps.Marker({

        position: location.position,
        map: map,
        title: location.title,
        icon: {
            url: location.icon,
            scaledSize: new google.maps.Size(35, 35)
        },
        animation: google.maps.Animation.DROP
        
    });

    const infowindow = new google.maps.InfoWindow({

        content: `<div class="infowindow-content"><strong>${location.title}</strong><br>
        <strong>Otwarty w dniach: </strong> ${location.open_day}
        <br><strong>Otwary w godzinach: </strong>${location.open}<br>${location.info}</div>`

    });

    marker.addListener('click', () => {

        if (activeInfoWindow) {
            activeInfoWindow.close();
        }
        infowindow.open(map, marker);
        activeInfoWindow = infowindow;

    });

    marker.addListener('dblclick', () => {

        window.location.href = location.destination;

    });
});
}
