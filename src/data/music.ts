export type FavoriteSong = {
  artist: string;
  artwork: string;
  highlightEnd: number;
  highlightStart: number;
  title: string;
  youtubeId: string;
};

export const favoriteSongs: readonly FavoriteSong[] = [
  {
    artist: "Gestalt Girl",
    artwork: "/albums/kamisama.jpg",
    highlightEnd: 207,
    highlightStart: 180,
    title: "Kamisama",
    youtubeId: "jjw1j1H1EYQ",
  },
  {
    artist: "The Poles",
    artwork: "/albums/tp.jpg",
    highlightEnd: 101,
    highlightStart: 72,
    title: "So, Again",
    youtubeId: "JJCznTuDyhU",
  },
  {
    artist: "Jeon Jin Hee",
    artwork: "/albums/wak.jpg",
    highlightEnd: 75,
    highlightStart: 47,
    title: "A Trivial Story",
    youtubeId: "IkoYaTgAY8U",
  },
  {
    artist: "The Weeknd",
    artwork: "/albums/mdm.jpg",
    highlightEnd: 28,
    highlightStart: 0,
    title: "Try Me",
    youtubeId: "a4x7p76ix8M",
  },
];
