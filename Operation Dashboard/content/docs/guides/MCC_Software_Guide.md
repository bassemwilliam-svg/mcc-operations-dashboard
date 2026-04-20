**MCC VR CCTV Training System**

**Software Guide**

For Operators and Supervisors

Client: MCC / UAE Supreme Council for National Security

Version: 1.0 | April 2026

Classification: Confidential

# Table of Contents

1. 1. About This Guide
2. 2. System Overview
3. 3. Glossary
4. Part A: Operator Software Guide
5. Part B: Supervisor Software Guide
6. Appendix: Quick Troubleshooting for Software Issues

# 1. About This Guide

This guide covers how to use the MCC VR CCTV Training System software. It's written for operators and supervisors. All hardware setup and station configuration is handled by the Training Administrator before your session begins. When you sit down, everything is ready to go.

# 2. System Overview

The MCC VR Training System puts you inside a simulated CCTV monitoring environment. You watch camera feeds, spot suspicious behavior, and respond to events, just like a real control room, but in a safe training setting.

Operators wear a VR headset and work inside a virtual CCTV monitoring desk. A biometric sensor on your wrist tracks physiological responses during the session (heart rate, stress indicators). You don't need to do anything with it; it works passively.

The Supervisor works from a desktop PC (no VR headset) and controls the training session: selecting scenarios, monitoring all operators in real time, triggering events, and generating performance reports after the session.

The system supports 5 training scenarios set in different Abu Dhabi locations: Airport, Embassy, Shopping Mall, Concert, and Protest. Each scenario involves different threat types and suspect behaviors.

# 3. Glossary

**Composite Score:** Your overall performance rating (0-100) generated after each session.

**Detection Accuracy:** How correctly you identified suspicious individuals (40% of score).

**False Positives:** Penalty for marking innocent people (20% of score).

**Timeliness:** How quickly you responded to events and alarms (20% of score).

**Attention and Gaze:** How well you distributed your attention across cameras (20% of score).

**PTZ:** Pan, Tilt, Zoom. The camera controls you use during monitoring.

**Marking:** Tagging a person or object as suspicious during a scenario.

**Heatmap:** Visual overlay showing where you looked most during a session.

**Fixation:** A point where your gaze rested for a measurable amount of time.

**Saccade:** Rapid eye movement between fixation points.

# Part A: Operator Software Guide

## Starting a Session

Your VR headset is already on and the application is ready to launch.

1. Launch the MCC application. The system automatically connects to the supervisor's session on the local network.
2. Enter your name on the lobby screen (visible inside VR). This is how you'll be identified in reports and on the supervisor's dashboard.
3. Wait in the lobby. You'll see an operator count (e.g. "3/9 Connected") and the names of other operators who have joined. The Start button is controlled by the supervisor.
4. When the supervisor starts the scenario, the system moves to the training environment. Eye tracking calibration runs automatically. Follow the on-screen prompts to look at the calibration points.

## Monitoring CCTV Feeds

Once the scenario begins, you're sitting at a virtual CCTV monitoring desk.

1. **CCTV Monitor:** A 4-slot grid showing camera feeds (e.g. Camera\_01: Main entrance, Camera\_02: Coffee shop). Click any slot to go fullscreen on that camera. Double-click to return to the grid.
2. **PTZ Controls:** Use the joystick area on the monitor to pan (drag left/right) and tilt (drag up/down). Use the Zoom In and Zoom Out buttons to adjust the field of view. The system logs your camera movements every 30 seconds.
3. **Marking:** When you spot suspicious behavior, use the marking system to tag individuals or objects. Your marks are timestamped and logged for the post-session report. Be selective; marking innocent people counts against your False Positives score.
4. **Alarms:** The supervisor can trigger alarms at any point during the scenario. When an alarm fires, respond as quickly as possible. Your response time is measured and scored (target: under 10 seconds).

## What's Being Recorded (Passive)

You don't need to do anything for these. They happen automatically:

* **Biometrics:** Your heart rate, skin conductance (EDA), and skin temperature are recorded continuously via the sensor on your wrist. The supervisor sees this data in real time.
* **Eye Tracking:** The system records where you're looking (fixations), how long you look (duration), and how your gaze moves between cameras (saccades). This feeds into the attention analysis in your report.

## After the Session

1. The scenario ends when the supervisor stops it or the scenario timeline completes.
2. All your data saves automatically: action logs, fixation data, biometric recordings, and CCTV captures.
3. Review your performance report with the supervisor. The auto-generated report includes:

