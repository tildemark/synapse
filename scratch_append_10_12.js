// Modules 10 to 12 Builder for 300 Questions
const fs = require('fs');

let fileContent = fs.readFileSync('c:/code/synapse/generate_lto_300.js', 'utf8');

const modules10to12 = `
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

`;

fs.writeFileSync('c:/code/synapse/generate_lto_300.js', fileContent + modules10to12);
console.log("Modules 10-12 appended successfully!");
