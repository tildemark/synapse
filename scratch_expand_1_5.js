// Modules 1 to 5 Expansion Builder (+10 Qs each = 50 additional questions)
const fs = require('fs');

let fileContent = fs.readFileSync('c:/code/synapse/generate_lto_300.js', 'utf8');

// Replace the export section with extra questions
const footerIndex = fileContent.indexOf('const packManifest = {');
if (footerIndex !== -1) {
  fileContent = fileContent.substring(0, footerIndex);
}

const expansion1to5 = `
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

`;

fs.writeFileSync('c:/code/synapse/generate_lto_300.js', fileContent + expansion1to5);
console.log("Modules 1-5 expanded successfully!");
