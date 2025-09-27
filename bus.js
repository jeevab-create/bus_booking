
// Sample data for the bus
// const busData = {
//     id: 1,
//     name: "Volvo Multi-Axle AC Seater",
//     type: "seater", // "seater" or "sleeper"
//     operator: "RedBus Express",
//     departure: "08:30",
//     arrival: "20:45",
//     duration: "12h 15m",
//     price: 1250,
//     route: {
//         from: "Mumbai",
//         to: "Delhi"
//     },
//     date: "2025-05-25",
//     seats: {
//         total: 40,
//         booked: [3, 5, 12, 15, 20, 25, 30, 35], // Seat numbers that are already booked
//         maleOccupied: [7, 10, 18, 22, 28], // Seats occupied by males
//     femaleOccupied: [2, 9, 14, 19, 24], // Seats occupied by females
//     layout: {
//         floor1: {
//             rows: 8,
//             cols: 4,
//             gapAfter: 2 // After which column to add a gap
//         }
//     }
// },
// amenities: ["AC", "Charging Points", "Water Bottle", "Blanket", "WiFi"],
// boardingPoints: [
//     { id: 1, name: "Mumbai Central", time: "08:00 AM" },
//     { id: 2, name: "Andheri East", time: "08:15 AM" },
//     { id: 3, name: "Borivali West", time: "08:25 AM" }
// ],
// droppingPoints: [
//     { id: 1, name: "Delhi ISBT", time: "08:45 PM" },
//     { id: 2, name: "Connaught Place", time: "09:00 PM" },
//     { id: 3, name: "Rajiv Chowk", time: "09:15 PM" }
// ]
// };
// Get bus data from localStorage
// Get bus data from localStorage
const storedBus = JSON.parse(localStorage.getItem('selectedBus'));

if (!storedBus) {
// Redirect back if no bus data found
window.location.href = 'index.html';
}

// Transform the stored data into the format expected by the page
const busData = {
id: storedBus.id,
name: storedBus.name,
type: storedBus.type.toLowerCase().includes('sleeper') ? "sleeper" : "seater",
operator: storedBus.operator,
departure: storedBus.departure,
arrival: storedBus.arrival,
duration: storedBus.duration,
price: storedBus.price,
route: {
from: storedBus.fromCity.charAt(0).toUpperCase() + storedBus.fromCity.slice(1),
to: storedBus.toCity.charAt(0).toUpperCase() + storedBus.toCity.slice(1)
},
date: storedBus.travelDate,
seats: {
total: storedBus.seats || 45, // Use the seats count from stored data
booked: [3, 5, 12, 15, 20, 25, 30, 35], // Sample booked seats
maleOccupied: [7, 10, 18, 22, 28], // Sample male occupied
femaleOccupied: [2, 9, 14, 19, 24], // Sample female occupied
layout: {
    floor1: {
        rows: Math.ceil((storedBus.seats || 45)/4), // Calculate rows based on seat count
        cols: 4,
        gapAfter: 2
    }
}
},
amenities: storedBus.amenities || [],
boardingPoints: [
{ id: 1, name: `${storedBus.fromCity.charAt(0).toUpperCase() + storedBus.fromCity.slice(1)} Central`, time: `${parseInt(storedBus.departure.split(':')[0])-1}:00` },
{ id: 2, name: "Midtown Station", time: `${parseInt(storedBus.departure.split(':')[0])-0.5}:00` },
{ id: 3, name: "Last Stop", time: storedBus.departure }
],
droppingPoints: [
{ id: 1, name: `${storedBus.toCity.charAt(0).toUpperCase() + storedBus.toCity.slice(1)} Central`, time: storedBus.arrival },
{ id: 2, name: "Downtown Station", time: `${parseInt(storedBus.arrival.split(':')[0])+0.5}:00` },
{ id: 3, name: "Final Stop", time: `${parseInt(storedBus.arrival.split(':')[0])+1}:00` }
]
};
function updateBusInfoUI() {
// Bus name and type
document.getElementById('busNameDisplay').textContent = busData.name;
document.getElementById('busTypeDisplay').innerHTML = `
<i class="fas ${busData.type === 'sleeper' ? 'fa-bed' : 'fa-snowflake'}"></i>
<span>${busData.type === 'sleeper' ? 'AC Sleeper' : 'AC Seater'}</span>
`;

// Price
document.getElementById('totalPriceDisplay').textContent = busData.price.toLocaleString('en-IN');

// Route and timing
document.getElementById('routeDisplay').textContent = `${busData.route.from} to ${busData.route.to}`;
document.getElementById('dateDisplay').textContent = formatDate(busData.date);
document.getElementById('departureDisplay').textContent = formatTime(busData.departure);
document.getElementById('arrivalDisplay').textContent = formatTime(busData.arrival);

// Summary card
document.getElementById('summaryBusType').textContent = busData.type === 'sleeper' ? 'AC Sleeper' : 'AC Seater';
document.getElementById('summaryDate').textContent = formatDate(busData.date);
document.getElementById('summaryDeparture').textContent = formatTime(busData.departure);
document.getElementById('summaryArrival').textContent = formatTime(busData.arrival);
}

