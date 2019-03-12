var epoch = new Date(2018,4,31,0,0,0,0);

function destanceEpoch(time){
    var SECONDS_IN_A_DAY = 24 * 60 * 60 * 1000;
    var sec = epoch.getTime() - time.getTime();
    return Math.abs(sec/SECONDS_IN_A_DAY)
}

function getRecomQuest(time){

    //2019/3/28-4/4までは全部暗影
    var startANEI_20190328 = new Date(2019,2,28,0,0,0,0)
    var endANEI_20190328 = new Date(2019,3,4,0,0,0,0)

    if((startANEI_20190328 <= time) && (endANEI_20190328 > time)){
        return 0
    }
    else{
        var deff = destanceEpoch(time)
        return deff % 5
    }
    //return deff % 5
}

function getQuestFullName(index){
    switch (index){
        case 0:
            return "暗影渦巻く壊れた世界";
        case 1:
            return "境界を貫く双角の凶鳥";
        case 2:
            return "混沌導く闇の化身";
        case 3:
            return "混沌産み出す闇の化身";
        case 4:
            return "混沌喚び出す龍の咆哮";
        default:
            return "";

    }
}

function getQuestName(index){
    switch (index){
        case 0:
            return "暗影";
        case 1:
            return "凶鳥";
        case 2:
            return "導く";
        case 3:
            return "産み出す";
        case 4:
            return "喚び出す";
        default:
            return "";

    }
}