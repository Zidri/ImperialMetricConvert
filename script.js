var result = 0;
var imperialTometric = true;

const imperialUnitInput = '<select id="imperialUnit"><option value="in">Inch</option><option value="ft">Foot</option><option value="yd">Yard</option><option value="mi">Mile</option></select>';
const seperator = '<div class="seperator">to</div>';
const metricUnitInput = '<select id="metricUnit"><option value="mm">Millimeter</option><option value="cm">Centimeter</option><option value="m">Meter</option><option value="km">Kilometer</option></select>';

function toggle() {

    //change toggle var
    if (imperialTometric) {
        //change title
        document.getElementById("title").innerHTML="Metric-Imperial Converter";

        //change header 
        document.getElementById("header").innerHTML="<h1>Metric-Imperial Converter</h1>";

        //change display
        document.getElementById("display").innerHTML = "Metric to Imperial";

        //change unit input order
        document.getElementById("unitInput").innerHTML = metricUnitInput + seperator + imperialUnitInput;

        //change button text
        document.getElementById("toggle").innerHTML = "Imperial to Metric";

        imperialTometric = false;
    }
    else if (!imperialTometric) {
        //change title
        document.getElementById("title").innerHTML="Imperial-Metric Converter";

        //change header 
        document.getElementById("header").innerHTML="<h1>Imperial-Metric Converter</h1>";
        
        //change display
        document.getElementById("display").innerHTML = "Imperial to Metric";

        //change unit input order
        document.getElementById("unitInput").innerHTML = imperialUnitInput + seperator + metricUnitInput;

        //change button text
        document.getElementById("toggle").innerHTML = "Metric to Imperial";

        imperialTometric = true;
    }

}

function displayResult(im, met, length) {
    if (!imperialTometric) {
        document.getElementById("display").innerHTML = length + " " + met + " = " + result + " " + im;
    }
    else {
        document.getElementById("display").innerHTML = length + " " + im + " = " + result + " " + met;
    }
}

const round = (value) => {
    return Number(value.toFixed(6));
};


function checkUnits(imperial, metric, length) {
    if (imperialTometric) {
        if (imperial == "in") {
            if (metric == "mm") {
                result = length * 25.4;
                result = round(result);
                return;
            }
            else if (metric == "cm") {
                result = length * 2.54;
                result = round(result);
                return;
            }
            else if (metric == "m") {
                result = length * 0.0254;
                result = round(result);
                return;
            }
            else if (metric == "km") {
                result = length * 0.0000254;
                result = round(result);
                return;
            }
        }
        else if (imperial == "ft") {
            if (metric == "mm") {
                result = length * 304.8;
                result = round(result);
                return;
            }
            else if (metric == "cm") {
                result = length * 30.48;
                result = round(result);
                return;
            }
            else if (metric == "m") {
                result = length * 0.3048;
                result = round(result);
                return;
            }
            else if (metric == "km") {
                result = length * 0.0003048;
                result = round(result);
                return;
            }
        }
        else if (imperial == "yd") {
            if (metric == "mm") {
                result = length * 914.4;
                result = round(result);
                return;
            }
            else if (metric == "cm") {
                result = length * 91.44;
                result = round(result);
                return;
            }
            else if (metric == "m") {
                result = length * 0.9144;
                result = round(result);
                return;
            }
            else if (metric == "km") {
                result = length * 0.0009144;
                result = round(result);
                return;
            }
        }
        else if (imperial == "mi") {
            if (metric == "mm") {
                result = length * 1609344;
                result = round(result);
                return;
            }
            else if (metric == "cm") {
                result = length * 160934.4;
                result = round(result);
                return;
            }
            else if (metric == "m") {
                result = length * 1609.344;
                result = round(result);
                return;
            }
            else if (metric == "km") {
                result = length * 1.609344;
                result = round(result);
                return;
            }
        }
    }
    else {
        if (metric == "mm") {
            if (imperial == "in") {
                result = length / 25.4;
                result = round(result);
                return;
            }
            else if (imperial == "ft") {
                result = length / 304.8;
                result = round(result);
                return;

            }
            else if (imperial == "yd") {
                result = length / 914.4;
                result = round(result);
                return;
            }
            else if (imperial == "mi") {
                result = length / 1.609344;
                result = round(result);
                return;
            }
        }
        else if (metric == "cm") {
            if (imperial == "in") {
                result = length / 2.54;
                result = round(result);
                return;
            }
            else if (imperial == "ft") {
                result = length / 30.48;
                result = round(result);
                return;

            }
            else if (imperial == "yd") {
                result = length / 91.44;
                result = round(result);
                return;
            }
            else if (imperial == "mi") {
                result = length / 160934.4;
                result = round(result);
                return;
            }
        }
        else if (metric == "m") {
            if (imperial == "in") {
                result = length * 39.37;
                result = round(result);
                return;
            }
            else if (imperial == "ft") {
                result = length * 3.281;
                result = round(result);
                return;

            }
            else if (imperial == "yd") {
                result = length * 1.094;
                result = round(result);
                return;
            }
            else if (imperial == "mi") {
                result = length / 1609.344;
                result = round(result);
                return;
            }
        }
        else if (metric == "km") {
            if (imperial == "in") {
                result = length * 39370.1;
                result = round(result);
                return;
            }
            else if (imperial == "ft") {
                result = length * 3280.84;
                result = round(result);
                return;

            }
            else if (imperial == "yd") {
                result = length * 1093.61;
                result = round(result);
                return;
            }
            else if (imperial == "mi") {
                result = length / 1.609344;
                result = round(result);
                return;
            }
        }
    }
}

function convert() {
    //get inputs
    var length = document.getElementById("number").value;
    var imperial = document.getElementById("imperialUnit");
    var metric = document.getElementById("metricUnit");
    var imperialValue = imperial.options[imperial.selectedIndex].value;
    var metricValue = metric.options[metric.selectedIndex].value;

    checkUnits(imperialValue, metricValue, length);
    displayResult(imperialValue, metricValue, length);

}

