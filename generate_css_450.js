// Builder for 450-Question CSS3 Knowledge Pack (30 questions x 15 modules)
const fs = require('fs');
const path = require('path');

const modules = [
  { number: 1, name: "CSS Syntax, Selectors & Specificity" },
  { number: 2, name: "Colors, Backgrounds & Borders" },
  { number: 3, name: "CSS Box Model & Margin Collapsing" },
  { number: 4, name: "Typography, Web Fonts & Text Effects" },
  { number: 5, name: "CSS Display, Visibility & Opacity" },
  { number: 6, name: "CSS Positioning & Stacking Contexts" },
  { number: 7, name: "Advanced Selectors, Combinators & Attribute Selectors" },
  { number: 8, name: "Pseudo-Classes & Pseudo-Elements" },
  { number: 9, name: "CSS Flexbox Layout (Complete Guide)" },
  { number: 10, name: "CSS Grid Layout (2D Systems)" },
  { number: 11, name: "CSS 2D & 3D Transforms" },
  { number: 12, name: "Transitions & Keyframe Animations" },
  { number: 13, name: "Responsive Web Design & Media Queries" },
  { number: 14, name: "Modern CSS3: Custom Properties, Filters & Effects" },
  { number: 15, name: "CSS Architecture, Container Queries & Modern Layouts" }
];

const questions = [];

function addQ(moduleNum, question, a, b, c, d, answer, explanation, level, imageUrl = null) {
  const mod = modules.find(m => m.number === moduleNum);
  const qObj = {
    question,
    a,
    b,
    c,
    d,
    answer,
    explanation,
    level,
    module: moduleNum,
    moduleName: mod.name
  };
  if (imageUrl) {
    qObj.imageUrl = imageUrl;
  }
  questions.push(qObj);
}

// -------------------------------------------------------------
// MODULE 1: CSS Syntax, Selectors & Specificity (30 Questions)
// -------------------------------------------------------------
addQ(1, "What does the acronym 'CSS' stand for?",
  "Creative Style Sheets",
  "Cascading Style Sheets",
  "Computer Style Syntax",
  "Colorful Style System",
  "B", "CSS stands for Cascading Style Sheets, defining visual presentation for HTML documents.", 1);

addQ(1, "In a standard CSS rule 'h1 { color: red; font-size: 20px; }', what is 'h1' called?",
  "The Property",
  "The Selector",
  "The Declaration Block",
  "The Value",
  "B", "The selector points to the HTML element(s) to which the style declarations will apply.", 1);

addQ(1, "Which CSS selector targets an element with the HTML attribute id='main-header'?",
  ".main-header",
  "#main-header",
  "*main-header",
  "id(main-header)",
  "B", "The hash (#) symbol selects elements by their unique ID attribute.", 1);

addQ(1, "Which CSS selector targets all elements with the HTML class 'card-title'?",
  "#card-title",
  ".card-title",
  "card-title",
  "*card-title",
  "B", "The period/dot (.) symbol selects elements by class name.", 1);

addQ(1, "What does the universal selector '*' select in CSS?",
  "Only root <html> elements",
  "All elements of any type in the entire DOM tree",
  "Only elements with classes",
  "Only text nodes",
  "B", "The universal selector (*) matches every single element in the document.", 1);

addQ(1, "How do you apply the same CSS styling declarations to <h1>, <h2>, and <p> simultaneously (Selector Grouping)?",
  "h1 + h2 + p { color: blue; }",
  "h1, h2, p { color: blue; }",
  "h1.h2.p { color: blue; }",
  "h1 & h2 & p { color: blue; }",
  "B", "Commas separate multiple grouped selectors sharing the same declaration block.", 1);

addQ(1, "What is the calculated CSS Specificity weight representation for an ID selector (e.g. #nav)?",
  "(0, 0, 0, 1)",
  "(0, 0, 1, 0)",
  "(0, 1, 0, 0)",
  "(1, 0, 0, 0)",
  "C", "Specificity is measured as (Inline, ID, Class/Attribute/Pseudo-class, Element). An ID selector adds (0, 1, 0, 0).", 2);

addQ(1, "What is the Specificity value of a single Class selector (e.g. '.btn')?",
  "(0, 0, 0, 1)",
  "(0, 0, 1, 0)",
  "(0, 1, 0, 0)",
  "(0, 0, 0, 0)",
  "B", "Classes, attributes, and pseudo-classes contribute (0, 0, 1, 0) to specificity.", 2);

addQ(1, "What is the Specificity value of an Element / Type selector (e.g. 'div' or 'p')?",
  "(0, 0, 0, 1)",
  "(0, 0, 1, 0)",
  "(0, 1, 0, 0)",
  "(0, 0, 0, 0)",
  "A", "HTML tag/element selectors and pseudo-elements contribute (0, 0, 0, 1).", 2);

addQ(1, "What happens when two CSS rules with identical specificity target the exact same element property?",
  "The first rule in the stylesheet always wins",
  "The rule declared LATER (last in source order) takes precedence and overrides the earlier one",
  "Both rules are ignored",
  "The browser generates a console error",
  "B", "Under the Cascade rule, when specificity is equal, the last declared rule in source order wins.", 1);

addQ(1, "What does appending '!important' to a CSS property value declaration do (e.g. 'color: red !important;')?",
  "Increases font size by 20%",
  "Overrides normal cascading specificity rules, giving the declaration maximum priority",
  "Applies the style only in dark mode",
  "Forces asynchronous loading",
  "B", "!important overrides standard cascade specificity and inline styles, and should be used sparingly.", 2);

addQ(1, "Where should an external CSS stylesheet link tag '<link rel=\"stylesheet\" href=\"styles.css\">' ideally be placed in an HTML document?",
  "Inside the <body> tag at the bottom",
  "Inside the <head> section",
  "Outside the <html> tag",
  "Inside a <script> tag",
  "B", "Placing stylesheets inside <head> ensures styles are parsed before rendering, preventing Flash of Unstyled Content (FOUC).", 1);

addQ(1, "How are inline styles applied directly to an individual HTML element?",
  "Using the 'style' attribute (e.g. <p style=\"color: red;\">)",
  "Using the 'css' attribute",
  "Using <style> inside <p>",
  "Using 'class=\"inline:red\"'",
  "A", "The HTML 'style' attribute embeds inline CSS declarations directly onto elements with (1, 0, 0, 0) specificity.", 1);

addQ(1, "Which selector has the highest specificity among the following options?",
  "div.container p",
  "#header .nav-item",
  "ul li a",
  ".header .nav .item",
  "B", "#header .nav-item has 1 ID and 1 Class (0, 1, 1, 0), which beats any number of classes or elements without IDs.", 2);

addQ(1, "What is 'Inheritance' in CSS?",
  "Subclasses copying JavaScript prototypes",
  "The mechanism by which certain property values (like color and font-family) set on a parent element automatically pass down to its descendant children",
  "Copying CSS files across servers",
  "Importing fonts from Google",
  "B", "Typography and text properties are inherited down the DOM tree unless explicitly overridden.", 1);

addQ(1, "Which CSS keyword explicitly forces a property to take the computed value of its parent element?",
  "initial",
  "inherit",
  "unset",
  "revert",
  "B", "'inherit' instructs the property to adopt its parent's computed value.", 2);

addQ(1, "What does the 'initial' keyword reset a CSS property value to?",
  "The value specified by the browser's user-agent stylesheet",
  "The official default value specified in the W3C specification for that property",
  "Inherits from parent",
  "Transparent / 0",
  "B", "'initial' sets a property to its official CSS specification default value.", 2);

addQ(1, "What does the 'unset' CSS keyword do?",
  "Deletes the element from DOM",
  "Acts as 'inherit' if the property naturally inherits, or acts as 'initial' if it does not",
  "Sets the value to null",
  "Disables the stylesheet",
  "B", "'unset' erases declarations, defaulting to inheritance if applicable, or initial otherwise.", 2);

addQ(1, "How do you write comments inside a CSS stylesheet file?",
  "// This is a comment",
  "/* This is a comment */",
  "# This is a comment",
  "<!-- This is a comment -->",
  "B", "CSS only supports block comments enclosed between /* and */.", 1);

addQ(1, "Which rule imports another external CSS file from within a stylesheet?",
  "@import url(\"theme.css\");",
  "#include \"theme.css\";",
  "require(\"theme.css\");",
  "link \"theme.css\";",
  "A", "The @import at-rule loads external CSS stylesheets into the current file.", 2);

addQ(1, "What is the Specificity value of the ':where()' pseudo-class (e.g. ':where(h1, h2, h3)')?",
  "(0, 1, 0, 0)",
  "(0, 0, 1, 0)",
  "Zero specificity (0, 0, 0, 0)",
  "(0, 0, 0, 1)",
  "C", ":where() always has a specificity of exactly (0, 0, 0, 0), making its declarations easy to override.", 3);

addQ(1, "What is the Specificity value of the ':is()' pseudo-class (e.g. ':is(#header, .nav)')?",
  "Always (0, 0, 0, 0)",
  "The specificity of its most specific argument selector in the list",
  "The sum of all arguments",
  "Always 1 class",
  "B", ":is() takes on the specificity of its single highest-weighted argument.", 3);

addQ(1, "Which of the following properties is NOT inherited by default in CSS?",
  "color",
  "font-family",
  "margin",
  "line-height",
  "C", "Box model properties (margin, padding, border, width) are not inherited by children.", 2);

addQ(1, "What does the declaration 'all: unset;' accomplish on an element?",
  "Hides the element completely",
  "Resets all CSS properties on that element back to their initial or inherited values simultaneously",
  "Removes all HTML tags",
  "Deletes the element's CSS class",
  "B", "The 'all' shorthand resets all standard CSS properties on the selector in one command.", 2);

addQ(1, "What is the purpose of the 'ch' unit in CSS?",
  "Width of the '0' (zero) glyph in the current font",
  "Height of uppercase 'C'",
  "Length of one Chinese character",
  "Character count limit",
  "A", "1ch equals the advance measure width of the '0' character in the active font.", 2);

addQ(1, "What is a 'CSS Reset' stylesheet (e.g. Eric Meyer's reset)?",
  "A script that reboots the browser",
  "A stylesheet that removes all default browser user-agent margins, paddings, and font sizes to ensure cross-browser consistency",
  "A tool to minify CSS files",
  "A CSS validator",
  "B", "CSS Resets zero out default browser inconsistencies so layouts render identically across Chrome, Firefox, and Safari.", 1);

addQ(1, "How does 'Normalize.css' differ from a traditional aggressive CSS Reset?",
  "It deletes all HTML elements",
  "It preserves useful browser defaults (like heading sizes and list bullets) while correcting bugs and normalizing styles across browsers",
  "It converts CSS to JavaScript",
  "It only styles tables",
  "B", "Normalize.css standardizes styles while retaining semantic element ergonomics.", 2);

addQ(1, "What is the meaning of Case Sensitivity in CSS selectors?",
  "CSS property names and values are case-insensitive, but HTML class names and IDs are case-sensitive in standard HTML/XHTML documents",
  "Everything in CSS is strictly case-sensitive",
  "CSS requires uppercase tags",
  "Only IDs are case-sensitive",
  "A", "Properties are case-insensitive, but user-defined classes/IDs must match HTML casing.", 2);

addQ(1, "Can an HTML element have multiple class names separated by spaces (e.g. '<div class=\"card primary shadow\">')?",
  "No, only one class is permitted per element",
  "Yes, and CSS rules for all listed classes apply simultaneously to that element",
  "Only in HTML5",
  "Only if using an ID",
  "B", "Space-separated class lists allow composable utility styling.", 1);

addQ(1, "What does the selector 'p.intro' target?",
  "All elements with class 'intro' inside <p>",
  "Only <p> elements that possess the class 'intro'",
  "All <p> elements and all .intro elements",
  "The first paragraph only",
  "B", "Compound selector matching <p> tags with class 'intro'.", 1);

console.log("Module 1 built with 30 questions.");


// -------------------------------------------------------------
// MODULE 2: Colors, Backgrounds & Borders (30 Questions)
// -------------------------------------------------------------
addQ(2, "What does the 6-digit HEX color '#FF0000' represent?",
  "Pure Green",
  "Pure Red (Full Red, 0 Green, 0 Blue)",
  "Pure Blue",
  "Black",
  "B", "#RRGGBB format assigns FF (255) to Red and 00 to Green and Blue.", 1);

addQ(2, "What does the 4th parameter 'alpha' represent in 'rgba(0, 0, 0, 0.5)'?",
  "Brightness level",
  "Opacity / Transparency channel (0 is fully transparent, 1 is fully opaque)",
  "Hue angle in degrees",
  "Saturation percentage",
  "B", "The alpha parameter modulates layer opacity between 0.0 and 1.0.", 1);

addQ(2, "In the HSL color model 'hsl(120, 100%, 50%)', what do H, S, and L stand for?",
  "High, Soft, Low",
  "Hue (0-360 degrees), Saturation (0-100%), Lightness (0-100%)",
  "Hex, Shade, Luminosity",
  "Heat, Spectrum, Level",
  "B", "HSL models cylindrical color space where 120 deg corresponds to pure green.", 2);

addQ(2, "What does the modern CSS color keyword 'currentColor' refer to?",
  "The browser's default link blue color",
  "The current computed value of the element's 'color' property",
  "The background color of <body>",
  "The operating system accent color",
  "B", "currentColor cascades the active text color to borders, fills, or shadows dynamically.", 2);

addQ(2, "Which CSS property sets a background image for an element?",
  "image: url('bg.jpg');",
  "background-image: url('bg.jpg');",
  "src: url('bg.jpg');",
  "bg-src: url('bg.jpg');",
  "B", "background-image specifies one or more background image resource URLs.", 1);

addQ(2, "What does 'background-size: cover;' do to a background image?",
  "Stretches the image to fit without maintaining aspect ratio",
  "Scales the image proportionally so that it completely covers the entire background container, cropping excess edges if necessary",
  "Tiles the image across the page",
  "Shows the image at 100% natural resolution",
  "B", "cover scales the image proportionally until both dimensions fill the container completely.", 2);

addQ(2, "What does 'background-size: contain;' do to a background image?",
  "Scales the image proportionally so the entire image is visible without cropping, leaving empty letterbox space if aspect ratios differ",
  "Crops the image into a circle",
  "Repeats the image vertically only",
  "Blurs the background edges",
  "A", "contain fits the complete image inside container boundaries without any cropping.", 2);

addQ(2, "Which CSS property prevents a background image from repeating across the container?",
  "background-repeat: no-repeat;",
  "background-tile: off;",
  "background-loop: false;",
  "background-flow: single;",
  "A", "background-repeat: no-repeat renders only a single instance of the image.", 1);

addQ(2, "What does 'background-attachment: fixed;' achieve?",
  "Locks the background image so it stays fixed relative to the viewport while page content scrolls over it (Parallax effect)",
  "Disables background image loading",
  "Locks the image size to 500px",
  "Centers the background image",
  "A", "fixed attachments anchor images to the viewport for smooth parallax scrolling.", 2);

addQ(2, "Which CSS function creates a smooth linear color transition between two or more colors?",
  "linear-gradient(direction, color1, color2)",
  "gradient-linear(color1, color2)",
  "color-blend(color1, color2)",
  "color-transition()",
  "A", "linear-gradient() generates procedural gradient image textures along an angle or direction.", 1);

addQ(2, "How do you create a radial gradient emanating from the center in CSS?",
  "radial-gradient(circle, red, yellow)",
  "circle-gradient(red, yellow)",
  "gradient-radial(red, yellow)",
  "conic-gradient(red, yellow)",
  "A", "radial-gradient() blends colors outward from a focal point in circular or elliptical patterns.", 2);

addQ(2, "What does a 'conic-gradient()' create in CSS3?",
  "A gradient rotated around a center point (like a color wheel or pie chart)",
  "A 3D cone texture",
  "A linear striped pattern",
  "A shadow effect",
  "A", "conic-gradient() rotates color transitions around a central axis (ideal for pie charts).", 2);

addQ(2, "Which CSS property rounds the outer corners of an element's border?",
  "corner-radius",
  "border-radius",
  "border-curve",
  "box-curve",
  "B", "border-radius curves the corners (e.g. border-radius: 50% for circles).", 1);

addQ(2, "How do you make an exact circular avatar image from a square 100px by 100px <img> element?",
  "border-radius: 10px;",
  "border-radius: 50%;",
  "shape: circle;",
  "clip: circle;",
  "B", "Setting border-radius to 50% on equal width/height elements renders a perfect circle.", 1);

addQ(2, "What is the shorthand syntax for setting a solid red border of 2px width?",
  "border: 2px solid red;",
  "border-style: 2px red solid;",
  "border: red 2px line;",
  "border: solid 2px #F0;",
  "A", "The border shorthand accepts 'width style color' (e.g. 2px solid red).", 1);

addQ(2, "What is the key difference between 'border' and 'outline' in CSS?",
  "Outlines take up space in the box model, while borders do not",
  "Borders take up space in the element's box model; Outlines are drawn outside the border without taking up layout space or affecting surrounding elements",
  "Outlines cannot be colored",
  "Borders cannot have rounded corners",
  "B", "Outlines sit on top of elements without triggering reflow or shifting adjacent elements.", 2);

addQ(2, "Which property creates space between an element's border and its outline?",
  "outline-margin",
  "outline-offset",
  "outline-padding",
  "outline-gap",
  "B", "outline-offset pushes the outline outward from the border edge (e.g. outline-offset: 4px;).", 2);

addQ(2, "What does 'background-clip: text;' combined with '-webkit-text-fill-color: transparent;' create?",
  "Deletes the text",
  "Renders the background image or gradient clipped to the shape of the text letters (Text Gradient effect)",
  "Inverts text color",
  "Underlines the text",
  "B", "Clips the background fill directly inside the letter glyph paths.", 2);

addQ(2, "What does 'background-origin' determine in CSS?",
  "The server location of the image file",
  "The background positioning area: border-box, padding-box, or content-box",
  "The aspect ratio of the image",
  "The color profile",
  "B", "background-origin defines the reference origin rectangle where background images begin.", 2);

addQ(2, "Which CSS property allows using custom graphic images as a decorative element border?",
  "border-image",
  "border-graphic",
  "border-background",
  "image-border",
  "A", "border-image slices and tiles custom raster or SVG images along border perimeters.", 2);

addQ(2, "What does the CSS property 'box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);' do?",
  "Adds an inner margin",
  "Casts a soft drop shadow beneath the element (X-offset 0, Y-offset 4px, Blur 6px, Spread -1px)",
  "Blurs the background",
  "Draws a solid black line",
  "B", "box-shadow renders outer or inset blur shadows around element boxes.", 1);

addQ(2, "How do you make an inset (inner) box-shadow in CSS?",
  "Add the 'inset' keyword to the box-shadow declaration (e.g. box-shadow: inset 0 2px 4px black;)",
  "Use box-shadow-type: inner;",
  "Set blur to negative pixels",
  "Use filter: inner-shadow;",
  "A", "The 'inset' token draws shadows inside the frame perimeter.", 2);

addQ(2, "What does the CSS Color 4 function 'oklch()' offer over traditional RGB/HSL?",
  "Simpler hex codes",
  "Perceptually uniform lightness and access to wider P3 display color gamuts",
  "Faster browser download speeds",
  "Automated dark mode",
  "B", "OKLCH delivers uniform perceptual color brightness and ultra-vibrant wide-gamut shades.", 3);

addQ(2, "How do you specify multiple background layers on a single element in CSS?",
  "Declare background-image multiple times on separate lines",
  "Separate each background image URL with a comma in a single background-image declaration",
  "Use <div> containers inside each other",
  "Use background-multi: true;",
  "B", "Comma-separated layer lists stack backgrounds with the first listed image on top.", 2);

addQ(2, "What is the result of 'border-style: dotted dashed solid double;' on an element's 4 sides?",
  "Top: dotted, Right: dashed, Bottom: solid, Left: double (Clockwise order)",
  "Top: double, Right: solid, Bottom: dashed, Left: dotted",
  "All sides dotted",
  "Syntax error",
  "A", "4-value shorthand follows the universal TRBL (Top, Right, Bottom, Left) clockwise order.", 2);

