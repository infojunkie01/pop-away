var click = new Audio("./assets/sounds/click.wav");
var pop = new Audio("./assets/sounds/pop.wav");
var choir = new Audio("./assets/sounds/choir.wav");
var harp = new Audio("./assets/sounds/harp.wav");
var harp2 = new Audio("./assets/sounds/harp2.wav");

function playSound(sound, sec){
    sound.currentTime = sec;
	sound.play();
}

function stopSound(sound){
	sound.pause();
}

function addFloatingClass(){
    $('#submit').addClass('floating')
}

function hideAndShowSections(current, next){
    if (current.css("display") == "block") {
        current.hide();
    }
    if (next.css("display") == "none") {
        next.show();
    }
}

function hideIntroShowNext() {
    playSound(click, 0)

    intro = $('#intro')
    textEntry = $('#text-entry')
    hideAndShowSections(intro, textEntry)

}

function hideTextEntryShowNext() {
    playSound(click, 0)
    playSound(harp2, 2)
    textEntry = $('#text-entry')
    popBubble = $('#pop-bubble')
    hideAndShowSections(textEntry, popBubble)

    $('#textarea').val('');
    $('#bubble').prop('disabled', false);
    $('#bubble-img').attr('src', './assets/images/bubble.png');
    $('#submit').removeClass('floating')
    $("#pop-bubble-text").show();
}

function hidePopBubbleShowNext() {
    stopSound(harp2)
    playSound(pop, 0)
    $('#bubble').prop('disabled', true);

    setTimeout(() => {
        $("#pop-bubble-text").fadeOut("slow");
        playSound(choir, 0)
    }, 1000)

    setTimeout(() => {
        popBubble = $('#pop-bubble')
        end = $('#end')
        hideAndShowSections(popBubble, end)
    }, 4000)
}

function hideEndShowTextEntry() {
    stopSound(choir)
    playSound(click, 0)

    end = $('#end')
    textEntry = $('#text-entry')
    hideAndShowSections(end, textEntry)
}

function hideEndShowIntro() {
    stopSound(choir)
    playSound(click, 0)

    end = $('#end')
    intro = $('#intro')
    hideAndShowSections(end, intro)
}

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