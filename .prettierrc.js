module.exports = {
    tabWidth: 4,
    htmlFormatWrapAttributes: "force",
    htmlFormatWrapLineLength: 40,
    alignObjectProperties: true,
    htmlWhitespaceSensitivity: "css",
    overrides: [
        {
            files: "*.vue",
            options: {
                tabWidth: 4,
                vueIndentScriptAndStyle: true,
                jsxBracketSameLine: false,
                parser: "vue",
            },
        },
    ],
};
