/*
добавить обработку точки и запятой done
добавить обработку - done
добавить пропадание надписи done
добавить обработку 2.99999999
 */

const MaxY = 3;
const MinY = -3;
const MaxR = 4;
const MinR = 1;

function error_message_for_Y(message){
    var node = document.getElementById('message_for_Y');
    node.innerText = message;
}


function CheckY() {
    var y = document.getElementById("y").value;
    y = y.trim();
    error_message_for_Y("");
   if (y.length === 0) {
       error_message_for_Y("Please write something");
    }else {
       if (isNaN(y.replace(',', '.'))) {
           error_message_for_Y("Please write a number");
       } else {
           let val = +y;
           if (val <= MinY || val >= MaxY) {
               error_message_for_Y("Please write a number in (-3..3)");
           }
       }
   }
}

function error_message_for_R(message){
    var node = document.getElementById('message_for_R');
    node.innerText = message;
}


function CheckR() {
    var r = document.getElementById("r").value;
    r = r.trim();
    error_message_for_R("");
    if (r.length === 0) {
        error_message_for_R("Please write something");
    }else {
        if (isNaN(r.replace(',', '.'))) {
            error_message_for_R("Please write a number");
        } else {
            let val = +r;
            if (val <= MinR || val >= MaxR) {
                error_message_for_R("Please write a number in (1..4)");
            }
        }
    }
}


function CheckX() {
    CheckY();
    CheckR();
}