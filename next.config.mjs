const MODE_DEVELOPMENT = false;
const isGithubActions = (process.env.GITHUB_ACTIONS || false);

let basePath = "";
let assetPrefix = "";

if(isGithubActions && process.env.GITHUB_REPOSITORY)
{
	const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, "");
	basePath = `/${repo}`;
	assetPrefix = `/${repo}/`;
}

/** @type {import("next").NextConfig} */
const nextConfig = {
	basePath: basePath,
	assetPrefix: assetPrefix,
	trailingSlash: true,
	skipTrailingSlashRedirect: true,
	reactStrictMode: (MODE_DEVELOPMENT),
	distDir: (MODE_DEVELOPMENT) ? ".next" : "dist",
	output: (MODE_DEVELOPMENT) ? "standalone" : "export",
	images: {
		unoptimized: !(MODE_DEVELOPMENT),
	},
};

export default nextConfig;