addQ(2, "What does 'border: none;' or 'border: 0;' do to an HTML element (like <input> or <button>)?",
  "Changes border to black",
  "Removes all default browser borders from the element",
  "Adds a 1px border",
  "Hides the element",
  "B", "Zeroes out default button/input borders.", 1);

addQ(2, "What does 'background-position: center bottom;' specify?",
  "Image is stretched to bottom",
  "Background image is centered horizontally and anchored to the bottom edge vertically",
  "Image is duplicated at bottom",
  "Image is hidden",
  "B", "Positions the background asset at horizontal center and vertical bottom.", 1);

addQ(2, "What happens when you declare 'opacity: 0.5;' on a parent container?",
  "Only the parent background becomes semi-transparent",
  "The entire parent element AND all of its child elements become 50% transparent",
  "Text remains 100% opaque",
  "Borders disappear",
  "B", "Opacity applies to the entire rendered subtree. Use rgba() background colors if children must stay opaque.", 2);

addQ(2, "What does the CSS function 'repeating-linear-gradient()' create?",
  "An animated gif",
  "A repeating stripe pattern that loops infinitely based on specified color stop pixel intervals",
  "A random color generator",
  "A radial sunburst",
  "B", "repeating-linear-gradient() tiles gradient bands for barber-pole and diagonal stripe patterns.", 2);

addQ(2, "What is the default value of the 'background-color' property for HTML elements?",
  "white",
  "transparent",
  "black",
  "gray",
  "B", "The default background color is transparent, allowing underlying parent layers to show through.", 1);

// -------------------------------------------------------------
// MODULE 3: CSS Box Model & Margin Collapsing (30 Questions)
// -------------------------------------------------------------
addQ(3, "What are the four components of the standard CSS Box Model, from innermost to outermost?",
  "Border, Margin, Padding, Content",
  "Content, Padding, Border, Margin",
  "Margin, Border, Padding, Content",
  "Content, Border, Padding, Margin",
  "B", "The Box Model consists of: (1) Content -> (2) Padding -> (3) Border -> (4) Margin.", 1);

addQ(3, "In the default CSS box model ('box-sizing: content-box;'), what does the 'width' property set?",
  "The total width including padding and border",
  "The width of the Content area ONLY (padding and borders are added on top, increasing total rendered width)",
  "The width including margin",
  "The width of the screen",
  "B", "In content-box, total width = width + padding-left + padding-right + border-left + border-right.", 2);

addQ(3, "What does 'box-sizing: border-box;' do when applied to elements?",
  "Removes all borders",
  "Forces 'width' and 'height' to include content, padding, and borders within the specified dimension",
  "Adds an extra margin",
  "Disables the box model",
  "B", "border-box locks total element size so padding and borders do not expand the container.", 2);

addQ(3, "Why is '* { box-sizing: border-box; }' universally adopted in modern CSS architecture?",
  "It makes fonts load faster",
  "It makes sizing predictable: adding padding or borders never accidentally breaks layouts or causes horizontal overflow",
  "It is required for JavaScript to run",
  "It enables flexbox",
  "B", "border-box ensures elements adhere strictly to declared widths regardless of internal padding.", 1);

addQ(3, "What is 'Vertical Margin Collapsing' in CSS?",
  "Margins on all sides disappearing",
  "When adjacent vertical margins (top and bottom) of block elements combine into a single margin equal to the largest individual margin",
  "Horizontal margins adding up",
  "Padding collapsing into border",
  "B", "Adjacent top/bottom block margins collapse into the maximum single margin value.", 2);

addQ(3, "Do horizontal margins (left and right) ever collapse in standard CSS flow?",
  "Yes, always",
  "No, horizontal margins NEVER collapse; they always sum together",
  "Only inside tables",
  "Only in dark mode",
  "B", "Horizontal margins are strictly additive and never collapse.", 2);

addQ(3, "In which layout contexts is Vertical Margin Collapsing completely disabled?",
  "Inside Flexbox containers, CSS Grid containers, and positioned (absolute/fixed) elements",
  "Only on <h1> tags",
  "Inside <body> only",
  "Inside <span> tags only",
  "A", "Flex items, grid items, floats, and absolute positioned elements never collapse vertical margins.", 2);

addQ(3, "What does 'margin: 0 auto;' do to a block-level element with a specified width?",
  "Hides the element",
  "Horizontally centers the block element within its parent container by distributing available left/right space equally",
  "Vertically centers the element",
  "Removes all margins and padding",
  "B", "'margin: 0 auto' calculates equal auto left/right margins to center fixed-width blocks.", 1);

addQ(3, "What does the 2-value shorthand 'padding: 10px 20px;' mean?",
  "Top/Right: 10px, Bottom/Left: 20px",
  "Top/Bottom: 10px; Left/Right: 20px",
  "Left/Right: 10px; Top/Bottom: 20px",
  "Padding: 10px; Margin: 20px",
  "B", "2-value syntax sets Vertical (Top/Bottom) first, then Horizontal (Left/Right).", 1);

addQ(3, "What does the 3-value shorthand 'margin: 10px 20px 30px;' represent?",
  "Top: 10px, Left/Right: 20px, Bottom: 30px",
  "Top: 10px, Bottom: 20px, Left/Right: 30px",
  "Left: 10px, Top: 20px, Right: 30px",
  "All sides 10px",
  "A", "3-value shorthand: Top (1st), Left/Right (2nd), Bottom (3rd).", 2);

addQ(3, "Can 'padding' values be negative in CSS?",
  "Yes, negative padding moves content outward",
  "No, negative padding values are illegal in CSS and will be ignored by the browser",
  "Only on inline elements",
  "Only in CSS3",
  "B", "Padding cannot be negative. Margins can be negative, but padding must be >= 0.", 2);

addQ(3, "What does a negative margin (e.g. 'margin-top: -20px;') do to an element?",
  "Throws a syntax error",
  "Pulls the element upward by 20px, overlapping preceding sibling content",
  "Increases padding",
  "Makes the element invisible",
  "B", "Negative margins draw elements closer or cause intentional overlap.", 2);

addQ(3, "What happens if you apply vertical padding or vertical margins to a pure inline element (e.g. standard <span>)?",
  "The element becomes a block element",
  "Horizontal margin/padding works normally, but vertical padding/margin does NOT push surrounding lines away or alter line height",
  "The page crashes",
  "Vertical padding is multiplied by 2",
  "B", "Inline elements ignore vertical margin pushing; switch to 'inline-block' to affect vertical flow.", 2);

addQ(3, "What does the CSS property 'overflow: hidden;' do to container content that exceeds its dimensions?",
  "Adds scrollbars",
  "Clips and hides any overflow content outside the container box without rendering scrollbars",
  "Expands container width",
  "Moves content to next page",
  "B", "overflow: hidden truncates spilling content cleanly at container edges.", 1);

addQ(3, "What does 'overflow: scroll;' do?",
  "Always displays scrollbars on the container (both horizontal and vertical), even if content does not overflow",
  "Hides overflow content",
  "Smooth scrolls the page",
  "Scrolls text like a marquee",
  "A", "overflow: scroll forces visible scrollbars regardless of content size.", 1);

addQ(3, "What does 'overflow: auto;' do?",
  "Never shows scrollbars",
  "Automatically displays scrollbars ONLY when content actually overflows the container boundaries",
  "Automates page scrolling",
  "Removes margins",
  "B", "overflow: auto introduces scrollbars adaptively when content overflows.", 1);

addQ(3, "What does 'overflow-x: hidden; overflow-y: auto;' configure?",
  "Hides vertical scrolling and scrolls horizontally",
  "Prevents horizontal overflow while allowing vertical scrolling when content exceeds height",
  "Disables all scrolling",
  "Reverses scroll wheel",
  "B", "Separate X/Y axis overflow control prevents accidental horizontal page wobble.", 2);

addQ(3, "What is a 'Block Formatting Context' (BFC) in CSS?",
  "A JavaScript engine compiler",
  "An isolated rendering region of the page where block boxes are laid out independently, containing internal floats and preventing margin collapse with outside elements",
  "A CSS grid template",
  "A font rendering subsystem",
  "B", "BFC creates self-contained layout boundaries (e.g. via overflow: hidden or display: flow-root).", 3);

addQ(3, "Which modern CSS display value establishes a Block Formatting Context without unwanted overflow clipping side-effects?",
  "display: flow-root;",
  "display: bfc;",
  "display: block-clean;",
  "display: inline-flow;",
  "A", "'display: flow-root' creates a clean BFC containing internal floats without hiding overflows.", 2);

addQ(3, "What is the 'Clearfix' hack historically used for in CSS?",
  "Clearing browser cache",
  "Forcing a parent container to expand and clear internal floated children so the parent does not collapse to zero height",
  "Deleting unused CSS classes",
  "Fixing broken images",
  "B", "Clearfixes (:after { content: ''; display: table; clear: both; }) prevent parent collapse over floats.", 2);

addQ(3, "What does the 'clear: both;' property do on an element?",
  "Deletes both left and right margins",
  "Prevents the element from sitting adjacent to previous floated elements on either left or right, forcing it below them",
  "Clears background images",
  "Resets borders",
  "B", "clear: both drops elements below all preceding floating siblings.", 2);

addQ(3, "What is the computed total width of a div with: 'width: 200px; padding: 20px; border: 5px solid black; box-sizing: content-box;'?",
  "200px",
  "250px (200 + 20*2 + 5*2)",
  "240px",
  "225px",
  "B", "In content-box: 200 (width) + 40 (left/right padding) + 10 (left/right border) = 250px.", 2);

addQ(3, "What is the computed total width of a div with: 'width: 200px; padding: 20px; border: 5px solid black; box-sizing: border-box;'?",
  "250px",
  "200px (content area shrinks to 150px to accommodate padding and border within 200px)",
  "240px",
  "175px",
  "B", "In border-box, total width stays exactly 200px; inner content adjusts to 150px.", 2);

addQ(3, "What does 'max-width: 100%;' on an <img> element ensure?",
  "Image expands to 1000px",
  "Image will never overflow its parent container width, shrinking responsively if the container becomes narrower than the image natural size",
  "Image height becomes 100%",
  "Image resolution is maximized",
  "B", "max-width: 100% is the foundational rule of responsive web imagery.", 1);

addQ(3, "What does 'min-height: 100vh;' do to a page section?",
  "Sets height to 100px",
  "Ensures the section is at least as tall as 100% of the viewport height, expanding further if content exceeds it",
  "Limits height to screen height",
  "Disables vertical scrolling",
  "B", "min-height: 100vh ensures hero/full-page sections cover the viewport minimum.", 2);

addQ(3, "What is the difference between 'min-width' and 'max-width'?",
  "min-width defines a lower boundary (element cannot be narrower); max-width defines an upper boundary (element cannot grow wider)",
  "They are identical",
  "min-width only applies to mobile devices",
  "max-width disables flexbox",
  "A", "min-width guarantees a minimum width; max-width caps maximum width expansion.", 1);

addQ(3, "How does 'padding-inline' differ from 'padding-left' and 'padding-right' in CSS Logical Properties?",
  "It is deprecated",
  "It sets padding on the inline start and end (left/right in LTR languages, right/left in RTL Arabic/Hebrew) automatically adapting to writing direction",
  "It only applies to <span> tags",
  "It ignores border-box",
  "B", "Logical properties (padding-inline, margin-block) dynamically adapt to writing modes.", 3);

addQ(3, "What does 'margin-block: 2rem;' set in CSS Logical Properties?",
  "Left and right margins",
  "Top and bottom margins (the block axis in horizontal writing modes)",
  "All 4 margins",
  "Border thickness",
  "B", "margin-block maps to vertical margins (top and bottom) in standard horizontal typography.", 2);

addQ(3, "What happens when an element has 'height: auto;'?",
  "Height is fixed at 100px",
  "The element's height automatically calculates to fit the natural height of its internal content",
  "Height becomes 0",
  "Height fills the entire screen",
  "B", "auto calculates container dimensions based on descendant content height.", 1);

addQ(3, "What does 'box-decoration-break: clone;' do for inline text elements spanning across multiple lines?",
  "Removes padding on line breaks",
  "Renders padding, border, and background independently for each fragmented line box as if they were separate elements",
  "Merges all lines into one",
  "Splits text into paragraphs",
  "B", "clone repeats border-radius and padding on every line fragment of wrapped inline tags.", 3);

// -------------------------------------------------------------
// MODULE 4: Typography, Web Fonts & Text Effects (30 Questions)
// -------------------------------------------------------------
addQ(4, "Which CSS property sets the font family for text elements?",
  "font-style",
  "font-family",
  "font-type",
  "typeface",
  "B", "font-family specifies a prioritized fallback list of font family names and generic family names.", 1);

addQ(4, "Why is a generic font family (e.g. 'sans-serif', 'serif', 'monospace') always placed at the very end of a font stack?",
  "It is required by CSS syntax",
  "It serves as a universal fallback ensuring the browser renders an appropriate system typeface if custom web fonts fail to load",
  "It makes fonts bold",
  "It styles links",
  "B", "Generic fallbacks guarantee visual consistency if custom web font assets fail.", 1);

addQ(4, "What is the key visual distinction between 'Serif' and 'Sans-Serif' typefaces?",
  "Serif fonts have small decorative strokes/projections at the ends of letter lines (e.g. Times New Roman); Sans-Serif fonts have clean, plain stroke ends (e.g. Arial)",
  "Sans-Serif fonts are always bold",
  "Serif fonts can only be used in print",
  "Sans-Serif fonts cannot have italic styles",
  "A", "Serifs are traditional decorative feet; sans-serifs feature clean modernist letter terminals.", 1);

addQ(4, "What CSS at-rule is used to load and declare custom web font files (.woff2, .woff, .ttf)?",
  "@font-face",
  "@web-font",
  "@import-font",
  "@font-family",
  "A", "@font-face defines custom font family names and links them to local or remote font binaries.", 1);

addQ(4, "Which modern web font file format offers the highest compression efficiency and fastest web loading speeds?",
  "TTF (TrueType)",
  "EOT (Embedded OpenType)",
  "WOFF2 (Web Open Font Format 2.0)",
  "SVG Font",
  "C", "WOFF2 uses Brotli compression, providing ~30% smaller file sizes than original WOFF.", 2);

addQ(4, "What does the 'font-display: swap;' descriptor in @font-face do?",
  "Swaps fonts every 5 seconds",
  "Instructs the browser to immediately display text using a system fallback font, then swap in the custom web font once downloaded (preventing FOIT - Flash of Invisible Text)",
  "Hides text until font loads",
  "Inverts text colors",
  "B", "font-display: swap eliminates blank text rendering delays on slow network connections.", 2);

addQ(4, "Which property sets the thickness/heaviness of font glyphs?",
  "font-weight",
  "font-thickness",
  "font-boldness",
  "font-depth",
  "A", "font-weight accepts keywords ('normal', 'bold') or numeric values from 100 to 900 (e.g. 400 = regular, 700 = bold).", 1);

addQ(4, "What does the numeric value 'font-weight: 700;' correspond to in standard typography?",
  "Thin",
  "Regular / Normal",
  "Bold",
  "Black / Heavy",
  "C", "400 = Normal/Regular; 700 = Bold; 900 = Black.", 1);

addQ(4, "Which CSS property sets the vertical spacing distance between lines of text?",
  "letter-spacing",
  "line-height",
  "word-spacing",
  "text-spacing",
  "B", "line-height controls vertical text baseline distance (e.g. line-height: 1.5).", 1);

addQ(4, "Why is using unitless numbers (e.g. 'line-height: 1.5;') preferred over fixed pixel values for line-height?",
  "Unitless line-height scales proportionally based on each descendant element's font size rather than locking children to a fixed parent height",
  "Pixel values are invalid",
  "Unitless numbers load faster",
  "It is required by HTML5",
  "A", "Unitless line-height multiplies the current element's computed font-size dynamically.", 2);

addQ(4, "Which CSS property controls horizontal tracking spacing between individual characters?",
  "letter-spacing",
  "word-spacing",
  "text-indent",
  "kerning",
  "A", "letter-spacing expands or condenses spacing between character glyphs.", 1);

addQ(4, "What does 'text-transform: uppercase;' do?",
  "Increases font size by 20%",
  "Transforms all text characters into capital UPPERCASE letters without altering the underlying HTML source code",
  "Capitalizes only the first letter of sentences",
  "Makes text italic",
  "B", "text-transform alters case presentation (uppercase, lowercase, capitalize).", 1);

addQ(4, "What does 'text-transform: capitalize;' do?",
  "Capitalizes ALL letters",
  "Capitalizes the First Letter of each word",
  "Capitalizes only the first word of a paragraph",
  "Converts text to small-caps",
  "B", "capitalize converts the initial letter of each word to uppercase.", 1);

addQ(4, "Which property controls text alignment within a block element?",
  "text-align",
  "align-text",
  "content-align",
  "font-align",
  "A", "text-align aligns text: left, right, center, or justify.", 1);

addQ(4, "What does 'text-align: justify;' do to paragraph text?",
  "Centers all text",
  "Stretches and spaces out words so each line has equal width, aligning flush against both the left and right margins",
  "Aligns text to the right",
  "Rotates text 90 degrees",
  "B", "justify spaces lines to meet both left and right container edges simultaneously.", 2);

addQ(4, "What does 'text-decoration: underline;' do?",
  "Adds an overline",
  "Draws a solid underline beneath the text",
  "Draws a strike-through line across text",
  "Makes text bold",
  "B", "text-decoration adds underlines, overlines, line-throughs, or removes link styling.", 1);

addQ(4, "How do you remove the default underline from HTML <a> hyperlink elements in CSS?",
  "text-decoration: none;",
  "link-style: no-underline;",
  "underline: off;",
  "text-underline: remove;",
  "A", "text-decoration: none strips default browser link underlines.", 1);

addQ(4, "Which combination of three CSS properties is required to truncate long overflowing single-line text with an ellipsis ('...')?",
  "white-space: nowrap; overflow: hidden; text-overflow: ellipsis;",
  "text-truncate: true; overflow: ellipsis; display: block;",
  "word-break: break-all; text-wrap: none; clip: auto;",
  "max-lines: 1; text-overflow: cut; line-clamp: 1;",
  "A", "Single-line truncation strictly requires nowrap + hidden overflow + text-overflow: ellipsis.", 2);

addQ(4, "What does 'white-space: nowrap;' do to text?",
  "Collapses all whitespace to single spaces and prevents text from wrapping to the next line",
  "Wraps text at every comma",
  "Preserves all raw tabs and enter keys",
  "Deletes all spaces",
  "A", "nowrap forces text into a continuous single horizontal line.", 2);

addQ(4, "What does 'word-break: break-word;' or 'overflow-wrap: break-word;' do?",
  "Deletes long words",
  "Allows unbroken lengthy words or URLs to break across lines to prevent container overflow",
  "Hyphenates all words automatically",
  "Increases word spacing",
  "B", "break-word allows unbroken strings (like URLs) to break safely at container boundaries.", 2);

addQ(4, "What does 'text-shadow: 2px 2px 4px rgba(0,0,0,0.5);' do?",
  "Adds a box border",
  "Applies a drop shadow directly to letter glyphs (X-offset 2px, Y-offset 2px, Blur 4px, Color semi-transparent black)",
  "Blurs the background image",
  "Renders 3D extruded boxes",
  "B", "text-shadow creates glowing or drop-shadow effects on typography.", 1);

addQ(4, "What is the relative CSS unit 'em' relative to?",
  "The root <html> font-size",
  "The computed 'font-size' of the CURRENT element's direct parent (or the element itself for properties like padding)",
  "The width of the viewport",
  "16 pixels strictly",
  "B", "1em equals the computed font-size of the parent context.", 2);

addQ(4, "What is the relative CSS unit 'rem' relative to?",
  "The parent element font-size",
  "The Root element (<html>) font-size ONLY (Root EM)",
  "The screen resolution",
  "The viewport height",
  "B", "rem (Root EM) scales consistently against the root <html> font size (default 16px).", 2);

addQ(4, "If the root <html> font-size is 16px, how many pixels does '2.5rem' equal?",
  "25px",
  "40px (16 * 2.5)",
  "32px",
  "48px",
  "B", "2.5 * 16px = 40px.", 1);

