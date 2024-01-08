// your-script.js

// Coordonnées de la ville de Corte (à titre d'exemple)
const corteCoordinates = [42.3016, 9.1492]; // Latitude, Longitude

// Initialiser la carte
const mymap = L.map('map').setView(corteCoordinates, 13); // Zoom initial = 13

// Ajouter la carte de OpenStreetMap (tuile par défaut)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
}).addTo(mymap);


// Ajouter des marqueurs pour des points spécifiques avec des images dans les pop-ups
const points = [
  { 
    name: "Musée", 
    coordinates: [42.306281, 9.148392], 
    image: "qrcode/qr_code1.webp", // Insérez l'URL de votre première image ici
    description: "<img src='qrcode/qr_code1.webp' width='200' height='auto'>"
  },
  { 
    name: "Cinéma l'Aiglon", 
    coordinates: [42.309286087192376, 9.1500974314676], 
    image: "qrcode/qr_code2.webp", // Insérez l'URL de votre première image ici
    description: "<img src='qrcode/qr_code2.webp' width='200' height='auto'>"
  },
  { 
    name: "Fontaine du Cours", 
    coordinates: [42.306529, 9.150543], 
    image: "qrcode/qr_code3.webp", // Insérez l'URL de votre première image ici
    description: "<img src='qrcode/qr_code3.webp' width='200' height='auto'>"
  },
  { 
    name: "Fontaine des quatres canon", 
    coordinates: [42.305702, 9.149970], 
    image: "qrcode/qr_code4.webp", // Insérez l'URL de votre première image ici
    description: "<img src='qrcode/qr_code4.webp' width='200' height='auto'>"
  },
  { 
    name: "Maison Gaffory", 
    coordinates: [42.305416, 9.149898], 
    image: "qrcode/qr_code5.webp", // Insérez l'URL de votre première image ici
    description: "<img src='qrcode/qr_code5.webp' width='200' height='auto'>"
  },
  { 
    name: "Palazzu", 
    coordinates: [42.305086, 9.149253], 
    image: "qrcode/qr_code6.webp", // Insérez l'URL de votre première image ici
    description: "<img src='qrcode/qr_code6.webp' width='200' height='auto'>"
  },
  { 
    name: "Eglise de l'Annonciation", 
    coordinates: [42.3047, 9.1497], 
    image: "qrcode/qr_code7.webp", // Insérez l'URL de votre première image ici
    description: "<img src='qrcode/qr_code7.webp' width='200' height='auto'>"
  },
  { 
    name: "Epicerie Ghionga", 
    coordinates: [42.304795, 9.149226], 
    image: "qrcode/qr_code8.webp", // Insérez l'URL de votre première image ici
    description: "<img src='qrcode/qr_code8.webp' width='200' height='auto'>"
  },
  { 
    name: "Chapelle San Teofalu", 
    coordinates: [42.304313, 9.149421], 
    image: "qrcode/qr_code9.webp", // Insérez l'URL de votre première image ici
    description: "<img src='qrcode/qr_code9.webp' width='200' height='auto'>"
  },
  { 
    name: "Passerelle", 
    coordinates: [42.303702, 9.153316], 
    image: "qrcode/qr_code10.webp", // Insérez l'URL de votre première image ici
    description: "<img src='qrcode/qr_code10.webp' width='200' height='auto'>"
  },
  { 
    name: "Belvédère", 
    coordinates: [42.30389509784248, 9.148578079290267], 
    image: "qrcode/qr_code11.webp", // Insérez l'URL de votre première image ici
    description: "<img src='qrcode/qr_code11.webp' width='200' height='auto'>"
  },
  // Ajouter d'autres points avec des images et des descriptions ici
];


points.forEach(point => {
  const marker = L.marker(point.coordinates).addTo(mymap);
  marker.bindPopup(`
    <h3>${point.name}</h3>
    <p>${point.description}</p>
  `);
});

// Supprimer tous les marqueurs existants de la carte (le cas échéant)
mymap.eachLayer(function (layer) {
    if (layer instanceof L.Marker) {
      mymap.removeLayer(layer);
    }
  });
  
  // Créer une icône de marqueur personnalisée
  const customIcon = L.icon({
    iconUrl: 'images/point-carte.webp', // Remplacez par l'URL de votre image personnalisée
    iconSize: [60, 60], // Taille de l'image en pixels
    iconAnchor: [40, 80], // Point d'ancrage de l'image par rapport à sa position
    popupAnchor: [0, -40] // Point d'ancrage du popup par rapport à l'image
  });
  
  // Ajouter des marqueurs pour des points spécifiques avec des icônes personnalisées
  points.forEach(point => {
    L.marker(point.coordinates, { icon: customIcon }).addTo(mymap).bindPopup(`
      <h3>${point.name}</h3>
      <p>${point.description}</p>
    `);
  });