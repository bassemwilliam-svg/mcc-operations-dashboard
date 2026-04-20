**MCC VR CCTV Training System**

**Facilitator Guide**

Instructor Script for On-Site Training Session

Client: MCC / UAE Supreme Council for National Security

Date: April 2026

**Classification: Confidential**

# **Pre-Session Preparation Checklist**

## **Room Setup**

Confirm the following before operators and supervisors arrive:

* Eight operator workstations arranged in a line or semicircle so all monitors are visible to the instructor
* One supervisor workstation at the front with a large display monitor
* Good lighting in the room (overhead lights sufficient)
* Chairs at all stations adjusted to proper height (feet on floor, back support)
* Cables neatly routed to avoid trip hazards

## **Hardware Check**

Check all equipment at least 30 minutes before the session begins:

* VR headsets: powered on, LED indicators green, no visible damage or cracks
* Link cables: connected firmly to both headset and PC, not kinked or pinched
* EmotiBit sensors: fully charged, LED status confirmed green
* EmotiBit sensor IDs recorded and cross-checked with participant roster
* Spare EmotiBit unit available and charged as backup
* Face cushions: one per headset, clean and dry
* Cleaning wipes available at each station

## **Software Check**

Confirm on all eight operator PCs and the supervisor PC:

* Windows login works, no forced updates pending
* MCC VR application installed and launcher icon visible on desktop
* SteamVR or VIVE Hub installed and current
* server.json configured by IT with correct session host IP address
* Network connectivity confirmed (ping the session host)
* Test launch: app starts, reaches lobby, no error messages

## **Print Materials**

Bring printed copies of the following to the session:

* Quick Start Cards (operator version): 1 copy per operator, double-sided A4, printed and in hand
* Quick Start Cards (supervisor version): 1 copy per supervisor, double-sided A4, printed and in hand
* Troubleshooting Flowcharts: 1 copy per station, single page
* Assessment Checklists: 1 copy per participant
* User Manual (relevant sections): Parts A+B for operators, Parts A+C for supervisors

## **Room Comfort**

Before people arrive:

* Drinking water at each station
* Tissues available
* Restroom location pointed out to participants at the start

# **Session Script by Block**

The entire session follows this structure: 30% talking, 70% hands-on. Your role is to narrate, demonstrate, coach, and observe. Always walk the room actively. Normalize asking for help. Let people make mistakes in the practice blocks; that is the learning.

## **Block 1: Get Oriented (30 minutes, 0:00 to 0:30)**

|  |  |
| --- | --- |
| **Time** | **Activity** |
| 0:00 - 0:10 | Welcome and System Overview |
| 0:10 - 0:30 | Hardware Setup Practice |

### **Time 0:00 to 0:10: Welcome and System Overview**

Walk into the room. Address everyone calmly.

Good morning. Welcome to the MCC VR CCTV Training System. I am your instructor today. Over the next three and a half hours, you are going to learn how to use a system built specifically for you to practice observing high-risk environments. Some of you are operators, which means you will spend the session inside a VR headset watching camera feeds. Some of you are supervisors, which means you will be running the sessions and looking at the data that comes back.

Walk around the room slowly as you talk.

This workstation here [point] is where an operator sits. They will have on a VR headset and see multiple camera views. Their job during the scenarios is to watch for suspect behavior, mark what they see, and respond to alarms. Over here [point to supervisor station] is the supervisor workstation. The supervisor can see all the operators at once, control what happens in the scenario, and generate reports afterward.

I want to be upfront about something. During this session, your headset will measure your heart rate, skin conductance, and temperature. We also track where you are looking. All of this data is for training analysis only. It is not surveillance of you personally. It is used to help you see where you could improve.

Talking points to cover:

