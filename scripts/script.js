$(document).ready(function () {
    breakCountLength();
    sessionCountLength();
});


var breakCounter = $('.break-counter'),
    sessionCounter = $('.session-counter'),
    breakLength = $('.break-length'),
    sessionLength = $('.session-length'),
    breakMinus = $('.break>.inner>.minus'),
    breakPlus = $('.break>.inner>.plus'),
    sessionMinus = $('.session>.inner>.minus'),
    sessionPlus = $('.session>.inner>.plus'),
    statusTitle = $('.timer-status>h6');


function breakCountLength() {
    $(breakPlus).click( function () {
        statusTitle.text('');
        statusTitle.text('Break');
        sessionLength.text('');
        var i = +breakCounter.text() + 1;
        breakCounter.text(i) && breakLength.text(i);
    });
    $(breakMinus).click( function () {
        statusTitle.text('');
        statusTitle.text('Break');
        sessionLength.text('');
        var i = breakCounter.text() -1;
        if(i<=0){
            i =0;
        }else{
            breakCounter.text(i) && breakLength.text(i);

        }
    });
}
function sessionCountLength() {
    $(sessionPlus).click( function () {
        statusTitle.text('');
        statusTitle.text('Session');
        breakLength.text('');
        var i = +sessionCounter.text() + 1;
        sessionCounter.text(i) && sessionLength.text(i);
    });
    $(sessionMinus).click( function () {
        statusTitle.text('');
        statusTitle.text('Session');
        breakLength.text('');
        var i = sessionCounter.text() -1;
        if(i<=0){
            i =0;
        }else{
            sessionCounter.text(i) && sessionLength.text(i);

        }
    });
}


