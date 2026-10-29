# Implementation tracker

Status date: 2026-10-29

The website is not complete. Home, About, Achievements, Training, Schools, Stories, Media, Gallery, and Contact are implemented and compared with their desktop references. The six registration routes are now one connected flow with their own header and footer. Home keeps its original footer. About and Achievements reuse the About footer variant. Training and Schools use the Training footer variant. Stories, Media, Gallery, and Contact each use their own footer. The public header now collapses into a Menu button below 980px. Desktop header layout is unchanged.

Routes are provisional.

Legend:

- Structure: Figma section names are listed on the route.
- Visual: not compared with Figma.
- Assets: none supplied.
- Responsive: no tablet or mobile frames exist in Figma, and none were implemented.
- Checks: recorded after the foundation type-check, lint, and build.

| Screen | Route | Sections | Assets | Interactions | Responsive | Visual comparison | Type-check | Lint | Build |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Home | `/` | All 10 sections implemented | Photographs and mountain mark mapped below. Voice avatars, achievement icons, and social icons were not supplied. | Working internal links. No form submission. | Desktop reference only. No tablet or mobile frame exists. At 390px the shared header opens from a Menu button and the page does not overflow. | Compared with `Poorna Malavath landing page.png` (1440×6142). Page height about 5648 px. Not pixel-perfect. | Passed | Passed | See latest check |
| About | `/about` | All 6 sections implemented | Photographs listed below. Challenge marks are provisional drawings. | Header links. Explore Her Journey scrolls to the story. Keep climbing opens Training. Footer contact labels open Contact. | Desktop reference only. No tablet or mobile frame exists. At 390px the shared header opens from a Menu button and the page does not overflow. | Compared with `About Poorna Malavath.png` (1440×5060). Page height about 5067 px. Not pixel-perfect. | Passed | Passed | See latest check |
| Achievements | `/achievements` | All sections implemented | Photographs listed below, including Kilimanjaro, Elbrus, and Aconcagua stills. | Explore the milestones scrolls to Major Summits. Media items and Watch the story open `/media`. Book a school session opens `/schools`. Invite Poorna to speak opens `/contact`. | Desktop reference only. No tablet or mobile frame exists. At 390px the shared header opens from a Menu button and the page does not overflow. | Compared with `Poorna Malavath achievements.png` (1440×5852). Page height about 5537 px. Not pixel-perfect. | Passed | Passed | See latest check |
| Training | `/training` | All 6 sections implemented | Photographs listed below. Program and focus icons are inline drawings. | Explore academy programs scrolls to Programs. Enrollment actions open `/register`. | Desktop reference only. No tablet or mobile frame exists. At 390px the shared header opens from a Menu button and the page does not overflow. | Compared with `Poorna Mountaineering Academy.png` (1440×3444). Page height about 3555 px. Not pixel-perfect. | Passed | Passed | Passed |
| Schools | `/schools` | All 5 sections implemented | Photographs listed below. Program, outcome, and safety icons are inline drawings. | Plan and request actions open `/register`. Talk to the academy opens `/contact`. | Desktop reference only. No tablet or mobile frame exists. At 390px the shared header opens from a Menu button and the page does not overflow. | Compared with `Schools _ Poorna Mountaineering Academy.png` (1440×4597). Page height about 4547 px. Not pixel-perfect. | Passed | Passed | Passed |
| Stories | `/stories` | All 11 sections implemented | Photographs listed below. The weather-card photograph was not supplied. | Category tabs filter the field-notes cards. Story links open existing routes or in-page sections. The follow field does not subscribe. | Desktop reference only. No tablet or mobile frame exists. At 390px the shared header opens from a Menu button and the page does not overflow. | Compared with `Stories and Inspiration.png` (1440×6324). Page height about 5900 px after the story photos were framed to their wide crops. Not pixel-perfect. | Passed | Passed | Passed |
| Media | `/media` | All 6 sections implemented | Photographs listed below. Press files and publication URLs were not supplied. | Coverage, interviews, videos, articles, and download controls open the enquiry panel. Contact the media team opens `/contact`. | Desktop reference only. No tablet or mobile frame exists. At 390px the shared header opens from a Menu button and the page does not overflow. | Compared with `Media and press.png` (1440×4755). Page height about 4269 px. Not pixel-perfect. | Passed | Passed | Passed |
| Gallery | `/gallery` | All sections implemented | Photographs listed below. The folder does not contain 56 photographs. | Collection tabs filter the grid. A photograph opens a preview that closes with Escape or Close. Load more reveals the remaining supplied photographs. Plan a School Program opens `/schools`. | Desktop reference only. No tablet or mobile frame exists. At 390px the shared header opens from a Menu button and the page does not overflow. | Compared with `gallery.png` (1440×3407). Page height about 2902 px. Not pixel-perfect. | Passed | Passed | Passed |
| Contact | `/contact` | All 7 sections implemented | Photographs listed below. No map, social profiles, or form endpoint were supplied. | The form validates on the page and does not claim a message was sent. Route cards set the enquiry type. FAQ items open and close. | Desktop reference only. No tablet or mobile frame exists. At 390px the shared header opens from a Menu button and the page does not overflow. | Compared with `Contact.png` (1440×4279). Page height about 3478 px. Not pixel-perfect. | Passed | Passed | Passed |
| Register — who | `/register` | Header, progress, choice form, guidance sidebar, footer | Mountain mark and rope-skills sidebar photograph | Participant type is required before `/register/program`. School groups can enter an estimated size. | Desktop reference is 1440×1120. Page height about 855 px at a 1440 layout. At 390 px the document does not overflow. | Compared with `Register for Training - WHO ARE YOU REGISTERING_.png`. Not pixel-perfect. | Passed | Passed | See latest check |
| Register — program | `/register/program` | Header, progress, program cards, guidance sidebar, footer | Same registration chrome | A program is required before participant details. | Page height about 852 px at 1440. No document overflow at 390 px. | Compared with `Register for Training - SELECT A PROGRAM.png`. Not pixel-perfect. | Passed | Passed | See latest check |
| Register — participant | `/register/participant` | Header, progress, participant form, guidance sidebar, footer | Same registration chrome | Required school or individual fields block Continue. Values stay in the session draft. | Page height about 1180 px at 1440. No document overflow at 390 px. | Compared with `Register for Training - PARTICIPANT DETAILS.png`. The visible frame is the school form. Not pixel-perfect. | Passed | Passed | See latest check |
| Register — guardian | `/register/guardian` | Header, progress, guardian choices, guidance sidebar, footer | Same registration chrome | A handling choice is required. Guardian fields are required only for “Add guardian contact”. | Page height about 921 px at 1440. No document overflow at 390 px. | Compared with `Register for Training - PARENT OR GUARDIAN.png`. Not pixel-perfect. | Passed | Passed | See latest check |
| Register — schedule | `/register/schedule` | Header, progress, date and location form, guidance sidebar, footer | Same registration chrome | Start date, location, and city are required. The page says the choice is a preference. | Page height about 1090 px at 1440. No document overflow at 390 px. | Compared with `Register for Training - PREFERRED DATE & LOCATION.png`. Not pixel-perfect. | Passed | Passed | See latest check |
| Register — review | `/register/review` | Header, progress, summary, payment choice, acknowledgements, guidance sidebar, footer | Same registration chrome | Edit links return to earlier steps. Submit does not claim success. | Page height about 1002 px at 1440. No document overflow at 390 px. | Compared with `Register for Training - REVIEW & SUBMIT.png`. Not pixel-perfect. | Passed | Passed | See latest check |