* What is the MCC VR Training System and why it was built
* Who built it and what problem it solves for you
* Quick walk-through of what an operator station looks like vs a supervisor station
* Hold up an EmotiBit sensor. Explain it measures biometrics. Assure everyone it is comfortable and the strap adjusts.
* Clarify that headsets stay on for the entire session after this block
* Answer any immediate questions about privacy or data.

Watch for: People look confused or uncomfortable. Address it directly. If someone is hesitant about the VR or the biometrics, listen and normalize. Nobody here wants to feel watched. The data helps you, not judges you.

### **Time 0:10 to 0:30: Hardware Setup Practice**

Tell everyone to move to a workstation. Assign them now if you did not already.

Okay, everyone find your workstation. There should be a name card if I have assigned you. Get comfortable in your chair. Supervisors, yours is up here. Operators, spread out so that each of you has a station.

Now we are going to power on the PCs. If your monitor is black, press the spacebar on the keyboard or click the mouse to wake it. You should see the Windows login screen.

Walk the room. Check each operator PC. Confirm logins work.

Once you are logged in, look for the MCC launcher icon on your desktop. Double-click it. The app should start in a few seconds.

Watch for: Slow boots, missing icons, launcher won't start. Troubleshoot quietly with that person. Do not wait for everyone. Move on and come back if needed.

Now I want you to put on your VR headset. It is in front of you or under your desk. Hold it so you can see the visor. The front of the headset faces away from you. Gently lower it over your head. You should feel light padding around your eyes. Adjust the top strap so it is snug but not tight. The dial on the right side adjusts focus. Turn it slightly if the view is blurry.

Walk the room. Adjust each headset. Check fit. Look for anyone who seems uncomfortable and help them. Normalize VR.

Now you should see inside VR. You are looking at the app launcher. Inside your VR, look around. You should see a Start button. In a moment, I will tell you when to press it. But first, put on your EmotiBit sensor. It is the small black strap with sensors on it.

Go around and help operators strap on their EmotiBit sensors. Show them how to adjust the wrist strap. Point out the LED on the sensor. Tell them to confirm the LED is green. If it is not, swap it for the backup unit.

Check the sensor ID on each strap against your participant roster. Mark them down so you know which data belongs to which person later.

Okay, now everyone in VR, press the Start button. If you are a supervisor, I will help you. Supervisors, I am going to configure your PC now.

Help the supervisor(s) launch their software and confirm they can see a blank session lobby on their screen.

Operators, if you see the app launcher, you are good. If you see an error, raise your hand and I will come help you. Everyone else, you should be seeing the app launcher or blank screens. That is correct.

Watch for: Operators who cannot find buttons, unclear instructions, headsets that are too loose or too tight, EmotiBit LEDs that are not green. Address these one at a time. Calm and quiet. Other participants should not feel held up.

Alright. Your headsets stay on from this point forward. You will take them off only once, during the break in about 45 minutes. Before we go live, we are going to run through the lobby together. Supervisor, confirm on your screen that you can see the session creation menu. Good.

Transition to Block 2.

## **Block 2: Operators Learn by Doing (75 minutes, 0:30 to 1:45)**

|  |  |  |
| --- | --- | --- |
| **Time** | **Activity** | **What to Watch For** |
| 0:30 - 0:45 | Join Session and Lobby | Operators cannot find buttons in VR, lobby connection fails |
| 0:45 - 1:15 | First Live Scenario (Airport) | Tunnel vision on one camera, slow alarm response, marking confusion |
| 1:15 - 1:30 | Debrief the Airport Run | Defensiveness about low scores, confusion about the 4 dimensions |
| 1:30 - 1:45 | Break | Headset comfort issues, face cushion swaps |

### **Time 0:30 to 0:45: Join Session and Lobby**

From inside VR, guide all operators to join the session. They are still in the launcher. Walk them through the next steps.

You are all now in the app. I want you to look for a text field that says Enter Your Name. You can use your real name or a code name, whatever you prefer.

Pause. Give them 30 seconds. Walk the room and confirm they are typing.

