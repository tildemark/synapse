// Modules 7 to 9 Builder for 300 Questions
const fs = require('fs');

let fileContent = fs.readFileSync('c:/code/synapse/generate_lto_300.js', 'utf8');

const modules7to9 = `
// -------------------------------------------------------------
// MODULE 7: Warning Signs: Pedestrians, Schools & Special Hazards (20 Questions)
// -------------------------------------------------------------
addQ(7, "What does a triangular warning sign showing a person walking between zebra crossing stripes indicate?",
  "Pedestrian Crossing (Zebra Crosswalk) ahead; yield to crossing pedestrians",
  "Sidewalk ends ahead",
  "Jogging track ahead",
  "No crossing allowed",
  "A", "This sign warns that a marked pedestrian crossing is ahead. Drivers must slow down and yield right-of-way to any pedestrian stepping onto the zebra stripes.", 1,
  "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><polygon points='50,8 92,88 8,88' fill='white' stroke='%23DC2626' stroke-width='7'/><rect x='28' y='72' width='44' height='4' fill='%23111827'/><rect x='32' y='64' width='36' height='4' fill='%23111827'/><circle cx='50' cy='32' r='5' fill='%23111827'/><path d='M47 38 L54 38 L57 48 L49 52 L52 64 L46 64 L44 52 L40 44 Z' fill='%23111827'/></svg>");

addQ(7, "What does a fluorescent yellow-green pentagonal (5-sided) or triangular sign showing two school children walking warn of?",
  "School Zone or Children Crossing ahead; reduce speed to 20 km/h",
  "Public playground only",
  "Daycare center parking",
  "Bicycle crossing zone",
  "A", "The School Zone sign warns of school grounds or children crossing nearby. Drivers must observe school zone speed limits (maximum 20 km/h under RA 4136).", 1,
  "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><polygon points='50,6 92,36 82,90 18,90 8,36' fill='%23FEF08A' stroke='%23111827' stroke-width='4'/><circle cx='40' cy='30' r='5' fill='%23111827'/><circle cx='62' cy='38' r='4' fill='%23111827'/><path d='M36 38 L45 38 L48 50 L42 54 L44 68 L38 68 L36 56 Z' fill='%23111827'/><path d='M58 44 L66 44 L68 56 L62 58 L63 70 L58 70 L58 58 Z' fill='%23111827'/></svg>");

addQ(7, "What does an 'X' shaped white crossbuck sign with the words 'RAILROAD CROSSING' require drivers to do?",
  "Speed up to cross the tracks before the train arrives",
  "Slow down, look both ways, listen for train horns, and stop if a train is approaching",
  "Stop only if a barrier gate is closed",
  "Cross only behind another vehicle",
  "B", "A Railroad Crossing Crossbuck sign marks a railway track crossing. Drivers must look and listen in both directions and come to a complete stop if signals flash or a train approaches.", 2,
  "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><line x1='15' y1='15' x2='85' y2='85' stroke='white' stroke-width='16'/><line x1='15' y1='15' x2='85' y2='85' stroke='%23DC2626' stroke-width='10'/><line x1='85' y1='15' x2='15' y2='85' stroke='white' stroke-width='16'/><line x1='85' y1='15' x2='15' y2='85' stroke='%23DC2626' stroke-width='10'/></svg>");

addQ(7, "What does a triangular warning sign depicting an animal silhouette (e.g. cow or deer) indicate?",
  "Livestock / Animal Crossing zone ahead",
  "Veterinary clinic entrance",
  "Zoological park ahead",
  "No pets allowed on highway",
  "A", "The Animal Crossing sign warns of areas where farm animals or wildlife may wander onto the roadway, particularly in rural provincial highways.", 1,
  "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><polygon points='50,8 92,88 8,88' fill='white' stroke='%23DC2626' stroke-width='7'/><path d='M32 50 Q36 42 46 44 L64 44 Q70 44 72 50 L72 66 L66 66 L66 56 L54 56 L54 66 L48 66 L48 54 L36 54 L36 66 L30 66 Z' fill='%23111827'/><circle cx='28' cy='46' r='4' fill='%23111827'/></svg>");

addQ(7, "When approaching a stopped school bus displaying flashing red lights and an extended stop arm in the Philippines, you must:",
  "Overtake quickly on the left shoulder",
  "Come to a complete stop until the lights stop flashing and children have safely crossed",
  "Sound your horn repeatedly and drive past at 30 km/h",
  "Slow down only if driving a heavy truck",
  "B", "Flashing red lights on a school bus mean children are boarding or disembarking. Traffic in both directions on undivided roads must stop completely.", 2);

addQ(7, "What does a triangular warning sign depicting a person in a wheelchair warn of?",
  "Persons with Disabilities (PWD) crossing area ahead; yield right of way",
  "Hospital emergency bay",
  "Wheelchair rental facility",
  "Senior citizen home parking",
  "A", "Warns motorists to expect wheelchair users or mobility-impaired individuals crossing or using sidewalk curb cuts.", 1);

addQ(7, "What does a triangular warning sign depicting a bicycle indicate?",
  "Bicycle Crossing ahead; watch for cyclists entering from paths or shoulders",
  "Bicycle lane ends",
  "No bicycles allowed",
  "Bicycle store ahead",
  "A", "Warns that cyclists frequently cross or merge with motor traffic at this location.", 1);

addQ(7, "What does a triangular warning sign showing an old-style steam locomotive warn of?",
  "Railroad Crossing WITHOUT automatic gates or barrier protection (Uncontrolled Railway)",
  "Railway museum ahead",
  "Historic scenic train tour",
  "Train scrap yard",
  "A", "Warns that the railway track crossing lacks mechanical barrier arms, requiring extra driver vigilance before crossing.", 2);

addQ(7, "What does a triangular warning sign showing a railway track with a fence / gate barrier warn of?",
  "Railroad Crossing WITH automatic barrier gates or signals ahead",
  "Farm fence ahead",
  "Military base gate",
  "Toll barrier ahead",
  "A", "Warns of a protected railway crossing equipped with drop-down barrier gates.", 1);

addQ(7, "What does a rectangular white sign with red diagonal stripes (Counting Markers) before a railroad crossing indicate?",
  "Distance to railway tracks (e.g. 3 stripes = 150m, 2 stripes = 100m, 1 stripe = 50m)",
  "Danger of electric shock",
  "Speed bumps count",
  "Emergency phone location",
  "A", "Distance countdown markers give drivers progressive warning as they approach a railway crossing.", 2);

addQ(7, "What does a triangular warning sign showing a car with headlights turned on with glare beams indicate?",
  "Low visibility / Fog-prone area ahead; turn on low-beam headlights or fog lights",
  "High beam testing area",
  "Solar power plant nearby",
  "Tunnel illumination check",
  "A", "Warns of mountain fog, smoke, or coastal mist where driving visibility suddenly drops.", 1);

addQ(7, "What does a triangular warning sign depicting horses or equestrian riders indicate?",
  "Horseback riders / Horse-drawn carriage crossing ahead; pass slowly and do not honk",
  "Equestrian racetrack",
  "Veterinary clinic",
  "Zoo entrance",
  "A", "Warns of horses on the road. Loud horns must not be sounded to avoid spooking horses into traffic.", 1);

addQ(7, "When passing pedestrians walking along a rural road without sidewalks, what is the safest practice?",
  "Pass within 10 centimeters to save lane space",
  "Reduce speed, give at least 1 to 1.5 meters of lateral clearance, and be prepared for sudden movements",
  "Honk continuously until they jump into the ditch",
  "Flash high beams aggressively",
  "B", "Pedestrians on unpaved shoulders require ample lateral safety buffer and reduced passing speed.", 1);

addQ(7, "Under Philippine traffic regulations, what must you do when approaching a pedestrian holding a white cane or accompanied by a guide dog?",
  "Sound your horn to tell them to move faster",
  "Come to a complete stop and yield absolute right-of-way, recognizing they are visually impaired",
  "Drive around them on the sidewalk",
  "Ignore them if the green light is on",
  "B", "A white cane or guide dog signifies a blind pedestrian. Drivers must yield total priority regardless of traffic light status.", 1);

addQ(7, "Why is driving through a School Zone during morning opening (7:00 AM) and afternoon dismissal (4:00 PM) particularly hazardous?",
  "Children have limited peripheral vision, poor distance estimation, and may dart into traffic unpredictably between parked cars",
  "School buses have right-of-way everywhere",
  "Traffic enforcers are off duty",
  "Road width shrinks by half",
  "A", "Young children lack mature traffic hazard perception and frequently cross without looking.", 1);

addQ(7, "What does a triangular warning sign depicting a blind or elderly pedestrian with a walking cane signify?",
  "Elderly / Frail Pedestrians crossing zone ahead (near nursing homes or senior centers)",
  "Retirement village gate",
  "Medical supplies pharmacy",
  "Walking marathon route",
  "A", "Warns drivers to expect slow-moving senior citizens who may require extra time to cross the road.", 1);

addQ(7, "What does a triangular sign showing a traffic light signal (Red, Yellow, Green) inside the triangle warn of?",
  "Traffic Signals ahead (Signalized intersection coming up around curve or over hill)",
  "Traffic light for sale",
  "Electricity substation",
  "Checkpoint",
  "A", "Warns drivers of an approaching automated traffic light, particularly when sightlines are blocked by curves or topography.", 1);

addQ(7, "What does a triangular warning sign showing a tractor / agricultural vehicle silhouette mean?",
  "Slow-moving Agricultural Farm Machinery entering or crossing highway ahead",
  "Tractor dealership",
  "Farm equipment repair",
  "Lawnmower racing",
  "A", "Warns of heavy, slow tractors, harvesters, and threshers entering provincial highways.", 1);

addQ(7, "If a ball bounces into the street from between parked cars in a residential neighborhood, what should you immediately anticipate?",
  "A dog chasing the ball",
  "A young child will likely run into the street immediately following the ball; slow down and prepare to stop instantly",
  "The ball will puncture your tire",
  "It is a prank; speed up",
  "B", "Classic defensive driving rule: where a bouncing ball appears, a running child is almost guaranteed to follow.", 1);

addQ(7, "When driving past a public playground or park on a weekend, what is the recommended speed and mindset?",
  "Maintain maximum highway speed",
  "Reduce speed well below 20 km/h, cover the brake pedal, and scan between all parked vehicles",
  "Sound horn every 5 seconds",
  "Turn off headlights",
  "B", "High density of children near parks requires anticipatory brake covering and slow speed.", 1);

// -------------------------------------------------------------
// MODULE 8: Pavement Markings & Lane Dividers (20 Questions)
// -------------------------------------------------------------
addQ(8, "What does a Single Solid White center line on a two-lane road indicate?",
  "Overtaking is permitted anytime",
  "Separates traffic moving in opposite directions; crossing or overtaking is discouraged/prohibited",
  "Parking lane boundary",
  "Motorcycle lane only",
  "B", "A solid white line indicates that lane changing or crossing into opposing traffic is hazardous and discouraged, commonly used near junctions or blind spots.", 1,
  "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect x='5' y='5' width='90' height='90' rx='10' fill='%231F2937'/><line x1='50' y1='10' x2='50' y2='90' stroke='white' stroke-width='6'/></svg>");

addQ(8, "What does a Single Broken White center line on a multi-lane or two-way road mean?",
  "Lane changing and overtaking are permitted when safe to do so",
  "Mandatory lane change required",
  "Stop line ahead",
  "No passing under any circumstances",
  "A", "A broken white line separates lanes moving in the same direction or opposite directions where overtaking/lane switching is permitted when safe.", 1,
  "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect x='5' y='5' width='90' height='90' rx='10' fill='%231F2937'/><line x1='50' y1='10' x2='50' y2='30' stroke='white' stroke-width='6'/><line x1='50' y1='42' x2='50' y2='60' stroke='white' stroke-width='6'/><line x1='50' y1='72' x2='50' y2='90' stroke='white' stroke-width='6'/></svg>");

addQ(8, "What does a Double Solid Yellow line painted along the center of the road strictly mean?",
  "Overtaking is strictly prohibited for vehicles traveling in both directions",
  "Overtaking is permitted only during daytime",
  "Left turns are mandatory",
  "Speed limit is 80 km/h",
  "A", "Double solid yellow lines mean absolute prohibition of passing or crossing from either side under any circumstances.", 1,
  "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect x='5' y='5' width='90' height='90' rx='10' fill='%231F2937'/><line x1='44' y1='10' x2='44' y2='90' stroke='%23FBBF24' stroke-width='5'/><line x1='56' y1='10' x2='56' y2='90' stroke='%23FBBF24' stroke-width='5'/></svg>");

addQ(8, "What does a combination of a Solid Yellow line with an adjacent Broken Yellow line mean?",
  "Only traffic on the side of the broken line may overtake when safe",
  "Both sides may overtake",
  "Neither side may overtake",
  "Road under reconstruction",
  "A", "Vehicles traveling adjacent to the broken line may cross to overtake when clear, while traffic on the solid line side is strictly prohibited from passing.", 2,
  "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect x='5' y='5' width='90' height='90' rx='10' fill='%231F2937'/><line x1='44' y1='10' x2='44' y2='90' stroke='%23FBBF24' stroke-width='5'/><line x1='56' y1='10' x2='56' y2='30' stroke='%23FBBF24' stroke-width='5'/><line x1='56' y1='42' x2='56' y2='60' stroke='%23FBBF24' stroke-width='5'/><line x1='56' y1='72' x2='56' y2='90' stroke='%23FBBF24' stroke-width='5'/></svg>");

addQ(8, "What does a Yellow Box painted with crisscross diagonal lines at an intersection mean?",
  "Do not enter the box unless your exit road is clear (No blocking the intersection)",
  "Designated emergency vehicle parking only",
  "Pedestrian waiting area",
  "Mandatory U-turn zone",
  "A", "A Yellow Box Junction must never be blocked. Drivers must not enter the box unless their exit on the other side is completely clear to prevent gridlock.", 2,
  "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect x='5' y='5' width='90' height='90' rx='10' fill='%231F2937'/><rect x='20' y='20' width='60' height='60' fill='none' stroke='%23FBBF24' stroke-width='5'/><line x1='20' y1='20' x2='80' y2='80' stroke='%23FBBF24' stroke-width='4'/><line x1='80' y1='20' x2='20' y2='80' stroke='%23FBBF24' stroke-width='4'/></svg>");

addQ(8, "What does a solid white transverse line painted completely across your lane at an intersection represent?",
  "Stop Line where vehicles must come to a complete stop before crossing or when red signal appears",
  "Speed bump line",
  "Parking boundary",
  "Pedestrian jogging line",
  "A", "The Stop Line defines the exact boundary behind which vehicles must stop at red lights, stop signs, or enforcer commands.", 1);

addQ(8, "What does a broken transverse white line (Give-Way Line) painted across a lane at an intersection or roundabout entry mean?",
  "Yield line where vehicles must slow down or stop to give way to intersecting or circulatory traffic",
  "Mandatory acceleration line",
  "Stop line for trucks only",
  "Parking space marker",
  "A", "Give-way lines mark where drivers must yield right-of-way before entering the priority thoroughfare.", 1);

addQ(8, "What do Zebra Pavement Stripes (broad alternating white longitudinal bars) painted across the street designate?",
  "Zebra Pedestrian Crosswalk where pedestrians have absolute right-of-way when crossing",
  "Speed control zone",
  "Motorcycle waiting box",
  "Emergency breakdown bay",
  "A", "Zebra crossings are designated pedestrian zones where motor vehicles must yield completely to anyone on foot.", 1);

addQ(8, "What does a series of diagonal white or yellow hatched lines inside a solid border (Painted Traffic Island / Gore Area) mean?",
  "Prohibited chevron island; driving, parking, or crossing over this area is strictly illegal",
  "Expressway overtaking lane",
  "Motorcycle parking zone",
  "U-turn waiting slot",
  "A", "Painted islands separate diverging or converging traffic streams. Driving across chevron hatching is a moving violation.", 2);

addQ(8, "What does a Solid White Edge Line painted along the right outer edge of a highway delineate?",
  "The outer boundary of the drivable lane, separating it from the road shoulder or curb",
  "Passing lane",
  "Bicycle-only zone",
  "Pedestrian walkway",
  "A", "Edge lines (fog lines) help drivers orient lane position at night or in foggy conditions.", 1);

addQ(8, "What does a series of transverse raised rumble strips painted across the roadway produce when driven over?",
  "Auditory rumble noise and tactile vibration through tires to alert drivers to reduce speed before a toll plaza, hazard, or sharp bend",
  "Flat tire simulation",
  "Brake cooling",
  "Suspension calibration",
  "A", "Rumble strips physically and audibly warn fatigued or speeding motorists of approaching hazardous road conditions.", 1);

addQ(8, "What does a straight white arrow painted on the pavement inside a specific traffic lane instruct drivers to do?",
  "Traffic in that lane must proceed Straight ahead only",
  "Overtake the car ahead",
  "Turn right at the next corner",
  "Speed limit increase",
  "A", "Pavement lane arrows dictate mandatory direction of travel for vehicles within that lane.", 1);

addQ(8, "What does a curved white arrow pointing left painted in a lane indicate?",
  "Dedicated Left Turn Lane only",
  "Sharp curve warning",
  "Keep right",
  "U-turn prohibited",
  "A", "Vehicles positioned in this lane must execute a left turn at the intersection.", 1);

addQ(8, "What does a combination arrow showing both Straight and Left painted on the asphalt mean?",
  "Lane allows either proceeding straight ahead or making a left turn",
  "U-turn only",
  "Right turn allowed",
  "Road closed ahead",
  "A", "Permits both straight travel and left-turn maneuvers from this lane.", 1);

addQ(8, "What is a 'Motorcycle Lane' designated by blue or green pavement markings on major urban highways (e.g. Commonwealth Avenue / EDSA)?",
  "Dedicated/non-exclusive lane for motorcycles to organize traffic flow and prevent swerving",
  "Bicycle racing lane",
  "Emergency parking bay",
  "Tricycle zone",
  "A", "Designated motorcycle lanes separate two-wheeled vehicles to curb reckless swerving across lanes.", 1);

addQ(8, "What does a Red painted curb along a city street signify?",
  "No Parking and No Stopping at any time (Fire lane or critical safety clearance)",
  "Paid parking zone",
  "Loading and unloading zone",
  "Taxi stand",
  "A", "Red curbs denote critical emergency clearance zones where stopping is strictly prohibited.", 1);

addQ(8, "What does a Yellow painted curb along a street signify?",
  "No Parking (loading/unloading of commercial cargo may be permitted for designated brief periods)",
  "Free parking all day",
  "Bus stop only",
  "Motorcycle parking",
  "A", "Yellow curbs indicate loading/unloading restrictions with general parking prohibited.", 1);

addQ(8, "What does a White painted curb indicate in urban street parking?",
  "Short-term parking or passenger passenger drop-off/pickup only (e.g. 5-minute limit)",
  "Permanent parking",
  "No stopping anytime",
  "Truck loading only",
  "A", "White curbs are designated for brief passenger loading and unloading.", 1);

addQ(8, "What does a Green painted curb indicate?",
  "Short-term limited time parking (usually 15 to 30 minutes during business hours)",
  "No stopping",
  "Electric vehicle charging only",
  "Tricycle terminal",
  "A", "Green curbs designate short-duration parking for quick errands during posted hours.", 2);

addQ(8, "What do cat's eyes (Raised Reflective Pavement Markers - RRPMs) in red color along the road edge indicate?",
  "The road shoulder or off-limits edge line (Do not cross to the left of red reflectors)",
  "Center of highway",
  "Pedestrian crossing",
  "Speed bump location",
  "A", "Red reflectors mark the boundary edge of the road; driving outside them puts you on the road shoulder or verge.", 2);

// -------------------------------------------------------------
// MODULE 9: Traffic Light Signals & Hand Signals (20 Questions)
// -------------------------------------------------------------
addQ(9, "What does a Steady Red traffic light signal require drivers to do?",
  "Come to a complete stop before the stop line and remain stopped until green appears",
  "Proceed cautiously if no police officer is present",
  "Turn right immediately without yielding",
  "Slow down to 10 km/h and cross if intersection is empty",
  "A", "A steady red light mandates a complete stop before the stop line or pedestrian lane until a green signal or authorized green turn arrow appears.", 1,
  "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect x='25' y='5' width='50' height='90' rx='10' fill='%231F2937' stroke='white' stroke-width='2'/><circle cx='50' cy='25' r='12' fill='%23DC2626'/><circle cx='50' cy='50' r='12' fill='%23374151'/><circle cx='50' cy='75' r='12' fill='%23374151'/></svg>");

addQ(9, "What is the meaning of a Flashing Yellow traffic light at an intersection?",
  "Prepare to stop completely immediately",
  "Slow down and proceed with caution through the intersection, yielding to cross traffic if necessary",
  "Traffic light is defective; speed up to clear intersection",
  "Pedestrians are not allowed to cross",
  "B", "A flashing yellow light serves as a warning signal. Motorists should reduce speed and proceed through the junction with heightened caution.", 1,
  "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect x='25' y='5' width='50' height='90' rx='10' fill='%231F2937' stroke='white' stroke-width='2'/><circle cx='50' cy='25' r='12' fill='%23374151'/><circle cx='50' cy='50' r='12' fill='%23FBBF24'/><circle cx='50' cy='75' r='12' fill='%23374151'/></svg>");

addQ(9, "What does a Flashing Red traffic light signal indicate?",
  "Equivalent to a STOP sign: come to a full complete stop, yield to cross traffic, then proceed when clear",
  "Road closed permanently",
  "Caution: road construction ahead",
  "Emergency vehicle approaching only",
  "A", "A flashing red light operates identically to an octagonal STOP sign: you must make a complete stop before the crosswalk, yielding to all cross traffic before proceeding.", 2,
  "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect x='25' y='5' width='50' height='90' rx='10' fill='%231F2937' stroke='white' stroke-width='2'/><circle cx='50' cy='25' r='12' fill='%23DC2626'/><circle cx='50' cy='50' r='12' fill='%23374151'/><circle cx='50' cy='75' r='12' fill='%23374151'/></svg>");

addQ(9, "When a traffic enforcer is manually directing traffic and their signal conflicts with a green traffic light, which instruction must you follow?",
  "Always follow the traffic enforcer's manual hand signals over the electric traffic light",
  "Follow the electric traffic light at all times",
  "Honk your horn and wait until both signals match",
  "Follow the action of the car directly ahead of you",
  "A", "Under RA 4136 and LTO regulations, manual instructions from an authorized traffic enforcer or police officer supersede and override all automated traffic lights and road signs.", 1);

addQ(9, "What is the proper hand signal for making a Left Turn when your electric turn signals are inoperative?",
  "Extend left arm and hand horizontally straight out of the window",
  "Extend left arm pointing upward at a 90-degree angle",
  "Extend left arm pointing downward at a 90-degree angle",
  "Wave left hand rapidly in a circular motion",
  "A", "To signal a left turn manually, extend the left arm horizontally straight out from the driver's side window.", 2);

addQ(9, "What is the proper manual hand signal for making a Right Turn out of the driver's window?",
  "Extend left arm out and bend the elbow upward at a 90-degree angle with hand pointing toward the sky",
  "Extend left arm straight down",
  "Point index finger to the right inside the car",
  "Wave left hand downward",
  "A", "Right turn manual signal: Left arm out the window, elbow bent 90 degrees upward with palm facing forward.", 2);

addQ(9, "What is the proper manual hand signal for Stopping or Slowing Down?",
  "Extend left arm out the window pointing downward at a 90-degree angle with palm facing the rear",
  "Extend left arm horizontally straight",
  "Point arm straight up",
  "Stick head out the window",
  "A", "Stop / Slow Down signal: Left arm extended downward at a 90-degree angle with palm toward approaching rear traffic.", 2);

addQ(9, "What does a Steady Yellow (Amber) traffic light signal mean as you approach an intersection?",
  "Speed up to beat the red light",
  "The signal is about to turn red; stop safely before the stop line unless you are so close that stopping abruptly would cause a rear-end collision",
  "Turn off headlights",
  "Honk horn and proceed",
  "B", "Yellow light indicates caution: stop if safe to do so. Accelerating to beat a yellow is an aggressive and dangerous violation.", 1);

addQ(9, "What does a Steady Green traffic light signal permit you to do?",
  "Proceed straight ahead or make lawful turns, provided the intersection is clear and pedestrians have finished crossing",
  "Accelerate with maximum power without looking",
  "Make a U-turn even if a No U-turn sign is posted",
  "Block the intersection if traffic is stalled",
  "A", "Green light permits moving straight or turning subject to yielding to pedestrians already in the crosswalk.", 1);

addQ(9, "What does a Green Arrow traffic signal pointing to the right indicate?",
  "Vehicles in the right-turn lane have a protected right turn and may proceed regardless of the main circular red light",
  "Stop and wait for the green circle",
  "Right turn is prohibited",
  "Pedestrians only may turn right",
  "A", "A green arrow grants exclusive, protected right-of-way to make the indicated turn.", 1);

addQ(9, "What does a Green Arrow traffic signal pointing to the left indicate?",
  "Protected Left Turn: oncoming opposing traffic is held at a red light and you may turn left safely",
  "Yield to oncoming traffic before turning",
  "Left lane closed",
  "Proceed straight only",
  "A", "Protected green left arrow means oncoming cross traffic is halted, allowing safe left turns without oncoming conflicts.", 1);

addQ(9, "What does a Red Arrow traffic signal pointing left indicate?",
  "No left turn is permitted; vehicles intending to turn left must remain stopped behind the line even if circular signal is green",
  "Turn left with caution",
  "Left lane is for emergency vehicles only",
  "U-turn only",
  "A", "A red arrow strictly prohibits turning in the direction of the arrow until the arrow turns green.", 1);

addQ(9, "What does a sign stating 'RIGHT TURN ON RED LIGHT WITH CAUTION' authorize drivers to do?",
  "Turn right on a red light after coming to a full stop, yielding to all cross traffic and pedestrians",
  "Turn right at 60 km/h without stopping",
  "Right turn is prohibited during red light",
  "Only buses may turn right",
  "A", "Permits turning right on red only after a full stop and ensuring the maneuver will not impede oncoming priority traffic.", 2);

addQ(9, "In the absence of a 'Right Turn on Red' sign, is turning right on a red light legally permitted in the Philippines?",
  "Yes, anywhere in the country",
  "No, turning right on a steady red light is illegal unless specifically authorized by an explicit sign or green turn arrow",
  "Yes, during nighttime only",
  "Yes, for motorcycles only",
  "B", "Under standard traffic rules, red means stop. Right turn on red is prohibited unless a sign explicitly authorizes it.", 1);

addQ(9, "When an enforcer stands facing you with both arms outstretched horizontally, what does this hand signal indicate?",
  "Traffic approaching from the enforcer's front and rear must Stop completely",
  "Traffic may proceed at full speed",
  "Left turn only",
  "Emergency landing",
  "A", "Arms outstretched across your path signals a stop command to traffic approaching the enforcer's front and back.", 1);

addQ(9, "When a traffic enforcer stands sideways to your vehicle and motions with an underhand waving gesture toward themselves, what does it mean?",
  "Traffic in your direction is authorized to Proceed / Move forward",
  "Stop immediately",
  "Pull over and park",
  "Check driver's license",
  "A", "The underhand beckoning wave authorizes traffic parallel to the enforcer's stance to proceed through the junction.", 1);

addQ(9, "What whistle signal does a Philippine traffic enforcer use to command traffic to STOP?",
  "One long, sharp blast of the whistle",
  "Two short, rapid blasts",
  "Three continuous blasts",
  "No whistle used",
  "A", "Standard police whistle code: One long sharp blast = STOP; Two short rapid blasts = GO / PROCEED.", 2);

addQ(9, "What whistle signal does a traffic enforcer use to command traffic to GO / PROCEED?",
  "Two short, sharp blasts of the whistle",
  "One long continuous blast",
  "Five rapid blasts",
  "Siren blast",
  "A", "Two short blasts instruct stalled or waiting traffic to proceed forward.", 2);

addQ(9, "What does a Flashing Yellow Arrow signal pointing to the left mean?",
  "Unprotected left turn: you may turn left after yielding the right of way to oncoming traffic and pedestrians",
  "Left turn is strictly prohibited",
  "Protected left turn",
  "Left lane closed ahead",
  "A", "Flashing yellow arrow indicates left turns are allowed, but you must yield to oncoming vehicles traveling straight.", 2);

addQ(9, "When a traffic light malfunctions (all lights are completely dark or flashing erratically), how should drivers treat the intersection?",
  "Speed through to clear the broken junction quickly",
  "Treat the intersection as an uncontrolled 4-way STOP junction, yielding to vehicles on the right and proceeding with extreme caution",
  "Wait for 1 hour until lights turn back on",
  "Abandon the vehicle",
  "B", "Dark traffic signals revert the junction to 4-way stop right-of-way rules where drivers must stop and yield before proceeding.", 2);

`;

fs.writeFileSync('c:/code/synapse/generate_lto_300.js', fileContent + modules7to9);
console.log("Modules 7-9 appended successfully!");