addQ(4, "What does the CSS property 'font-style: italic;' do?",
  "Makes text bold",
  "Renders text using an italic / oblique cursive typeface design",
  "Underlines text",
  "Changes font family to Times",
  "B", "font-style toggles normal, italic, or oblique typographic variants.", 1);

addQ(4, "What is a 'Variable Font' in modern web typography?",
  "A font loaded via JavaScript",
  "A single font file capable of smoothly interpolating across multiple design axes (weight, width, slant) continuously without loading separate bold/light files",
  "A font that changes color randomly",
  "A system font only",
  "B", "Variable fonts contain continuous design variation axes in a single compact file.", 3);

addQ(4, "What does '-webkit-line-clamp: 3;' combined with 'display: -webkit-box;' accomplish?",
  "Increases font size on line 3",
  "Truncates multi-line paragraph text after exactly 3 lines, adding an ellipsis at the cut-off point",
  "Deletes the first 3 lines",
  "Adds 3 empty lines below paragraph",
  "B", "line-clamp truncates multi-line text gracefully across modern browsers.", 2);

addQ(4, "What does 'hyphens: auto;' do in CSS text formatting?",
  "Replaces all spaces with hyphens",
  "Allows the browser to automatically insert hyphenation characters (-) when words break across line wraps based on language dictionary rules",
  "Disables word wrapping",
  "Converts text to Morse code",
  "B", "hyphens: auto hyphenates long wrapped words when the HTML lang attribute is declared.", 2);

addQ(4, "What does 'font-variant: small-caps;' render?",
  "Miniature lowercase letters",
  "Renders lowercase letters as smaller capitalized uppercase glyphs",
  "Removes capital letters",
  "Converts numbers to Roman numerals",
  "B", "small-caps renders lowercase text as scaled capital letters.", 2);

addQ(4, "What does 'text-indent: 2rem;' do to a paragraph?",
  "Indents the very FIRST line of the paragraph inward by 2rem",
  "Indents all lines except the first",
  "Adds 2rem left margin to the entire block",
  "Centers the paragraph",
  "A", "text-indent offsets the initial line of text in traditional editorial formatting.", 1);

// -------------------------------------------------------------
// MODULE 5: CSS Display, Visibility & Opacity (30 Questions)
// -------------------------------------------------------------
addQ(5, "What is the primary visual behavior of a 'display: block;' element?",
  "Sits inline with surrounding text",
  "Starts on a new line and stretches out horizontally to fill the full available width of its parent container",
  "Hides all content",
  "Floats to the top right",
  "B", "Block elements (<div>, <p>, <h1>) generate line breaks and span 100% width by default.", 1);

addQ(5, "What is the visual behavior of a 'display: inline;' element?",
  "Takes up the whole width of the page",
  "Occupies only as much width as its content, sitting side-by-side on the same line with other inline elements without generating line breaks",
  "Ignores horizontal padding",
  "Creates a grid layout",
  "B", "Inline elements (<span>, <a>, <strong>) flow horizontally within text lines.", 1);

addQ(5, "How does 'display: inline-block;' combine characteristics of both inline and block elements?",
  "It is identical to display: none",
  "It flows horizontally inline with text on the same line, but allows setting custom 'width', 'height', 'margin-top/bottom', and 'padding' like a block element",
  "It creates a table cell",
  "It hides background colors",
  "B", "inline-block elements align horizontally while respecting full box-model dimensional properties.", 2);

addQ(5, "What happens when an element is styled with 'display: none;'?",
  "The element becomes transparent but keeps its layout space",
  "The element is completely removed from the document layout flow, taking up zero space (invisible and non-interactive)",
  "The element is deleted from HTML DOM",
  "Only child elements are hidden",
  "B", "display: none collapses the element entirely from the visual flow.", 1);

addQ(5, "What is the key difference between 'display: none;' and 'visibility: hidden;'?",
  "There is no difference",
  "'display: none' removes the element from layout flow (0 space); 'visibility: hidden' hides the element visually while PRESERVING its exact layout space and dimensions on the page",
  "'visibility: hidden' removes the element from DOM",
  "'display: none' allows screen readers to read text",
  "B", "visibility: hidden creates an invisible blank placeholder retaining original layout space.", 2);

addQ(5, "How does 'opacity: 0;' behave compared to 'visibility: hidden;' regarding user interactions (mouse clicks)?",
  "opacity: 0 elements can still receive mouse clicks and focus unless 'pointer-events: none;' is applied; visibility: hidden elements cannot receive clicks or focus",
  "opacity: 0 deletes the element",
  "visibility: hidden allows clicking",
  "Both behave identically in all aspects",
  "A", "opacity: 0 elements remain active in the hit-test tree unless pointer-events are disabled.", 2);

addQ(5, "Which property disables all mouse and touch click interactions on an element?",
  "touch-action: none;",
  "pointer-events: none;",
  "user-select: none;",
  "cursor: not-allowed;",
  "B", "pointer-events: none passes mouse events through the element to underlying layers.", 2);

addQ(5, "What does 'user-select: none;' do on a web page?",
  "Prevents users from highlighting/selecting text on that element with cursor drags",
  "Disables keyboard typing",
  "Hides form dropdown menus",
  "Disables right click",
  "A", "user-select: none prevents accidental text selection on interactive UI buttons and cards.", 1);

addQ(5, "Which CSS property changes the mouse cursor icon when hovering over an element (e.g. to a hand pointer)?",
  "mouse-pointer",
  "cursor: pointer;",
  "hover-icon",
  "pointer-style",
  "B", "cursor: pointer displays the interactive hand cursor over clickable UI components.", 1);

addQ(5, "What does 'cursor: not-allowed;' display to the user?",
  "A magnifying glass",
  "A circle with a slash (prohibition icon) indicating disabled or unavailable actions",
  "A waiting hourglass",
  "A crosshair",
  "B", "not-allowed signals disabled button or inactive form control states.", 1);

addQ(5, "What does 'display: contents;' do to an element container?",
  "Deletes all text content",
  "Makes the container element itself disappear from the layout box tree, causing its direct children to act as direct children of the container's parent",
  "Renders content in bold",
  "Creates an iframe",
  "B", "display: contents strips the container's box wrapper while preserving its child elements.", 3);

addQ(5, "Which CSS property allows users to resize a <div> element by dragging its bottom-right corner?",
  "resize: both; (requires overflow to be set to something other than visible)",
  "draggable: true;",
  "box-sizing: resizable;",
  "user-resize: on;",
  "A", "The 'resize' property (horizontal, vertical, both) enables UI resizing handles alongside overflow.", 2);

addQ(5, "What does 'clip-path: circle(50% at center);' do?",
  "Rounds border corners",
  "Clips the rendered element into a circular shape, hiding everything outside the circular mask boundary",
  "Draws a red circle border",
  "Spins the element in a circle",
  "B", "clip-path creates custom vector clipping geometries (circles, polygons, SVGs).", 2);

addQ(5, "What does 'clip-path: polygon(0 0, 100% 0, 100% 100%, 0 80%);' create?",
  "A circle",
  "A custom quadrilateral with an angled/slanted bottom edge",
  "A 3D cube",
  "An oval",
  "B", "polygon() accepts coordinate pairs to produce angular geometrical masks.", 2);

addQ(5, "What is the default 'display' property value for an <a> or <span> element?",
  "block",
  "inline",
  "inline-block",
  "flex",
  "B", "Text-level semantic elements default to inline display.", 1);

addQ(5, "What is the default 'display' value for <div>, <section>, and <p> elements?",
  "inline",
  "block",
  "flex",
  "grid",
  "B", "Structural container elements default to block display.", 1);

addQ(5, "What does 'display: list-item;' generate on an element?",
  "A table layout",
  "A block box with an accompanying marker box (bullet point or numerical counter)",
  "A dropdown menu",
  "An ordered array",
  "B", "list-item generates bullet marker boxes (as used natively on <li> tags).", 2);

addQ(5, "Which property controls the shape or style of list item bullets (e.g. disc, circle, square, none)?",
  "list-style-type",
  "bullet-style",
  "marker-type",
  "list-icon",
  "A", "list-style-type: none removes default bullet points from <ul> and <ol> lists.", 1);

addQ(5, "What does 'list-style-position: inside;' do?",
  "Hides list bullets",
  "Places bullet markers INSIDE the content box of the list item, indenting text wrapping below the marker",
  "Places bullets on the right",
  "Puts bullets in the background",
  "B", "inside brings bullets into the inline text flow instead of outside the margin.", 2);

addQ(5, "What pseudo-element allows direct styling of the bullet marker or number on a list item?",
  "::marker",
  "::bullet",
  "::list-point",
  "::icon",
  "A", "::marker targets list item bullets for custom color, font size, and content icons.", 2);

addQ(5, "What does 'display: table;' do to a regular <div>?",
  "Converts it to an SQL database",
  "Causes the element to behave visually like an HTML <table> element",
  "Exports data to Excel",
  "Creates borders automatically",
  "B", "CSS table display values (table, table-row, table-cell) emulate tabular layout grids.", 2);

addQ(5, "What does 'display: none;' do to screen readers (accessibility)?",
  "Screen readers read the text normally",
  "Screen readers completely ignore and skip the hidden content because it is removed from the accessibility tree",
  "Screen readers read it in a whisper",
  "Throws an accessibility error",
  "B", "display: none hides content from both visual displays and assistive screen readers.", 2);

addQ(5, "How do you create an 'Accessible Visually Hidden' element (screen-reader only class)?",
  "display: none;",
  "Use a clip-path / 1px absolute clipping class that keeps text in the accessibility tree while hiding it visually from the screen",
  "color: transparent;",
  "opacity: 0;",
  "B", "sr-only utility classes visually clip elements to 1px while preserving accessibility tree announcements.", 3);

addQ(5, "What does 'visibility: collapse;' do when applied to table rows (<tr>)?",
  "Deletes the table",
  "Removes the row and frees up layout space without triggering re-calculation of table column widths (like display: none in tables)",
  "Makes the row translucent",
  "Merges all cells",
  "B", "collapse optimizes dynamic table row hiding without layout jitter.", 3);

addQ(5, "What does 'aspect-ratio: 16 / 9;' do on a responsive video or card container?",
  "Sets width to 16px",
  "Maintains a consistent 16:9 proportional ratio between width and height automatically as dimensions change",
  "Crops the video to 4:3",
  "Forces full-screen mode",
  "B", "aspect-ratio prevents cumulative layout shifts (CLS) by reserving proportional space.", 2);

addQ(5, "What does 'object-fit: cover;' do when applied to an <img> or <video> element?",
  "Stretches the image to fill the box without preserving proportions",
  "Scales the media proportionally to fill the entire element content box, clipping excess edges to preserve aspect ratio",
  "Shrinks image to 0",
  "Inverts colors",
  "B", "object-fit: cover ensures images fill responsive container cards without distorting.", 2);

addQ(5, "What does 'object-fit: contain;' do?",
  "Scales media proportionally so the entire asset is visible inside the box without clipping, letterboxing if necessary",
  "Crops top and bottom",
  "Tiles the image",
  "Applies a blur filter",
  "A", "object-fit: contain shows the complete uncropped media asset.", 2);

addQ(5, "Which property controls the alignment positioning of an <img> within its box when using 'object-fit'?",
  "object-position: center top;",
  "image-align",
  "media-position",
  "fit-position",
  "A", "object-position (e.g. center top) anchors the focal point of clipped media.", 2);

addQ(5, "What does the property 'accent-color: #3B82F6;' do in modern CSS?",
  "Changes the text highlight color",
  "Styles native browser form controls (checkboxes, radio buttons, range sliders, progress bars) with the designated theme brand color",
  "Changes the browser title bar",
  "Adds an outline to buttons",
  "B", "accent-color themes built-in HTML form inputs with a single line of CSS.", 1);

addQ(5, "What does 'writing-mode: vertical-rl;' do in CSS?",
  "Flips the page upside down",
  "Lays out text vertically from top-to-bottom, with line progression from right-to-left (traditional East Asian typography)",
  "Mirrors text horizontally",
  "Rotates individual words 180 degrees",
  "B", "writing-mode enables vertical typography systems and artistic side-heading banners.", 3);


// -------------------------------------------------------------
// MODULE 6: CSS Positioning & Stacking Contexts (30 Questions)
// -------------------------------------------------------------
addQ(6, "What is the default value of the 'position' property for all HTML elements?",
  "relative",
  "static",
  "absolute",
  "fixed",
  "B", "position: static is the natural document flow position where top/left/z-index properties have no effect.", 1);

addQ(6, "How does 'position: relative;' affect an element when top/left offsets are specified?",
  "Removes it from the document flow",
  "Offsets the element relative to its NORMAL static position without affecting the layout space of surrounding elements",
  "Locks it to the browser viewport",
  "Positions it relative to the <body>",
  "B", "relative shifts visual placement from its natural origin while keeping its original flow box intact.", 1);

addQ(6, "How does 'position: absolute;' position an element?",
  "Relative to the browser viewport only",
  "Relative to its closest positioned ancestor (an ancestor with position other than 'static'), removed from normal document flow",
  "Relative to its sibling elements",
  "Fixed to the screen bottom",
  "B", "absolute takes elements out of flow and positions them relative to the nearest positioned containing block.", 1);

addQ(6, "If an element has 'position: absolute;' and NONE of its ancestor parents have a position defined, what is it positioned relative to?",
  "The <div> directly above it",
  "The Initial Containing Block (the <html> root viewport)",
  "The middle of the screen",
  "It fails to position and stays static",
  "B", "In the absence of positioned ancestors, absolute elements anchor to the initial viewport root.", 2);

addQ(6, "How does 'position: fixed;' behave on a web page?",
  "Positions relative to parent container",
  "Positions relative to the browser VIEWPORT and stays locked in the exact same place during page scrolling",
  "Scrolls with the document flow",
  "Only works on desktop screens",
  "B", "fixed pins UI bars (like sticky headers or floating action buttons) to the viewport coordinate system.", 1);

addQ(6, "How does 'position: sticky;' operate during scrolling?",
  "Acts as static by default, but becomes fixed once a specified scroll offset threshold (e.g. 'top: 0;') is reached within its scrolling container",
  "Sticks to the mouse cursor",
  "Never scrolls",
  "Deletes margins",
  "A", "sticky toggles between relative and fixed positioning based on scroll threshold offsets.", 2);

addQ(6, "Why might 'position: sticky;' fail to stick when scrolling?",
  "Sticky elements cannot have background colors",
  "An ancestor container has 'overflow: hidden', 'overflow: auto', or 'overflow: scroll' which clips or intercepts the scroll boundary",
  "The element has a class name",
  "Font size is too small",
  "B", "Ancestor overflow clipping breaks sticky scroll boundary detection.", 2);

addQ(6, "What does the 'z-index' property control in CSS?",
  "Horizontal width scaling",
  "The vertical 3D stacking order of overlapping elements along the Z-axis (higher numbers render on top)",
  "Zoom level of images",
  "Font size weighting",
  "B", "z-index layers overlapping positioned elements along the perpendicular screen axis.", 1);

addQ(6, "Why does 'z-index: 9999;' sometimes fail to bring an element above an element with 'z-index: 1;'?",
  "z-index values cannot exceed 100",
  "The element is trapped inside a parent element that has established a separate, lower Stacking Context",
  "z-index only works in JavaScript",
  "The element has a transparent background",
  "B", "Stacking contexts isolate child z-indices; a child cannot escape its parent stacking context boundary.", 3);

addQ(6, "Which of the following actions creates a brand-new Stacking Context on an element?",
  "Setting opacity to less than 1 (e.g. opacity: 0.99;)",
  "Setting transform, filter, or backdrop-filter to a non-none value",
  "Setting position: fixed or position: sticky",
  "All of the above create a new stacking context",
  "D", "Opacity < 1, transforms, filters, mix-blend-mode, and fixed positioning all spawn independent stacking contexts.", 3);

addQ(6, "What is the CSS shorthand property to set top, right, bottom, and left simultaneously?",
  "offsets: 0;",
  "inset: 0;",
  "position-all: 0;",
  "boundary: 0;",
  "B", "'inset: 0;' is the modern shorthand equivalent to 'top: 0; right: 0; bottom: 0; left: 0;'.", 2);

addQ(6, "How do you center an absolute element perfectly in the middle of its container using transform?",
  "top: 50%; left: 50%; transform: translate(-50%, -50%);",
  "top: center; left: center;",
  "position: center;",
  "margin: auto center;",
  "A", "50% top/left anchors the top-left corner at center, and translate(-50%, -50%) shifts back by half its own dimensions.", 2);

addQ(6, "What is the effect of 'top: 0; bottom: 0; margin: auto;' on an absolute element with a defined height?",
  "Hides the element",
  "Perfectly centers the element vertically within its positioned parent container",
  "Forces height to 100%",
  "Draws a line at the top and bottom",
  "B", "Constrained top/bottom 0 with margin: auto achieves vertical centering on absolute boxes.", 2);

addQ(6, "What does 'position: relative;' on a parent container achieve when wrapping an absolute child element?",
  "Makes the parent invisible",
  "Establishes the parent as the containing reference coordinate block for the absolute child's top/left/right/bottom offsets",
  "Disables child clicking",
  "Forces child to expand 100%",
  "B", "position: relative creates the anchor coordinate frame for child absolute placements.", 1);

addQ(6, "Can an element with 'position: static;' use 'z-index'?",
  "Yes, static elements use z-index normally",
  "No, z-index only takes effect on positioned elements (relative, absolute, fixed, sticky) or flex/grid items",
  "Only if it has a border",
  "Only in Firefox",
  "B", "z-index is ignored on position: static elements in standard block flow.", 2);

addQ(6, "What happens when two positioned elements with the SAME z-index overlap?",
  "The element that appears LATER in the HTML DOM tree renders on top of the earlier one",
  "The first element in HTML always renders on top",
  "They blend together automatically",
  "Both become transparent",
  "A", "Equal z-index relies on DOM document source order to determine stacking superiority.", 2);

addQ(6, "What does 'inset-inline: 0;' do in CSS Logical Properties?",
  "Sets top and bottom to 0",
  "Sets inline-start (left) and inline-end (right) offsets to 0 simultaneously",
  "Removes margins",
  "Adds an inner shadow",
  "B", "inset-inline coordinates horizontal span boundaries across writing modes.", 2);

addQ(6, "What does 'inset-block: 0;' set in CSS Logical Properties?",
  "Sets block-start (top) and block-end (bottom) offsets to 0 simultaneously",
  "Left and right offsets to 0",
  "Sets border to 0",
  "Disables display: block",
  "A", "inset-block maps to vertical top and bottom offset constraints.", 2);

addQ(6, "What is the coordinate origin (0, 0) for a fixed positioned element?",
  "The top-left corner of the browser viewport",
  "The center of the webpage",
  "The top-left corner of the parent div",
  "The bottom-right corner",
  "A", "Fixed positioning maps (0,0) to the top-left coordinate of the visible viewport screen.", 1);

addQ(6, "What happens if you apply 'transform: scale(1);' to an ancestor of a 'position: fixed;' element?",
  "Nothing changes",
  "The fixed child is no longer fixed to the viewport; it becomes contained and positioned relative to the transformed ancestor instead",
  "The fixed child disappears",
  "The entire page scales to 0",
  "B", "Transforms on ancestors trap fixed children, making the ancestor their containing block.", 3);

addQ(6, "What is a common UI pattern implemented using 'position: fixed; inset: 0;'?",
  "Full-screen modal backdrop / overlay dimming screen background",
  "Dropdown menu",
  "Sidebar navigation",
  "Footer bar",
  "A", "inset: 0 with fixed position creates full-viewport dialog overlays and lightboxes.", 2);

addQ(6, "What does 'pointer-events: auto;' do on a child inside a container with 'pointer-events: none;'?",
  "Disables clicks on child",
  "Re-enables click and touch events specifically for that child element while leaving the parent pass-through",
  "Hides the child",
  "Animates the child",
  "B", "pointer-events: auto selectively re-activates hit testing on individual buttons inside pass-through overlays.", 3);