Good. Now look for a Join Session button. When you click it, you should see a lobby. In the lobby, you will see other operators and wait for the supervisor to start the scenario.

Meanwhile, supervisor, I want you to create a new session. On your screen, click Create Session. Then select the Airport scenario. Name it something clear, like Airport Round 1.

Wait. Check that all eight operators appear on the supervisor's lobby screen. If someone is missing, find them and troubleshoot quietly.

Supervisor, confirm that you see all eight operators in the lobby. Raise your hand when you are ready.

Good. Now operators, you should see the session starting in a few seconds. Watch for the loading screen. When the scenario begins, you will see four camera views appear around you. You are surrounded by cameras. Use your head movement to look at different monitors.

Watch for: Anyone unable to join, connection timeouts, headset tracking issues (someone saying the view is spinning). Restart that person's app if needed. Keep everyone else moving forward.

### **Time 0:45 to 1:15: First Live Scenario (Airport)**

The scenario is live. Operators are now watching four camera feeds in VR. Supervisors are watching the operator status on their dashboard. Your job is to narrate the scenario and teach observation patterns.

Alright, everyone, the scenario is live. Operators, you are looking at an airport concourse. You have four camera views. Look around. You will see people walking, waiting, checking bags. Your job is to watch for suspicious behavior.

Watch the supervisor screen. Time is running. Narrate a key moment to teach observation.

About 20 seconds in, you should see a male in a blue jacket entering from the right side of Camera 02. Watch what he does. He approaches a bench near Camera 01. He places a backpack under the bench and walks away without picking it up. This is the kind of thing you are looking for. Mark it. Do it now.

Pause and confirm operators have marked it. Look at the supervisor dashboard. You should see checkmarks appearing next to operator names under the Detection column.

Good, I see marks. Keep watching. There is a woman near Camera 03 filming on her phone. She is recording the bag placement from the angle of Camera 03. That is also suspicious. Mark her and her activity if you did not already.

About 8 minutes into the scenario, an alarm will sound. You will hear it even in VR. Immediately look at the camera where the alarm is coming from. The airport police have found the bag. Your job is to confirm the mark you made and acknowledge the alarm.

Narrate this as it happens. Stay calm and encouraging.

Good. The alarm has been triggered. Operators, all eyes to Camera 01. Confirm the bag is there. You marked it earlier, so you are ahead of the game. The alarm shows up on your screen. Click Acknowledge so the supervisor knows you see it.

Watch for: Operators staring at one camera and missing activity on others (tunnel vision), slow alarm response, confusion about where to mark or how to acknowledge. Note these. Do not help in real time. Let them struggle a bit. That is learning.

Continue narrating key moments and suspect behavior throughout the 30-minute scenario. Keep the pace steady. Do not over-talk. Let operators focus.

Scenario ends. Confirm everyone has removed their headsets for the debrief.

### **Time 1:15 to 1:30: Debrief the Airport Run**

This is the teaching moment. Pull up the auto-generated report on the supervisor screen where everyone can see it.

Alright, everyone take a breath. Headsets off for a few minutes. Look at the supervisor screen. I am going to show you a real report from the system.

Navigate to an operator's report. Walk through these sections:

* Composite Score (top center): This operator scored 68 out of 100. That is not bad for a first run. Every scenario will improve your score.
* 4 Dimensions (radar chart below): Detection Accuracy 40% means you caught 4 out of 10 suspects. False Positives 20% means 2 of your marks were incorrect. Timeliness 20% means you caught suspects about 6 seconds after they appeared. Attention and Gaze 20% means your eye tracking shows you were distributed fairly well across the four cameras.
* AI Recommendations (text below): The system suggests you focus on Camera 03 because you looked at it less than the others. That is good feedback. Next time, balance your attention.
* Heatmap (eye tracking overlay): This colorful map shows where you looked the most. Red is most attention, blue is least. You can see you were focused on Camera 01 and Camera 02 and barely looked at Camera 03. That is tunnel vision. It is fixable.

