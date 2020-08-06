function feetToMile(feet){
    var mile = feet /5280;
    return mile;
}



function woodCalculator(chair,table,boxBed){
    var chairCount = chair * 10;
    var tableCount = table *15 ;
    var bedCount = boxBed * 25;
    var totalWood = chairCount + tableCount + bedCount;
    return totalWood;
}


function brickCalculator(foot){
    var level = foot * 1000;
    if (level>=1 && level <=10) {
        foot * 15
    }
    else if (level>=10 && level <=20) {
        foot * 12
    }
    else
        foot * 10
}

function tinyFriend(name){
    var smallWord = name[0];
    for (var i = 0; i < name.length; i++) {
        var element = name[i];
        if(element < smallWord){
            smallWord = element;
        }
    } 
    return smallWord
}