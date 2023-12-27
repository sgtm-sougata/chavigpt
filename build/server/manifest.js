const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["chavigpt/apple-touch-icon.png","chavigpt/favicon.ico","chavigpt/favicon.svg","chavigpt/icon-128x128.png","chavigpt/icon-256x256.png","chavigpt/icon-512x512.png","chavigpt/icon.svg","chavigpt/logo.svg","chavigpt/manifest.json","huggingchat/apple-touch-icon.png","huggingchat/favicon.ico","huggingchat/favicon.svg","huggingchat/icon-128x128.png","huggingchat/icon-256x256.png","huggingchat/icon-512x512.png","huggingchat/icon.svg","huggingchat/logo.svg","huggingchat/manifest.json","huggingchat/thumbnail.png"]),
	mimeTypes: {".png":"image/png",".svg":"image/svg+xml",".json":"application/json"},
	_: {
		client: {"start":"_app/immutable/entry/start.2b8eb421.js","app":"_app/immutable/entry/app.a7f12371.js","imports":["_app/immutable/entry/start.2b8eb421.js","_app/immutable/chunks/boolean_attributes.9921dbdc.js","_app/immutable/chunks/singletons.87a67235.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/control.f5b05b5f.js","_app/immutable/entry/app.a7f12371.js","_app/immutable/chunks/preload-helper.41c905a7.js","_app/immutable/chunks/boolean_attributes.9921dbdc.js","_app/immutable/chunks/index.369f2cd8.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./chunks/0-233ddf58.js')),
			__memo(() => import('./chunks/1-8e8814f2.js')),
			__memo(() => import('./chunks/2-0b4e47d6.js')),
			__memo(() => import('./chunks/3-809e5ff0.js')),
			__memo(() => import('./chunks/4-5db12f5f.js')),
			__memo(() => import('./chunks/5-c70325ed.js')),
			__memo(() => import('./chunks/6-28de4a6b.js')),
			__memo(() => import('./chunks/7-2a985912.js')),
			__memo(() => import('./chunks/8-5acc5b34.js')),
			__memo(() => import('./chunks/9-5c4cf3c0.js')),
			__memo(() => import('./chunks/10-d191b939.js')),
			__memo(() => import('./chunks/11-5b0a90b9.js')),
			__memo(() => import('./chunks/12-3241d0a0.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/admin/export",
				pattern: /^\/admin\/export\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server.ts-247ff556.js'))
			},
			{
				id: "/conversations",
				pattern: /^\/conversations\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/conversation",
				pattern: /^\/conversation\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server.ts-f3538b28.js'))
			},
			{
				id: "/conversation/[id]",
				pattern: /^\/conversation\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: __memo(() => import('./chunks/_server.ts-20e1b1ad.js'))
			},
			{
				id: "/conversation/[id]/message/[messageId]/prompt",
				pattern: /^\/conversation\/([^/]+?)\/message\/([^/]+?)\/prompt\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false},{"name":"messageId","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('./chunks/_server.ts-aa075c46.js'))
			},
			{
				id: "/conversation/[id]/message/[messageId]/vote",
				pattern: /^\/conversation\/([^/]+?)\/message\/([^/]+?)\/vote\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false},{"name":"messageId","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('./chunks/_server.ts-a6d2973d.js'))
			},
			{
				id: "/conversation/[id]/output/[sha256]",
				pattern: /^\/conversation\/([^/]+?)\/output\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false},{"name":"sha256","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('./chunks/_server.ts-25a4f652.js'))
			},
			{
				id: "/conversation/[id]/share",
				pattern: /^\/conversation\/([^/]+?)\/share\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('./chunks/_server.ts-1c174cd1.js'))
			},
			{
				id: "/conversation/[id]/stop-generating",
				pattern: /^\/conversation\/([^/]+?)\/stop-generating\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('./chunks/_server.ts-84159539.js'))
			},
			{
				id: "/login",
				pattern: /^\/login\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/login/callback",
				pattern: /^\/login\/callback\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/logout",
				pattern: /^\/logout\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/privacy",
				pattern: /^\/privacy\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/r/[id]",
				pattern: /^\/r\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/settings",
				pattern: /^\/settings\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 11 },
				endpoint: __memo(() => import('./chunks/_server.ts-f4185d5c.js'))
			},
			{
				id: "/settings/[...model]",
				pattern: /^\/settings(?:\/(.*))?\/?$/,
				params: [{"name":"model","optional":false,"rest":true,"chained":true}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 12 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();

const prerendered = new Set([]);

export { manifest, prerendered };
//# sourceMappingURL=manifest.js.map