Now I want to highlight what you did well. Everyone marked the bag placement at Camera 01. That was the key suspect act. You caught it. On the second run, you will catch more.

Is there anything confusing about this report? Ask now.

Watch for: Someone looking defeated because their score is low. Address it head-on. First runs are always low. The system tracks your improvement over time. This is a baseline. You are learning. Everyone in this room will improve dramatically after one more scenario.

Show one more operator's report if time allows. Keep the discussion brief. Move to the break.

### **Time 1:30 to 1:45: Break**

Operators can remove their headsets and step outside or move around. Provide water.

Take 15 minutes. Headsets come off. You can step outside, get water, use the restroom. When we come back, I will check headsets and you put them back on for the second scenario. We are making good progress.

Use this time to check headsets for damage or comfort issues. Swap face cushions if anyone requests it. Charge EmotiBit sensors if needed. Verify software is ready to go for Block 3.

Gather everyone 5 minutes before 1:45 to begin remounting headsets.

## **Block 3: Deeper Practice (60 minutes, 1:45 to 2:45)**

|  |  |  |
| --- | --- | --- |
| **Time** | **Activity** | **Instructor Role** |
| 1:45 - 2:15 | Second Scenario (Embassy or Mall) | Observe independently; less narration; let them struggle |
| 2:15 - 2:30 | Supervisor Focus: Replay and Reporting | Walk supervisor through dashboard; operators observe (headsets off) |
| 2:30 - 2:45 | Operators Self-Review | Hand out printed reports; let operators read and reflect |

### **Time 1:45 to 2:15: Second Scenario (Embassy or Mall)**

Headsets back on. Supervisor creates a new session with Embassy or Mall scenario (you choose based on difficulty level and pacing).

Okay, headsets back on. Supervisor, create a new session. Select the Embassy scenario this time. Name it Embassy Round 1. Operators, same as before. You will enter your name and join the lobby. I am going to step back and let you run this one more independently. I will narrate less. You are learning.

Wait for the scenario to start. This is your time to observe. Do not narrate key moments. Let operators make decisions. If someone marks something wrong or misses a key suspect, that is data. Note it.

Walk behind each operator and silently observe. Watch the eye tracking on their HUD (heads-up display in VR). Look for improvement from the first scenario. Are they balancing their gaze across cameras? Are they marking faster?

Supervisor, while this plays, practice reading the live data. Look at the biometrics panel. Watch heart rate and skin conductance. See if operators' stress levels spike when alarms go off. This is the real-time feedback you will use in your job.

About halfway through, supervisor, I want you to trigger a distraction. On the dashboard, you should see a Trigger Distraction button. Use it. Operators, you will suddenly see one of the camera feeds freeze for about 5 seconds. Keep your composure. Keep watching the other three cameras. When the frozen camera comes back, resume your normal watch.

Watch for: Operators who handle the distraction well vs. those who get confused. This is normal. People learn. Note it for debrief.

Let the scenario run to completion. When finished, confirm the supervisor has the report ready to show.

### **Time 2:15 to 2:30: Supervisor Focus: Replay and Reporting**

Headsets off for operators. They will observe as supervisors walk through the dashboard and reporting features.

Operators, take off your headsets and gather around the supervisor screen. For the next 15 minutes, you are going to watch the supervisor use the replay system. This is how supervisors review your performance and generate your training reports.

Supervisor, on your screen, open the post-session dashboard. Show everyone what you see. Point to the tabs at the top: Eye Data, Biometrics, Marking, Activity Logs, Alarms.

Now, click on Eye Data. This shows a heat map of where each operator was looking during the scenario. Red is heavy fixation, blue is light attention. Select one operator and show their heatmap. Explain that we use this to find patterns: tunnel vision, blind spots, etc.

