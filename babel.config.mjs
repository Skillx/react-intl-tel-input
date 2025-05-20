// babel.config.mjs

export default function (api) {
  api.cache(true);

  const presets = [
    [
      "@babel/preset-env",
      {
        modules: false, // ESM by default
      },
    ],
    "@babel/preset-react",
  ];

  const plugins = [
    "@babel/plugin-proposal-class-properties",
    "@babel/plugin-syntax-dynamic-import",
    "react-docgen",
  ];

  const env = {
    cjs: {
      presets: [
        [
          "@babel/preset-env",
          {
            modules: "commonjs",
          },
        ],
      ],
    },
    production: {
      ignore: ["**/*.test.js"],
      plugins: [
        [
          "transform-react-remove-prop-types",
          {
            removeImport: true,
            additionalLibraries: ["react-style-proptype"],
          },
        ],
      ],
    },
    test: {
      plugins: ["dynamic-import-node"],
    },
  };

  return {
    presets,
    plugins,
    env,
  };
}
