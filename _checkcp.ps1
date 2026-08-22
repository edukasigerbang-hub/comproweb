$b = [System.IO.File]::ReadAllBytes('src\pages\about.astro')
$s = [System.Text.Encoding]::UTF8.GetString($b)
$idx = $s.IndexOf('currentPath')
if ($idx -ge 0) {
    $seg = $s.Substring($idx, [Math]::Min(60, $s.Length - $idx))
    Write-Output "repr: $seg"
    $hex = ($b[$idx..($idx + [Math]::Min(60, $b.Length - $idx - 1)] | ForEach-Object { "{0:X2}" -f $_ }) -join ' '
    Write-Output "hex: $hex"
} else {
    Write-Output "currentPath not found in about.astro"
}
# Check all page files for missing closing brace on currentPath
Write-Output "`n=== Checking all page files for currentPath syntax ==="
Get-ChildItem -Path 'src\pages' -Include '*.astro' -Recurse | ForEach-Object {
    $path = $_.FullName
    $c = [System.IO.File]::ReadAllText($path, [System.Text.Encoding]::UTF8)
    if (-not $c) { $c = [System.IO.File]::ReadAllText($path) }
    $idx2 = $c.IndexOf('currentPath')
    if ($idx2 -ge 0) {
        $line = ($c.Substring(0, $idx2) -split "`n").Count
        $context = $c.Substring($idx2, [Math]::Min(80, $c.Length - $idx2))
        Write-Output "$($_.Name) line ~$line: $context"
    }
}