addQ(6, "Which value of 'position' removes an element from document flow while preserving its width unless specified?",
  "relative",
  "static",
  "absolute",
  "inline",
  "C", "absolute removes the element from flow, shrinking width to content unless explicit dimensions are declared.", 1);

addQ(6, "What is the stacking level order of native page components in a default Stacking Context?",
  "Background -> Borders -> Block descendants -> Floats -> Inline descendants -> Positioned descendants (z-index: 0) -> Positioned (z-index > 0)",
  "Text first, background last",
  "Positioned elements always render behind backgrounds",
  "Random order",
  "A", "The CSS 2.1 Stacking specification layers root backgrounds, blocks, floats, inlines, and positioned layers hierarchically.", 3);

addQ(6, "Can negative z-index values (e.g. 'z-index: -1;') be used in CSS?",
  "No, z-index must be positive",
  "Yes, negative z-index places an element behind standard in-flow content and parent background within the stacking context",
  "Negative z-index hides elements",
  "Only in SVG",
  "B", "z-index: -1 renders behind in-flow text and sibling elements.", 2);

addQ(6, "What happens when an absolute element specifies both 'left: 0;' and 'right: 0;' without a defined width?",
  "It crashes the browser",
  "The element stretches horizontally to fill 100% of the containing parent width",
  "It centers itself at 0px",
  "It disappears",
  "B", "Dual opposing pin offsets (left: 0 + right: 0) force full horizontal stretch.", 2);

addQ(6, "What happens when an absolute element specifies both 'top: 0;' and 'bottom: 0;' without a defined height?",
  "It stretches vertically to span the entire height of its positioned containing parent",
  "Height becomes 0px",
  "It snaps to bottom",
  "It scrolls continuously",
  "A", "Top and bottom 0 stretch element height to fill container bounds.", 2);

addQ(6, "Why is 'position: sticky;' preferred over JavaScript scroll event listeners for sticky navigation headers?",
  "CSS sticky is hardware-accelerated on the compositor thread, preventing scroll jank and layout reflows",
  "JavaScript cannot detect scroll positions",
  "Sticky only works without HTML",
  "It is 5 lines shorter",
  "A", "Browser-native sticky positioning executes on compositor threads smoothly at 60/120 FPS.", 2);

addQ(6, "What is the effect of 'position: relative;' without any top/left/right/bottom declarations?",
  "No visual position change occurs, but it establishes a positioning context for absolute children and enables z-index control",
  "Element shifts 10px down",
  "Element becomes inline",
  "Borders are removed",
  "A", "A plain 'position: relative' creates a containing block and stacking hook without altering flow.", 1);

addQ(6, "How do you create a floating 'Badge' in the top-right corner of a button using CSS positioning?",
  "Button has 'position: relative;'; Badge has 'position: absolute; top: -5px; right: -5px;'",
  "Button has 'position: static;'; Badge has 'float: right;'",
  "Button has 'display: grid;'; Badge has 'align-self: top;'",
  "Badge has 'position: fixed;'",
  "A", "Relative parent container with absolute child offsets places notification badges perfectly.", 1);

// -------------------------------------------------------------
// MODULE 7: Advanced Selectors, Combinators & Attributes (30 Questions)
// -------------------------------------------------------------
addQ(7, "What does the Descendant Combinator (a space character 'div p') select in CSS?",
  "Only direct child <p> elements",
  "All <p> elements that are descendants of a <div>, regardless of nesting depth (children, grandchildren, etc.)",
  "All <div> elements inside <p>",
  "The first paragraph only",
  "B", "Space combinator selects all matching descendants anywhere within the ancestor subtree.", 1);

addQ(7, "What does the Child Combinator (greater-than sign 'ul > li') select?",
  "All <li> elements anywhere inside <ul>",
  "Only direct, first-generation child <li> elements immediately nested inside <ul>",
  "The first <li> element only",
  "All <ul> elements inside <li>",
  "B", "'A > B' matches strictly direct children, ignoring deeper nested grandchild layers.", 1);

addQ(7, "What does the Adjacent Sibling Combinator (plus sign 'h2 + p') select?",
  "All <p> elements on the page",
  "The <p> element that immediately follows an <h2> element as its direct next sibling with the same parent",
  "All paragraphs inside <h2>",
  "The <h2> inside paragraph",
  "B", "'A + B' matches the single immediate next sibling element.", 2);

addQ(7, "What does the General Sibling Combinator (tilde sign 'h2 ~ p') select?",
  "Only the immediate next paragraph",
  "ALL <p> elements that follow an <h2> element as siblings sharing the same parent (not just the first one)",
  "Paragraphs preceding <h2>",
  "Child paragraphs of <h2>",
  "B", "'A ~ B' matches all subsequent sibling elements following A.", 2);

addQ(7, "Which attribute selector matches all <input> elements that have a 'required' attribute present?",
  "input[required]",
  "input.required",
  "input:required-attr",
  "input(required)",
  "A", "[attribute] selects elements based on the existence of an attribute regardless of value.", 1);

addQ(7, "Which selector matches <input> elements where the type attribute is exactly 'email'?",
  "input[type='email']",
  "input.type-email",
  "input:email",
  "input[email]",
  "A", "[attribute='value'] matches exact attribute string equality.", 1);

addQ(7, "Which attribute selector matches links whose 'href' attribute STARTS with 'https://' (Prefix Match)?",
  "a[href$='https://']",
  "a[href*='https://']",
  "a[href^='https://']",
  "a[href~='https://']",
  "C", "[attr^='val'] matches attributes beginning with the specified prefix string.", 2);

addQ(7, "Which attribute selector matches links whose 'href' attribute ENDS with '.pdf' (Suffix Match)?",
  "a[href$='.pdf']",
  "a[href^='.pdf']",
  "a[href*='.pdf']",
  "a[href='.pdf']",
  "A", "[attr$='val'] matches attributes terminating with the specified suffix string.", 2);

addQ(7, "Which attribute selector matches elements where the attribute CONTAINS a specific substring anywhere (Substring Match)?",
  "a[href*='download']",
  "a[href^='download']",
  "a[href$='download']",
  "a[href~='download']",
  "A", "[attr*='val'] matches substrings anywhere within the attribute string.", 2);

addQ(7, "What does the attribute selector '[class~=\\'btn\\']' match?",
  "Classes starting with 'btn'",
  "Elements with a class attribute containing the exact word 'btn' in a whitespace-separated list",
  "Classes ending in 'btn'",
  "Any class with the letters b-t-n",
  "B", "[attr~='val'] matches whole words in whitespace-separated token lists.", 2);

addQ(7, "What does the attribute selector '[lang|=\\'en\\']' match?",
  "Only lang='en'",
  "Elements with lang equal to 'en' OR starting with 'en-' (e.g. en-US, en-GB)",
  "Elements with English text",
  "All languages",
  "B", "[attr|='val'] matches hyphen-delimited language subcodes.", 3);

addQ(7, "How do you make an attribute selector Case-Insensitive in modern CSS (e.g. matching .pdf, .PDF, .Pdf)?",
  "Append the 'i' flag before the closing bracket (e.g. a[href$='.pdf' i])",
  "Use text-transform: lowercase",
  "Append the 's' flag",
  "Use regex-ignore-case()",
  "A", "The 'i' modifier forces case-insensitive attribute value matching.", 2);

addQ(7, "What does the 's' flag in an attribute selector (e.g. '[title*=\\'Logo\\' s]') enforce?",
  "Case-insensitive matching",
  "Strict Case-Sensitive matching conforming to standard string case",
  "Strict secure mode",
  "Single character matching",
  "B", "The 's' modifier forces case-sensitive attribute comparison.", 3);

addQ(7, "What does the selector 'nav > ul > li > a' select?",
  "All links on the page",
  "Links that are direct children of list items, directly inside unordered lists, directly inside a <nav>",
  "Only external navigation links",
  "The first navigation link only",
  "B", "Chained child combinators enforce rigid hierarchical nesting structure.", 1);

addQ(7, "What is the difference between 'p .highlight' and 'p.highlight'?",
  "There is no difference",
  "'p .highlight' selects descendants with class 'highlight' inside <p>; 'p.highlight' selects the <p> element itself that has class 'highlight'",
  "'p.highlight' is invalid syntax",
  "'p .highlight' only works in JavaScript",
  "B", "A space indicates a descendant combinator; lack of space indicates a compound selector on the same element.", 2);

addQ(7, "Which selector targets all disabled buttons in a form using attribute selectors?",
  "button[disabled]",
  "button.disabled",
  "button:inactive",
  "button[off]",
  "A", "button[disabled] selects buttons having the disabled attribute.", 1);

addQ(7, "How can you style external links opening in a new tab with an external icon indicator?",
  "a[target='_blank']::after { content: ' ↗'; }",
  "a:external { icon: new-tab; }",
  "a[href] { target: blank; }",
  "a.tab { icon: true; }",
  "A", "Attribute selector targeting target='_blank' coupled with ::after pseudo-element creates automatic link icons.", 2);

addQ(7, "What does the selector 'div[data-status=\\'active\\']' target?",
  "All active divs",
  "Div elements possessing a custom HTML5 data attribute 'data-status' whose value is exactly 'active'",
  "Divs with class active",
  "Divs with ID active",
  "B", "CSS attribute selectors seamlessly query custom data-* HTML5 attributes.", 1);

addQ(7, "What does the selector '*[hidden]' target in HTML5?",
  "All visible elements",
  "Any element with the HTML5 boolean 'hidden' attribute declared",
  "Elements with display: none",
  "Hidden input fields only",
  "B", "Targets elements equipped with the native HTML5 hidden attribute.", 1);

addQ(7, "What does the compound selector 'input[type=\\'checkbox\\']:checked' select?",
  "All checkboxes",
  "Checkbox inputs that are currently in a checked / selected state",
  "Radio buttons only",
  "Disabled checkboxes",
  "B", "Combines attribute selector with pseudo-class state for active checkboxes.", 1);

addQ(7, "What does the selector 'img:not([alt])' target in accessibility linting?",
  "Images with valid alt text",
  "Images that are missing the mandatory 'alt' accessibility description attribute entirely",
  "Images with empty alt text",
  "Broken images",
  "B", "Detects inaccessible images lacking alt attributes.", 2);

addQ(7, "What does 'form :input' do in standard CSS?",
  "Selects all form inputs",
  "It is invalid syntax (':input' is a jQuery extension, not standard CSS; use 'form input, form select, form textarea' instead)",
  "Selects form buttons",
  "Validates forms",
  "B", ":input is jQuery proprietary; standard CSS requires listing concrete element types.", 2);

addQ(7, "What does the selector 'section + section' target on a web page?",
  "All sections",
  "Every <section> element EXCEPT the very first one (useful for adding top borders or margins between consecutive sections)",
  "The first section only",
  "Nested sections",
  "B", "The adjacent sibling pattern 'tag + tag' elegantly styles dividing margins between consecutive elements.", 2);

addQ(7, "What does the selector 'ol > li:first-child + li' select?",
  "The first list item",
  "The SECOND list item in an ordered list",
  "All list items",
  "The last list item",
  "B", "First-child plus adjacent sibling targets element #2.", 2);

addQ(7, "Can multiple attribute selectors be chained together on a single element (e.g. 'input[type=\\'text\\'][readonly]')?",
  "No, only one attribute selector is allowed",
  "Yes, and the element must satisfy ALL chained attribute conditions simultaneously",
  "Only in Sass / SCSS",
  "Only for links",
  "B", "Chained attribute selectors enforce multiple simultaneous attribute constraints.", 2);

addQ(7, "What does 'a[href^=\\'mailto:\\']' target in web styling?",
  "Web links to websites",
  "Email hyperlink mailto: URLs",
  "Telephone links",
  "FTP download links",
  "B", "Targets email hyperlinks (mailto:).", 1);

addQ(7, "What does 'a[href^=\\'tel:\\']' target?",
  "Telephone call hyperlinks",
  "Television links",
  "Telegram links",
  "Text messages",
  "A", "Targets mobile clickable telephone dialing URLs (tel:).", 1);

addQ(7, "What does 'input[type=\\'radio\\'] + label' commonly style in custom UI components?",
  "The input field itself",
  "The text label directly following a radio button, used to create custom styled pill/toggle radio controls",
  "The form submit button",
  "The error message",
  "B", "Classic accessible custom radio/checkbox design pattern using adjacent sibling labels.", 2);

addQ(7, "What does the selector ':root' target in CSS documents?",
  "The <body> tag",
  "The highest-level root element in the document tree (the <html> element in HTML documents), used for global custom property variables",
  "The <head> element",
  "The browser window",
  "B", ":root matches the top document node and holds global design tokens.", 1);

addQ(7, "What is the Specificity weight of the ':root' selector?",
  "(0, 0, 0, 1) Element",
  "(0, 0, 1, 0) Pseudo-class (same as a Class)",
  "(0, 1, 0, 0) ID",
  "Zero specificity",
  "B", ":root is a pseudo-class with (0, 0, 1, 0) specificity, higher than the 'html' element selector.", 2);

// -------------------------------------------------------------
// MODULE 8: Pseudo-Classes & Pseudo-Elements (30 Questions)
// -------------------------------------------------------------
addQ(8, "What is the key syntactic difference between a Pseudo-Class and a Pseudo-Element in CSS3?",
  "Pseudo-classes use a single colon ':' (e.g. :hover); Pseudo-elements use a double colon '::' (e.g. ::before)",
  "Pseudo-classes only style text",
  "Pseudo-elements are written in JavaScript",
  "There is no syntactic difference",
  "A", "CSS3 standardized single colon (:) for state pseudo-classes and double colon (::) for structural pseudo-elements.", 2);

addQ(8, "What does the ':hover' pseudo-class style?",
  "An element currently being clicked",
  "An element when the user positions the mouse pointer/cursor over it",
  "An element with keyboard focus",
  "A visited hyperlink",
  "B", ":hover applies visual feedback during mouseover.", 1);

addQ(8, "What does the ':active' pseudo-class style?",
  "The active navigation tab",
  "An element during the exact moment it is being clicked or activated by the user (mouse button depressed)",
  "An element that is animating",
  "A form input with valid text",
  "B", ":active represents the pressed / engaged interaction state.", 1);

addQ(8, "What does the ':focus' pseudo-class target?",
  "The main heading",
  "An interactive element (e.g. <input>, <button>, <a>) that currently has keyboard focus or input cursor focus",
  "Hovered elements",
  "Full screen elements",
  "B", ":focus styles inputs and controls actively receiving keyboard/input focus.", 1);

addQ(8, "What does the modern ':focus-visible' pseudo-class do that ':focus' does not?",
  "Applies focus styling ONLY when focus is triggered via keyboard navigation (Tab key), avoiding unsightly focus rings on mouse clicks",
  "Hides the focus outline completely",
  "Animates the focus ring",
  "Only works on mobile touchscreens",
  "A", ":focus-visible provides accessible keyboard focus rings without showing focus rings on mouse clicks.", 2);

addQ(8, "What does the ':focus-within' pseudo-class do on a container element (e.g. <form>)?",
  "Focuses all inputs at once",
  "Styles the parent container if the container itself OR ANY of its internal child elements currently has focus",
  "Prevents child inputs from receiving focus",
  "Validates the form",
  "B", ":focus-within activates on parent wrappers whenever any descendant gains focus.", 2);

addQ(8, "What is the required order of link pseudo-classes (the 'LVHA' rule) for styles to cascade correctly?",
  ":active -> :hover -> :visited -> :link",
  ":link -> :visited -> :hover -> :active (Love/Hate mnemonic)",
  ":hover -> :link -> :active -> :visited",
  "Order does not matter",
  "B", "Link pseudo-classes must follow :link, :visited, :hover, :active (LVHA) to prevent rule shadowing.", 2);

addQ(8, "What does the ':visited' pseudo-class style?",
  "Links that the user has previously navigated to / visited in their browser history",
  "Bookmarked pages",
  "Current active page",
  "External websites only",
  "A", ":visited styles previously clicked URL hyperlinks (restricted for privacy reasons).", 1);

addQ(8, "What does ':first-child' select?",
  "The first paragraph on a page",
  "An element that is the absolute FIRST child among all siblings within its parent container",
  "The first word in a text block",
  "The root element",
  "B", ":first-child matches an element that is the initial child of its parent.", 1);

addQ(8, "What does ':last-child' select?",
  "The final element in HTML",
  "An element that is the absolute LAST child among siblings inside its parent container",
  "The last word in a paragraph",
  "Deleted elements",
  "B", ":last-child matches an element that is the final sibling of its parent.", 1);

addQ(8, "What does the formula ':nth-child(2n)' or ':nth-child(even)' select in a table or list?",
  "All odd numbered rows",
  "All EVEN numbered child elements (2, 4, 6, 8, etc.) for striped row styling",
  "Every 2nd list item after index 10",
  "The second child only",
  "B", ":nth-child(even) or (2n) selects even-indexed siblings for zebra-striping.", 1);

addQ(8, "What does ':nth-child(2n+1)' or ':nth-child(odd)' select?",
  "All ODD numbered child elements (1, 3, 5, 7, etc.)",
  "All even elements",
  "Prime numbers only",
  "The 3rd child",
  "A", ":nth-child(odd) selects odd-indexed siblings.", 1);

addQ(8, "What is the difference between ':nth-child()' and ':nth-of-type()'?",
  "There is no difference",
  "':nth-child()' counts ALL sibling elements regardless of tag type; ':nth-of-type()' counts ONLY siblings sharing the SAME HTML tag type",
  "':nth-of-type()' only works on forms",
  "':nth-child()' is deprecated",
  "B", ":nth-of-type filters by tag name before applying numeric index counting.", 2);

addQ(8, "What does the ':only-child' pseudo-class target?",
  "An element with no children",
  "An element that is the SOLE child of its parent (it has no sibling elements at all)",
  "The first child of the body",
  "Elements with only one class",
  "B", ":only-child targets elements without siblings.", 2);

addQ(8, "What does the ':not(selector)' negation pseudo-class do (e.g. 'button:not(.primary)')?",
  "Deletes the button",
  "Selects all buttons that DO NOT match the specified '.primary' class",
  "Selects only .primary buttons",
  "Disables buttons",
  "B", ":not() matches elements failing the argument selector test.", 2);

addQ(8, "What does the powerful modern ':has()' relational pseudo-class (CSS Parent Selector) allow?",
  "Styles an element based on whether it CONTAINS or is followed by matching descendant/sibling elements (e.g. 'card:has(img)')",
  "Checks if a file exists on the server",
  "Imports JavaScript functions",
  "Checks internet connection",
  "A", ":has() enables styling parent elements conditionally based on child presence.", 3);

addQ(8, "What does ':empty' select in CSS?",
  "Form inputs with no text",
  "Elements that contain absolutely NO children and NO text nodes (not even whitespace)",
  "Deleted DOM nodes",
  "Empty arrays",
  "B", ":empty matches elements devoid of child elements, text, or whitespace.", 2);

addQ(8, "What does ':disabled' and ':enabled' style?",
  "Active vs inactive stylesheets",
  "Interactive form inputs, buttons, and fieldsets in their disabled or enabled operational states",
  "Internet connection status",
  "Dark mode status",
  "B", ":disabled targets inactive form controls.", 1);

addQ(8, "What does ':checked' match?",
  "All checkboxes on page",
  "Radio buttons, checkboxes, or <option> elements that are currently checked or selected",
  "Spell-checked text",
  "Completed forms",
  "B", ":checked targets selected radio/checkbox form controls.", 1);

addQ(8, "What does the ':valid' and ':invalid' pseudo-classes evaluate on form inputs?",
  "JavaScript syntax errors",
  "Whether input values satisfy HTML5 form validation constraints (type, pattern, min, max, required)",
  "Password strength",
  "Database connectivity",
  "B", ":valid/:invalid dynamically reflect HTML5 constraint validation states.", 2);

addQ(8, "Which mandatory CSS property MUST be declared for '::before' and '::after' pseudo-elements to render on the page?",
  "display: block;",
  "content: ''; (even if an empty string)",
  "position: absolute;",
  "width: 100px;",
  "B", "Without declaring 'content', ::before and ::after generate no visual box.", 1);