// Call this function after defining busData
updateBusInfoUI();

// Also add this cities object at the top of your bus.html script if not already present
// const cities = {
//     mumbai: 'Mumbai',
//     delhi: 'Delhi',
//     bangalore: 'Bangalore',
//     chennai: 'Chennai',
//     kolkata: 'Kolkata',
//     pune: 'Pune',
//     hyderabad: 'Hyderabad',
//     ahmedabad: 'Ahmedabad'
// };

// Selected seats data
const selectedSeats = [];
let passengerCount = 0;

// DOM elements
const busLayout = document.getElementById('busLayout');
const selectedSeatsList = document.getElementById('selectedSeatsList');
const selectedCount = document.getElementById('selectedCount');
const passengerFormFields = document.getElementById('passengerFormFields');
const proceedButton = document.getElementById('proceedButton');
const notification = document.getElementById('notification');
const notificationText = document.getElementById('notificationText');
const priceSeatCount = document.getElementById('priceSeatCount');
const priceTotal = document.getElementById('priceTotal');
const summarySeats = document.getElementById('summarySeats');
const summaryTotal = document.getElementById('summaryTotal');
const helpFab = document.getElementById('helpFab');

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
renderBusLayout();
updateSummary();
renderBoardingAndDroppingPoints();

// Set bus info
document.getElementById('routeDisplay').textContent = `${busData.route.from} to ${busData.route.to}`;
document.getElementById('dateDisplay').textContent = formatDate(busData.date);
document.getElementById('departureDisplay').textContent = formatTime(busData.departure);
document.getElementById('arrivalDisplay').textContent = formatTime(busData.arrival);

// Summary card data
document.getElementById('summaryBusType').textContent = busData.type === 'seater' ? 'AC Seater' : 'AC Sleeper';
document.getElementById('summaryDate').textContent = formatDate(busData.date);
document.getElementById('summaryDeparture').textContent = formatTime(busData.departure);
document.getElementById('summaryArrival').textContent = formatTime(busData.arrival);

// Event listeners
proceedButton.addEventListener('click', proceedToPayment);
        helpFab.addEventListener('click', showHelp);
        renderBusLayout();
updateBusInfoUI();
});

// Render bus layout based on bus type
function renderBusLayout() {
busLayout.innerHTML = '';

if (busData.type === 'seater') {
    renderSeaterLayout();
} else {
    renderSleeperLayout();
}
}

