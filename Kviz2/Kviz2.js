$(document).ready(function () {

            otazky = [
                ["Jaka je ma oblibena barva? ", "ruzova", "cervena", "modra"],
                ["Kdy jsem se narodil? ", "zari", "rijen", "prosinec"],
                ["Co mam rad?", "hokej", "rugby", "lakros"]
            ];

        for (var i = 0; i < otazky.length; i++) {
                var otazka = $('<fieldset id="otazka' + i + '"></fieldset>');
                otazka.append($("<h1>" + otazky[i][0] + "</h1>"));
        $("#predchozi").before(otazka);
                for (var x = 1; x < otazky[i].length; x++) {
                    var input = $('<input type="radio"'+ x + '" name="odpoved' + i + '"value="' + otazky[i][x] + '"/>');
                    var label = $('<label for="r' + x + '"></label>');
        label.append($(input));
        input.after(otazky[i][x]);
        otazka.append($(label));
    }


                $("fieldset").each(function () {
                    if ($(this).attr("id") != "otazka0") {
            $(this).hide();
        }
    });
}
});

        function predchozi() {

            var id = $("fieldset:visible").attr("id");
        var poradi = id.charAt(id.length - 1);
        poradi--;
        var predchozi = "#otazka" + poradi;
            if (poradi > -1) {
            $("fieldset:visible").hide();
        $(predchozi).show();
    }
}

        function dalsi() {
            
            var id = $("fieldset:visible").attr("id");
        var poradi = id.charAt(id.length - 1);
        poradi++;
        var dalsi = "#otazka" + poradi;
            if (poradi < otazky.length) {
            $("fieldset:visible").hide();
        $(dalsi).show();
    }
}

        function odeslat() {
            $("fieldset").show();
        $($("input").attr("disabled", "disabled"));
        $("#predchozi").attr("disabled", "disabled");
        $("#dalsi").attr("disabled", "disabled");
        $("#odeslat").attr("disabled", "disabled");
            $("input").each(function () {
                if ($(this).val() == "modra" || $(this).val() == "zari" || $(this).val() == "rugby") {
            $(this).parent().css("background", "lime");
        } else {
            $(this).parent().css("background", "red")
        }
            });

    }