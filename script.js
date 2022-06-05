var count = 0;
gl = 0;

function goalkeeper() {
    b = document.getElementById("b2");
    g = Math.floor(Math.random() * 9);
    gl = g;
    if (g == 1)
        b.style.animation = "gl0 1s";
    else if (g == 2)
        b.style.animation = "gl1 1s";
    else if (g == 3)
        b.style.animation = "gl2 1s";
    else if (g == 4)
        b.style.animation = "gc0 1s";
    else if (g == 5)
        b.style.animation = "gr0 1s";
    else if (g == 6)
        b.style.animation = "gr1 1s";
    else if (g == 7)
        b.style.animation = "gr2 1s";
    else if (g == 8)
        b.style.animation = "gc1 1s";

    else if (g == 9)
        b.style.animation = "gc2 1s";
}


function goal() {

    document.getElementById("GoalDone1").innerHTML = "Missed";
    document.getElementById("GoalDone2").innerHTML = "Missed";
    o = Math.floor(Math.random() * 5);
    if (o == 1)
        document.getElementById("b1").style.animation = "Outside1 1s";
    else if (o == 2)
        document.getElementById("b1").style.animation = "Outside2 2s";
    else if (o == 3)
        document.getElementById("b1").style.animation = "Outside3 3s";
    else if (o == 4)
        document.getElementById("b1").style.animation = "Outside4 4s";
    else if (o == 5)
        document.getElementById("b1").style.animation = "Outside5 5s";

}

function LeftTop() {
    document.getElementById("b1").style.animation = "left0 1s";
    goalkeeper();
    if (gl != 1) {
        count++;
        document.getElementById("Score").innerHTML = count;
        document.getElementById("GoalDone1").innerHTML = "Goall!!";
        document.getElementById("GoalDone2").innerHTML = "Goall!!";
    } else {

        document.getElementById("GoalDone1").innerHTML = "Saved!!";
        document.getElementById("GoalDone2").innerHTML = "Saved!!";
    }
}

function RightTop() {
    document.getElementById("b1").style.animation = "right0 1s";
    goalkeeper();
    if (gl != 5) {
        count++;
        document.getElementById("Score").innerHTML = count;
        document.getElementById("GoalDone1").innerHTML = "Goall!!";
        document.getElementById("GoalDone2").innerHTML = "Goall!!";
    } else {

        document.getElementById("GoalDone1").innerHTML = "Saved!!";
        document.getElementById("GoalDone2").innerHTML = "Saved!!";
    }
}

function CenterTop() {
    document.getElementById("b1").style.animation = "center0 1s";
    goalkeeper();
    if (gl != 4) {
        count++;
        document.getElementById("Score").innerHTML = count;
        document.getElementById("GoalDone1").innerHTML = "Goall!!";
        document.getElementById("GoalDone2").innerHTML = "Goall!!";
    } else {

        document.getElementById("GoalDone1").innerHTML = "Saved!!";
        document.getElementById("GoalDone2").innerHTML = "Saved!!";
    }
}

function LeftMiddle() {
    document.getElementById("b1").style.animation = "left2 1s";
    goalkeeper();
    if (gl != 2) {
        count++;
        document.getElementById("Score").innerHTML = count;
        document.getElementById("GoalDone1").innerHTML = "Goall!!";
        document.getElementById("GoalDone2").innerHTML = "Goall!!";
    } else {

        document.getElementById("GoalDone1").innerHTML = "Saved!!";
        document.getElementById("GoalDone2").innerHTML = "Saved!!";
    }
}

function RightMiddle() {
    document.getElementById("b1").style.animation = "right2 1s";
    goalkeeper();
    if (gl != 6) {
        count++;
        document.getElementById("Score").innerHTML = count;
        document.getElementById("GoalDone1").innerHTML = "Goall!!";
        document.getElementById("GoalDone2").innerHTML = "Goall!!";
    } else {

        document.getElementById("GoalDone1").innerHTML = "Saved!!";
        document.getElementById("GoalDone2").innerHTML = "Saved!!";
    }
}

function CenterMiddle() {
    document.getElementById("b1").style.animation = "center2 1s";
    goalkeeper();
    if (gl != 9) {
        count++;
        document.getElementById("Score").innerHTML = count;
        document.getElementById("GoalDone1").innerHTML = "Goall!!";
        document.getElementById("GoalDone2").innerHTML = "Goall!!";
    } else {

        document.getElementById("GoalDone1").innerHTML = "Saved!!";
        document.getElementById("GoalDone2").innerHTML = "Saved!!";
    }
}

function LeftBottom() {
    document.getElementById("b1").style.animation = "left1 1s";
    goalkeeper();
    if (gl != 3) {
        count++;
        document.getElementById("Score").innerHTML = count;
        document.getElementById("GoalDone1").innerHTML = "Goall!!";
        document.getElementById("GoalDone2").innerHTML = "Goall!!";
    } else {

        document.getElementById("GoalDone1").innerHTML = "Saved!!";
        document.getElementById("GoalDone2").innerHTML = "Saved!!";
    }
}

function RightBottom() {
    document.getElementById("b1").style.animation = "right1 1s";
    goalkeeper();
    if (gl != 7) {
        count++;
        document.getElementById("Score").innerHTML = count;
        document.getElementById("GoalDone1").innerHTML = "Goall!!";
        document.getElementById("GoalDone2").innerHTML = "Goall!!";
    } else {

        document.getElementById("GoalDone1").innerHTML = "Saved!!";
        document.getElementById("GoalDone2").innerHTML = "Saved!!";
    }
}

function CenterBottom() {
    document.getElementById("b1").style.animation = "center1 1s";
    goalkeeper();
    if (gl != 8) {
        count++;
        document.getElementById("Score").innerHTML = count;
        document.getElementById("GoalDone1").innerHTML = "Goall!!";
        document.getElementById("GoalDone2").innerHTML = "Goall!!";
    } else {

        document.getElementById("GoalDone1").innerHTML = "Saved!!";
        document.getElementById("GoalDone2").innerHTML = "Saved!!";
    }
}