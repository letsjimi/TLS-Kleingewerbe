export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "TLS-Kleingewerbe/_app",
	assets: new Set([]),
	mimeTypes: {},
	_: {
		client: {"start":"_app/immutable/entry/start.3c286caa.js","app":"_app/immutable/entry/app.bbbd2747.js","imports":["_app/immutable/entry/start.3c286caa.js","_app/immutable/chunks/scheduler.ba4dd0f0.js","_app/immutable/chunks/singletons.03e2eee9.js","_app/immutable/entry/app.bbbd2747.js","_app/immutable/chunks/scheduler.ba4dd0f0.js","_app/immutable/chunks/index.64112532.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
