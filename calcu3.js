$("document").ready(function(){
    $("#1").click(function(){
        var num = 1;
        $("#display").val($("#display").val() + num);
    })

    $("#2").click(function(){
        var num = 2;
        $("#display").val($("#display").val() + num);
    })

    $("#3").click(function(){
        var num = 3;
        $("#display").val($("#display").val() + num);
    })

    $("#4").click(function(){
        var num = 4;
        $("#display").val($("#display").val() + num);
    })

    $("#5").click(function(){
        var num = 5;
        $("#display").val($("#display").val() + num);
    })

    $("#6").click(function(){
        var num = 6;
        $("#display").val($("#display").val() + num);
    })

    $("#7").click(function(){
        var num = 7;
        $("#display").val($("#display").val() + num);
    })

    $("#8").click(function(){
        var num = 8;
        $("#display").val($("#display").val() + num);
    })

    $("#9").click(function(){
        var num = 9;
        $("#display").val($("#display").val() + num);
    })
    $("#0").click(function(){
        var num = 0;
        $("#display").val($("#display").val() + num);
    })

    $("#coma").click(function(){
        var num = ".";
        $("#display").val($("#display").val() + num);
    })

    $("#mas").click(function(){
        var valorActual = $("#display").val();
        var operacion = "+";
        $("#display").data("valorAnterior", valorActual);
        $("#display").data("operacion", operacion);
        $("#display").val("");
        $("#op").text("Suma");
    })

    $("#menos").click(function(){
        var valorActual = $("#display").val();
        var operacion = "-";
        $("#display").data("valorAnterior", valorActual);
        $("#display").data("operacion", operacion);
        $("#display").val("");
        $("#op").text("Resta");
    })

    $("#igual").click(function(){
        var valorActual = $("#display").val();
        var valorAnterior = $("#display").data("valorAnterior");
        var operacion = $("#display").data("operacion");
        
        if (operacion === "+") {
            var resultado = parseFloat(valorAnterior) + parseFloat(valorActual);
            $("#display").val(resultado);
        }
        if (operacion === "-") {
            var resultado = parseFloat(valorAnterior) - parseFloat(valorActual);
            $("#display").val(resultado);
        }
        if (operacion === "*") {
            var resultado = parseFloat(valorAnterior) * parseFloat(valorActual);
            $("#display").val(resultado);
        }
        if (operacion === "/") {
            var resultado = parseFloat(valorAnterior) / parseFloat(valorActual);
            $("#display").val(resultado);
        }
        if (operacion === "%") {
            var resultado = parseFloat(valorAnterior) * (parseFloat(valorActual)/100);
            $("#display").val(resultado);
        }
        $("#op").text("Calculadora");
    })

    $("#multi").click(function(){
        var valorActual = $("#display").val();
        var operacion = "*";
        console.log(operacion);
        $("#display").data("valorAnterior", valorActual);
        $("#display").data("operacion", operacion);
        $("#display").val("");
        $("#op").text("Multiplicacion");
    })

    $("#div").click(function(){
        var valorActual = $("#display").val();
        var operacion = "/";
        console.log(operacion);
        $("#display").data("valorAnterior", valorActual);
        $("#display").data("operacion", operacion);
        $("#display").val("");
        $("#op").text("Division");
    })

    $("#porc").click(function(){
        var valorActual = $("#display").val();
        var operacion = "%";
        console.log(operacion);
        $("#display").data("valorAnterior", valorActual);
        $("#display").data("operacion", operacion);
        $("#display").val("");
        $("#op").text("Porcentaje");
    })

    $("#masmenos").click(function(){
        var valorActual = $("#display").val();
        var resultado = -valorActual;
            $("#display").val(resultado);
    })

    $("#AC").click(function(){
        console.log("funciona")
        $("#display").val("");
    })
})