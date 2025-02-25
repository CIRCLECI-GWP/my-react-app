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

// module.exports = {
//   ci: {
//     collect: { url: ["http://localhost:5173"] },
//     assert: {
//       assertions: {
//         "categories:seo": "off",
//         "categories:best-practices": "off",
//         "categories:pwa": "off",

//         "categories:performance": ["error", { minScore: 0.6 }],
//         "categories:accessibility": ["error", { minScore: 0.8 }],
//       },
//     },
//     upload: {
//       target: "temporary-public-storage",
//     },
//   },
// };

// eslint-disable-next-line no-undef
// module.exports = {
//   ci: {
//     collect: {
//       url: ["http://localhost:5173"],
//       staticDistDir: "./dist", // Change to your actual build output folder
//     },
//     assert: {
//       assertions: {
//         "categories:seo": "off",
//         "categories:best-practices": "off",
//         "categories:pwa": "off",
//         "categories:performance": ["error", { minScore: 0.6 }],
//         "categories:accessibility": ["error", { minScore: 0.8 }],
//       },
//     },
//     upload: {
//       target: "temporary-public-storage",
//     },
//   },
// };