// Render seater bus layout
// In your renderSeaterLayout() function, update the seat creation:
function renderSeaterLayout() {
const floorDiv = document.createElement('div');
floorDiv.className = 'bus-floor';

const floorLabel = document.createElement('div');
floorLabel.className = 'floor-label';
floorLabel.textContent = 'Lower Deck';
floorDiv.appendChild(floorLabel);

const seatsDiv = document.createElement('div');
seatsDiv.className = 'bus-seats';

// Add driver seat
const driverSeat = document.createElement('div');
driverSeat.className = 'driver-seat';
driverSeat.innerHTML = '<i class="fas fa-steering-wheel"></i>';
seatsDiv.appendChild(driverSeat);

const { rows, cols, gapAfter } = busData.seats.layout.floor1;
let seatNumber = 1;

for (let row = 0; row < rows; row++) {
const rowDiv = document.createElement('div');
rowDiv.className = 'seats-row';

for (let col = 0; col < cols; col++) {
    // Stop if we've reached total seats
    if (seatNumber > busData.seats.total) break;
    
    // Add gap after specified column
    if (col === gapAfter) {
        const gapDiv = document.createElement('div');
        gapDiv.className = 'seat-gap';
        rowDiv.appendChild(gapDiv);
    }
    
    const seat = createSeatElement(seatNumber);
    rowDiv.appendChild(seat);
    seatNumber++;
}

seatsDiv.appendChild(rowDiv);
}

floorDiv.appendChild(seatsDiv);
busLayout.appendChild(floorDiv);
}

// Render sleeper bus layout (simplified version)
function renderSleeperLayout() {
busLayout.innerHTML = '';

// Create lower deck
const lowerDeckDiv = document.createElement('div');
lowerDeckDiv.className = 'bus-floor';

const lowerDeckLabel = document.createElement('div');
lowerDeckLabel.className = 'floor-label';
lowerDeckLabel.textContent = 'Lower Deck';
lowerDeckDiv.appendChild(lowerDeckLabel);

const lowerDeckSeats = document.createElement('div');
lowerDeckSeats.className = 'sleeper-deck';

// Add driver seat
const driverSeat = document.createElement('div');
driverSeat.className = 'driver-seat';
driverSeat.innerHTML = '<i class="fas fa-steering-wheel"></i>';
lowerDeckSeats.appendChild(driverSeat);

// Create sleeper berths for lower deck
const lowerBerthsDiv = document.createElement('div');
lowerBerthsDiv.className = 'sleeper-berths';

// Left side (window side) - single berths
const leftSideLower = document.createElement('div');
leftSideLower.className = 'sleeper-side left';

const leftTitleLower = document.createElement('div');
leftTitleLower.className = 'sleeper-side-title';
leftTitleLower.textContent = 'Window Side';
leftSideLower.appendChild(leftTitleLower);

// Right side (aisle side) - double berths
const rightSideLower = document.createElement('div');
rightSideLower.className = 'sleeper-side right';

const rightTitleLower = document.createElement('div');
rightTitleLower.className = 'sleeper-side-title';
rightTitleLower.textContent = 'Aisle Side';
rightSideLower.appendChild(rightTitleLower);

// Create lower deck berths (1-12)
for (let i = 1; i <= 18; i++) {
const berth = createSleeperBerthElement(i);
if (i <= 6) {
    // Left side - single berths
    leftSideLower.appendChild(berth);
} else {
    // Right side - group every two berths in a row
    if ((i - 6) % 2 === 1) {
        const berthRow = document.createElement('div');
        berthRow.style.display = 'flex';
        berthRow.style.flexDirection = 'row';
        berthRow.style.gap = '1.5rem';
        berthRow.appendChild(berth);
        rightSideLower.appendChild(berthRow);
    } else {
        // Add to the previous row
        const lastRow = rightSideLower.lastChild;
        if (lastRow) {
            lastRow.appendChild(berth);
        } else {
            rightSideLower.appendChild(berth);
        }
    }
}
}

lowerBerthsDiv.appendChild(leftSideLower);
lowerBerthsDiv.appendChild(rightSideLower);
lowerDeckSeats.appendChild(lowerBerthsDiv);
lowerDeckDiv.appendChild(lowerDeckSeats);
busLayout.appendChild(lowerDeckDiv);

// Add deck divider
const divider = document.createElement('div');
divider.className = 'deck-divider';
busLayout.appendChild(divider);

// Create upper deck
const upperDeckDiv = document.createElement('div');
upperDeckDiv.className = 'bus-floor';

const upperDeckLabel = document.createElement('div');
upperDeckLabel.className = 'floor-label';
upperDeckLabel.textContent = 'Upper Deck';
upperDeckDiv.appendChild(upperDeckLabel);

const upperDeckSeats = document.createElement('div');
upperDeckSeats.className = 'sleeper-deck';

// Create sleeper berths for upper deck
const upperBerthsDiv = document.createElement('div');
upperBerthsDiv.className = 'sleeper-berths';

// Left side (window side) - single berths
const leftSideUpper = document.createElement('div');
leftSideUpper.className = 'sleeper-side left';

const leftTitleUpper = document.createElement('div');
leftTitleUpper.className = 'sleeper-side-title';
leftTitleUpper.textContent = 'Window Side';
leftSideUpper.appendChild(leftTitleUpper);

// Right side (aisle side) - double berths
const rightSideUpper = document.createElement('div');
rightSideUpper.className = 'sleeper-side right';

const rightTitleUpper = document.createElement('div');
rightTitleUpper.className = 'sleeper-side-title';
rightTitleUpper.textContent = 'Aisle Side';
rightSideUpper.appendChild(rightTitleUpper);

// Create upper deck berths (13-24)
for (let i = 19; i <= 36; i++) {
const berth = createSleeperBerthElement(i);
if (i <= 24) {
    // Left side - single berths
    leftSideUpper.appendChild(berth);
} else {
    // Right side - group every two berths in a row
    if ((i - 18) % 2 === 1) {
        const berthRow = document.createElement('div');
        berthRow.style.display = 'flex';
        berthRow.style.flexDirection = 'row';
        berthRow.style.gap = '1.5rem';
        berthRow.appendChild(berth);
        rightSideUpper.appendChild(berthRow);
    } else {
        // Add to the previous row
        const lastRow = rightSideUpper.lastChild;
        if (lastRow) {
            lastRow.appendChild(berth);
        } else {
            rightSideUpper.appendChild(berth);
        }
    }
}
}

upperBerthsDiv.appendChild(leftSideUpper);
upperBerthsDiv.appendChild(rightSideUpper);
upperDeckSeats.appendChild(upperBerthsDiv);
upperDeckDiv.appendChild(upperDeckSeats);
busLayout.appendChild(upperDeckDiv);
}
// Create seat element
function createSeatElement(seatNumber, type = 'seater') {
const seat = document.createElement('div');
seat.className = `seat ${type}`;
seat.textContent = seatNumber;
seat.dataset.seatNumber = seatNumber;

// Check if seat is booked
if (busData.seats.booked.includes(seatNumber)) {
    seat.classList.add('booked');
    return seat;
}

// Check if seat is occupied by male
if (busData.seats.maleOccupied.includes(seatNumber)) {
    seat.classList.add('male');
    seat.classList.add('booked');
    return seat;
}

// Check if seat is occupied by female
if (busData.seats.femaleOccupied.includes(seatNumber)) {
    seat.classList.add('female');
    seat.classList.add('booked');
    return seat;
}

// Add click event for available seats
seat.addEventListener('click', function() {
    toggleSeatSelection(seat, seatNumber);
});

return seat;
}

