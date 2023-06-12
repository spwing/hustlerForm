function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

function displayMobileButton() {
    if (isMobileDevice()) {
        var convertButton = document.getElementById("convertButtonMobile");
        convertButton.style.display = "inline";

        var convertButton = document.getElementById("convertButtonWeb");
        convertButton.style.display = "none";
    } else {
        var convertButton = document.getElementById("convertButtonMobile");
        convertButton.style.display = "none";

        var convertButton = document.getElementById("convertButtonWeb");
        convertButton.style.display = "inline";
    }
}

document.addEventListener("DOMContentLoaded", function() {
    displayMobileButton();
});
