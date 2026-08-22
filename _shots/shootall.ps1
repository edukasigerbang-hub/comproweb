$ErrorActionPreference='Continue'
$edge='C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe'
$base='F:\gerbang cipta\_shots'
$list = @(
  @('home','/',3200),
  @('about','/about',3600),
  @('services','/services',3200),
  @('industries','/industries',2800),
  @('solutions','/solutions',3200),
  @('ge','/gerbang-edukasi',4000),
  @('contact','/contact',2400)
)
foreach($item in $list){
  $n=$item[0]; $u=$item[1]; $h=$item[2]
  $q=[char]34
  $shot = $q + '--screenshot=' + (Join-Path $base ("m-$n.png")) + $q
  $url = "http://localhost:4321$(`"u`")".Replace('u',$u) + "?v=" + (Get-Random)
  $url = $q + "http://localhost:4321$u" + $q
  $wsize = "--window-size=390,$h"
  $p = Start-Process -FilePath $edge -ArgumentList '--headless','--disable-gpu',$wsize,'--virtual-time-budget=15000',$shot,$url -Wait -PassThru
  Write-Output "$n -> exit $($p.ExitCode)"
}
Get-ChildItem $base -Filter 'm-*.png' | Select-Object Name,Length