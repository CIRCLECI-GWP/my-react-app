export const ci = {
  collect: { url: ["http://localhost:5173"] },
  assert: {
    assertions: {
      "categories:seo": "off",
      "categories:best-practices": "off",
      "categories:pwa": "off",

      "categories:performance": ["error", { minScore: 0.6 }],
      "categories:accessibility": ["error", { minScore: 0.8 }],
    },
  },
  upload: {
    target: "temporary-public-storage",
  },
};