Click on Biometrics. This shows heart rate, skin conductance, and skin temperature for each operator throughout the session. Show how heart rate spiked when the alarm went off. Explain that high arousal during correct detections is good, but sustained high arousal might indicate stress.

Click on Marking. This shows every mark that each operator made and when. Select one operator. Walk through their marks: which were correct, which were false positives, the timing. This is the record of their decisions.

Now click the Replay button. This is the most powerful feature. You can scrub through the scenario timeline, speed it up, slow it down, and overlay the eye tracking and biometrics on top. Show them: scrub to the moment of the key suspect behavior. Play it at 2x speed. Then overlay the eye tracking so everyone can see which cameras were being watched.

Now generate a PDF report. Click Generate Report. The system will compile the data, add commentary, and output a PDF. Show them the PDF opens with a cover page, summary, detailed analysis, and recommendations.

Any questions?

Watch for: Supervisors confused about tabs or replay controls. Walk them through. Make sure they understand that the replay system lets them review any moment from any angle.

### **Time 2:30 to 2:45: Operators Self-Review**

Hand out printed reports to each operator. Give them 10 minutes to read and reflect.

Operators, I am going to print out your reports from that second scenario. Here is yours [hand out]. Spend the next 10 minutes reading it. Look at your score. Look at the 4 dimensions. Read the AI recommendations. Identify one thing you did well and one thing you want to improve next.

Sit quietly. Let operators read. Do not interrupt. This is their moment to process.

After 10 minutes, ask if anyone has questions or wants to discuss their report. Keep it brief. You will have more time later if anyone needs it.

Transition to Block 4.

## **Block 4: Prove It and Wrap Up (45 minutes, 2:45 to 3:30)**

|  |  |  |
| --- | --- | --- |
| **Time** | **Activity** | **Scoring** |
| 2:45 - 3:15 | Practical Assessment | Use Assessment Checklist; 70% pass mark |
| 3:15 - 3:30 | Review and Handover | Distribute printed materials; brief feedback |

### **Time 2:45 to 3:15: Practical Assessment**

Headsets back on. Each operator and supervisor runs a short scenario segment. You observe and score using the Assessment Checklist. Do NOT help unless someone is completely stuck.

Alright, we are now at the final challenge. Each of you is going to run a short 10-minute scenario. I am not going to help you unless you are completely stuck. My job is to watch and score how well you can do this independently.

Operators, your assessment is simple. You will set up your station, join a session, monitor the cameras, mark what you see, and respond to an alarm. I am scoring you on three things: setup quality, detection accuracy, and alarm response time.

Supervisors, your assessment is to host the session independently, monitor operator performance, and generate a report. I am scoring you on session setup, live monitoring accuracy, and report quality.

Let me hand out the Assessment Checklists so you know what I am looking for.

Hand out the checklist to each participant. Give them 2 minutes to read it.

Any questions about what you are being scored on? Ask now before we start.

Supervisor, create a new session. Choose either Airport or Embassy. Name it Assessment Round.

Operators, headsets on. Put on your EmotiBit. When the supervisor is ready, they will signal me. Then you join the session.

Watch the room. Observe each operator and supervisor. Use the Assessment Checklist. Mark scores for setup, scenario performance, and alarm handling. Take notes on what you see. You are not helping. You are observing.

Scenario runs for 10 minutes. At the end, all operators remove headsets. Supervisor generates a report.

Watch for: Anyone who gets stuck. If someone cannot find the Start button after 30 seconds, quietly help them and move on. If someone's headset is not working, swap it for the backup. Everyone should complete the scenario.

When all operators have finished and the supervisor has generated a report, collect the Assessment Checklists. You now have scored data on who is ready and who might need follow-up.

### **Time 3:15 to 3:30: Review and Handover**

Gather everyone. Briefly review assessment results. Distribute printed materials. End on a positive note.

