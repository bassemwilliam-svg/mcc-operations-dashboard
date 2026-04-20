**MCC VR CCTV Training System**

Training, Knowledge Transfer &

Operational Documentation Plan

Operators & Supervisors

Tasks 49, 50 & 51

| Client | MCC / UAE Supreme Council for National Security |
| --- | --- |
| Version | 2.0 |
| Classification | Confidential |

*Confidential. For internal planning only.*

# Table of Contents

# 1. What This Document Covers

This plan lays out how we'll handle the last three tasks on the MCC project plan: the User Manual, the Training Sessions, and the Onboarding Process. All three focus on operators and supervisors only. IT/admin documentation is out of scope for now.

The training session is designed to run in 3 to 4 hours, on-site at MCC Abu Dhabi. It's not a multi-day intensive program. It's a focused, hands-on session that gets people comfortable with the system and confident enough to run it on their own.

| **Task** | **What It Is** | **Who It's For** |
| --- | --- | --- |
| 49: User Manual | A single reference document covering everything operators and supervisors need to know | Operators, Supervisors |
| 50: Training Sessions | A 3-4 hour on-site instructor-led training session | Operators, Supervisors |
| 51: Onboarding Process | A repeatable procedure MCC can use whenever new staff join | New Operators, New Supervisors |

All three tasks are ready to start with no blockers. All documentation and training materials must be produced today (April 6). The training session is expected to take place on April 9 or 10. Materials should be printable wherever possible, so operators and supervisors have something physical to reference during and after training.

# 2. Task 49: User Manual

One document that replaces the separate Operator Setup Guide V1.2 and Supervisor Setup Guide V1.2. It's split into three parts: a general reference section that both roles share, an operator-specific section, and a supervisor-specific section.

The manual is built from the actual system workflow as it exists in the codebase, not just the earlier setup guides. Every step described below matches what the software actually does.

## 2.1 Part A: General Reference

This section covers the shared knowledge both operators and supervisors need before they touch the system.

1. **System Overview.** What the MCC VR Training System is and why it exists. A plain-language description of how operators, the supervisor, the VR headsets, biometric sensors, and the software all fit together. Includes a simple architecture diagram showing the operator stations, the supervisor station, and how they connect.
2. **Safety and Handling.** How to handle the VR headsets safely (cleaning between users, lens care, cable management). EmotiBit sensor handling (wrist mounting, charging, swapping). Basic electrical safety. Emergency shutdown: how to stop a session immediately if something goes wrong.
3. **Glossary.** Every term spelled out: MCC, EmotiBit, EDA, SCR, saccade, fixation, PTZ, LMS, NPC. Written so someone who's never touched VR before can follow along.

## 2.2 Part B: Operator Manual

Step-by-step instructions for everything an operator does, from powering on to finishing a session. These steps are based on the actual system code and match the real software flow.

### Before the Session

1. **Power on the PC** and confirm Windows is at the desktop. Make sure SteamVR and VIVE Hub are installed and showing green status.
2. **Prepare and put on the VR headset.** Plug in the HTC Vive Focus Vision via the link cable. Confirm it's charged. Put the headset on now and keep it on for the entire session, including application launch, lobby, and scenario. The operator works inside VR from this point forward.
3. **Put on the EmotiBit sensor.** Pick up the pre-configured EmotiBit from your station. Strap it onto your wrist (like a watch). Confirm the LED is solid, which means it's connected and ready. If the LED is blinking or off, let the instructor or IT staff know.
4. **Confirm the application is configured.** The server configuration file (server.json) should already be set up by IT staff to point to the supervisor station. If this is a first-time setup, ask IT to verify it before proceeding.

### Joining a Session

**Important:** The headset is already on from the previous step. The operator does everything below from inside VR.

