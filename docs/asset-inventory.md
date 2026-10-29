# Asset inventory

Inspected 28 October 2026. Original filenames were not changed.

Reference screenshots in `public/assets/references/` are for visual comparison only. They are not production backgrounds or substitutes for page components. Photographs and SVGs live in separate folders.

`public/assets/fonts/` exists and is empty. `src/fonts/` contains only `.gitkeep`. No font family can be verified from these files.

`public/images/` and `public/icons/` are older empty placeholder folders (`.gitkeep` only). The supplied files are under `public/assets/`.

Registration screenshot filenames use an em dash (`—`, U+2014). `WHO ARE YOU REGISTERING_.png` uses an underscore. `Schools _ Poorna Mountaineering Academy.png` uses an underscore where the Figma frame name uses a pipe.

## Reference screenshots (15)

All are PNG, 1440 px wide.

| File | Size | Screen |
| --- | --- | --- |
| `Poorna Malavath landing page.png` | 1440×6142 | Home |
| `About Poorna Malavath.png` | 1440×5060 | About |
| `Poorna Malavath achievements.png` | 1440×5852 | Achievements |
| `Poorna Mountaineering Academy.png` | 1440×3444 | Training |
| `Schools _ Poorna Mountaineering Academy.png` | 1440×4597 | Schools |
| `Stories and Inspiration.png` | 1440×6324 | Stories |
| `Media and press.png` | 1440×4755 | Media |
| `gallery.png` | 1440×3407 | Gallery |
| `Contact.png` | 1440×4279 | Contact |
| `Register for Training — WHO ARE YOU REGISTERING_.png` | 1440×1120 | Register step 1 |
| `Register for Training — SELECT A PROGRAM.png` | 1440×1120 | Register step 2 |
| `Register for Training — PARTICIPANT DETAILS.png` | 1440×1120 | Register step 3 |
| `Register for Training — PARENT OR GUARDIAN.png` | 1440×1120 | Register step 4 |
| `Register for Training — PREFERRED DATE & LOCATION.png` | 1440×1120 | Register step 5 |
| `Register for Training — REVIEW & SUBMIT.png` | 1440×1120 | Register step 6 |

## Photographs (22)

All are PNG in `public/assets/images/`. Purpose is from the picture, not the filename. Several filenames do not describe the picture.

| File | Pixels | What the picture shows | Likely use |
| --- | --- | --- | --- |
| `Hero image.png` | 1440×768 | Red beanie, sunset, snow peaks | Home hero and Achievements hero |
| `About Hero image.png` | 1440×688 | Green cap, pink jacket, rocky background | About hero |
| `Training image.png` | 1440×688 | Roped team on a snow ridge | Training hero and Schools hero |
| `School program image.png` | 1440×370 | Green cap with schoolchildren, wide banner | Home “mountain is a classroom” banner |
| `Program image.png` | 424×238 | Green cap and pink jacket, card crop | Home program card |
| `Program image (1).png` | 424×238 | Blue jacket headshot | Home program card |
| `Program image (2).png` | 424×238 | White blazer and microphone, card crop | Home program card; same scene as `Expedition photo.png` |
| `Expedition photo.png` | 560×440 | White blazer and microphone. Not an expedition landscape | Same scene as `Program image (2).png`. Placement needs confirmation |
| `Mountain training group.png` | 870×650 | Green blazer, microphone, “BATHS ALL-R LEAGUE 2024”. Not a training group | Stories, Gallery, and Media heroes |
| `Instructor briefing students2.png` | 730×504 | Beige blazer in front of Indian flags. Not a student briefing | Stories flag portrait |
| `Academy training.png` | 590×462 | Four people handling an orange rope on a rocky trail | Training “classroom” section. Schools reuse needs confirmation |
| `Instructor briefing students.png` | 620×610 | Instructor kneeling to check a student’s harness | Training and/or Schools instruction section. Exact section needs confirmation |
| `Rope skills training.png` | 600×436 | Instructor and two students with a rope in fog | Training capability section |
| `Mountain portrait.png` | 560×500 | Blue shirt, cap, trekking poles, snow peaks | Achievements or About mountain portrait. Exact section needs confirmation |
| `Instructor portrait.png` | 500×430 | Blue blouse, outdoor smile | Contact hero. Confirm it is not also used elsewhere |
| `Portrait.png` | 570×560 | Striped shirt and microphone | Home leadership portrait or Achievements portrait. Needs confirmation |
| `Story image.png` | 455×390 | Orange helmet, light-blue shirt, rock face | Home story card |
| `Story image (1).png` | 423×154 | Purple jacket on a glacier, tight crop | Story or gallery thumbnail. Needs confirmation |
| `Story image (2).png` | 423×154 | Smile against wood panels | Story thumbnail. Needs confirmation |
| `Story image (3).png` | 423×154 | Studio headshot on white | Story or media thumbnail. Needs confirmation |
| `Story image (4).png` | 407×154 | Green cap and sunglasses, tight crop | Story thumbnail. Needs confirmation |
| `Poorna on the trail.png` | 660×484 | Indoor green-blazer portrait. Not a trail | Needs confirmation |
| `Student portrait.png` | 600×476 | Beige blazer and blue shirt against wood panels | Stories or media portrait. Needs confirmation |

