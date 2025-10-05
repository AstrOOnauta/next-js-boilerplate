const pluginSecurity = require("eslint-plugin-security");

module.exports = [
  // Ignore generated/build folders at the config level (flat config supports ignores)
  {
    ignores: [
      "**/.next/**",
      "**/node_modules/**",
      "**/dist/**",
      "**/coverage/**",
      "**/.out/**",
      "**/.build/**",
      "**/public/**",
    ],
  },
  pluginSecurity.configs.recommended,
];
