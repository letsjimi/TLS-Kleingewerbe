

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.f4a03452.js","_app/immutable/chunks/scheduler.ba4dd0f0.js","_app/immutable/chunks/index.64112532.js"];
export const stylesheets = ["_app/immutable/assets/2.15fb0d9d.css"];
export const fonts = [];
