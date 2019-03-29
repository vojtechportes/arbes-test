interface IConfig {
	PORT: number;
	NODE_ENV: string;
}

// tslint:disable-next-line no-string-literal
const config: IConfig = window["config"];

export default config;