## Home implementation

Reference: `public/assets/references/Poorna Malavath landing page.png`, measured at 1440×6142.

Sections, in order: header and hero, purpose, programs, school program banner, achievements, leadership story, next expedition, training stories, voices, closing callout, footer.

Photographs used, after visual comparison with the reference:

- `public/assets/images/Hero image.png` — hero
- `public/assets/images/Mountain portrait.png` — purpose and Adventure Camp story
- `public/assets/images/Program image.png` — For Children and Outdoor Training
- `public/assets/images/Program image (1).png` — For Schools and Leadership Workshop
- `public/assets/images/Program image (2).png` — For Individuals
- `public/assets/images/School program image.png` — school banner
- `public/assets/images/Portrait.png` — leadership portrait
- `public/assets/images/Expedition photo.png` — next expedition image. The file is a microphone portrait, not a landscape.
- `public/assets/logos/mountain-snow.svg` — mountain mark only. The wordmark is text.
- `public/assets/icons/Group.svg` and `public/assets/icons/hugeicons_school-01.svg` — program card marks

Not used, because the files do not match the Home frame: `Mountain training group.png`, `Poorna on the trail.png`, `Story image.png`.

Gaps:

- Font family is still unverified. The page uses the provisional system-ui stack in `src/styles/tokens.css`.
- Colors and spacing were sampled from the reference PNG. They are not Figma inspect tokens.
- Voice avatars are initials. No matching portrait files were supplied.
- Achievement, value-card, and social icons are simple inline drawings. They are not supplied Figma assets.
- Social profiles have no URLs, so the icons are not links.
- Privacy Policy, Terms, and Sitemap are labels only. Those screens do not exist.
- “Follow for latest updates” opens Contact. There is no newsletter endpoint.
- Upcoming Batches and Completed Trainings open Training. They are not separate screens.
- The dev overlay reported a hydration attribute mismatch. The differing attributes were `data-cursor-ref` values injected by the browser tool, not application markup.

## About implementation

Reference: `public/assets/references/About Poorna Malavath.png`, measured at 1440×5060.

Sections, in the order shown in that file: header and About hero, story and early life, mountaineering journey and challenges, philosophy, mission and vision, milestones timeline, closing callout, and the About footer.

Photographs used after visual comparison:

- `public/assets/images/About Hero image.png` — hero. Green cap, orange-tinted sunglasses, pink jacket, rocky slope.
- `public/assets/images/Mountain portrait.png` — “Her story” portrait. Blue shirt, cap, trekking poles, snow peak.
- `public/assets/images/Program image.png` — preparation card. Green cap, pink jacket, mountain background.
- `public/assets/images/School program image.png` — milestone banner. Green cap with schoolchildren and forested peaks.
- `public/assets/logos/mountain-snow.svg` — shared header and footer mark.

Not used on About, because they do not appear in the reference: `Portrait.png`, `Poorna on the trail.png`, `Story image.png`.

