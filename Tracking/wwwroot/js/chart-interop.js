let sleepChart = null;

window.createChart = (canvasId, chartData) => {
    const ctx = document.getElementById(canvasId);
    
    // Destroy existing chart if it exists
    if (sleepChart) {
        sleepChart.destroy();
    }
    
    // Create new chart
    sleepChart = new Chart(ctx, chartData);
};