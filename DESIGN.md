---
name: Shots by Saad (demo)
description: A wedding photographer's site drawn like a zine, marker notes and highlighter around big taped-in photos.
colors:
  paper: "#fff8e8"
  paper-raised: "#fffdf6"
  paper-shade: "#f3ead3"
  field-white: "#ffffff"
  ink: "#111111"
  ink-soft: "#3a3631"
  hl-yellow: "#ffe84d"
  hl-pink: "#ff6fae"
  hl-teal: "#2dd4bf"
  hl-teal-ink: "#0f766e"
  tape: "rgb(255 236 170 / 0.72)"
  error: "#b0124f"
typography:
  display:
    fontFamily: "Shantell Sans, Comic Sans MS, Segoe Print, cursive"
    fontSize: "clamp(2.6rem, 1.6rem + 4.4vw, 5.4rem)"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "0.005em"
  headline:
    fontFamily: "Shantell Sans, Comic Sans MS, Segoe Print, cursive"
    fontSize: "clamp(2rem, 1.5rem + 2.2vw, 3.1rem)"
    fontWeight: 700
    lineHeight: 1.04
    letterSpacing: "0.005em"
  title:
    fontFamily: "Shantell Sans, Comic Sans MS, Segoe Print, cursive"
    fontSize: "clamp(1.5rem, 1.25rem + 1vw, 2rem)"
    fontWeight: 700
    lineHeight: 1.04
    letterSpacing: "0.005em"
  title-sm:
    fontFamily: "Shantell Sans, Comic Sans MS, Segoe Print, cursive"
    fontSize: "1.25rem"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "0.005em"
  figure:
    fontFamily: "Shantell Sans, Comic Sans MS, Segoe Print, cursive"
    fontSize: "clamp(2rem, 1.5rem + 2.2vw, 3.1rem)"
    fontWeight: 800
    lineHeight: 1.1
  note:
    fontFamily: "Shantell Sans, Comic Sans MS, Segoe Print, cursive"
    fontSize: "1.25rem"
    fontWeight: 600
    lineHeight: 1.35
  body-lg:
    fontFamily: "Figtree, Segoe UI, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 400
    lineHeight: 1.6
  body:
    fontFamily: "Figtree, Segoe UI, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  small:
    fontFamily: "Figtree, Segoe UI, system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Shantell Sans, Comic Sans MS, Segoe Print, cursive"
    fontSize: "0.9375rem"
    fontWeight: 700
    lineHeight: 1.3
  label-sm:
    fontFamily: "Shantell Sans, Comic Sans MS, Segoe Print, cursive"
    fontSize: "0.875rem"
    fontWeight: 700
    lineHeight: 1.3
  button:
    fontFamily: "Shantell Sans, Comic Sans MS, Segoe Print, cursive"
    fontSize: "1.25rem"
    fontWeight: 800
    lineHeight: 1
rounded:
  sketch: "255px 18px 225px 16px / 16px 225px 18px 255px"
  sketch-2: "18px 225px 16px 255px / 255px 16px 225px 18px"
  field: "10px 14px 9px 13px"
  photo: "3px 6px 4px 5px"
  tick: "4px 6px 5px 3px"
  blob: "52% 48% 46% 54% / 48% 54% 46% 52%"
spacing:
  "1": "0.25rem"
  "2": "0.5rem"
  "3": "0.75rem"
  "4": "1rem"
  "5": "1.5rem"
  "6": "2rem"
  "7": "3rem"
  "8": "4.5rem"
  "9": "6.5rem"
components:
  button-primary:
    backgroundColor: "{colors.hl-yellow}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.sketch}"
    padding: "0 1.5rem"
    height: "52px"
  button-plain:
    backgroundColor: "{colors.paper-raised}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.sketch}"
    padding: "0 1.5rem"
    height: "52px"
  link-marker:
    textColor: "{colors.ink}"
    typography: "{typography.title-sm}"
  card-sketch:
    backgroundColor: "{colors.paper-raised}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sketch}"
    padding: "2rem 1.5rem 1.5rem"
  taped-photo:
    backgroundColor: "{colors.paper-raised}"
    rounded: "{rounded.photo}"
    padding: "10px 10px 12px"
  field:
    backgroundColor: "{colors.field-white}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.field}"
    padding: "0.5rem 0.75rem"
    height: "50px"
  chip-choice:
    backgroundColor: "{colors.field-white}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.sketch-2}"
    padding: "0 1rem"
    height: "46px"
  number-badge:
    backgroundColor: "{colors.paper-raised}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.blob}"
    size: "46px"
---

# Design System: Shots by Saad (demo)

## Overview

**Creative North Star: "The Napkin Sketch"**