* Your composite score (0-100) broken down across four dimensions
* Detection metrics: who you correctly identified, who you missed, and any false positives
* Timeliness: how fast you reacted to events and alarms
* Attention analysis: which cameras got your focus and where you had gaps
* AI-generated feedback with up to 5 prioritized recommendations

## Understanding Your Score

|  |  |  |
| --- | --- | --- |
| **Rating** | **Score Range** | **What It Means** |
| Excellent | 90-100 | Consistently strong across all dimensions |
| Competent | 70-89 | Solid performance with minor improvement areas |
| Needs Improvement | 50-69 | Specific skills require focused practice |
| Low | 30-49 | Significant gaps in multiple areas |
| Critical | Below 30 | Fundamental skills need development |

# Part B: Supervisor Software Guide

## Hosting a Session

You're at the supervisor desktop PC. No VR headset needed.

1. Launch the MCC application. You'll see the Pre-Session Start screen.
2. Select the scenario from the dropdown: Airport, Embassy, Shopping Mall, Concert, or Protest. Each scenario has different suspect behaviors, camera layouts, and event timings.
3. Click "Create Scenario." This creates a session on the local network that operators can join. A unique session timestamp is generated automatically.
4. Wait for operators to connect. The lobby screen shows who's joined by name and a live connection count. You can see who's in and who's still missing.
5. Click "Start Scenario" when everyone is ready. All connected operators are pulled into the scenario automatically.

## Live Monitoring Dashboard

During the scenario, you have a real-time view of every operator's activity:

* **Operator Feed:** See exactly what any operator sees on their CCTV monitor. Switch between operators by clicking their name. The live wall shows a grid of all operators at once.
* **Biometric Panel:** Heart rate (bpm), EDA (skin conductance in microsiemens), skin temperature, and a stress indicator from SCR (skin conductance response) spikes. If an operator's stress is climbing, you'll see it here before they mention anything.
* **Eye Tracking / Fixation:** Shows where the operator is looking right now, overlaid on their camera view. The heatmap builds over time, showing which cameras and areas got the most attention.
* **Distractions and Alarms:** You can trigger distractions (e.g. a simulated interruption) and emergency alarms at any point. These test operator focus and response time. The timing of your triggers and the operator's reactions are both logged.
* **Action Log:** Every operator action recorded live: camera selections, PTZ movements, marks, alarm responses.

## After the Session

1. Open the Dashboard. Click through to the post-session view. Select an operator to review.
2. Review the data tabs:

* Eye Data: fixation heatmaps, timelines, most-fixated targets
* Biometrics: heart rate, EDA, temperature graphs with min/max/average
* Marking Data: timeline of marked events vs. ground truth
* Activity Logs: all actions timestamped
* Alarms: response times and outcomes for each alarm

1. Use the Replay System. Scrub through the session timeline, play/pause, adjust speed (0.5x, 1x, 2x), step frame by frame. Toggle overlays for heatmap, fixation points, biometric graphs, and the action log. This is how you build your debrief.
2. Generate the Report. Click "Generate Report" in the dashboard. The system creates a PDF with the composite score, all dimension breakdowns, detection metrics, gaze correlation, attention analysis, saccade analysis, alarm response scoring, biometric data, AI-generated feedback, and up to 5 prioritized recommendations. The report saves to Data/[SessionTimestamp]/Supervisor/[OperatorName]/Reports/.

## Running a Debrief

After generating reports:

* Pull up the operator's report on your screen
* Walk through the composite score and the 4 dimensions
* Show the heatmap: where did they look, where didn't they?
* Highlight one strength first, then discuss improvement areas
* Share the AI recommendations as a starting point for discussion
* For group debriefs, compare patterns across operators without singling anyone out negatively

# Appendix: Quick Troubleshooting for Software Issues

Note: Hardware and network issues are handled by the Training Administrator. These are software-only issues you might encounter.

**Application won't launch:** Close and try again. If it persists, notify the Training Administrator.

**Lobby doesn't show other operators:** The session may not have been created yet. Supervisor: confirm you clicked "Create Scenario." Operators: close and relaunch.

**Scenario seems frozen:** Check if the supervisor has started it. If running, exit and rejoin.

**Report won't generate:** Try clicking "Generate Report" again. If it still fails, notify the Training Administrator.

For anything not listed here, contact the Training Administrator. Do not modify any configuration files or settings.