The About footer is a content variant of the shared footer. Home still uses the original footer copy, including the email, phone, and “Dream · Explore · Inspire”.

Gaps:

- Font family and exact Figma tokens are still unverified.
- Challenge, mission, and vision icons are simple inline drawings. Those icon files were not supplied.
- Timeline cards do not include the small arrow and flag marks from the reference.
- “Keep climbing · Keep learning” opens `/training`. Invite Poorna, Partner with us, Media enquiries, and Contact all open `/contact`. Separate destinations were not in the readable prototype.
- Privacy Policy, Terms, and Sitemap remain labels. Those screens do not exist.
- Social icons are not links. Profile URLs were not supplied.
- The scaled page height was about 5116 px against the 5060 px reference.

## Achievements implementation

Reference: `public/assets/references/Poorna Malavath achievements.png`, measured at 1440×5852.

Sections, in the order shown in that file: header and achievements hero with summary metrics, major summits and expeditions, awards and recognition, records, media appearances, closing callout, and the About-style footer.

Photographs used after visual comparison:

- `public/assets/images/Hero image.png` — hero. Red beanie, sunglasses, sunset peaks. Matches the Achievements reference crop.
- `public/assets/images/Mountain portrait.png` — Everest defining-ascent card. Blue shirt, white-and-green cap, trekking poles, snow peak.
- `public/assets/images/Program image.png` — expedition banner and media feature film still. Green cap, pink jacket.
- `public/assets/images/Portrait.png` — records portrait. Striped shirt with microphone.
- `public/assets/logos/mountain-snow.svg` — “Across every continent” mark and shared header/footer mark.
- `public/assets/images/Mt_kilimanjaro.png` — Kilimanjaro card. Sunrise peak above the clouds.
- `public/assets/images/Mt_elbrus.png` — Elbrus card. Snow peak under a blue sky.
- `public/assets/images/Acanguaga.png` — Aconcagua card. The filename keeps the supplied spelling. Snow peak beyond brown Andean ridges.

The biographical film still for the “Poorna” media card was not supplied; that card is a navy text block with a play link to `/media`.

Gaps:

- Font family and exact Figma tokens remain unverified.
- Award cards use the supplied orange line icons inside the circles: `medal.svg` (Tenzing Norgay), `award.svg` (First Ladies), `star.svg` (Malala), and `users.svg` (youth inspiration). These are not official award crests.
- Media rows use `mic-2.svg` on the two interviews and `newspaper.svg` on the two profiles. External article URLs were not supplied, so those rows open `/media`.
- Active nav underline for Achievements is bold text only; the reference shows an orange underline. The desktop active style is still bold text only. The mobile menu does not add an orange underline.
- Scaled page height was about 5554 px against the 5852 px reference.

## Training implementation

Reference: `public/assets/references/Poorna Mountaineering Academy.png`, measured at 1440×3444.

Sections, in the order shown in that file: header and academy hero, academy introduction, programs, training focus, enrollment callout, and the Training footer.

Photographs used after visual comparison:

- `public/assets/images/Training image.png` — hero. Roped team on a snow ridge, red helmet in front.
- `public/assets/images/Academy training.png` — “The mountain becomes a classroom.” Four people with an orange rope on a rocky trail.
- `public/assets/images/Rope skills training.png` — training-focus photograph. Instructor and two students with a rope in fog.

Not used on Training, because they do not match this reference: `Program image.png`, `Program image (1).png`, `Program image (2).png`, `Mountain portrait.png`, and `Instructor briefing students.png`.

The Training footer is a third variant of the shared footer. Home still uses the original copy. About and Achievements still use the About variant, including “Group training”, “Contact”, and Sitemap.

Gaps:

- Font family and exact Figma tokens remain unverified.
- Program-card and focus-chip icons are simple inline drawings. Matching icon files were not supplied. `Group.svg` and `Vector.svg` are white registration marks and do not match these orange line icons.
- The shared header shows Training in bold only. The reference also has an orange underline. The desktop active style is still bold text only. The mobile menu does not add an orange underline.
- “Find the right program”, “Enquire about training”, “Plan a group program”, and footer “Join a program” open `/register`. There is no separate group-planning or enquiry screen.
- Footer “College groups” and “Team training” open `/training`. Those are not separate routes. “Schools” opens `/schools`. Partner, Invite Poorna, and Media enquiries open `/contact`.
- Privacy Policy and Terms remain labels. The Training reference does not show Sitemap.
- Scaled page height was about 3555 px against the 3444 px reference.
- At 390px the shared header used to overflow. The 2026-10-29 menu fix removed that overflow. Training sections stack and do not add their own horizontal overflow.

## Schools implementation

Reference: `public/assets/references/Schools _ Poorna Mountaineering Academy.png`, measured at 1440×4597. The full frame was not sent to the model. It was sliced into 760 px-tall images for inspection, then discarded from the temp folder after comparison.

Sections, in the order shown in that file: header and schools hero, school programs, more ways to partner, student outcomes, what a program includes, safety and guidance, closing call to action, and the Training-style footer.

Photographs used after visual comparison:

