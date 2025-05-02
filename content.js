// Listen for keyboard events
document.addEventListener('keydown', function(event) {
    // Check for Ctrl+Enter (Windows/Linux) or Cmd+Enter (Mac)
    if ((event.ctrlKey || event.metaKey) && event.key === 'Enter') {
        // Find the currently focused transaction row
        const focusedElement = document.activeElement;
        const transactionRow = focusedElement.closest('.line');
        
        if (transactionRow) {
            // Check if we're in the Create tab
            const createTab = transactionRow.querySelector('.t2');
            const isCreateTabActive = createTab && window.getComputedStyle(createTab).borderBottomColor === 'rgb(0, 120, 200)';
            
            // Check if we're in the Transfer tab
            const transferTab = transactionRow.querySelector('.t4');
            const isTransferTabActive = transferTab && window.getComputedStyle(transferTab).borderBottomColor === 'rgb(0, 120, 200)';
            
            if (isCreateTabActive) {
                // For Create tab, check if both Who and What fields have values
                const whatInput = transactionRow.querySelector('input[name*="paidAccount"][name*="_value"]');
                const whatHiddenInput = whatInput ? document.getElementById(whatInput.id.replace('_value', '')) : null;
                const whoHiddenInput = whatHiddenInput ? document.getElementById(whatHiddenInput.id.replace('paidAccount', 'paidToID')) : null;
                
                if (whoHiddenInput && whatHiddenInput && whoHiddenInput.value && whatHiddenInput.value) {
                    const okButton = transactionRow.querySelector('.ok a');
                    if (okButton && okButton.style.visibility !== 'hidden') {
                        okButton.click();
                    }
                }
            } else if (isTransferTabActive) {
                // For Transfer tab, check if a bank account is selected
                const transferAccountInput = transactionRow.querySelector('input[name*="transferAccount"][name*="_value"]');
                
                if (transferAccountInput && transferAccountInput.value) {
                    const okButton = transactionRow.querySelector('.ok a');
                    if (okButton && okButton.style.visibility !== 'hidden') {
                        okButton.click();
                    }
                }
            }
        }
    }
}); 