1. **Launch the MCC application.** The system automatically connects to the supervisor's session on the local network. The operator sees the application interface inside the headset.
2. **Enter your name** in the lobby screen (visible inside VR). This is how you'll be identified in reports and on the supervisor's dashboard.
3. **Wait in the lobby.** You'll see an operator count (e.g. "3/9 Connected") and the names of other operators already connected. The Start button is controlled by the supervisor. Stay in the headset.
4. **Eye tracking calibration** runs once the supervisor starts the scenario and the system travels to the training map. Follow the on-screen prompts to look at calibration points. The system uses this to track where you're looking throughout the session.

### During the Session

Once the scenario begins, the operator is sitting at a virtual CCTV monitoring desk. Here's what's on screen and how to interact with it:

1. **CCTV Monitor.** A 4-slot grid showing camera feeds (e.g. Camera\_01: Main entrance, Camera\_02: Coffee shop, Camera\_03: Restricted door, Camera\_04: Wide-angle overview). Click any slot to go fullscreen on that camera. Double-click to return to grid view.
2. **PTZ Controls.** Use the joystick area on the monitor to pan (drag left/right) and tilt (drag up/down). Use the Zoom In and Zoom Out buttons to adjust the field of view. The system logs your camera state every 30 seconds.
3. **Marking.** When you spot suspicious behavior, use the marking system to tag individuals or objects. Your marks are timestamped and logged for the post-session report.
4. **Alarms.** The supervisor can trigger alarms at any point. When an alarm fires, respond as quickly as possible. Your response time is measured and scored.
5. **Biometrics (passive).** Your heart rate, skin conductance (EDA), and skin temperature are being recorded continuously via the EmotiBit sensor. You don't need to do anything. The supervisor sees this data live.
6. **Eye tracking (passive).** The system records where you're looking (fixations), how long you look (duration), and how your gaze moves between cameras (saccades). This feeds into the attention analysis in your report.

### After the Session

1. **Remove the headset** and place it back on the stand. Remove the EmotiBit sensor.
2. **Session data saves automatically.** All your action logs, fixation data, biometric recordings, and CCTV captures are written to the Data folder on the supervisor's machine, organized by session timestamp and your operator name.
3. **Review your report** with the supervisor. The auto-generated report includes your composite score (0-100), broken down across four dimensions: Detection Accuracy (40%), False Positives (20%), Timeliness (20%), and Attention & Gaze (20%). It also includes AI-generated feedback and up to 5 recommendations ranked by priority.

### Troubleshooting (Operator)

Decision-tree format, printed as a one-page quick reference card:

* **VR headset won't connect:** Check the link cable connection. Restart SteamVR. Confirm VIVE Hub shows the headset as detected.
* **EmotiBit not detected:** Confirm the sensor LED is solid (not blinking). Try removing and re-strapping it. If the LED stays off or keeps blinking, swap it for the spare sensor and notify IT staff.
* **Can't join the session:** Close and relaunch the application. If it still can't find the session, notify the instructor or IT staff to check the configuration.
* **No camera feeds in VR:** The scenario may not have started yet. Wait for the supervisor to confirm. If the scenario is running, exit and rejoin.

## 2.3 Part C: Supervisor Manual

Everything the supervisor needs to host a training session, monitor operators in real time, and generate performance reports. Again, these steps follow the actual software flow.

### Setting Up

1. **Power on the supervisor PC.** No VR headset is needed for this station. You just need a monitor, keyboard, and mouse.
2. **Check server.json.** Open Content/Configs/Server.json. The "IP" field should be empty (which tells the system to bind to all network interfaces and act as the host). "PORT" stays at 7777.
3. **Launch the MCC application.** You'll see the Pre-Session Start screen.

### Starting a Session

