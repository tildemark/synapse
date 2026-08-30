// Complete 300 Questions Builder for Philippine LTO Driver's License Reviewer
const fs = require('fs');
const path = require('path');

const modules = [
  { number: 1, name: "Priority & Regulatory Traffic Signs" },
  { number: 2, name: "Directional, Mandatory & Prohibitory Signs" },
  { number: 3, name: "Speed Limits & Parking Restriction Signs" },
  { number: 4, name: "Warning Signs: Curves, Bends & Alignments" },
  { number: 5, name: "Warning Signs: Intersections, Merges & Junctions" },
  { number: 6, name: "Warning Signs: Road Width, Hills & Physical Hazards" },
  { number: 7, name: "Warning Signs: Pedestrians, Schools & Special Hazards" },
  { number: 8, name: "Pavement Markings & Lane Dividers" },
  { number: 9, name: "Traffic Light Signals & Hand Signals" },
  { number: 10, name: "Right-of-Way Rules & Intersection Priority" },
  { number: 11, name: "Overtaking, Passing & Expressway Driving Rules" },
  { number: 12, name: "General Traffic Code & Republic Act 4136" },
  { number: 13, name: "Special Laws: Anti-Drunk (RA 10586) & Distracted Driving (RA 10913)" },
  { number: 14, name: "Fines, Penalties, Violations & Demerit System" },
  { number: 15, name: "Vehicle Safety, Emergencies & BLOWBAGETS Pre-Trip Inspection" }
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
// MODULE 1: Priority & Regulatory Traffic Signs (20 Questions)
// -------------------------------------------------------------
addQ(1, "What is the mandatory action required when approaching an octagonal red STOP traffic sign?", 
  "Slow down to 20 km/h and proceed if clear",
  "Come to a complete stop before the stop line or pedestrian lane and yield to all traffic",
  "Stop only if another motor vehicle is approaching from the right",
  "Honk your horn and proceed cautiously across the intersection",
  "B", "Under DPWH & LTO regulations, an octagonal STOP sign requires a complete full stop at the stop line or pedestrian crossing, yielding the right of way to cross traffic.", 1,
  "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><polygon points='30,5 70,5 95,30 95,70 70,95 30,95 5,70 5,30' fill='%23DC2626' stroke='white' stroke-width='4'/><text x='50' y='60' fill='white' font-family='sans-serif' font-size='24' font-weight='900' text-anchor='middle'>STOP</text></svg>");

addQ(1, "What does an inverted triangular sign with a red border (GIVE WAY / YIELD) signify to approaching drivers?",
  "Vehicles on the main road must yield to you",
  "You have priority over all intersecting roads",
  "Slow down and give way (yield) to vehicles on the major road or roundabout",
  "Mandatory full stop for at least 5 seconds",
  "C", "The GIVE WAY (YIELD) sign instructs drivers to slow down and prepare to stop if necessary to yield the right-of-way to vehicles on the priority road.", 1,
  "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><polygon points='5,10 95,10 50,90' fill='white' stroke='%23DC2626' stroke-width='8'/><text x='50' y='42' fill='%23DC2626' font-family='sans-serif' font-size='14' font-weight='900' text-anchor='middle'>GIVE</text><text x='50' y='60' fill='%23DC2626' font-family='sans-serif' font-size='14' font-weight='900' text-anchor='middle'>WAY</text></svg>");

addQ(1, "What does a circular white sign with a red outer border and a red diagonal slash over a black left arrow indicate?",
  "Compulsory left turn ahead",
  "No Left Turn permitted at this intersection",
  "Left lane ending ahead",
  "Sharp left curve ahead",
  "B", "A red circle with a diagonal slash is a prohibitory sign. Over a left arrow, it prohibits making any left turns.", 1,
  "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><circle cx='50' cy='50' r='44' fill='white' stroke='%23DC2626' stroke-width='8'/><path d='M65 65 L65 48 Q65 38 52 38 L40 38 L40 28 L22 43 L40 58 L40 48 L52 48 Q55 48 55 52 L55 65 Z' fill='%23111827'/><line x1='20' y1='20' x2='80' y2='80' stroke='%23DC2626' stroke-width='8'/></svg>");

addQ(1, "What is prohibited when encountering a red circle sign with a curved U-arrow and diagonal slash?",
  "No Left Turn",
  "No U-Turn permitted",
  "No Overtaking",
  "No Reversing",
  "B", "The No U-Turn regulatory sign strictly prohibits drivers from reversing direction 180 degrees at the marked location.", 1,
  "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><circle cx='50' cy='50' r='44' fill='white' stroke='%23DC2626' stroke-width='8'/><path d='M65 65 L65 42 Q65 26 50 26 Q35 26 35 42 L35 52 L25 52 L38 68 L51 52 L41 52 L41 42 Q41 33 50 33 Q59 33 59 42 L59 65 Z' fill='%23111827'/><line x1='20' y1='20' x2='80' y2='80' stroke='%23DC2626' stroke-width='8'/></svg>");

addQ(1, "What does a solid red circular sign displaying a bold horizontal white bar indicate?",
  "No Parking",
  "No Stopping Anytime",
  "NO ENTRY to all vehicular traffic",
  "Toll gate inspection ahead",
  "C", "The solid red disc with a horizontal white bar is the universal NO ENTRY sign prohibiting all vehicles from entering a one-way street or restricted zone.", 1,
  "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><circle cx='50' cy='50' r='46' fill='%23DC2626'/><rect x='15' y='40' width='70' height='20' rx='3' fill='white'/></svg>");

addQ(1, "What does a circular sign showing a pedestrian symbol with a red diagonal slash mean?",
  "Pedestrians have right of way",
  "Pedestrian crossing ahead",
  "Pedestrian traffic is prohibited",
  "School zone ahead",
  "C", "A pedestrian silhouette with a red diagonal slash indicates that pedestrians are prohibited from walking along or crossing this roadway (e.g. expressways).", 1,
  "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><circle cx='50' cy='50' r='44' fill='white' stroke='%23DC2626' stroke-width='8'/><circle cx='50' cy='30' r='6' fill='%23111827'/><path d='M47 38 L53 38 L56 52 L50 56 L50 72 L45 72 L45 56 L41 46 Z' fill='%23111827'/><line x1='20' y1='20' x2='80' y2='80' stroke='%23DC2626' stroke-width='8'/></svg>");

addQ(1, "What does a circular white sign with a red border showing a bicycle with a red diagonal slash mean?",
  "Bicycles only lane",
  "Bicycles prohibited from using this road",
  "Bicycle repair shop ahead",
  "Caution for crossing cyclists",
  "B", "This sign prohibits bicycles, non-motorized pedal bikes, and e-bikes from entering expressways and designated high-speed thoroughfares.", 1);

addQ(1, "What does a circular white sign with a red border showing a motorcycle with a red diagonal slash indicate?",
  "Motorcycle parking only",
  "Motorcycles prohibited from entering this road section",
  "Motorcycle lane ahead",
  "Tricycles only",
  "B", "This sign prohibits all types of motorcycles and mopeds from entering specific tunnels, flyovers, or restricted roads.", 1);

addQ(1, "What does a circular white sign with a red border showing a motorized tricycle with a red diagonal slash indicate?",
  "Tricycles prohibited on this national highway or main road",
  "Tricycle terminal ahead",
  "Slow moving vehicles lane",
  "No overtaking tricycles",
  "A", "Under DILG & LTO directives, tricycles and pedicabs are strictly prohibited from operating along national highways.", 1);

addQ(1, "What does a circular sign with a red border showing a truck silhouette with a red diagonal slash mean?",
  "Truck scale station ahead",
  "Truck parking area",
  "Heavy trucks prohibited during designated hours or on this bridge/road",
  "Truck climbing lane",
  "C", "This prohibitory sign bans cargo trucks and heavy vehicles from traversing urban streets or residential thoroughfares.", 1);

addQ(1, "What does a circular sign displaying '5t' inside a red circular border signify?",
  "Minimum weight allowed is 5 tonnes",
  "Maximum Gross Vehicle Weight (Gross Axle Load) limit is 5 tonnes",
  "Toll fee is 5 pesos",
  "Maximum speed limit 50 km/h",
  "B", "Vehicles exceeding 5 metric tons in gross weight are strictly prohibited from crossing or using this bridge/road.", 2);

addQ(1, "What does a circular sign displaying '3.5m' between two vertical arrowheads pointing inward signify?",
  "Maximum vehicle height clearance limit is 3.5 meters",
  "Maximum vehicle width limit is 3.5 meters",
  "Distance to next exit is 3.5 km",
  "Bridge length is 3.5 meters",
  "A", "This regulatory sign indicates the maximum allowable vehicle height that can safely pass under an overpass or tunnel.", 2);

addQ(1, "What does a circular sign displaying '2.4m' between two horizontal arrowheads pointing inward signify?",
  "Minimum lane width is 2.4 meters",
  "Maximum vehicle width limit is 2.4 meters",
  "Road shoulder width is 2.4 meters",
  "Distance between vehicles must be 2.4 meters",
  "B", "Vehicles wider than 2.4 meters (including side mirrors/cargo) cannot enter due to physical lane narrowness.", 2);

addQ(1, "What does a circular sign with a red border and a straight right arrow with a diagonal slash mean?",
  "Right lane ending",
  "No Right Turn permitted at this intersection",
  "One way road to the right",
  "Sharp right curve ahead",
  "B", "The No Right Turn sign strictly prohibits turning right at the marked junction.", 1);

addQ(1, "What does a circular white sign with a red border showing a horn with a red diagonal slash mean?",
  "Honk horn before proceeding",
  "Sounding of vehicle horn is strictly prohibited (Quiet / Hospital / School Zone)",
  "Loud music allowed",
  "Testing horn required",
  "B", "This sign prohibits unnecessary sounding of motor vehicle horns, typically near hospitals, schools, and courthouses.", 1);

addQ(1, "What does a circular regulatory sign with a black left arrow AND right arrow with a red slash mean?",
  "Proceed straight only (No Turns allowed)",
  "Dual carriageway begins",
  "Two-way traffic ahead",
  "Roundabout ahead",
  "A", "This sign prohibits both left and right turns, forcing all vehicles to continue straight ahead.", 1);

addQ(1, "What does a circular sign with a red border showing an animal-drawn cart with a red diagonal slash mean?",
  "Carabao crossing zone",
  "Animal-drawn carts (Kalesas / Kuligligs) are prohibited on this roadway",
  "Provincial farm road begins",
  "Farm equipment rental",
  "B", "Animal-drawn carriages and agricultural tractors are prohibited from main expressways and highways.", 1);

addQ(1, "What does a rectangular white sign with black text saying 'ONE WAY' accompanied by an arrow mean?",
  "Traffic moves exclusively in the direction of the arrow",
  "Two-way traffic permitted on weekends",
  "Single-lane parking zone",
  "Yield to oncoming traffic",
  "A", "The ONE WAY sign dictates that all vehicular movement is restricted to a single uniform direction.", 1);

addQ(1, "What does a circular white sign with a red border showing '10m' between two cars indicate?",
  "Speed limit 10 km/h",
  "Minimum following distance of 10 meters must be maintained between moving vehicles",
  "Maximum vehicle length 10 meters",
  "Parking space 10 meters wide",
  "B", "This sign mandates maintaining a minimum spatial gap of at least 10 meters from the vehicle ahead.", 2);

addQ(1, "What does a white rectangular sign with a red circular border saying 'CUSTOMS' or 'PULIS' mandate?",
  "Speed up to clear checkpoint",
  "All drivers must stop for police or customs inspection before proceeding",
  "Police vehicles only",
  "Customs tax payment booth",
  "B", "Drivers must stop completely at the inspection post and submit to authorized vehicle checks.", 1);

// -------------------------------------------------------------
// MODULE 2: Directional, Mandatory & Prohibitory Signs (20 Questions)
// -------------------------------------------------------------
addQ(2, "What does a circular blue sign containing a straight white arrow pointing directly upward signify?",
  "One way street to the right",
  "Straight ahead only (Compulsory Direction)",
  "Overpass ahead",
  "Expressway entrance only",
  "B", "Blue circular signs are mandatory regulatory signs. A vertical upward arrow indicates all vehicles must proceed straight ahead only; turning is not permitted.", 2,
  "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><circle cx='50' cy='50' r='46' fill='%232563EB'/><path d='M50 18 L68 38 L55 38 L55 78 L45 78 L45 38 L32 38 Z' fill='white'/></svg>");

addQ(2, "What does a circular blue sign with a white diagonal arrow pointing down and to the right instruct drivers to do?",
  "Keep Right of the traffic island or obstruction",
  "Right turn only at the next corner",
  "Merge right for expressway exit",
  "Road slippery on right side",
  "A", "A blue circle with a downward-angled arrow is the mandatory KEEP RIGHT sign, directing traffic to pass to the right of a median island or divider.", 2,
  "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><circle cx='50' cy='50' r='46' fill='%232563EB'/><path d='M35 30 L55 50 L55 38 L68 38 L68 72 L34 72 L34 59 L46 59 Z' fill='white'/></svg>");

addQ(2, "What does a circular sign depicting two cars side-by-side with a red diagonal slash prohibit?",
  "Drag racing on public roads",
  "Overtaking or passing other vehicles",
  "Dual carriageway ahead",
  "Parking parallel to other cars",
  "B", "The No Overtaking sign prohibits passing other vehicles on that section of the road due to limited sight distance, curves, or hazard areas.", 2,
  "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><circle cx='50' cy='50' r='44' fill='white' stroke='%23DC2626' stroke-width='8'/><rect x='22' y='42' width='22' height='16' rx='3' fill='%23DC2626'/><rect x='54' y='42' width='22' height='16' rx='3' fill='%23111827'/><line x1='20' y1='20' x2='80' y2='80' stroke='%23DC2626' stroke-width='8'/></svg>");

addQ(2, "What is the meaning of a blue circular sign containing three curved white arrows in a clockwise circle?",
  "U-turn slot ahead",
  "Compulsory Roundabout (Rotonda) navigation",
  "End of two-way traffic",
  "Winding road ahead",
  "B", "This mandatory sign directs drivers to navigate the upcoming roundabout (rotonda) in the specified circular direction.", 2,
  "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><circle cx='50' cy='50' r='46' fill='%232563EB'/><circle cx='50' cy='50' r='26' fill='none' stroke='white' stroke-width='6' stroke-dasharray='35 15'/><polygon points='75,45 85,55 75,65' fill='white'/></svg>");

addQ(2, "What does a circular blue sign with a white arrow turning 90 degrees to the left mandate?",
  "Compulsory Left Turn ahead; all vehicles must turn left",
  "Left lane ending",
  "Sharp left bend warning",
  "One way traffic to the right",
  "A", "This mandatory sign instructs all drivers in this lane that they must turn left at the upcoming intersection.", 1);

addQ(2, "What does a circular blue sign with a white arrow turning 90 degrees to the right mandate?",
  "Compulsory Right Turn ahead; all vehicles must turn right",
  "Right lane ending",
  "Sharp right bend warning",
  "Keep left",
  "A", "This mandatory sign requires all vehicles to turn right at the intersection.", 1);

addQ(2, "What does a circular blue sign with a white bifurcated arrow pointing both Straight and Right indicate?",
  "Vehicles may either proceed straight or turn right",
  "Right turn is prohibited",
  "U-turn allowed",
  "Merging lane from the right",
  "A", "This mandatory direction sign permits traffic in this designated lane to either continue straight or execute a right turn.", 1);

addQ(2, "What does a circular blue sign with a white bifurcated arrow pointing both Straight and Left indicate?",
  "Vehicles may either proceed straight or turn left",
  "Left turn only",
  "Expressway fork",
  "Two-way road begins",
  "A", "Traffic in this lane is authorized to either proceed straight ahead or make a left turn.", 1);

addQ(2, "What does a circular blue sign with an arrow pointing down and to the left mean?",
  "Keep Left of the traffic divider or obstacle",
  "Sharp left turn required",
  "Left shoulder parking",
  "Expressway exit on left",
  "A", "Mandatory KEEP LEFT sign instructing motorists to steer to the left side of the divider or traffic island.", 2);

addQ(2, "What does a circular blue sign showing white arrows pointing down to BOTH the left and right mean?",
  "Pass on either side of the traffic island or obstruction",
  "Road closed in middle",
  "No overtaking on either side",
  "Divided highway ends",
  "A", "Vehicles are permitted to pass on either the left or right side of the physical roadway divider.", 2);

addQ(2, "What does a blue circular sign depicting a white bus silhouette indicate?",
  "Bus terminal ahead",
  "Mandatory Bus Lane / Public Utility Bus designated route",
  "No buses allowed",
  "Bus breakdown zone",
  "B", "This mandatory sign designates exclusive bus lanes (such as the EDSA Busway) for authorized public utility buses.", 1);

addQ(2, "What does a blue circular sign depicting a white bicycle silhouette indicate?",
  "Bicycle repair shop",
  "Mandatory Bicycle Lane (exclusive for bicycles and light personal mobility devices)",
  "No bicycles allowed",
  "Bicycle crossing ahead",
  "B", "Mandatory sign marking dedicated bicycle lanes where motorized cars and trucks are prohibited from driving or parking.", 1);

addQ(2, "What does a blue circular sign showing a white pedestrian silhouette signify?",
  "Pedestrian overpass only",
  "Compulsory Pedestrian Footpath / Walkway (Vehicles strictly prohibited)",
  "Pedestrian crossing on highway",
  "Jaywalking allowed zone",
  "B", "This mandatory sign marks a dedicated pedestrian pathway where all motorized vehicles are forbidden.", 1);

addQ(2, "What does a white circular sign with a red border showing a red diagonal line across a black truck passing a car mean?",
  "Trucks prohibited from overtaking other vehicles",
  "No trucks allowed on this road",
  "Truck parking lane",
  "Slow trucks keep left",
  "A", "This regulatory sign prohibits heavy trucks from switching lanes to overtake other vehicles on multi-lane highways.", 2);

addQ(2, "What does a blue rectangular sign with a white 'P' and an arrow pointing to a curb bay indicate?",
  "Designated Parking Zone in the direction indicated",
  "Police station ahead",
  "Passing zone",
  "Public utility jeepney stop",
  "A", "Informative regulatory sign indicating an authorized area for motor vehicle parking.", 1);

addQ(2, "What does a circular blue sign showing '30' with a white border indicate?",
  "Maximum speed 30 km/h",
  "Compulsory Minimum Speed Limit of 30 km/h",
  "Route 30 highway",
  "Next exit 30 meters",
  "B", "A number inside a solid blue circle is a Compulsory Minimum Speed Limit sign. Vehicles must not travel slower than 30 km/h under normal conditions.", 2);

addQ(2, "What does a white circular sign with a red border and diagonal slash over a car and motorcycle signify?",
  "All motor vehicles prohibited from entering",
  "Car and motorcycle racing zone",
  "Toll free highway",
  "Motor vehicle showroom ahead",
  "A", "This prohibitory sign bars all motorized vehicular traffic (cars, trucks, motorcycles) from entering a pedestrianized zone.", 1);

addQ(2, "What does a blue circular sign showing a white snow chain on a tire mean?",
  "Tire pressure check station",
  "Compulsory use of tire snow chains or traction devices (mountain passes in winter/mud)",
  "Flat tire repair shop",
  "Tire manufacturing plant",
  "B", "Mandatory sign requiring specialized tire traction devices on designated slippery mountain routes.", 3);

addQ(2, "What does a blue circular sign showing two white arrows facing each other vertically mean?",
  "Two-way traffic flow mandatory",
  "Priority over oncoming vehicles",
  "End of one-way street",
  "Narrow road ahead",
  "B", "On narrow roads, this blue sign indicates you have priority over oncoming vehicles traveling in the opposite direction.", 2);

addQ(2, "What does a red circular sign showing a red arrow up and a black arrow down indicate?",
  "You must give way to oncoming traffic on this single-lane narrow section",
  "You have right of way over oncoming traffic",
  "Two-way expressway",
  "Overtaking permitted",
  "A", "A red circle showing a red forward arrow and black oncoming arrow requires you to yield to oncoming vehicles in narrow passages.", 2);

// -------------------------------------------------------------
// MODULE 3: Speed Limits & Parking Restriction Signs (20 Questions)
// -------------------------------------------------------------
addQ(3, "What does a circular white sign with a red border containing the numeral '60' mean?",
  "Minimum required speed is 60 km/h",
  "Maximum legal speed limit is 60 km/h",
  "Highway route number 60",
  "Next rest stop in 60 kilometers",
  "B", "A number inside a red circle is the Maximum Speed Limit sign. You must not exceed 60 km/h under normal road conditions.", 1,
  "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><circle cx='50' cy='50' r='44' fill='white' stroke='%23DC2626' stroke-width='8'/><text x='50' y='62' fill='%23111827' font-family='sans-serif' font-size='32' font-weight='900' text-anchor='middle'>60</text></svg>");

addQ(3, "What does a blue circular sign with a red border and a single diagonal red slash over the letter 'P' indicate?",
  "No Parking anytime",
  "Paid parking zone only",
  "Public bus stop only",
  "Police outpost ahead",
  "A", "The letter 'P' with a red slash indicates NO PARKING. Stopping temporarily to load/unload passengers for less than 1 minute without leaving the driver's seat may be allowed unless a No Stopping sign is posted.", 1,
  "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><circle cx='50' cy='50' r='44' fill='%232563EB' stroke='%23DC2626' stroke-width='8'/><text x='50' y='65' fill='white' font-family='sans-serif' font-size='42' font-weight='900' text-anchor='middle'>P</text><line x1='20' y1='20' x2='80' y2='80' stroke='%23DC2626' stroke-width='8'/></svg>");

addQ(3, "What does a blue circular sign with a red border and a red 'X' (two intersecting diagonal slashes) signify?",
  "No Overtaking",
  "No Stopping and No Standing at any time",
  "Railroad intersection ahead",
  "Closed road ahead",
  "B", "A red 'X' over a blue circular disc is the NO STOPPING / NO STANDING sign, prohibiting even brief stops to drop off or pick up passengers.", 2,
  "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><circle cx='50' cy='50' r='44' fill='%232563EB' stroke='%23DC2626' stroke-width='8'/><line x1='20' y1='20' x2='80' y2='80' stroke='%23DC2626' stroke-width='8'/><line x1='80' y1='20' x2='20' y2='80' stroke='%23DC2626' stroke-width='8'/></svg>");

addQ(3, "According to RA 4136, what is the maximum allowable speed limit for passenger cars and motorcycles on open country roads with no blind corners?",
  "40 km/h",
  "60 km/h",
  "80 km/h",
  "100 km/h",
  "C", "Under Article I, Section 35 of RA 4136, the speed limit for passenger cars and motorcycles on open country roads with no blind corners is 80 km/h.", 3);

addQ(3, "According to RA 4136, within how many meters of an intersection is parking strictly prohibited?",
  "2 meters",
  "4 meters",
  "6 meters",
  "10 meters",
  "C", "Under RA 4136 Section 46, no driver shall park a vehicle within six (6) meters of the intersection of curb lines.", 3);

addQ(3, "According to RA 4136, within how many meters of a fire hydrant is parking strictly prohibited?",
  "1 meter",
  "4 meters",
  "8 meters",
  "15 meters",
  "B", "Under RA 4136 Section 46, parking is strictly prohibited within four (4) meters of the driveway entrance to any fire station or within 4 meters of any fire hydrant.", 2);

addQ(3, "According to RA 4136, what is the maximum allowable speed limit for passenger cars on 'through streets' or boulevards clear of traffic?",
  "30 km/h",
  "40 km/h",
  "50 km/h",
  "70 km/h",
  "B", "Under RA 4136 Section 35, the speed limit for passenger cars on through streets or boulevards with no blind corners is 40 km/h (30 km/h for heavy trucks and buses).", 2);

addQ(3, "Under RA 4136, what is the maximum legal speed limit for all motor vehicles on crowded city streets, intersections, and school zones?",
  "20 km/h",
  "30 km/h",
  "40 km/h",
  "50 km/h",
  "A", "The statutory maximum speed limit on crowded streets, approaching intersections at blind corners, passing school zones, or passing stationary streetcars is 20 km/h.", 1);

addQ(3, "What does a rectangular sign with 'TOW-AWAY ZONE' placed underneath a No Parking sign indicate?",
  "Free towing service available for broken-down vehicles",
  "Any illegally parked vehicle will be clamped, towed, and impounded at the owner's expense",
  "Towing trucks only parking area",
  "No towing allowed on this road",
  "B", "Vehicles violating parking restrictions in a designated Tow-Away Zone are immediately removed and subjected to heavy towing and storage fines.", 1);

addQ(3, "What does a circular white sign with a red border containing '80' crossed out by 4 diagonal gray slashes mean?",
  "Speed limit increases to 100 km/h",
  "End of 80 km/h speed limit restriction (Standard statutory road limits apply)",
  "No vehicles allowed over 80 kg",
  "80 meters to highway end",
  "B", "The End of Speed Limit sign indicates the specific posted restriction has terminated and general traffic laws apply.", 2);

addQ(3, "What is the maximum speed limit for heavy trucks and buses on Philippine expressways (e.g. NLEX / SLEX)?",
  "60 km/h",
  "80 km/h",
  "100 km/h",
  "120 km/h",
  "B", "Under expressway safety regulations and TRB rules, the maximum speed limit for heavy cargo trucks and public utility buses is 80 km/h.", 2);

addQ(3, "What does a 'NO LOADING AND UNLOADING ANYTIME' regulatory sign signify to public utility vehicle (PUV) drivers?",
  "PUVs may stop briefly for 30 seconds to drop passengers",
  "Stopping to let passengers board or alight or loading cargo is strictly prohibited under penalty of fine",
  "Only private cars may load passengers",
  "Loading allowed during rain",
  "B", "Strict prohibition against stopping for passenger boarding/alighting to prevent bottlenecks on critical road segments.", 1);

addQ(3, "Under RA 4136 Section 46, within how many meters of a railroad crossing is parking strictly prohibited?",
  "4 meters",
  "6 meters",
  "10 meters",
  "12 meters",
  "D", "Under RA 4136 Section 46(d), parking is prohibited within twelve (12) meters of the nearest rail of any railway crossing.", 3);

addQ(3, "What does a sign stating 'PARKING RESERVED FOR PERSONS WITH DISABILITIES (PWD)' indicate?",
  "Anyone may park if picking up groceries for a senior citizen",
  "Exclusive parking for vehicles displaying authorized PWD identification/stickers carrying a PWD passenger",
  "General public parking between 8:00 AM and 5:00 PM",
  "Delivery truck parking only",
  "B", "Under BP 344 (Accessibility Law) and traffic ordinances, unauthorized parking in designated PWD bays is punishable by law.", 1);

addQ(3, "What does a sign stating 'PARKING: 7:00 AM - 7:00 PM / NO PARKING: 7:01 PM - 6:59 AM' mean?",
  "Parking is permitted during daytime hours (7am to 7pm) and prohibited overnight",
  "Paid parking only at night",
  "No stopping anytime",
  "Towing service operating during daytime only",
  "A", "Time-regulated parking allows lawful parking only within the explicitly posted hours.", 1);

addQ(3, "What is the penalty under MMDA / LTO regulations for illegal parking on designated Mabuhay Lanes and national primary roads?",
  "₱100 fine",
  "₱1,000 fine for attended illegal parking, ₱2,000 for unattended illegal parking, plus towing fees",
  "Verbal warning only",
  "Immediate suspension of vehicle registration for 10 years",
  "B", "Fines for illegal parking on priority Mabuhay Lanes carry strict penalties and immediate towing for unattended vehicles.", 2);

addQ(3, "When parking a vehicle parallel to the curb on a level two-way street in the Philippines, your right-hand wheels must be within what distance of the curb?",
  "Within 30 centimeters (approx. 12 inches)",
  "Within 1 meter",
  "Within 2 meters",
  "Touching the curb with tires",
  "A", "Standard parallel parking regulations require parking within 30 cm of the curb to avoid impeding traffic flow.", 2);

addQ(3, "When parking a motor vehicle facing UPHILL on a street with a curb, which direction should you turn your front wheels?",
  "Straight ahead",
  "Turn wheels to the left (away from the curb) so the tire will roll back against the curb if brakes fail",
  "Turn wheels to the right (toward the curb)",
  "It makes no mechanical difference",
  "B", "Turning wheels to the left away from the curb ensures that if the vehicle rolls backward, the front right tire will roll into and bind against the curb.", 2);

addQ(3, "When parking facing DOWNHILL on a street with a curb, which direction should you turn your front wheels?",
  "Turn wheels to the right (toward the curb) and engage handbrake and reverse gear",
  "Turn wheels to the left",
  "Keep wheels perfectly straight",
  "Shift into neutral and release handbrake",
  "A", "Turning wheels toward the curb ensures the front tire rolls directly into the curb if the vehicle begins creeping forward.", 2);

addQ(3, "Under RA 4136, is it lawful to leave a motor vehicle unattended on a highway with the engine running?",
  "Yes, if air conditioning is on",
  "No, the driver must turn off the engine, engage the parking brake, and remove the ignition key",
  "Yes, for up to 10 minutes",
  "Yes, if hazard lights are flashing",
  "B", "Under RA 4136 Section 47, no person shall leave a motor vehicle unattended without stopping the engine, locking the ignition, removing the key, and setting the handbrake.", 1);

// Save progress to inspect count
console.log("Modules 1-3 built. Total questions so far: " + questions.length);

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


// -------------------------------------------------------------
// MODULE 10: Right-of-Way Rules & Intersection Priority (20 Questions)
// -------------------------------------------------------------
addQ(10, "At an uncontrolled 4-way intersection where two vehicles arrive at the exact same time from perpendicular roads, who has the right-of-way?",
  "Vehicle A (on the vertical road)",
  "Vehicle B on the right side of Vehicle A has the right-of-way",
  "The heavier or larger vehicle",
  "Whichever vehicle honks first",
  "B", "Under RA 4136 Section 42(a), when two vehicles approach an uncontrolled intersection at the same time, the driver on the left must yield to the vehicle on their right.", 2,
  "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect x='5' y='5' width='90' height='90' rx='10' fill='%231F2937'/><rect x='36' y='0' width='28' height='100' fill='%23374151'/><rect x='0' y='36' width='100' height='28' fill='%23374151'/><rect x='44' y='68' width='12' height='20' rx='3' fill='%233B82F6'/><rect x='68' y='44' width='20' height='12' rx='3' fill='%2310B981'/><text x='50' y='78' fill='white' font-size='8' font-weight='bold' text-anchor='middle'>A</text><text x='78' y='52' fill='white' font-size='8' font-weight='bold' text-anchor='middle'>B</text></svg>");

addQ(10, "When making a Left Turn across opposing oncoming traffic at an intersection without a green turn arrow, you must:",
  "Speed up to turn before oncoming vehicles arrive",
  "Yield the right-of-way to all oncoming vehicles proceeding straight or turning right",
  "Honk continuously and claim right-of-way",
  "Flash your high beams to force oncoming traffic to stop",
  "B", "Under Section 42(b) of RA 4136, a driver intending to turn left within an intersection must yield the right of way to any oncoming vehicle approaching straight or turning right.", 1);

addQ(10, "When an authorized Emergency Vehicle (Ambulance, Fire Truck, or Police Car) approaches sounding a siren or flashing red/blue lights, what must all drivers do?",
  "Speed up to clear the road ahead of the ambulance",
  "Immediately drive to the right-hand edge/curb of the road and come to a complete stop until it passes",
  "Stop immediately in the center lane",
  "Follow closely behind the emergency vehicle to bypass heavy traffic",
  "B", "Under RA 4136 Section 43, drivers must immediately pull over as close as possible to the right-hand curb and remain stopped until the emergency vehicle has completely passed.", 1);

addQ(10, "When entering a public highway or thoroughfare from a private driveway, garage, or building alley, who has the right-of-way?",
  "The vehicle exiting the private driveway",
  "All vehicles already traveling on the public highway",
  "The vehicle moving at the higher speed",
  "Motorcycles exiting the alley",
  "B", "Under Section 42(c) of RA 4136, a driver entering a public highway from a private road or driveway must yield the right of way to all vehicles approaching on the highway.", 1);

addQ(10, "On a steep, narrow mountain road where two vehicles cannot pass each other simultaneously, which vehicle has the right-of-way?",
  "The vehicle descending (going downhill)",
  "The vehicle ascending (traveling uphill)",
  "The smaller passenger vehicle",
  "The vehicle traveling faster",
  "B", "The vehicle traveling uphill (ascending) has the right of way because it is harder to regain momentum and start from a standstill on a steep grade. The downhill vehicle must back up if needed.", 2);

addQ(10, "At a T-junction without traffic signs, which vehicle must yield the right-of-way?",
  "The vehicle traveling on the through road (top bar of the T)",
  "The vehicle traveling on the terminating road (stem of the T) must yield to through traffic",
  "Whichever vehicle is larger",
  "The vehicle arriving second",
  "B", "Traffic on the terminating road must yield to vehicles flowing continuously along the through street.", 1);

addQ(10, "When two vehicles approach an uncontrolled intersection at different times, who has the right-of-way?",
  "The vehicle that reached and entered the intersection FIRST",
  "The vehicle that is traveling faster",
  "The vehicle on the left",
  "The public utility jeepney",
  "A", "First-in, first-out rule: The driver of a vehicle who has already entered the intersection has right-of-way over vehicles still approaching.", 1);

addQ(10, "When turning right into a two-lane street with a pedestrian crossing the side street, who has right of way?",
  "The turning vehicle",
  "The pedestrian crossing the street has absolute right of way",
  "Neither; both must stop forever",
  "The vehicle if turning on green",
  "B", "Pedestrians lawfully crossing within any marked or unmarked crosswalk at an intersection have right-of-way over turning vehicles.", 1);

addQ(10, "Does an official funeral procession or presidential motorcade accompanied by police escorts have right-of-way at intersections?",
  "No, they must follow normal red lights",
  "Yes, drivers must yield right-of-way and must not drive between vehicles of a lawful escort/procession",
  "Only if traveling over 80 km/h",
  "Only on Sundays",
  "B", "Authorized motorcades and escorted processions have statutory priority; cutting into an escorted convoy is a traffic violation.", 2);

addQ(10, "When approaching a STOP sign at an intersection where another vehicle is stopped on the perpendicular street with a GIVE WAY sign, who proceeds first?",
  "The vehicle facing the GIVE WAY sign (once clear)",
  "The vehicle facing the STOP sign must make a full stop first; the vehicle on the priority road moves first",
  "Whichever driver flashes headlights first",
  "The vehicle turning left",
  "B", "A STOP sign mandates a full halt; drivers on priority streets or facing lesser yield signs have priority once the stop is made.", 2);

addQ(10, "If you are already inside an intersection waiting to complete a left turn when the traffic signal turns yellow and then red, what should you do?",
  "Reverse rapidly back behind the stop line",
  "Wait until oncoming traffic stops, then complete your left turn safely to clear the intersection",
  "Remain stopped directly in the center of the intersection",
  "Abandon vehicle",
  "B", "Vehicles caught inside the junction to turn left should complete their turn once oncoming traffic halts to avoid gridlock.", 2);

addQ(10, "When entering a highway from an acceleration merge lane, do you have right-of-way over vehicles on the highway?",
  "Yes, merging traffic always has priority",
  "No, traffic on the main highway has right-of-way; merging vehicles must adjust speed and yield to open gaps",
  "Yes, if your turn signal is blinking",
  "Yes, if you drive faster than 100 km/h",
  "B", "Highway through-traffic holds right-of-way; merging traffic must yield and merge seamlessly into gaps.", 1);

addQ(10, "At a four-way all-way stop intersection (4-Way STOP), if four vehicles arrive at the exact same instant from all 4 directions, how is right-of-way resolved safely?",
  "All drivers accelerate simultaneously",
  "Drivers yield to the right; if deadlocked, communication through hand gestures and eye contact establishes who proceeds first safely",
  "The loudest horn goes first",
  "The oldest vehicle goes first",
  "B", "Mutual courtesy, eye contact, and yielding to the right resolve multi-vehicle deadlocks safely.", 2);

addQ(10, "What is the right-of-way rule between a motor vehicle and a train at an unprotected railway crossing?",
  "The motor vehicle has right of way if already on the tracks",
  "The train ALWAYS has absolute right-of-way because trains cannot stop quickly or swerve",
  "Trains must stop for buses",
  "Whoever reaches the crossbuck first",
  "B", "Trains always have absolute priority due to immense mass and stopping distances exceeding 500+ meters.", 1);

addQ(10, "When entering a traffic rotary (roundabout) with multiple lanes, when must you yield to bicycles in the circular roadway?",
  "Never, bicycles must yield to cars",
  "Always; bicycles inside the circulatory roadway are treated as vehicles and hold right-of-way",
  "Only if the bicycle has flashing lights",
  "Only during daylight",
  "B", "Bicycles are legal vehicles on public roads and enjoy identical right-of-way protections in roundabouts.", 1);

addQ(10, "If an ambulance approaching from behind has its siren off but flashing emergency lights on, do you need to give way?",
  "No, only if the siren is sounding",
  "Yes, emergency lights alone signify an urgent emergency mission requiring all traffic to yield",
  "Only if it is a government ambulance",
  "Only on expressways",
  "B", "Flashing emergency lights indicate an active emergency operation; drivers must yield right-of-way immediately.", 1);

addQ(10, "What should you do if an emergency vehicle approaches from behind while you are stopped at a red traffic light with no room to pull right?",
  "Remain calm, wait until cross traffic is clear, then cautiously move forward or edge right into the intersection if safe to allow the emergency vehicle passage",
  "Reverse into the car behind you",
  "Ignore the emergency vehicle completely",
  "Get out of the car and run",
  "A", "In gridlock at red lights, carefully inch forward or edge rightward safely to open a passage corridor.", 2);

addQ(10, "When leaving a designated parallel parking slot along the curb to enter traffic flow, who has right-of-way?",
  "The vehicle pulling out of the parking slot",
  "All moving vehicles already traveling in the traffic lane",
  "The vehicle with hazards flashing",
  "The vehicle moving in reverse",
  "B", "Vehicles departing from a parked position must wait and yield to all moving traffic in the lane.", 1);

addQ(10, "On a two-lane undivided road where one lane is obstructed by roadwork or a parked truck, which direction has right-of-way?",
  "The vehicle whose lane is obstructed must yield to oncoming traffic in the clear lane",
  "The vehicle with the obstruction has priority",
  "Whichever vehicle flashes high beams first",
  "The faster vehicle",
  "A", "The driver whose travel lane is physically blocked must wait until oncoming traffic in the unobstructed lane has cleared.", 1);

addQ(10, "What is the defensive driving philosophy regarding 'Right-of-Way'?",
  "Right-of-way is something you demand and take by force",
  "Right-of-way is something given by others to you, not something to be claimed aggressively at the expense of an avoidable crash",
  "Right-of-way belongs to whoever has the more expensive car",
  "Right-of-way is decided by vehicle weight",
  "B", "Never insist on right-of-way if doing so causes a crash. The right of way must be given, never forced.", 1);

// -------------------------------------------------------------
// MODULE 11: Overtaking, Passing & Expressway Driving Rules (20 Questions)
// -------------------------------------------------------------
addQ(11, "As a general rule on Philippine roads, on which side must a driver overtake or pass another vehicle traveling in the same direction?",
  "On the left side only, after signaling and ensuring the lane is clear",
  "On the right shoulder whenever traffic is slow",
  "On whichever side has more open space",
  "On the sidewalk if necessary",
  "A", "Under RA 4136 Section 39, overtaking must always be made on the left side of the vehicle being passed, returning to the right lane only when safely clear.", 1);

addQ(11, "In which of the following situations is overtaking strictly PROHIBITED under RA 4136?",
  "On multi-lane straight expressways",
  "Approaching the crest of a hill, on blind curves, at railway crossings, and within intersections",
  "On open dry highways during daytime",
  "When passing a stationary bicycle on the shoulder",
  "B", "Under RA 4136 Section 41, passing is strictly prohibited on blind curves, hills with obstructed views, railway crossings, intersections, and school zones.", 2);

addQ(11, "What is the primary function of the extreme Leftmost lane on Philippine multi-lane expressways (e.g. SLEX, NLEX, SCTEX, TPLEX)?",
  "Cruising lane for slow-moving trucks and buses",
  "Passing / Overtaking lane only",
  "Emergency breakdown parking lane",
  "Continuous cruising lane at 60 km/h",
  "B", "Expressway regulations dictate 'Keep Right Except to Pass'. The leftmost lane (Lane 1) is dedicated for overtaking; lingering in it constitutes lane hogging.", 2);

addQ(11, "What is the maximum speed limit for passenger cars on Philippine expressways (e.g. NLEX / SLEX)?",
  "60 km/h",
  "80 km/h",
  "100 km/h",
  "120 km/h",
  "C", "The maximum legal speed limit for passenger cars on Philippine expressways is 100 km/h (minimum speed is 60 km/h).", 1);

addQ(11, "When driving at 80 km/h in ideal weather conditions, what is the minimum safe following distance recommended by the defensive driving rule?",
  "At least 1 car length",
  "The 3-Second Rule (increasing to 4–6 seconds in rainy or slippery conditions)",
  "5 meters behind the bumper",
  "Close enough to read their license plate",
  "B", "The 3-Second Rule ensures adequate perception and braking distance under normal dry conditions, and should be doubled during heavy rain or wet roads.", 2);

addQ(11, "Under what specific condition is overtaking on the RIGHT side legally permitted under Philippine traffic law?",
  "When driving on the shoulder during heavy traffic",
  "On multi-lane one-way streets or highways where two or more lanes of traffic move in the same direction, or when the vehicle ahead is making a lawful left turn",
  "Whenever the vehicle ahead is driving below the speed limit",
  "During nighttime on country roads",
  "B", "Passing on the right is permitted only on multi-lane designated thoroughfares or when passing a vehicle actively executing a left turn.", 2);

addQ(11, "When another vehicle signals and begins to overtake you on a two-lane road, what is your legal duty as the driver being passed under RA 4136?",
  "Speed up to prevent them from passing",
  "Give way to the right, do not increase your speed, and assist the passing driver to complete the pass safely",
  "Move to the center line to block their view",
  "Honk aggressively and flash high beams",
  "B", "Under RA 4136 Section 40, the driver of a vehicle about to be overtaken must give way to the right and must not increase speed until the pass is complete.", 1);

addQ(11, "Before initiating an overtaking maneuver on a two-lane country highway, what must you verify about the oncoming lane?",
  "That oncoming traffic is at least 10 meters away",
  "That the oncoming lane is clearly visible and free of oncoming traffic for a sufficient distance to complete the pass without forcing oncoming or passed vehicles to brake",
  "That you have loud music playing",
  "That you can drive at 140 km/h",
  "B", "Overtaking requires a clear, unobstructed sight distance allowing safe return to your lane with a wide safety margin.", 2);

addQ(11, "How do you know it is safe to return to your original right lane after passing a vehicle?",
  "When you can see both headlights of the passed vehicle in your interior rearview mirror",
  "Immediately after your front bumper clears their front fender",
  "When the driver behind flashes high beams angrily",
  "After counting to 3",
  "A", "Seeing both headlights of the passed car in your central rearview mirror ensures adequate clearance before pulling back in.", 2);

addQ(11, "What is 'Tailgating' and why is it dangerous?",
  "Following the vehicle ahead too closely, which drastically reduces reaction time and makes rear-end crashes inevitable if the front vehicle brakes suddenly",
  "Driving with an open tailgate cargo hatch",
  "Parking in reverse",
  "Driving with broken brake lights",
  "A", "Tailgating is an aggressive, high-risk behavior that eliminates emergency stopping space.", 1);

addQ(11, "What is 'Lane Hogging' on an expressway?",
  "Driving continuously in the passing/overtaking (leftmost) lane at speeds below or equal to cruising traffic, obstructing faster vehicles",
  "Hauling livestock in a pickup truck",
  "Parking on the median",
  "Changing lanes with turn signals",
  "A", "Lane hogging blocks the overtaking lane, causing bottlenecks and tempting dangerous passing on the right.", 2);

addQ(11, "What is the minimum speed limit enforced on Philippine expressways (e.g. SLEX / NLEX / SCTEX / TPLEX / CAVITEX)?",
  "30 km/h",
  "40 km/h",
  "60 km/h",
  "80 km/h",
  "C", "To maintain uniform high-speed flow and prevent rear-end collisions, the statutory minimum speed limit on expressways is 60 km/h.", 1);

addQ(11, "Are U-turns permitted on Philippine expressways across the central grass median or service openings?",
  "Yes, if no patrol car is watching",
  "No, U-turns on expressways are strictly prohibited and illegal except at authorized elevated U-turn overpasses or designated interchange exits",
  "Yes, for passenger cars only",
  "Yes, during emergencies",
  "B", "Making a U-turn through median barriers on a 100 km/h expressway is an extremely dangerous and illegal violation.", 1);

addQ(11, "What is the purpose of the extreme Rightmost shoulder (Emergency Shoulder) on an expressway?",
  "Overtaking slow traffic during rush hour",
  "Exclusive use for vehicle breakdowns, flat tires, and emergency services (Stopping for non-emergencies is strictly prohibited)",
  "Jeepney loading and unloading zone",
  "Rest area for taking naps",
  "B", "Expressway shoulders are reserved strictly for stalled vehicles and authorized emergency response units.", 1);

addQ(11, "If you miss your intended exit on an expressway, what should you do?",
  "Stop immediately and put your car in reverse on the shoulder",
  "Make a U-turn across the median grass",
  "Continue driving forward to the very next exit, pay the toll, and re-enter or take alternate routes safely",
  "Turn off headlights and reverse in the driving lane",
  "C", "Never reverse or stop on an expressway. Proceed calmly to the next interchange.", 1);

addQ(11, "What is the 'Two-Second Rule' in traffic driving and when should it be increased to 4 or 5 seconds?",
  "A method to measure following distance; it should be doubled during heavy rain, wet pavement, fog, towing, or driving heavy loads",
  "The time required to change gears",
  "The duration of amber traffic lights",
  "The time to honk your horn",
  "A", "The distance rule measures seconds behind a fixed landmark, which must expand significantly in poor weather or low grip.", 1);

addQ(11, "When driving on a multi-lane expressway, what should you do before changing lanes?",
  "Turn your steering wheel sharply and check mirrors later",
  "Check rearview mirror, side mirror, glance over your shoulder to check the blind spot, activate turn signal for at least 3 seconds, and change lanes smoothly when clear",
  "Honk horn and change lanes immediately",
  "Flash hazard warning lights",
  "B", "Mirror-Signal-Blindspot-Maneuver protocol ensures safe lane transitions at high speeds.", 2);

addQ(11, "Why is overtaking on a two-lane bridge or inside a tunnel strictly prohibited?",
  "There is no road shoulder or escape path in case an oncoming vehicle appears or a tire blows out",
  "Bridges have too much fresh air",
  "Tunnels are always pitch black",
  "Bridge tolls cost more",
  "A", "Bridges and tunnels feature rigid concrete parapets and narrow clearances with zero margin for evasive maneuvers.", 2);

addQ(11, "What should a motorcycle rider avoid doing when riding between lanes of stopped or slow-moving traffic ('lane splitting / filtering')?",
  "Riding at high differential speed, weaving abruptly between bumpers, and passing in vehicle blind spots",
  "Wearing a helmet",
  "Keeping both hands on the handlebars",
  "Checking mirrors",
  "A", "Aggressive high-speed filtering between lanes is a primary cause of motorcycle-door collisions and fatal impacts.", 1);

addQ(11, "What does a sign reading 'KEEP RIGHT EXCEPT TO PASS' remind all motorists on multi-lane highways?",
  "Cruising should be maintained in the rightmost or middle lanes; the leftmost lane is reserved strictly for overtaking slower vehicles",
  "Turn right at every exit",
  "No left turns allowed on the entire island",
  "Drive only on the shoulder",
  "A", "Core highway discipline requires keeping to the right lanes to keep passing corridors unblocked.", 1);

// -------------------------------------------------------------
// MODULE 12: General Traffic Code & Republic Act 4136 (20 Questions)
// -------------------------------------------------------------
addQ(12, "What is the official title of Republic Act No. 4136?",
  "The Clean Air Act of the Philippines",
  "The Land Transportation and Traffic Code",
  "The Anti-Drunk and Drugged Driving Act",
  "The Motor Vehicle Registration Act",
  "B", "Republic Act No. 4136 is officially entitled 'The Land Transportation and Traffic Code' of the Philippines, enacted as the primary governing traffic statute.", 1);

addQ(12, "What is the legal status of a driver's license in the Philippines?",
  "A constitutional right granted to all adult citizens",
  "A privilege granted by the government through the LTO, subject to revocation or suspension for traffic violations",
  "An irrevocable personal property document",
  "A lifetime identification card that cannot be confiscated",
  "B", "A driver's license in the Philippines is a privilege, not a right. The government, through the LTO, may suspend or revoke it for violations of road safety laws.", 1);

addQ(12, "Under RA 4136, during what hours must headlights on all moving motor vehicles be illuminated?",
  "From 8:00 PM to 4:00 AM",
  "From at least thirty minutes past sunset until at least thirty minutes before sunrise, or whenever visibility is poor",
  "Only during complete pitch black darkness",
  "Only when driving on provincial highways",
  "B", "Under RA 4136 Section 34(c), headlights must be lighted from 30 minutes after sunset until 30 minutes before sunrise, and at any time when natural light is insufficient.", 2);

addQ(12, "When meeting an oncoming motor vehicle on a dark highway at night, within how many meters must you dip (switch to low beam) your headlights?",
  "At least 50 meters",
  "At least 200 meters (or as soon as oncoming headlights appear)",
  "At least 500 meters",
  "Only when the oncoming driver flashes their high beams",
  "B", "To prevent blinding oncoming drivers with high-beam glare, switch to low beams within at least 200 meters of an approaching oncoming vehicle.", 2);

addQ(12, "What is required of a holder of a Student Driver's Permit when operating a motor vehicle on any public highway?",
  "They may drive alone if carrying an LTO official receipt",
  "They must be accompanied by a duly licensed driver (holding a valid Non-Professional or Professional Driver's License)",
  "They may only drive between 9:00 AM and 3:00 PM",
  "They can only drive an automatic transmission vehicle",
  "B", "Under RA 4136 Section 30, a student driver cannot operate a motor vehicle unless accompanied by a licensed driver who is seated beside the student.", 1);

addQ(12, "What is the minimum age requirement to apply for a Student Driver's Permit in the Philippines under current LTO guidelines?",
  "16 years old",
  "17 years old",
  "18 years old",
  "21 years old",
  "A", "Under LTO administrative orders, the minimum age to obtain a Student Driver's Permit is 16 years old (with parental consent if minor).", 1);

addQ(12, "What is the minimum age requirement to apply for a Non-Professional Driver's License?",
  "16 years old",
  "17 years old",
  "18 years old",
  "21 years old",
  "B", "Under current LTO regulations, applicants for a Non-Professional Driver's License must be at least seventeen (17) years of age and hold a valid student permit for at least 1 month.", 1);

addQ(12, "What is the minimum age requirement to apply for a Professional Driver's License in the Philippines?",
  "17 years old",
  "18 years old",
  "21 years old",
  "25 years old",
  "B", "Applicants for a Professional Driver's License must be at least eighteen (18) years old and have held a valid Non-Professional license for at least 6 months or 1 year depending on vehicle weight code.", 1);

addQ(12, "Under the new LTO Driver's License Code system (replacing old numerical Restriction Codes 1, 2, 3), which code allows driving passenger cars up to 5,000 kg GVW with up to 8 passenger seats?",
  "Code A (Motorcycles)",
  "Code B (Passenger Cars, SUVs, Pickups up to 5,000 kg GVW)",
  "Code C (Heavy Commercial Trucks)",
  "Code D (Passenger Buses)",
  "B", "DL Code B covers light passenger motor vehicles with Gross Vehicle Weight up to 5,000 kg and seating up to 8 passengers.", 2);

addQ(12, "Under the new LTO Driver's License Code system, which code is required to legally operate motorcycles and motor tricycles?",
  "Code A and A1",
  "Code B",
  "Code C",
  "Code E",
  "A", "Code A covers motorcycles (L1, L2, L3) and Code A1 covers tricycles and three-wheeled light vehicles (L4, L5).", 2);

addQ(12, "What does DL Code 'C' authorize a professional driver to operate?",
  "Tricycles only",
  "Heavy commercial cargo trucks with Gross Vehicle Weight exceeding 5,000 kg",
  "Passenger buses with more than 8 seats",
  "Trailers exceeding 750 kg",
  "B", "DL Code C is for heavy rigid commercial freight trucks exceeding 5,000 kg GVW.", 2);

addQ(12, "What does DL Code 'D' authorize a professional driver to operate?",
  "Heavy commercial freight trucks",
  "Passenger buses (M2 and M3 vehicles with more than 8 passenger seats)",
  "Articulated trailers",
  "Motorcycles",
  "B", "DL Code D is designated for passenger buses transporting more than 8 passengers for public or private carriage.", 2);

addQ(12, "What does DL Code 'BE' authorize a driver to operate?",
  "Passenger vehicle (Code B) towing a heavy trailer exceeding 750 kg GVW",
  "Motorcycle with sidecar",
  "Bus with articulated accordion joint",
  "Electric scooter",
  "A", "Code BE allows passenger vehicles in Code B to tow heavy trailers or caravans exceeding 750 kg gross weight.", 3);

addQ(12, "Under RA 4136, where must the official motor vehicle license plates and validation stickers be mounted?",
  "Inside the glove compartment",
  "One plate conspicuously mounted at the front and one at the rear, kept clean, illuminated at night, and free from any cover, tint, or obstruction",
  "Behind the tinted front windshield",
  "On the dashboard",
  "B", "Under Section 18 of RA 4136, license plates must be firmly attached front and rear, fully visible, free from tinted plastic shields or folding brackets.", 1);

addQ(12, "What is the legal validity period of a temporary Tourist Driving Permit for foreign visitors in the Philippines using their foreign driver's license?",
  "30 Days",
  "90 Days from the date of their arrival in the Philippines",
  "180 Days",
  "1 Year",
  "B", "Under RA 4136 Section 21, foreign tourists may operate a motor vehicle using their valid foreign driver's license for up to ninety (90) days from arrival.", 2);

addQ(12, "Under RA 4136 Section 35(b), in which of the following areas is the speed limit reduced to 20 km/h for all motor vehicles?",
  "Passing school zones, crowded marketplaces, intersections with blind corners, and passing hospital quiet zones",
  "Expressways",
  "Open country highways",
  "National provincial roads",
  "A", "Crowded areas, school zones, blind intersections, and hospital streets have a statutory maximum ceiling of 20 km/h.", 1);

addQ(12, "What is the legal requirement regarding horns and sound warning devices on motor vehicles under RA 4136?",
  "Every motor vehicle must have an operational horn audible for at least 200 meters, but horns producing harsh or unreasonably loud sounds (musical sirens) are prohibited",
  "Horns are completely optional",
  "Sirens and blinkers are allowed on all private cars",
  "Horns must only be used on highways",
  "A", "Horns must be functional and audible for 200 meters. Sirens, bells, and emergency flashers are strictly prohibited on non-emergency vehicles.", 2);

addQ(12, "Under Presidential Decree No. 96, who is authorized to use sirens (wang-wang), bells, horns producing exceptionally loud sounds, and dome flashing lights on motor vehicles?",
  "Any government employee or elected official",
  "Exclusively authorized emergency vehicles: PNP, AFP, Fire Trucks, Ambulances, and the top 5 highest national government leaders (President, VP, Senate President, Speaker, Chief Justice)",
  "Private security guards",
  "Public utility buses",
  "B", "PD 96 strictly prohibits unauthorized sirens (wang-wang) and emergency blinkers on private and unauthorized government vehicles.", 1);

addQ(12, "What color must the rear tail lights and license plate light be on all registered motor vehicles in the Philippines?",
  "Tail lights must emit red light visible from 100 meters; license plate light must emit white light illuminating the rear plate",
  "Tail lights must be blue and plate lights green",
  "Tail lights must be flashing yellow",
  "All lights can be any color",
  "A", "Under RA 4136 Section 34, tail lights must be red, brake lights red/amber, and license plate lamp white.", 1);

addQ(12, "What color must turn signal lights (direction indicators) emit on the front and rear of motor vehicles?",
  "Front: Amber or White; Rear: Amber or Red",
  "Front: Blue; Rear: Green",
  "Purple or Pink",
  "Neon green only",
  "A", "Standard automotive lighting regulations mandate amber/white front turn signals and amber/red rear turn signals.", 1);


// -------------------------------------------------------------
// MODULE 13: Special Laws: Anti-Drunk (RA 10586) & Distracted Driving (RA 10913) (20 Questions)
// -------------------------------------------------------------
addQ(13, "Under Republic Act No. 10586 (Anti-Drunk and Drugged Driving Act of 2013), what is the maximum allowable Blood Alcohol Concentration (BAC) for drivers of PRIVATE motor vehicles?",
  "0.00% BAC (Zero tolerance)",
  "Less than 0.05% BAC (0.05 grams of alcohol per 100 ml of blood)",
  "0.08% BAC",
  "0.10% BAC",
  "B", "Under RA 10586, for private motor vehicle drivers, BAC must be below 0.05%. However, for professional drivers and commercial public utility operators, the limit is strictly 0.00% (Zero tolerance).", 2);

addQ(13, "Under RA 10586, if a law enforcement officer has reasonable cause to believe a driver is intoxicated, which three mandatory Field Sobriety Tests must be administered first?",
  "IQ test, hearing test, and vision test",
  "Eye Test (Horizontal Gaze Nystagmus), Walk-and-Turn Test, and One-Leg Stand Test",
  "Blood test, urine test, and saliva swab",
  "Push-ups, sit-ups, and sprint test",
  "B", "RA 10586 prescribes three standardized Field Sobriety Tests: (1) Horizontal Gaze Nystagmus, (2) Walk-and-Turn, and (3) One-Leg Stand before utilizing an electronic Breath Analyzer.", 3);

addQ(13, "What is the legal penalty under RA 10586 if a driver refuses to undergo mandatory field sobriety tests or a breath analyzer exam upon lawful order?",
  "A ₱500 administrative fine only",
  "Automatic confiscation and immediate revocation of driver's license in addition to statutory penalties",
  "A verbal warning",
  "Mandatory driving re-education course",
  "B", "Refusal to undergo field sobriety or breath analyzer testing results in automatic confiscation and immediate revocation/suspension of the driver's license by the LTO.", 2);

addQ(13, "Under Republic Act No. 10913 (Anti-Distracted Driving Act), which action is considered a prohibited 'distracted driving' violation while the motor vehicle is in motion or temporarily stopped at a red light?",
  "Using a hands-free dash-mounted phone for navigation that does not obstruct the driver's line of sight",
  "Holding and using a mobile phone to write, send, or read text messages, make calls, or play games",
  "Listening to music through the car stereo system",
  "Looking at the side and rearview mirrors",
  "B", "RA 10913 strictly bans holding or operating electronic communications devices with your hands while driving or waiting at red lights. Hands-free navigation mounted within the safe visual zone is permitted.", 1);

addQ(13, "Under Republic Act No. 11229 (Child Safety in Motor Vehicles Act), at what age and height is a child strictly prohibited from sitting in the front passenger seat?",
  "Children 12 years old and below, unless they are at least 150 cm (4\\'11\\\") in height and properly fitted with standard seat belts",
  "Children 5 years old and below",
  "Children 18 years old and below",
  "Any child weighing less than 10 kg",
  "A", "Under RA 11229, children aged 12 and below cannot sit in the front seat and must use an approved Child Restraint System (CRS) in the rear seat unless they exceed 150 cm in height.", 2);

addQ(13, "Under Republic Act No. 8750 (Seat Belts Use Act of 1999), who is legally required to wear seat belt devices in a moving motor vehicle?",
  "The driver and front-seat passenger only",
  "Both the driver and all front AND rear passengers in private motor vehicles with operational seat belts",
  "Only children under 10",
  "Only passengers on expressways",
  "B", "Under RA 8750, the driver and all front and rear seat passengers must wear operational seat belts at all times while the vehicle is in motion.", 1);

addQ(13, "Under RA 8750, what age is a child strictly prohibited from occupying the front passenger seat of any motor vehicle with running engine?",
  "Infants under 6 months only",
  "Children six (6) years old and below",
  "Children twelve (12) years old and below",
  "Anyone under 18",
  "B", "Under Section 5 of RA 8750, infants and children 6 years of age and below are prohibited from sitting in the front passenger seat.", 2);

addQ(13, "Under Republic Act No. 10054 (Motorcycle Helmet Act of 2009), what type of helmet must motorcycle riders and pillion passengers wear?",
  "Bicycle safety helmets",
  "Standard Protective Motorcycle Helmet with a valid Philippine Standard (PS) mark or Import Commodity Clearance (ICC) sticker",
  "Industrial construction hard hats",
  "Baseball caps",
  "B", "RA 10054 mandates certified full-face or open-face helmets bearing official DTI-PS or ICC compliance stickers.", 1);

addQ(13, "Under Republic Act No. 10666 (Children's Safety on Motorcycles Act of 2015), when is a small child legally permitted to ride as a passenger on a two-wheeled motorcycle on public roads?",
  "Anytime if held tightly by an adult",
  "Only if the child can comfortably reach the standard footpegs, wrap their arms around the rider's waist, and wears a standard certified motorcycle helmet",
  "Only if traveling under 20 km/h",
  "Children are never allowed under any circumstances",
  "B", "RA 10666 permits child pillions only if they reach foot pegs, encircle the driver's waist, and wear certified helmets (except medical emergencies).", 2);

addQ(13, "Under RA 10586, what is the maximum allowable Blood Alcohol Concentration (BAC) for drivers of TRUCKS, BUSES, MOTORCYCLES, and PUBLIC UTILITY VEHICLES (PUVs)?",
  "0.05% BAC",
  "0.00% BAC (Strict Zero Tolerance)",
  "0.02% BAC",
  "0.08% BAC",
  "B", "Professional drivers, commercial transport operators, and motorcycle riders are held to a strict 0.00% BAC zero-tolerance standard.", 1);

addQ(13, "Under RA 10913 (Anti-Distracted Driving Act), where is the 'Safe Zone' defined for mounting mobile devices and GPS navigation screens on the vehicle dashboard?",
  "Directly in front of the driver's eye level on the steering wheel",
  "Within an area not exceeding four (4) inches from the dashboard surface, positioned low so it does not obstruct the driver's forward line of sight",
  "On the passenger side floor",
  "Hanging from the rearview mirror",
  "B", "Dash-mounted screens must be within the 4-inch base zone without occluding clear forward road vision.", 2);

addQ(13, "Under RA 10586, what are the criminal penalties if an intoxicated driver causes a vehicular crash resulting in physical injuries or death?",
  "A warning letter from the barangay",
  "Imprisonment under the Revised Penal Code (Homicide / Serious Physical Injuries), mandatory fines ranging from ₱100,000 to ₱500,000, and permanent revocation of driver's license",
  "₱1,000 fine only",
  "Community service for 2 days",
  "B", "Drunk driving causing death or severe injury carries severe multi-year prison sentences, massive statutory fines, and lifetime license revocation.", 2);

addQ(13, "Under RA 10054, are motorcycle riders exempt from wearing standard helmets when traveling inside private subdivisions or short barangay roads?",
  "Yes, helmets are only for national highways",
  "No, wearing a certified helmet is mandatory on ALL public and private roads, highways, and streets throughout the Philippines",
  "Yes, during nighttime",
  "Yes, for short trips under 500 meters",
  "B", "The Mandatory Helmet Law applies universally across all roads and thoroughfares nationwide without exemption.", 1);

addQ(13, "What is the penalty for using a fake or counterfeit DTI-ICC helmet sticker under RA 10054?",
  "₱500 fine",
  "Fines ranging from ₱10,000 to ₱20,000 without prejudice to criminal prosecution for falsification of public documents",
  "No penalty",
  "1-day driving ban",
  "B", "Distributing, buying, or using counterfeit safety stickers carries heavy statutory fines and criminal charges.", 2);

addQ(13, "Under RA 11229, what is an approved 'Child Restraint System' (CRS)?",
  "A standard seatbelt tied with a knot",
  "A specialized device capable of accommodating a child in a seated or supine position (e.g. rear-facing car seat, booster seat) meeting UN Regulations 44 or 129",
  "A pillow placed behind the child's back",
  "Holding the baby in an adult's lap",
  "B", "Approved CRS devices must conform to internationally certified child safety crashworthiness standards (UN R44/R129).", 2);

addQ(13, "Under RA 10913, are drivers permitted to use mobile phones with hands-free Bluetooth earpieces while driving?",
  "Yes, provided the device is operated via single-touch or voice commands without holding the phone",
  "No, all phone calls are completely illegal",
  "Only if stopped at a red light",
  "Only for government officials",
  "A", "Hands-free phone usage (Bluetooth speaker/earpiece) is permitted provided hands remain on the wheel.", 1);

addQ(13, "Under RA 10586, what instrument is used to determine a driver's breath alcohol content after failing field sobriety tests?",
  "Breathalyzer (Approved Electronic Alcohol Breath Analyzer - ABA)",
  "Thermometer",
  "Stethoscope",
  "Radar gun",
  "A", "Certified Breath Analyzers measure deep lung breath samples to calculate precise blood alcohol concentration percentages.", 1);

addQ(13, "Under RA 10666, who is authorized to enforce the Children's Safety on Motorcycles Act?",
  "LTO law enforcement officers, PNP-HPG personnel, and deputized local traffic enforcers",
  "Barangay tanods only",
  "Private security guards",
  "Toll booth cashiers",
  "A", "LTO officers, Highway Patrol Group (HPG), and duly deputized LGU traffic personnel enforce motorcycle safety laws.", 1);

addQ(13, "Is it permissible to install auxiliary LED lights, strobe light bars, or high-intensity spotlights on a motorcycle without meeting LTO AO 2016-002 guidelines?",
  "Yes, any light can be installed",
  "No, auxiliary lights must be white or yellow, max 2 bulbs, aimed downward, wired to separate switches, and mounted not higher than handlebars",
  "Yes, if colored blue or red",
  "Yes, during nighttime",
  "B", "LTO guidelines strictly regulate auxiliary lights to prevent blinding glare and illegal siren/strobe modifications.", 2);

addQ(13, "Under RA 8750, who is held liable if a front-seat passenger refuses to wear a seat belt in a private vehicle?",
  "The passenger only",
  "Both the driver and the passenger, as the driver has the legal duty to ensure all passengers are belted before moving",
  "The vehicle manufacturer",
  "The traffic enforcer",
  "B", "Drivers are legally responsible for ensuring passenger compliance with seat belt mandates before putting the car in motion.", 1);

// -------------------------------------------------------------
// MODULE 14: Fines, Penalties, Violations & Demerit System (20 Questions)
// -------------------------------------------------------------
addQ(14, "Under the LTO Demerit Point System, how many accumulated demerit points within a license validity period will result in a mandatory 1-year suspension of driving privileges?",
  "5 demerit points",
  "10 demerit points (or 40 points for revocation)",
  "15 demerit points",
  "2 demerit points",
  "B", "Under LTO guidelines, accumulating 10 demerit points results in a 1-year suspension of the driver's license. Accumulating 40 points results in total revocation.", 2);

addQ(14, "What is the penalty for driving a motor vehicle without a valid driver's license (or with an expired/fake license) in the Philippines under Joint Administrative Order (JAO) 2014-01?",
  "₱1,000 fine only",
  "₱3,000 fine and disqualification from being granted a driver's license for one (1) year",
  "₱10,000 fine and 30 days imprisonment",
  "Confiscation of vehicle permanently",
  "B", "Under JAO 2014-01, driving without a valid license carries a ₱3,000 fine and disqualifies the offender from obtaining a license for 1 year from payment.", 2);

addQ(14, "What is the minimum license validity period granted to drivers with zero (0) traffic violations and clean records upon renewal?",
  "3 Years",
  "5 Years",
  "10 Years",
  "Lifetime",
  "C", "Under RA 10930, holders of driver's licenses with zero demerit points / violations during their 5-year cycle are eligible for a 10-Year validity license renewal.", 1);

addQ(14, "If you are involved in a traffic collision resulting in property damage or injury, what is your primary legal duty under RA 4136?",
  "Drive away immediately to avoid obstructing traffic",
  "Immediately stop, show your driver's license, provide your true name and address, and render assistance to any injured person",
  "Call your insurance broker before stopping",
  "Negotiate cash settlement without reporting",
  "B", "Under RA 4136 Section 55 (Duty of driver in case of accident), leaving the scene without stopping and identifying yourself constitutes 'Hit and Run' — a severe criminal offense.", 1);

addQ(14, "Under the Clean Air Act (RA 8749), what is the penalty for motor vehicles caught with excessive smoke belching on public roads?",
  "First offense: ₱2,000 fine and mandatory emission testing",
  "₱100 fine only",
  "Vehicle is crushed immediately",
  "Suspension of vehicle registration for 5 years",
  "A", "Smoke-belching vehicles face progressive fines starting at ₱2,000 on the first offense, with required emission compliance before release.", 2);

addQ(14, "Under JAO 2014-01, what is the fine for driving an UNREGISTERED motor vehicle on public roads?",
  "₱1,000",
  "₱5,000",
  "₱10,000 fine plus impounding of the vehicle until officially registered",
  "₱20,000",
  "C", "Operating an unregistered motor vehicle incurs a hefty ₱10,000 penalty and immediate vehicle impoundment.", 2);

addQ(14, "What is the fine for Reckless Driving on the FIRST offense under JAO 2014-01?",
  "₱500",
  "₱2,000 fine",
  "₱5,000 fine",
  "₱10,000 fine",
  "B", "First offense for reckless driving carries a ₱2,000 fine; 2nd offense is ₱3,000 with 3 months suspension; 3rd offense is ₱10,000 with 6 months suspension/revocation.", 2);

addQ(14, "How many demerit points are assigned to a Grave Traffic Violation (e.g. driving under influence, driving unregistered vehicle, hit-and-run)?",
  "1 Demerit Point",
  "3 Demerit Points",
  "5 Demerit Points",
  "10 Demerit Points",
  "C", "Under the LTO Demerit System: Light Violation = 1 point; Less Grave = 3 points; Grave Violation = 5 points.", 2);

addQ(14, "How many demerit points are assessed for a Light Violation (e.g. failure to carry driver's license or minor parking obstruction)?",
  "1 Demerit Point",
  "3 Demerit Points",
  "5 Demerit Points",
  "0 Demerit Points",
  "A", "Light infractions accrue 1 demerit point against the driver's central database record.", 1);

addQ(14, "What happens if a driver accumulates 40 or more demerit points within their license validity period?",
  "The driver's license is permanently REVOKED and the driver is disqualified from driving for at least 2 years",
  "₱500 fine",
  "Free driving refresher course",
  "No penalty",
  "A", "Accumulating 40 demerit points leads to full revocation of the license and multi-year disqualification.", 2);

addQ(14, "What is the penalty under RA 10913 (Anti-Distracted Driving Act) for the FIRST offense?",
  "₱1,000",
  "₱5,000 fine",
  "₱10,000 fine",
  "₱20,000 fine",
  "B", "First offense for distracted driving is ₱5,000; 2nd is ₱10,000; 3rd is ₱15,000 with 3-month license suspension; 4th is ₱20,000 with revocation.", 2);

addQ(14, "Under JAO 2014-01, what is the penalty for driving a motor vehicle with defective equipment (e.g. broken headlights, no taillights, defective brakes)?",
  "₱500",
  "₱5,000 fine and vehicle impoundment until defects are repaired",
  "₱10,000",
  "Warning only",
  "B", "Defective vehicle parts that compromise road safety carry a ₱5,000 fine and mandatory repair verification.", 2);

addQ(14, "What is the penalty for allowing an unauthorized or unlicensed person to drive your motor vehicle?",
  "₱500",
  "₱4,000 fine",
  "₱1,000",
  "No penalty",
  "B", "Permitting an unlicensed individual to drive your vehicle incurs a ₱4,000 fine under JAO 2014-01 Section II.e.", 2);

addQ(14, "What is the legal consequence if an apprehended driver fails to settle their traffic citation ticket within fifteen (15) days?",
  "The ticket is automatically dismissed",
  "An alarm is placed on the driver's license and vehicle registration in the LTO IT system, blocking license renewal and incurring compounding late surcharges",
  "The driver is sent to prison immediately",
  "No effect",
  "B", "Unsettled citations trigger automated system alarms prohibiting license renewal and vehicle registration transactions.", 1);

addQ(14, "Under RA 10930, what mandatory requirement must drivers complete before renewing their license if they have accumulated demerit points?",
  "Pass the Comprehensive Driver's Education (CDE) reorientation course and exam corresponding to their accumulated point tier",
  "Pay a bribe to fixers",
  "Donate 10 books",
  "Provide proof of car ownership",
  "A", "Drivers with demerit points must undergo mandatory remedial driving re-education courses before license renewal.", 1);

addQ(14, "Under JAO 2014-01, what is the fine for illegal overtaking (overtaking on curves, bridges, or right-of-way zones)?",
  "₱500",
  "₱1,000",
  "₱2,000",
  "₱5,000",
  "B", "Illegal passing and cutting in on restricted roadway segments carries a standard ₱1,000 fine.", 1);

addQ(14, "What is the penalty for using an illegal, non-standard, or modified license plate (e.g. customized vanity plate without LTO permit)?",
  "₱5,000 fine and confiscation of the illegal plate",
  "₱200 fine",
  "₱50 fine",
  "No violation",
  "A", "Tampered, imitation, or unauthorized license plates carry a ₱5,000 fine and confiscation.", 2);

addQ(14, "Under RA 4136, under what rare circumstance is a driver involved in a vehicle collision permitted to leave the scene without being charged with 'Hit and Run'?",
  "If the other driver yells at them",
  "If the driver is in imminent danger of being seriously harmed or lynched by an angry mob; or if reporting the accident to the nearest police officer without delay; or if summoning a physician",
  "If the driver is running late for work",
  "If it is raining heavily",
  "B", "Under RA 4136 Section 55, fleeing to escape imminent bodily harm from an angry mob, summoning medical aid, or immediately reporting to police are lawful defenses.", 2);

addQ(14, "What is the fine for failure to attach or carry an official Early Warning Device (EWD) in your motor vehicle?",
  "₱500 fine",
  "₱1,500 fine",
  "₱5,000 fine",
  "₱10,000 fine",
  "B", "Failure to carry an approved reflective EWD pair carries a ₱1,500 fine under motor vehicle equipment standards.", 2);

addQ(14, "What is the legal status of 'Fixers' outside LTO district offices?",
  "Authorized government liaisons",
  "Illegal criminal operators under the Anti-Red Tape Act (RA 9485/11032); dealing with fixers is strictly prohibited and punishable by law",
  "Certified driving instructors",
  "LTO interns",
  "B", "Transacting through fixers is a criminal offense under the Ease of Doing Business and Anti-Red Tape Act.", 1);

// -------------------------------------------------------------
// MODULE 15: Vehicle Safety, Emergencies & BLOWBAGETS Pre-Trip Inspection (20 Questions)
// -------------------------------------------------------------
addQ(15, "What does the standard pre-trip automotive safety acronym 'BLOWBAGETS' stand for in Philippine driver education?",
  "Bumper, Lights, Oil, Wipers, Brakes, Air, Gas, Exhaust, Tires, Suspension",
  "Battery, Lights, Oil, Water, Brakes, Air, Gas, Engine, Tire, Self",
  "Body, Lubricant, Oxygen, Wheels, Battery, Alternator, Gearbox, Electronics, Torque, Steering",
  "Brakes, Locks, Overdrive, Windows, Belts, Axle, Gauge, Emissions, Transmission, Speedometer",
  "B", "The official LTO pre-trip checklist 'BLOWBAGETS' stands for: Battery, Lights, Oil, Water, Brakes, Air, Gas, Engine, Tire, Self (driver readiness).", 1);

addQ(15, "If your vehicle experiences sudden Brake Failure while driving at highway speed, what is the safest sequence of emergency actions?",
  "Turn off the ignition immediately and pull the steering wheel sharply",
  "Pump the brake pedal rapidly, downshift progressively to lower gears to use engine braking, and gently apply the parking brake",
  "Jump out of the vehicle onto the shoulder",
  "Shift directly into Reverse gear",
  "B", "In brake failure: (1) Rapidly pump brakes to build hydraulic pressure, (2) downshift gears for engine braking, and (3) gradually modulate the handbrake without locking rear wheels.", 2);

addQ(15, "What is the correct emergency response if a front tire suffers a sudden high-speed Tire Blowout?",
  "Slam on the brakes with maximum force and turn the steering wheel sharply",
  "Grip the steering wheel firmly with both hands, maintain a straight path, ease off the accelerator gradually, and brake gently once stabilized",
  "Pull the handbrake immediately",
  "Shift into neutral and switch off engine immediately",
  "B", "Slamming on the brakes during a blowout causes catastrophic loss of control or rollover. Hold the wheel firmly straight, let momentum decay, and steer gently onto the shoulder.", 2);

addQ(15, "When stalled or disabled on the expressway or highway shoulder at night, at what distance behind your vehicle must the Early Warning Device (EWD) reflective triangle be placed?",
  "Directly against the rear bumper",
  "At least 4 meters behind the vehicle",
  "At least 10 meters (and up to 50–100 meters on high-speed expressways) to give approaching drivers ample warning",
  "On top of the roof rack only",
  "C", "Early Warning Devices must be placed at least 10 to 50+ meters behind the disabled vehicle on expressways to provide approaching high-speed vehicles sufficient reaction distance.", 2);

addQ(15, "Why is the final 'S' (Self) in BLOWBAGETS considered the most critical pre-trip check?",
  "To ensure you brought enough snacks for the trip",
  "To ensure the driver is physically fit, mentally alert, well-rested, emotionally calm, and free from alcohol or impairing medication before getting behind the wheel",
  "To check your personal fashion appearance",
  "To calibrate the car's selfie camera",
  "B", "'Self' refers to human fitness to drive: assessing fatigue, stress, illness, sobriety, and emotional composure, which are the root causes of over 85% of road crashes.", 1);

addQ(15, "When inspecting the 'B' (Battery) in BLOWBAGETS, what specific items should you check?",
  "Battery terminals are clean and free of corrosion/sulfation, cables are tightly clamped, and electrolyte levels (in flooded lead-acid batteries) are sufficient",
  "Battery color and brand logo",
  "Battery weight",
  "Battery temperature by touching terminals with metal keys",
  "A", "Corroded terminals or loose terminal clamps cause starting failures and electrical dropouts.", 1);

addQ(15, "When inspecting the 'O' (Oil) on the engine oil dipstick, what indicates an optimal oil level?",
  "Oil level is between the 'MIN' and 'MAX' (or Lower and Upper dot) markers on the dipstick when the engine is warm and parked on level ground",
  "Oil is overflowing out of the filler tube",
  "Dipstick is completely dry",
  "Oil is milky white in color",
  "A", "Engine oil must be within the crosshatched operating zone between lower and upper indicator markings.", 1);

addQ(15, "What does it indicate if the engine oil on the dipstick appears milky, frothy, or like 'chocolate milk'?",
  "The oil is exceptionally clean",
  "Engine coolant (water) is leaking into the oil system, indicating a blown cylinder head gasket or cracked engine block",
  "You should add more oil immediately",
  "The oil is premium quality",
  "B", "Milky oil is a diagnostic sign of coolant contamination, requiring immediate engine teardown to prevent seizure.", 2);

addQ(15, "When inspecting 'W' (Water/Coolant) in BLOWBAGETS, why should you NEVER open the radiator pressure cap while the engine is hot?",
  "Coolant will evaporate instantly",
  "Superheated pressurized boiling coolant and steam will violently erupt out, causing severe second- and third-degree facial burns",
  "It will drain the battery",
  "It alters coolant color",
  "B", "Hot cooling systems are under 15+ PSI pressure. Only inspect coolant levels at the plastic coolant expansion reservoir when hot.", 1);

addQ(15, "What should you check when inspecting 'A' (Air) in your tires during BLOWBAGETS?",
  "Cold tire inflation pressure matches the manufacturer's recommended PSI on the driver's door jamb sticker, and tread depth is above the 1.6mm wear bars",
  "Tires are inflated until they feel rock hard to the touch",
  "Tire tread is completely smooth like racing slicks",
  "Tire sidewalls have visible bulges",
  "A", "Tire pressure should be checked when cold using a calibrated gauge to match the placard PSI.", 1);

addQ(15, "What dangerous condition can cause total 'Brake Fade' when driving down long, steep mountain descents (e.g. Baguio or Kennon Road)?",
  "Relying continuously on the brake pedal, causing brake pads and rotors to overheat, boiling brake fluid, and losing hydraulic friction",
  "Using engine braking in 2nd gear",
  "Checking the rearview mirror too frequently",
  "Keeping tires inflated properly",
  "A", "Continuous riding of the brakes generates extreme friction heat that boils brake fluid into compressible vapor, causing complete pedal loss.", 2);

addQ(15, "What is the proper way to prevent Brake Fade when descending steep mountain grades?",
  "Shift into Neutral and coast",
  "Downshift to a lower gear (e.g. 2nd or 1st gear / 'L' in automatic) to let engine compression control vehicle speed, using foot brakes only intermittently",
  "Hold the foot brake continuously for 30 minutes",
  "Turn off the engine while rolling",
  "B", "Engine braking absorbs kinetic energy, preventing mechanical brakes from overheating.", 2);

addQ(15, "If your vehicle's engine begins to Overheat (temperature gauge spikes into the Red zone and steam appears), what should you do?",
  "Accelerate to 100 km/h to force air into the radiator",
  "Safely pull over to the shoulder, turn off the AC, keep engine idling or shut down, open the hood to let heat dissipate, and wait for engine to cool completely before checking coolant",
  "Immediately pour cold ice water directly over the hot metal engine block",
  "Remove the radiator cap with bare hands instantly",
  "B", "Pull over safely, shut down, and allow natural cooling. Pouring cold water onto a hot engine block will crack the cast iron/aluminum.", 2);

addQ(15, "If your vehicle's Accelerator Pedal sticks to the floor and the car continues accelerating uncontrollably, what is the correct emergency action?",
  "Turn off ignition key completely while driving at 100 km/h and lock steering column",
  "Shift transmission into Neutral (N) to disconnect engine power from wheels, apply firm steady brakes, steer to shoulder, and turn off engine once stopped",
  "Jump out of the moving car",
  "Pump the gas pedal harder",
  "B", "Shifting into Neutral immediately cuts torque to the drive wheels, allowing controlled braking without losing steering assist.", 2);

addQ(15, "If your vehicle suffers sudden complete Electrical / Headlight failure on a pitch-black highway at night, what should you do?",
  "Keep driving at 80 km/h",
  "Immediately turn on emergency hazard flashers (which operate on a separate circuit), brake safely in your lane, and pull off onto the shoulder",
  "Close your eyes and honk",
  "Turn off the ignition key instantly",
  "B", "Hazard lights run on an independent circuit and provide emergency illumination and warning.", 2);

addQ(15, "What is the minimum legal tread depth for motor vehicle tires in the Philippines?",
  "0.5 mm",
  "1.6 mm (indicated when tread is worn flush with built-in Tread Wear Indicator - TWI bars)",
  "5.0 mm",
  "10.0 mm",
  "B", "Tires worn beyond the 1.6mm tread wear indicator bars fail safety inspection and lose wet grip.", 1);

addQ(15, "What does black smoke emanating from a vehicle's exhaust pipe typically signify?",
  "Coolant leaking into cylinders",
  "Incomplete fuel combustion due to an overly rich fuel-to-air mixture, dirty air filter, or malfunctioning fuel injectors",
  "Engine burning motor oil",
  "Water vapor in cold weather",
  "B", "Black smoke indicates excessive unburned fuel (rich mixture) wasting gasoline and causing emissions violations.", 2);

addQ(15, "What does blue or bluish-white smoke coming from the exhaust pipe indicate?",
  "Engine is burning motor oil, likely due to worn piston rings, cylinder walls, or degraded valve stem seals",
  "Rich fuel mixture",
  "Radiator coolant leak",
  "Clean emissions",
  "A", "Blue smoke indicates engine lubricating oil entering combustion chambers and burning with fuel.", 2);

addQ(15, "What safety equipment is legally required to be carried inside all four-wheeled motor vehicles in the Philippines?",
  "A pair of Early Warning Devices (EWD - one yellow, one red reflective triangle), operational spare tire, jack, and lug wrench",
  "Television set",
  "Camping tent",
  "Extra gasoline container in trunk",
  "A", "Mandatory emergency gear includes certified EWD triangles, spare wheel, tire iron, and vehicle jack.", 1);

addQ(15, "What should you do if an aggressive driver tailgates you, flashes high beams, and attempts road rage maneuvers?",
  "Brake check them aggressively",
  "Remain calm, do not engage or make eye contact, maintain your speed, move safely to the right lane to let them pass, and report to authorities if threatened",
  "Follow them home",
  "Get out of the car at a red light with a baseball bat",
  "B", "De-escalating road rage through defensive lane yielding prevents violent confrontations and fatal crashes.", 1);




// -------------------------------------------------------------
// MODULE 1 EXPANSION (Questions 21-30: Priority & Regulatory Signs)
// -------------------------------------------------------------
addQ(1, "What does a circular white sign with a red border showing a car with a tow truck silhouette indicate?",
  "Tow truck parking only",
  "Towing zone for illegally parked or disabled vehicles",
  "Car repair shop ahead",
  "No towing allowed",
  "B", "Designates an active towing zone where unauthorized parked vehicles will be mechanically towed.", 1);

addQ(1, "What does a circular regulatory sign with a red border showing '20' indicate in an urban school zone?",
  "Maximum legal speed limit is 20 km/h",
  "Minimum speed is 20 km/h",
  "Route 20 highway",
  "20 meters to school gate",
  "A", "Mandates a strict 20 km/h speed ceiling near schools and pedestrian-dense areas.", 1);

addQ(1, "What does a rectangular white regulatory sign with black text saying 'RIGHT LANE MUST TURN RIGHT' mandate?",
  "Right lane traffic is optional",
  "All vehicles traveling in the rightmost lane are required to execute a right turn at the upcoming intersection",
  "Right turns are prohibited",
  "U-turns only",
  "B", "Lane assignment regulatory sign compelling all traffic in that lane to turn right.", 1);

addQ(1, "What does a regulatory sign showing 'NO RIGHT TURN ON RED' mean?",
  "Right turn is prohibited when the traffic light signal is Red, even after stopping",
  "Right turns allowed anytime",
  "Stop only if pedestrians cross",
  "Turn right only on red",
  "A", "Strictly prohibits turning right during a red phase at signalized intersections.", 1);

addQ(1, "What does a circular sign with a red border showing a pedestrian and bicycle with a red diagonal line prohibit?",
  "Both pedestrians and non-motorized bicycles are prohibited from entering this facility",
  "Motor vehicles only",
  "Park entrance",
  "Sidewalk begins",
  "A", "Prohibits both foot traffic and bicycles on expressways, elevated viaducts, and tunnels.", 1);

addQ(1, "What does a circular sign displaying '6t' on an axle symbol signify?",
  "Maximum allowable axle weight load is 6 metric tons",
  "Vehicle height 6 meters",
  "Speed limit 60 km/h",
  "6 passengers only",
  "A", "Prohibits vehicles with single axle loads exceeding 6 tonnes from crossing.", 2);

addQ(1, "What does a rectangular regulatory sign reading 'FAST CRAFT / BUSES ONLY' mean?",
  "General traffic lane",
  "Exclusive right-of-way lane dedicated strictly to authorized public transit buses",
  "Emergency parking",
  "Bicycle lane",
  "B", "Mandatory transit lane reservation.", 1);

addQ(1, "What does a circular white sign with a red border showing a red diagonal line across a hazardous cargo tanker prohibit?",
  "Vehicles carrying hazardous, flammable, toxic, or explosive cargo are prohibited from entering",
  "Water delivery trucks prohibited",
  "Gasoline station ahead",
  "Oil change shop",
  "A", "Prohibits dangerous flammable/chemical tankers from entering tunnels or watershed zones.", 2);

addQ(1, "What does a regulatory sign with the text 'STOP FOR POLICE' require?",
  "Slow down to 40 km/h",
  "All approaching vehicles must come to a complete stop and await police inspection/instructions",
  "Honk horn",
  "Turn around immediately",
  "B", "Mandates full vehicle stop at police checkpoints.", 1);

addQ(1, "What does a circular white sign with a red border showing '4.2m' between vertical arrows mean?",
  "Maximum vertical height clearance is 4.2 meters",
  "Road length 4.2 km",
  "Bridge capacity 4.2 tons",
  "Tire width 4.2 inches",
  "A", "Overhead clearance restriction for flyovers, underpasses, and overhead wires.", 1);

// -------------------------------------------------------------
// MODULE 2 EXPANSION (Questions 21-30: Directional & Mandatory Signs)
// -------------------------------------------------------------
addQ(2, "What does a blue rectangular sign showing a white airplane symbol with a directional arrow indicate?",
  "Military airstrip",
  "Direction / Route to the Airport Terminal",
  "No fly zone",
  "Airplane model shop",
  "B", "Directional guide sign leading motorists toward commercial airport passenger terminals.", 1);

addQ(2, "What does a blue circular sign showing a white arrow curving sharply down to the right (Pass Obstacle on Right) instruct?",
  "Motorists must pass to the right side of the traffic island, median barrier, or roadway divider",
  "Right turn mandatory",
  "Right shoulder parking",
  "Dead end road",
  "A", "Mandatory sign directing vehicular flow to the right of physical street hardware.", 1);

addQ(2, "What does a blue circular sign with a straight arrow pointing right (90 degrees) mandate?",
  "Compulsory turn to the right only; proceeding straight or left is prohibited",
  "Right lane ending",
  "One way road",
  "Yield right-of-way",
  "A", "Mandatory directional sign forcing all traffic at the junction to make an immediate right turn.", 1);

addQ(2, "What does a blue circular sign showing an arrow pointing straight ahead and another curving left mean?",
  "Compulsory direction: proceed straight ahead or execute a left turn",
  "U-turn only",
  "Right turn permitted",
  "Expressway exit only",
  "A", "Authorizes either straight movement or left turn from the lane.", 1);

addQ(2, "What does a blue rectangular sign showing 'P' with a bus silhouette underneath designate?",
  "Public utility bus parking / staging terminal only",
  "Private car parking",
  "No parking anytime",
  "Bus repair shop",
  "A", "Restricted parking bay reserved exclusively for commercial buses.", 1);

addQ(2, "What does a blue circular sign showing a pedestrian walking with a child designate?",
  "Compulsory shared pedestrian footway / safe school walking route",
  "Child day care center",
  "No children allowed",
  "Playground only",
  "A", "Mandatory footway dedicated for pedestrians and accompanying children.", 1);

addQ(2, "What does a blue rectangular sign displaying a hospital 'H' symbol indicate?",
  "Hotel ahead",
  "Hospital / Medical Emergency Facility located in the indicated direction",
  "Helipad ahead",
  "Highway route number",
  "B", "Service guide sign directing drivers to 24-hour emergency hospital facilities.", 1);

addQ(2, "What does a blue rectangular sign showing a fuel pump silhouette indicate?",
  "Gasoline / Service Refueling Station ahead",
  "Automotive museum",
  "Oil refinery entrance",
  "No smoking zone",
  "A", "Informative motorist service sign indicating available vehicle fuel ahead.", 1);

addQ(2, "What does a blue rectangular sign showing a knife and fork symbol indicate?",
  "Restaurant / Food Dining facility available ahead",
  "Cutlery store",
  "Picnic grove only",
  "Campground",
  "A", "Motorist service sign indicating food service facilities along highways.", 1);

addQ(2, "What does a blue rectangular sign with a telephone handset symbol mean?",
  "Public Emergency Telephone station ahead",
  "Mobile phone repair shop",
  "Call center building",
  "No cellphones allowed",
  "A", "Highway emergency telephone call box location.", 1);

// -------------------------------------------------------------
// MODULE 3 EXPANSION (Questions 21-30: Speed Limits & Parking Restrictions)
// -------------------------------------------------------------
addQ(3, "Under RA 4136 Section 46, within how many meters of a building entrance used by the public is parking prohibited?",
  "Within 4 meters of any entrance or exit of a public building (theaters, auditoriums, hotels)",
  "Within 10 meters",
  "Within 20 meters",
  "Within 1 meter",
  "A", "Prohibits parking within 4 meters of public venue exits to ensure emergency egress.", 2);

addQ(3, "What does a sign stating 'PAY PARKING: MON-SAT / FREE PARKING: SUN & HOLIDAYS' mean?",
  "Parking fees are collected from Monday through Saturday; parking is free on Sundays and official holidays",
  "No parking on Sundays",
  "Towing on holidays",
  "Paid parking 24/7",
  "A", "Specifies days and conditions for municipal paid parking enforcement.", 1);

addQ(3, "What is the maximum legal speed limit for trucks and buses on open provincial roads with no blind corners under RA 4136?",
  "50 km/h",
  "60 km/h",
  "80 km/h",
  "100 km/h",
  "A", "Under RA 4136 Section 35(a), the speed limit for heavy trucks and buses on open country roads is 50 km/h (versus 80 km/h for passenger cars).", 2);

addQ(3, "Under RA 4136, what is the speed limit for trucks and buses on city and municipal streets?",
  "20 km/h",
  "30 km/h",
  "40 km/h",
  "50 km/h",
  "B", "On through streets and boulevards in cities, heavy trucks and buses are limited to 30 km/h (cars are 40 km/h).", 2);

addQ(3, "What does 'Double Parking' mean and why is it illegal in the Philippines?",
  "Parking two cars in a two-car garage",
  "Parking a vehicle alongside another vehicle already parked parallel to the curb, blocking the active travel lane",
  "Parking on two wheels",
  "Paying double parking fees",
  "B", "Double parking severely obstructs traffic flow and creates dangerous bottlenecks.", 1);

addQ(3, "What does a 'NO STOPPING WITHIN 15 METERS' sign placed near a bus stop signify?",
  "Private vehicles cannot stop or wait within 15 meters of the bus stop zone",
  "Buses must drive at 15 km/h",
  "Parking permitted for 15 minutes",
  "Pedestrians cannot cross for 15 meters",
  "A", "Clearance zone to allow public transit buses unobstructed access to curb passenger bays.", 1);

addQ(3, "When parking on a steep incline facing Uphill WITHOUT a curb, which way should you turn your wheels?",
  "Turn wheels to the right (toward the edge of the road) so the car will roll off the road rather than into traffic if brakes fail",
  "Turn wheels to the left",
  "Keep wheels straight",
  "Remove tires",
  "A", "Without a curb, turning wheels right directs a rolling vehicle off the pavement into the embankment.", 2);

addQ(3, "What is the statutory penalty under MMDA regulations for obstructing traffic flow on major arterial roads?",
  "₱1,000 fine for obstruction",
  "₱100 fine",
  "No fine if hazards are on",
  "₱20,000 fine",
  "A", "Obstruction penalties apply to vehicles blocking lanes without justifiable mechanical emergencies.", 1);

addQ(3, "What does a circular sign displaying '40' inside a red circle mean when approaching an expressway toll plaza?",
  "Maximum speed limit is reduced to 40 km/h for the toll gate approach",
  "Minimum speed is 40 km/h",
  "Toll fee is 40 pesos",
  "Toll gate is 40 km away",
  "A", "Speed reduction regulatory sign enforcing safe approach velocities at toll collection plazas.", 1);

addQ(3, "What is the primary legal justification for imposing statutory speed limits on public highways?",
  "To generate revenue from fines",
  "To reduce stopping distances, mitigate kinetic impact energy in collisions, and safeguard human lives",
  "To wear down tire treads faster",
  "To cause traffic jams",
  "B", "Speed control directly correlates with survivability in vehicular collisions.", 1);

// -------------------------------------------------------------
// MODULE 4 EXPANSION (Questions 21-30: Warning Signs: Curves & Alignments)
// -------------------------------------------------------------
addQ(4, "What does a triangular warning sign with a double reverse curve turning first Right then Left indicate?",
  "Series of bends starting with a right turn followed closely by a left curve",
  "Single right turn",
  "Roundabout ahead",
  "Straight highway",
  "A", "Warns of a reverse curve alignment beginning with a right turn.", 1);

addQ(4, "What should a driver do if their vehicle begins to 'Oversteer' (rear end slides outward) on a slippery curve?",
  "Slam hard on the brakes and close eyes",
  "Ease off the accelerator smoothly, steer in the direction of the skid (counter-steer), and avoid abrupt braking until the chassis stabilizes",
  "Pull the handbrake instantly",
  "Shift into reverse gear",
  "B", "Counter-steering into the direction of the skid helps the rear tires regain directional grip.", 2);

addQ(4, "Why are mountain curves with negative camber (sloping downhill toward the outer edge) particularly dangerous?",
  "They reduce available centrifugal tire grip and pull the vehicle outward toward the guardrail or cliff",
  "They make the car engine run hotter",
  "They drain brake fluid",
  "They increase fuel consumption",
  "A", "Negative camber tilts against the direction of turning, drastically lowering cornering threshold.", 2);

addQ(4, "What does a triangular warning sign showing a series of sharp zig-zag corners mean?",
  "Winding road with multiple continuous sharp bends for the next several kilometers",
  "Broken road pavement",
  "Earthquake fault line",
  "Pedestrian crossing",
  "A", "Serpentine mountain alignment warning.", 1);

addQ(4, "When entering a curve at night, how can you anticipate approaching oncoming traffic before their car is visible?",
  "By observing the glow and sweep of their headlight beams on trees, cliffs, or road signs ahead",
  "By honking continuously every second",
  "By turning off your own headlights",
  "By driving in the oncoming lane",
  "A", "Headlight glare over hills or cliffs alerts defensive drivers to approaching unseen vehicles.", 1);

addQ(4, "What does a triangular warning sign depicting a car tipping onto its side indicate?",
  "High rollover risk zone on sharp bend (especially for high-center-of-gravity trucks and SUVs)",
  "Car repair shop",
  "Crash test site",
  "Stunt driving track",
  "A", "Rollover warning on tight radius highway loops and exit ramps.", 2);

addQ(4, "What is the 'Apex' of a corner in driving?",
  "The innermost point of the vehicle's driving line through the sharpest part of a curve",
  "The highest point of a hill",
  "The center line of the road",
  "The start of the braking zone",
  "A", "Geometrical apex is the inside pivot point of a turn.", 2);

addQ(4, "Why is crossing the double yellow center line on mountain curves considered a Grave traffic violation?",
  "It creates an immediate risk of a catastrophic high-speed head-on collision with blind oncoming traffic",
  "It uses up too much paint",
  "It increases tire wear by 1%",
  "It makes the vehicle look bad",
  "A", "Blind curve center-line crossing is a primary cause of fatal head-on crashes in mountainous regions.", 1);

addQ(4, "What does a triangular warning sign showing a 270-degree loop arrow indicate?",
  "Loop ramp (cloverleaf interchange entrance/exit) ahead requiring slow speeds",
  "Dead end",
  "U-turn slot",
  "Roundabout",
  "A", "Warns of a tight circular cloverleaf interchange ramp.", 2);

addQ(4, "How does wet weather affect the safe cornering speed of a motor vehicle on highway curves?",
  "It has no effect on cornering speed",
  "It reduces tire friction by up to 50%, requiring drivers to reduce cornering speed significantly below posted dry limits",
  "It allows driving faster because water lubricates tires",
  "It only affects heavy trucks",
  "B", "Water significantly diminishes lateral friction coefficient.", 1);

// -------------------------------------------------------------
// MODULE 5 EXPANSION (Questions 21-30: Warning Signs: Intersections & Merges)
// -------------------------------------------------------------
addQ(5, "What does a triangular warning sign showing a 4-way cross with the horizontal bar THINNER than the vertical bar mean?",
  "Intersection with a minor side road (You are on the major priority thoroughfare)",
  "Hospital cross",
  "Equal priority crossroad",
  "One-way street ahead",
  "A", "Thick line indicates major priority road; thin line indicates minor crossing street.", 2);

addQ(5, "What does a triangular warning sign showing a skewed crossroad at an angle (X-shape) indicate?",
  "Skewed / Angled 4-way crossroad intersection ahead with limited sight angles",
  "Railroad crossing",
  "Hospital ahead",
  "Dead end",
  "A", "Warns of a non-perpendicular crossroad intersection.", 2);

addQ(5, "What does a triangular warning sign depicting a staggered junction with the first side road on the Right and second on the Left mean?",
  "Staggered side roads ahead (first right, then left in close succession)",
  "Zigzag curve",
  "Dual carriageway",
  "Two roundabouts",
  "A", "Warns of offset intersections where crossing traffic may emerge from both sides consecutively.", 2);

addQ(5, "What does a triangular warning sign showing a major vertical road with a 45-degree angled fork to the left mean?",
  "Angled side road entering from the left ahead",
  "Left turn compulsory",
  "Left lane closed",
  "Expressway toll plaza",
  "A", "Warns of a diagonal converging side road on the left.", 2);

addQ(5, "What is a 'Box Junction' violation in Philippine traffic enforcement?",
  "Parking a box truck on the street",
  "Entering an intersection yellow box grid when traffic is backed up and blocking cross-traffic flow when the light changes",
  "Driving a cube-shaped delivery van",
  "Carrying cardboard boxes in the trunk",
  "B", "Entering a yellow box without clear exit blocks intersecting traffic and triggers moving violation fines.", 1);

addQ(5, "What should you do when approaching an intersection where your forward view is obstructed by tall hedges, fences, or large parked trucks ('Blind Intersection')?",
  "Maintain cruising speed and honk",
  "Slow down to a creeping crawl (under 20 km/h), cover the brake, and inch forward until you have a clear sightline in both directions",
  "Accelerate rapidly to get past the blind zone",
  "Close your eyes and proceed",
  "B", "Blind intersections require inching forward cautiously with covered brakes.", 1);

addQ(5, "When navigating through a multi-lane roundabout, when should you activate your RIGHT turn signal?",
  "Immediately after passing the exit BEFORE your intended exit, signaling to other motorists that you are departing the circle",
  "Never use turn signals in roundabouts",
  "Turn on hazard lights the entire time",
  "Signal left when leaving the circle",
  "A", "Signaling right after passing the preceding exit informs circulating and waiting vehicles of your immediate exit path.", 2);

addQ(5, "What does a triangular warning sign showing two merging traffic arrows joining into a single arrow warn of?",
  "Two lanes merging into one single lane ahead; alternate merging (zipper merge) recommended",
  "Dual road begins",
  "Two-way traffic",
  "Overtaking lane begins",
  "A", "Warns of lane convergence requiring smooth merging.", 1);

addQ(5, "What is the 'Zipper Merge' method and why is it recommended at lane closures?",
  "Drivers alternate taking turns (1-to-1) at the point of lane convergence, maximizing lane capacity and reducing congestion queues",
  "Drivers unzipping their seatbelts",
  "Speeding up to cut in front of 10 cars",
  "Stopping 1 km before the merge",
  "A", "Zipper merging promotes fair, continuous flow at lane drop bottlenecks.", 2);

addQ(5, "What does a triangular warning sign showing an expressway trumpet interchange fork indicate?",
  "Approaching high-speed grade-separated interchange ramp split",
  "Musical instruments store",
  "Trumpet horn testing area",
  "Dead end",
  "A", "Warns of complex grade-separated interchange bifurcations.", 2);


// -------------------------------------------------------------
// MODULE 6 EXPANSION (Questions 21-30: Road Width, Hills & Physical Hazards)
// -------------------------------------------------------------
addQ(6, "What does a triangular warning sign showing a raised hump with water waves beneath it mean?",
  "Causeway / Floodway crossing ahead where road may be submerged during heavy rainfall or high tide",
  "Submarine docking bay",
  "Car wash station",
  "Swimming pool entrance",
  "A", "Warns of low-lying causeways and coastal floodway dips subject to tidal or river inundation.", 2);

addQ(6, "What does a triangular warning sign showing a falling car from a bridge gap indicate?",
  "Bridge collapse hazard or damaged bridge section ahead",
  "Bungee jumping location",
  "Ferry boarding zone",
  "Stunt track",
  "A", "Warns of severe bridge structural damage or missing spans in disaster zones.", 2);

addQ(6, "What does a triangular warning sign showing an open trench with pipes indicate?",
  "Underground utility pipe excavation across or along the carriageway",
  "Water park ahead",
  "Plumbing supply store",
  "Tunnel entrance",
  "A", "Warns of municipal water or gas pipeline construction trenches.", 1);

addQ(6, "When encountering a 'SLOW: ROAD UNDER REPAIR' warning sign, what driving adjustments are required?",
  "Slow down, observe flagmen instructions, anticipate loose gravel, steel plates, or uneven lane transitions",
  "Speed up to pass the work zone quickly",
  "Turn on high beams during daytime",
  "Honk at construction workers",
  "A", "Work zone safety mandates low speed and following traffic control flagmen.", 1);

addQ(6, "Why are steel road plates installed over road excavations dangerous for motorcyclists in wet weather?",
  "Steel plates have near-zero friction when wet, causing instant tire slip if braking or leaning",
  "Steel plates can magnetize motorcycle engines",
  "Steel plates drain motorcycle battery power",
  "Steel plates create radio interference",
  "A", "Wet steel road plates are exceptionally slippery and hazardous for two-wheeled vehicles.", 2);

addQ(6, "What does a triangular warning sign showing an opening tunnel entrance warn of?",
  "Tunnel ahead; turn on headlights, remove sunglasses, maintain safe gap, and do not overtake",
  "Cave tour ahead",
  "Underground parking lot",
  "Mining site",
  "A", "Tunnel approach warning requiring headlights on and lane discipline.", 1);

addQ(6, "What does a triangular warning sign showing trees blown by wind with falling branches indicate?",
  "Danger of falling branches / trees during storms and typhoons",
  "Lumber yard ahead",
  "Reforestation project",
  "Botanical garden",
  "A", "Warns of tree fall hazards along forested mountain roads during high winds.", 1);

addQ(6, "What should a driver do when encountering dense smoke from burning sugarcane or garbage obscuring the road?",
  "Speed up to drive out of the smoke quickly",
  "Slow down significantly, turn on low beam headlights and hazard flashers, increase following distance, and proceed with extreme caution",
  "Close your eyes and hold your breath while driving at 80 km/h",
  "Turn off all lights",
  "B", "Smoke reduces visibility to near zero; slow driving with lights prevents pileup collisions.", 1);

addQ(6, "What does a triangular warning sign showing a car climbing over a speed table with a pedestrian silhouette mean?",
  "Raised Pedestrian Crossing Speed Table ahead",
  "Underpass ahead",
  "Flyover bridge",
  "Landslide area",
  "A", "Warns of elevated zebra speed tables designed to calm vehicular speed while providing level crossing for pedestrians.", 1);

addQ(6, "What is 'Brake Vapor Lock' during extreme mountain driving?",
  "When moisture-contaminated brake fluid reaches boiling point due to brake overheating, forming compressible gas bubbles that cause total pedal collapse to the floor",
  "When brake pads freeze in cold weather",
  "When air conditioning leaks into brakes",
  "When brakes lock up permanently",
  "A", "Boiling brake fluid creates vapor bubbles that compress under pedal force, destroying hydraulic pressure.", 3);

// -------------------------------------------------------------
// MODULE 7 EXPANSION (Questions 21-30: Pedestrians, Schools & Special Hazards)
// -------------------------------------------------------------
addQ(7, "What does a triangular warning sign showing a jogger / runner silhouette indicate?",
  "High density of joggers and pedestrian runners on road shoulder / parkway",
  "Marathon race in progress",
  "Sports stadium ahead",
  "Athletic shoe store",
  "A", "Warns motorists to watch for runners on boulevard shoulders during early morning hours.", 1);

addQ(7, "What does a triangular warning sign depicting a deaf pedestrian with an ear symbol mean?",
  "Hearing-impaired pedestrians in the vicinity; sounding horn may be ineffective, exercise visual vigilance",
  "Loud music zone",
  "Hearing aid clinic",
  "Acoustic testing room",
  "A", "Alerts drivers that crossing pedestrians may not hear approaching engine sounds or horns.", 2);

addQ(7, "What does a triangular warning sign showing a horse-drawn 'Kalesa' indicate?",
  "Tourist horse carriage route ahead; maintain low speed and safe lateral gap",
  "Horse racing track",
  "Farm supply store",
  "No horses allowed",
  "A", "Warns of historical/tourist kalesa operations sharing city roads (e.g. Intramuros / Vigan).", 1);

addQ(7, "What is a 'School Safety Patrol' and what authority do their hand stop signs hold?",
  "Student safety patrols assist children crossing near school gates; motorists must obey their handheld stop paddles",
  "They are actors with no authority",
  "They only direct teachers",
  "They can issue official monetary fines",
  "A", "School crossing guards and safety patrols must be respected to safeguard crossing schoolchildren.", 1);

addQ(7, "What does a fluorescent triangular sign with a flashing amber light beacon mounted on top mean?",
  "Active School Zone or hazardous pedestrian crossing in operation; strictly obey reduced 20 km/h speed limit",
  "Flash sale at store",
  "Nightclub entrance",
  "Lighthouse ahead",
  "A", "Flashing warning beacons emphasize active school crossing hours.", 1);

addQ(7, "Why must drivers never pass another vehicle stopped at a marked pedestrian crosswalk?",
  "The stopped vehicle is likely yielding to a crossing pedestrian hidden from your line of sight",
  "It is bad luck",
  "The stopped vehicle might be broken down",
  "Crosswalk paint is wet",
  "A", "Overtaking a car stopped at a crosswalk is a leading cause of fatal pedestrian strikes.", 1);

addQ(7, "What does a triangular warning sign showing children playing with a ball warn of?",
  "Children Playground / Residential Recreational Area nearby; watch for darting children",
  "Soccer stadium ahead",
  "Toy store entrance",
  "Sports equipment warehouse",
  "A", "Warns of high residential child activity near community parks and sports courts.", 1);

addQ(7, "What does a triangular warning sign showing an open canal / storm drain hazard mean?",
  "Uncovered roadside drainage canal or open drainage ditch; avoid driving too close to shoulder",
  "Irrigation canal entrance",
  "Swimming pool ahead",
  "Water supply tank",
  "A", "Warns of roadside drainage trenches without protective cover grates.", 2);

addQ(7, "When driving through a coastal provincial highway, what does a triangular warning sign depicting sea waves crashing over road mean?",
  "High Tide / Coastal Storm Surges and sea spray overtopping the roadway",
  "Beach resort entrance",
  "Surfing school",
  "Fish market ahead",
  "A", "Warns of seawater inundation and dangerous salt spray during typhoon high tides.", 2);

addQ(7, "What does a triangular warning sign showing an electrical spark / lightning symbol indicate?",
  "Low overhead high-voltage power lines crossing the highway; check vehicle height clearance",
  "Electric vehicle fast charger",
  "Power generation plant",
  "Thunderstorm zone",
  "A", "Warns oversized trucks of electrocution risk from low overhead electrical power cables.", 2);

// -------------------------------------------------------------
// MODULE 8 EXPANSION (Questions 21-30: Pavement Markings & Lane Dividers)
// -------------------------------------------------------------
addQ(8, "What does a White Diamond symbol painted in the center of a traffic lane signify?",
  "High Occupancy Vehicle (HOV) / Carpool Lane or dedicated public transit bus lane",
  "Diamond jewelry shop ahead",
  "Speed bump marker",
  "Pedestrian crossing",
  "A", "Diamond lane markings designate reserved transit or HOV lanes.", 2);

addQ(8, "What does a painted Yellow Curb with black diagonal stripes along the curb line designate?",
  "Strict NO LOADING and NO UNLOADING zone for all public and private vehicles",
  "Free parking area",
  "Taxi stand only",
  "Motorcycle parking",
  "A", "Enhanced curb marking signifying complete prohibition of loading or stopping.", 1);

addQ(8, "What do wide, thick White Chevron V-shapes painted inside an expressway exit gore area mean?",
  "Off-limits channelizing island separating the through expressway from the deceleration exit ramp; driving over it is strictly illegal",
  "Emergency passing lane",
  "Motorcycle lane",
  "Short cut to exit",
  "A", "Gore areas protect the physical impact attenuator barrier from errant lane swerves.", 2);

addQ(8, "What does a double broken white line painted across a lane indicate?",
  "Reversible Traffic Lane boundary where travel direction changes depending on peak-hour schedule",
  "Pedestrian jogging line",
  "Speed limit 80 km/h",
  "No entry lane",
  "A", "Reversible tidal flow lanes are designated by double broken striping.", 2);

addQ(8, "What do transverse white bars painted with decreasing spacing (Optical Speed Bars) on the approach to a sharp curve or toll gate create?",
  "An optical illusion of accelerating speed that naturally encourages the driver to brake and decelerate",
  "Tire cleaning mechanism",
  "Lane alignment guide",
  "Vibration test",
  "A", "Optical speed bars trick the driver's peripheral vision into perceiving increasing speed, prompting foot braking.", 2);

addQ(8, "What does a wide solid yellow line along the left edge of a divided expressway carriageway designate?",
  "The median edge line separating the fast lane from the central concrete barrier or grass median",
  "Bicycle lane",
  "Slow vehicle lane",
  "Emergency breakdown zone",
  "A", "Left-side median boundary line on high-speed divided expressways.", 1);

addQ(8, "What does a painted bicycle symbol with two directional chevrons ('Sharrow') on the street surface mean?",
  "Shared Lane Marking: Motorists and cyclists share the full travel lane with equal priority",
  "Bicycles prohibited",
  "Bicycle parking only",
  "Bicycle speed limit 60 km/h",
  "A", "Sharrows designate shared roadway space where bicycles may take the center of the lane for safety.", 1);

addQ(8, "What does a yellow curb painted in front of a private garage driveway indicate?",
  "Prohibited parking zone to maintain clear vehicular ingress and egress for the property owner",
  "Free public parking",
  "Towing truck stand",
  "Loading zone only",
  "A", "Curb markings protecting driveway access from illegal blockage.", 1);

addQ(8, "What does a series of small white triangles painted across a lane pointing toward approaching traffic (Shark's Teeth) represent?",
  "Yield line where approaching vehicles must give way to crossing traffic",
  "Stop line for trucks",
  "Tire spike strip",
  "Speed bump",
  "A", "Yield teeth markings visually emphasize the exact give-way point.", 1);

addQ(8, "What do Blue pavement markings signify in modern Philippine parking facilities?",
  "Designated accessible parking spaces reserved strictly for Persons with Disabilities (PWD)",
  "VIP parking only",
  "Electric vehicles only",
  "Free motorcycle parking",
  "A", "Blue bays are universal accessibility spaces under BP 344.", 1);

// -------------------------------------------------------------
// MODULE 9 EXPANSION (Questions 21-30: Traffic Light Signals & Hand Signals)
// -------------------------------------------------------------
addQ(9, "What does an overhead Lane Control Signal displaying a RED 'X' directly above your traffic lane mean?",
  "The lane is CLOSED to traffic in your direction; you must safely merge into an adjacent lane with a green arrow",
  "Speed limit 100 km/h",
  "Toll plaza open",
  "Fast lane open",
  "A", "Red X indicates that the lane is closed or dedicated to opposing reversible traffic.", 1);

addQ(9, "What does an overhead Lane Control Signal displaying a GREEN downward arrow directly above your lane indicate?",
  "The lane is OPEN and authorized for travel in your direction",
  "Merge left immediately",
  "Toll gate closed",
  "Stop line ahead",
  "A", "Green arrow confirms lawful use of that specific lane.", 1);

addQ(9, "What does an overhead Lane Control Signal displaying a FLASHING YELLOW 'X' mean?",
  "The lane is about to close or is reserved for left-turn maneuvers only; prepare to vacate the lane",
  "Speed up to 120 km/h",
  "Emergency landing strip",
  "Lane open all day",
  "A", "Flashing yellow X warns motorists to vacate the lane before it switches to a full red X.", 2);

addQ(9, "What does a Pedestrian Countdown Timer displaying '5 seconds' remaining in RED mean to a pedestrian on the curb?",
  "Do not step onto the crosswalk; wait for the next green pedestrian walk signal",
  "Sprint across as fast as possible",
  "Jaywalking is legal",
  "Traffic lights are broken",
  "A", "Pedestrians on the sidewalk must not initiate crossing once the countdown is ending or red.", 1);

addQ(9, "What does a steady White Walking Person illuminated pedestrian signal indicate?",
  "Pedestrians may cross the street lawfully; turning motor vehicles must yield right-of-way",
  "Pedestrians must stop",
  "Bicycles only cross",
  "Running is mandatory",
  "A", "Standard illuminated signal granting crossing authorization to pedestrians.", 1);

addQ(9, "When a police traffic officer raises their right hand vertically with the palm facing approaching traffic, what does it mean?",
  "All vehicles approaching from the front of the officer must STOP immediately",
  "Wave back to the officer",
  "Accelerate forward",
  "Turn right immediately",
  "A", "Raised palm command is the universal police gesture for an immediate halt.", 1);

addQ(9, "When a police officer points at your vehicle with one hand and gestures toward the roadside curb with the other, what must you do?",
  "Pull over immediately and stop safely at the designated curb location",
  "Speed up and drive past",
  "Honk horn twice and wave",
  "Make a U-turn",
  "A", "Mandatory command to pull over for inspection or apprehension.", 1);

addQ(9, "What does a pedestrian signal showing an orange Flashing Upraised Hand mean?",
  "Pedestrians already on the crosswalk must finish crossing; pedestrians on the curb must NOT start crossing",
  "Pedestrians must turn back to where they started",
  "Traffic light is broken",
  "Cars may drive through crosswalk at full speed",
  "A", "Clearance interval for crosswalk clearance.", 1);

addQ(9, "What does a Green Bicycle illuminated traffic signal at an intersection authorize?",
  "Cyclists in the dedicated bicycle lane have a protected phase to cross the intersection ahead of motor traffic",
  "Cars may drive in bicycle lane",
  "Motorcycles only",
  "Pedestrians prohibited",
  "A", "Dedicated bicycle signal phase.", 1);

addQ(9, "If an intersection traffic light cycles from Red directly to Green, why should you still pause for 1 to 2 seconds and look left-right-left before accelerating into the junction?",
  "To clear cross-traffic red-light runners or late clearing emergency vehicles and pedestrians",
  "To let your car engine warm up",
  "To check your social media notifications",
  "To adjust your seatbelt",
  "A", "Defensive driving 'Green Light Scan' prevents being T-boned by late intersection runners.", 1);

// -------------------------------------------------------------
// MODULE 10 EXPANSION (Questions 21-30: Right-of-Way Rules & Priority)
// -------------------------------------------------------------
addQ(10, "When two vehicles meet on a narrow bridge that only allows one vehicle to cross at a time, who has priority in the absence of signs?",
  "The vehicle that reached and started crossing the bridge FIRST",
  "The heavier vehicle",
  "The vehicle on the left",
  "Whichever vehicle is painted red",
  "A", "The vehicle already established on the single-lane bridge holds right of passage.", 1);

addQ(10, "When backing (reversing) a motor vehicle out of a private residential driveway onto a public road, what is your legal right-of-way status?",
  "You have zero right-of-way; you must yield completely to all moving vehicles, pedestrians, and cyclists on the public roadway",
  "You have priority because reverse gear is harder to drive",
  "Oncoming cars must stop for you",
  "You have priority if you honk three times",
  "A", "Reversing vehicles have the lowest legal priority and bear complete responsibility for clearing traffic.", 1);

addQ(10, "When an authorized emergency ambulance with siren active is stuck behind you in a narrow single-lane bridge or tunnel where pulling over is impossible, what should you do?",
  "Stop immediately in the middle of the bridge",
  "Maintain safe speed forward to clear the bridge/tunnel as expeditiously as possible, then pull over to the right immediately upon exiting",
  "Put your vehicle in reverse",
  "Turn off your engine",
  "B", "Clearing the bottleneck rapidly allows the emergency vehicle to pass as soon as open road is reached.", 2);

addQ(10, "At a traffic circle (roundabout), if a driver inside the circulatory lane wants to change from the inner to the outer lane, who has right-of-way?",
  "Vehicles already established in the outer circulatory lane have right-of-way; the inner driver must signal and yield before changing lanes",
  "The inner driver can sideswipe outer cars",
  "Outer cars must slam brakes",
  "The faster car",
  "A", "Standard lane change rules apply inside multi-lane roundabouts.", 2);

addQ(10, "When approaching a yield sign at an expressway on-ramp merge, if there is no safe gap in the main highway traffic stream, what must the merging driver do?",
  "Force your way into the side of a semi-truck",
  "Slow down or come to a stop in the acceleration lane until a safe gap in expressway traffic opens",
  "Drive across the grass median",
  "Drive on the shoulder at 120 km/h",
  "B", "Yield signs at on-ramps mandate stopping if highway traffic is too dense to enter safely.", 2);

addQ(10, "If a traffic signal is displaying a solid green light for your lane, but a police officer is standing in the intersection holding up their hand facing you, what must you do?",
  "Drive through because green light gives you legal right-of-way",
  "Stop completely; manual instructions from an authorized law enforcer strictly supersede all electronic traffic lights",
  "Honk at the officer",
  "Take a photo and drive through",
  "B", "Police enforcer directives supersede automated signals under Section 35 of RA 4136.", 1);

addQ(10, "When entering a multi-lane highway from a side street by turning left across multiple lanes, what must you yield to?",
  "Traffic approaching from BOTH the left and right directions, as well as pedestrians in the roadway",
  "Traffic from the right only",
  "Traffic from the left only",
  "Only emergency vehicles",
  "A", "Left turns across multi-lane highways require clearing both opposing traffic flows.", 1);

addQ(10, "When approaching an intersection where a street sweeper or garbage collection truck is operating with flashing amber beacons, what should you do?",
  "Honk aggressively and pass within 5 cm",
  "Yield reasonable right-of-way, slow down, give adequate clearance, and pass only when safe",
  "Ram the garbage truck",
  "Cut off the road crew",
  "B", "Maintenance and utility vehicles with amber lights require cautious clearance buffers.", 1);

addQ(10, "Who has right-of-way when a car is turning right on green while a pedestrian is crossing the destination street on a 'Walk' signal?",
  "The pedestrian has absolute right-of-way; turning vehicles must yield and wait until the crosswalk is clear",
  "The car has right-of-way because it is bigger",
  "Whoever crosses the curb first",
  "The car if turning at high speed",
  "A", "Pedestrians lawfully crossing on walk phases have absolute priority over turning motor vehicles.", 1);

addQ(10, "When two vehicles meet on a narrow mountain road where one vehicle has a turnout (passing bay) on its right side, what should happen?",
  "The vehicle on the side with the turnout should pull into the passing bay and allow the other vehicle to pass safely",
  "Both drivers should engage in an argument",
  "Both vehicles must back up 5 km",
  "The heavier vehicle must drive off the cliff",
  "A", "Common mountain road courtesy and DPWH rules mandate utilizing passing bays to clear single-lane bottlenecks.", 2);


// -------------------------------------------------------------
// MODULE 11 EXPANSION (Questions 21-30: Overtaking & Expressway Driving)
// -------------------------------------------------------------
addQ(11, "What should a driver do if the vehicle they are attempting to overtake suddenly accelerates to block them?",
  "Force them off the road",
  "Abort the pass immediately, ease off the throttle, and drop back safely into your original lane behind that vehicle",
  "Engage in a street race at 160 km/h",
  "Sideswipe their vehicle",
  "B", "Defensive driving mandates aborting unsafe passing maneuvers if the passed vehicle behaves erratically or speeds up.", 2);

addQ(11, "Why is overtaking a long articulated fuel tanker or heavy double-trailer truck more hazardous than passing a passenger car?",
  "Articulated trucks are much longer, requiring significantly more distance and time in the opposing oncoming lane to complete the pass safely",
  "Trucks emit magnetic waves",
  "Tanker trucks cannot travel faster than 10 km/h",
  "Truck drivers cannot look at mirrors",
  "A", "The extended length of heavy combination rigs drastically expands the required clear passing window.", 2);

addQ(11, "What is a 'Blind Spot' on a motor vehicle?",
  "Areas around the sides and rear of the vehicle that cannot be seen directly in the rearview or side mirrors, requiring a quick head-turn shoulder check",
  "The dirty section of the windshield",
  "The dark corner of the trunk",
  "The underside of the car",
  "A", "Blind spots are unreflected lateral zones where adjacent cars or motorcycles remain hidden from mirror view.", 1);

addQ(11, "Why is weaving in and out of expressway traffic ('Slalom / Zigzag Driving') considered a reckless driving offense?",
  "It creates unpredictable closing speeds, surprises other motorists, and frequently results in multi-vehicle pileups",
  "It uses up too much turn signal fluid",
  "It causes asphalt grooves",
  "It improves fuel economy",
  "A", "Erratic lane switching destabilizes traffic flow and is a prime cause of high-speed rollover collisions.", 1);

addQ(11, "What should you do when approaching an expressway Toll Barrier equipped with RFID (AutoSweep / EasyTrip)?",
  "Speed through the barrier at 80 km/h",
  "Slow down to the posted toll lane speed limit (typically 20 km/h), maintain a 5-meter gap, ensure your RFID balance is sufficient, and await the barrier arm lift",
  "Honk repeatedly at the toll sensor",
  "Drive through without slowing down",
  "B", "Approaching RFID lanes at safe speeds guarantees electronic tag scanning and prevents barrier strikes.", 1);

addQ(11, "What should you do if the RFID barrier arm fails to open when your vehicle approaches the toll gate?",
  "Ram the plastic barrier arm to break it",
  "Stop safely, remain inside the vehicle, and await the toll teller or lane attendant to manually verify your RFID card/account",
  "Reverse at high speed out of the toll lane into oncoming expressway cars",
  "Get out and climb over the barrier",
  "B", "Never reverse in active toll lanes; wait for on-site tollway personnel assistance.", 1);

addQ(11, "What is 'Highway Hypnosis' during long-distance expressway driving?",
  "A trance-like state of drowsy, dull mental unawareness caused by monotonous high-speed driving over long straight highways",
  "A magic trick performed at rest stops",
  "Sleeping with your eyes open while parked",
  "An engine malfunction",
  "A", "Monotony over long stretches induces dangerous cognitive fatigue; regular rest breaks every 2 hours are crucial.", 1);

addQ(11, "What is the recommended interval for taking rest breaks during long-distance expressway trips?",
  "Every 2 hours of driving or every 200 kilometers",
  "Every 10 hours",
  "Only when the fuel tank is completely dry",
  "Never take rest breaks",
  "A", "Taking 15-minute breaks every 2 hours prevents micro-sleep episodes and cognitive exhaustion.", 1);

addQ(11, "When driving at 100 km/h on an expressway at night, why should you avoid 'Overdriving your Headlights'?",
  "Overdriving headlights means traveling at a speed where your total stopping distance exceeds the forward distance illuminated by your headlight beams",
  "It will burn out the headlight bulbs in 10 minutes",
  "It drains the car alternator",
  "It blinds the driver inside the car",
  "A", "If you cannot stop within the illuminated distance ahead, you will strike unlit hazards or pedestrians before you can react.", 2);

addQ(11, "What does a sign reading 'SLOW VEHICLES USE RIGHT LANE' mandate on steep expressway climbing grades?",
  "Heavily loaded trucks, buses, and underpowered vehicles must shift to the designated right climbing lane, leaving inner lanes clear for passing traffic",
  "All cars must drive at 10 km/h",
  "Right lane is closed",
  "Bicycles only lane",
  "A", "Climbing lanes segregate slow uphill freight to keep through-traffic moving unimpeded.", 1);

// -------------------------------------------------------------
// MODULE 12 EXPANSION (Questions 21-30: General Traffic Code RA 4136)
// -------------------------------------------------------------
addQ(12, "Under RA 4136 Section 19, what is the duty of a driver regarding their driver's license while operating a motor vehicle?",
  "Leave the license at home in a safe",
  "Carry the physical driver's license (or official electronic e-license under LTO guidelines) at all times and surrender it for inspection upon lawful demand by an authorized traffic enforcer",
  "Lend the license to friends",
  "Post a photocopy on the car windshield",
  "B", "Drivers must always possess their valid driver's license while driving and present it upon lawful inspection.", 1);

addQ(12, "Under RA 4136, what is the maximum permissible width of any motor vehicle and its load on public highways?",
  "2.5 meters",
  "3.5 meters",
  "4.0 meters",
  "1.8 meters",
  "A", "Under Section 35 of RA 4136, maximum vehicle width including load cannot exceed 2.5 meters without a special DPWH permit.", 2);

addQ(12, "Under RA 4136, what is the maximum allowable height of any motor vehicle and its load measured from the road surface?",
  "3.8 meters (or 4.0 meters under updated DPWH bridge clearance guidelines)",
  "2.0 meters",
  "6.0 meters",
  "8.0 meters",
  "A", "Standard vehicle height clearance is capped at 3.8 to 4.0 meters to clear low flyovers and utility wires.", 2);

addQ(12, "What is required of a motor vehicle registration (OR/CR - Official Receipt / Certificate of Registration) in the Philippines?",
  "It must be renewed annually with the LTO based on the last digit of the vehicle license plate (Plate Ending Schedule)",
  "It is a lifetime registration that never expires",
  "It only needs renewal every 10 years",
  "It is renewed with the barangay captain",
  "A", "Motor vehicle registration must be renewed each year based on the assigned plate digit schedule and emissions inspection.", 1);

addQ(12, "According to the LTO Plate Ending Schedule, if your motor vehicle plate ends in the number '7', in which month must you register and renew the vehicle?",
  "July (7th month of the year)",
  "May",
  "October",
  "December",
  "A", "Plate ending numbers correspond directly to renewal months: 1=Jan, 2=Feb, 3=Mar, 4=Apr, 5=May, 6=Jun, 7=Jul, 8=Aug, 9=Sep, 0=Oct.", 1);

addQ(12, "Under the LTO Middle Digit Schedule, if the second-to-last digit of your license plate is '4', in which week of the registration month must renewal be completed?",
  "Between the 8th and 14th working day of the month (2nd weekly bracket)",
  "On the 1st day only",
  "On the 31st day only",
  "Anytime in the next year",
  "A", "Middle digit determines weekly registration brackets (1,2,3 = 1st-7th; 4,5,6 = 8th-14th; 7,8 = 15th-21st; 9,0 = 22nd-end).", 2);

addQ(12, "Under RA 4136 Section 32, what is the maximum number of passengers that may be carried in a private passenger car?",
  "As many people as can squeeze inside the vehicle",
  "Not more than the registered seating capacity specified in the vehicle's official Certificate of Registration (CR)",
  "10 passengers regardless of car size",
  "Unlimited if they are all family members",
  "B", "Exceeding registered passenger seating capacity constitutes an illegal overloading violation.", 1);

addQ(12, "Under RA 4136 Section 34(g), what is the minimum required braking distance for a passenger car traveling at 30 km/h on dry, level asphalt?",
  "Must come to a complete stop within 10 meters (approx. 30 feet)",
  "Within 50 meters",
  "Within 100 meters",
  "Within 1 meter",
  "A", "Statutory brake performance standards mandate stopping within 10 meters at 30 km/h under full service brake application.", 2);

addQ(12, "What is the legal status of heavily tinted front windshields that obstruct the interior view of the driver in the Philippines?",
  "Heavily tinted glass with less than 30% visible light transmittance is regulated and subject to restriction to ensure driver identification and enforcement of seatbelt/phone laws",
  "Completely pitch black tint is mandatory for all cars",
  "Tints are illegal everywhere",
  "Tints can only be green",
  "A", "Excessively dark front windshield tints that obscure the driver are restricted under LTO visibility regulations.", 2);

addQ(12, "Under RA 4136 Section 52, what is the law regarding driving over newly painted lines on highways?",
  "No person shall drive any vehicle over newly painted pavement lines marked with warning cones or flags before the paint has dried",
  "Drivers are encouraged to run over wet paint",
  "It is permitted if traveling over 60 km/h",
  "Only motorcycles may cross",
  "A", "Driving over wet paint with markers incurs fines for damaging official traffic markings.", 1);

// -------------------------------------------------------------
// MODULE 13 EXPANSION (Questions 21-30: Special Laws RA 10586 / RA 10913 / RA 11229)
// -------------------------------------------------------------
addQ(13, "Under RA 10586, what is the mandatory non-bailable consequence if a driver under the influence of alcohol or drugs kills a person in a road crash?",
  "Imprisonment for Reclusion Temporal (12 to 20 years) or Reclusion Perpetua, and permanent revocation of driver's license",
  "₱1,000 fine and 1 week suspension",
  "Community service at the municipal hall",
  "Attending a 2-hour lecture",
  "A", "Drunk driving resulting in vehicular homicide carries severe multi-decade criminal sentences and lifetime license ban.", 3);

addQ(13, "Under RA 10913 (Anti-Distracted Driving Act), are motorists allowed to use mobile phones while their vehicle is stopped at a RED traffic light?",
  "Yes, because the car is not moving",
  "No, the prohibition applies whether the vehicle is in motion OR temporarily stopped at a red light or in traffic congestion",
  "Yes, for texting only",
  "Yes, if using speakerphone",
  "B", "Operating hand-held devices while stopped at red lights or in traffic queues is strictly illegal under RA 10913 Section 4.", 1);

addQ(13, "Under RA 10913, which emergency calls are EXEMPT from the distracted driving prohibition?",
  "Calling family members to say you are late for dinner",
  "Emergency calls to law enforcement, fire department, hospital emergency services, or medical providers during life-threatening crises",
  "Calling food delivery services",
  "Checking banking apps",
  "B", "Emergency distress calls during genuine crises are statutory exemptions.", 1);

addQ(13, "Under RA 11229 (Child Safety in Motor Vehicles Act), what is the penalty for leaving a child unattended inside a motor vehicle?",
  "A verbal reminder",
  "Fines ranging from ₱1,000 to ₱5,000 and license suspension, without prejudice to criminal charges for child endangerment under RA 7610",
  "No penalty",
  "Free parking voucher",
  "B", "Leaving minors unattended in hot vehicles carries fines and child protection criminal liability.", 2);

addQ(13, "Under RA 10054 (Motorcycle Helmet Act), can a traffic enforcer confiscate a motorcycle rider's helmet?",
  "Yes, enforcers can confiscate any helmet",
  "No, enforcers are not authorized to confiscate certified helmets unless they are being seized as evidence of a crime or verified as counterfeit non-compliant gear",
  "Helmets are confiscated on every violation",
  "Only if it is red in color",
  "B", "Authorized certified helmets cannot be arbitrarily confiscated during routine traffic stops.", 2);

addQ(13, "Under RA 10666, what is the exception where a small child who cannot reach motorcycle footpegs may ride as a passenger?",
  "If the child is in immediate need of emergency medical treatment and transport",
  "If going to church on Sunday",
  "If attending a school graduation",
  "If traveling under 10 km/h",
  "A", "Emergency medical transport is the only statutory exemption under RA 10666 Section 5.", 2);

addQ(13, "Under RA 8750 (Seat Belts Use Act), what is required of all public utility vehicle (PUV) drivers and conductors regarding passenger seat belts?",
  "They must inform and instruct front-seat passengers to buckle up before dispatch and departure",
  "They can ignore seat belts completely",
  "Seat belts can be cut off with scissors",
  "Only the driver needs a seat belt",
  "A", "PUV operators must mandate seatbelt compliance for front occupants.", 1);

addQ(13, "What physiological effect does alcohol consumption have on a driver's central nervous system?",
  "It sharpens reaction time and expands peripheral vision",
  "It impairs judgment, slows reaction reflexes, creates tunnel vision, degrades distance estimation, and induces false overconfidence",
  "It improves night vision",
  "It makes reflexes twice as fast",
  "B", "Alcohol is a neural depressant that degrades motor coordination and risk perception.", 1);

addQ(13, "How does driving under the influence of illegal narcotics (shabu, marijuana) affect motor vehicle operation?",
  "It causes severe hallucinations, spatial disorientation, delayed motor coordination, erratic lane swerves, and catastrophic crash risks",
  "It makes drivers more focused and alert",
  "It cures driver fatigue completely",
  "It has no measurable effect on driving",
  "A", "Drugged driving causes catastrophic cognitive dissociation and fatal collisions.", 1);

addQ(13, "Under RA 10586, what is the mandatory consequence for a commercial transport operator (e.g. bus or trucking company) if their driver tests positive for drugs on the road?",
  "₱500 fine",
  "Fines up to ₱100,000, joint subsidiary civil liability for damages, and risk of franchise cancellation by the LTFRB",
  "Free advertising on television",
  "No consequence for the company",
  "B", "Operators share heavy financial and franchise liability for employing intoxicated drivers.", 2);

// -------------------------------------------------------------
// MODULE 14 EXPANSION (Questions 21-30: Fines, Demerits & Penalties)
// -------------------------------------------------------------
addQ(14, "Under the LTO Demerit System, how long do demerit points remain recorded against a driver's license profile?",
  "They expire after 24 hours",
  "They remain active throughout the current 5-year or 10-year validity cycle of the driver's license and determine renewal duration and remedial courses",
  "They are erased every New Year's Day",
  "They never affect license renewal",
  "B", "Demerit points persist through the licensing cycle to track repeat offenders.", 2);

addQ(14, "What is the penalty for using a mobile phone to livestream or record videos while driving under RA 10913?",
  "Treated as Distracted Driving with statutory fines starting at ₱5,000 plus moving demerit points",
  "Awarded a social media certificate",
  "₱50 fine",
  "No violation if hands-free tripod is used",
  "A", "Video recording or livestreaming while operating a moving vehicle is a severe distracted driving violation.", 1);

addQ(14, "Under JAO 2014-01, what is the fine for driving a motor vehicle with an unauthorized loud or open exhaust pipe ('Open Pipe' / Noise Pollution)?",
  "₱500",
  "₱5,000 fine and confiscation of unauthorized exhaust modification under anti-noise standards",
  "₱100",
  "Warning only",
  "B", "Illegal noisy exhausts exceeding decibel limits carry a ₱5,000 penalty and removal order.", 2);

addQ(14, "What is the fine under JAO 2014-01 for operating a public utility vehicle with expired or non-existent LTFRB franchise ('Colorum' Vehicle)?",
  "₱5,000",
  "Heavy fines up to ₱1,000,000 for buses, ₱200,000 for vans/UVs, ₱120,000 for sedans, and minimum 3-month vehicle impoundment",
  "₱100 fine",
  "Warning from barangay",
  "B", "Anti-Colorum enforcement carries severe statutory multi-hundred-thousand peso penalties and impoundment.", 2);

addQ(14, "What is the penalty for driving a motor vehicle against the lawful flow of traffic on a one-way street ('Counterflowing')?",
  "Treated as Reckless Driving with fines starting at ₱2,000 plus mandatory 3-month license suspension for subsequent offenses",
  "₱100 fine only",
  "Permitted if hazards are on",
  "Permitted for motorcycles",
  "A", "Counterflowing into oncoming traffic is prosecuted as reckless driving with escalating license suspensions.", 1);

addQ(14, "What is the legal consequence of assaulting or physically attacking an authorized traffic enforcer performing official duties?",
  "Direct Assault upon an Agent of a Person in Authority under Article 148 of the Revised Penal Code, punishable by multi-year imprisonment and permanent license revocation",
  "₱500 traffic fine",
  "Handshake at the police station",
  "Community service for 1 hour",
  "A", "Physical violence against traffic enforcers is a serious felony carrying criminal prison terms.", 2);

addQ(14, "What is the fine for Refusal to Render Service or passenger trip-cutting by a Public Utility Vehicle (PUV) driver?",
  "₱1,000 for 1st offense; ₱2,000 for 2nd offense; ₱3,000 and 6-month license suspension for 3rd offense under JAO 2014-01",
  "₱50 fine",
  "Free gasoline voucher",
  "No penalty",
  "A", "Trip cutting and arbitrary passenger refusal violate public utility franchise rules.", 2);

addQ(14, "Under the No Contact Apprehension Policy (NCAP) where active, how are traffic violation notices delivered to vehicle owners?",
  "Via official registered mail or electronic portal to the registered owner's address listed in the LTO IT database, utilizing high-resolution camera footage as prima facie evidence",
  "Via informal text message from random numbers",
  "By word of mouth from neighbors",
  "They are not delivered",
  "A", "NCAP issues automated photo-enforced citations to the registered vehicle owner.", 1);

addQ(14, "What is the penalty for driving a motor vehicle with an expired Driver's License beyond 1 year but less than 2 years?",
  "Standard fine for driving with expired license plus late penalty surcharges upon renewal",
  "Permanent ban from driving",
  "Immediate vehicle forfeiture",
  "No penalty",
  "A", "Late renewals incur compounding percentage surcharges and unlicensed driving fines if caught on the road.", 1);

addQ(14, "What is the legal status of presenting an AI-generated or fake photo of a driver's license on a smartphone during a traffic stop?",
  "It constitutes Falsification of Official Documents and driving without a valid license, punishable by criminal prosecution and license disqualification",
  "It is completely legal",
  "Enforcers will accept any photo",
  "It gives a 50% discount on fines",
  "A", "Fraudulent license representations constitute criminal document forgery.", 2);

// -------------------------------------------------------------
// MODULE 15 EXPANSION (Questions 21-30: Vehicle Safety, BLOWBAGETS & Emergencies)
// -------------------------------------------------------------
addQ(15, "When checking 'L' (Lights) in BLOWBAGETS, which specific lights must be verified as fully operational before every trip?",
  "Headlights (low and high beams), tail lights, brake lights, front and rear turn signals, hazard flashers, reverse lights, and license plate lamp",
  "Only the front high beams",
  "Only the dome light inside the cabin",
  "Neon underglow lights only",
  "A", "Comprehensive light inspection ensures complete 360-degree visibility and signaling capability.", 1);

addQ(15, "When checking 'G' (Gas/Fuel) in BLOWBAGETS, why should you avoid allowing your fuel tank to run down to 'Empty' or near-fumes continuously?",
  "The fuel pump (which is submerged inside the tank) relies on gasoline for cooling and lubrication; running on empty overheats and destroys the fuel pump while sucking up bottom sediment",
  "Gasoline evaporates faster in empty tanks",
  "It causes tires to deflate",
  "It makes the radio lose signal",
  "A", "Submerged electric fuel pumps overheat and fail prematurely when tanks are chronically run near dry.", 2);

addQ(15, "When checking 'E' (Engine) in BLOWBAGETS, what unusual symptoms should you listen and look for?",
  "Unusual screeching belt noises, knocking sounds, burning smells, fluid puddles under the engine bay, and fraying serpentine drive belts",
  "Engine making purring mechanical sounds",
  "Engine hood being closed tightly",
  "Clean engine oil",
  "A", "Visual and auditory engine checks detect worn alternator belts and fluid leaks before catastrophic breakdowns.", 1);

addQ(15, "When inspecting 'T' (Tires) in BLOWBAGETS, what does uneven tire tread wear (e.g. inner edge completely worn while outer edge is untouched) indicate?",
  "Improper wheel alignment (excessive negative camber or toe-out) or bent suspension components requiring professional alignment",
  "The tire is self-cleaning",
  "You are driving too slowly",
  "Tire pressure is too high",
  "A", "Asymmetrical tread wear is a classic mechanical indicator of misaligned suspension geometry.", 2);

addQ(15, "What should you do if your vehicle's engine hood flies open while driving at 80 km/h on a highway, completely blocking your view through the windshield?",
  "Slam on the brakes and close eyes in panic",
  "Remain calm, look through the bottom gap underneath the propped hood or stick your head out the driver's side window, ease off throttle, and guide the car safely to the shoulder",
  "Accelerate to 120 km/h so wind pushes the hood down",
  "Jump out of the vehicle",
  "B", "Peering through the base gap under the propped hood allows safe visual guidance to pull over.", 2);

addQ(15, "What should you do if your motor vehicle catches fire under the hood while driving?",
  "Drive faster to blow the fire out",
  "Pull over immediately to the shoulder, turn off the ignition to stop fuel pumps, evacuate all passengers, keep back, and discharge a fire extinguisher through the grille gap without fully opening the hood",
  "Pour a bottle of drinking water on the engine block",
  "Sit inside and call a mechanic",
  "B", "Pull over and evacuate immediately. Cracking the hood slightly avoids supplying massive oxygen that turns small engine fires into infernos.", 2);

addQ(15, "If your vehicle is stranded on a railway track and a train is visibly approaching, what must all occupants do immediately?",
  "Stay inside the vehicle and try starting the engine repeatedly",
  "Evacuate all passengers immediately, abandon the vehicle, and run alongside the track at a 45-degree angle TOWARD the direction of the approaching train to avoid flying collision debris",
  "Push the car toward the oncoming train",
  "Wave a white handkerchief from inside the car",
  "B", "Running toward the train at a safe angle ensures that when the train obliterates the vehicle, wreckage is propelled forward away from you.", 2);

addQ(15, "What does an illuminated red Oil Pressure Warning Light (oil can icon) on your instrument cluster mean while driving?",
  "Add more oil next week",
  "Critical loss of engine oil pressure; pull over and shut off the engine IMMEDIATELY to prevent catastrophic internal engine seizure within seconds",
  "Oil level is perfectly full",
  "Oil temperature is pleasantly warm",
  "B", "Zero oil pressure starves bearings and crankshaft within seconds, causing total engine destruction.", 1);

addQ(15, "What does an illuminated Battery / Charging System Warning Light on your dashboard indicate while driving?",
  "The alternator is failing to charge the battery, and the car is running entirely on limited battery reserve power which will deplete shortly",
  "Battery is 100% charged",
  "Air conditioning is on",
  "Headlights are too bright",
  "A", "Alternator charging failure leads to complete electrical cutout once battery voltage decays.", 1);

addQ(15, "Why is carrying a properly rated ABC Dry Chemical Fire Extinguisher inside your motor vehicle an indispensable safety measure?",
  "It is capable of rapidly extinguishing Class A (trash/wood), Class B (gasoline/oil liquids), and Class C (electrical) vehicle fires before they engulf the passenger cabin",
  "It can be used to cool down soda cans",
  "It cleans dirty windshields",
  "It is used as a wheel chock",
  "A", "Automotive ABC dry chemical extinguishers combat fuel, oil, and electrical short-circuit fires effectively.", 1);

const packManifest = {
  packId: "lto_drivers_exam_ph",
  name: "Philippine LTO Driver's License Reviewer",
  subject: "Road Safety & Philippine Traffic Laws",
  icon: "terminal",
  color: "#10B981",
  version: 7,
  modules: modules,
  questions: questions
};

console.log("Total generated questions:", questions.length);

const outputPath = path.join(__dirname, 'assets', 'packs', 'pack_lto_ph.json');
fs.writeFileSync(outputPath, JSON.stringify(packManifest, null, 2), 'utf8');
console.log("Wrote expanded 450-question pack to " + outputPath + " successfully!");