- `public/assets/images/Training image.png` — hero. Roped team on a snow ridge, red helmet in front. Same scene as the Schools hero.
- `public/assets/images/Rope skills training.png` — student-outcomes photograph. Instructor with two students and an orange rope.
- `public/assets/images/Instructor briefing students.png` — safety photograph. Instructor kneeling to check a harness, students in blue helmets, snowy peaks.

Not used on Schools, because they do not match this reference: `School program image.png` (Poorna with schoolchildren), `Academy training.png` (four people with an orange rope on a rocky trail). Those files were left unchanged. No photograph was resized or replaced. CSS cover crops are used. If a tighter crop is needed, replace the source file later.

The Schools footer reuses the Training footer variant. The reference shows the same quick links, program list, contact links, and Privacy Policy / Terms line, without Sitemap. Home, About, and Achievements footers were not changed.

Gaps:

- Font family and exact Figma tokens remain unverified.
- Program, outcome, inclusion, and safety icons are simple inline drawings. Matching icon files were not supplied.
- The shared header shows For Schools in bold only. The reference also has an orange underline. The desktop active style is still bold text only. The mobile menu does not add an orange underline.
- “Plan a school program” and “Request a School Program” open `/register`. “Talk to the academy” opens `/contact`. There is no separate school-enquiry screen.
- Privacy Policy and Terms remain labels.
- Scaled page height was about 4547 px against the 4597 px reference, measured at a 1440 px layout width.
- At 390px the shared header used to overflow to about 631 px. The 2026-10-29 menu fix removed that overflow. Schools sections stack and do not add their own horizontal overflow.
- The dev overlay reported a hydration attribute mismatch. The differing attributes were `data-cursor-ref` values injected by the browser tool, not application markup.

## Stories implementation

Reference: `public/assets/references/Stories and Inspiration.png`, measured at 1440×6324. The full frame was sliced into shorter images for inspection. Those slices were not used as production images.

Sections, in the order shown in that file: header and stories hero, Poorna journey feature, story categories, featured story, editorial collection, student transformation, mountain lessons, motivation article, interview spotlight, follow-stories panel, and the Stories footer.

Photographs used after visual comparison:

- `public/assets/images/Mountain training group.png` — hero. Green blazer, microphone, Baths All-R League 2024 banner.
- `public/assets/images/Poorna on the trail.png` — journey card. Green blazer and a broad smile against an orange wall. This is a different photograph from the hero.
- `public/assets/images/Instructor briefing students2.png` — featured story. Beige blazer, pink shirt, Indian flags.
- `public/assets/images/Story image.png` — “Finding a steady pace” and the motivation article. Both show the orange helmet and blue TARC vest, so the same file is used in both places.
- `public/assets/images/Story image (4).png` — “Trust begins with the rope team.” Cap and sunglasses.
- `public/assets/images/Story image (3).png` — “Small habits before brave moments.” Plain-background portrait.
- `public/assets/images/Story image (2).png` — “Why calm communication matters.” Smile against wood panels.
- `public/assets/images/Story image (1).png` — “The day asking for help felt strong.” Magenta jacket, arms crossed, snow.
- `public/assets/images/Student portrait.png` — student transformation. Light blazer and blue shirt against wood panels.
- `public/assets/images/Instructor portrait.png` — interview spotlight. Blue blouse, outdoor smile.

Not used, because they do not match this reference: `Portrait.png`, `Expedition photo.png`, and the training rope photographs.

`public/assets/images/Mt_kilimanjaro.png` is used on “Read the weather before ambition.” The supplied story thumbnails did not show a face in a pink jacket and sunglasses. This summit photograph shows a peak above a sea of clouds, which matches the weather lesson. It is also used on Achievements.

The Stories footer is separate from the shared footer. It uses Explore, Training, and Resources columns, the academy blurb, and Privacy Policy, Terms & Safety, and Accessibility. Home, About, Achievements, Training, and Schools footers were not changed.

Interactions:

- The page first shows every field-notes card, with Student Stories highlighted, matching the reference frame.
- Choosing a category filters those cards. Choosing the active category again restores the full collection.
- Tabs use a tablist, roving tabindex, arrow keys, and a visible focus style.
- “Begin with Poorna’s journey” scrolls to the journey section. “Read Poorna’s story” opens `/about`. Training-story links open `/training`. The interview link opens `/media`. Student, mountain, and motivation reads move to sections on this page. There are no article pages.
- “Follow stories” opens `/contact`. The email field is not named, so the address is not submitted. There is no newsletter endpoint and no success message.
- Footer “Outdoor camps” opens `/training`. “Safety approach” opens `/schools`. “Frequently asked questions” opens `/contact`. Those screens are not separate routes. Privacy Policy, Terms & Safety, and Accessibility remain labels.

Gaps:

- Font family and exact Figma tokens remain unverified.
- Category, lesson, and journey icons are simple inline drawings.
- The shared header shows Stories in bold only. The reference also has an orange underline. The desktop active style is still bold text only. The mobile menu does not add an orange underline.
- Scaled page height was about 5900 px against the 6324 px reference, measured at a 1440 px layout width. The field-note photos use the wide supplied crops, so those cards are shorter than the reference frames.
- At 390px the shared header used to overflow to about 630 px. The 2026-10-29 menu fix removed that overflow. Stories sections stack and do not add their own horizontal overflow.
- The dev overlay reported a hydration attribute mismatch from `data-cursor-ref` values injected by the browser tool.

