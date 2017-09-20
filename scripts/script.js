$(document).ready(function () {
    $('#reset-button').hide();
    resetBtn();
    // var start = $('#start');
    var beep = $('#beep')[0];
    var btnSound = $('#sound')[0];
    var breakNum = parseInt($('#break').html());
    var sessionNum = parseInt($('#session').html());
    var counter = $('#counter').html();
    // var reset = $('#reset-button');
    var timerStatus = $('.timer-status>h6');

    inGodWeTrust();

    //start timer function
    function inGodWeTrust() {
        $('#start-timer').on('click', function () {
            timerStatus.text('Started');
            $('.plus, .minus').hide();
            $('#break, #session').css('padding-left','15px');

            var timerCounter = setInterval(sessionTimer, 10);
            btnSound.play();
            sessionNum*=60;
            breakNum*=60;
            function sessionTimer() {
                $('#start-timer').off('click');
                sessionNum-=1;
                if(sessionNum===0){
                    beep.play();
                    clearInterval(timerCounter);
                    timerStatus.text('Finished');
                    var startBreakTimer = setInterval(breakTimer, 10);
                }
                if(sessionNum%60>=10){
                    $('#counter').html(Math.floor(sessionNum/60)+':'+sessionNum%60);
                }else{
                    $('#counter').html(Math.floor(sessionNum/60)+':'+'0'+sessionNum%60);
                }
                console.log(sessionNum);

                function breakTimer() {
                    timerStatus.text('Break started');
                    $('.timer-body').css('background','#00b04a').css('border','10px solid #007d35');
                    breakNum-=1;
                    if(breakNum===0){
                        clearInterval(startBreakTimer);
                        timerStatus.text('Break finished');
                        $('#reset-button').show();
                        beep.play();
                    }
                    if(breakNum%60>=10){
                        $('#counter').html(Math.floor(breakNum/60)+':'+breakNum%60);
                    }else{
                        $('#counter').html(Math.floor(breakNum/60)+':'+'0'+breakNum%60);
                    }
                    console.log(breakNum);
                }
            }
        });
    }
//plus-minus function
    $('#session-minus').click(function () {
        if (sessionNum>1){
            sessionNum -=1;
            clearSession();
        }
    });
    $('#session-plus').click(function () {
            sessionNum +=1;
            clearSession();

    });
    $('#break-minus').click(function () {
        if (breakNum>1){
            breakNum -=1;
            clearBreak();
        }
    });
    $('#break-plus').click(function () {
            breakNum +=1;
            clearBreak();
    });
   function resetBtn() {
       var reset = $('#reset-button');
       reset.click(function () {
           inGodWeTrust();
           $('.timer-body').css('background','#a83e38').css('border','10px solid #82302c');
           timerStatus.text('Click me!');
           $('.plus, .minus').show();
           $('#counter').html(counter=25);
           $('#break').html(breakNum=5).css('padding-left','0px');
           $('#session').html(sessionNum=25).css('padding-left','0px');
           $('#reset-button').hide();
       });
   }
    //additional functions
    function clearSession() {
        $('#session').html(sessionNum);
        timerStatus.text('Session');
        $('#counter').html(sessionNum);
    }
    function clearBreak() {
        $('#break').html(breakNum);
        timerStatus.text('Break');
        $('#counter').html(breakNum);
    }

});