function createSleeperBerthElement(berthNumber) {
    const berth = document.createElement('div');
    berth.className = 'sleeper-berth';
    berth.innerHTML = `<div class="sleeper-berth-number">${berthNumber}</div>`;
    berth.dataset.seatNumber = berthNumber;
    
    // Check if berth is booked
    if (busData.seats.booked.includes(berthNumber)) {
        berth.classList.add('booked');
        return berth;
    }
    
    // Check if berth is occupied by male
    if (busData.seats.maleOccupied.includes(berthNumber)) {
        berth.classList.add('male');
        berth.classList.add('booked');
        return berth;
    }
    
    // Check if berth is occupied by female
    if (busData.seats.femaleOccupied.includes(berthNumber)) {
        berth.classList.add('female');
        berth.classList.add('booked');
        return berth;
    }
    
    // Add click event for available berths
    berth.addEventListener('click', function() {
        toggleSeatSelection(berth, berthNumber);
    });
    
    return berth;
}
// Toggle seat selection
function toggleSeatSelection(seatElement, seatNumber) {
const index = selectedSeats.indexOf(seatNumber);

if (index === -1) {
    // Select seat
    if (selectedSeats.length >= 6) {
        showNotification('You can select maximum 6 seats', 'warning');
        return;
    }
    
    selectedSeats.push(seatNumber);
    seatElement.classList.add('selected');
    showNotification(`Seat ${seatNumber} selected`);
} else {
    // Deselect seat
    selectedSeats.splice(index, 1);
    seatElement.classList.remove('selected');
    showNotification(`Seat ${seatNumber} removed`, 'warning');
}

updateSelectedSeatsDisplay();
updatePassengerForm();
updateSummary();

// Enable/disable proceed button
proceedButton.disabled = selectedSeats.length === 0;
}

