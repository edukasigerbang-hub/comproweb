$ErrorActionPreference = 'Stop'
$pages = @('about','services','industries','solutions','gerbang-edukasi','contact')
foreach ($pg in $pages) {
  $p = "src\pages\$pg.astro"
  $c = [System.IO.File]::ReadAllText($p, [System.Text.Encoding]::UTF8)
  # close missing brace: {lp(lang, '/x') followed by newline + '>'
  $c = [regex]::Replace($c, "(\{lp\(lang, '[^']+'\))(\r?\n>)", '$1}$2')
  [System.IO.File]::WriteAllText($p, $c, (New-Object System.Text.UTF8Encoding($false)))
}
Write-Output 'fixed'