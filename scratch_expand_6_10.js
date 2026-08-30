// Modules 6 to 10 Expansion Builder (+10 Qs each = 50 additional questions)
const fs = require('fs');

let fileContent = fs.readFileSync('c:/code/synapse/generate_lto_300.js', 'utf8');

const expansion6to10 = `
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

`;

fs.writeFileSync('c:/code/synapse/generate_lto_300.js', fileContent + expansion6to10);
console.log("Modules 6-10 expanded successfully!");
