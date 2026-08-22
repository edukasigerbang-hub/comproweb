$wc = New-Object System.Net.WebClient
$b = $wc.DownloadData('https://gerbangciptasarana.edukasigerbang.workers.dev/about/')
# Find "Corporate Profile" in bytes
$idx = 0
$searchBytes = [System.Text.Encoding]::UTF8.GetBytes('Corporate Profile')
for ($i = 0; $i -lt $b.Length - $searchBytes.Length; $i++) {
    if ($b[$i] -eq $searchBytes[0]) {
        $match = $true
        for ($j = 1; $j -lt $searchBytes.Length; $j++) {
            if ($b[$i + $j] -ne $searchBytes[$j]) { $match = $false; break }
        }
        if ($match) { $idx = $i; break }
    }
}
if ($idx -gt 0) {
    $start = [Math]::Max(0, $idx - 30)
    $len = [Math]::Min(70, $b.Length - $idx + 30)
    $hex = ($b[$start..($start + $len - 1)] | ForEach-Object { "{0:X2}" -f $_ }) -join ' '
    Write-Output "hex around 'Corporate Profile':`n$hex"
    Write-Output ""
    Write-Output "decoded as utf8:`n$([System.Text.Encoding]::UTF8.GetString($b[$start..($start + $len - 1)]))"
}
# Also check if file starts with BOM
Write-Output "`nfirst 10 bytes: $(($b[0..9] | ForEach-Object { '{0:X2}' -f $_ }) -join ' ')"