1. **Select the scenario.** Use the dropdown to pick from the available scenarios (Airport, Embassy, Shopping Mall, Concert, Protest). Each scenario is defined in a JSON file under Content/ScenarioDefinitions/ and includes all suspect behaviors, camera assignments, event timings, and severity levels.
2. **Click "Create Scenario".** This creates a listen-server session on your machine and generates a unique session timestamp. The system broadcasts the session on the local network so operators can find it.
3. **Wait for operators.** The lobby screen shows connected operators by name and a live connection count. You can see who's joined and who's still missing.
4. **Click "Start Scenario".** This triggers a server travel to the training map. All connected operators are pulled into the scenario automatically. The system records the expected operator count for sync tracking.

### During the Session (Live Monitoring)

The supervisor dashboard gives you a live view of every operator's activity. Here's what each panel shows:

* **Operator Feed:** See exactly what any operator is seeing on their CCTV monitor. Switch between operators by clicking their name in the operator selector. The live wall shows a grid of all operators at once.
* **Biometric Panel:** Heart rate (bpm), EDA (skin conductance in microsiemens), skin temperature, and a stress indicator derived from SCR (skin conductance response) spikes. If an operator's stress is climbing, you'll see it here before they say anything.
* **Eye Tracking / Fixation:** Shows where the operator is looking right now, overlaid on their camera view. The heatmap builds up over time, showing which cameras and areas got the most attention.
* **Distractions and Alarms:** You can trigger distractions (e.g. a staff member walking up and talking) and emergency alarms at any point. These test the operator's focus and response time. The timing of your triggers and the operator's reactions are both logged.
* **Action Log:** Every operator action is recorded live: camera selections, PTZ commands, marks, alarm responses. This log feeds directly into the post-session report.

### After the Session

1. **Open the Dashboard.** Click through to the post-session dashboard. Select an operator to review their data.
2. **Review tabs.** The dashboard organizes data into tabs: Eye Data (fixation heatmaps, timelines, most-fixated targets), Biometrics (heart rate, EDA, temperature graphs with min/max/avg), Marking Data (timeline of marked events), Activity Logs (all actions timestamped), and Alarms (response times and outcomes).
3. **Use the Replay System.** Scrub through the session timeline, play/pause, change speed (0.5x, 1x, 2x), step frame by frame. Toggle overlays for heatmap, fixation points, biometric graphs, and action log. This is how you build your debrief.
4. **Generate the Report.** Click "Generate Report" in the dashboard. The system creates a PDF with the composite score, the 4-dimension breakdown, detection metrics, timeliness details, gaze-scenario correlation, attention analysis, saccade analysis, alarm response scoring, biometric data, AI-generated feedback, and up to 5 prioritized recommendations. The PDF saves to Data/<SessionTimestamp>/Supervisor/<OperatorName>/Reports/.

### Troubleshooting (Supervisor)

* **Operators can't find the session:** Confirm the supervisor application is running and shows the lobby. If operators still can't connect, contact IT staff to verify the network setup.
* **Biometric data not showing:** Check the EmotiBit sensor LED on the operator's wrist is solid. If it is, have the operator remove and re-strap the sensor. If the issue persists, swap for a spare sensor and notify IT staff.
* **Camera feeds blank:** Make sure the scenario has started (not still in lobby). If it has, have the operator exit and rejoin.
* **Application crashes:** Check the Saved/Logs folder for crash logs. Most common cause is GPU driver issues. Update drivers and restart.

## 2.4 Production Plan

All documentation must be produced today (April 6, 2026). Training delivery is expected on April 9-10.

| **Step** | **Activity** | **When** |
| --- | --- | --- |
| 1 | Content audit: cross-reference existing setup guides V1.2, maintenance doc V2.1, report guide, and the live codebase | Today (morning) |
| 2 | Draft Part A (General Reference) and Part B (Operator Manual) | Today (morning/afternoon) |
| 3 | Draft Part C (Supervisor Manual) | Today (afternoon) |
| 4 | Quick internal review by the project team engineering (flag critical errors only) | Today (end of day) |
| 5 | Final revisions and print-ready formatting | Today (evening) |

