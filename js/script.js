$(document).ready(function() {
    // start: Sidebar
    $('.sidebar-dropdown-menu').slideUp('fast')

    $('.sidebar-menu-item.has-dropdown > a, .sidebar-dropdown-menu-item.has-dropdown > a').click(function(e) {
        e.preventDefault()

        if(!($(this).parent().hasClass('focused'))) {
            $(this).parent().parent().find('.sidebar-dropdown-menu').slideUp('fast')
            $(this).parent().parent().find('.has-dropdown').removeClass('focused')
        }

        $(this).next().slideToggle('fast')
        $(this).parent().toggleClass('focused')
    })

    $('.sidebar-toggle').click(function() {
        $('.sidebar').toggleClass('collapsed')

        $('.sidebar.collapsed').mouseleave(function() {
            $('.sidebar-dropdown-menu').slideUp('fast')
            $('.sidebar-menu-item.has-dropdown, .sidebar-dropdown-menu-item.has-dropdown').removeClass('focused')
        })
    })

    $('.sidebar-overlay').click(function() {
        $('.sidebar').addClass('collapsed')

        $('.sidebar-dropdown-menu').slideUp('fast')
        $('.sidebar-menu-item.has-dropdown, .sidebar-dropdown-menu-item.has-dropdown').removeClass('focused')
    })

    if(window.innerWidth < 768) {
        $('.sidebar').addClass('collapsed')
    }
    // end: Sidebar
    // Escuchar eventos de cambio en los checkboxes
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', function () {
        const row = this.parentElement.parentElement;
        const name = row.firstElementChild.textContent;
        const passedInterview = row.querySelector('#entrevista' + (Array.from(row.parentElement.children).indexOf(row) + 1));
        const deliveredCV = row.querySelector('#cv' + (Array.from(row.parentElement.children).indexOf(row) + 1));
        
        console.log(`Candidato: ${name}`);
        console.log(`Pasó la entrevista: ${passedInterview.checked ? 'Sí' : 'No'}`);
        console.log(`Entregó su CV: ${deliveredCV.checked ? 'Sí' : 'No'}`);
    });
    });


    // start: Charts
    const labels = [
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
    ];

    const salesChart = new Chart($('#sales-chart'), {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                backgroundColor: '#0a1a2a',
                data: [20, 50, 60, 27, 70, 38, 45],
            }]
        },
        options: {
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    })

    const visitorsChart = new Chart($('#visitors-chart'), {
        type: 'doughnut',
        data: {
            labels: ['Children', 'Teenager', 'Parent'],
            datasets: [{
                backgroundColor: ['#6610f2', '#198754', '#ffc107'],
                data: [40, 60, 80],
            }]
        }
    })
    // end: Charts
})

