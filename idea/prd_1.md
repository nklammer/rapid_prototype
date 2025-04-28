# Product Requirement Document: Navigability and Search

## Last Updated - April 26, 2025

Goal: to increase the usability of the app when choosing from a larger inventory (going from 10 inventory items in development testing to more than 100 in buildout)

What:
**Front End**
- Implement side bar P0
  - selectable SDG tags to filter by (P1 the tags are colored by their associated SDG)
  - the number of results by SDG tag shows populated in the SDG tag selector
  - the SDG tag selectors are ranked by the number of results with accordian expander
  - selectable techstack tags to filter by
  - the number of results by techstack tag shows populated in the techstack tag selector
  - the techstack tag selectors are ranked by the number of results with accordian expander
- Plan for later search bar P1

How: 
- Describe the feature very specifically and use AI-coder like Cursor AI, WindSurf, or Devin AI
- Steal great ideas like the sidebar navigation from climatetriage.com
  - Specs:
    - Sidebar `const` object defined in components/ui/sidebar.tsx

## Sidebar implementation on climatetriage.com
https://github.com/protontypes/climate-triage/tree/main/components

![Sidebar Example](design\climate_triage_design_prototype.png)
