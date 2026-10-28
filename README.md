# ROMRO 🌙 — Self-Hostable Guns.lol Alternative

> **ROMRO** is a sleek, ultra-customizable, self-hostable bio-link platform built with pure HTML5, CSS3, and Vanilla JavaScript. Zero dependencies, instant loading, violent blurple aesthetics, and complete feature parity with modern bio platforms.

![ROMRO Banner](https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=1200&auto=format&fit=crop)

---

## ✨ Features

- **Violent Blurple Dark Aesthetic**: Deep-space `#050519` base, glassmorphism cards with dynamic blur & opacity, and neon glow accents (`#7B5CF8`).
- **8 Built-in Color Themes**:
  - 🟣 **Blurple** (default, vibrant purple & indigo glow)
  - 🔴 **Crimson** (neon red)
  - 🟢 **Emerald** (cyber emerald green)
  - 🟠 **Amber** (gold / orange)
  - 🔵 **Ocean** (cyan & bright blue)
  - 🌸 **Rose** (pink / magenta)
  - 🌑 **Void** (monochrome minimalist dark)
  - 🌆 **Retro** (vaporwave pink & teal)
- **Visual Config Editor (`editor.html`)**: Real-time live preview pane, instant browser `localStorage` synchronization, JSON import, and JSON export.
- **Custom Backgrounds**: Animated multi-stop gradients, solid colors, custom image URLs, or background looping MP4 videos with adjustable overlay opacity.
- **Dynamic Particle Engine**: High-performance canvas particle system supporting **Sparkles**, **Snow Drift**, **Neon Rain**, and **Matrix Code**.
- **Interactive 3D Card Tilt**: Smooth mouse-following 3D perspective rotation on the profile card.
- **Username Text Effects**: Choose between **Glow Gradient**, **Cyberpunk Glitch**, **Chroma Rainbow**, **Typewriter Animation**, or Clean.
- **Custom Cursor Modes**: Precision crosshair, glowing dot follower, or default OS cursor.
- **Discord Presence Integration**: Displays Discord avatar, live status indicator (Online, Idle, DND, Offline), activity name, workspace details, and live elapsed timer counter.
- **Integrated Background Audio Player**: Clean player with play/pause, volume slider, progress tracking, track title/artist, animated visualizer bars, and guns.lol style click-to-enter screen.
- **Socials Grid**: Pre-styled SVG icons for Discord, Twitter/X, GitHub, YouTube, Twitch, Instagram, Spotify, Steam, TikTok, Reddit, and more.
- **Badge / Tag System**: Custom user tags (e.g. "OG", "Coder", "VIP") with customizable pill colors and glow shadows.
- **Persistent View Counter**: Realistic view tracking stored in `localStorage`.
- **"About Me" Box**: Dedicated card with scrollable rich description and custom styled scrollbars.

---

## 🚀 Quick Start & Deployment

### Option 1: Vercel (Recommended)
ROMRO is 100% static and requires zero build step.

1. Push your repository to GitHub.
2. Go to [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Import your ROMRO repository.
4. Framework Preset: **Other** (Root directory: `./`).
5. Click **Deploy**. Your bio-link will be live in 10 seconds!

### Option 2: GitHub Pages
A pre-configured GitHub Actions workflow is included at `.github/workflows/deploy.yml`:

1. Push to your repository's `main` branch.
2. In GitHub, go to **Settings** → **Pages**.
3. Under **Build and deployment** → **Source**, select **GitHub Actions**.
4. The workflow will automatically publish your bio link to `https://<username>.github.io/<repo>/`.

### Option 3: VPS / Web Server (Nginx, Apache, Caddy)
Simply upload the project folder to your web server:

```bash
# Example with Python built-in static server for local testing:
cd romro-biolink
python3 -m http.server 8080
# Open http://localhost:8080 in your browser
```

For Nginx:
```nginx
server {
    listen 80;
    server_name biolink.yourdomain.com;
    root /var/www/romro-biolink;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

---

## ⚙️ Customization

There are two easy ways to customize your profile:

### Method A: The Visual Editor (No coding required)
1. Open `editor.html` in your browser.
2. Customize your username, badges, themes, audio, Discord presence, and socials using the interactive form.
3. Watch the live preview update in real-time.
4. Click **"Export JSON"** to save your config file backup.

### Method B: Edit `config.js`
Open `config.js` in any text editor and adjust the options:

```javascript
window.ROMRO_CONFIG = {
  username: "romeo",
  displayName: "romeo",
  bio: "Just vibing through the internet 🌙 | coder, gamer, dreamer",
  avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=romeo",
  theme: "blurple",
  bgPreset: "aurora",
  audio: {
    title: "Never Gonna Give You Up",
    artist: "Rick Astley"
  }
  // ...
};
```

---

## 📁 Project Structure

```
romro-biolink/
├── index.html                  # Beautiful profile page
├── editor.html                 # Visual live editor & settings panel
├── config.js                   # Profile data configuration
├── vercel.json                 # Vercel deployment configuration
├── README.md                   # Documentation & setup guide
└── .github/
    └── workflows/
        └── deploy.yml          # GitHub Pages automated deployment
```

---

## 📜 License
MIT License. Free to use, modify, self-host, and distribute!
