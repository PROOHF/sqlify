function sqlifyTheInputText() {
    var sqlStart = "('", sqlEnd = "')";
    var inputString = document.getElementById('input').value;
    // Replace all linebreaks with ','
    var withoutLinebreaks = inputString.replace(/\n/g, "','");
    // Remove all whitespaces with nothing (trim string)
    var withoutLinebreaksOrWhitespace = withoutLinebreaks.replace(/\s/g,'');
    // Remove all empty lines from the string
    var sqlifyString = withoutLinebreaksOrWhitespace.replace(/,'',/g, ",");
    // The final result with (' bfore and ') after
    var sqlifyResult = sqlStart.concat(sqlifyString, sqlEnd);
    document.getElementById("output").value = sqlifyResult;
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
    var ransackString = document.getElementById('input').value;
    ransackString = ransackString.replace(/\n/g, "|");
    document.getElementById("output").value = ransackString;
}
