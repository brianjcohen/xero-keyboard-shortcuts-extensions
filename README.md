# Xero Keyboard Shortcuts

A Chrome extension that adds keyboard shortcuts to Xero's bank account reconciliation interface.

## Features

- **Ctrl+Enter** (Windows/Linux) or **Cmd+Enter** (Mac): Presses the OK button for the currently focused transaction in the reconciliation interface

## Installation

1. Clone this repository
2. Open Chrome and navigate to `chrome://extensions/`
3. Enable "Developer mode" in the top right
4. Click "Load unpacked" and select the extension directory

## Development

To implement the OK button click functionality, we need the following information about Xero's reconciliation interface:

1. The URL pattern for the bank reconciliation page
2. The HTML structure of the transaction rows
3. The selector or identifier for the OK button
4. The conditions under which the OK button becomes visible/clickable

## Contributing

Feel free to submit issues and enhancement requests. 