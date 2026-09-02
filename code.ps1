$files = @(
    "./next-env.d.ts",
    "./next.config.mjs",
    "./package-lock.json",
    "./package.json",
    "./postcss.config.mjs",
    "./tailwind.config.ts",
    "./tsconfig.json",

    "./public/brand-logo-mark.png",
    "./public/favicon.png",

    "./src/app/globals.css",
    "./src/app/layout.tsx",
    "./src/app/not-found.tsx",
    "./src/app/page.tsx",

    "./src/app/about/page.tsx",
    "./src/app/contact/page.tsx",
    "./src/app/insights/page.tsx",
    "./src/app/privacy-policy/page.tsx",
    "./src/app/services/page.tsx",
    "./src/app/services/[slug]/page.tsx",
    "./src/app/solutions/page.tsx",
    "./src/app/solutions/[slug]/page.tsx",
    "./src/app/terms-of-service/page.tsx",
    "./src/app/work/page.tsx",

    "./src/components/brand/AfricaWatermark.tsx",
    "./src/components/brand/GlobeMotif.tsx",
    "./src/components/brand/InteractiveHeroGlobe.tsx",
    "./src/components/brand/Logo.tsx",

    "./src/components/cards/HybridCard.tsx",

    "./src/components/navigation/Footer.tsx",
    "./src/components/navigation/Navbar.tsx",

    "./src/components/sections/CtaBanner.tsx",

    "./src/components/ui/Badge.tsx",
    "./src/components/ui/Button.tsx",
    "./src/components/ui/Container.tsx",
    "./src/components/ui/Eyebrow.tsx",
    "./src/components/ui/TwoToneHeading.tsx",

    "./src/data/insights.ts",
    "./src/data/projects.ts",
    "./src/data/services.ts",
    "./src/data/siteConfig.ts",
    "./src/data/solutions.ts",
    "./src/data/team.ts",
    "./src/data/techStack.ts",

    "./src/lib/tokens.ts",
    "./src/lib/utils.ts"
)

$output = "combined-output.txt"

Remove-Item $output -ErrorAction SilentlyContinue

foreach ($file in $files) {
    if (Test-Path $file) {
        Add-Content $output $file
        Get-Content $file | Add-Content $output
        Add-Content $output "`r`n`r`n"
    } else {
        Add-Content $output "$file (File not found)"
        Add-Content $output "`r`n`r`n"
    }
}

Write-Host "✅ Files merged into combined-output.txt"
