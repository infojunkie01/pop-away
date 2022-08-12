// import some sounds
var harp = new Audio("./assets/sounds/harp.wav");
harp.volume = 0.8;

// some helper functions
function playSound(sound, sec){
    sound.currentTime = sec;
	sound.play();
}

function stopSound(sound){
	sound.pause();
}

function hideAndShowSections(current, next){
    if (current.css("display") == "block") {
        current.hide();
    }
    if (next.css("display") == "none") {
        next.show();
    }
}


// functions called in html
function addFloatingClass(){
    $('#submit').addClass('floating')
}

function hideIntroShowNext() {
    var click = new Audio("./assets/sounds/click.wav");
    playSound(click, 0)

    $('#bg-1').fadeOut('slow')
    $('#bg-2').fadeOut('slow')
    intro = $('#intro')
    textEntry = $('#text-entry')
    hideAndShowSections(intro, textEntry)
}

function hideTextEntryShowNext() {
    var click = new Audio("./assets/sounds/click.wav");

    playSound(click, 0)
    playSound(harp, 2)
    textEntry = $('#text-entry')
    popBubble = $('#pop-bubble')
    hideAndShowSections(textEntry, popBubble)

    $('#textarea').val('');
    $('#bubble').prop('disabled', false);
    $('#bubble-img').attr('src', './assets/images/bubble.png');
    $('#submit').removeClass('floating')
    $("#pop-bubble-text").show();
    $("#bubble").show()
}

function hidePopBubbleShowNext() {
    var choir = new Audio("./assets/sounds/choir.wav");
    var pop = new Audio("./assets/sounds/pop.wav");

    choir.volume = 0.8;

    stopSound(harp)
    playSound(pop, 0)

    $('#bubble').prop('disabled', true);

    setTimeout(() => {
        $("#bubble").hide()
    }, 500)

    setTimeout(() => {
        $("#pop-bubble-text").fadeOut("slow");
    }, 1000)

    setTimeout(() => {
        playSound(choir, 0)
    }, 2000)

    setTimeout(() => {
        popBubble = $('#pop-bubble')
        end = $('#end')
        hideAndShowSections(popBubble, end)
    }, 7000)
}

function hideEndShowTextEntry() {
    var click = new Audio("./assets/sounds/click.wav");
    playSound(click, 0)
    end = $('#end')
    textEntry = $('#text-entry')
    hideAndShowSections(end, textEntry)
}

function hideEndShowIntro() {
    var click = new Audio("./assets/sounds/click.wav");
    playSound(click, 0)
    $('#bg-1').fadeIn('slow')
    $('#bg-2').fadeIn('slow')
    end = $('#end')
    intro = $('#intro')
    hideAndShowSections(end, intro)
}


// make gif play on click
var getGif = function () {
    var gif = [];
    $('#bubble-img').each(function () {
        var data = $(this).data('alt');
        gif.push(data);
    });
    return gif;
}
var gif = getGif();

var image = [];

$.each(gif, function (index) {
    image[index] = new Image();
    image[index].src = gif[index];
});

$('#bubble').on('click', function () {
    $img = $('#bubble-img')
    $imgSrc = $img.attr('src'),
    $imgAlt = $img.attr('data-alt'),
    $imgExt = $imgAlt.split('.');

    if ($imgExt[1] === 'gif') {
        $img.attr('src', $img.data('alt')).attr('data-alt', $imgSrc);
    } else {
        $img.attr('src', $imgAlt).attr('data-alt', $img.data('alt'));
    }
});