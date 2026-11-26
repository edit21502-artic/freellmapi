# YouTube workflow (channel @shkaff-w8i)

The user runs an animated "What If" channel. For any YouTube task, use the installed skills:

- `/yt-script` — every new script. Score hooks with `hookscore.py`; ship only hooks rated STRONG.
- `/yt-package` — title + thumbnail as one pairing (`title.py`). Thumbnail text must NOT repeat the title.
- `/yt-seo`, `/yt-chapters` — description, tags, timecodes.
- `/yt-retention` — read Studio retention CSV exports.
- `/yt-viral` — niche research; `/yt-audit` — channel review; `/yt-comment`, `/yt-shorts`, `/yt-plan`, `/yt-edit`.
- `/youtube` — broader strategy (claude-youtube).

Voice profile: `.claude/youtube/voice.md`. At session start copy it to `~/.claude/youtube/voice.md`
(`mkdir -p ~/.claude/youtube && cp .claude/youtube/voice.md ~/.claude/youtube/`).

Video style (ONLY this from now on, reference: IFDAYX channel, video puSJP93Lh7k): flat 2D vector with
gradients, cinematic lighting (golden hour / sunset, god rays, dust motes, purple shade, vignette), very
detailed backgrounds, many locations, wide shots with small characters mixed with close-ups, speech bubbles
instead of subtitles. Characters SLIM: big round glossy black head with white eyes, narrow hoodie, long thin
black stick legs, thin arms, small shoes. Zap keeps yellow lightning tuft, one yellow brow, teal hoodie with "?".
Physics-based motion (gravity, bounce, squash & stretch, anticipation, inertia). Never mix 2D and 3D.
Template: `.claude/youtube/template/scene.html` (SVG scene, `renderAt(t)`), rendered with
`node r3.js video 0 15 30 out.mp4` (Playwright). It is the 15 s "zap2d_slim" test.
Thumbnails: competitor style (glossy illustrated, huge white/yellow text) generated as an image.
Answer the user in short, plain Russian.
