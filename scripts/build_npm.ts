import { build, emptyDir } from "dnt"

await emptyDir("./npm")

await build({
  entryPoints: ["./mod.ts"],
  outDir: "./npm",
  shims: {
    deno: "dev",
  },
  compilerOptions: {
    lib: ["esnext"],
  },
  package: {
    // package.json properties
    name: "kana2mora",
    version: "0.3.0",
    description: "Divide a string of Japanese Kana into mora",
    repository: {
      "type": "git",
      "url": "https://github.com/otariidae/kana2mora.git",
    },
    author: "otariidae",
    license: "CC0-1.0",
    bugs: {
      "url": "https://github.com/otariidae/kana2mora/issues",
    },
    homepage: "https://github.com/otariidae/kana2mora#readme",
  },
})

// post build steps
Deno.copyFileSync("LICENSE", "npm/LICENSE")
Deno.copyFileSync("README.md", "npm/README.md")
Deno.copyFileSync("CHANGELOG.md", "npm/CHANGELOG.md")
