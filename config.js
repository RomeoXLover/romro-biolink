/**
 * ROMRO Bio-Link Platform Configuration
 * Updated with romeo profile, 14 themes, 6 CSS BG presets, and Rick Astley Rickroll audio.
 */

window.ROMRO_CONFIG = {
  // Profile Information
  username: "romeo",
  displayName: "romeo",
  bio: "Just vibing through the internet 🌙 | coder, gamer, dreamer",
  avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=romeo",
  
  // Badges (tag, color, icon/emoji)
  badges: [
    { text: "OG", color: "#F59E0B", textColor: "#000000", glow: "rgba(245, 158, 11, 0.5)" },
    { text: "Coder", color: "#7B5CF8", textColor: "#FFFFFF", glow: "rgba(123, 92, 248, 0.6)" },
    { text: "VIP", color: "#10B981", textColor: "#000000", glow: "rgba(16, 185, 129, 0.5)" }
  ],

  // Theme Settings
  // Available themes (14 total):
  // "blurple", "crimson", "emerald", "amber", "ocean", "rose", "void", "retro",
  // "cyber", "sakura", "midnight", "neon", "galaxy", "toxic"
  theme: "blurple",

  // Background Presets (6 CSS-only presets):
  // "aurora", "sunset", "matrix", "deep_space", "vaporwave", "forest"
  bgPreset: "aurora",

  // Background Settings
  background: {
    type: "preset", // "preset", "gradient", "solid", "image", "video"
    preset: "aurora",
    gradientColors: ["#050519", "#0c0827", "#120a3a", "#050519"],
    gradientAngle: 135,
    animatedGradient: true,
    solidColor: "#050519",
    imageUrl: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=1920&auto=format&fit=crop",
    videoUrl: "",
    overlayOpacity: 0.65
  },

  // Visual Effects
  effects: {
    usernameEffect: "gradient", // "none", "glitch", "rainbow", "typewriter", "gradient"
    cardTilt3D: true,
    cardBlur: 20, // px
    cardOpacity: 0.72, // 0 to 1
    particleEffect: "sparkles", // "none", "sparkles", "snow", "rain", "matrix"
    customCursor: "crosshair", // "default", "dot", "crosshair"
    cursorColor: "#7B5CF8"
  },

  // Discord Presence Card
  discord: {
    enabled: true,
    username: "romeo#0001",
    avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=romeo-bot",
    status: "online", // "online", "idle", "dnd", "offline"
    activityType: "Playing", // "Playing", "Streaming", "Listening to", "Watching"
    activityName: "Visual Studio Code",
    details: "Developing ROMRO Bio-Link Platform",
    state: "Workspace: biolink-v2",
    elapsedTimeText: "04:20 elapsed"
  },

  // About Me Section
  aboutMe: {
    enabled: true,
    title: "About Me",
    content: "Hey there! 👋 Welcome to my personal hub.\n\nI am a full-stack developer, cyber explorer, and dark-mode aesthetic enthusiast. I build high-performance web experiences, reverse-engineer game clients, and craft clean user interfaces.\n\n⚡ Skills: JavaScript / TypeScript, Rust, Python, Go, Node.js\n🎮 Favorite Games: Cyberpunk 2077, Elden Ring, Valorant\n🎧 Currently bumpin': Synthwave, Phonk & Lofi Chillhop"
  },

  // Social Links
  socials: [
    { platform: "discord", label: "Discord", url: "https://discord.com/users/romeo", handle: "romeo#0001" },
    { platform: "twitter", label: "Twitter / X", url: "https://x.com/romeokk", handle: "@romeokk" },
    { platform: "github", label: "GitHub", url: "https://github.com/romeo-dev", handle: "romeo-dev" },
    { platform: "youtube", label: "YouTube", url: "https://youtube.com/@romeoTV", handle: "romeoTV" },
    { platform: "twitch", label: "Twitch", url: "https://twitch.tv/romeo", handle: "romeo" },
    { platform: "instagram", label: "Instagram", url: "https://instagram.com/romeo", handle: "@romeo" },
    { platform: "spotify", label: "Spotify", url: "https://open.spotify.com/user/romeo", handle: "romeo" },
    { platform: "steam", label: "Steam", url: "https://steamcommunity.com/id/romeo", handle: "romeo" }
  ],

  // Audio Player (Rickroll - Never Gonna Give You Up)
  audio: {
    enabled: true,
    autoplay: false, // Browsers require user interaction; click-to-enter unlocks audio
    title: "Never Gonna Give You Up",
    artist: "Rick Astley",
    audioUrl: "https://ia801406.us.archive.org/21/items/rick-astley-never-gonna-give-you-up_202007/Rick%20Astley%20-%20Never%20Gonna%20Give%20You%20Up.mp3",
    volume: 0.65
  },

  // View Counter
  views: {
    enabled: true,
    initialCount: 1337,
    label: "views"
  }
};
