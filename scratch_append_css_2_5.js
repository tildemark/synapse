// Append Modules 2 to 5 to generate_css_450.js (120 questions total)
const fs = require('fs');

let fileContent = fs.readFileSync('c:/code/synapse/generate_css_450.js', 'utf8');

// Remove bottom export
const footerIdx = fileContent.indexOf('const outputPath = path.join');
if (footerIdx !== -1) {
  fileContent = fileContent.substring(0, footerIdx);
}

const modules2to5 = `
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

`;

fs.writeFileSync('c:/code/synapse/generate_css_450.js', fileContent + modules2to5);
console.log("Modules 2-5 appended!");
