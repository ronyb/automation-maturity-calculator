let totalScore = 0;

$(function() {
    $(".yes-cell").click(function() {
        
        if (!$(this).hasClass("selected")) {
            $(this).addClass("selected");
            $(this).parent().children(".no-cell").removeClass("selected");
            updateScore(totalScore+=5);
        }
    });

    $(".no-cell").click(function() {
        if (!$(this).hasClass("selected")) {
            $(this).addClass("selected");

            let yesCell = $(this).parent().children(".yes-cell");
            if ($(yesCell).hasClass("selected")) {
                updateScore(totalScore-=5);
                $(yesCell).removeClass("selected");
            }
        }
    });
});

function updateScore() {
    $("#score").html(totalScore);
}