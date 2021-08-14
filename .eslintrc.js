module.exports = {
  extends: ["next", "prettier"],
  settings: {
    "import/resolver": {
      alias: {
        map: [
          ["@components", "./components/"],
          ["@data", "./data/"],
          ["@pages", "./pages/"],
          ["@public", "./public/"],
          ["@styles", "./styles/"],
          ["@utilities", "./utilities/"],
        ],
        extensions: [".js", ".jsx"],
      },
    },
  },
};
