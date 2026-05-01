export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([]),
	mimeTypes: {},
	_: {
		client: {"start":"_app/immutable/entry/start.d6339355.js","app":"_app/immutable/entry/app.6cffc025.js","imports":["_app/immutable/entry/start.d6339355.js","_app/immutable/chunks/scheduler.ba4dd0f0.js","_app/immutable/chunks/singletons.01f0c577.js","_app/immutable/entry/app.6cffc025.js","_app/immutable/chunks/scheduler.ba4dd0f0.js","_app/immutable/chunks/index.64112532.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
