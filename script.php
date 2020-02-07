<?php
/**/
params();

function isRight($x, $y, $r){
    if (($x*$x + $y*$y <= $r*$r) && ($x >= 0) && ($y <= 0)){
        return true;
    }
    if (($x <= $r/2) && ($y <= $r) && ($x >= 0) && ($y >= 0)){
        return true;
    }
    if (($x/2 + $y <= $r/2) && ($x <= 0) && ($y >= 0)){
        return true;
    }
    return false;
}

function params(){
    if (isRight($_GET["x"], $_GET["y"], $_GET["r"])){
        print("hello");
    }else print("nonono");
}