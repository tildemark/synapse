// Modules 11 to 15 Expansion Builder (+10 Qs each = 50 additional questions, total 450 Qs)
const fs = require('fs');

let fileContent = fs.readFileSync('c:/code/synapse/generate_lto_300.js', 'utf8');

const expansion11to15 = `
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
`;

fs.writeFileSync('c:/code/synapse/generate_lto_300.js', fileContent + expansion11to15);
console.log("Modules 11-15 expanded successfully!");