addQ(8, "Where does '::before' insert generated decorative content relative to an element's HTML content?",
  "Before the element's opening tag outside the parent",
  "As the very FIRST child INSIDE the element, directly preceding its actual text content",
  "In the <head> section",
  "In the preceding sibling",
  "B", "::before generates content as the first inline child inside the element.", 2);

addQ(8, "Where does '::after' insert generated content?",
  "Outside the element after the closing tag",
  "As the very LAST child INSIDE the element, directly following its actual text content",
  "At the bottom of the webpage",
  "In the footer",
  "B", "::after generates content as the final child inside the element.", 2);

addQ(8, "What does the '::first-letter' pseudo-element style in editorial typography?",
  "The first word of a title",
  "The initial first character / letter of a block of text (used for Drop Caps styling)",
  "The first paragraph",
  "Capital letters only",
  "B", "::first-letter styles initial drop-cap characters in articles.", 1);

addQ(8, "What does the '::first-line' pseudo-element style?",
  "The first sentence only",
  "The entire first visual line of formatted text in a block element, dynamically adjusting as window width changes",
  "The title tag",
  "Underlined text",
  "B", "::first-line styles the rendered top line of paragraph text.", 2);

addQ(8, "What does the '::placeholder' pseudo-element style?",
  "Form input label text",
  "The temporary placeholder hint text displayed inside an empty <input> or <textarea>",
  "Loading skeleton cards",
  "Empty images",
  "B", "::placeholder styles gray placeholder hint text inside form fields.", 1);

addQ(8, "What does the '::selection' pseudo-element style on a webpage?",
  "Dropdown menu options",
  "The highlighted text portion currently selected/dragged by the user with their mouse or cursor",
  "Checkboxes",
  "Radio buttons",
  "B", "::selection customizes background highlight and text color during user text selection.", 2);

addQ(8, "Can '::before' or '::after' pseudo-elements be applied to self-closing replaced elements like <img> or <input>?",
  "Yes, always",
  "No, replaced elements (<img>, <input>, <hr>, <br>) have no internal child content tree and cannot host ::before or ::after pseudo-elements",
  "Only in Chrome",
  "Only if display is flex",
  "B", "Replaced elements without child content trees cannot render pseudo-elements.", 3);

addQ(8, "What does ':target' pseudo-class select in single-page URL fragment navigation?",
  "The body element",
  "The unique HTML element whose ID matches the current URL hash fragment (e.g. #section2)",
  "External links",
  "The top of the page",
  "B", ":target highlights the element targeted by the URL's #hash fragment identifier.", 2);

addQ(8, "What does ':autofill' (or ':-webkit-autofill') style in form inputs?",
  "Input fields that have been automatically populated by the browser's saved credentials/autofill manager",
  "Inputs filled by JavaScript",
  "Required inputs",
  "Empty inputs",
  "A", ":autofill targets fields populated by browser password/address managers.", 2);

// -------------------------------------------------------------
// MODULE 9: CSS Flexbox Layout (Complete Guide) (30 Questions)
// -------------------------------------------------------------
addQ(9, "Which CSS declaration turns an element into a Flexbox Container?",
  "display: flex; (or display: inline-flex;)",
  "flex: 1;",
  "layout: flexbox;",
  "box-type: flex;",
  "A", "'display: flex' activates the Flexbox formatting context on the container.", 1);

addQ(9, "What is the default 'flex-direction' in a flex container?",
  "column",
  "row (horizontal left-to-right in LTR writing modes)",
  "row-reverse",
  "column-reverse",
  "B", "The default flex-direction is 'row', aligning items horizontally.", 1);

addQ(9, "What happens when you set 'flex-direction: column;' on a flex container?",
  "Items arrange horizontally in a row",
  "The Main Axis becomes vertical; flex items stack vertically from top to bottom",
  "Items are placed in a 2D grid",
  "Items are reversed",
  "B", "column rotates the Main Axis vertically.", 1);

addQ(9, "Which flex container property controls alignment of flex items along the MAIN AXIS?",
  "align-items",
  "justify-content",
  "align-content",
  "flex-align",
  "B", "justify-content aligns items along the primary Main Axis.", 1);

addQ(9, "Which flex container property controls alignment of flex items along the CROSS AXIS (perpendicular axis)?",
  "justify-content",
  "align-items",
  "flex-direction",
  "gap",
  "B", "align-items aligns items across the perpendicular Cross Axis.", 1);

addQ(9, "What is the default value of 'align-items' in a flex container?",
  "flex-start",
  "center",
  "stretch (items stretch to fill the full cross-axis height of the container)",
  "baseline",
  "C", "stretch is the default align-items value.", 1);

addQ(9, "How do you perfectly center a child element both horizontally AND vertically using Flexbox on the parent?",
  "display: flex; justify-content: center; align-items: center;",
  "display: flex; align-content: middle;",
  "display: flex; text-align: center; vertical-align: middle;",
  "display: flex; flex-center: true;",
  "A", "justify-content: center + align-items: center provides universal 2D centering.", 1);

addQ(9, "What does 'justify-content: space-between;' do to flex items?",
  "Packs items together at the start",
  "Distributes items evenly across the line, placing the first item flush against the start edge and the last item flush against the end edge",
  "Adds equal space around all items including outer ends",
  "Centers items",
  "B", "space-between creates maximum separation with zero margin at extreme ends.", 1);

addQ(9, "What does 'justify-content: space-around;' do?",
  "Leaves no space at outer ends",
  "Distributes items with equal space around each item (resulting in end spaces being half the size of space between items)",
  "Pushes all items to the center",
  "Hides overflow items",
  "B", "space-around wraps each item in equal margins.", 2);

addQ(9, "What does 'justify-content: space-evenly;' do?",
  "Distributes items so that the space between any two items AND the space to the outer edges is exactly equal",
  "Stacks items on top of each other",
  "Forces all items to have equal widths",
  "Sorts items alphabetically",
  "A", "space-evenly guarantees identical gap measurements everywhere.", 2);

addQ(9, "What is the default value of 'flex-wrap' on a flex container?",
  "wrap",
  "nowrap (all flex items are forced onto a single line, shrinking if necessary to fit)",
  "wrap-reverse",
  "scroll",
  "B", "nowrap is default; items compress into one row unless wrap is enabled.", 1);

addQ(9, "What happens when you declare 'flex-wrap: wrap;' on a flex container?",
  "Flex items will break onto multiple lines/rows as needed when space runs out",
  "Items become scrollable",
  "Items shrink to 0px",
  "Container width expands infinitely",
  "A", "flex-wrap: wrap enables responsive multi-line wrapping.", 1);

addQ(9, "Which CSS property defines the gutter spacing between flex items without using margins?",
  "margin-gap",
  "gap (or row-gap / column-gap)",
  "flex-spacing",
  "gutter",
  "B", "'gap: 1rem;' provides clean gutter spacing between flex and grid items without outer edge margins.", 1);

addQ(9, "What does the flex item shorthand property 'flex: 1;' represent?",
  "flex-grow: 1; flex-shrink: 1; flex-basis: 0%;",
  "flex-direction: 1;",
  "flex-order: 1;",
  "flex-wrap: 1;",
  "A", "'flex: 1;' expands the item to absorb all remaining free space equally.", 2);

addQ(9, "What does the 'flex-grow' property define on a flex item?",
  "The font size expansion rate",
  "The ability for a flex item to grow and expand proportionally to absorb remaining available positive free space in the container",
  "The minimum pixel width",
  "The animation speed",
  "B", "flex-grow distributes surplus container space proportionally.", 2);

addQ(9, "What is the default value of 'flex-grow' on a flex item?",
  "1",
  "0 (items do not grow beyond their natural content size unless specified)",
  "auto",
  "-1",
  "B", "Default flex-grow is 0; items retain natural content size.", 1);

addQ(9, "What does the 'flex-shrink' property control?",
  "How fast the item animates",
  "The ability for a flex item to shrink and compress proportionally when total item sizes exceed available container space",
  "The border reduction rate",
  "The opacity reduction rate",
  "B", "flex-shrink handles negative space compression when containers are cramped.", 2);

addQ(9, "What is the default value of 'flex-shrink' on a flex item?",
  "0",
  "1 (items shrink automatically to prevent container overflow by default)",
  "auto",
  "none",
  "B", "Default flex-shrink is 1; items compress to avoid overflowing.", 2);

addQ(9, "How do you prevent a specific flex item (like an icon or avatar) from ever shrinking when space is tight?",
  "flex-shrink: 0;",
  "flex-grow: 0;",
  "no-shrink: true;",
  "width: locked;",
  "A", "flex-shrink: 0 locks the item at its defined size without compression.", 2);

addQ(9, "What does 'flex-basis' define on a flex item?",
  "The maximum width of the item",
  "The initial default main size (width or height depending on direction) of the flex item before remaining free space is distributed",
  "The border thickness",
  "The starting opacity",
  "B", "flex-basis sets the baseline size before grow/shrink calculations occur.", 2);

addQ(9, "What does 'align-self' allow an INDIVIDUAL flex item to do?",
  "Override the container's 'align-items' cross-axis alignment value specifically for that single item",
  "Center itself horizontally",
  "Rotate 90 degrees",
  "Change its font color",
  "A", "align-self overrides the parent align-items rule on a per-item basis.", 2);

addQ(9, "What does the 'order' property do on flex items?",
  "Sorts text alphabetically",
  "Changes the visual rendering order of flex items without altering the underlying HTML DOM source code (default order is 0)",
  "Orders items by file size",
  "Creates numbered lists",
  "B", "order changes visual layout sequence without touching HTML structure.", 2);

addQ(9, "What is the effect of 'margin: auto;' on an individual flex item inside a flex container?",
  "It has no effect",
  "It absorbs all remaining free space along that margin's direction (e.g. 'margin-left: auto;' pushes the item completely to the right edge)",
  "Centers the entire container",
  "Removes all padding",
  "B", "'margin-left: auto' in flexbox is the gold-standard technique for pushing navbar links or action buttons to the far right.", 2);

addQ(9, "What does 'align-content' control in a flex container?",
  "Aligns text inside individual items",
  "Controls the cross-axis alignment of multiple WRAPPED lines/rows of flex items when there is extra vertical space (only applies when flex-wrap: wrap is active)",
  "Aligns items on a single line",
  "Replaces justify-content",
  "B", "align-content aligns multiple wrapped flex lines across the cross axis.", 3);

addQ(9, "What does 'flex-direction: row-reverse;' do?",
  "Flips items upside down",
  "Lays out flex items horizontally from right-to-left, placing the first DOM element at the far right",
  "Rotates text 180 degrees",
  "Hides all items except the last",
  "B", "row-reverse inverts horizontal sequence order.", 1);

addQ(9, "What is the shorthand property that combines 'flex-direction' and 'flex-wrap' simultaneously?",
  "flex-layout",
  "flex-flow (e.g. flex-flow: row wrap;)",
  "flex-config",
  "flex-grid",
  "B", "flex-flow combines direction and wrapping (e.g. flex-flow: column wrap).", 2);

addQ(9, "What happens to the CSS 'float' and 'clear' properties on child elements when their parent becomes a flex container?",
  "Floats work normally",
  "Floats and clears are completely IGNORED on flex items; they have no effect in flex formatting contexts",
  "Throws a CSS compilation error",
  "Floats convert to flex-grow",
  "B", "Flex formatting contexts supersede and disable traditional floats on flex items.", 2);

addQ(9, "What happens to vertical margin collapsing between adjacent child items inside a flex container?",
  "Vertical margins collapse normally",
  "Vertical margin collapsing is completely DISABLED between flex items",
  "Margins are doubled",
  "Margins convert to padding",
  "B", "Flex items never collapse vertical margins.", 2);

addQ(9, "What does 'align-items: baseline;' align flex items to?",
  "The top edge of each item",
  "The typographical baseline of the first line of text inside each flex item, ensuring text across columns aligns perfectly",
  "The bottom border",
  "The vertical center",
  "B", "baseline aligns unequal items by the font baseline of their first text line.", 2);

addQ(9, "What is 'Flexbox Holy Grail Layout' primarily composed of?",
  "A header, sticky footer, and a 3-column middle body section (nav, main content, sidebar) dynamically stretching to fill available viewport height",
  "A circular layout",
  "A 3D cube model",
  "A pure text layout",
  "A", "The Holy Grail layout uses flex columns and flex: 1 main sections to achieve responsive header/body/footer structures.", 2);

// -------------------------------------------------------------
// MODULE 10: CSS Grid Layout (2D Systems) (30 Questions)
// -------------------------------------------------------------
addQ(10, "What is the fundamental difference between CSS Flexbox and CSS Grid?",
  "Flexbox is 1-Dimensional (laying out items primarily along a single row OR column at a time); CSS Grid is 2-Dimensional (laying out rows AND columns simultaneously in a unified grid)",
  "Flexbox is newer than Grid",
  "Grid only works with images",
  "Flexbox cannot center elements",
  "A", "Flexbox is 1D (content-first); Grid is 2D (layout-first system for simultaneous row and column orchestration).", 1);

addQ(10, "Which CSS property defines a Grid Container?",
  "display: grid; (or display: inline-grid;)",
  "grid-layout: on;",
  "layout: 2d;",
  "grid: true;",
  "A", "'display: grid' establishes a Grid formatting context.", 1);

addQ(10, "What does the fractional unit 'fr' represent in CSS Grid?",
  "Font resolution percentage",
  "A fraction of the available free space within the grid container (e.g. '1fr 2fr' divides space into 1/3 and 2/3 shares)",
  "Fixed frame rate",
  "Frequency rate",
  "B", "The 'fr' unit allocates proportional shares of residual container space.", 1);

addQ(10, "What does 'grid-template-columns: repeat(3, 1fr);' create?",
  "3 rows of equal height",
  "3 equal-width columns that each take up 1/3 of the available grid container width",
  "A 3x3 square matrix",
  "3px wide columns",
  "B", "repeat(3, 1fr) produces three columns of identical 1fr fractional width.", 1);

addQ(10, "What does 'grid-template-columns: 200px 1fr 2fr;' configure?",
  "3 equal columns",
  "A fixed 200px first column, with the remaining width split between a 1-part second column and a 2-parts third column",
  "A 200px high grid",
  "A table layout",
  "B", "Mixes rigid fixed pixel units with flexible fractional distribution.", 2);

addQ(10, "What does the CSS function 'minmax(150px, 1fr)' do in grid column sizing?",
  "Sets width to exactly 150px",
  "Defines a dynamic size range: the column can shrink down to a minimum of 150px, but will expand up to 1fr if free space is available",
  "Limits height to 150px",
  "Creates 150 columns",
  "B", "minmax(min, max) clamps track sizes between minimum and maximum bounds.", 2);

addQ(10, "What is the famous CSS Grid responsive column declaration that creates responsive auto-wrapping columns WITHOUT media queries?",
  "grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));",
  "grid-columns: responsive;",
  "grid-template-columns: auto-wrap;",
  "grid-auto: 250px;",
  "A", "The 'repeat(auto-fit, minmax(250px, 1fr))' recipe automatically fits as many 250px+ columns as viewport width allows without media queries.", 2);

addQ(10, "What is the difference between 'auto-fill' and 'auto-fit' in CSS Grid?",
  "They are identical",
  "'auto-fill' creates empty grid tracks even if there are no items to fill them; 'auto-fit' collapses empty tracks to 0px, expanding existing items to fill the entire container row",
  "'auto-fit' shrinks items to 0",
  "'auto-fill' is deprecated",
  "B", "auto-fit stretches active items across empty trailing tracks; auto-fill reserves empty track slots.", 3);

addQ(10, "What does 'grid-template-areas' allow you to do in CSS Grid?",
  "Name specific visual regions of the grid layout using visual string ascii-art layouts (e.g. \\'\"header header\" \"sidebar main\"\\')",
  "Calculate physical room square footage",
  "Import 3D models",
  "Create SVG polygons",
  "A", "grid-template-areas provides semantic template mapping for complete page layouts.", 2);

addQ(10, "How do you assign an individual child element to a named grid area defined in grid-template-areas?",
  "area-name: 'header';",
  "grid-area: header;",
  "grid-name: header;",
  "place-area: header;",
  "B", "grid-area connects child elements to matching named template area regions.", 2);

addQ(10, "What do Grid Line Numbers represent in CSS Grid placement?",
  "The count of items inside a cell",
  "The 1-based index numbers of the dividing grid track lines starting from the start edge (1, 2, 3... -1 for the end line)",
  "The z-index of grid cells",
  "The pixel width of grid borders",
  "B", "Grid lines delineate track boundaries, numbered 1..N (or -1 for reverse end).", 2);

addQ(10, "What does 'grid-column: 1 / 3;' do to a grid item?",
  "Divides the item into 1/3 size",
  "Causes the grid item to span horizontally from grid line 1 up to (but not including) grid line 3 (spanning 2 columns)",
  "Positions the item on row 1, column 3",
  "Hides columns 1 and 3",
  "B", "Line-based placement 'start / end' specifies horizontal span boundaries.", 2);

addQ(10, "What does 'grid-column: span 2;' mean?",
  "Places the item on column 2",
  "Causes the item to span across 2 adjacent columns starting from its current auto-placed position",
  "Shrinks the item by 50%",
  "Duplicates the item",
  "B", "The span keyword widens a cell across N columns relative to current placement.", 1);

addQ(10, "What does 'grid-column: 1 / -1;' do in a grid layout?",
  "Causes the grid item to span across the ENTIRE full width of the grid from the very first line (1) to the very last line (-1)",
  "Deletes column 1",
  "Creates an infinite grid",
  "Positions the item off-screen",
  "A", "'1 / -1' spans items across the complete width of explicit grid templates.", 2);

addQ(10, "What does 'grid-row: span 3;' do to a grid item?",
  "Spans the item vertically across 3 consecutive rows",
  "Creates 3 new rows",
  "Multiplies height by 3",
  "Hides row 3",
  "A", "Spans item vertically downward across 3 row tracks.", 1);

addQ(10, "What is the difference between the 'Explicit Grid' and the 'Implicit Grid'?",
  "Explicit grid is defined in CSS; implicit grid is created automatically by the browser when items overflow explicit row/column tracks",
  "Explicit grid is 3D; implicit grid is 2D",
  "Explicit grid uses pixels; implicit grid uses rem",
  "There is no implicit grid in CSS",
  "A", "Implicit grids auto-generate new rows/columns to accommodate extra DOM nodes.", 2);

addQ(10, "Which property defines the automatic default height of rows created in the Implicit Grid?",
  "grid-auto-rows (e.g. grid-auto-rows: 200px; or minmax(100px, auto);)",
  "grid-implicit-height",
  "implicit-row-size",
  "grid-row-default",
  "A", "grid-auto-rows governs the dimension of automatically created implicit rows.", 2);

addQ(10, "Which property defines whether auto-placed items fill into new rows or new columns?",
  "grid-auto-flow: row; (or column, or dense)",
  "grid-direction",
  "grid-orientation",
  "grid-fill",
  "A", "grid-auto-flow controls placement direction (row, column, row dense).", 2);

addQ(10, "What does 'grid-auto-flow: dense;' do in an image gallery or masonry-style layout?",
  "Compresses image file sizes",
  "Instructs the auto-placement algorithm to backfill earlier empty holes/gaps in the grid if smaller items appear later in the DOM",
  "Removes grid gap",
  "Makes all items circles",
  "B", "dense packs layouts tightly by filling vacant grid holes out-of-order.", 3);

addQ(10, "What does the shorthand property 'place-items: center;' do on a grid container?",
  "Hides all items",
  "Combines 'align-items: center;' and 'justify-items: center;' to perfectly center all grid items inside their respective grid cells in both axes",
  "Centers the grid on the screen",
  "Adds center alignment to text",
  "B", "'place-items: center' provides instant 2D grid cell centering.", 1);

addQ(10, "What does 'place-content: center;' do on a grid container when total grid track size is smaller than the container?",
  "Centers the entire grid system itself (all tracks collectively) within the outer container",
  "Centers text inside paragraphs",
  "Centers items inside cells",
  "Centers borders",
  "A", "place-content aligns the entire track collection within container boundaries.", 2);

