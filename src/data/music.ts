export type FavoriteSong = {
  artist: string;
  artwork: string;
  title: string;
};

export const favoriteSongs: readonly FavoriteSong[] = [
  {
    artist: "Gestalt Girl",
    artwork: "/albums/kamisama.jpg",
    title: "Kamisama",
  },
  {
    artist: "The Poles",
    artwork: "/albums/tp`.jpg",
    title: "So, Again",
  },
  {
    artist: "Jeon Jin Hee",
    artwork: "/albums/wak.jpg",
    title: "A Trivial Story",
  },
  {
    artist: "The Weeknd",
    artwork: "/albums/mdm.jpg",
    title: "Try Me",
  },
];
