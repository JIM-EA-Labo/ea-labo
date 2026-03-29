$version = Get-Date -Format yyyyMMddHHmm
$build = Get-Date -Format yyyy.MM.dd.HHmm
$content = Get-Content -Raw -Encoding UTF8 index.html
$content = $content -replace '\?v=[0-9]+', "?v=$version"
$content = $content -replace '<span id="app-version" class="version-tag">Build: [0-9.]+<', "<span id=`"app-version`" class=`"version-tag`">Build: $build<"
$content | Set-Content -Encoding UTF8 index.html
Write-Host "Updated index.html to version $version and build $build"
