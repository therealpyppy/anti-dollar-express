# AliExpress Anti DollarExpress Chrome Extension

This Chrome extension detects DollarExpress links on AliExpress and provides a quick way to view the original product.

## Setup Instructions

### 1. Load the Extension in Chrome

1. Open Chrome and go to `chrome://extensions/`
2. Enable "Developer mode" (toggle in top right)
3. Click "Load unpacked"
4. Select the folder containing your extension files
5. The extension should now appear in your extensions list

### 2. Test the Extension

1. Go to any AliExpress page with DollarExpress links
2. The extension will detect DollarExpress URLs and show a popup
3. Click "Go to Original Product" to view the original AliExpress product

## Features

- Detects DollarExpress links automatically
- Extracts product IDs from various URL patterns
- Shows a popup with option to view original product
- Auto-closes after 10 seconds
- Smooth slide-in animation
- Close button for manual dismissal

## Files

- `manifest.json` - Extension configuration
- `content.js` - Main script that runs on AliExpress pages
- `style.css` - Styling for the popup

## Troubleshooting

If the extension doesn't work:
1. Check the browser console for error messages
3. Verify the extension is enabled in Chrome
4. Try refreshing the AliExpress page 