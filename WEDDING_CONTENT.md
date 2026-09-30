# WEDDING INVITATION — AUTHORITATIVE CONTENT & DESIGN SPECIFICATION

This document is the **SINGLE SOURCE OF TRUTH** for all wedding invitation content, typography rules, layout hierarchy, and locked project decisions for the Fawzan & Huda Digital Wedding Invitation project.

All future implementation phases **MUST** read and adhere strictly to this file before generating or modifying any section of the invitation. If a future prompt or instruction conflicts with this file, stop and report the conflict instead of silently changing or overriding the locked content.

---

## 1. PROJECT DESIGN DIRECTION

**Wedding Invitation Style:**
- Premium luxury Islamic wedding invitation.
- Pure static 2D design.
- **NO Three.js**
- **NO WebGL**
- **NO 3D environments**
- **NO unnecessary 3D effects**
- Visual quality must derive entirely from typography, layout composition, Islamic geometry, border framing, ornamentation, textures, spacing, and imagery.
- Mobile-first invitation experience with elegant desktop centering.
- The invitation should feel like a premium luxury printed wedding card translated into a digital experience.

**Color Priority & Palette:**
1. **Dominant:** Cream / Ivory / Off-white (`#FFFDF9`, `#FAF6EE`, `#F3EBDD`)
2. **Secondary:** Silver / Soft Grey where appropriate
3. **Accent:** Midnight / Dark Blue (`#0B132B`, `#141C36`)
4. **Accent:** Champagne / Antique Gold (`#C5A059`, `#D4AF37`, `#E6C778`)
5. **Very Minimal:** Maroon / Burgundy (`#581825`, `#4A121A`)

*Rule:* Dark blue, gold, and maroon must **NEVER** overpower the cream/ivory foundation.

**Overall Visual Tone:**
- Elegant
- Premium
- Sophisticated
- Islamic
- Editorial
- Clean
- Luxurious
- Refined
- Not cartoonish
- Not generic Canva-template looking
- Not overly bright/light
- Not overly dark
- Not 3D

---

## 2. TYPOGRAPHY DIRECTION

Use an elegant luxury editorial typography system.

**Preferred Font Families:**
- `Playfair Display`
- `Cormorant Garamond`
- `Montserrat`

**Typography Hierarchy:**
- Arabic / Bismillah Calligraphy
- Section Labels & Eyebrows
- Couple Names (Strong, premium serif treatment)
- Body Copy & Invitation Text
- Dates & Timings
- Venue Information & Addresses
- Small Metadata & Accents

---

## 3. INVITATION FLOW

The locked overall sequence is:

1. **01. Premium Preloader / Tap to Open**
2. **02. Opening Video**
3. **03. Hero**
4. **04. Family / Parents**
5. **05. Scratch Date Reveal**
6. **06. Nikah Details & Location**
7. **07. Reception Details & Location**
8. **08. Dua / Attend Interaction**
9. **09. Footer**

*Constraint:* Do **NOT** create standard RSVP functionality. The footer will be finalized separately during development.

---

## 4. OPENING EXPERIENCE

When a visitor opens the invitation:

**PRELOADER:**
- Premium luxury static 2D visual.
- F & H monogram / seal.
- `"TAP TO OPEN"` interaction.
- The preloader should feel like the cover of a luxury physical invitation card.

**OPENING VIDEO:**
- After the user's tap, the opening video starts.
- The tap must directly unlock video/audio playback where browser policies allow.
- No unwanted autoplay before user interaction.
- Video should transition smoothly into the invitation.
- No white flash.
- No abrupt cut.
- No visible loading glitch.
- The video and invitation transition must feel like one continuous experience.
- Video is an external/local project asset and its exact visual content will be handled separately.

---

## 5. HERO CONTENT

The hero represents the main opening invitation card.

**Couple Names:**
`FAWZAN & HUDA`

**Hero Requirements:**
- Premium Islamic architectural framing.
- Cream / ivory foundation.
- Midnight / dark blue typography.
- Champagne / antique gold ornaments.
- Minimal maroon accents if needed.
- Arabic Bismillah calligraphy.
- Elegant editorial composition.
- Must remain strictly static 2D.

---

## 6. FAMILY / PARENTS CONTENT

Use the exact names, relationships, and spellings listed below.

**GROOM'S GRANDPARENTS:**
- Grandson of:
  - **Late Mr. Zainuddin Kadir Kazi**
  - &
  - **Late Mrs. Fatimbi Zainuddin Kazi**

**GROOM:**
- **FAWZAN**
  - Son of **Mr. Rafiq Zainuddin Kazi** & **Mrs. Hajra Rafiq Kazi**

**BRIDE:**
- **HUDA**
  - Daughter of **Mr. Hasham Ismail Kazi** & **Mrs. Seemab Hasham Kazi**

**LOCKED EXACT SPELLINGS:**
- `Hajra` (NOT Hajara)
- `Fatimbi` (Exactly as written)
- `Zainuddin Kadir Kazi`
- `Rafiq Zainuddin Kazi`
- `Hasham Ismail Kazi`
- `Seemab Hasham Kazi`

---

## 7. SCRATCH DATE REVEAL

