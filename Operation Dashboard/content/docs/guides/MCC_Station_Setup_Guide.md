**MCC VR CCTV Training System**

Station Setup Guide

For Training Administrators

Client: MCC / UAE Supreme Council for National Security

Version: 1.1 | April 2026

**Classification: Confidential**

# **Table of Contents**

1. Purpose

2. System Components (Reference Only)

3. Pre-Session Preparation: Operator Stations

4. Pre-Session Preparation: Supervisor Station

5. Session-Day Quick Checklist

6. Hardware Troubleshooting

7. Equipment Inventory

8. Maintenance Schedule

# **1. Purpose**

This guide covers everything a Training Administrator needs to do to prepare the MCC stations for a training session. The training environment is already set up and operational. This guide focuses on the software configuration, device preparation, and pre-session checks that need to happen before each session so that operators and supervisors can walk in and start using the software immediately.

# **2. System Components (Reference Only)**

Brief reference list of what is at each station (NOT setup instructions, just inventory awareness):

* 8 Operator Stations: VR-capable PC, HTC Vive Focus Vision headset (wired link cable), EmotiBit wrist-worn biometric sensor
* 1 Supervisor Station: Desktop PC (no VR headset), monitor, keyboard, mouse
* All stations connected via isolated LAN

# **3. Pre-Session Preparation: Operator Stations**

## **Device Checks**

* Power on each operator PC and confirm Windows is at the desktop
* Confirm SteamVR is running and shows green status
* Confirm VIVE Hub is running and detects the headset

## **VR Headset Preparation**

* Confirm headset is charged (charge overnight before session day if needed)
* Clean the lenses with the provided microfiber cloth (no liquids on lenses)
* Clean the face cushion with antibacterial wipes
* Confirm the link cable connection is secure

## **EmotiBit Sensor Preparation**

* Confirm the sensor is charged
* Power on and verify the LED is solid (solid = connected and ready)
* If the LED blinks or stays off, swap for a spare sensor

## **Application Configuration**

* Open Content/Configs/Server.json on each operator PC
* Set the "IP" field to the supervisor station's IP address on the LAN
* Set the "PORT" field to 7777
* Save the file
* Launch the MCC application briefly to confirm it starts without errors, then close it

# **4. Pre-Session Preparation: Supervisor Station**

## **Device Check**

* Power on the supervisor PC and confirm Windows is at the desktop

## **Application Configuration**

* Open Content/Configs/Server.json on the supervisor PC
* The "IP" field should be empty (this tells the system to act as the host)
* "PORT" stays at 7777
* Save the file

## **Network Verification**

* Confirm all machines are on the same LAN subnet
* Verify firewall rules allow: TCP 7777, UDP 7780-7795, UDP 12346

# **5. Session-Day Quick Checklist**

* All 9 PCs powered on and at Windows desktop
* SteamVR green on all 8 operator PCs
* VIVE Hub detecting headset on all 8 operator PCs
* All 8 VR headsets charged and clean
* All 8 EmotiBit sensors charged, LED solid
* Server.json configured on all 9 machines
* MCC application test-launched on at least 2-3 stations (spot check)
* Spare EmotiBit sensor available
* Spare face cushions and cleaning wipes available
* Printed materials at each station

# **6. Hardware Troubleshooting**

## **VR Headset Issues**

* Headset not detected by VIVE Hub: Check link cable at both ends. Try a different USB port. Restart SteamVR.
* Headset won't charge: Try a different charging cable. Check the port for debris.
* Lenses foggy: Let the headset warm up for 5 minutes. Use only the microfiber cloth.

## **EmotiBit Issues**

* LED blinking: Sensor may need charging. Plug in for at least 30 minutes.
* LED off: Press and hold the power button for 3 seconds. If still off, swap for a spare.
* Sensor not sending data: Confirm UDP port 12346 is open on the firewall.

## **Network Issues**

* Operators can't find the supervisor session: Verify all machines are on the same subnet. Check TCP 7777 on supervisor firewall.
* Intermittent disconnections: Check cable connections. Check switch port status.

## **Application Issues**

* Crashes on launch: Check Saved/Logs folder. Most common cause is GPU driver mismatch.
* Starts but can't connect: Verify server.json has the correct IP. Verify supervisor application is running.

# **7. Equipment Inventory**

|  |  |  |
| --- | --- | --- |
| **Item** | **Quantity** | **Notes** |
| VR-capable PC (Operator) | 8 | RTX 2060+ GPU |
| Desktop PC (Supervisor) | 1 | GTX 1060+ GPU |
| HTC Vive Focus Vision | 8 + 1 spare | Charge nightly |
| Link Cables | 9 |  |
| EmotiBit Sensors | 8 + 2 spare | Charge nightly |
| Face Cushions (spare) | 4 | Hygiene swaps |
| Microfiber Cloths | 4 | Lens cleaning only |
| Antibacterial Wipes | 1 pack | Face cushion cleaning |

# **8. Maintenance Schedule**

* Before each session: Clean face cushions, charge headsets and sensors, spot-check application launch
* Weekly: Verify GPU drivers, check for Windows updates
* Monthly: Full hardware inspection (cables, ports, headset condition), review spare inventory
* As needed: Replace damaged cables, reorder consumables