addQ(10, "What does 'justify-self: end;' do on an individual grid item?",
  "Pushes the item to the right edge of its own individual grid cell along the inline axis",
  "Moves the item to the last row",
  "Hides the item",
  "Deletes right margin",
  "A", "justify-self overrides cell-level inline alignment for a single item.", 2);

addQ(10, "What does 'align-self: start;' do on an individual grid item?",
  "Aligns the item to the top edge of its own grid cell along the block/vertical axis",
  "Moves item to row 1",
  "Starts an animation",
  "Makes item full width",
  "A", "align-self overrides vertical cell alignment for that specific item.", 2);

addQ(10, "Can grid items intentionally overlap each other in CSS Grid?",
  "No, grid items are strictly prohibited from overlapping",
  "Yes, by assigning multiple items to identical grid line coordinates or grid areas, layering them with z-index",
  "Only in SVG grids",
  "Only using negative margins",
  "B", "CSS Grid natively supports deliberate overlapping layers (e.g. hero image with text overlay card).", 2);

addQ(10, "What is 'CSS Subgrid' ('grid-template-columns: subgrid;')?",
  "A miniature 2x2 grid",
  "A modern feature allowing a nested child grid to adopt and inherit the exact row/column track definitions of its parent grid, aligning items across cards perfectly",
  "A grid inside a table",
  "A fallback for older browsers",
  "B", "Subgrid synchronizes nested child alignment with parent track coordinate grids.", 3);

addQ(10, "What does the declaration 'grid-template-columns: 100px auto 1fr;' create?",
  "3 identical columns",
  "Column 1 is fixed at 100px; Column 2 sizes to its largest content ('auto'); Column 3 absorbs all remaining free space ('1fr')",
  "A 100px high grid",
  "An error",
  "B", "Combines fixed (100px), intrinsic content (auto), and flexible (1fr) column sizing.", 2);

addQ(10, "How do you define a 16px gutter spacing between both rows and columns in CSS Grid?",
  "gap: 16px; (or grid-gap: 16px;)",
  "grid-margin: 16px;",
  "cell-padding: 16px;",
  "spacing: 16px;",
  "A", "'gap: 16px;' establishes uniform gutter alleys across all grid rows and columns.", 1);

addQ(10, "What does 'row-gap: 20px; column-gap: 10px;' configure?",
  "Vertical gap between rows is 20px; Horizontal gap between columns is 10px",
  "Rows 10px, Columns 20px",
  "Padding 20px",
  "Margin 10px",
  "A", "Separate row and column gap dimensions.", 1);

addQ(10, "Can CSS Grid be used together with CSS Flexbox on the same web page?",
  "No, using both crashes the CSS parser",
  "Yes! Best practice is using CSS Grid for the macro 2D page layout, and Flexbox for micro 1D component alignments (navbars, card actions, tags)",
  "Only if declared in separate files",
  "Grid is deprecated in favor of Flexbox",
  "B", "Modern web design combines Grid for macro page scaffolds with Flexbox for micro UI components.", 1);

addQ(10, "What does the '.' (period) token represent inside a 'grid-template-areas' declaration (e.g. \\'\"header header\" \". main\"\\')?",
  "A period punctuation mark",
  "An empty, unnamed cell slot in the grid template where no item is placed",
  "A full stop",
  "A hidden row",
  "B", "A dot (.) in template areas creates deliberate empty spacer cells in the grid map.", 2);


// -------------------------------------------------------------
// MODULE 11: CSS 2D & 3D Transforms (30 Questions)
// -------------------------------------------------------------
addQ(11, "Which CSS property applies 2D or 3D geometrical transformation matrices to an element?",
  "transition",
  "transform",
  "geometry",
  "matrix-style",
  "B", "The 'transform' property rotates, scales, skews, or translates elements.", 1);

addQ(11, "What does 'transform: translate(50px, 100px);' do to an element?",
  "Resizes the element to 50x100px",
  "Moves the element 50px to the right along the X-axis and 100px down along the Y-axis without affecting surrounding layout flow",
  "Rotates the element by 50 degrees",
  "Scales the element",
  "B", "translate(X, Y) shifts visual position without triggering layout reflow.", 1);

addQ(11, "What does 'transform: rotate(45deg);' do?",
  "Rotates the element 45 degrees clockwise around its transform origin",
  "Rotates the element 45 degrees counter-clockwise",
  "Bends the text at a 45 degree angle",
  "Crops the element into a diamond",
  "A", "rotate(Ndeg) spins elements clockwise around the anchor point.", 1);

addQ(11, "What does 'transform: scale(1.5);' do?",
  "Enlarges the element by 150% (1.5 times its original size) in both width and height",
  "Shrinks the element by 50%",
  "Adds 1.5px border",
  "Scales font size only",
  "A", "scale(factor) multiplies element dimensions proportionally.", 1);

addQ(11, "What does 'transform: scaleX(-1);' achieve on an image or element?",
  "Makes the image invisible",
  "Flips / mirrors the element horizontally along the vertical axis (Horizontal Mirror effect)",
  "Flips the element upside down",
  "Rotates the element 360 degrees",
  "B", "Negative scaleX values flip elements horizontally.", 2);

addQ(11, "What does 'transform: scaleY(-1);' achieve?",
  "Flips / mirrors the element vertically upside-down (Vertical Mirror effect)",
  "Shrinks height to 0",
  "Flips horizontally",
  "Inverts colors",
  "A", "scaleY(-1) flips an element upside down vertically.", 2);

addQ(11, "What does 'transform: skew(10deg, 20deg);' do to an element?",
  "Distorts and slants the element along the X and Y axes by the specified degree angles (Shear transformation)",
  "Rotates the element",
  "Blurs the element",
  "Creates a 3D shadow",
  "A", "skew(Xdeg, Ydeg) produces shear slant distortions.", 2);

addQ(11, "What is the default point of origin for CSS transformations ('transform-origin')?",
  "0% 0% (Top-Left corner)",
  "50% 50% (The exact center of the element)",
  "100% 100% (Bottom-Right corner)",
  "0% 100% (Bottom-Left corner)",
  "B", "The default transform-origin is '50% 50%' (the element's geometric center).", 1);

addQ(11, "How do you rotate an element around its Top-Left corner rather than its center?",
  "transform-origin: top left; (or transform-origin: 0 0;)",
  "transform-anchor: top-left;",
  "origin: 0;",
  "rotate-origin: start;",
  "A", "transform-origin: top left pivots transformations from the top-left coordinate.", 2);

addQ(11, "How do you chain multiple transform functions on a single element (e.g. translate AND rotate)?",
  "Declare transform multiple times on separate lines",
  "List each transform function separated by a space in a single declaration: 'transform: translate(20px, 0) rotate(45deg) scale(1.2);'",
  "Separate transforms with commas",
  "Use transform-multi: true;",
  "B", "Space-separated function chains execute sequentially from right to left.", 2);

addQ(11, "Why does the order of transform functions matter in 'transform: rotate(45deg) translate(100px, 0);' vs 'transform: translate(100px, 0) rotate(45deg);'?",
  "It does not matter in CSS",
  "Transformations modify the coordinate system itself; rotating first causes subsequent translations to move along the newly tilted 45-degree axis",
  "Order only matters in Safari",
  "It affects loading speed only",
  "B", "Matrix transformations are non-commutative; rotation alters directional axes for subsequent translations.", 3);

addQ(11, "What CSS property is required on a parent container to enable 3D perspective depth for transformed 3D child elements?",
  "3d-view: on;",
  "perspective: 800px; (or transform: perspective(800px);)",
  "depth: 3d;",
  "view-distance: 800px;",
  "B", "perspective determines the virtual distance between the viewer and the z=0 plane.", 2);

addQ(11, "What does 'transform: rotateY(180deg);' do to a card in a 3D flipping animation?",
  "Spins the card vertically upside down",
  "Rotates the card horizontally around its vertical Y-axis by 180 degrees, showing the back of the card",
  "Zooms in by 180%",
  "Deletes the card",
  "B", "rotateY(180deg) rotates objects around the vertical spine for card-flip UI effects.", 2);

addQ(11, "What does 'transform: rotateX(180deg);' do?",
  "Flips the element vertically around its horizontal X-axis",
  "Flips the element horizontally",
  "Rotates along the Z-axis",
  "Skews the element",
  "A", "rotateX(180deg) flips cards top-to-bottom around the horizontal axis.", 2);

addQ(11, "What does 'backface-visibility: hidden;' do in a 3D card flip component?",
  "Hides the front face when looking from behind",
  "Hides the back side of the element when it is rotated to face away from the viewer (showing the underlying back card face instead)",
  "Hides the entire card",
  "Disables 3D animations",
  "B", "backface-visibility: hidden is critical for 2-sided 3D flipping card components.", 2);

addQ(11, "What does 'transform-style: preserve-3d;' do on a 3D parent container?",
  "Flattens all child elements into a single 2D plane",
  "Instructs the browser to render child elements in their shared true 3D coordinate space rather than flattening them to 2D",
  "Saves the 3D model to file",
  "Enables WebGL",
  "B", "preserve-3d maintains true 3D spatial relationships for nested child elements.", 3);

addQ(11, "What does 'transform: translateZ(100px);' do in a 3D perspective context?",
  "Moves the element 100px to the right",
  "Pushes the element 100px closer toward the viewer along the Z-axis (making it appear physically closer and larger in perspective)",
  "Pushes the element backward into the screen",
  "Moves the element 100px down",
  "B", "translateZ moves elements forward/backward along the perpendicular depth axis.", 2);

addQ(11, "Why are CSS Transforms and Opacity animations preferred over animating 'top', 'left', 'width', or 'height'?",
  "Transforms and opacity are executed on the GPU compositor thread without triggering layout reflows or repaints, ensuring silky 60/120 FPS performance",
  "Top and left are deprecated in CSS3",
  "Transforms require less typing",
  "Transforms work on older browsers only",
  "A", "Compositor-only properties (transform, opacity) bypass CPU layout reflow bottlenecks.", 2);

addQ(11, "What does 'perspective-origin: center top;' configure in a 3D scene?",
  "Sets the position of the 3D model",
  "Sets the viewer's virtual eye-level / vanishing point angle (looking down at the 3D scene from above center)",
  "Moves the container to top",
  "Disables 3D perspective",
  "B", "perspective-origin positions the vanishing point coordinates of the 3D camera view.", 3);

addQ(11, "What does the CSS function 'matrix3d()' accept?",
  "4 parameters",
  "A 4x4 homogeneous transformation matrix of 16 numerical values for complex 3D transformations",
  "A 3D image URL",
  "RGB color values",
  "B", "matrix3d() takes 16 values defining affine 3D matrix transformations.", 3);

addQ(11, "What does 'transform: translate3d(x, y, z);' do?",
  "Moves the element across all three X, Y, and Z dimensional spatial coordinates simultaneously",
  "Creates 3 duplicate copies",
  "Rotates in 3D",
  "Renders in wireframe",
  "A", "translate3d applies hardware-accelerated 3D vector translation.", 2);

addQ(11, "In modern CSS, can individual transform properties (e.g. 'translate: 50px 100px;', 'rotate: 45deg;', 'scale: 1.2;') be declared independently?",
  "No, you must always use the transform shorthand",
  "Yes! Modern CSS supports standalone 'translate', 'rotate', and 'scale' properties that can be animated independently without overwriting each other",
  "Only in JavaScript",
  "Only in SVG",
  "B", "Independent transform properties allow modular animation without transform function collisions.", 2);

addQ(11, "What does 'rotate: x 45deg;' do when using independent transform properties?",
  "Rotates 45 degrees around the X-axis in 3D space",
  "Rotates along the 2D plane",
  "Scales by 45%",
  "Draws an X shape",
  "A", "Independent rotate properties accept axis qualifiers (e.g. rotate: y 90deg).", 2);

addQ(11, "What does 'scale: 2 0.5;' do when using independent transform properties?",
  "Scales width by 2x and height by 0.5x independently",
  "Scales by 2.5x",
  "Sets border to 2px",
  "Rotates by 20 degrees",
  "A", "Independent scale property accepts X and Y factors.", 2);

addQ(11, "What does 'transform: matrix(1, 0, 0, 1, 50, 100);' represent in 2D?",
  "A translation of 50px on X and 100px on Y with no scaling or rotation",
  "A rotation of 50 degrees",
  "A 3D cube",
  "A blur filter",
  "A", "Standard 2D affine matrix(a, b, c, d, tx, ty) where tx=50 and ty=100.", 3);

addQ(11, "What does 'will-change: transform;' do when applied before an animation?",
  "Forces immediate animation",
  "Hints to the browser's rendering engine to promote the element to its own dedicated GPU compositor layer in advance, optimizing performance",
  "Disables hardware acceleration",
  "Changes the element's class",
  "B", "will-change advises browser rendering engines to prepare dedicated compositor layers.", 2);

addQ(11, "Why should 'will-change' NOT be applied indiscriminately to all elements (* { will-change: transform; })?",
  "It will cause syntax errors",
  "Promoting excessive elements to GPU layers consumes massive VRAM and degrades browser memory performance",
  "It disables CSS animations",
  "It changes font sizes",
  "B", "Overusing will-change triggers high VRAM consumption and GPU layer thrashing.", 3);

addQ(11, "What does 'transform: translate(-50%, -50%);' use as its percentage reference basis?",
  "The parent container's width and height",
  "The element's OWN computed width and height",
  "The viewport width and height",
  "The root font size",
  "B", "Transform percentage coordinates are calculated relative to the element's own dimensions.", 2);

addQ(11, "What visual effect does 'transform: perspective(500px) rotateX(25deg);' create on a flat container?",
  "A 3D tilted 'Star Wars crawl' or receding billboard plane effect",
  "A flat 2D rectangle",
  "A circle",
  "A color gradient",
  "A", "Transforms with perspective tilting create receding 3D floor/plane visual angles.", 2);

addQ(11, "Can an inline element (like standard <span>) be transformed with 'transform' without changing its display?",
  "Yes, inline elements transform normally",
  "No, transform has no effect on pure inline elements; the element must be set to 'inline-block', 'block', 'flex', or 'grid' to transform",
  "Only in Firefox",
  "Only with 3D transforms",
  "B", "CSS transforms only apply to transformable elements (block, inline-block, flex/grid items, etc.).", 2);

// -------------------------------------------------------------
// MODULE 12: Transitions & Keyframe Animations (30 Questions)
// -------------------------------------------------------------
addQ(12, "What is the primary function of the CSS 'transition' property?",
  "To animate elements continuously in an infinite loop",
  "To provide smooth, gradual visual interpolations between two CSS property states (e.g. normal state to :hover state)",
  "To redirect users to another webpage",
  "To load external fonts",
  "B", "Transitions smoothly interpolate property state changes over a specified duration.", 1);

addQ(12, "What are the four sub-properties of the 'transition' shorthand property in CSS?",
  "transition: property duration timing-function delay;",
  "transition: name iteration count direction;",
  "transition: start end ease speed;",
  "transition: type color width height;",
  "A", "transition shorthand syntax: property, duration, timing-function, delay (e.g. all 0.3s ease 0.1s).", 1);

addQ(12, "Which CSS property specifies how long a transition should take to complete?",
  "transition-time",
  "transition-duration (e.g. 0.3s or 300ms)",
  "transition-speed",
  "transition-length",
  "B", "transition-duration specifies elapsed time in seconds (s) or milliseconds (ms).", 1);

addQ(12, "What does the 'transition-timing-function' control during an animation?",
  "The total duration",
  "The acceleration curve / pacing of the transition over time (e.g. linear, ease-in, ease-out, cubic-bezier)",
  "The start delay",
  "The color palette",
  "B", "Timing functions modulate velocity curves (accelerating, decelerating, springing).", 2);

addQ(12, "What is the characteristic behavior of the 'ease-in-out' timing function?",
  "Constant speed throughout",
  "Starts slowly, accelerates in the middle, and decelerates slowly at the end",
  "Starts fast and ends instantly",
  "Bounces 3 times",
  "B", "ease-in-out produces natural smooth acceleration and deceleration.", 1);

addQ(12, "What does the 'linear' timing function do?",
  "Accelerates constantly",
  "Maintains an exact constant velocity from start to finish without acceleration or deceleration",
  "Slows down at the end",
  "Stops in the middle",
  "B", "linear progresses at a steady uniform rate across the animation lifespan.", 1);

addQ(12, "What does the 'cubic-bezier(x1, y1, x2, y2)' function allow in CSS animations?",
  "Importing 3D geometry",
  "Defining custom bezier velocity curves (including realistic spring, overshoot, and bounce physics)",
  "Calculating color blends",
  "Controlling audio volume",
  "B", "cubic-bezier defines custom 4-point Bézier velocity curves.", 2);

addQ(12, "What does the 'steps(5, end)' timing function do in a CSS animation?",
  "Animates smoothly at 60 FPS",
  "Divides the transition into 5 discrete, instantaneous jumps/frames (used for sprite-sheet animations and retro typewriter text effects)",
  "Plays the animation 5 times",
  "Pauses for 5 seconds",
  "B", "steps() segments animations into stepped frame intervals (sprite sheets).", 2);

addQ(12, "Which CSS at-rule is used to define complex, multi-stage custom CSS animations?",
  "@animation",
  "@keyframes (e.g. @keyframes slideIn { 0% {} 100% {} })",
  "@transition-frames",
  "@motion",
  "B", "@keyframes creates named animation sequences with percentage step waypoints.", 1);

addQ(12, "What do 'from' and 'to' represent inside a @keyframes rule?",
  "URLs of images",
  "Syntactic aliases for 0% (start) and 100% (completion)",
  "CSS selectors",
  "Animation speeds",
  "B", "'from' is 0% and 'to' is 100% in keyframe rule syntax.", 1);

addQ(12, "Which property binds a @keyframes animation name to an HTML element?",
  "animation-name: pulse;",
  "keyframes-bind: pulse;",
  "animation-call: pulse;",
  "motion-type: pulse;",
  "A", "animation-name connects the element to the matching @keyframes definition.", 1);

addQ(12, "How do you make a CSS animation loop infinitely without stopping?",
  "animation-iteration-count: infinite;",
  "animation-loop: true;",
  "animation-repeat: always;",
  "animation-cycle: 0;",
  "A", "animation-iteration-count: infinite runs the animation continuously.", 1);

addQ(12, "What does 'animation-direction: alternate;' do to an animation loop?",
  "Plays the animation in reverse only",
  "Plays the animation forwards on odd iterations and backwards in reverse on even iterations (ping-pong effect)",
  "Plays random keyframes",
  "Stops after 2 cycles",
  "B", "alternate reverses playback direction on alternating iteration cycles.", 2);

addQ(12, "What does 'animation-fill-mode: forwards;' ensure when an animation completes?",
  "The element resets to its original pre-animation styles immediately",
  "The element retains the exact computed style values defined in the LAST keyframe (100%) after the animation finishes",
  "The animation repeats 5 times",
  "The element is deleted from DOM",
  "B", "forwards preserves final keyframe styles permanently after animation ends.", 2);

addQ(12, "What does 'animation-fill-mode: backwards;' do?",
  "Reverses the animation",
  "Applies the styles of the FIRST keyframe (0%) immediately during the animation-delay period before the animation actually starts playing",
  "Hides the element",
  "Plays backwards",
  "B", "backwards applies 0% styles during initial delay wait intervals.", 3);

addQ(12, "What does 'animation-fill-mode: both;' do?",
  "Applies rules for both forwards AND backwards fill modes",
  "Plays forwards and backwards simultaneously",
  "Doubles the animation speed",
  "Applies to all elements",
  "A", "'both' combines initial delay styling (backwards) with final persistence (forwards).", 2);

addQ(12, "Which property can pause and resume a running CSS animation on hover or click?",
  "animation-state: stop;",
  "animation-play-state: paused; (or animation-play-state: running;)",
  "animation-control: toggle;",
  "motion: pause;",
  "B", "animation-play-state: paused freezes running animations in place.", 2);