## Logos and icons (4)

| File | Format | What it draws | Likely use |
| --- | --- | --- | --- |
| `public/assets/logos/mountain-snow.svg` | SVG, 24×24, white stroke | Mountain peaks | Header logo mark on every screen |
| `public/assets/icons/Group.svg` | SVG, 18×22, white stroke | Person | Registration “Individual” icon. Confirm |
| `public/assets/icons/hugeicons_school-01.svg` | SVG, 24×24, white stroke | School building | Registration “School or group” icon, and possibly Schools. Confirm |
| `public/assets/icons/Vector.svg` | SVG, 24×24, white stroke | Two figures with flag-like shapes | Needs confirmation |

## Screen-to-asset mapping

Shared on the designed screens: `mountain-snow.svg` as the logo mark. The wordmark is set in type, not supplied as an SVG.

| Screen | Reference file | Supplied production assets visibly matched | Not found as separate files |
| --- | --- | --- | --- |
| Home | `Poorna Malavath landing page.png` | `Hero image.png`; `Program image.png`; `Program image (1).png`; `Program image (2).png`; `School program image.png`; `Story image.png` | Other two story-card crops are not a confident match. Impact icons are not in `icons/` |
| About | `About Poorna Malavath.png` | `About Hero image.png` | Timeline and secondary portraits are not confidently matched |
| Achievements | `Poorna Malavath achievements.png` | `Hero image.png` for the hero | Kilimanjaro, Mont Blanc, and Aconcagua stills are not in `images/` |
| Training | `Poorna Mountaineering Academy.png` | `Training image.png`; `Rope skills training.png`; `Academy training.png` likely | Program-card icons are not in `icons/` |
| Schools | `Schools _ Poorna Mountaineering Academy.png` | `Training image.png` for the hero | Outcome and instructor photos need confirmation against `Instructor briefing students.png` |
| Stories | `Stories and Inspiration.png` | `Mountain training group.png`; `Instructor briefing students2.png` | Editorial row crops need confirmation |
| Media | `Media and press.png` | `Mountain training group.png` for the hero | Coverage thumbnails and press-kit stills are only partly covered by the card crops above |
| Gallery | `gallery.png` | `Mountain training group.png` for the hero | Several grid tiles do not have a confident file match |
| Contact | `Contact.png` | `Instructor portrait.png` likely for the hero | No separate map or office photograph |
| Register steps 1–6 | The six `Register for Training — …` files | `mountain-snow.svg`. `Group.svg` and `hugeicons_school-01.svg` are the likely step-1 choice icons | The helmet-group sidebar photograph is not in `images/`. Step 2–5 choice icons are not in `icons/` |

## Needs confirmation

- `Expedition photo.png` (filename does not match the microphone portrait)
- `Poorna on the trail.png` (indoor portrait)
- `Student portrait.png`
- `Portrait.png` (home versus achievements)
- `Mountain portrait.png`
- `Instructor briefing students.png` (training versus schools)
- `Academy training.png` if it is also used on Schools
- `Story image (1).png` through `Story image (4).png`
- `Group.svg`, `hugeicons_school-01.svg`, and `Vector.svg`

## Missing

- Font files. The exact font family is still unverified.
- Wordmark SVG, social icons, and most UI icons.
- Separate summit photographs shown on Achievements.
- Registration sidebar photograph.
- A complete set of gallery and media thumbnails.
