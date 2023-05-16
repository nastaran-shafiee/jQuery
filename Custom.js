$(document).ready(function () {
    
    $("#Button_1").click(function () { 
        $("#IdSelector").fadeOut(3000);
    });

    $("#Button_2").click(function () { 
        $(".test").fadeOut(3000);
    });

    $("#Button_3").click(function () { 
        $("*").fadeOut(3000);
    });

    $("#Button_4").click(function () { 
        $("[TestName*='TestValue']").fadeOut(3000);
    });

    $("#Button_5").click(function () { 
        $("[WordName~='WordValue']").fadeOut(3000);
    });

    $("#Button_6").click(function () { 
        $("[EndWith$='ad']").fadeOut(3000);
    });

    $("#Button_7").click(function () { 
        $("[Equal='Hello']").fadeOut(3000);
    });

    
    $("#Button_8").click(function () { 
        $("[StartWith^='He']").fadeOut(3000);
    });

    $("#Button_9").click(function () { 
        $(":button").fadeOut(3000);
    });

    $("#Button_10").click(function () { 
        $(":checkbox").fadeOut(500);
    });

    $("#Button_11").click(function () { 
        $("#Parent > p.test").fadeOut(500);
    });

    $("#Button_12").click(function () { 
        $("#Contains:contains('test')").fadeOut(500);
    });

    $("#Button_13").click(function () { 
        $("#descendantId p").fadeOut(500);
    });

    $("#Button_14").click(function () { 
        $("input:disabled").fadeOut(500);
    });

    $("#Button_15").click(function () { 
        $("input:enabled").fadeOut(500);
    });

    $("#Button_16").click(function () { 
        $("div:empty").fadeOut(500);
    });

    $("#Button_17").click(function () { 
        $("#indexSelector p:eq(2)").fadeOut(500);
    });

    $("#Button_18").click(function () { 
        $("#evenSelector p:even").fadeOut(500);
    });

    $("#Button_19").click(function () { 
        $("#fileSelector :file").fadeOut(500);
    });

    $("#Button_20").click(function () { 
        $("#childSelector p:first-child").fadeOut(500);
    });

    $("#Button_22").click(function () { 
        $("#firstSelector p:first").fadeOut(500);
    });

    $("#Button_23").click(function () { 
        $("#greaterthanSelector p:gt(1)").fadeOut(500);
    });

    $("#Button_24").click(function () { 
        $("div[HasAttribute]").fadeOut(500);
    });

    $("#Button_25").click(function () { 
        $("div.hasClass:has(p)").fadeOut(500);
    });

    $("#Button_26").click(function () { 
        $("#LastChild p:last-child").fadeOut(500);
    });

    $("#Button_27").click(function () { 
        $("#LastOfType p:last-of-type").fadeOut(500);
    });

    $("#Button_28").click(function () { 
        $("#LastSelector p:last").fadeOut(500);
    });

    $("#Button_29").click(function () { 
        $("#LessThan p:lt(4)").fadeOut(500);
    });

    $("#Button_30").click(function () { 
        $("div[class][multipleAttribute*='Te']").fadeOut(500);
    });

    $("#Button_31").click(function () { 
        $("div.MultipleSelector , #MultipleSelector").fadeOut(500);
    });

    $("#Button_32").click(function () { 
        $("#NextAdjacent + div + p").fadeOut(500);
    });
    
    $("#Button_33").click(function () { 
        $("#NextSiblings ~ p").fadeOut(500);
    });

    $("#Button_34").click(function () { 
        $("input:not(:checked) , input:not(:checked) + span").fadeOut(500);
    });

    $("#Button_35").click(function () { 
        $("#nth_Child ul li:nth-child(3n)").fadeOut(500);
    });

    $("#Button_36").click(function () { 
        $("#nth_Last_Child ul li:nth-last-child(2)").fadeOut(500);
    });

    $("#Button_37").click(function () { 
        $("#nth_Of_Type div p:nth-of-type(2)").fadeOut(500);
    });

    $("#Button_38").click(function () { 
        $("#nth_Last_Of_Type div p:nth-last-of-type(2)").fadeOut(500);
    });

    $("#Button_39").click(function () { 
        $("#Only_Child li:only-child").fadeOut(500);
    });

    $("#Button_40").click(function () { 
        $("#Only_Of_Type b:only-of-type").fadeOut(500);
    });

    $("#Button_41").click(function () { 
        $("#Parent_Selector td:parent").fadeOut(500);
    });
   
});