// Append Modules 6 to 10 to generate_css_450.js (150 questions)
const fs = require('fs');

let fileContent = fs.readFileSync('c:/code/synapse/generate_css_450.js', 'utf8');

const modules6to10 = `
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

addQ(7, "What does the attribute selector '[class~=\"btn\"]' match?",
  "Classes starting with 'btn'",
  "Elements with a class attribute containing the exact word 'btn' in a whitespace-separated list",
  "Classes ending in 'btn'",
  "Any class with the letters b-t-n",
  "B", "[attr~='val'] matches whole words in whitespace-separated token lists.", 2);

addQ(7, "What does the attribute selector '[lang|=\"en\"]' match?",
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

addQ(7, "What does the 's' flag in an attribute selector (e.g. '[title*=\"Logo\" s]') enforce?",
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

addQ(7, "What does the selector 'div[data-status=\"active\"]' target?",
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

addQ(7, "What does the compound selector 'input[type=\"checkbox\"]:checked' select?",
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

addQ(7, "Can multiple attribute selectors be chained together on a single element (e.g. 'input[type=\"text\"][readonly]')?",
  "No, only one attribute selector is allowed",
  "Yes, and the element must satisfy ALL chained attribute conditions simultaneously",
  "Only in Sass / SCSS",
  "Only for links",
  "B", "Chained attribute selectors enforce multiple simultaneous attribute constraints.", 2);

addQ(7, "What does 'a[href^=\"mailto:\"]' target in web styling?",
  "Web links to websites",
  "Email hyperlink mailto: URLs",
  "Telephone links",
  "FTP download links",
  "B", "Targets email hyperlinks (mailto:).", 1);

addQ(7, "What does 'a[href^=\"tel:\"]' target?",
  "Telephone call hyperlinks",
  "Television links",
  "Telegram links",
  "Text messages",
  "A", "Targets mobile clickable telephone dialing URLs (tel:).", 1);

addQ(7, "What does 'input[type=\"radio\"] + label' commonly style in custom UI components?",
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
  "Name specific visual regions of the grid layout using visual string ascii-art layouts (e.g. \"header header\" \"sidebar main\")",
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

addQ(10, "What does the '.' (period) token represent inside a 'grid-template-areas' declaration (e.g. '\"header header\" \". main\"')?",
  "A period punctuation mark",
  "An empty, unnamed cell slot in the grid template where no item is placed",
  "A full stop",
  "A hidden row",
  "B", "A dot (.) in template areas creates deliberate empty spacer cells in the grid map.", 2);

`;

fs.writeFileSync('c:/code/synapse/generate_css_450.js', fileContent + modules6to10);
console.log("Modules 6-10 appended!");
