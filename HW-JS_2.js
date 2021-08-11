var yr = 22400;
var len = yr.toString().length;
var yrStr = yr.toString();
var fst2 = yr
if (yr % 4 == 0) {
    if (yrStr.substring(len/2, len) == 0) {
        if (yrStr.substring(0, len/2) % 4 ==0) {
            console.log("Nam " + yr + " la nam nhuan");
        }
        else {
            console.log("Nam " + yr + " khong phai nam nhuan");
        }
    }
    else {
        console.log("Nam " + yr + " la nam nhuan");
    }
}