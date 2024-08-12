
import libPath from 'node:path';
import fs      from 'node:fs/promises';

const THIS_MODULE_PATH = libPath.dirname(
	new URL(import.meta.url).pathname,
);
console.error(`THIS_MODULE_PATH: ${THIS_MODULE_PATH}`);
const THIS_PACKAGE_JSON = JSON.parse(
	await fs.readFile(
		libPath.join(
			THIS_MODULE_PATH,
			'../../package.json',
		),
		'utf8',
	),
);
console.error('THIS_PACKAGE_JSON:', THIS_PACKAGE_JSON);

// eslint-disable-next-line jsdoc/require-jsdoc
export async function getProjectPackageJson() {
	let path = THIS_MODULE_PATH;

	while (true) {
		console.error(`path: ${path}`);

		const package_json_path = libPath.join(path, 'package.json');

		try {
			const package_json = JSON.parse(
				// eslint-disable-next-line no-await-in-loop
				await fs.readFile(
					package_json_path,
					'utf8',
				),
			);

			if (typeof package_json.devDependencies?.[THIS_PACKAGE_JSON.name] === 'string') {
				return package_json;
			}
		}
		catch {}

		if (path === '/') {
			return THIS_PACKAGE_JSON;
		}

		path = libPath.dirname(path);
	}
}