## Media implementation

Reference: `public/assets/references/Media and press.png`, measured at 1440×4755.

Sections, in order: header and media hero, news coverage with featured cards and recent mentions, editorial library (featured audio, interviews, videos, articles), press resources, media enquiry panel, and the Media footer.

Photographs used after visual comparison:

- `public/assets/images/Mountain training group.png` — hero, “What Everest taught me about preparation,” and the speaker portrait. Olive blazer, microphone, Baths All-R League 2024 banner.
- `public/assets/images/Student portrait.png` — BBC World Service card and the expedition portrait. Light blazer and blue shirt against wood panels.
- `public/assets/images/Story image (4).png` — The Hindu card. Cap and sunglasses.
- `public/assets/images/Instructor briefing students2.png` — National Geographic India card. Beige blazer and Indian flags.
- `public/assets/images/Instructor portrait.png` — featured audio and the outdoor portrait. Blue blouse, outdoor smile.
- `public/assets/images/Story image.png` — academy basecamp video and the summit-training photograph. Orange helmet and blue TARC vest.
- `public/assets/images/Story image (1).png` — “When girls see the summit.” Magenta jacket on snow. The supplied file is cropped through the shoulders, so the face and sunglasses in the reference are not in the file.

No outlet logos were supplied. Publication names are the labels transcribed from the reference. There is no separate beige-suit gesturing still, indoor arms-crossed training portrait, or press-kit ZIP.

The Media footer is separate from the shared footer. Columns are Explore, Programs, and Resources. The legal line reads Privacy Policy, Terms & Usage, and Accessibility. Home, About, Achievements, Training, Schools, and Stories footers were not changed.

Interactions:

- “Read the conversation” scrolls to the conversations section.
- “Contact the media team” in the news introduction scrolls to the enquiry panel. The enquiry button opens `/contact`.
- Coverage cards, recent mentions, interviews, videos, articles, and the press-kit and photograph controls open `#enquiry`. No article, video, or download files were supplied, so those controls do not open invented URLs or start a download.
- “View video archive” and “Browse all writing” stay on the videos and articles already on this page.
- Email addresses use `mailto:media@poornamalavath.com`.
- Footer “Training camps” and “Outdoor learning” open `/training`. “Media gallery” opens `/gallery`. “Media enquiries” and “Contact the academy” open `/contact`. Privacy Policy, Terms & Usage, and Accessibility remain labels.

Gaps:

- Font family and exact Figma tokens remain unverified.
- The shared header shows Media in bold only. The reference also has an orange underline. The desktop active style is still bold text only. The mobile menu does not add an orange underline.
- Scaled page height was about 4269 px against the 4755 px reference, measured at a 1440 px layout width.
- At 390px the shared header used to overflow to about 630 px. The 2026-10-29 menu fix removed that overflow. Media sections stack and do not add their own horizontal overflow.
- The dev overlay reported a hydration attribute mismatch from `data-cursor-ref` values injected by the browser tool.

## Gallery implementation

Reference: `public/assets/references/gallery.png`, measured at 1440×3407.

Sections, in order: header and gallery hero, archive introduction, collection filters and photo grid, load-more bar, school-program callout, and the Gallery footer.

Photographs used for the nine frames visible in the reference:

- `public/assets/images/Poorna on the trail.png` — large expeditions frame. Olive blazer against an orange wall.
- `public/assets/images/Instructor briefing students2.png` — academy briefing. Beige blazer and Indian flags.
- `public/assets/images/Story image.png` — rock-craft frame. Orange helmet and blue TARC vest.
- `public/assets/images/Story image (4).png` — schools frame. Cap and sunglasses.
- `public/assets/images/Story image (1).png` — summit-day frame. Magenta jacket on snow. The file is cropped through the shoulders, so the face and sunglasses in the reference are not in the picture.
- `public/assets/images/Story image (3).png` — skills-practice portrait. Plain light background.
- `public/assets/images/Student portrait.png` — childhood frame. Light blazer and blue shirt against wood panels. This is an adult portrait, not a childhood photograph.
- `public/assets/images/Mountain training group.png` — hero and the awards frame. Olive blazer, microphone, Baths All-R League 2024 banner.
- `public/assets/images/Instructor portrait.png` — media frame. Blue blouse, outdoor smile.

Load more reveals four more supplied photographs: `Mt_kilimanjaro.png`, `Mountain portrait.png`, `Rope skills training.png`, `School program image.png`, and `Portrait.png` for Events. The reference grid shows nine frames while its label says eight highlights. The page count follows the frames on screen.

The hero line “56 photographs · 7 collections” is the reference label. The image folder does not contain 56 photographs, and there is no separate events archive beyond the speaking portrait.

The Gallery footer is separate from the shared footer. Resources are Media gallery, Media enquiries, Frequently asked questions, and Contact the academy. Home, About, Achievements, Training, Schools, Stories, and Media footers were not changed.

Interactions:

