# Jira Timeline Customizer

This project customizes the timeline view in Jira to display the issue name on each timeline item and allows users to assign custom colors to issues based on their type (Epic, Story, Task). It also provides a manual color picker for individual issues.

## Features
- Display issue names directly on the Jira timeline.
- Auto-assign colors to issues based on their type (Epic, Story, Task).
- Allow manual color selection for individual timeline bars.
- Option to auto-assign colors across the entire timeline with a single button click.

## How to Use

### Step 1: Install the Bookmarklet
You can use this custom script in Jira by creating a **bookmarklet**. Follow the steps below to set it up:

1. **Create a New Bookmark** in your browser's bookmark manager.
   - Name the bookmark something like `Jira Timeline Customizer`.

2. **Paste the Following Code in the URL Field**:
   ```javascript
   javascript:(function() {
       var script = document.createElement('script');
       script.src = 'https://raw.githubusercontent.com/YOUR-USERNAME/YOUR-REPO/main/timeline-customization.js';
       document.body.appendChild(script);
   })();
