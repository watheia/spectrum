const { join } = require("path")
const { createGlobPatternsForDependencies } = require("@nrwl/next/tailwind")
module.exports = {
  purge: [
    join(__dirname, "src/pages/**/*.{js,ts,jsx,tsx}"),
    join(__dirname, "src/components/**/*.{js,ts,jsx,tsx}"),
    ...createGlobPatternsForDependencies(__dirname)
  ],
  presets: [require("../../../tailwind-workspace-preset.js")],
  theme: {
    extend: {}
  }
}