Dedicated interactive date-reveal section positioned immediately after the family/parents section.

**Interaction Mechanics:**
- Uses **THREE** scratch cards:
  - Card 1: `09`
  - Card 2: `DEC`
  - Card 3: `2026`
- User scratches each card to reveal the date digits.
- Only after **ALL THREE** cards are fully revealed:
  - Trigger celebration state.
  - Launch party / confetti effect from both left and right edges.
  - Play luxury chime celebration sound (only triggered after explicit user interaction).
  - Prominently display unlocked complete date banner.

**Locked Date:**
- Date: `09 DEC 2026`
- Full String: `Wednesday, 09 December 2026`

*Constraint:* Premium 2D canvas interaction only. Do not convert to 3D.

---

## 8. NIKAH — AUTHORITATIVE CONTENT

*IMPORTANT:* The following is the exclusive NIKAH information. **DO NOT** mix or merge it with Reception information.

- **Event:** Nikah Ceremony
- **Date:** 9 December 2026
- **Time:** 11:00 AM
- **Venue:** Dockyard Mazgaon Masjid
- **City & Pincode:** Mumbai – 400010

**Section Requirements:**
- Premium section title/header.
- Exact Date & Time.
- Venue Name & Location.
- Luxury Islamic 2D architectural presentation.
- Actual Google Maps integration/embed where appropriate.
- Clear button opening the exact Nikah location in Google Maps.

*CRITICAL CORRECTION RULE:*
Do **NOT** use Sir Elly Kadoorie High School as the Nikah venue. Sir Elly Kadoorie High School is strictly the Reception venue.

---

## 9. RECEPTION — AUTHORITATIVE CONTENT

*IMPORTANT:* This is a **SEPARATE** section from Nikah.

- **Event:** Wedding Reception
- **Date:** 9 December 2026
- **Time:** 7:00 PM – 11:00 PM
- **Venue Name:** Sir Elly Kadoorie High School
- **Full Address:** Shivdas Champsi Road, Opposite Chaitya Temple, Tadwadi, Mazgaon, Mumbai, Maharashtra – 400010
- **Action Requirement:** "SCAN FOR RECEPTION LOCATION" (Supports location action / QR / Google Maps interaction).

**Section Requirements:**
- Premium luxury 2D design.
- Date, Time, Venue, and Full Address.
- Actual map / location interaction.
- Clear Google Maps action button.
- **NO RSVP form**.

---

## 10. RSVP / ATTENDANCE RULE

**DO NOT** create conventional RSVP forms.

The invitation must **NOT** contain:
- Guest registration forms
- Number of guests input
- Form input fields / submit handlers
- Attendance database integrations
- RSVP submission flow

*Allowed Future Interaction:* Simple non-intrusive emotional feedback buttons such as `"In Sha Allah, I'll Attend"` or `"Send Dua"`.

---

## 11. FOOTER CONTENT

**Exact Source Wording:**

> With Best Compliments From  
> **THE KAZI AND DADAN FAMILY, RELATIVES & FRIENDS**

This wording must be preserved verbatim. The final footer presentation will be built during its dedicated phase.

---

## 12. SOURCE OF TRUTH RULE

`WEDDING_CONTENT.md` is the authoritative contract for all wedding invitation copy and content decisions.

Every future implementation phase **MUST**:
1. Read `WEDDING_CONTENT.md` first.
2. Extract only the content required for that specific phase.
3. Preserve exact names, dates, times, venues, and addresses.
4. Never invent missing wedding information.
5. Never silently alter existing locked information.
6. Never copy Reception information into Nikah.
7. Never copy Nikah information into Reception.
8. Stop and ask for clarification if instructions conflict with this document.
9. Keep all implementations strictly consistent with the project's premium static 2D design system.

---

## 13. CURRENT IMPLEMENTATION STATUS

**Completed Phases:**
- **Phase 01:** Project foundation / design system.
- **Phase 02:** Premium Preloader + Tap to Open.
- **Phase 03:** Opening Video integration.
- **Phase 04:** Premium Hero Section.
- **Phase 05:** Family & Parents Section.
- **Phase 06:** Interactive Scratch Date Reveal.
- **Phase 07:** Nikah Details & Location.

**AUDIT NOTE ON PHASE 07:**
The existing Phase 07 component contains Reception venue details (Sir Elly Kadoorie High School, 4:00 PM Onwards) instead of the authoritative Nikah details (Dockyard Mazgaon Masjid, 11:00 AM). In subsequent tasks when instructed, Phase 07 must be audited and updated against this document.

---

## 14. IMPLEMENTATION DISCIPLINE

For every future phase:
- First read `WEDDING_CONTENT.md`.
- Inspect current code implementation.
- Implement **ONLY** the requested phase.
- Do not create future sections early.
- Do not modify unrelated completed sections.
- Do not introduce 3D / WebGL / Three.js.
- Maintain mobile-first behavior with desktop centering.
- Preserve existing luxury visual language.
- Run `npx tsc -b` compilation after implementation.
- Run `npx vite build` production build after implementation.
- Report exact changes and verification results clearly.

---
*END OF AUTHORITATIVE WEDDING CONTENT DOCUMENT.*
