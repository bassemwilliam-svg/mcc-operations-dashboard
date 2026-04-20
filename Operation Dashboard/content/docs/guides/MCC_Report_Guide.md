# MCC Operator Performance Report: Reader's Guide

This guide explains how to read and understand the Operator Performance Report. The report is automatically generated after each training session and evaluates how effectively an operator monitored multiple camera feeds during a simulated security scenario.

---

## 1. Report Header

The top of the report identifies the session and the operator.

| Field | Description |
|-------|-------------|
| Session ID | A unique identifier for this training session |
| Date & Time | When the session took place and how long it lasted |
| Operator | The name of the person being evaluated |
| Scenario | The training scenario that was played |

---

## 2. Executive Summary

A short paragraph at the top summarizing the operator's overall performance. It highlights:

- The overall score and whether the operator passed or failed
- The strongest and weakest performance areas
- Whether additional training is recommended

---

## 3. Composite Score & Breakdown

The most important section of the report. A large circular number (0 to 100) represents the overall composite score.

The score is built from **four performance dimensions**, each carrying a specific weight:

| Dimension | Weight | What It Measures |
|-----------|--------|------------------|
| **Detection Accuracy** | 40% | How well the operator identified suspicious individuals |
| **False Positives** | 20% | Whether the operator avoided marking innocent individuals. A perfect score means no false alarms. |
| **Timeliness** | 20% | How quickly the operator reacted to suspicious activity and alarms |
| **Attention & Gaze** | 20% | How well the operator scanned across all camera feeds |

A **radar chart** next to the score shows the balance across all four dimensions. A full, even shape means well-rounded performance. A lopsided shape highlights areas that need work.

### Score Labels

| Score | Label |
|-------|-------|
| 90 and above | Excellent |
| 70 - 89 | Competent |
| 50 - 69 | Needs Improvement |
| Below 50 | Fail |

---

## 4. Performance Score Cards

Five color-coded cards give a quick snapshot of specific performance areas:

| Card | What It Tells You |
|------|-------------------|
| **Overall** | The combined performance score |
| **Attention Quality** | How well the operator distributed their attention across all camera feeds |
| **Response Time** | How quickly the operator began responding to suspicious activity |
| **Alarm Handling** | How effectively the operator acknowledged and responded to alarms |
| **Marking Accuracy** | How precise the operator's markings were, comparing correct identifications vs. mistakes |

Each card is color-coded:
- **Green**: Excellent or High performance
- **Yellow**: Medium, room for improvement
- **Orange**: Low, training recommended
- **Red**: Critical, immediate attention needed

---

## 5. Data Availability

This panel shows which sensor data was successfully captured during the session.

| Data Stream | What It Is |
|-------------|-----------|
| **Saccades** | Eye movement tracking between gaze points |
| **Fixations** | Where the operator was looking and for how long |
| **Marks** | The operator's manual markings of suspicious individuals |
| **Alarms** | Alarm events that occurred during the session |
| **Biometrics** | Physiological data (heart rate, skin conductance, temperature) |

A **filled dot** means the data was captured. A **hollow dot** means it was missing, so some report sections may be incomplete as a result.

---

## 6. Graphs

### Camera Distribution (Donut Chart)
Shows how the operator divided their viewing time across camera feeds. A balanced distribution suggests good scanning habits. If one camera dominates, the operator may have been focused too narrowly.

### Scenario Events: Severity vs Time (Scatter Chart)
A chart plotting all scenario events on a timeline, colored by severity. When you **hover on any point**, the tooltip shows three values:

| Tooltip Value | What It Means |
|---------------|---------------|
| **Label** (top line) | The severity category of the event: Baseline, Notable, Suspicious, or Critical |
| **x** (first number) | The **time in seconds** from the start of the session when the event occurred |
| **y** (second number) | The **severity level as a number**: 0 = Baseline, 1 = Notable, 2 = Suspicious, 3 = Critical |

For example, a tooltip showing **"Critical, x: 332, y: 3"** means a critical event (severity 3) happened 332 seconds into the session.

