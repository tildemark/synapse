// Modules 4 to 15 Builder for 300 Questions
const fs = require('fs');

let fileContent = fs.readFileSync('c:/code/synapse/generate_lto_300.js', 'utf8');

const modules4to6 = `
// -------------------------------------------------------------
// MODULE 4: Warning Signs: Curves, Bends & Alignments (20 Questions)
// -------------------------------------------------------------
addQ(4, "What does an equilateral triangular warning sign with an arrow curving to the left warn the driver about?",
  "Compulsory left turn ahead",
  "Sharp left curve / bend ahead",
  "One-way street entering from left",
  "Left lane closure",
  "B", "Triangular signs with red borders are Warning Signs. An arrow bending left warns of a sharp left curve ahead requiring speed reduction.", 1,
  "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><polygon points='50,8 92,88 8,88' fill='white' stroke='%23DC2626' stroke-width='7'/><path d='M62 72 Q62 46 45 42 L45 32 L26 48 L45 64 L45 54 Q52 56 52 72 Z' fill='%23111827'/></svg>");

addQ(4, "What does a triangular warning sign with an arrow curving to the right indicate?",
  "Sharp right curve / bend ahead",
  "Compulsory right turn",
  "Right shoulder parking only",
  "Merge right",
  "A", "Warns of a sharp curve to the right ahead, requiring motorists to slow down before entering the curve.", 1);

addQ(4, "What does a triangular warning sign depicting a reverse double curve (zigzag arrow turning left then right) signify?",
  "Reverse Curve ahead (first to the left, then to the right)",
  "Roundabout ahead",
  "Slippery road when wet",
  "Traffic diversion ahead",
  "A", "This sign warns drivers of a reverse curve ahead where the road bends first to the left and then closely to the right.", 2,
  "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><polygon points='50,8 92,88 8,88' fill='white' stroke='%23DC2626' stroke-width='7'/><path d='M58 72 L58 60 Q58 52 48 52 Q38 52 38 42 L38 34 L26 44 L38 54 L38 48 Q44 48 48 58 L48 72 Z' fill='%23111827'/></svg>");

addQ(4, "What does a triangular warning sign depicting a reverse double curve turning first to the right then to the left signify?",
  "Reverse Curve ahead (first to the right, then to the left)",
  "Zigzag pedestrian crossing",
  "Narrow bridge ahead",
  "Side road to right",
  "A", "Warns of double bends where the road curves first to the right and subsequently to the left.", 2);

addQ(4, "What does a triangular warning sign showing an arrow that loops back 180 degrees to the left (Hairpin Bend) indicate?",
  "U-turn slot ahead",
  "Hairpin curve to the left (extremely sharp 180° bend) ahead",
  "Dead end road",
  "Roundabout entry",
  "B", "The Hairpin Curve sign warns of an exceptionally sharp turn (common on mountain roads) requiring substantial braking and gear downshifting.", 2,
  "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><polygon points='50,8 92,88 8,88' fill='white' stroke='%23DC2626' stroke-width='7'/><path d='M62 74 L62 48 Q62 28 50 28 Q38 28 38 48 L38 56 L26 56 L44 76 L62 56 L50 56 L50 48 Q50 38 50 38 Q52 38 52 48 L52 74 Z' fill='%23111827'/></svg>");

addQ(4, "What does a triangular warning sign showing a Hairpin Bend looping back 180 degrees to the right indicate?",
  "Hairpin curve to the right ahead",
  "Right turn only",
  "Expressway interchange loop",
  "Truck turning bay",
  "A", "Warns of an extreme 180-degree hairpin turn to the right ahead.", 2);

addQ(4, "What does a triangular sign showing a serpentine winding road symbol advise drivers to do?",
  "Expect a series of continuous winding curves ahead",
  "Watch out for crossing reptiles and wildlife",
  "Road covered with loose gravel",
  "Road under ongoing construction",
  "A", "The Winding Road sign warns of a series of three or more consecutive curves ahead, advising drivers not to overtake and to reduce driving speed.", 1,
  "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><polygon points='50,8 92,88 8,88' fill='white' stroke='%23DC2626' stroke-width='7'/><path d='M46 74 L46 64 Q46 56 54 56 Q62 56 62 46 Q62 38 50 34 L50 26 L38 38 L50 48 L50 42 Q54 44 54 48 Q54 50 48 50 Q38 50 38 62 L38 74 Z' fill='%23111827'/></svg>");

addQ(4, "When driving around sharp curves on two-lane mountain roads in the Philippines, which practice is essential?",
  "Overtake slow trucks before entering the curve",
  "Stay strictly in your lane, sound your horn near blind curves, and do not cross the center line",
  "Shift to neutral gear to conserve fuel",
  "Turn on hazard warning flashers while driving at high speed",
  "B", "On blind mountain curves, crossing the center line or overtaking is extremely hazardous. Stay in your lane and sound your horn during daytime to alert oncoming traffic.", 2);

addQ(4, "What do rectangular black-and-white (or yellow-and-black) Chevron alignment signs positioned around the outside of a sharp bend indicate?",
  "The sharp edge and directional flow of the curve requiring continuous steering guidance",
  "Pedestrian crossing markings",
  "Distance to nearest petrol station",
  "Parking spaces",
  "A", "Chevron alignment markers guide the driver's visual path around hazardous sharp bends.", 2);

addQ(4, "What dangerous centrifugal effect occurs when a vehicle enters a curve at excessive speed?",
  "Understeer or rollover as inertia pushes the vehicle outwards away from the curve",
  "Sudden engine stalling",
  "Brake fluid vaporization",
  "Battery discharge",
  "A", "Excess speed around bends creates centrifugal forces that overcome tire friction, causing dangerous outward skidding (understeer) or rollovers.", 2);

addQ(4, "What is the proper technique for braking when negotiating a sharp highway curve?",
  "Brake firmly while in the middle of the turn",
  "Brake and reduce speed in a straight line BEFORE entering the curve, then gently accelerate through the apex",
  "Never use brakes; pull the handbrake instead",
  "Accelerate heavily into the entrance of the bend",
  "B", "Braking mid-corner destabilizes vehicle balance and can trigger a spin. Always complete braking before turning the steering wheel.", 2);

addQ(4, "Why should drivers NOT depress the clutch pedal or coast in Neutral while navigating mountain curves?",
  "It disconnects engine braking, leaving the vehicle entirely reliant on friction brakes which can overheat and fade",
  "It will crack the radiator",
  "It drains the car battery",
  "It causes transmission fluid to freeze",
  "A", "Coasting in neutral robs you of engine resistance, causing runaway acceleration on downhill curves and severe brake fade.", 2);

addQ(4, "What does a triangular warning sign with a right-angle (90-degree) sharp bend symbol signify?",
  "Sharp right-angle turn ahead requiring almost complete deceleration",
  "Square intersection",
  "Parking bay entrance",
  "One way side road",
  "A", "Warns of a sudden 90-degree sharp bend that cannot be negotiated at standard cruising speeds.", 2);

addQ(4, "What does an advisory speed plate (e.g. '30 km/h') mounted directly below a curve warning sign mean?",
  "Mandatory minimum speed",
  "Recommended safe maximum speed for negotiating that specific curve under dry conditions",
  "Speed limit on straight road",
  "Toll rate ahead",
  "B", "Advisory speed plates provide recommended safe speeds specifically calibrated for that curve's geometry.", 1);

addQ(4, "What should a driver do if they encounter gravel or sand scattered across a sharp curve?",
  "Slam the brakes immediately",
  "Slow down gently before the patch, hold a steady steering angle, and avoid sudden throttle or braking inputs",
  "Accelerate rapidly to jump over the gravel",
  "Turn the steering wheel back and forth rapidly",
  "B", "Loose gravel drastically reduces tire friction. Sudden steering or braking inputs will cause total loss of lateral grip.", 2);

addQ(4, "What does a triangular sign showing a car skidding with wavy tire marks mean?",
  "Slippery road surface ahead (especially when wet or muddy)",
  "Drag strip ahead",
  "Tire testing facility",
  "Car wash station",
  "A", "Warns that road surface has low friction coefficient and becomes exceptionally slick during rain or oil spills.", 1);

addQ(4, "Why is the road surface most slippery during the first 10 to 15 minutes of light rainfall?",
  "Rainwater mixes with accumulated engine oil, grease, and road grime to form a slick emulsion before being washed away",
  "Tires get colder immediately",
  "Brakes become non-functional in rain",
  "Asphalt dissolves in water",
  "A", "The initial minutes of rain loosen surface oils into a greasy film before heavy downpours can wash the residue away.", 2);

addQ(4, "What does a triangular warning sign depicting a car driving off a quay or riverbank into water indicate?",
  "Opening bridge ahead",
  "Unprotected riverbank, canal, or quayside ahead",
  "Ferry terminal entrance",
  "Flood zone",
  "B", "Warns that the road terminates at or runs adjacent to open water without protective barrier walls.", 2);

addQ(4, "When approaching a blind curve where visibility is restricted by rock faces or foliage, at what distance should you anticipate oncoming hazards?",
  "Only when you see their headlights 5 meters away",
  "Assume an oncoming vehicle may be encroaching on your lane and position yourself toward the outer right edge of your lane",
  "Drive along the center line",
  "Close your eyes and honk",
  "B", "Defensive driving dictates hugging the safe right portion of your lane on blind curves to avoid head-on collisions.", 2);

addQ(4, "What should you do if an oncoming vehicle crosses the center line and drifts into your lane on a curve?",
  "Flash high beams, honk horn, brake smoothly, and steer toward the right shoulder/escape path",
  "Steer directly into oncoming traffic",
  "Speed up to pass them",
  "Pull the handbrake instantly",
  "A", "Always evade to the right shoulder to prevent a catastrophic head-on crash.", 2);

// -------------------------------------------------------------
// MODULE 5: Warning Signs: Intersections, Merges & Junctions (20 Questions)
// -------------------------------------------------------------
addQ(5, "What does a triangular sign displaying a bold black plus symbol (+) warn of?",
  "Hospital or first aid station ahead",
  "Four-way crossroad intersection ahead",
  "Toll plaza ahead",
  "Pedestrian crosswalk ahead",
  "B", "A black cross inside a triangular warning sign warns drivers of a 4-way crossroad intersection ahead, requiring vigilance for crossing vehicles.", 1,
  "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><polygon points='50,8 92,88 8,88' fill='white' stroke='%23DC2626' stroke-width='7'/><rect x='45' y='32' width='10' height='44' fill='%23111827'/><rect x='28' y='49' width='44' height='10' fill='%23111827'/></svg>");

addQ(5, "What does a triangular sign showing a bold black 'T' symbol indicate?",
  "T-Junction ahead where the road terminates and you must turn left or right",
  "Truck stop ahead",
  "Telephone emergency booth",
  "Two-way traffic beginning ahead",
  "A", "A T-junction sign indicates that the road you are traveling on ends ahead at a perpendicular intersecting highway where you must turn left or right.", 1,
  "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><polygon points='50,8 92,88 8,88' fill='white' stroke='%23DC2626' stroke-width='7'/><rect x='45' y='42' width='10' height='36' fill='%23111827'/><rect x='26' y='34' width='48' height='10' fill='%23111827'/></svg>");

addQ(5, "What does a triangular sign showing a black 'Y' symbol warn about?",
  "Y-Junction ahead where the road forks into two branches",
  "Yield the right of way",
  "Railway crossing",
  "Road divider ahead",
  "A", "The Y-junction sign warns that the single roadway divides ahead into two separate branches forming a Y-shape fork.", 1,
  "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><polygon points='50,8 92,88 8,88' fill='white' stroke='%23DC2626' stroke-width='7'/><path d='M45 74 L45 54 L30 36 L39 30 L50 44 L61 30 L70 36 L55 54 L55 74 Z' fill='%23111827'/></svg>");

addQ(5, "What does a triangular warning sign displaying a thick vertical line with a thinner line joining at a 45-degree angle from the right warn of?",
  "Merging traffic entering from the right ahead",
  "Right turn only",
  "Dual carriageway ends",
  "Expressway exit only",
  "A", "This sign warns drivers on a major road that side traffic is merging from the right ramp/side street ahead at an angle.", 2,
  "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><polygon points='50,8 92,88 8,88' fill='white' stroke='%23DC2626' stroke-width='7'/><rect x='42' y='30' width='10' height='48' fill='%23111827'/><path d='M68 62 L50 46 L50 56 L62 68 Z' fill='%23111827'/></svg>");

addQ(5, "When entering a multi-lane roundabout (rotonda) in the Philippines, which vehicle has the primary right-of-way?",
  "The vehicle entering the roundabout at highest speed",
  "Vehicles already navigating inside the circulatory roadway",
  "Public utility jeepneys and buses regardless of position",
  "The vehicle approaching from the leftmost entry lane",
  "B", "Under standard Philippine traffic law and international conventions, vehicles already inside the roundabout circulatory roadway have right-of-way over vehicles entering.", 2);

addQ(5, "What does a triangular sign showing a vertical line with a perpendicular side road entering from the right indicate?",
  "Side road intersection on the right ahead",
  "Compulsory right turn",
  "Right lane ending",
  "One way road to the right",
  "A", "Warns drivers that vehicles may enter or turn from a side road joining on the right.", 1);

addQ(5, "What does a triangular sign showing a vertical line with a perpendicular side road entering from the left indicate?",
  "Side road intersection on the left ahead",
  "No left turn",
  "Divided road begins",
  "Left lane ending",
  "A", "Warns of a side junction on the left where vehicles may turn into or emerge onto the main thoroughfare.", 1);

addQ(5, "What does a triangular sign showing two staggered side roads (one left, then one right closely following) warn of?",
  "Staggered side road junctions ahead",
  "Zebra crossing ahead",
  "Winding road",
  "Dual carriageway",
  "A", "Warns of two closely spaced consecutive side junctions occurring on opposite sides of the main highway.", 2);

addQ(5, "What does a triangular warning sign with three arrows forming a circle (Roundabout Warning) indicate?",
  "Roundabout / Rotonda junction ahead; prepare to yield to circulating traffic",
  "U-turn slot ahead",
  "Winding mountain road",
  "Dead end ahead",
  "A", "Warns of an approaching circular intersection where traffic flows counter-clockwise and entry requires yielding.", 1);

addQ(5, "When planning to take the first exit (turning right) at a multi-lane roundabout, which lane should you approach and enter from?",
  "The leftmost lane",
  "The rightmost lane, signaling right as you approach and navigate",
  "Any lane randomly",
  "The center median",
  "B", "To take the first exit to the right, enter in the right-hand lane and keep to the outer circulatory lane with your right turn signal on.", 2);

addQ(5, "When planning to take the third exit (turning left or making a 3/4 loop) at a roundabout, which lane should you enter from?",
  "The rightmost lane",
  "The leftmost (inner) lane, signaling left on entry and right before your intended exit",
  "The shoulder",
  "Reverse gear",
  "B", "For left turns or 270-degree loops in a roundabout, enter from the inside left lane, moving to the outside only after passing the exit preceding yours.", 2);

addQ(5, "What does a triangular sign showing an arrow pointing straight with a side ramp merging from the left indicate?",
  "Merging traffic from the left side ahead",
  "Left turn mandatory",
  "Left lane closed",
  "Narrow bridge on left",
  "A", "Warns that traffic from an on-ramp or side street will merge into the main stream from the left.", 2);

addQ(5, "What should a driver on an expressway acceleration lane do when preparing to merge onto the main highway?",
  "Stop dead at the start of the acceleration lane",
  "Match the cruising speed of expressway traffic, check mirrors and blind spots, signal, and merge smoothly into an open gap",
  "Honk loudly and force expressway cars to brake",
  "Drive across all lanes directly into the fast lane",
  "B", "Acceleration lanes allow you to attain highway cruising speed so you merge seamlessly without interrupting moving traffic.", 2);

addQ(5, "What does a triangular warning sign depicting two parallel lines with an obstruction starting in the middle indicate?",
  "Dual Carriageway (Divided Highway) Begins ahead",
  "Road closed ahead",
  "Narrow bridge",
  "Tunnel entrance",
  "A", "Warns that the undivided two-way road will divide ahead into a dual carriageway separated by a physical median island.", 1);

addQ(5, "What does a triangular warning sign depicting a median island ending and traffic flowing onto a single undivided road indicate?",
  "Dual Carriageway (Divided Highway) Ends ahead; two-way traffic resumes",
  "Divided road begins",
  "One way street begins",
  "Expressway toll gate ahead",
  "A", "Warns drivers that the physical median is ending and oncoming opposing traffic will share the continuous pavement.", 1);

addQ(5, "What does a triangular warning sign showing two vertical arrows pointing in opposite directions indicate?",
  "Two-Way Traffic flow ahead on the same roadway",
  "One-way street only",
  "Dual highway begins",
  "No overtaking zone",
  "A", "Warns drivers leaving a one-way street or divided section that opposing oncoming vehicles will now be present on the same carriageway.", 1);

addQ(5, "What does a triangular warning sign showing two horizontal arrows pointing in opposite directions across a road indicate?",
  "Two-way cross traffic ahead at the upcoming junction",
  "No left turn",
  "No right turn",
  "Expressway overpass",
  "A", "Warns that cross traffic on the intersecting street moves in both directions.", 2);

addQ(5, "What is the primary danger when approaching an uncontrolled intersection (an intersection without signals or stop signs)?",
  "Traffic lights are changing too quickly",
  "Cross traffic may enter the intersection without slowing down or yielding",
  "Tire pressure may drop",
  "Speed cameras are active",
  "B", "Uncontrolled junctions lack automated signals, requiring extreme defensive caution and covering the brake pedal.", 1);

addQ(5, "What does 'covering the brake' mean when approaching a busy intersection?",
  "Pressing the brake pedal with maximum force",
  "Hovering your right foot directly over the brake pedal without depressing it, ready for immediate reaction",
  "Pulling the emergency handbrake",
  "Pumping the brake pedal repeatedly",
  "B", "Covering the brake eliminates reaction delay (perception-to-foot movement), shaving critical meters off stopping distance in emergencies.", 1);

addQ(5, "Under standard defensive driving guidelines, if an intersection is congested and your vehicle cannot cross completely without stopping inside it, what must you do?",
  "Enter the intersection anyway and wait in the middle",
  "Wait behind the stop line until there is sufficient clear space on the other side to completely exit the junction",
  "Honk repeatedly and push forward",
  "Turn onto the sidewalk",
  "B", "Entering an intersection when the exit is blocked causes 'box blocking' and paralyzes cross traffic.", 1);

// -------------------------------------------------------------
// MODULE 6: Warning Signs: Road Width, Hills & Physical Hazards (20 Questions)
// -------------------------------------------------------------
addQ(6, "What does a triangular warning sign depicting road lines narrowing inward from both sides warn about?",
  "Road Narrows ahead on both sides",
  "Narrow Bridge ahead",
  "Tunnel entrance ahead",
  "Dual carriageway begins",
  "A", "The Road Narrows sign warns that the width of the carriageway is reducing from both sides, requiring drivers to merge smoothly and reduce speed.", 1,
  "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><polygon points='50,8 92,88 8,88' fill='white' stroke='%23DC2626' stroke-width='7'/><path d='M32 74 L32 58 L42 42 L42 30 L36 30 L36 40 L26 56 L26 74 Z' fill='%23111827'/><path d='M68 74 L68 58 L58 42 L58 30 L64 30 L64 40 L74 56 L74 74 Z' fill='%23111827'/></svg>");

addQ(6, "What does a triangular warning sign depicting a road narrowing on the Left side only mean?",
  "Road Narrows on the Left side ahead (left lane ends)",
  "No left turn",
  "Left shoulder soft",
  "Bridge on left",
  "A", "Warns that the left lane or carriageway shoulder is tapering inward, requiring vehicles on the left to merge right.", 1);

addQ(6, "What does a triangular warning sign depicting a road narrowing on the Right side only mean?",
  "Road Narrows on the Right side ahead (right lane ends)",
  "No right turn",
  "Right shoulder parking",
  "Bridge on right",
  "A", "Warns that the right side of the carriageway narrows, requiring right-lane traffic to merge smoothly to the left.", 1);

addQ(6, "What does a triangular warning sign depicting a car silhouette driving down a steep slope with a percentage (e.g. '10%') indicate?",
  "Steep Hill Descent (downhill slope) ahead",
  "Steep Hill Ascent ahead",
  "Speed bump ahead",
  "Fallen rocks ahead",
  "A", "The Steep Descent sign warns of a dangerous downward slope ahead. Drivers should shift to a lower gear to use engine braking and avoid brake fade.", 2,
  "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><polygon points='50,8 92,88 8,88' fill='white' stroke='%23DC2626' stroke-width='7'/><polygon points='26,72 74,72 74,44' fill='%23111827'/><rect x='34' y='46' width='16' height='10' rx='2' transform='rotate(-22 34 46)' fill='%23111827'/></svg>");

addQ(6, "What does a triangular warning sign depicting a car silhouette driving up a steep slope with a percentage indicate?",
  "Steep Hill Ascent (uphill slope) ahead",
  "Steep descent",
  "Flyover ahead",
  "Mountain peak viewpoint",
  "A", "Warns of a steep upward climb ahead where vehicles may lose momentum and require downshifting.", 2);

addQ(6, "What does a triangular warning sign depicting two curved humps in the road surface warn drivers of?",
  "Uneven or Bumpy Road surface ahead",
  "Pedestrian crosswalk",
  "Single speed hump ahead",
  "Flood prone area",
  "A", "The Uneven Road sign warns of bumps, dips, or irregular road surface ahead that could compromise vehicle stability at higher speeds.", 1,
  "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><polygon points='50,8 92,88 8,88' fill='white' stroke='%23DC2626' stroke-width='7'/><path d='M26 66 L34 66 Q40 50 46 66 Q52 50 58 66 L74 66 L74 72 L26 72 Z' fill='%23111827'/></svg>");

addQ(6, "What does a triangular warning sign depicting a single raised convex hump in the road surface indicate?",
  "Speed Hump / Speed Table ahead",
  "Bridge overpass",
  "Underpass",
  "Landslide area",
  "A", "Warns of an artificial raised speed control hump designed to enforce low speeds in residential or pedestrian areas.", 1);

addQ(6, "What does a triangular warning sign depicting a concave depression or dip in the road surface warn of?",
  "Dip / Low Ground (Canal crossing or floodway dip) ahead",
  "Speed bump",
  "Trench construction",
  "Tunnel",
  "A", "Warns of a sudden downward dip in the road profile where vehicles traveling fast can bottom out or scrape bumpers.", 1);

addQ(6, "What does a triangular warning sign depicting rocks falling down a slope warn motorists about?",
  "Falling or Fallen Rocks hazard ahead",
  "Quarry entrance ahead",
  "Loose gravel on road surface",
  "Landfill area ahead",
  "A", "The Falling Rocks sign warns that landslides or rockfalls may occur on that mountain section, and debris may be obstructing the lane.", 1,
  "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><polygon points='50,8 92,88 8,88' fill='white' stroke='%23DC2626' stroke-width='7'/><polygon points='26,74 26,38 48,74' fill='%23111827'/><circle cx='58' cy='52' r='4' fill='%23111827'/><circle cx='66' cy='62' r='5' fill='%23111827'/><circle cx='54' cy='66' r='3' fill='%23111827'/></svg>");

addQ(6, "What dangerous phenomenon occurs when tires ride on a thin film of water rather than contacting the road surface during heavy rain?",
  "Engine vapor lock",
  "Hydroplaning (aquaplaning)",
  "Brake pad crystallization",
  "Differential binding",
  "B", "Hydroplaning occurs when water builds up under tires faster than tire treads can channel it away, causing total loss of steering and braking control.", 2);

addQ(6, "What should you do immediately if your vehicle begins to hydroplane on standing water?",
  "Slam on the brakes and jerk the steering wheel",
  "Ease your foot off the accelerator smoothly, keep steering straight, and do not brake until tires regain asphalt contact",
  "Pull the emergency handbrake instantly",
  "Shift into reverse gear",
  "B", "Abrupt braking or turning while hydroplaning induces severe skidding. Allow deceleration to let tires sink through water film.", 2);

addQ(6, "What does a triangular warning sign depicting a Narrow Bridge indicate?",
  "Narrow Bridge ahead where road width contracts (may require alternating one-way passage)",
  "Bridge closed",
  "Toll bridge ahead",
  "Weighbridge ahead",
  "A", "Warns that the upcoming bridge is narrower than the approaching carriageway.", 1);

addQ(6, "What does a triangular warning sign depicting an Opening or Drawbridge indicate?",
  "Opening / Movable Drawbridge ahead; prepare to stop if red signals or barrier gates activate",
  "Narrow bridge",
  "Ferry terminal",
  "Bridge under reconstruction",
  "A", "Warns that the bridge spans navigable waters and can be raised, halting all vehicular road traffic.", 2);

addQ(6, "What does a triangular warning sign depicting loose stones / gravel flying from tires indicate?",
  "Loose Gravel or Chippings on road surface ahead; reduce speed and increase following distance",
  "Quarry nearby",
  "Car wash zone",
  "Landslide area",
  "A", "Warns that newly surfaced gravel can fly up and shatter windshields or cause sudden loss of motorcycle traction.", 1);

addQ(6, "What does a triangular warning sign showing a person digging with a shovel warn of?",
  "Road Works / Construction / Maintenance ahead",
  "Archaeological site",
  "Gardening zone",
  "Quarry excavation",
  "A", "Warns of road crews, machinery, open trenches, or altered lane alignments ahead requiring reduced speed.", 1);

addQ(6, "What does a triangular warning sign depicting a low-flying airplane silhouette warn of?",
  "Airport runway nearby with Low-Flying Aircraft, sudden loud jet noise, and crosswinds",
  "Drone testing area",
  "Helicopter landing pad",
  "Airforce base restricted zone",
  "A", "Warns motorists driving adjacent to airport runways of startling aircraft noise and low flight paths.", 2);

addQ(6, "What does a triangular warning sign showing a windsock silhouette indicate?",
  "Severe Crosswinds / Strong Gusts hazard (open bridges, coastal causeways, mountain gaps)",
  "Weather forecasting station",
  "Paragliding zone",
  "Wind turbine farm",
  "A", "Warns of sudden lateral wind gusts that can destabilize high-profile vans, trucks, and motorcycles.", 2);

addQ(6, "What does a triangular warning sign displaying a large black exclamation point (!) warn of?",
  "General Danger / Unspecified Hazard ahead; proceed with heightened caution",
  "Police checkpoint",
  "Toll plaza",
  "End of expressway",
  "A", "Warns of hazard conditions not covered by standard pictorial symbols, usually accompanied by an explanatory sub-plate.", 1);

addQ(6, "What does a triangular warning sign depicting a vehicle driving on a soft or sunken shoulder warn of?",
  "Soft / Unstabilized Verge or Low Road Shoulder ahead; avoid driving onto edges",
  "Parking zone",
  "Mud pit ahead",
  "Off-road trail",
  "A", "Warns that road edges lack firm foundation and dropping a wheel off the asphalt may cause rollovers or entrapment.", 2);

addQ(6, "When driving through deep floodwaters in the Philippines, what is the correct defensive driving technique?",
  "Drive through at 60 km/h to splash the water away",
  "Check water depth first; drive slowly in low gear maintaining steady engine RPM to prevent water entering the tailpipe, then test brakes after exiting",
  "Shift into neutral and coast",
  "Follow immediately behind a submerged motorcycle",
  "B", "Driving slowly in first gear prevents creating a bow wave that drowns the intake and keeps exhaust pressure positive.", 2);

`;

fs.writeFileSync('c:/code/synapse/generate_lto_300.js', fileContent + modules4to6);
console.log("Modules 4-6 appended successfully!");
