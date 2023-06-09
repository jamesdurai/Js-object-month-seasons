var currentMonth = new Date().getMonth() + 1;

if (currentMonth >=3 && currentMonth <=5){
    document.write("It's currently Spring");
} else if(currentMonth >=6 && currentMonth <=8){
    document.write("It's currently Summer");
} else if (currentMonth >=9 && currentMonth<=11){
    document.write("It's currently Fall");
}else {
    document.write("It's currently Winter");
}