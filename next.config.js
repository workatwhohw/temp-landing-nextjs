module.exports = {
  generateBuildId: async () => {
    // For example get the latest git commit hash here
    return "rivetzcom-next-etta";
  },
  webpack: config => {
    config.module.rules.push({
      test: /\.md$/,
      use: "raw-loader"
    });

    return config;
  }
};