The photographer sketches your wedding day for you, like a friend drawing on a napkin. Everything that is not a photo is drawn by hand: black marker lines that wobble, highlighter swipes behind words, arrows that curl from one thing to the next, and tape holding the photos onto cream paper. The photos are the only finished, photographic objects on the page, and the drawn layer exists to point at them.

Density is relaxed and annotated rather than gridded and quiet. Boxes have uneven corners and a second sketched outline; photos sit at small tilts; notes are lettered in marker caps beside the thing they explain. The system refuses the dark, full screen slideshow with a thin serif name that wedding photographer sites default to.

Motion is the pen moving. Doodles draw themselves on once as they scroll into view, presses squash slightly with a hair of rotation, and nothing loops.

**Key Characteristics:**
- Cream paper ground, black marker ink for every line and every letter.
- Three highlighters, each tied to a wedding function, never used as decoration.
- Marker caps lettering (Shantell Sans) for anything said out loud; clean sans (Figtree) for reading.
- Wobbly boxes with a doubled outline; photos taped on at slight tilts.
- A doodled photographer mascot whose face carries state.

## Colors

Paper and marker: a warm cream ground, one black ink, and three loud highlighters that each have a job.

### Primary
- **Mehndi Highlighter** (hl-yellow): the main action and the mehndi function. Fills the primary marker button, the nav hover swipe, text selection, the skip link, and the "one team left" mark on the calendar. One yellow button per view region; secondary actions go plain.

### Secondary
- **Barat Highlighter** (hl-pink): the barat function and the one phrase that matters most. Swiped behind the hero phrase and the Barat label, rings the selected calendar date, fills the mascot's happy mouth, and is the link underline on hover.

### Tertiary
- **Walima Highlighter** (hl-teal): the walima function and "free". Draws the hero swoosh, underlines links and the marker link at rest, rules the enquiry sheet like notebook paper (at 18% alpha), swipes behind "try this date" suggestions, and halos the mascot.
- **Walima Ink** (hl-teal-ink): the readable teal. Used where teal must carry meaning at small size, the "free" dot under calendar dates and in the key (5.4:1 on raised paper).

### Neutral
- **Napkin Cream** (paper): the page and the default ground.
- **Clean Sheet** (paper-raised): every box, card, photo mount, speech bubble and dialog sits on this, one shade brighter than the page.
- **Folded Corner** (paper-shade): the demo notice strip, the open FAQ toggle, and the empty frame behind a loading photo.
- **Field White** (field-white): form fields, choice chips and tick boxes only, so the inputs read as the one place you write.
- **Marker Ink** (ink): all text, every border and stroke, every doodle, and the one focus outline used everywhere, fields included.
- **Faded Ink** (ink-soft): secondary text, section lead lines, supporting copy under cards (11.3:1 on paper).
- **Tape** (tape): the translucent strips that hold photos and review notes down.
- **Fix-it Red** (error): the only red. The invalid field border and the error line under it, nothing else (6.8:1 on raised paper).

### Named Rules
**The Highlighters Have Jobs Rule.** Yellow is mehndi and the main action, pink is barat and the hero phrase, teal is walima and "free". Nikah has no highlighter; it gets a thick ink underline. Any other emphasis uses an ink underline or a marker circle, never a highlighter picked for colour.

**The One Ink Rule.** Every line on the page, text, border, doodle and focus ring, is the same black marker. Do not introduce grey borders or coloured outlines; hierarchy comes from stroke weight (1.5px, 2px, 2.5px, 3.5px), not hue. The single exception is Fix-it Red on a field the visitor has to correct.

## Typography

**Display Font:** Shantell Sans (with Comic Sans MS, Segoe Print, cursive), self hosted variable woff2, weights 300 to 800
**Body Font:** Figtree (with Segoe UI, system-ui, sans-serif), self hosted variable woff2, weights 300 to 900

**Character:** Shantell Sans is the marker: every heading, button, label and handwritten note is set in it, uppercase for headings and actions. Figtree is the typed page underneath, plain and quiet so paragraphs and prices read fast on a phone.

### Hierarchy
- **Display** (700, fluid 2.6 to 5.4rem, line height 1, uppercase): the hero headline only. Fixed at 2.6rem under 640px.
- **Headline** (700, fluid 2 to 3.1rem, 1.04, uppercase): section titles, the day function labels, the closing line, the "sent" confirmation.
- **Title** (700, fluid 1.5 to 2rem, uppercase): package names, the calendar month, the enquiry heading, the speech bubble answer (800 there).
- **Title Small** (700, 1.25rem, 1.15, uppercase): step titles, FAQ questions, the marker link.
- **Figure** (800, fluid 2 to 3.1rem, 1.1): prices. Prices are lettered, not typed.
- **Note** (600, 1.25rem, 1.35, sentence case): handwritten asides, the day notes, review quotes, the hero photo note.
- **Body Large** (Figtree 400, 1.25rem, 1.6): the hero lede and section lead lines, capped near 32 to 38rem.
- **Body** (Figtree 400, 1.0625rem, 1.6): running text, package inclusions, FAQ answers (max 42rem).
- **Small** (Figtree 400, 0.9375rem): demo notice, captions, footer, form helper lines.
- **Label** (Shantell Sans 700, 0.9375rem, uppercase): form labels, calendar weekday heads, footer column heads.
- **Label Small** (700, 0.875rem): the sample marks in the calendar key. The same 0.875rem step sets the demo notice on phones (in Figtree).