**Print format:** The final manual should be print-ready. Operators and supervisors each get a printed copy of their relevant sections (Parts A+B for operators, Parts A+C for supervisors). Spiral binding or saddle-stitch recommended so it can lie flat on a desk.

# 3. Task 50: Training Session

A single on-site session at MCC Abu Dhabi. Three to four hours, no more. The goal is simple: by the time people leave the room, operators can run a scenario independently and supervisors can host, monitor, and generate reports without help.

The session follows a hands-on-first approach. We don't front-load theory. People learn this system by using it, not by watching slides. The instructor talks for about 30% of the time; the other 70% is people actually doing things.

## 3.1 Who's in the Room

| **Role** | **What They Need to Walk Away With** |
| --- | --- |
| Operators | Able to set up their VR station, join a session, monitor CCTV feeds, mark suspects, respond to alarms, and read their performance report |
| Supervisors | Able to configure and host a session, monitor all operators live, trigger distractions/alarms, use the replay system, and generate performance reports |

## 3.2 Session Schedule (3.5 Hours)

### Block 1: Get Oriented (30 minutes)

| **Time** | **Activity** | **Format** | **Who** |
| --- | --- | --- | --- |
| 0:00 - 0:10 | Welcome and system overview. Walk the room: point to each station, explain what it does. Demonstrate the EmotiBit sensor. Explain that operators will put on the VR headset during setup and keep it on for the full session. | Walk-around, show and tell | All |
| 0:10 - 0:30 | Hardware setup practice. Operators set up their stations, mount the EmotiBit, and put on their VR headsets (headset stays on from this point). Supervisor PC gets configured. Instructor walks the room helping. | Hands-on with coaching | All |

### Block 2: Operators Learn by Doing (75 minutes)

| **Time** | **Activity** | **Format** | **Who** |
| --- | --- | --- | --- |
| 0:30 - 0:45 | Operators are already in their headsets. Instructor walks them through launching the app and joining the lobby (all done inside VR). Supervisor simultaneously creates a session and selects the Airport scenario. | Guided walkthrough, step by step | All |
| 0:45 - 1:15 | First live scenario (Airport). Operators go through the full scenario in VR (headsets already on from setup). Supervisor hosts and monitors. Instructor narrates key moments ("watch for the bag placement at Camera 01") to teach observation patterns. | Live VR scenario with instructor narration | All |
| 1:15 - 1:30 | Debrief the Airport run. Pull up one operator's auto-generated report on the supervisor screen. Walk through the composite score, the 4 dimensions, the AI recommendations. Show the heatmap and fixation data. | Group discussion around real data | All |
| 1:30 - 1:45 | Break. Operators remove headsets briefly. Swap face cushions for hygiene if needed. Headsets go back on before Block 3. |  | All |

### Block 3: Deeper Practice (60 minutes)

| **Time** | **Activity** | **Format** | **Who** |
| --- | --- | --- | --- |
| 1:45 - 2:15 | Second scenario (Embassy or Mall). Operators run independently with less hand-holding. Supervisor practices live monitoring: reading biometrics, watching eye tracking, triggering a distraction mid-scenario. | Independent VR practice + supervised monitoring | All |
| 2:15 - 2:30 | Supervisor focus: replay and reporting. Supervisor opens the dashboard, reviews the session data, uses the replay system (scrub, overlay toggles, speed control), generates a full PDF report. | Hands-on supervisor practice | Supervisors (operators observe) |
| 2:30 - 2:45 | Operators read their own reports. Each operator gets their printed report and spends 10 minutes identifying their top strengths and the areas flagged for improvement. | Self-review with printed reports | Operators |

### Block 4: Prove It and Wrap Up (45 minutes)

| **Time** | **Activity** | **Format** | **Who** |
| --- | --- | --- | --- |
| 2:45 - 3:15 | Quick assessment. Each operator runs a short scenario segment. Supervisor hosts independently. Instructor observes but does not help unless someone is completely stuck. | Practical assessment | All |
| 3:15 - 3:30 | Review assessment results. Flag anyone who needs follow-up. Hand out printed materials: User Manual (relevant sections), Quick Reference Cards, Troubleshooting flowcharts. | Handover + feedback | All |