// Update selected seats display
function updateSelectedSeatsDisplay() {
selectedSeatsList.innerHTML = '';
selectedCount.textContent = selectedSeats.length;

selectedSeats.forEach(seatNumber => {
    const seatBadge = document.createElement('div');
    seatBadge.className = 'seat-badge';
    seatBadge.innerHTML = `
        <span>${seatNumber}</span>
        <i class="fas fa-times"></i>
    `;
    
    // Add click event to remove seat
    seatBadge.querySelector('i').addEventListener('click', function(e) {
        e.stopPropagation();
        const seatElement = document.querySelector(`.seat[data-seat-number="${seatNumber}"]`);
        if (seatElement) {
            seatElement.classList.remove('selected');
        }
        
        const index = selectedSeats.indexOf(seatNumber);
        if (index !== -1) {
            selectedSeats.splice(index, 1);
            updateSelectedSeatsDisplay();
            updatePassengerForm();
            updateSummary();
            showNotification(`Seat ${seatNumber} removed`, 'warning');
        }
        
        if (selectedSeats.length === 0) {
            proceedButton.disabled = true;
        }
    });
    
    selectedSeatsList.appendChild(seatBadge);
});
}

function renderBoardingAndDroppingPoints() {
const boardingContainer = document.getElementById('boardingPointsContainer');
const droppingContainer = document.getElementById('droppingPointsContainer');

// Clear existing content
boardingContainer.innerHTML = '';
droppingContainer.innerHTML = '';

// Add boarding points title
const boardingTitle = document.createElement('h3');
boardingTitle.className = 'point-title';
boardingTitle.innerHTML = '<i class="fas fa-map-marker-alt"></i> Boarding Points';
boardingContainer.appendChild(boardingTitle);

// Add boarding points
busData.boardingPoints.forEach((point, index) => {
const pointItem = document.createElement('div');
pointItem.className = 'point-item';
pointItem.innerHTML = `
    <input type="radio" name="boardingPoint" id="boarding${point.id}" class="point-checkbox" ${index === 0 ? 'checked' : ''}>
    <div class="point-info">
        <div class="point-place">
            ${point.name}
            ${index === 0 ? '<i class="fas fa-check-circle"></i>' : ''}
        </div>
        <div class="point-time">${point.time} (${calculateTimeDifference(point.time, busData.departure)} before departure)</div>
    </div>
`;
boardingContainer.appendChild(pointItem);
});

// Add dropping points title
const droppingTitle = document.createElement('h3');
droppingTitle.className = 'point-title';
droppingTitle.innerHTML = '<i class="fas fa-map-marker-alt"></i> Dropping Points';
droppingContainer.appendChild(droppingTitle);

// Add dropping points
busData.droppingPoints.forEach((point, index) => {
const pointItem = document.createElement('div');
pointItem.className = 'point-item';
pointItem.innerHTML = `
    <input type="radio" name="droppingPoint" id="dropping${point.id}" class="point-checkbox" ${index === 0 ? 'checked' : ''}>
    <div class="point-info">
        <div class="point-place">
            ${point.name}
            ${index === 0 ? '<i class="fas fa-check-circle"></i>' : ''}
        </div>
        <div class="point-time">${point.time} (${calculateTimeDifference(busData.arrival, point.time)} after arrival)</div>
    </div>
`;
droppingContainer.appendChild(pointItem);
});

// Add event listeners to radio buttons
document.querySelectorAll('input[name="boardingPoint"]').forEach(radio => {
radio.addEventListener('change', function() {
    updateSelectedPoint(this, 'boarding');
});
});

document.querySelectorAll('input[name="droppingPoint"]').forEach(radio => {
radio.addEventListener('change', function() {
    updateSelectedPoint(this, 'dropping');
});
});
}
function updateSelectedPoint(radio, type) {
const pointId = radio.id;
const pointContainer = document.getElementById(`${type}PointsContainer`);

// Remove all check icons
pointContainer.querySelectorAll('.fa-check-circle').forEach(icon => {
icon.style.display = 'none';
});

// Add check icon to selected point
const selectedPoint = radio.nextElementSibling.querySelector('.point-place');
const checkIcon = document.createElement('i');
checkIcon.className = 'fas fa-check-circle';
selectedPoint.appendChild(checkIcon);
}
function calculateTimeDifference(time1, time2) {
// Convert times to minutes since midnight for easier calculation
const time1Parts = time1.split(':');
const time1Hours = parseInt(time1Parts[0]);
const time1Minutes = parseInt(time1Parts[1].split(' ')[0]); // Handle AM/PM if present
const time1Total = time1Hours * 60 + time1Minutes;

const time2Parts = time2.split(':');
const time2Hours = parseInt(time2Parts[0]);
const time2Minutes = parseInt(time2Parts[1].split(' ')[0]); // Handle AM/PM if present
const time2Total = time2Hours * 60 + time2Minutes;

const diffMinutes = Math.abs(time1Total - time2Total);

if (diffMinutes < 60) {
return `${diffMinutes} mins`;
} else {
const hours = Math.floor(diffMinutes / 60);
const minutes = diffMinutes % 60;
return `${hours}h ${minutes}m`;
}
}
// Update passenger form based on selected seats
function updatePassengerForm() {
passengerFormFields.innerHTML = '';

selectedSeats.forEach((seatNumber, index) => {
    const passengerDiv = document.createElement('div');
    passengerDiv.className = 'form-group';
    passengerDiv.innerHTML = `
        <label for="passenger${index + 1}">Passenger ${index + 1} (Seat ${seatNumber})</label>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
            <div>
                <input type="text" id="passenger${index + 1}Name" placeholder="Full Name" required>
            </div>
            <div>
                <select id="passenger${index + 1}Gender" required>
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>
            </div>
        </div>
        <div style="margin-top: 0.8rem;">
            <input type="number" id="passenger${index + 1}Age" placeholder="Age" min="1" max="100" required>
        </div>
    `;
    
    passengerFormFields.appendChild(passengerDiv);
});
}

