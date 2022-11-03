var result = 0;

function displayResult(im, met, weight) {
    console.log("check");
    document.getElementById("display").innerHTML = weight + " " + im + " = " + result + " " + met;
}

const round = (value) => {
    return Number(value.toFixed(6));
};

function checkUnits(imperial, metric, weight) {

    if (imperial == "in") {
        if (metric == "mm") {
            result = weight * 25.4;
            result = round(result);
            return;
        }
        else if (metric == "cm") {
            result = weight * 2.54;
            result = round(result);
            return;
        }
        else if (metric == "m") {
            result = weight * 0.0254;
            result = round(result);
            return;
        }
        else if (metric == "km") {
            result = weight * 0.0000254;
            result = round(result);
            return;
        }
    }
    else if (imperial == "ft") {
        if (metric == "mm") {
            result = weight * 304.8;
            result = round(result);
            return;
        }
        else if (metric == "cm") {
            result = weight * 30.48;
            result = round(result);
            return;
        }
        else if (metric == "m") {
            result = weight * 0.3048;
            result = round(result);
            return;
        }
        else if (metric == "km") {
            result = weight * 0.0003048;
            result = round(result);
            return;
        }
    }
    else if (imperial == "yd") {
        if (metric == "mm") {
            result = weight * 914.4;
            result = round(result);
            return;
        }
        else if (metric == "cm") {
            result = weight * 91.44;
            result = round(result);
            return;
        }
        else if (metric == "m") {
            result = weight * 0.9144;
            result = round(result);
            return;
        }
        else if (metric == "km") {
            result = weight * 0.0009144;
            result = round(result);
            return;
        }
    }
    else if (imperial == "mi") {
        if (metric == "mm") {
            result = weight * 1609344;
            result = round(result);
            return;
        }
        else if (metric == "cm") {
            result = weight * 160934.4;
            result = round(result);
            return;
        }
        else if (metric == "m") {
            result = weight * 1609.344;
            result = round(result);
            return;
        }
        else if (metric == "km") {
            result = weight * 1.609344;
            result = round(result);
            return;
        }
    }
}

function convert() {
    //get inputs
    var weight = document.getElementById("number").value;
    var imperial = document.getElementById("imperialUnit");
    var metric = document.getElementById("metricUnit");
    var imperialValue = imperial.options[imperial.selectedIndex].value;
    var metricValue = metric.options[metric.selectedIndex].value;

    checkUnits(imperialValue, metricValue, weight);
    displayResult(imperialValue, metricValue, weight);

}

