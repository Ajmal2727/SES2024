document.addEventListener('visibilitychange',
    function () {
        if (document.visibilityState === "visible") {
            document.title = "Data Hub | Saraswati Edu Society";
            $("#favicon").attr("href", "assets/images/favicon.png");
        }
        else {
            document.title = "Come Back To Data Hub";
            $("#favicon").attr("href", "assets/images/favhand.png");
        }
    });


// <!-- typed js effect starts -->
var typed = new Typed(".typing-text", {
    strings: ["","Knowledge Empowers Progress", "Together We Thrive", "Infinite Potential Within", "Discover, Explore, Achieve"],
    loop: true,
    typeSpeed: 50,
    backSpeed: 35,
    backDelay: 500,
});
// <!-- typed js effect ends -->

    // smooth scrolling
    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top,
        }, 500, 'linear')
    });


// Image Flip Animation

// Automatically flip the card every 5 seconds
// const card = document.getElementById("card");

// function flipCard() {
//     card.style.transform = "rotateY(180deg)";
//     setTimeout(() => {
//         card.style.transform = "rotateY(0deg)";
//     }, 1000); // 1 second delay before flipping back
// }

// setInterval(flipCard, 5000); // Flip every 5 seconds

var typed = new Typed(".typing-text1", {
    strings: ["","Knowledge Empowers Progress", "Together We Thrive", "Infinite Potential Within", "Discover, Explore, Achieve"],
    loop: true,
    typeSpeed: 50,
    backSpeed: 35,
    backDelay: 500,
});
// <!-- typed js effect ends -->







  