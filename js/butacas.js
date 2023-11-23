console.log("LLEGA");
document.addEventListener('DOMContentLoaded', function () {
    const seatingChart = document.getElementById('seating-chart');
    const selectedSeatsList = document.getElementById('selected-seats-list');
    const totalPrice = document.getElementById('total-price');
    const reserveButton = document.getElementById('reserve-button');
    const seats = [];

    // Crear el plano de butacas
    for (let i = 1; i <= 80; i++) {
        const seat = document.createElement('div');
        seat.className = 'seat';
        seat.textContent = i;
        seat.addEventListener('click', () => toggleSeat(seat));
        seatingChart.appendChild(seat);
        seats.push(seat);
    }

    const selectedSeats = [];
    const seatPrice = 15; // Precio de cada butaca

    function toggleSeat(seat) {
        seat.classList.toggle('selected');
        const seatNumber = parseInt(seat.textContent);

        if (selectedSeats.includes(seatNumber)) {
            selectedSeats.splice(selectedSeats.indexOf(seatNumber), 1);
        } else {
            selectedSeats.push(seatNumber);
        }

        updateSelectedSeatsList();
        updateTotalPrice();
    }

    function updateSelectedSeatsList() {
        selectedSeatsList.innerHTML = '';
        selectedSeats.forEach(seat => {
            const listItem = document.createElement('li');
            listItem.textContent = `Butaca ${seat}`;
            selectedSeatsList.appendChild(listItem);
        });
    }

    function updateTotalPrice() {
        const total = selectedSeats.length * seatPrice;
        totalPrice.textContent = total;
    }

    // Manejar la reservación al hacer clic en el botón "Reservar"
    reserveButton.addEventListener('click', () => {
        if (selectedSeats.length > 0) {
            alert(`Has reservado las butacas: ${selectedSeats.join(', ')}\nTotal a pagar: $${selectedSeats.length * seatPrice}`);
        } else {
            alert('Por favor, selecciona al menos una butaca para reservar.');
        }
    });
});
