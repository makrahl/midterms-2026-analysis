/* =====================================================================
   MIDTERMS 2026 ANALYSIS LAB – RESULTS FILE
   This is the only file that changes after election night.
   status: "pending" (no results yet) | "partial" (some races open) | "final"
   Use null for anything that is not known / not called yet.
   ===================================================================== */
window.RESULTS = {
  status: "pending",
  asOf: "",                // e.g. "5 November 2026, 7:30 a.m. CET"
  sources: [],             // [{t:"AP race calls", url:"https://..."}]

  // Before the election (for comparison) – Forecast Lab, 31 Oct 2026
  before: { senate: {D:47, R:53}, house: {D:214, R:219, vacant:2} },

  // Totals after the election
  senate: { D:null, R:null, I:null, open:null },   // D incl. King & Sanders
  house:  { D:null, R:null, open:null },
  turnout: null,                                     // % of eligible voters (estimate)

  // The 11 battleground Senate races from the Forecast Lab: "D" | "R" | "I" | null (not called)
  races: { AK:null, GA:null, IA:null, KS:null, ME:null, MI:null, NE:null, NH:null, NC:null, OH:null, TX:null },

  // Selected governor races: {st:"Arizona", winner:"D"|"R"|null, name:"", flip:false}
  governors: [],

  // Newsticker, newest first: {t:"07:10", text:"..."}
  ticker: [],

  // Exit polls / AP VoteCast 2026. margin = Democratic lead in points (negative = Republican lead)
  exit: {
    source: "",            // e.g. "AP VoteCast 2026"
    groups: { latino:null, young:null, suburban:null, women:null, men:null, noncollege:null },
    issues: []             // [{issue:"Economy / cost of living", pct:38}, ...]
  },

  // Short "What the results say" box for each station (plain text or simple HTML)
  notes: { s1:"", s2:"", s3:"", s4:"", s5:"", s6:"", s7:"" }
};
