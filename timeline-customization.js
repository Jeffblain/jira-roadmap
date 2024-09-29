(function() {
    console.log("Jira Timeline Customizer script loaded."); // Log for debug

    // Wait until DOM is fully loaded
    document.addEventListener('DOMContentLoaded', function() {
        console.log("DOM fully loaded, starting customization."); // Log for debug

        // Select all timeline items (assuming class 'timeline-item' exists for simplicity)
        const timelineItems = document.querySelectorAll('.timeline-item');

        if (timelineItems.length === 0) {
            console.error("No timeline items found."); // Log if no items are found
            return;
        }

        timelineItems.forEach(item => {
            const issueName = item.getAttribute('data-issue-name') || "No name";

            // Add issue name as a label to the timeline bar
            let label = document.createElement('span');
            label.className = 'issue-label';
            label.textContent = issueName;
            item.appendChild(label);

            // Default color assignment (by issue type, assuming issue type is stored in a 'data-issue-type' attribute)
            const issueType = item.getAttribute('data-issue-type');
            if (issueType === 'Epic') {
                item.style.backgroundColor = '#3498db'; // Blue for Epic
            } else if (issueType === 'Story') {
                item.style.backgroundColor = '#2ecc71'; // Green for Story
            } else if (issueType === 'Task') {
                item.style.backgroundColor = '#e74c3c'; // Red for Task
            }

            // Manual color adjustment button
            const colorPicker = document.createElement('input');
            colorPicker.type = 'color';
            colorPicker.value = item.style.backgroundColor;
            colorPicker.addEventListener('input', function(e) {
                item.style.backgroundColor = e.target.value;
            });
            item.appendChild(colorPicker);
        });

        // Create a button for auto-assigning colors per issue type
        const autoAssignButton = document.createElement('button');
        autoAssignButton.textContent = 'Auto Assign Colors';
        autoAssignButton.style.position = 'fixed';
        autoAssignButton.style.top = '10px';
        autoAssignButton.style.right = '10px';
        autoAssignButton.style.zIndex = '1000';

        // Add functionality to auto-assign colors based on issue type
        autoAssignButton.addEventListener('click', function() {
            timelineItems.forEach(item => {
                const issueType = item.getAttribute('data-issue-type');
                if (issueType === 'Epic') {
                    item.style.backgroundColor = '#3498db';
                } else if (issueType === 'Story') {
                    item.style.backgroundColor = '#2ecc71';
                } else if (issueType === 'Task') {
                    item.style.backgroundColor = '#e74c3c';
                }
            });
        });

        document.body.appendChild(autoAssignButton);
        console.log("Customization applied.");
    });
})();
