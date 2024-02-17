// Function to extract font sizes from a website
function extractFontSizes() {
    // Get all elements in the document
    var allElements = document.querySelectorAll('*');
    var fontSizes = {};

    // Iterate through each element
    allElements.forEach(function(element) {
        // Get the computed style for the element
        var computedStyle = window.getComputedStyle(element);
        // Get the font size of the element
        var fontSize = computedStyle.getPropertyValue('font-size');

        // Store font size in the fontSizes object
        if (fontSize in fontSizes) {
            fontSizes[fontSize]++;
        } else {
            fontSizes[fontSize] = 1;
        }
    });

    // Output font sizes
    console.log('Font Sizes:');
    for (var size in fontSizes) {
        console.log(size + ': ' + fontSizes[size]);
    }
}


extractFontSizes();