## 3.3 Training Materials (All Printable)

Everything we produce for the training session should be ready to print and hand to participants. These are the materials:

| **Material** | **Description** | **Format** | **Printed?** |
| --- | --- | --- | --- |
| Facilitator Guide | Session-by-session script for the instructor: timing, talking points, what to demo, what to watch for, how to handle common questions | DOCX | Yes, 1 copy |
| Operator Quick Start Card | One double-sided A4 page: hardware setup checklist on front, session workflow (join, monitor, mark, respond) on back | PDF | Yes, 1 per operator |
| Supervisor Quick Start Card | One double-sided A4 page: session hosting checklist on front, dashboard guide (panels, replay, report generation) on back | PDF | Yes, 1 per supervisor |
| Troubleshooting Flowchart | One-page decision tree covering the 8 most common issues and their fixes | PDF | Yes, 1 per station |
| Assessment Checklist | Scored observation form: operator version (setup, scenario performance, alarm handling) and supervisor version (session hosting, monitoring, report generation) | DOCX/PDF | Yes, 1 per participant |
| User Manual (relevant sections) | Printed copy of Parts A+B for operators, Parts A+C for supervisors | DOCX | Yes, 1 per participant |

## 3.4 How We Know It Worked

Two checks:

* **During the session (Block 4):** Each participant completes a practical assessment. Operators run a scenario and are scored on setup, detection accuracy, alarm response, and ability to read their report. Supervisors are scored on session hosting, live monitoring, and report generation. Pass mark is 70%.
* **30 days later:** A short follow-up survey sent to supervisors. Are operators using the system independently? Have there been issues that required vendor support? This tells us whether the training actually stuck.

# 4. Task 51: Onboarding Process

The training session covers the people who are here now. But what about the next operator or supervisor who joins the team six months from now? That's what the onboarding process is for. It's a standard procedure that MCC owns and runs themselves, without needing to call us.

## 4.1 How It Works

The onboarding follows four phases over roughly 8 working days. It's mentor-led: an experienced operator or supervisor is assigned to guide the new person through.

### Phase 1: Orientation (Day 1)

