$(function(){
    var dtnow = new Date()
    var dt=new Date(dtnow.getFullYear(),dtnow.getMonth(),dtnow.getDate(),0,0,0,0)

    var index = getRecomQuest(dt)
    var name = getQuestFullName(index)

    /*
        プルダウンメニュー設定
    */
    for(var i=0;i<4;i++){
        var y = dt.getFullYear() + i
        if(i==0){
            $("select#year").append("<option value=\""+ y+"\" selected>"+y+"</option>")
        }else{
            $("select#year").append("<option value=\""+ y+"\">"+y+"</option>")
        }
    }

    for(var i=0;i<12;i++){
        var m=dt.getMonth()
        if(i==m){
            $("select#month").append("<option value=\""+ (i+1)+"\" selected>"+(i+1)+"</option>")
        }else{
            $("select#month").append("<option value=\""+ (i+1)+"\">"+(i+1)+"</option>")
        }
    }

    /*
        イベント設定
    */
    $("select#year").change(function(){
        changeCalendar()
    })
    $("select#month").change(function(){
        changeCalendar()
    })

    changeCalendar()

    /*
        今日のおすすめクエスト
    */
   $("#todayquest").append("<h3><div class=\"themepadding theme"+(index+1)+"\">"+name+"</div></h3>")
})

function changeCalendar(){
    var y = $("select#year").val()
    var m = $("select#month").val()
    $(".tbntitle h3").text(y + "年" + m+ "月")
    drawCalendar(y,m)
}

function drawCalendar(year,month){
    var cld = getCalendar(year,month);
    var len = ($("table.tbn tbody").children().length)-1
    var cldrow = cld.length/7
    var speed = 100;

    /*
    if(len != cldrow){

        $("table#tbn tbody td").each(function(){
            this.hide("slow");
            this.remove();
        });

        var d = len = cldrow
        if(d < 0){
            for(var j=0;j<Math.abs(d);j++){
                $("table#tbn tbody tr:last").hide(400);
                $("table#tbn tbody tr:last").remove()
            }
        }
        else{
            for(var j=0;j<d;j++){
                $("table#tbn tbody").append("<tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></td>")
            }
        }
    }
    */

    
    for(var i=0;i<len;i++){
        $("table.tbn tbody tr:last").fadeOut(400);
        $("table.tbn tbody tr:last").remove()
    }
    for(var i=0;i<cldrow;i++){
        $("table.tbn tbody").append("<tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></td>")
    }

    var i=0
    $("table.tbn tbody td").each(function(){
        if(cld[i] != 0){
            var time = new Date(year,month-1,cld[i],0,0,0,0)
            var index = getRecomQuest(time)
            var name = getQuestName(index)
            var theme = "theme" + (index+1);
            /*$(this).html(cld[i] + "<br />" + name)*/
            $(this).append("<div class=day>"+cld[i]+"</div>")
            $(this).append("<div class="+theme+">"+name+"</div>")
        }
        i++;
    })
}

function getCalendar(year,month){
    var callendar = new Array()
    var day = new Date(year,month-1,1,0,0,0)
    var startindex = day.getDay()

    for(var i=0;i<startindex;i++){
        callendar.push(0)
    }

    do{
        callendar.push(day.getDate())
        day.setDate(day.getDate() + 1)
    }while(day.getDate() != 1)

    while(callendar.length % 7 != 0){
        callendar.push(0)
    }

    return callendar
}

function wait(time){
    var time1 = new Date().getTime();
    var time2 = new Date().getTime();
  
    while ((time2 -  time1)<time){
        time2 = new Date().getTime();
    }
}