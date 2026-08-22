$b = [System.IO.File]::ReadAllBytes('src\pages\about.astro')
$s = [System.Text.Encoding]::UTF8.GetString($b)
$idx = $s.IndexOf('Corporate Profile')
if ($idx -ge 0) {
    $start = [Math]::Max(0, $idx - 20)
    $len = [Math]::Min(40, $s.Length - $idx + 20)
    $rawBytes = $b[$start..($start + $len - 1)]
    $hex = ($rawBytes | ForEach-Object { "{0:X2}" -f $_ }) -join ' '
    $decoded = [System.Text.Encoding]::UTF8.GetString($rawBytes)
    Write-Output "hex: $hex"
    Write-Output "decoded: $decoded"
}