The color of each dot also indicates severity:
- **Blue**: Notable (minor activity worth observing)
- **Yellow/Amber**: Suspicious (behavior that warrants attention)
- **Red**: Critical (immediate threat or high-priority event)

This chart helps visualize how the scenario escalated over time and where clusters of important events occurred.

### Entity Detection Timeline
Shows when each suspicious individual first appeared, when they became suspicious, and whether the operator marked them. Useful for understanding reaction timing.

---

## 7. Detection Metrics

A detailed breakdown of the operator's identification performance:

| Metric | What It Means |
|--------|---------------|
| **Correctly Marked** | Suspicious individuals the operator correctly identified |
| **Missed** | Suspicious individuals the operator failed to identify |
| **False Positives** | Innocent individuals the operator incorrectly marked as suspicious |
| **Total Suspicious** | The total number of suspicious individuals in the scenario |

### Derived Rates

| Rate | What It Means |
|------|---------------|
| **Detection Rate** | Percentage of suspicious individuals that were correctly found |
| **False Positive Rate** | Percentage of all markings that were incorrect |
| **Accuracy Score** | Overall accuracy considering both correct and incorrect markings |

---

## 8. Timeliness Detail

### Entity Reactions
For each suspicious individual in the scenario, this table shows:
- **Who**: The entity's name and role
- **Reaction Time**: How long it took the operator to mark them (or "-" if they were never marked)
- **Status**: Proactive (very fast), Normal, Delayed, or Not Marked

### Alarm Reactions
For each alarm that occurred:
- **When**: The time the alarm sounded
- **Response Time**: How quickly the operator reacted
- **Status**: Proactive, Normal, Delayed, or Missed

---

## 9. Gaze-Scenario Correlation

This section answers a key question: **"Was the operator looking at the right camera when important events happened?"**

| Metric | What It Means |
|--------|---------------|
| **Gaze Coverage** | Percentage of important events where the operator was watching the correct camera |
| **Critical Watched** | Number of critical events the operator was correctly watching |
| **Critical Missed** | Number of critical events the operator missed because they were looking at the wrong camera |
| **Tunnel Vision** | Whether the operator spent too much time on a single camera instead of scanning all feeds |
| **Distraction Captures** | How many times distraction events successfully diverted the operator's attention |
| **Distraction Recovery** | How quickly the operator refocused after being distracted |

### Event-Level Detail Table
A row-by-row breakdown for each important event showing what camera was needed, what camera the operator was watching, and whether it was correct.

---

## 10. Scenario Event Timeline

This section describes the training scenario itself, the "ground truth" of what was designed to happen, independent of the operator's actions.

### Suspicious Entities
Cards for each suspicious individual in the scenario showing:
- **ID & Role**: e.g. "F1: Female 1 (Lookout/Coordinator)"
- **Description**: What they do during the scenario
- **Camera**: Which camera feed they appear on
- **Timing**: When they first appear and when their behavior becomes suspicious

### Key Events Table
A chronological list of every event in the scenario:
- **Time**: When it occurs
- **Severity**: Notable (blue), Suspicious (yellow), or Critical (red)
- **Subject**: Who is involved
- **Event**: What happens
- **Location**: Where in the scene

---

## 11. AI-Generated Analysis

Three narrative sections providing personalized insights:

### Executive Summary
A brief overview of overall performance, highlighting the best and worst scoring areas.

### Performance Feedback
A personalized message addressed directly to the operator, covering:
- What went well (e.g. no false alarms, steady biometrics, good camera coverage)
- What needs improvement (e.g. missed entities, tunnel vision, slow alarm response)

### Insights & Recommendations
Up to 5 prioritized recommendations, each with:
- A **title** describing the action to take
- A **priority level** (HIGH, MEDIUM, or LOW)
- **Detailed guidance** on how to improve
- The **performance area** it targets

---

## 12. Attention Analysis

A deep dive into the operator's eye-tracking data, with its own section score (0-100).

