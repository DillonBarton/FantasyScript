module.exports = {
  reactStrictMode: true,
  "compilerOptions": {
    "baseUrl": "src/",
    "paths": {
      "@/features/*": ["features/*"],
      "@/components/*": ["components/*"],
      "@/styles/*": ["styles/*"],
      "@/hooks/*": ["hooks/*"],
      "@/lib/*": ["lib/*"],
    }
  }
}
