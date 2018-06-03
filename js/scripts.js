function sqlifyTheInputText() {
    var sqlStart = "('", sqlEnd = "')";
    var sqlifyString = document.getElementById('input').value;
    // Replace all linebreaks with ','
    var sqlifyString = sqlifyString.replace(/\n/g, "','");
    // Remove all whitespaces with nothing (trim string)
    var sqlifyString = sqlifyString.replace(/\s/g, '');
    // Let's add (' before and ') to the sqlifystring.
    var sqlifyString = sqlStart.concat(sqlifyString, sqlEnd);
    // If input textfield starts with an empty line, remove it.
    if (sqlifyString.includes("'','")) {
        var sqlifyString = sqlifyString.replace("'','", "'");
        console.log("Found a linebreak at the start, will now remove it.");
    }
    // If empty linebreaks exists, remove them!
    if (sqlifyString.includes(",'',")) {
        var sqlifyString = sqlifyString.replace(/,'',/g, ",");
        console.log("Found empty linebreaks, will now remove them.");
    }
    // If input textfield ends with an empty line, remove it.
    if (sqlifyString.includes("',''")) {
        var sqlifyString = sqlifyString.replace("',''", "'");
        console.log("Found a linebreak at the end, will now remove it.");
    }
    // Check if input data is empty and show an "error" otherwise show the sqlifyedstring.
    if (sqlifyString == "('')") {
        document.getElementById("output").value = "Please add some data in input textarea above.";
    } else {
        document.getElementById("output").value = sqlifyString;
    }
 }

function highlightOutput() {
    var element = document.getElementById("output");
    element.classList.add("is-valid");
}

function copyOutputToClipboard() {
    var copyText = document.getElementById("output");
    copyText.select();
    document.execCommand("Copy");

    highlightOutput()

    setTimeout(function () {
        var element = document.getElementById("output");
        element.classList.remove("is-valid");
    }, 250);
}

function clearTextareas() {
    var inputTextarea = document.getElementById("input");
    var outputTextarea = document.getElementById("output");
    inputTextarea.value = '';
    outputTextarea.value = '';
}

function changeToPipesInstead() {
    var ransackString = document.getElementById('output').value;
    if (!ransackString || ransackString.includes("|")) {
        console.log("The string has already pipes or there are no string in output textarea to act on.");        
    } else {
    var ransackString = ransackString.replace(/','/g, "|");
    var ransackString = ransackString.substring(2);
    var ransackString = ransackString.substring(0, ransackString.length-2);
    document.getElementById("output").value = ransackString;
    }
}