addQ(12, "Why is 'transition: all 0.3s;' generally discouraged in performance-critical production code?",
  "It fails to compile",
  "It forces the browser to watch and interpolate every single property (including costly layout/paint properties like width/box-shadow), causing frame drops",
  "It makes animations too slow",
  "It is not supported in Chrome",
  "B", "Explicitly listing properties (e.g. transition: transform 0.2s, opacity 0.2s) prevents unneeded paint recalculations.", 2);

addQ(12, "What is the CSS media query used to detect if a user has enabled reduced motion preferences in their operating system?",
  "@media (prefers-reduced-motion: reduce)",
  "@media (no-animations: true)",
  "@media (motion-sensitive: on)",
  "@media (accessibility-motion: false)",
  "A", "prefers-reduced-motion respects vestibular disorders by disabling aggressive UI animations.", 2);

addQ(12, "How do you implement accessible reduced-motion rules in modern CSS?",
  "@media (prefers-reduced-motion: reduce) { * { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; } }",
  "Delete all animations manually",
  "Use JavaScript to slow down the CPU",
  "Set opacity: 0",
  "A", "Overriding animation/transition durations to near-zero provides comprehensive motion accessibility.", 2);

addQ(12, "Can CSS transitions animate between 'height: 0;' and 'height: auto;' smoothly in standard CSS2/CSS3?",
  "Yes, height: auto transitions smoothly by default",
  "No, standard CSS transitions cannot interpolate between a fixed length and the intrinsic keyword 'auto' (modern CSS solves this with 'interpolate-size' or Grid 0fr->1fr)",
  "Only if using flexbox",
  "Only in Firefox",
  "B", "Traditional CSS cannot interpolate to 'auto'; modern CSS uses Grid (0fr to 1fr) or interpolate-size: allow-keywords.", 3);

addQ(12, "How can you smoothly transition an accordion collapse from 0 to full height using CSS Grid?",
  "grid-template-rows: 0fr; transitioning to grid-template-rows: 1fr; (with min-height: 0 on child)",
  "display: none transitioning to display: block",
  "height: 0 to height: auto",
  "visibility: hidden to visible",
  "A", "Transitioning grid-template-rows from 0fr to 1fr achieves smooth accordion expanding without fixed pixel heights.", 3);

addQ(12, "What does 'transition-delay: 0.5s;' do?",
  "Slows the animation speed by 50%",
  "Waits for 0.5 seconds AFTER the trigger event before starting the transition interpolation",
  "Plays the animation for 0.5 seconds",
  "Repeats after 0.5 seconds",
  "B", "transition-delay introduces an idle waiting interval before animation execution begins.", 1);

addQ(12, "What happens if a negative delay is assigned to an animation (e.g. 'animation-delay: -2s;')?",
  "The animation is delayed by 2 seconds",
  "The animation starts IMMEDIATELY as if it had already been playing for 2 seconds (starts mid-sequence)",
  "The animation is cancelled",
  "The browser throws an error",
  "B", "Negative delays skip forward into the animation cycle, starting playback mid-timeline.", 3);

addQ(12, "What is a 'CSS Pulse / Heartbeat' animation pattern typically composed of?",
  "A @keyframes sequence that alternates 'transform: scale(1);' to 'transform: scale(1.08);' continuously with 'animation-direction: alternate;'",
  "Changing background colors between red and green",
  "Spinning 360 degrees",
  "Shaking left and right",
  "A", "Subtle scale keyframe loops create engaging pulse badges and call-to-action indicators.", 1);

addQ(12, "What is a 'CSS Shimmer / Skeleton Loading' animation composed of?",
  "A rotating loading circle",
  "A moving linear-gradient background highlighting across placeholder cards from left to right using @keyframes background-position",
  "Flashing black text",
  "Blinking borders",
  "B", "Shimmer skeletons animate gradient positions across muted grey UI card mockups.", 2);

addQ(12, "What does 'animation-direction: reverse;' do?",
  "Plays the animation from 100% (to) back to 0% (from) in reverse order",
  "Flips the element upside down",
  "Plays forwards twice",
  "Stops the animation",
  "A", "reverse inverts keyframe timeline progression.", 1);

addQ(12, "Can multiple animations be assigned to a single element simultaneously in CSS?",
  "No, only one animation is allowed per element",
  "Yes, by separating animation names and properties with commas (e.g. 'animation: fadeIn 0.5s ease, slideUp 0.5s ease;')",
  "Only in WebGL",
  "Only using JavaScript",
  "B", "Comma-separated animation lists composite multiple concurrent keyframe sequences.", 2);

addQ(12, "What is the CSS 'view-transition' API in modern web development?",
  "A camera screenshot tool",
  "A modern browser API allowing smooth visual animated transitions between different DOM states or full multi-page document navigations (MPAs)",
  "A CSS validator",
  "A video player plugin",
  "B", "View Transitions provide native app-like animated page transitions across DOM updates and navigation.", 3);

addQ(12, "What does '@keyframes spin { to { transform: rotate(360deg); } }' combined with 'animation: spin 1s linear infinite;' create?",
  "A continuous 360-degree rotating loading spinner",
  "A bouncing ball",
  "A pulse animation",
  "A fading element",
  "A", "The canonical CSS loading spinner animation.", 1);

// -------------------------------------------------------------
// MODULE 13: Responsive Web Design & Media Queries (30 Questions)
// -------------------------------------------------------------
addQ(13, "What is the mandatory HTML meta viewport tag required for responsive web design?",
  "<meta name=\\'viewport\\' content=\\'width=device-width, initial-scale=1.0\\'>",
  "<meta name=\\'screen\\' content=\\'mobile\\'>",
  "<meta name=\\'responsive\\' content=\\'true\\'>",
  "<meta name=\\'width\\' content=\\'100%\\'>",
  "A", "The viewport meta tag aligns page layout width to physical device screen width and establishes 1:1 scale.", 1);

addQ(13, "What does the 'Mobile-First' responsive design approach mean?",
  "Building the website only for mobile phones and ignoring desktops",
  "Writing base CSS styles for mobile/small screens first, then using '@media (min-width: ...)' to progressively enhance layout for larger desktop screens",
  "Designing desktop first and stripping features on mobile",
  "Using only touch controls",
  "B", "Mobile-first begins with mobile base styles, adding complexity upward via min-width media queries.", 1);

addQ(13, "What does the media query '@media (min-width: 768px)' target?",
  "Screens narrower than 768px",
  "Screens that are 768 pixels wide OR WIDER (tablets, laptops, desktops)",
  "Screens exactly 768px wide only",
  "Print documents only",
  "B", "min-width activates styles at or above the declared breakpoint.", 1);

addQ(13, "What does the media query '@media (max-width: 767px)' target?",
  "Screens that are 767 pixels wide OR SMALLER (mobile phones)",
  "Screens wider than 767px",
  "All screens",
  "Television screens",
  "A", "max-width targets viewports up to the declared upper ceiling.", 1);

addQ(13, "What is the modern CSS Media Query Range Syntax supported in modern browsers?",
  "@media (768px <= width <= 1024px) { ... }",
  "@media (between: 768px and 1024px)",
  "@media (range: 768-1024)",
  "@media (screen-window: 768 to 1024)",
  "A", "Modern CSS supports mathematical comparison operators (e.g. width >= 768px and width <= 1024px).", 2);

addQ(13, "What does the media query '@media (orientation: landscape)' detect?",
  "Devices held in a horizontal orientation where viewport width is greater than height",
  "Vertical mobile phone holding",
  "Printer paper size",
  "Outdoor lighting conditions",
  "A", "landscape triggers when width > height; portrait triggers when height > width.", 1);

addQ(13, "What does the media query '@media (orientation: portrait)' detect?",
  "Devices held vertically where viewport height is greater than width",
  "Horizontal tablet holding",
  "Desktop widescreen monitors",
  "Black and white printers",
  "A", "portrait matches viewports where height >= width.", 1);

addQ(13, "What does '@media (prefers-color-scheme: dark)' enable in CSS?",
  "Turns off screen backlight",
  "Detects if the user has enabled Dark Mode in their operating system / browser preferences, allowing automatic dark theme styling",
  "Inverts website colors with JavaScript",
  "Hides images at night",
  "B", "prefers-color-scheme detects system light/dark theme settings for responsive themes.", 1);

addQ(13, "What does '@media print' target?",
  "High resolution retina screens",
  "Print preview modes and physical printer outputs (used to hide navigation bars, banners, and adjust margins for printing)",
  "3D printing machines",
  "Text-to-speech engines",
  "B", "@media print creates clean, ink-friendly layouts for PDF exporting and printing.", 1);

addQ(13, "What does the CSS viewport unit '100vw' represent?",
  "100% of the Root element width",
  "100% of the entire Viewport Width (including scrollbar width if present)",
  "100 virtual words",
  "100 visual weight units",
  "B", "1vw equals 1% of the total browser viewport width.", 1);

addQ(13, "What does the CSS viewport unit '100vh' represent?",
  "100% of the visible Viewport Height",
  "100 virtual horizontal pixels",
  "100% of document height",
  "100 variable hours",
  "A", "1vh equals 1% of the browser viewport height.", 1);

addQ(13, "Why do the modern dynamic viewport units '100dvh', '100svh', and '100lvh' exist for mobile browsers?",
  "To handle mobile browser dynamic address bars / toolbars showing and hiding without causing jumpy layout shifts (Dynamic, Small, Large Viewport Height)",
  "To calculate device battery percentage",
  "To scale text on tablets",
  "To load high-resolution images",
  "A", "dvh/svh/lvh adapt gracefully to mobile browser collapsible URL address bars.", 2);

addQ(13, "What does 'vmin' represent in CSS viewport units?",
  "1% of the SMALLEST of either viewport width or viewport height (whichever is smaller)",
  "1% of viewport width",
  "Minimum font size",
  "Minimum margin",
  "A", "vmin picks the smaller viewport dimension; vmax picks the larger dimension.", 2);

addQ(13, "What does 'vmax' represent?",
  "1% of the LARGEST of either viewport width or viewport height (whichever is larger)",
  "100% of the screen",
  "Maximum zoom level",
  "Video maximum width",
  "A", "vmax resolves against whichever viewport dimension is currently larger.", 2);

addQ(13, "What does the CSS mathematical function 'calc()' allow you to do?",
  "Execute JavaScript in CSS",
  "Perform dynamic mathematical calculations mixing different CSS units (e.g. 'width: calc(100% - 40px);')",
  "Calculate server response times",
  "Calculate tax rates",
  "B", "calc() evaluates algebraic expressions mixing percentages, pixels, rem, and viewport units.", 1);

addQ(13, "Why is whitespace around '+' and '-' operators strictly MANDATORY inside 'calc()' (e.g. 'calc(100% - 20px)')?",
  "To make it look cleaner",
  "Without spaces, a minus sign (like '-20px') is parsed as a negative number literal rather than a subtraction operator, causing a syntax error",
  "Whitespace is optional",
  "It speeds up compiler parsing",
  "B", "calc() requires spaces around + and - to disambiguate subtraction from negative value units.", 2);

addQ(13, "What does the CSS function 'min(50vw, 500px)' evaluate to?",
  "Always 50vw",
  "Selects the SMALLEST computed value among the listed options (effectively acting as a maximum width ceiling)",
  "Calculates average value",
  "Selects 500px strictly",
  "B", "min() picks the smallest value in the argument list.", 2);

addQ(13, "What does the CSS function 'max(10vw, 200px)' evaluate to?",
  "Always 10vw",
  "Selects the LARGEST computed value among the listed options (effectively acting as a minimum size floor)",
  "Selects 200px strictly",
  "Returns zero",
  "B", "max() selects the largest value, enforcing a minimum dimensional floor.", 2);

addQ(13, "What does the CSS function 'clamp(min, preferred, max)' do (e.g. 'font-size: clamp(1rem, 2.5vw, 2rem);')?",
  "Clamps the value so it scales fluidly with the preferred value, but NEVER shrinks below 'min' and NEVER grows above 'max' (Fluid Typography)",
  "Locks the font size permanently",
  "Rotates text between 3 sizes",
  "Rounds numbers to nearest integer",
  "A", "clamp() implements fluid responsive typography without writing dozens of media query breakpoints.", 2);

addQ(13, "What is 'Fluid Typography' in modern responsive design?",
  "Fonts that change color like water",
  "Text that smoothly and continuously scales in size proportionally with the viewport width (using clamp and vw) rather than jumping at discrete media query breakpoints",
  "Text rendered on canvas",
  "Animated wave text",
  "B", "Fluid typography eliminates discrete breakpoint jumps for seamless visual scaling.", 2);

addQ(13, "What does the media query '@media (hover: hover)' detect?",
  "Whether the user is currently hovering",
  "Whether the primary input device of the system has a true hover capability (like a desktop mouse), distinguishing desktop from touchscreens",
  "Whether hover animations are enabled",
  "Touchscreen gestures",
  "B", "hover: hover detects pointing devices (mice), while hover: none identifies touch devices.", 2);

addQ(13, "What does '@media (pointer: coarse)' detect?",
  "A high-precision gaming mouse",
  "A primary pointing device with limited precision, such as a user's finger on a mobile touchscreen, requiring larger 44px+ tap targets",
  "A stylus pen",
  "A trackball",
  "B", "pointer: coarse identifies touch screens needing enlarged interactive hit areas.", 2);

addQ(13, "What is the recommended minimum tap target size for touch buttons under WCAG mobile accessibility guidelines?",
  "10px by 10px",
  "At least 44px by 44px (or 48px by 48px)",
  "100px by 100px",
  "20px by 20px",
  "B", "WCAG 2.5.5 recommends minimum 44x44px touch targets to prevent mis-clicks.", 1);

addQ(13, "What does '@media (resolution: 2dppx)' (or -webkit-min-device-pixel-ratio: 2) detect?",
  "Standard definition screens",
  "High-DPI / High-Resolution Retina displays with 2 or more physical device pixels per CSS pixel, used to serve crisp 2x image assets",
  "4K televisions only",
  "Printers only",
  "B", "dppx media queries serve high-density @2x/@3x raster artwork to Retina screens.", 2);

addQ(13, "What does '@media (prefers-contrast: more)' detect?",
  "High brightness ambient sunlight",
  "Whether the user has enabled High Contrast mode in accessibility settings, requiring distinct borders and high contrast color ratios",
  "Color blindness",
  "OLED screens",
  "B", "prefers-contrast enhances UI readability for visually impaired users.", 2);

addQ(13, "What does 'env(safe-area-inset-top)' and 'env(safe-area-inset-bottom)' do on mobile devices (e.g. iPhones with notches / Dynamic Island)?",
  "Sets safe screen margins to prevent UI content from being occluded by hardware notches, rounded screen corners, and home indicator bars",
  "Calculates battery life",
  "Encrypts mobile data",
  "Adjusts camera brightness",
  "A", "env(safe-area-inset-*) pads UI around hardware camera notches and navigation home bars.", 2);

addQ(13, "Which viewport meta value is required to enable 'env(safe-area-inset-*)' on notched devices?",
  "viewport-fit=cover (e.g. <meta name=\\'viewport\\' content=\\'width=device-width, initial-scale=1, viewport-fit=cover\\'>)",
  "notch-adapt=true",
  "safe-area=on",
  "fullscreen=mobile",
  "A", "viewport-fit=cover expands webpage rendering behind hardware notches for safe area padding.", 3);

addQ(13, "What is the primary benefit of designing with relative units (rem, %, ch) instead of fixed pixels (px) for layouts and typography?",
  "Relative units automatically scale when users adjust their default browser font size for accessibility, preventing layout breakage",
  "Pixels do not work on smartphones",
  "Relative units load faster",
  "Pixels are deprecated in CSS3",
  "A", "Relative units respect user accessibility font-scaling preferences.", 1);

addQ(13, "What does the HTML '<picture>' element combined with CSS provide for responsive images?",
  "A photo gallery plugin",
  "Art direction and format switching (serving WebP/AVIF to modern browsers and cropped square images to mobile screens via <source media=\\'...\\'>)",
  "Automatic photo filtering",
  "3D model rendering",
  "B", "The <picture> element serves tailored crop ratios and next-gen image formats based on media queries.", 2);

addQ(13, "What does the HTML 'srcset' and 'sizes' attribute on an <img> tag accomplish?",
  "Allows the browser to automatically select and download the optimal image file resolution based on device DPI and current layout display width",
  "Sets image border size",
  "Rotates images",
  "Preloads all images simultaneously",
  "A", "srcset/sizes optimizes bandwidth by letting browsers download exact resolution matches.", 2);

// -------------------------------------------------------------
// MODULE 14: Modern CSS3: Custom Properties, Filters & Effects (30 Questions)
// -------------------------------------------------------------
addQ(14, "How are CSS Custom Properties (CSS Variables) declared syntactically?",
  "With two leading hyphens (e.g. '--primary-color: #3B82F6;') on a selector like :root",
  "With a dollar sign ($primary-color)",
  "With an @ symbol (@primary-color)",
  "Using var primary-color = #3B82F6;",
  "A", "CSS custom properties require two leading dashes (e.g. --brand-color).", 1);

addQ(14, "How do you access and consume the value of a CSS Custom Property in a declaration?",
  "Using the 'var()' function (e.g. 'color: var(--primary-color);')",
  "Using $variableName",
  "Using getVar(--primary-color)",
  "Using use(--primary-color)",
  "A", "var(--name, fallback) retrieves the custom property value.", 1);

addQ(14, "How do you provide a fallback value if a CSS variable is undefined?",
  "var(--brand-color, #10B981) (the second argument inside var() acts as the fallback)",
  "var(--brand-color) || #10B981",
  "fallback: #10B981;",
  "--brand-color ?? #10B981",
  "A", "var() accepts optional comma-separated fallback values if the token is missing.", 1);

addQ(14, "Are CSS Custom Properties scoped and cascaded through the DOM tree, or are they purely global?",
  "Purely global only",
  "They are fully scoped and cascaded through the DOM tree; variables declared on a parent or component class are inherited by its children and can be overridden locally",
  "They cannot be overridden",
  "They only work on :root",
  "B", "CSS variables adhere to full cascade and inheritance scoping rules.", 2);

addQ(14, "Can CSS Custom Properties be read and dynamically updated at runtime using JavaScript?",
  "No, CSS variables are static",
  "Yes, using 'element.style.setProperty('--color', val)' and 'getComputedStyle(element).getPropertyValue('--color')'",
  "Only by reloading the entire stylesheet",
  "Only in Node.js",
  "B", "CSS variables integrate seamlessly with JS runtime DOM style mutations.", 2);

addQ(14, "Which CSS property applies visual graphic effects (like blur, grayscale, contrast) to an element's rendered output?",
  "filter",
  "graphic-effect",
  "render-mode",
  "canvas-filter",
  "A", "The 'filter' property applies Photoshop-style raster effects to elements.", 1);

addQ(14, "What does 'filter: blur(10px);' do to an element or image?",
  "Sharpens the image",
  "Applies a 10px Gaussian blur effect over the entire element",
  "Blurs the background behind the element",
  "Rotates the image",
  "B", "filter: blur() applies a Gaussian blur to the element itself.", 1);

addQ(14, "What is the key difference between 'filter: blur()' and 'backdrop-filter: blur()'?",
  "There is no difference",
  "'filter: blur()' blurs the element itself; 'backdrop-filter: blur()' blurs the underlying content BEHIND a semi-transparent element (Glassmorphism effect)",
  "'backdrop-filter' only works on body",
  "'filter' requires WebGL",
  "B", "backdrop-filter blurs background layers visible through frosted-glass containers.", 2);

addQ(14, "How is the popular 'Glassmorphism / Frosted Glass' UI visual card effect created in modern CSS?",
  "background: rgba(255, 255, 255, 0.2); backdrop-filter: blur(12px); border: 1px solid rgba(255, 255, 255, 0.3);",
  "filter: glass(100%);",
  "box-shadow: frosted;",
  "opacity: glass;",
  "A", "Semi-transparent background + backdrop-filter blur + subtle light border creates the glassmorphic aesthetic.", 2);

addQ(14, "What does 'filter: grayscale(100%);' do?",
  "Inverts colors",
  "Converts the element/image completely into black and white (monochrome grayscale)",
  "Turns the image red",
  "Makes the image transparent",
  "B", "grayscale(100%) removes all color saturation, rendering pure black and white.", 1);

