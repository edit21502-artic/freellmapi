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

Video style: 2D, soft glow rim around characters, muted gradients, no hard outlines, physics-based motion
(gravity, bounce, squash & stretch, anticipation, inertia). Never mix 2D and 3D in a video.
Answer the user in short, plain Russian.