### Named Rules
**The Marker Speaks, Figtree Explains Rule.** Anything the photographer would write on the napkin (headings, buttons, notes, prices, labels) is Shantell Sans; anything a visitor reads as a paragraph is Figtree. Never set a paragraph of body copy in the marker face.

## Layout

One centred page column, at most 1200px wide with 1rem gutters each side. Sections are separated by a generous 6.5rem top gap, each opened by a section head (a headline and an optional lead line, max 46rem) with 2rem below it. Spacing runs on a nine step scale from 0.25rem to 6.5rem.

The hero is an asymmetric two column grid (6 to 5) with the words on the left and one large taped photo on the right, the mascot overlapping the photo's lower left corner. The day section is a two column zigzag with arrows curling from one function to the next; packages, review notes and steps are three or four equal columns. The gallery is a masonry of CSS columns (three at 300px minimum), each photo wrapped so its tape never splits from it.

Breakpoints step down at 1100px (steps go to two columns, step arrows drop), 900px (nav hides, hero stacks words, photo, actions; day, packages and notes go single column; the floating gallery note drops) and 640px (gallery goes two narrow columns, steps single column, header button shortens to "Check date"). Touch targets hold 44px minimum throughout.

## Elevation & Depth

Mostly flat paper, with one soft lift for things physically stuck onto it. Boxes drawn on the paper (cards, panels, the calendar, the bubble) have no shadow; their depth is the ink outline and the brighter raised sheet. Objects taped or placed onto the paper (photos and review notes) carry a short, soft lift as if they rest a millimetre above it. A dimmed ink backdrop sits behind the photo viewer.

### Shadow Vocabulary
- **Paper lift** (`box-shadow: 0 2px 3px rgb(17 17 17 / 0.08), 0 14px 26px -16px rgb(17 17 17 / 0.4)`): taped photos and review notes only.
- **Selected ring** (`box-shadow: 0 0 0 3px #ff6fae`): the chosen calendar date, outside its ink border.

### Named Rules
**The Drawn Versus Stuck Rule.** If it is drawn on the page it is flat; if it is stuck onto the page it lifts. The doubled outline behind buttons is a second pen line, not a shadow, and stays an unfilled stroke.

## Shapes

Every edge is hand drawn. Boxes use two deliberately uneven elliptical corner sets (sketch and its mirror, sketch-2) that read as a marker line wobbling round a rectangle; neighbouring boxes alternate between them so no two look stamped. Round things (number badges, calendar arrows, the FAQ toggle, calendar days) use slightly lopsided blob radii, never a perfect circle. Fields get small uneven corners (field), tick boxes smaller ones (tick), and photo mounts are nearly square (photo). The photograph inside a mount has square corners.

Stroke weight carries hierarchy: 2.5px for boxes and buttons, 3.5px for the picked package, 2px for fields and chips, 1.5px for photo mounts, and 2px dashed ink at 25 to 30% for dividers. Tilt is part of the shape language: photos at about plus or minus 1 degree, notes up to 2 degrees, handwritten asides 3 to 5 degrees.

## Components

### Buttons
Tactile and drawn: a filled marker box with a second pen line traced just off it.
- **Shape:** sketch corners, 2.5px ink border, minimum height 52px (46px in the header, 44px on phones), padding 0 1.5rem.
- **Primary:** Mehndi Highlighter fill, ink text, Shantell Sans 800 uppercase at 1.25rem, optional 22px stroked arrow icon.
- **Doubled outline:** a 1.5px ink line with the mirrored sketch corners, offset 3px right and down, behind the button.
- **Hover / Active:** the doubled line slides 2px further (200ms); pressing squashes to 97% with a 0.4 degree turn (140ms). Focus is the global 3px dashed ink outline, offset 3px.
- **Plain:** identical, on Clean Sheet instead of yellow. Used for secondary actions and every non picked package.

### Marker Link
- Shantell Sans 700 uppercase at 1.25rem, ink text, 3px Walima Highlighter underline. Pairs beside a primary button as the second choice.

