document.getElementById("showFlowers").addEventListener("click", function() {
    var flowerContainer = document.getElementById("flowerContainer");
    flowerContainer.innerHTML = ''; // Limpiar el contenedor de flores

    var flowerBouquet = document.createElement("div");
    flowerBouquet.setAttribute("id", "flowerBouquet");

    var numberOfFlowers = 100; // Ajusta el número de flores
    var pastelColors = ["#FFD1DC", "#FFB6C1", "#FFA07A", "#FFDAB9", "#F5DEB3",
     "#87CEEB", "#B0E0E6", "#98FB98", "#FFEC8B", "#FAFAD2"]; // Colores pastel con amarillos más saturados

    for (var i = 0; i < numberOfFlowers; i++) {
        var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.setAttribute("class", "flower");

        var angle = Math.random() * 2 * Math.PI;
        var radius = 200 + Math.random() * 100; // Radio para distribuir las flores en el corazón

        var x = 300 + radius * Math.cos(angle);
        var y = 300 + radius * Math.sin(angle);

        var flowerSize = Math.floor(Math.random() * 101) + 250; // Generar tamaño aleatorio para la flor (entre 300 y 400)

        // Pétalos de la flor
        for (var j = 0; j < 6; j++) {
            var angle1 = (j * 60 * Math.PI) / 180;
            var angle2 = ((j + 1) * 60 * Math.PI) / 180;
            var x1 = flowerSize / 2 + flowerSize / 4 * Math.cos(angle1);
            var y1 = flowerSize / 2 + flowerSize / 4 * Math.sin(angle1);
            var x2 = flowerSize / 2 + flowerSize / 4 * Math.cos(angle2);
            var y2 = flowerSize / 2 + flowerSize / 4 * Math.sin(angle2);

            var petal = document.createElementNS("http://www.w3.org/2000/svg", "path");
            petal.setAttribute("class", "petal");
            petal.setAttribute("d", "M" + flowerSize / 2 + "," + flowerSize / 2 + " Q" + x1 + "," + y1 + " " + x2 + "," + y2);
            petal.setAttribute("fill", pastelColors[Math.floor(Math.random() * pastelColors.length)]);
            svg.appendChild(petal);
        }

        // Centro de la flor
        var centerCircle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        centerCircle.setAttribute("class", "centerCircle");
        centerCircle.setAttribute("cx", flowerSize / 2);
        centerCircle.setAttribute("cy", flowerSize / 2);
        centerCircle.setAttribute("r", flowerSize / 10);
        centerCircle.setAttribute("fill", "yellow");
        svg.appendChild(centerCircle);

        svg.setAttribute("width", flowerSize);
        svg.setAttribute("height", flowerSize);
        svg.setAttribute("x", x - flowerSize / 2);
        svg.setAttribute("y", y - flowerSize / 2);

        flowerBouquet.appendChild(svg);
    }

    flowerContainer.appendChild(flowerBouquet);
});
