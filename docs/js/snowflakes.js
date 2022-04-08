let colors = {
    color1: "rgba(0,131,255,1)",
    color2: "rgba(51,154,251,1)",
    color3: "rgba(27,184,252,1)",
    color4: "rgba(73,198,252,1)"
};
let options = {
    alphaSpeed: 10,
    alphaVariance: 1,
    color: [colors.color1, colors.color2, colors.color3, colors.color4],
    composition: "source-over",
    count: 350,
    direction: 161,
    float: 0.75,
    glow: 0,
    imageUrl: [
        "img/icon/snowflake.png"
    ],
    maxAlpha: 2,
    maxSize: 22,
    minAlpha: -0.2,
    minSize: 4,
    parallax: 1.75,
    rotation: 0.5,
    shape: "image",
    speed: 3,
    style: "fill",
    twinkle: false,
    xVariance: 5,
    yVariance: 0,
};
window.onload = function() {
    initSparticles();
}
window.initSparticles = function() {
    var $main = document.querySelector('.falling');
    window.mySparticles = new sparticles.Sparticles($main,options);
};