### Chips (function choices)
- **Style:** Field White pill with sketch-2 corners, 2px ink border, Shantell Sans 700, a drawn 22px tick box (2px ink, tick corners, no padding or minimum height of its own) before the label. Focus rings the whole chip.
- **State:** checked draws a marker tick in the box and swipes that function's highlighter behind the chip (yellow mehndi, pink barat, teal walima); nikah checked gets a 3px ink underline instead.

### Cards / Containers
- **Corner Style:** sketch, alternating with sketch-2 between neighbours.
- **Background:** Clean Sheet.
- **Shadow Strategy:** none (drawn, see Elevation).
- **Border:** 2.5px ink; the picked package goes to 3.5px, mirrored corners and a 0.8 degree tilt, with a "most picked!" marker note and arrow outside its top corner.
- **Internal Padding:** 1.5rem, 2rem on the top of packages.
- Used for packages, comic panel steps, the calendar, the speech bubble, the enquiry sheet and the photo viewer.

### Inputs / Fields
- **Style:** Field White, 2px ink border, small uneven corners, 50px minimum height. The select is drawn too: native arrow removed, a hand drawn ink chevron 14px from the right.
- **Focus:** the global 3px dashed ink outline, offset 3px, the same ring as every other control.
- **Error:** 3px Fix-it Red border and a bold small Fix-it Red line under the field.

### Navigation
- Shantell Sans 700 uppercase links, 44px tall, no underline. Hover swipes a yellow highlighter in from the centre behind the word (220ms). Hidden under 900px, where the header keeps only the brand and the yellow date button.

### Taped Photo (signature)
Every photograph is a print taped to the page: a Clean Sheet mount (10px, 12px at the bottom), 1.5px ink edge, paper lift, a small tilt, and two translucent tape strips at the top corners angled minus 8 and plus 6 degrees. Gallery photos open a full size viewer on tap. A circled favourite gets a marker circle round the mount and a short note underneath ("Saad's favourite") with an arrow pointing back up at it, inside the same block so it never drifts away from its photo.

### Doodles (signature)
Marker arrows, swooshes, loops, ticks and circles, all 3.5px ink strokes (the swoosh 6px) with round caps. Each draws itself on once over 900ms when it enters view, and is fully drawn for reduced motion. A marker circle drawn round a word or a photo is the system's non colour emphasis. Round a word, the circle's box is sized so the drawn loop leaves about 0.3em clear on both sides of the word; round a photo it overhangs the mount by about 8% each side. Doodles are never clamped to their container width.

### Mascot (signature)
Saad as a doodle: round head, spiky hair, a yellow camera, a teal halo. Its face is state: happy for a free date, alert with a sweat drop for one team left, sorry for booked. It sits by the brand, in the hero, beside section titles and in the date answer.

### Review Note
A tilted Clean Sheet card (minus 2 to plus 1.5 degrees) with a faint 1.5px ink edge, paper lift and one tape strip across the top centre. Quote in the Note style, name in bold small Figtree. No highlighter tint: the notes carry no function.

### Disclosure (FAQ)
Questions in Title Small marker type, divided by 2px dashed ink at 30%. The toggle is a 36px lopsided ink ring holding a hand drawn plus; opening turns it 45 degrees into a cross (220ms) and fills it with Folded Corner.

## Do's and Don'ts

### Do:
- **Do** keep every highlighter on its job: yellow for mehndi and the main action, pink for barat and the hero phrase, teal for walima and free dates.
- **Do** use an ink underline or a drawn marker circle for any other emphasis.
- **Do** draw every box with the sketch corners and a 2.5px ink border, alternating sketch and sketch-2 between neighbours.
- **Do** tape photos on with two tape strips, a Clean Sheet mount and a small tilt, and keep each photo in its own block so its tape travels with it.
- **Do** set headings, buttons, labels, prices and asides in Shantell Sans uppercase or note case, and paragraphs in Figtree.
- **Do** put handwritten notes beside or outside what they point at, connected by a drawn arrow.
- **Do** let the mascot's face carry state instead of adding status colour.
- **Do** draw form controls and small icons (tick boxes, select chevrons, the FAQ plus) as ink strokes rather than shipping native chrome or typed characters.

### Don't:
- **Don't** use a dark full screen slideshow or a thin serif name; the page is cream paper and marker.
- **Don't** pick a highlighter for decoration or rotate highlighter colours through a list.
- **Don't** fill the doubled button outline into a solid offset shadow block; it is a pen line.
- **Don't** use perfect circles or uniform radii; round things are lopsided blobs.
- **Don't** stack a small label above a heading; notes sit beside things, with an arrow.
- **Don't** set body paragraphs in Shantell Sans or add a second display face.
- **Don't** add grey or coloured borders; every line is the one black ink, except Fix-it Red on a field to correct.
- **Don't** give a single control its own focus colour; every focus ring is the dashed ink outline.
