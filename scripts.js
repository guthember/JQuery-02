$(function () {
    // html elemek összegyűjtése
    let $button = $('button#random-color');
    // console.log($button);

    $button.click(function () {

        // szín keverése
        const max = 255;
        let red = Math.round(Math.random() * max);
        let green = Math.round(Math.random() * max);
        let blue = Math.round(Math.random() * max);

        // szín beállítása
        $button.css('background-color',
            'rgb(' + red + ',' + green + ',' + blue + ')');
        // szín beállítása
        // background-color: rgb(255,255,255);

        // font szín beállítása
        let avg = (red + green + blue) / 3;
        console.log('avg: ', avg / 255);
        // átlagot 
        if (avg / 255 > 0.5) {
            // erősebb szín
            $button.css('color', 'black');
        } else {
            // gyengébb szín
            $button.css('color', 'white');
        }
    });

});