- Collection tabs filter the photographs. Arrow keys, Home, and End move between tabs. The visible count updates.
- Choosing a collection shows every supplied photograph in that collection, including ones held behind Load more.
- Load more moments reveals the remaining supplied photographs and then the button is removed. It does not invent further images.
- Each photograph opens a preview. Close and Escape dismiss it, and focus returns to the photograph button.
- Explore the visual archive scrolls to the grid. Plan a School Program opens `/schools`.
- Footer Training camps and Outdoor learning open `/training`. Media enquiries, Frequently asked questions, and Contact the academy open `/contact`. Privacy Policy, Terms & Usage, and Accessibility remain labels.

Gaps:

- Font family and exact Figma tokens remain unverified.
- The shared header shows Gallery in bold only. The reference also has an orange underline. The desktop active style is still bold text only. The mobile menu does not add an orange underline.
- Scaled page height was about 2902 px against the 3407 px reference, measured at a 1440 px layout width.
- At 390px the shared header used to overflow to about 630 px. The 2026-10-29 menu fix removed that overflow. Gallery sections stack and do not add their own horizontal overflow.
- The dev overlay reported a hydration attribute mismatch from `data-cursor-ref` values injected by the browser tool.

## Contact implementation

Reference: `public/assets/references/Contact.png`, measured at 1440×4279.

Sections, in order: header and contact hero, enquiry workspace, inquiry routing, visit and connect, FAQ, conversation callout, and the Contact footer.

Photographs used:

- `public/assets/images/Instructor portrait.png` — hero. Blue blouse, outdoor smile.
- `public/assets/images/Story image.png` — visit photograph. Orange helmet and blue TARC vest.

The Contact footer is separate from the shared footer. Resources are Media gallery, Media enquiries, Press kit, and Contact the academy. Home, About, Achievements, Training, Schools, Stories, Media, and Gallery footers were not changed.

Interactions:

- Required fields are name, email, enquiry type, and message. Phone is optional and is checked only when it is filled. Organisation is optional. Errors stay beside the fields and the entered values remain.
- A valid form does not show a success message. There is no enquiry endpoint. The page says the enquiry cannot be delivered yet and points to `hello@poornamalavath.com`.
- Route cards and “Use the general enquiry form” set the enquiry type and move to the form.
- `hello@poornamalavath.com`, `media@poornamalavath.com`, and `+91 84555 02116` are the addresses printed on this reference. They are mailto and tel links on this page only. The Home footer was not changed.
- FAQ questions open and close from the button. The school-booking answer is the one printed in the reference. The other four answers were not in the reference or the project, so those panels say so instead of inventing guidance.
- “See enquiry guidance” and “Start a conversation” move to the FAQ and the form. Press kit opens `/media#press`.
- “Get directions” and the social labels are not links. No map or profile URLs were supplied. The address, hours, and visit notice are the words printed on the reference.

Gaps:

- Font family and exact Figma tokens remain unverified.
- The shared header shows Contact in bold only. The reference also has an orange underline. The desktop active style is still bold text only. The mobile menu does not add an orange underline.
- The closed enquiry menu in the reference does not show its options. The page uses the four route cards plus General enquiry.
- Scaled page height was about 3478 px against the 4279 px reference, measured at a 1440 px layout width.
- At 390px the shared header used to overflow to about 630 px. The 2026-10-29 menu fix removed that overflow. Contact sections stack and do not add their own horizontal overflow.
- The dev overlay reported a hydration attribute mismatch from `data-cursor-ref` values injected by the browser tool.

## Registration implementation

The six routes are one flow. Each page has a registration header, a six-step progress bar, a form card, a guidance sidebar, and a short footer. These pages do not render the public header or footer, because the registration references use a different chrome. The registration header was not redesigned when the public header gained its mobile menu. Global tokens were left unchanged.

Shared state is a typed draft. After the page mounts, it is read from and written to `sessionStorage` under `poorna-registration-v1`. The server render and the first client render both start from an empty draft, so they match. A later step opened without the required earlier answers moves to the earliest incomplete step. Back links and the browser Back button leave the saved draft in place. A refresh on a mid-flow route restores the draft.

Validation runs in the browser. Missing choices and required fields show an inline message and focus moves to the first invalid control. The school participant form follows the participant-details reference. The individual path asks for name, email, mobile, and age range; that path is not a separate reference frame. Guardian name, relationship, email, mobile, and the consent checkbox are required only when “Add guardian contact” is selected. “School manages consent” and “Not required” need no extra fields. The schedule page asks for a preferred start date, location, and city, and it says the choice is a preference. The review summary can be edited from the earlier steps.

No registration endpoint exists under `src/app`. The final action keeps the draft and says it is saved in this browser session only. It does not say the registration succeeded, and it does not say an email or payment was sent. A selected date or location is not described as confirmed.

Photographs and marks:

- `public/assets/logos/mountain-snow.svg` — registration header mark
- `public/assets/images/Rope skills training.png` — guidance sidebar. Instructor and two students with a rope. It is the closest supplied photograph, not the exact Figma crop.

Checks on 2026-10-29:

- Opening `/register/review` with an empty draft moved to `/register`.
- Continue without a participant type, program, or required participant fields showed inline errors and focused the first invalid control.
- A school registration kept the school name, program, guardian, date, location, and review choices when moving backward and after refresh.
- Submit showed: “This registration is saved in this browser session only. It cannot be submitted yet because the project has no registration endpoint, and no email or payment has been sent.”
- At a 1440 px layout, document scroll width matched the viewport on all six routes. Page heights were about 855, 852, 1180, 921, 1090, and 1002 px. The reference frames are 1440×1120.
- At 390 px, none of the six documents gained horizontal overflow. The progress labels scroll inside the progress bar.
- Home, About, Achievements, Training, Schools, Stories, Media, Gallery, and Contact still returned their existing copy.