// Update price summary
function updateSummary() {
const seatCount = selectedSeats.length;
const totalPrice = seatCount * busData.price;

priceSeatCount.textContent = seatCount;
priceTotal.textContent = totalPrice.toLocaleString('en-IN');
summaryTotal.textContent = totalPrice.toLocaleString('en-IN');

// Update seats in summary
summarySeats.innerHTML = '';

if (seatCount === 0) {
    const emptyItem = document.createElement('div');
    emptyItem.className = 'summary-item';
    emptyItem.style.justifyContent = 'center';
    emptyItem.innerHTML = '<span class="summary-label">No seats selected</span>';
    summarySeats.appendChild(emptyItem);
} else {
    selectedSeats.forEach(seatNumber => {
        const seatItem = document.createElement('div');
        seatItem.className = 'summary-seat-item';
        seatItem.innerHTML = `
            <span class="summary-label">Seat</span>
            <span class="summary-seat-number">${seatNumber}</span>
            <span class="summary-value">₹${busData.price.toLocaleString('en-IN')}</span>
        `;
        summarySeats.appendChild(seatItem);
    });
}
}

// Show notification
function showNotification(message, type = 'success') {
notificationText.textContent = message;
notification.className = 'notification';

// Remove all type classes
notification.classList.remove('notification-success', 'notification-warning', 'notification-error');

// Add appropriate class based on type
if (type === 'success') {
    notification.classList.add('notification-success');
} else if (type === 'warning') {
    notification.classList.add('notification-warning');
} else if (type === 'error') {
    notification.classList.add('notification-error');
}

notification.classList.add('show');

// Hide after 3 seconds
setTimeout(() => {
    notification.classList.remove('show');
}, 3000);
}

