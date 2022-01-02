import dotenv from "dotenv";

class Environment {
	private env: dotenv.DotenvParseOutput | undefined;

	constructor() {
		this.env = dotenv.config({ debug: true }).parsed;
	}

	public configure(): any {
		return this.env || Environment.configureDefault();
	}

	private static configureDefault(): any {
		const defaultEnvs = {
			GITHUB: {
				URL: '',
			},
            W3_CONVERTER: {
                URL: ''
            }
		};
	}
}

export default new Environment().configure();
