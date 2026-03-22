I added discount logic to the subtotal calculation.

It was a comparatively easy part because almost no UI was changed. The new logic is straightforward.

Also there was a bugfix in the [useSubtotal](../src/hooks/useSubtotal.ts) hook. The issue was that when the user focuses the input field and changes it, the Subtotal value becomes zero. It was because NumberInput passes the value as a string and the hook treats any string as zero. So I added parseFloat to fix it.

I also found out that I forgot to add a semicolon rule, so I added it and ran ESLint fix.