// Proceed to payment
// Proceed to payment
function proceedToPayment() {
// Validate passenger details
let isValid = true;

for (let i = 0; i < selectedSeats.length; i++) {
const name = document.getElementById(`passenger${i + 1}Name`).value.trim();
const gender = document.getElementById(`passenger${i + 1}Gender`).value;
const age = document.getElementById(`passenger${i + 1}Age`).value;

if (!name || !gender || !age) {
    isValid = false;
    showNotification(`Please fill all details for Passenger ${i + 1}`, 'error');
    break;
}
}

if (!isValid) return;

// Get boarding and dropping points
const boardingPoint = document.querySelector('input[name="boardingPoint"]:checked');
const droppingPoint = document.querySelector('input[name="droppingPoint"]:checked');

if (!boardingPoint || !droppingPoint) {
showNotification('Please select boarding and dropping points', 'error');
return;
}

// Get boarding point details
const boardingPointId = boardingPoint.id.replace('boarding', '');
const boardingPointData = busData.boardingPoints.find(p => p.id == boardingPointId);

// Get dropping point details
const droppingPointId = droppingPoint.id.replace('dropping', '');
const droppingPointData = busData.droppingPoints.find(p => p.id == droppingPointId);

// Prepare booking data
const bookingData = {
busId: busData.id,
busName: busData.name,
busType: busData.type === 'seater' ? 'AC Seater' : 'AC Sleeper',
date: formatDate(busData.date),
departure: formatTime(busData.departure),
arrival: formatTime(busData.arrival),
seats: selectedSeats,
passengers: getPassengerData(),
boardingPoint: `${boardingPointData.name} (${boardingPointData.time})`,
droppingPoint: `${droppingPointData.name} (${droppingPointData.time})`,
pricePerSeat: busData.price,
totalPrice: selectedSeats.length * busData.price
};

// Store booking data in localStorage
localStorage.setItem('bookingData', JSON.stringify(bookingData));
// In a real app, you would submit this data to the server
showNotification('Proceeding to payment...', 'success');

// Simulate payment process
setTimeout(() => {
    // Show success message
    showNotification('Booking confirmed! Redirecting to tickets...', 'success');
    
    // Redirect to tickets page after 2 seconds
    setTimeout(() => {
        // In a real app, you would redirect to the tickets page
        console.log('Booking data:', {
            busId: busData.id,
            seats: selectedSeats,
            passengers: getPassengerData(),
            boardingPoint: boardingPoint.id,
            droppingPoint: droppingPoint.id,
            totalPrice: selectedSeats.length * busData.price
        });
    }, 2000);
}, 1500);

// Redirect to payment page
setTimeout(() => {
window.location.href = 'payment.html';
}, 3000);
}
// Get passenger data from form
function getPassengerData() {
const passengers = [];

for (let i = 0; i < selectedSeats.length; i++) {
    passengers.push({
        seatNumber: selectedSeats[i],
        name: document.getElementById(`passenger${i + 1}Name`).value.trim(),
        gender: document.getElementById(`passenger${i + 1}Gender`).value,
        age: parseInt(document.getElementById(`passenger${i + 1}Age`).value)
    });
}

return passengers;
}

// Show help information
function showHelp() {
showNotification('Select seats by clicking on them. Fill passenger details for each selected seat.', 'warning');
}

// Helper functions
// Helper functions
function formatDate(dateString) {
const options = { year: 'numeric', month: 'long', day: 'numeric' };
return new Date(dateString).toLocaleDateString('en-US', options);
}

function formatTime(timeString) {
const [hours, minutes] = timeString.split(':');
const time = new Date();
time.setHours(parseInt(hours));
time.setMinutes(parseInt(minutes));

return time.toLocaleTimeString('en-US', {
hour: '2-digit',
minute: '2-digit',
hour12: true
}).replace(/^0/, ''); // Remove leading zero
}
document.getElementById('backButton').addEventListener('click', function() {
window.history.back(); 
});

// Update the bus type display
document.getElementById('busTypeDisplay').innerHTML = `
<i class="fas ${busData.type === 'sleeper' ? 'fa-bed' : 'fa-snowflake'}"></i>
<span>${busData.type === 'sleeper' ? 'AC Sleeper' : 'AC Seater'}</span>
`;