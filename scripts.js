// Search Bar Functionality
document.getElementById('searchInput').addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();
    const sections = document.querySelectorAll('.about, .projects, .technical-affairs, .vdsa, .program-head, .dean-of-college');

    sections.forEach(section => {
        const titleElement = section.querySelector('h2');
        const title = titleElement ? titleElement.textContent.toLowerCase() : '';
        if (title.includes(searchTerm)) {
            section.style.display = 'block';
        } else {
            section.style.display = 'none';
        }
    });
});

// Bar Chart
const barCanvas = document.getElementById('barChart');
if (barCanvas) {
    const barCtx = barCanvas.getContext('2d');
    new Chart(barCtx, {
        type: 'bar',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May'],
            datasets: [{
                label: 'Attendance',
                data: [12, 19, 3, 5, 2],
                backgroundColor: 'rgba(54, 162, 235, 0.7)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true
                }
            },
            plugins: {
                title: {
                    display: true,
                    text: 'Total Attendance of College Students'
                }
            }
        }
    });
}

// Pie Chart
const pieCanvas = document.getElementById('pieChart');
if (pieCanvas) {
    const pieCtx = pieCanvas.getContext('2d');
    new Chart(pieCtx, {
        type: 'pie',
        data: {
            labels: ['College Students', 'Technical Affairs', 'VDSA', 'Program Head', 'Dean of College'],
            datasets: [{
                data: [30, 25, 20, 15, 10],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.7)',
                    'rgba(54, 162, 235, 0.7)',
                    'rgba(255, 206, 86, 0.7)',
                    'rgba(75, 192, 192, 0.7)',
                    'rgba(153, 102, 255, 0.7)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: 'Total Distribution of Data in CDAS'
                },
                tooltip: {
                    callbacks: {
                        title: function() {
                            return ''; // Remove the title
                        },
                        label: function(context) {
                            const label = context.label || '';
                            const value = context.raw;
                            const total = context.dataset.data.reduce((sum, val) => sum + val, 0);
                            const percentage = Math.round((value / total) * 100);
                            return `${label}: ${percentage}%`; // Correct syntax
                        }
                    }
                }
            }
        }
    });
}
