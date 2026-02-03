export type BackendProvider = "firebase" | "supabase";

export const backendConfig = {
  provider: "firebase" as BackendProvider,
  projectId: "fvcsn-app",
  collections: {
    scores: "scores",
    teams: "teams",
    schedules: "schedules",
    news: "news"
  }
};

export const adminFeatures = [
  "score_updates",
  "schedule_management",
  "news_posts",
  "media_uploads"
];
