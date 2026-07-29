$file = 'c:\Users\ASD\Downloads\ProjectMERN\ProjectMERN\firstapp-newone\src\component\Package\Packagedetails.tsx'

# Read file as lines
$lines = Get-Content $file

$clean = @()
$skip = $false

foreach ($line in $lines) {
    # Detect start of injected markup
    if ($line -match '<edit_file>|The file got corrupted|Let me fix the corrupted|<old_str>|<new_str>|<path>c:|</path>|</ï½œ|DSML|633;C') {
        $skip = $true
    }
    
    # Detect end of injected markup
    if ($line -match '</ï½œï½œDSML|</edit_file>|</\\|\\">') {
        $skip = $true
        continue
    }
    
    if (-not $skip) {
        $clean += $line
    }
    
    # Reset skip on certain patterns
    if ($line -match '\]$' -and $skip) {
        # Check if this is a clean line
    }
}

# Write clean content
$clean | Out-File $file -Encoding utf8 -Force

Write-Host "Original lines: $($lines.Count)"
Write-Host "Clean lines: $($clean.Count)"
Write-Host "Done"

