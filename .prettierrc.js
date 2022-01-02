module.exports = {
	trailingComma: "all",
	tabWidth: 2,
	sigleQuote: true,
	useTabs: false,
	printWidth: 120,
	overrides: [
		{
			files: "*.ts",
			options: {
				parser: "typescript",
			},
		},
	],
};