$(function(){
    $("button").click(function(){
        var insData = $("#ins").val();
        // 1. 올림 결과
        var ceilRes = Math.ceil(insData);
        $("li:first-child  .res:last-child").text(ceilRes);

        // 2. 반올림 결과
        var roundRes = Math.round(insData);
        $("li:nth-child(2)  .res:last-child").text(roundRes);

        // 3. 내림 결과
        var floorRes = Math.floor(insData);
        $("li:last-child .res:last-child").text(floorRes);

        /* 랜덤값 추출 = 난수 추출*/
        /*var rndValue = Math.random();*/
        var rndValue = Math.floor( (5-1+1)*Math.random() + 1);
        $("#rndRes").text(rndValue);

//        로또 번호 생성하기(1~45)
        //                 시작번호  종료번호
        //    Math.floor((종료번호-시작번호 + 1) * Math.random() + 시작번호);
        // 보기. 1~5사이의 랜덤값 반환하기
        //   =>   Math.floor( (5-1+1)*Math.random() + 1);


    });
});




