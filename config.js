/**
 * ROMRO Bio-Link Platform Configuration
 * Edit this file to customize your profile, or use the visual editor at /editor.html
 */

window.ROMRO_CONFIG = {
  // Profile Information
  username: "romro",
  displayName: "romro",
  bio: "Just vibing through the internet 🌙 | coder, gamer, dreamer",
  avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=romro",
  
  // Badges (tag, color, icon/emoji)
  badges: [
    { text: "OG", color: "#F59E0B", textColor: "#000000", glow: "rgba(245, 158, 11, 0.5)" },
    { text: "Coder", color: "#7B5CF8", textColor: "#FFFFFF", glow: "rgba(123, 92, 248, 0.6)" },
    { text: "VIP", color: "#10B981", textColor: "#000000", glow: "rgba(16, 185, 129, 0.5)" }
  ],

  // Theme Settings
  // Available themes: "blurple", "crimson", "emerald", "amber", "ocean", "rose", "void", "retro"
  theme: "blurple",

  // Background Settings
  // types: "gradient", "solid", "image", "video"
  background: {
    type: "gradient",
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
    cardBlur: 16, // px
    cardOpacity: 0.72, // 0 to 1
    particleEffect: "sparkles", // "none", "sparkles", "snow", "rain", "matrix"
    customCursor: "crosshair", // "default", "dot", "crosshair", or an image url
    cursorColor: "#7B5CF8"
  },

  // Discord Presence Card
  discord: {
    enabled: true,
    username: "romro#1337",
    avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=romro-bot",
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
    { platform: "discord", label: "Discord", url: "https://discord.com/users/romro", handle: "romro#1337" },
    { platform: "twitter", label: "Twitter / X", url: "https://x.com/romrokk", handle: "@romrokk" },
    { platform: "github", label: "GitHub", url: "https://github.com/romro-dev", handle: "romro-dev" },
    { platform: "youtube", label: "YouTube", url: "https://youtube.com/@romroTV", handle: "romroTV" },
    { platform: "twitch", label: "Twitch", url: "https://twitch.tv/romro", handle: "romro" },
    { platform: "instagram", label: "Instagram", url: "https://instagram.com/romro", handle: "@romro" },
    { platform: "spotify", label: "Spotify", url: "https://open.spotify.com/user/romro", handle: "romro" },
    { platform: "steam", label: "Steam", url: "https://steamcommunity.com/id/romro", handle: "romro" }
  ],

  // Audio Player
  audio: {
    enabled: true,
    autoplay: false, // Browsers require user interaction before sound plays; click-to-enter enabled
    title: "Lofi Chill - romro's playlist",
    artist: "ROMRO Beats",
    audioUrl: "https://cdn.freesound.org/previews/612/612613_5674468-lq.mp3", // Smooth relaxing ambient lofi track preview
    volume: 0.65
  },

  // View Counter
  views: {
    enabled: true,
    initialCount: 1337,
    label: "views"
  }
};