* Welcome briefing: what the MCC VR Training System is, why it exists, and what the new hire's role will be.
* Facility tour: training room layout, workstation assignment, where supplies are kept.
* Mentor assigned: an experienced person in the same role who'll guide them through the process.
* Printed materials handed over: User Manual (their role's sections), Quick Reference Card, Troubleshooting Flowchart.
* System access: confirm their workstation is set up, they can log in, the software launches.

### Phase 2: Guided Practice (Days 2-4)

| **Day** | **Operator Track** | **Supervisor Track** |
| --- | --- | --- |
| Day 2 | Hardware setup with mentor watching. First VR session (Airport scenario). Mentor talks them through what to look for. | Dashboard walkthrough with mentor. Sit in while an experienced supervisor hosts a live session. |
| Day 3 | Run Embassy and Mall scenarios. Practice marking entities and responding to alarms. Mentor gives feedback after each run. | Host a session with 1-2 operators under mentor guidance. Practice reading biometrics and triggering distractions. |
| Day 4 | Run Concert and Protest scenarios. Self-review performance reports. Sit down with mentor to discuss improvement areas. | Generate and interpret reports. Practice the replay system. Run a mock debrief with the mentor acting as an operator. |

### Phase 3: Solo Practice (Days 5-7)

The new hire does everything on their own. The mentor watches but doesn't step in unless they're truly stuck. After each session, the mentor fills out the Competency Observation Checklist, noting what went well and what still needs work.

### Phase 4: Sign-Off (Day 8)

* **Operators:** Run a full scenario independently. Must score 70% or above on the auto-generated performance report and pass the mentor's competency checklist.
* **Supervisors:** Host a full multi-operator session, generate reports, and deliver a debrief. Assessed by mentor and an existing supervisor using the competency checklist.
* **If they don't pass:** The mentor flags specific gaps, runs targeted practice on those areas, and reassesses within 5 working days. No one gets certified until they can actually do the job.

## 4.2 Onboarding Documents (All Printable)

| **Document** | **What It Is** | **Format** |
| --- | --- | --- |
| Onboarding SOP | The formal procedure document. Version-controlled, with roles, responsibilities, prerequisites, and the full 4-phase process | DOCX (printed) |
| Competency Checklist (Operator) | Scored observation form: hardware setup, scenario execution, alarm handling, report reading. Mentor fills this out during Phase 3. | PDF (printed) |
| Competency Checklist (Supervisor) | Scored observation form: session hosting, live monitoring, distraction/alarm management, report generation, debrief delivery | PDF (printed) |
| Mentor Assignment Form | Who's mentoring whom, expected time commitment, sign-off lines for both parties | PDF (printed) |
| Progress Tracker | Day-by-day log for the mentor to record what was covered, what went well, what needs more work | XLSX (printed) |

# 5. Full Deliverables List

Everything we need to produce across all three tasks. Items marked "Print" should be delivered as print-ready files and physically printed for the training session.

| **#** | **Deliverable** | **Task** | **Format** | **Print?** |
| --- | --- | --- | --- | --- |
| 1 | User Manual v1.0 (Parts A, B, C) | 49 | DOCX | Yes |
| 2 | Facilitator Guide | 50 | DOCX | Yes |
| 3 | Operator Quick Start Card | 50 | PDF (double-sided A4) | Yes |
| 4 | Supervisor Quick Start Card | 50 | PDF (double-sided A4) | Yes |
| 5 | Troubleshooting Flowchart | 50 | PDF (one page) | Yes |
| 6 | Assessment Checklist (Operator) | 50 | PDF | Yes |
| 7 | Assessment Checklist (Supervisor) | 50 | PDF | Yes |
| 8 | Onboarding SOP | 51 | DOCX | Yes |
| 9 | Competency Checklist (Operator) | 51 | PDF | Yes |
| 10 | Competency Checklist (Supervisor) | 51 | PDF | Yes |
| 11 | Mentor Assignment Form | 51 | PDF | Yes |
| 12 | Progress Tracker | 51 | XLSX | Yes |

# 6. What Could Go Wrong

| **Risk** | **Impact** | **What We Do About It** |
| --- | --- | --- |
| Scenarios 4 or 5 not finished in time for training | High | Train on Scenarios 1-3 (all done). Schedule a follow-up session for the remaining scenarios once they're ready. |
| MCC sign-offs on earlier deliverables delayed | Medium | Documentation is being produced today using existing approved materials. Sign-offs can follow after training if needed. |
| Participants can't all attend at the same time | Medium | The session is modular by design. If someone misses Block 2, they can do a catch-up run with the instructor in 30 minutes using the same scenario. |
| Hardware or software issues during the training session itself | Medium | Bring the Emergency Kit (spare cables, troubleshooting cheat sheet). Have a second backup VR headset. The troubleshooting flowchart we create for the manual will be printed and available. |

# 7. Next Steps

All production happens today. Training delivery is April 9-10.

1. **Confirm this plan now.** Quick review between MCC and the project team to agree on scope so production can begin immediately.
2. **Produce all documentation and training materials today.** User Manual, Facilitator Guide, Quick Start Cards, Troubleshooting Flowchart, Assessment Checklists, Onboarding SOP, and all supporting forms.
3. **Print everything that needs printing.** Operator and supervisor manuals, quick start cards, troubleshooting flowcharts, assessment checklists, and onboarding materials.
4. **Confirm training date (April 9 or 10) and participant list.** MCC to confirm which day works and who will attend.

*End of Document*