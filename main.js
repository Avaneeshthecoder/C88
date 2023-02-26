
var canvas = new fabric.Canvas("my_canvas")
var block_img_width = 30
var block_img_height = 30
var play_x = 10
var play_y = 10
player_object = ""
block_object = ""
function player_update() {
    console.log("test")
    fabric.Image.fromURL("player.png", function (img) {
        player_object = img
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140)
        console.log("test3")
        player_object.set({
            top: play_y,
            left: play_x

        })
        console.log("test2")
        canvas.add(player_object)
    })
}

function new_img(get_img) {
    console.log("test5 " + get_img)
    fabric.Image.fromURL(get_img, function (img) {
        block_object = img
        block_object.scaleToWidth(block_img_width);
        block_object.scaleToHeight(block_img_height)
        block_object.set({
            top: play_y,
            left: play_x

        })
        console.log("test6 " + block_object)
        canvas.add(block_object)
    })
}
window.addEventListener("keydown", my_keydown);
function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed)



    if (e.shiftKey && keyPressed == '80') {
        console.log("p and shift pressed together");
        block_img_width = block_img_width + 10;
        block_img_height = block_img_height + 10;
        document.getElementById("current_width").innerHTML = block_img_width;
        document.getElementById("current_height").innerHTML = block_img_height;
    }
    if (e.shiftKey && keyPressed == '77') {
        console.log("m and shift pressed together");
        block_img_width = block_img_width - 10;
        block_img_height = block_img_height - 10;
        document.getElementById("current_width").innerHTML = block_img_width;
        document.getElementById("current_height").innerHTML = block_img_height;
    }
    if (keyPressed == "38") {
        up()
        console.log("up")
    }
    if (keyPressed == "40") {
        down()
        console.log("down")
    }
    if (keyPressed == "37") {
        left()
        console.log("left")
    }
    if (keyPressed == "39") {
        right()
        console.log("right")
    }
    if (keyPressed == "87") {
        new_img("wall.jpg")
        console.log("w")
    }
    if (keyPressed == "71") {
        new_img("ground.png")
        console.log("g")
    }
    if (keyPressed=='76') {
        new_img('light_green.png');
        console.log("l");
    }
    if (keyPressed=='82') {
        new_img('roof.jpg');
        console.log("r");
    }
    if (keyPressed=='89') {
        new_img('yellow_wall.png');
        console.log("y");
    }
    if (keyPressed=='68') {
        new_img('dark_green.png');
        console.log("d");
    }
    if (keyPressed=='85') {
        new_img('unique.png');
        console.log("u");
    }
    if (keyPressed=='67') {
        new_img('cloud.jpg');
        console.log("c");
    }
    if (keyPressed=='84') {
        new_img('trunk.jpg');
        console.log("t");
    }
}
function up() {
    if (play_y>=0) {
        play_y-=block_img_height
        canvas.remove(player_object)
        player_update()
    }
}
function down() {
    if (play_y<=500) {
        play_y+=block_img_height
        canvas.remove(player_object)
        player_update()
    }
}
function left() {
    if (play_x>0) {
        play_x-=block_img_width
        canvas.remove(player_object)
        player_update()
    }
}
function right() {
    if (play_x<=850) {
        play_x+=block_img_width
        canvas.remove(player_object)
        player_update()
    }
}