

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.9800bfb8.js","_app/immutable/chunks/scheduler.ba4dd0f0.js","_app/immutable/chunks/index.64112532.js","_app/immutable/chunks/singletons.01f0c577.js"];
export const stylesheets = [];
export const fonts = [];
