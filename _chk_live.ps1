$req = [System.Net.WebRequest]::Create('https://gerbangciptasarana.edukasigerbang.workers.dev/about/');
$req.Method = 'GET';
$r = $req.GetResponse();
Write-Output "Content-Type header: $($r.ContentType)";
$sr = New-Object System.IO.StreamReader($r.GetResponseStream(), [System.Text.Encoding]::UTF8);
$html = $sr.ReadToEnd();
$metaMatch = [regex]::Match($html, '<meta[^>]+charset[^>]+>', [System.Text.RegularExpressions.RegexOptions]::IgnoreCase);
Write-Output "meta charset tag: $($metaMatch.Value)";
$moji = $html.IndexOf([char]0x00C2);
if ($moji -ge 0) {
  Write-Output "Found char U+00C2 at position $moji - possible double-encoding";
  Write-Output "Context: ..." + $html.Substring([Math]::Max(0,$moji-10), 25) + "...";
} else {
  Write-Output "No U+00C2 found - middle dot is correct UTF-8 (U+00B7)";
}