Thank you all. That was an excellent session. You showed up, you put on the headsets, you learned by doing, and you all completed the assessment. That is exactly what this training is about.

I reviewed your assessment scores. Most of you are ready to start using this system independently. I want to flag [Name] and [Name] for a quick follow-up before you start your first operational scenario. That is normal. It just means we do a short one-on-one session next week to cover one or two things. It does not mean you failed. It means we are being thorough.

Before you go, I have a folder of printed materials for each of you. You are getting your User Manual sections specific to your role. You are also getting a Quick Reference Card that has setup and workflow on one page. And a Troubleshooting Flowchart in case you run into an issue when you are using the system on your own.

Hand out: User Manual (relevant sections), Quick Start Card, Troubleshooting Flowchart, Assessment results to each participant.

Next steps. You will begin your first live training session on [date]. You will be working with your supervisor and other operators. At that point, you will start building your performance baseline and working toward improvement targets. The onboarding SOP will guide you through those sessions.

One more thing. In 30 days, supervisors, I am going to send you a brief survey. I want to know how this first month has gone. Are the operators using the system independently? Have there been technical issues? This feedback helps us improve.

Thank you for your time, your focus, and your willingness to try something new. Dismissed.

# **Handling Common Questions**

## **Why is my score low?**

Everyone's first score is low. The system is calibrated against operators with hundreds of hours of experience. You have zero hours right now. The score is a baseline. What matters is that you are improving. Each scenario, you will see the score increase as you learn the patterns and get faster. This is completely normal.

## **Can we change the scenarios?**

The five scenarios we have are Airport, Embassy, Mall, Concert, and Protest. During this training, I am running Airport and Embassy. These are standard. In future phases, new scenarios can be added, but that requires development work from the vendor. For now, these five are what we are working with. They cover the main threat patterns you are likely to see.

## **What if the headset is uncomfortable?**

Tell me immediately. The strap can be loosened. The focus dial on the right can be adjusted if things are blurry. And we have spare face cushions if you want to swap for comfort or hygiene. Do not suffer through it. We want you focused on learning, not on discomfort.

## **Who sees my biometric data?**

During the session, the supervisor sees it on the dashboard in real time. After the session, your biometrics are in your report, which only you and your supervisor can access. It is used for training analysis to help us see if you are stressed or calm during different parts of the scenario. It is not surveillance. It is coaching data.

## **What if I have a technical issue during a scenario?**

If something goes wrong, raise your hand. I will troubleshoot quietly. If it is a quick fix, we carry on. If it takes more than a minute, we pause and restart that operator. If the issue is with the supervisor's screen, we pause the entire session. Technology sometimes glitches. We have contingencies.

## **How long do I have to wear the VR headset?**

About two hours total across the whole session, in blocks. You get a 15-minute break in the middle where you take it off. For most people, that is very doable. If you start to feel headache or nausea, let me know. We can take an extra break.

# **Post-Session Actions**

## **Collect Materials**

Before people leave:

* Collect all Assessment Checklists and file them for the project record
* Note any assessment scores that fell below 70%. Flag for follow-up.
* Confirm all printed materials have been handed out

## **Technical Debrief**

Within one hour of session end:

* Document any hardware failures or issues encountered during the session
* Check all headsets and link cables for damage
* Confirm all EmotiBit sensors were properly synced and charged
* Brief IT on any network connectivity issues or software errors

## **Report to Client**

Send a brief summary to MCC within 24 hours:

* Number of participants trained and their roles
* Overall session quality and any incidents
* Assessment results summary (number passed, flagged for follow-up)
* Any equipment issues and whether they have been resolved

## **Next Steps**

Confirm with MCC:

* When the first operational training session will begin
* Who will administer those sessions (will it be the vendor or MCC internal staff)
* The timeline for any operator flagged for follow-up one-on-one training
* Plan for the 30-day feedback survey from supervisors