| Metric | What It Means |
|--------|---------------|
| **Total Fixation Time** | How many seconds the operator's gaze was actively tracked |
| **Avg Fixation Duration** | Average time spent looking at one spot before moving |
| **Camera Switches** | How many times the operator moved between different camera feeds |
| **Switch Rate** | Camera switches per minute. Higher means more active scanning |
| **Longest Fixation** | Which camera held the operator's attention the longest and for how long |
| **Attention Gaps** | Number of periods longer than 5 seconds with no gaze data recorded |

### Camera Attention Heatmap
A grid showing how attention was distributed. Darker blue cells received more attention. Each cell shows the camera name, number of fixations, total time, and percentage of total attention.

### Distribution Bar
A horizontal bar visually showing how attention was spread across cameras at a glance.

### Attention Gaps
Warnings for any period exceeding 5 seconds without recorded gaze data, showing the start time, end time, and duration of each gap.

---

## 13. Saccade (Eye Movement) Analysis

Saccades are the rapid eye movements that happen when the operator shifts their gaze from one point to another.

| Metric | What It Means |
|--------|---------------|
| **Mean Velocity** | Average speed of eye movements |
| **Std Deviation** | How much the speed varies. Higher means more varied scanning |
| **Min / Max Velocity** | The slowest and fastest eye movements recorded |
| **Samples** | Total number of eye movements captured |
| **High-Activity Periods** | Bursts of intense scanning activity |

Higher velocity and more high-activity periods generally indicate more alert, engaged monitoring.

---

## 14. Alarm Response

Evaluates how the operator handled alarm events, with its own section score (0-100).

| Metric | What It Means |
|--------|---------------|
| **Operator Alarms** | Alarms triggered as part of the scenario |
| **Random Alarms** | Surprise alarms inserted as attention checks |
| **Total Alarms** | Combined count of all alarms |
| **Avg Response Time** | Average time to respond, or "No response" if none were acknowledged |

### Per-Alarm Detail
Each alarm is shown individually with:
- When it occurred
- Whether the operator responded and how quickly
- A visual timeline bar (0-30 seconds) showing response timing, or "NO RESPONSE"

### Response Categories

| Category | What It Means |
|----------|---------------|
| **Fast** | Responded within 5 seconds |
| **Normal** | Responded within 5-10 seconds |
| **Slow** | Responded within 10-30 seconds |
| **Missed** | No response within 30 seconds |

---

## 15. Biometric Data

Physiological measurements captured during the session to assess the operator's stress and alertness levels.

| Signal | What It Measures |
|--------|-----------------|
| **Heart Rate** (bpm) | Higher rates may indicate stress or heightened alertness |
| **EDA** (Electrodermal Activity) | Skin conductance, which rises with emotional arousal or stress |
| **SCR Amplitude** (Skin Conductance Response) | Individual conductance spikes, a rapid stress indicator |
| **Temperature** | Skin temperature, which may decrease under acute stress |

Each signal is shown as:
- A **range bar** displaying the minimum, average, and maximum values
- A **summary table** with statistical details and sample count

The system also detects **stress episodes**, moments where multiple biometric signals spike simultaneously, which may indicate the operator was under significant pressure.

---

## 16. Session Timeline

A complete chronological log merging all events into a single view. This is the most detailed record of the entire session.

| Event Type | Badge Color | What It Shows |
|------------|-------------|---------------|
| **ALARM** | Red | When alarms were triggered |
| **FIXATION** | Blue | When the operator looked at a specific camera and for how long |
| **MARK** | (when available) | When the operator marked or unmarked an entity |

Each entry shows the time, event type, and a brief description.

---

## 17. Report Footer

Contains the session identifier and a note indicating the report was generated by the MCC automated analysis system.

---

## Score Interpretation Reference

| Score | Rating | What It Means |
|-------|--------|---------------|
| 90 - 100 | Excellent | Outstanding performance |
| 70 - 89 | Competent | Good performance, minor improvements possible |
| 50 - 69 | Needs Improvement | Adequate but notable weaknesses present |
| 30 - 49 | Low | Below expectations, additional training recommended |
| 0 - 29 | Critical | Significant gaps, immediate focused training required |