Gaps:

- Font family and exact Figma spacing tokens remain unverified. These pages are not pixel-perfect.
- The sidebar sentence “Information is encrypted…” is the reference copy. This project stores the draft in `sessionStorage` only.
- The help line uses `+91 90000 10884` from the registration references. Public page contact details were not changed.
- Privacy Policy and Terms & Safety are labels. Those screens do not exist.
- Screenshot examples such as Aarohan Public School and 14 November 2026 are not prefilled.
- The individual participant form is inferred from the first step. Only the school form is visible in the participant-details reference.

## Site-wide QA — 2026-10-29

### Shared header

Cause: below 980px the header row wrapped and the navigation list stayed on one line with `white-space: nowrap`. Nine labels plus gaps were about 630px wide, so a 390px page scrolled sideways.

Fix: below 980px the desktop navigation and the header “Join a Training” link are hidden. A Menu button shows an in-flow list of the same nine destinations plus Join a Training. The button is named Menu or Close, exposes `aria-expanded` and `aria-controls`, closes on Escape and returns focus to itself, and each link closes the menu. Desktop layout above 980px is unchanged: brand, inline links, Join a Training, and bold `aria-current="page"`. Registration keeps its own header.

Files: `src/components/layout/SiteHeader.tsx`, `src/components/layout/SiteHeader.module.css`.

Two other 390px overflows were measured and fixed at the smallest rule:

- Home hero title in `src/components/home/HomePage.module.css` now uses `clamp(2.35rem, 11vw, 5.1rem)`, so the desktop size stays 5.1rem and “MALAVATH” fits a 390px width. The achievements heading row can wrap below 1000px.
- The shared Home footer in `src/components/layout/SiteFooter.module.css` lets the two mobile columns shrink, and long links such as the email address can wrap. Page-specific footers were not restyled.

### Route results

Desktop measurements used a 1440px layout. The layout viewport was 1425px where a scrollbar was present. Mobile measurements used a 390px width. “No overflow” means `documentElement.scrollWidth` was not more than `clientWidth` by more than 1px.

| Route | Desktop | Mobile |
| --- | --- | --- |
| `/` | Header shows the inline nav and Join a Training. Menu button is not displayed. Home is current. Footer includes “Dream · Explore · Inspire”. Height about 5648 px. No overflow. | No overflow with the menu closed or open. Menu lists Home, About, Achievements, Training, For Schools, Stories, Media, Gallery, Contact, and Join a Training. Escape closes it and focuses the button. Choosing About navigates and closes the menu. |
| `/about` | About is current. Height about 5067 px. No overflow. | No overflow. |
| `/achievements` | Achievements is current. Height about 5537 px. No overflow. | No overflow. |
| `/training` | Training is current. Height about 3555 px. No overflow. | No overflow. |
| `/schools` | For Schools is current. Height about 4547 px. No overflow. | No overflow. |
| `/stories` | Stories is current. Height about 5898 px. No overflow. Training Stories tab changed the field-note headings. | No overflow. |
| `/media` | Media is current. Height about 4265 px. No overflow. | No overflow. |
| `/gallery` | Gallery is current. Height about 2898 px. No overflow. A photograph opened a dialog and Escape closed it. | No overflow. |
| `/contact` | Contact is current. Height about 3521 px. No overflow. The first FAQ item opened and closed. An empty enquiry focused the name field. A completed form said the page cannot deliver the enquiry and did not claim it was sent. | No overflow. |
| `/register` | Who step rendered. No overflow. | No overflow. Progress labels scroll inside the bar. |
| `/register/program` | Program step rendered. No overflow. | No overflow. Progress labels scroll inside the bar. |
| `/register/participant` | Participant step rendered. No overflow. | No overflow. Progress labels scroll inside the bar. |
| `/register/guardian` | Guardian step rendered. No overflow. | No overflow. Progress labels scroll inside the bar. |
| `/register/schedule` | Schedule step rendered. No overflow. | No overflow. Progress labels scroll inside the bar. |
| `/register/review` | Review step rendered. No overflow. | No overflow. Progress labels scroll inside the bar. |

### Registration flow

Retested after the header change. The data model and submit copy were not changed.

- `/register/review` with an empty draft moved to `/register`.
- Continue without a type, program, school fields, guardian choice, start date, or payment choice stayed on the step, showed the inline error, and focused the first invalid control.
- School or group, group size 36, and School adventure programs stayed selected after Back. Refresh on `/register/participant` restored Hillside School, Ananya Rao, the school email, mobile, age range 13–16 years, 36 students, and 2 staff.
- “School manages consent” continued without guardian name fields. Review showed School or group, Hillside School, School adventure programs, 36 students, ages 13–16 years, 2 staff, 14 December 2026, Our school campus, and Hyderabad, Telangana.
- Edit links pointed to `/register`, `/register/program`, `/register/participant`, and `/register/schedule`. The participant edit showed the saved school name. Browser Back returned to review with that name still visible.
- Submit stayed on review and showed: “This registration is saved in this browser session only. It cannot be submitted yet because the project has no registration endpoint, and no email or payment has been sent.”
- A separate individual draft selected Individual and Student motivation sessions, opened name and email fields instead of the school fields, and kept Individual selected after Back.