addQ(14, "What does 'filter: drop-shadow(0 4px 8px rgba(0,0,0,0.5));' do on a transparent PNG or SVG icon?",
  "Casts a rectangular shadow around the bounding box",
  "Casts a true contour shadow matching the exact non-transparent pixel silhouettes and shapes of the PNG/SVG graphic",
  "Draws a solid border",
  "Blurs the icon",
  "B", "filter: drop-shadow follows the actual alpha mask contours of transparent PNGs and SVGs.", 2);

addQ(14, "What does 'filter: hue-rotate(90deg);' do?",
  "Rotates the element physically by 90 degrees",
  "Shifts all color hues around the color wheel by 90 degrees (transforming blue to purple, green to yellow, etc.)",
  "Changes brightness",
  "Inverts black and white",
  "B", "hue-rotate() shifts color palette angles around the 360-degree color circle.", 2);

addQ(14, "What does 'filter: invert(100%);' achieve?",
  "Flips the element upside down",
  "Inverts all color values to their exact opposite mathematical complements (white becomes black, blue becomes orange, etc.)",
  "Makes the element transparent",
  "Hides borders",
  "B", "invert(100%) produces photo-negative color inversions.", 1);

addQ(14, "What does 'mix-blend-mode: multiply;' do in CSS?",
  "Multiplies font size by 2",
  "Blends the element's content colors with the colors of the underlying elements beneath it using the Multiply blend mode algorithm (darkening layers)",
  "Duplicates the element",
  "Creates a grid",
  "B", "mix-blend-mode composites overlapping DOM elements using Photoshop blending modes.", 2);

addQ(14, "What does 'background-blend-mode: overlay;' do on a container with both a background image and a background color?",
  "Blends the background image with the background color layer on the same element using the Overlay blending mode",
  "Deletes the background image",
  "Scales the image",
  "Converts image to SVG",
  "A", "background-blend-mode blends multiple background image and color layers on a single element.", 2);

addQ(14, "What does the modern CSS '@property' at-rule (Houdini API) allow developers to do?",
  "Register custom properties with explicit types (syntax: '<color>'), initial values, and inheritance flags, enabling CSS variables to be smoothly animated",
  "Create JavaScript classes",
  "Define database tables",
  "Optimize font files",
  "A", "@property registers typed CSS variables with the browser, allowing gradients and custom tokens to interpolate in transitions.", 3);

addQ(14, "What does 'isolation: isolate;' do in CSS blend mode and stacking context architectures?",
  "Disables internet connectivity for the element",
  "Creates a new stacking context that stops 'mix-blend-mode' from blending into elements outside this container",
  "Hides the element",
  "Removes margins",
  "B", "isolation: isolate traps blend modes within the container boundary.", 3);

addQ(14, "What does 'color-scheme: dark light;' declare in CSS?",
  "Enables dark mode only",
  "Informs the browser that the page supports both dark and light modes, enabling automatic theming of native browser scrollbars, form controls, and canvas",
  "Inverts colors",
  "Loads two stylesheets",
  "B", "color-scheme styles native browser scrollbars and inputs to match OS dark/light mode.", 2);

addQ(14, "What does 'scrollbar-gutter: stable;' prevent when dynamic content causes scrollbars to appear?",
  "Scrollbar from scrolling",
  "Prevents layout shift (content jumping sideways) by reserving dedicated gutter space for the vertical scrollbar even when it is not currently needed",
  "Hides the scrollbar",
  "Makes scrollbar rounded",
  "B", "scrollbar-gutter: stable eliminates annoying horizontal layout shifts when scrollbars toggle.", 2);

addQ(14, "What does 'scrollbar-width: thin;' and 'scrollbar-color: #3B82F6 transparent;' do in modern cross-browser CSS?",
  "Styles native browser scrollbars with custom colors and thickness without proprietary -webkit- scrollbar hacks",
  "Disables scrollbars",
  "Speeds up scrolling",
  "Adds scrollbar shadows",
  "A", "Standard CSS scrollbar properties style scrollbar thumbs cleanly across modern browsers.", 2);

addQ(14, "What does 'scroll-behavior: smooth;' do when users click anchor links to navigate page sections?",
  "Jumps instantly to the section",
  "Smoothly animates the scrolling viewport motion to the targeted section ID instead of jumping abruptly",
  "Disables mouse wheel",
  "Hides the page header",
  "B", "scroll-behavior: smooth provides native smooth page scrolling animations.", 1);

addQ(14, "What does 'scroll-snap-type: x mandatory;' do on a horizontal carousel slider?",
  "Disables horizontal scrolling",
  "Forces horizontal scroll containers to snap cleanly to designated child snap points whenever the user finishes scrolling or swiping",
  "Scrolls automatically every second",
  "Crops carousel cards",
  "B", "scroll-snap-type implements native touch carousels without JavaScript libraries.", 2);

addQ(14, "What property is placed on child items inside a snap container to define their alignment point?",
  "scroll-snap-align: center; (or start, end)",
  "snap-to: center;",
  "align-snap: center;",
  "carousel-align: center;",
  "A", "scroll-snap-align specifies where cards lock within the visible viewport.", 2);

addQ(14, "What does 'scroll-padding-top: 80px;' on the <html> root element fix for anchor link navigation?",
  "Adds a top margin to body",
  "Offsets the anchor scroll target position by 80px, preventing fixed/sticky headers from obscuring the top of the navigated section",
  "Slows scrolling",
  "Adds top border",
  "B", "scroll-padding accounts for sticky header height during URL anchor jumps.", 2);

addQ(14, "What does 'overscroll-behavior: contain;' prevent on mobile browsers?",
  "Screen zooming",
  "Prevents 'scroll chaining' and unwanted pull-to-refresh gestures when scrolling reaches the boundary of an inner modal dialog or dropdown",
  "Slow scrolling",
  "Horizontal overflow",
  "B", "overscroll-behavior: contain prevents inner modal scrolling from leaking into outer page scrolling.", 2);

addQ(14, "What does 'touch-action: pan-y;' do on mobile touchscreens?",
  "Disables all touch input",
  "Enables vertical single-finger scrolling (pan-y) while disabling pinch-zoom and horizontal swipe gestures on that element",
  "Enables double-tap zoom",
  "Inverts touch coordinates",
  "B", "touch-action optimizes mobile web apps and custom swipe components.", 2);

addQ(14, "What does 'image-rendering: pixelated;' do to small retro pixel art graphics when scaled up?",
  "Smooths and blurs pixels with bilinear interpolation",
  "Disables anti-aliasing smoothing, rendering crisp, sharp, blocky pixel edges (nearest-neighbor scaling)",
  "Converts image to SVG",
  "Removes image background",
  "B", "pixelated preserves sharp pixel art graphics without blurry interpolation.", 2);

addQ(14, "What does the CSS property 'caret-color: #3B82F6;' customize?",
  "The color of text selection",
  "The color of the blinking text insertion cursor inside editable inputs and textareas",
  "The mouse pointer color",
  "The border color",
  "B", "caret-color themes the blinking text input cursor.", 1);

addQ(14, "What does 'content-visibility: auto;' do for long, content-heavy web pages?",
  "Hides content permanently",
  "Skips rendering and layout calculations for off-screen elements until they approach the viewport, dramatically boosting initial page load and rendering performance",
  "Auto-translates text",
  "Creates table of contents",
  "B", "content-visibility: auto provides massive rendering speedups for long articles and feeds.", 3);

addQ(14, "What does 'contain-intrinsic-size' do when combined with 'content-visibility: auto;'?",
  "Forces images to 100px",
  "Provides an estimated placeholder height/width for unrendered off-screen elements, preventing scrollbar jumpiness as they scroll into view",
  "Removes borders",
  "Compresses HTML",
  "B", "contain-intrinsic-size reserves placeholder dimensions to maintain stable scrollbar sizing.", 3);

// -------------------------------------------------------------
// MODULE 15: CSS Architecture, Container Queries & Modern Layouts (30 Questions)
// -------------------------------------------------------------
addQ(15, "What is the key difference between a Media Query (@media) and a CSS Container Query (@container)?",
  "There is no difference",
  "Media Queries evaluate the dimensions of the entire BROWSER VIEWPORT; Container Queries evaluate the dimensions of an individual PARENT CONTAINER component",
  "Container queries only work on flexbox",
  "Media queries only work on mobile",
  "B", "Container queries allow components to adapt modularly based on their immediate container space.", 2);

addQ(15, "Which CSS property designates an element as a queryable container for Container Queries?",
  "container-type: inline-size; (or container: card / inline-size;)",
  "container: true;",
  "query-box: on;",
  "container-scope: local;",
  "A", "container-type: inline-size establishes a container context for width-based queries.", 2);

addQ(15, "What does '@container (min-width: 400px)' do to a component inside a defined container?",
  "Applies styles to the component when its parent container is at least 400px wide, regardless of total browser screen width",
  "Resizes the browser window",
  "Changes the screen resolution",
  "Applies styles to the entire page",
  "A", "Container queries style cards based on parent container width (e.g. sidebar vs main grid placement).", 2);

addQ(15, "What do the Container Query Units 'cqw' and 'cqh' represent in CSS?",
  "Container Quality Width / Height",
  "1% of the query container's width (cqw) and 1% of the query container's height (cqh)",
  "Cumulative Query Weight",
  "Character Quantity Width",
  "B", "cqw and cqh provide proportional fluid units relative to parent container dimensions.", 2);

addQ(15, "What is Native CSS Nesting (CSS Nesting Module)?",
  "A feature requiring Sass or SCSS preprocessors",
  "Standard browser capability to nest child CSS rules and pseudo-classes directly inside parent rule blocks using the '&' nesting selector natively",
  "Embedding HTML inside CSS",
  "Nesting HTML tags inside <div>",
  "B", "Native CSS Nesting enables hierarchical rule nesting directly in vanilla CSS without preprocessors.", 2);

addQ(15, "In Native CSS Nesting, what does the '&' (ampersand) symbol represent?",
  "A logical AND operator",
  "The Parent Selector, referring to the outer enclosing rule selector (e.g. '&:hover' or '&.active')",
  "An external link",
  "A string concatenation symbol",
  "B", "'&' references the parent selector in nested CSS rule blocks.", 1);

addQ(15, "What does the CSS '@layer' rule (Cascade Layers) solve in large-scale web architecture?",
  "Creates 3D graphics",
  "Provides explicit control over cascade priority and stylesheet layering order (e.g. @layer reset, base, components, utilities) independent of selector specificity",
  "Compresses CSS files",
  "Encrypts stylesheet rules",
  "B", "Cascade Layers (@layer) organize cascade hierarchy so utilities override components regardless of specificity.", 3);

addQ(15, "In Cascade Layers declared as '@layer base, components, utilities;', which layer has the highest precedence and wins conflicts?",
  "@layer base",
  "@layer utilities (the LAST declared layer in the cascade order has highest priority)",
  "@layer components",
  "The layer with the highest specificity",
  "B", "Layers listed later in layer order take precedence over earlier layers in normal declarations.", 3);

addQ(15, "What is BEM (Block, Element, Modifier) in CSS methodology?",
  "A CSS framework like Bootstrap",
  "A naming convention methodology (e.g. .card, .card__title, .card--featured) for writing modular, reusable, and collision-free CSS classes",
  "A browser rendering engine",
  "A CSS compressor",
  "B", "BEM (Block__Element--Modifier) structures clean, maintainable class architectures.", 2);

addQ(15, "In BEM naming conventions, what does two underscores '__' represent (e.g. '.card__header')?",
  "A Modifier variation",
  "An Element (a child part of the Block component)",
  "A global utility class",
  "An ID selector",
  "B", "Double underscore (__) designates an internal Element of a Block.", 1);

addQ(15, "In BEM naming conventions, what does two hyphens '--' represent (e.g. '.btn--primary')?",
  "An Element",
  "A Modifier (representing a variant, theme, or state of a Block or Element)",
  "A private class",
  "A deprecated class",
  "B", "Double hyphen (--) represents a Modifier state or style variation.", 1);

addQ(15, "What is Utility-First CSS architecture (such as Tailwind CSS or custom utility systems)?",
  "Writing thousands of lines of custom semantic CSS classes for every HTML element",
  "Composing UI designs directly in HTML using low-level, single-purpose utility classes (e.g. 'flex', 'p-4', 'text-center', 'rounded-lg')",
  "Using inline styles on every element",
  "Auto-generating CSS with AI",
  "B", "Utility-First CSS composes modular atomic classes directly in markup.", 1);

addQ(15, "What is 'Critical CSS' in web performance optimization?",
  "CSS code that has syntax errors",
  "The minimal set of CSS required to render the above-the-fold content of a page, inlined directly into HTML <head> to eliminate render-blocking stylesheet requests",
  "CSS for emergency pages",
  "A CSS linter tool",
  "B", "Inlining Critical CSS accelerates First Contentful Paint (FCP) and Largest Contentful Paint (LCP).", 3);

addQ(15, "What does 'PurgeCSS' or CSS Tree-Shaking do during a production build step?",
  "Deletes all HTML comments",
  "Scans HTML and JS templates to find and remove all unused CSS selectors and classes from the final compiled stylesheet bundle",
  "Compresses PNG images",
  "Validates CSS syntax",
  "B", "CSS Purging strips unused classes, drastically reducing stylesheet payload sizes.", 2);

addQ(15, "What does the '@scope' at-rule do in modern CSS?",
  "Changes browser window size",
  "Applies CSS styles strictly within a designated DOM subtree boundary, preventing styles from leaking out or penetrating beyond lower scope limits",
  "Scopes JavaScript variables",
  "Creates iframe sandboxes",
  "B", "@scope creates DOM boundary limits for style encapsulation without Shadow DOM.", 3);

addQ(15, "What is the 'Shadow DOM' and how does it achieve style encapsulation in Web Components?",
  "A dark mode simulator",
  "An isolated DOM subtree attached to an element where internal CSS styles are completely encapsulated and cannot leak out to or be affected by global page styles",
  "A 3D shadow generator",
  "A deprecated HTML feature",
  "B", "Shadow DOM creates sealed component boundaries with scoped CSS rules.", 3);

addQ(15, "What is the CSS pseudo-class ':host' used for inside Shadow DOM stylesheets?",
  "Styles the external web server",
  "Selects and styles the custom element host container that contains the shadow tree (e.g. ':host(:hover)')",
  "Styles the document root",
  "Styles the body",
  "B", ":host targets the custom element host from within Shadow DOM.", 3);

addQ(15, "What does the '::part()' pseudo-element allow external stylesheets to do to Shadow DOM components?",
  "Deletes the component",
  "Selects and styles specific exposed internal elements of a Shadow DOM component tagged with \\'part=\"...\"\\' without breaking encapsulation",
  "Inspects JavaScript variables",
  "Overrides all shadow styles forcefully",
  "B", "::part() exposes explicit customization hooks in encapsulated Web Components.", 3);

addQ(15, "What is 'CSS-in-JS' (e.g. Styled Components, Emotion) in modern frontend frameworks (React/Vue)?",
  "Writing raw HTML in CSS files",
  "A paradigm where component styles are authored directly within JavaScript/TypeScript code using tagged template literals, generating scoped classes dynamically",
  "Compiling CSS into WebAssembly",
  "Executing CSS in Node.js",
  "B", "CSS-in-JS co-locates styles with components in JS/TS ecosystems.", 2);

addQ(15, "What are 'CSS Modules' (e.g. 'Button.module.css')?",
  "Browser plugins",
  "CSS files where all class names are automatically scoped locally by compilation tooling (generating unique hashes like 'Button_btn__a8f3d') to prevent global class collisions",
  "Standard global stylesheets",
  "JavaScript libraries",
  "B", "CSS Modules scope class names locally by compiling unique hashed class identifiers.", 2);

addQ(15, "What does the 'page-break-inside: avoid;' (or 'break-inside: avoid;') property do in print stylesheets?",
  "Avoids printing images",
  "Prevents a table, card, or chart from being split/severed across two separate printed pages",
  "Deletes page numbers",
  "Forces double-sided printing",
  "B", "break-inside: avoid prevents awkward pagination splits through cards or tables in print output.", 2);

addQ(15, "What does 'break-before: page;' do in print styling?",
  "Cancels the print job",
  "Forces a clean page break before the element, ensuring it begins at the top of a new printed sheet",
  "Prints the page in landscape",
  "Inverts printer colors",
  "B", "break-before: page starts major headings and chapters on fresh print pages.", 2);

addQ(15, "What is 'CSS Specificity Wars' and how do modern architectures solve it?",
  "A video game about CSS",
  "A code maintainability anti-pattern where developers endlessly chain IDs, classes, and !important to override styles; solved by BEM, Utility-First, or @layer cascades",
  "A browser performance competition",
  "A font compatibility issue",
  "B", "Specificity wars are mitigated by low-specificity architectures (BEM, Cascade Layers).", 2);

addQ(15, "What does '@media (forced-colors: active)' detect (Windows High Contrast Mode)?",
  "Gaming monitors with RGB lighting",
  "Whether the operating system has enabled Forced Colors / High Contrast mode, restricting colors to a limited user-defined palette",
  "Broken graphics cards",
  "OLED battery saver mode",
  "B", "forced-colors: active ensures critical borders and icons remain visible in system high contrast modes.", 3);

addQ(15, "What does 'text-wrap: balance;' do in modern CSS typography?",
  "Centers all text",
  "Automatically balances the number of words on each line of headlines and titles, preventing unsightly lone single-word dangling lines ('orphans/widows')",
  "Justifies text across paragraphs",
  "Hyphenates all words",
  "B", "text-wrap: balance creates harmonious, aesthetically balanced multi-line headings.", 2);

addQ(15, "What does 'text-wrap: pretty;' do?",
  "Adds decorative rainbow colors to text",
  "Optimizes line-breaking algorithms to eliminate typographical orphan words on the final line of body paragraphs",
  "Underlines pretty words",
  "Makes fonts italic",
  "B", "text-wrap: pretty prevents solitary orphan words on trailing paragraph lines.", 2);

addQ(15, "What does the ':dir(rtl)' pseudo-class do in internationalized multi-lingual layouts?",
  "Deletes RTL text",
  "Matches and styles elements whose text direction is explicitly Right-to-Left (e.g. Arabic, Hebrew) without requiring manual class toggles",
  "Translates text to English",
  "Rotates text 180 degrees",
  "B", ":dir(rtl) styles directionality dynamically based on document language semantics.", 2);

addQ(15, "What does 'font-synthesis: none;' prevent the browser from doing?",
  "Loading web fonts",
  "Synthesizing fake, artificially skewed bold or italic versions of a font when the true bold/italic font weights are missing from the downloaded font family",
  "Rendering emoji characters",
  "Scaling font sizes",
  "B", "font-synthesis: none disables ugly browser-generated fake bold/italic typefaces.", 3);

addQ(15, "What is the 'Golden Rule' of modern maintainable CSS architecture?",
  "Use !important on every single rule",
  "Keep specificity as low and flat as possible, design mobile-first with relative units, embrace the cascade, and compose reusable design tokens",
  "Write all styles as inline HTML attributes",
  "Avoid using classes",
  "B", "Flat specificity, modular tokens, and semantic layout systems guarantee long-term codebase maintainability.", 1);

addQ(15, "What does 'light-dark(#ffffff, #121212)' function do in CSS Color Module Level 5?",
  "Flashing strobe light effect",
  "Returns the first color in Light mode and the second color in Dark mode automatically based on the active 'color-scheme' context",
  "Calculates average brightness",
  "Blends black and white",
  "B", "light-dark(lightColor, darkColor) automatically yields the proper color according to color-scheme.", 2);

console.log("Total generated questions:", questions.length);

const packManifest = {
  packId: "css3_fundamentals",
  name: "CSS3 & Modern Stylesheets",
  subject: "Web Development",
  icon: "style",
  color: "#2563EB",
  version: 1,
  modules: modules,
  questions: questions
};

const outputPath = path.join(__dirname, 'assets', 'packs', 'pack_css.json');
fs.writeFileSync(outputPath, JSON.stringify(packManifest, null, 2), 'utf8');
console.log("Wrote full 450-question CSS3 pack to " + outputPath + " successfully!");
