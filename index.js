function hideIntroShowNext() {
    var current = document.getElementById("intro");
    if (current.style.display = "inline-block") {
        current.style.display = "none";
    }
    var next = document.getElementById("text-entry");
    if (next.style.display = "none") {
        next.style.display = "inline-block";
    }
}

function hideTextEntryShowNext() {
    var x = document.getElementById("text-entry");
    if (x.style.display = "inline-block") {
        x.style.display = "none";
    }
    var y = document.getElementById("pop-bubble");
    if (y.style.display = "none") {
        y.style.display = "inline-block";
    }
    document.getElementById("thought").value = "";
    
}

function hidePopBubbleShowNext() {
    setTimeout(() => {
        var current = document.getElementById("pop-bubble");
        if (current.style.display = "inline-block") {
            current.style.display = "none";
        }
        var next = document.getElementById("end");
        if (next.style.display = "none") {
            next.style.display = "inline-block";
        }
    }, 2000)
}

function hideEndShowTextEntry() {
    var end = document.getElementById("end");
    if (end.style.display = "inline-block") {
        end.style.display = "none";
    }
    var y = document.getElementById("text-entry");
    if (y.style.display = "none") {
        y.style.display = "inline-block";
    }

}

function hideEndShowIntro() {

    var end = document.getElementById("end");
    if (end.style.display = "inline-block") {
        end.style.display = "none";
    }
    var y = document.getElementById("intro");
    if (y.style.display = "none") {
        y.style.display = "inline-block";
    }
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