### Remaining visual-fidelity gaps

These were not fixed in this pass. Fonts and tokens are still unverified, so none of these pages is an exact Figma match.

1. High — every public route. The typeface is still the provisional system-ui stack, and colors were sampled from PNGs. Supply the font files and Figma text, color, and spacing tokens before any spacing pass.
2. High — `/`, `/stories`, `/gallery`, `/achievements`. Missing photographs: Home voice avatars, the Stories weather-card photograph, a 56-image Gallery archive, and the Achievements biographical film still. `Expedition photo.png` is a microphone portrait. Add the missing files and map them to the existing image slots.
3. High — section height. Measured desktop heights are shorter than the references where content or photography is missing: Home about 5648 vs 6142, Stories about 5898 vs 6324, Media about 4265 vs 4755, Gallery about 2898 vs 3407, Achievements about 5537 vs 5852, Contact about 3521 vs 4279. Do not add empty spacers. Restore the missing photographs, press items, and map first.
4. Medium — `/`, `/training`, `/schools`, `/achievements`, and the shared header. Achievement, program, and social marks are inline drawings. Award cards use medal, award, star, and users icons rather than crests. The desktop active link is bold text; the references also show an orange underline. Replace drawings when icon files exist, and add the underline in the shared header only.
5. Medium — `/register`. The sidebar uses `Rope skills training.png` rather than the exact reference crop, and it still says “Information is encrypted…” while storage is `sessionStorage` only. The individual participant fields are inferred because only the school form is in the screenshot. Replace the crop if the Figma asset is supplied, and correct the encryption sentence when the copy is approved.

## Latest project check

| Check | Result |
| --- | --- |
| Type-check | Passed, `npx tsc --noEmit`, after the shared header, Home hero, and footer overflow fixes |
| Lint | Passed, `npm run lint`, with no warnings |
| Routes | All 15 routes were opened at a 1440px layout and at 390px. Results are in “Site-wide QA — 2026-10-29”. No application console error overlay appeared. Earlier hydration warnings on `data-cursor-ref` come from the browser tool, not application markup. |
| Build | Passed, `npm run build`. All 15 routes were generated as static pages, including the six `/register` routes. |

These checks do not mean the other screens match their references.

## Missing information

Do not treat any current CSS value as a Figma token.

### Typography

Need a Figma text-style export, or Dev Mode screenshots, for every style: family, weight, size, line height, letter spacing, and case.

Also supply the font files (`.woff2` or `.otf`) and the license confirmation. Place them in `src/fonts` when provided. No family was readable. `shared_fonts` on the file metadata was empty.

### Color and effects

Need color styles and effect styles: hex or RGBA, gradients, scrim opacity, borders, and shadows. Dev Mode CSS for one example of each component is enough if the style names are included.

### Spacing and size

Need content width, section padding, header height, button size, radius, and grid gaps. A spacing spec or Dev Mode measurements for the desktop frames. One selected landing region showed the label 1440 × 768. That is not confirmed as the full page height.

### Assets

Supplied photographs, the mountain mark, and icons are in `public/assets`. Home, About, Achievements, Training, Schools, Stories, Media, Gallery, Contact, and the registration flow use the files listed in their sections above. Still missing: voice avatars; Home achievement, challenge, and social icons; Training and Schools program icons as files; the biographical film still; a wordmark SVG; outlet logos; the Media press-kit files; a 56-image Gallery archive; a map for the Contact office; and social profile URLs. Achievements award cards now use medal, award, star, and users icons. The registration sidebar uses the rope-skills photograph because the exact Figma group crop was not supplied.

### Navigation and behavior

Need the prototype, or a short map, for:

- Each header item and button destination
- Whether “Explore Her Journey” opens About
- Whether story tabs and gallery filters change the content on the same page
- Whether the FAQ expands
- Whether a registration choice should skip the guardian step. The built flow always shows the guardian step and lets the user choose “Not required” or “School manages consent”.
- What a successful registration looks like. No success frame or registration endpoint exists, so submit stays on the review page and says the draft cannot be sent.

### Copy still unread

Home, About, Achievements, Training, Schools, Stories, Media, Gallery, Contact, and the six registration screens use copy transcribed from their reference PNGs. Registration programs, locations, and the help number come from those registration frames.

## Visible evidence that is safe to keep

Landing hero, read at a larger zoom:

- Wordmark: POORNA MALAVATH
- Line: MOUNTAINEER · ADVENTURER · MENTOR
- Navigation labels: Home, About, Achievements, Training, For Schools, Stories, Media, Gallery, Contact, Join a Training
- Hero overline: MOUNTAINEER | ADVENTURER | MENTOR
- Title: POORNA MALAVATH
- Supporting line: Inspiring young minds to discover courage to rise beyond their limits.
- Actions: Join a Training, Explore Her Journey
- One metric: 7+ Major Expeditions

About and Achievements were viewed as full desktop frames. Their section order matches the layer list. Exact body text was not transcribed.
