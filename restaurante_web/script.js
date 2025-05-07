async function fetchCoffeeImage() {
    try {
        const response = await fetch('https://coffee.alexflipnote.dev/random.json');
        if (!response.ok) throw new Error(`Error HTTP: ${response.status}`);

        const data = await response.json();

        // Seleccionar la imagen y cambiar su fuente con la URL obtenida
        document.getElementById("coffeeImage").src = data.file;
        
    } catch (error) {
        console.error("Error al obtener imagen de café:", error);
    }
}

// Cargar una imagen inicial cuando se abra la página
fetchCoffeeImage();

function fetchBaconImage() {
    // Cambiar la imagen con un nuevo link cada vez que se presione el botón
    document.getElementById("baconImage").src = `https://baconmockup.com/${Math.floor(Math.random() * 600 + 300)}/${Math.floor(Math.random() * 600 + 300)}`;
}