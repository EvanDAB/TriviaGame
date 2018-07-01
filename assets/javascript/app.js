var answerC1, answerC2, answerC3, answerC4, answerC5, answerC6, answerC7, answerC8;
var i = 60;
var timerInterval;
var scoreR, scoreW, scoreU;
function getSum (total, num) {
    return total + num;
}
$(document).ready(function() {
    $('#hidden').css("display", "none");
    $('#score').css("display", "none");
    scoreR = [0, 0, 0, 0, 0, 0, 0, 0];
    scoreW = [0, 0, 0, 0, 0, 0, 0, 0];
    scoreU = [1, 1, 1, 1, 1, 1, 1, 1];
    //[, , , , , , , ];
})

function timer () {  
    i--;
    // console.log(i);
    $('#timer').text(i); 
    if(i == 0) {
        clearInterval(timerInterval);
        $('#score').show();
        $('#hidden').hide();
    }
}

$('#start').on('click', function () {
    $('#hidden').show(); 
    timerInterval = setInterval(timer, 1000);
    $('#start').css("display", "none");
})


$(document).on('click', '.a1', function() {
    answerC1 = $('input[name=a1]:checked').attr('value');
        scoreU[0] = 0;
        if(answerC1 == 'cor') {
            scoreR[0] = 1;
            scoreW[0] = 0;
        } else if (answerC1 == 'inc') {
            scoreR[0] = 0;
            scoreW[0] = 1;
        }    
});

$('.a2').on('click', function() {
    answerC2 = $('input[name=a2]:checked').attr('value');
    scoreU[1] = 0;
    if(answerC2 == 'cor') {
        scoreR[1] = 1;
        scoreW[1] = 0;
    } else if (answerC2 == 'inc') {
        scoreR[1] = 0;
        scoreW[1] = 1;
    }
})
$('.a3').on('click', function() {
    answerC3 = $('input[name=a3]:checked').attr('value');
    console.log(answerC3);
    scoreU[2] = 0;
    if(answerC3 == 'cor') {
        scoreR[2] = 1;
        scoreW[2] = 0;
    } else if (answerC3 == 'inc') {
        scoreR[2] = 0;
        scoreW[2] = 1;
    }
})
$('.a4').on('click', function() {
    answerC4 = $('input[name=a4]:checked').attr('value');
    console.log(answerC4);
    scoreU[3] = 0;
    if(answerC4 == 'cor') {
        scoreR[3] = 1;
        scoreW[3] = 0;
    } else if (answerC4 == 'inc') {
        scoreR[3] = 0;
        scoreW[3] = 1;
    }
})
$('.a5').on('click', function() {
    answerC5 = $('input[name=a5]:checked').attr('value')
    scoreU[4] = 0;
    if(answerC5 == 'cor') {
        scoreR[4] = 1;
        scoreW[4] = 0;
    } else if (answerC5 == 'inc') {
        scoreR[4] = 0;
        scoreW[4] = 1;
    }
})
$('.a6').on('click', function() {
    answerC6 = $('input[name=a6]:checked').attr('value')
    scoreU[5] = 0;
    if(answerC6 == 'cor') {
        scoreR[5] = 1;
        scoreW[5] = 0;
    } else if (answerC6 == 'inc') {
        scoreR[5] = 0;
        scoreW[5] = 1;
    }
})
$('.a7').on('click', function() {
    answerC7 = $('input[name=a7]:checked').attr('value')
    scoreU[6] = 0;
    if(answerC7 == 'cor') {
        scoreR[6] = 1;
        scoreW[6] = 0;
    } else if (answerC7 == 'inc') {
        scoreR[6] = 0;
        scoreW[6] = 1;
    }
})
$('.a8').on('click', function() {
    answerC8 = $('input[name=a8]:checked').attr('value')
    scoreU[7] = 0;
    if(answerC1 == 'cor') {
        scoreR[7] = 1;
        scoreW[7] = 0;
    } else if (answerC1 == 'inc') {
        scoreR[7] = 0;
        scoreW[7] = 1;
    }
})


jQuery(function($) {
	$.each(['show', 'hide'], function(i, ev) {
		var el = $.fn[ev];
		$.fn[ev] = function() {
			this.trigger(ev);
			return el.apply(this, arguments);
		};
	});
});

$(document).on('click', '#done', function () {
    console.log('clicked');
    clearInterval(timerInterval);
    $('#score').show();
    $('#hidden').hide();
});


$('#score').on('show', function() {
    var scoreWD = $('<h3>');
    var scoreRD = $('<h3>');
    var scoreUD = $('<h3>');

    $('#score').prepend(scoreWD.html(
        'Incorrect: ' + scoreW.reduce(getSum) + '<br>' + 
        'Correct: ' + scoreR.reduce(getSum) + '<br>' +
        'Unanswered: ' + scoreU.reduce(getSum)+ '<br>'));
});


