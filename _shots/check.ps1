$ErrorActionPreference='Continue'
$edge='C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe'
foreach($pg in @('about','services','industries','solutions','gerbang-edukasi','contact')){
  $shot="F:\gerbang cipta\_shots\chk-$pg.png"
  $url="http://localhost:4321/_probe.html?p=/$pg"
  & $edge --headless --disable-gpu --window-size=900,950 --virtual-time-budget=20000 "--screenshot=$shot" $url 2>$null | Out-Null
  Start-Sleep -Milliseconds 500
}
Get-ChildItem 'F:\gerbang cipta\_shots' -Filter 'chk-*.png' | Select-Object Name,Length