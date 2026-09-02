I have a merge/reconciliation spec at MERGE_INSTRUCTIONS.md in this project
root. This is a follow-up pass on the existing site, not a fresh build —
before touching any code, read the full document, then re-read INSTRUCTIONS.md
(the original build spec) alongside it, since MERGE_INSTRUCTIONS.md assumes
that original design system and component structure still apply.

Pay close attention to the four categories in the document — UNTOUCHED, FIX
IN PLACE, REBUILD, and BUILD FRESH — they require different levels of change.
Do not modify anything listed as UNTOUCHED as a side effect of other work.

Follow the Suggested Order of Work in Section 7 exactly. After completing
steps 1 through 5 (rebrand, Globe component, type/spacing fix, mobile menu
fix, and the card interaction), stop and show me the result before continuing
— these are foundational and used across multiple pages, so I want to confirm
they're correct before they get built into every remaining page.

For any image slot described in Section 6, do not attempt to generate or
source real images — build the properly-sized placeholder container only,
exactly as specified.

Once all steps are complete, list anything from the document you were unable
to fully match or had to interpret, so I can review it.
