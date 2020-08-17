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


function brickCalculator(building){
    var level = 0;
    if(building <= 10){
        level = building *15000;
    }else if(building <=20){
    var firstStep = 10 * 15000;
    var remaining = building - 10;
    var secondStep = remaining * 12000;
    level = firstStep + secondStep;
    }else {
       var  firstStep = 10 * 15000;
       var secondStep = 10 * 12000;
       var remaining = building - 20;
       var thirdStep = remaining * 10000;
       level = firstStep + secondStep + thirdStep;
    }
    return level;
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