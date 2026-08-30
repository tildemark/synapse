// Modules 13 to 15 Builder for 300 Questions
const fs = require('fs');

let fileContent = fs.readFileSync('c:/code/synapse/generate_lto_300.js', 'utf8');

const modules13to15 = `
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
  "Children 12 years old and below, unless they are at least 150 cm (4'11\") in height and properly fitted with standard seat belts",
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

`;

fs.writeFileSync('c:/code/synapse/generate_lto_300.js', fileContent + modules13to15);
console.log("Modules 13-15 appended successfully!");
