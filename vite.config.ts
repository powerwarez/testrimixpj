import { vitePlugin as remix, netlifyPreset } from "@remix-run/dev";
// import remixDev from "@remix-run/dev"; // Comment out or remove this line
// const { vitePlugin: remix, netlifyPreset } = remixDev; // Comment out or remove this line

// import { netlifyPreset } from "@remix-run/netlify"; // Comment out or remove this line
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

declare module "@remix-run/node" {
  interface Future {
    v3_singleFetch: true;
  }
}

export default defineConfig({
  plugins: [
    remix({
      presets: [netlifyPreset()],
      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true,
        v3_singleFetch: true,
        v3_lazyRouteDiscovery: true,
      },
    }),
    tsconfigPaths(),
  ],
});
