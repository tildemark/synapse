// Append Modules 11 to 15 to generate_css_450.js (150 questions, total 450 Qs)
const fs = require('fs');

let fileContent = fs.readFileSync('c:/code/synapse/generate_css_450.js', 'utf8');

const modules11to15 = `
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
  "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">",
  "<meta name=\"screen\" content=\"mobile\">",
  "<meta name=\"responsive\" content=\"true\">",
  "<meta name=\"width\" content=\"100%\">",
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
  "viewport-fit=cover (e.g. <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, viewport-fit=cover\">)",
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
  "Art direction and format switching (serving WebP/AVIF to modern browsers and cropped square images to mobile screens via <source media=\"...\">)",
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
  "Selects and styles specific exposed internal elements of a Shadow DOM component tagged with 'part=\"...\"' without breaking encapsulation",
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
`;

fs.writeFileSync('c:/code/synapse/generate_css_450.js', fileContent + modules11to15);
console.log("Modules 11-15 appended and completed!");
