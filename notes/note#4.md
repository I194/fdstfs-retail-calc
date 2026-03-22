I added total (taxed) price calculation.

The RegionSelect component is created. I also created a `types` directory because we have our first shared type – `Region` ([here](../src/types/region.ts)).

Hooks `useDiscount` and `useSubtotal` are deleted because we now calculate the total value and for that we now have a new hook `useApp` which encapsulates all App logic. I think it is important to note that this approach (one hook to rule them all) is okay only for such a small app as this one.

All calculations are covered with unit tests, 53 tests in total. New tests are these ones:
- [getTaxRate](../src/tests/getTaxRate.test.ts)
- [calculateTax](../src/tests/calculateTax.test.ts)
- [calculateTotal](../src/tests/calculateTotal.test.ts)

Basic required functionality of the app is done. I spent almost 3 hours on it in total, but more than 40 minutes I spent on writing these notes. I'll spend an extra ~30 minutes on writing the instructions in README on how to run this app because this is a strict requirement of the task + I will check all my tests one more time because there are a lot of calculations in them and I just want to double-check them.

One extra note: total price currently calculates even when no Region is selected. I added this intentionally because later we might add location auto-detection and it might be that the user is not physically in NZ or they decided to forbid location sharing with us.
