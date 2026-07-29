$file = "c:\Users\ASD\Downloads\ProjectMERN\ProjectMERN\firstapp-newone\src\component\Package\Packagedetails.tsx"
$current = Get-Content $file -Raw
$pos = $current.IndexOf("  // Manipur")
if ($pos -ge 0) {
    $goodPart = $current.Substring(0, $pos)
    Set-Content $file $goodPart -NoNewline
}
Write-Host "Done. Removed truncated content from Manipur onwards."
