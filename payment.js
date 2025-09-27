
// Get booking data from localStorage
const bookingData = JSON.parse(localStorage.getItem('bookingData'));

if (!bookingData) {
    // Redirect back if no booking data found
    window.location.href = 'index.html';
}

// DOM elements
const backButton = document.getElementById('backButton');
const paymentMethods = document.querySelectorAll('.payment-method');
const paymentForms = {
    card: document.getElementById('cardForm'),
    upi: document.getElementById('upiForm'),
    netbanking: document.getElementById('netbankingForm'),
    wallet: document.getElementById('walletForm')
};
const cancelButtons = {
    card: document.getElementById('cancelPayment'),
    upi: document.getElementById('cancelUpiPayment'),
    netbanking: document.getElementById('cancelNetbankingPayment'),
    wallet: document.getElementById('cancelWalletPayment')
};
const submitButtons = {
    card: document.getElementById('submitCardPayment'),
    upi: document.getElementById('submitUpiPayment'),
    netbanking: document.getElementById('submitNetbankingPayment'),
    wallet: document.getElementById('submitWalletPayment')
};
const upiApps = document.querySelectorAll('.upi-app');
const paymentSection = document.getElementById('paymentSection');
const successScreen = document.getElementById('successScreen');
// const downloadTicketBtn = document.getElementById('downloadTicket');

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    // Set booking summary data
    document.getElementById('summaryBusName').textContent = bookingData.busName;
    document.getElementById('summaryBusType').textContent = bookingData.busType;
    document.getElementById('summaryDate').textContent = bookingData.date;
    document.getElementById('summaryDeparture').textContent = bookingData.departure;
    document.getElementById('summaryArrival').textContent = bookingData.arrival;
    document.getElementById('summaryBoarding').textContent = bookingData.boardingPoint;
    document.getElementById('summaryDropping').textContent = bookingData.droppingPoint;
    document.getElementById('summaryTotal').textContent = bookingData.totalPrice.toLocaleString('en-IN');
    
    // Generate a random booking ID
    document.getElementById('bookingId').textContent = `BUSGO-${new Date().getFullYear()}-${Math.floor(10000 + Math.random() * 90000)}`;
    
    // Render selected seats
    const summarySeats = document.getElementById('summarySeats');
    summarySeats.innerHTML = '';
    
    bookingData.seats.forEach(seat => {
        const seatItem = document.createElement('div');
        seatItem.className = 'summary-seat-item';
        seatItem.innerHTML = `
            <span class="summary-label">Seat ${seat}</span>
            <span class="summary-value">₹${bookingData.pricePerSeat.toLocaleString('en-IN')}</span>
        `;
        summarySeats.appendChild(seatItem);
    });
    
    // Render passenger details
    const passengerList = document.getElementById('passengerList');
    passengerList.innerHTML = '';
    
    bookingData.passengers.forEach((passenger, index) => {
        const passengerItem = document.createElement('div');
        passengerItem.className = 'passenger-item';
        passengerItem.innerHTML = `
            <div class="passenger-seat">
                <i class="fas fa-chair"></i>
                Passenger ${index + 1} (Seat ${bookingData.seats[index]})
            </div>
            <div class="passenger-detail">
                <span class="passenger-detail-label">Name:</span>
                <span class="passenger-detail-value">${passenger.name}</span>
            </div>
            <div class="passenger-detail">
                <span class="passenger-detail-label">Gender:</span>
                <span class="passenger-detail-value">${passenger.gender.charAt(0).toUpperCase() + passenger.gender.slice(1)}</span>
            </div>
            <div class="passenger-detail">
                <span class="passenger-detail-label">Age:</span>
                <span class="passenger-detail-value">${passenger.age} years</span>
            </div>
        `;
        passengerList.appendChild(passengerItem);
    });
    
    // Payment method selection
    paymentMethods.forEach(method => {
        method.addEventListener('click', function() {
            // Remove selected class from all methods
            paymentMethods.forEach(m => m.classList.remove('selected'));
            
            // Add selected class to clicked method
            this.classList.add('selected');
            
            // Hide all forms
            Object.values(paymentForms).forEach(form => form.classList.remove('active'));
            
            // Show selected form
            const methodType = this.getAttribute('data-method');
            paymentForms[methodType].classList.add('active');
        });
    });
    
    // UPI app selection
    upiApps.forEach(app => {
        app.addEventListener('click', function() {
            upiApps.forEach(a => a.classList.remove('selected'));
            this.classList.add('selected');
        });
    });
    
    // Cancel buttons
    Object.keys(cancelButtons).forEach(key => {
        cancelButtons[key].addEventListener('click', function() {
            paymentForms[key].classList.remove('active');
            paymentMethods.forEach(m => m.classList.remove('selected'));
        });
    });
    
    // Submit buttons
    Object.keys(submitButtons).forEach(key => {
submitButtons[key].addEventListener('click', function() {
let paymentMethodText = '';
switch(key) {
    case 'card':
        paymentMethodText = 'Credit/Debit Card';
        break;
    case 'upi':
        const selectedUpiApp = document.querySelector('.upi-app.selected');
        paymentMethodText = `UPI (${selectedUpiApp ? selectedUpiApp.querySelector('.upi-app-name').textContent : 'UPI'})`;
        break;
    case 'netbanking':
        const selectedBank = document.getElementById('bankSelect').value;
        paymentMethodText = `Net Banking (${document.getElementById('bankSelect').options[document.getElementById('bankSelect').selectedIndex].text})`;
        break;
    case 'wallet':
        const selectedWallet = document.getElementById('walletSelect').value;
        paymentMethodText = `Wallet (${document.getElementById('walletSelect').options[document.getElementById('walletSelect').selectedIndex].text})`;
        break;
}

const paymentDetails = {
    method: key,
    methodText: paymentMethodText,
    timestamp: new Date().toISOString(),
    transactionId: 'TXN' + Math.floor(100000000 + Math.random() * 900000000)
};
localStorage.setItem('paymentDetails', JSON.stringify(paymentDetails));

paymentSection.style.display = 'none';
successScreen.classList.add('active');
window.scrollTo({ top: 0, behavior: 'smooth' });
});
});
    
    // Back button
    backButton.addEventListener('click', function() {
        window.history.back();
    });
    
    // Format card number input
    const cardNumber = document.getElementById('cardNumber');
    cardNumber.addEventListener('input', function(e) {
        let value = this.value.replace(/\s+/g, ''); // Remove all spaces
        if (value.length > 0) {
            value = value.match(new RegExp('.{1,4}', 'g')).join(' '); // Add space every 4 digits
        }
        this.value = value;
    });
    
    // Format expiry date input
    const cardExpiry = document.getElementById('cardExpiry');
    cardExpiry.addEventListener('input', function(e) {
        let value = this.value.replace(/\D/g, ''); // Remove non-digits
        if (value.length >= 2) {
            value = value.substring(0, 2) + '/' + value.substring(2, 4);
        }
        this.value = value;
    });
    
    // Restrict CVV to numbers only
    const cardCvv = document.getElementById('cardCvv');
    cardCvv.addEventListener('input', function(e) {
        this.value = this.value.replace(/\D/g, '');
    });
});

// Ticket Popup Elements
const ticketPopup = document.getElementById('ticketPopup');
const closeTicketPopup = document.getElementById('closeTicketPopup');
const downloadTicketPdf = document.getElementById('downloadTicketPdf');
const downloadTicketBtn = document.getElementById('downloadTicket');

// Show ticket popup when download button is clicked
downloadTicketBtn.addEventListener('click', function() {
// Set ticket data
document.getElementById('popupTicketId').textContent = document.getElementById('bookingId').textContent;
document.getElementById('popupFrom').textContent = 'Mumbai';
document.getElementById('popupTo').textContent = 'Delhi';
document.getElementById('popupDeparture').textContent = bookingData.date + ', ' + bookingData.departure;
document.getElementById('popupArrival').textContent = bookingData.date + ', ' + bookingData.arrival;
document.getElementById('popupDuration').textContent = '12h 15m';
document.getElementById('popupBusName').textContent = bookingData.busName;
document.getElementById('popupBusType').textContent = bookingData.busType;
document.getElementById('popupTravelDate').textContent = bookingData.date;
document.getElementById('popupBoarding').textContent = bookingData.boardingPoint.split(' (')[0];
document.getElementById('popupBoardingTime').textContent = bookingData.boardingPoint.match(/\(([^)]+)\)/)[1];
document.getElementById('popupDropping').textContent = bookingData.droppingPoint.split(' (')[0];
document.getElementById('popupDroppingTime').textContent = bookingData.droppingPoint.match(/\(([^)]+)\)/)[1];
document.getElementById('popupTotalAmount').textContent = bookingData.totalPrice.toLocaleString('en-IN');

// Generate a random transaction ID
document.getElementById('popupTransactionId').textContent = 'TXN' + Math.floor(100000000 + Math.random() * 900000000);

// Set payment method (this would come from actual payment in a real app)
document.getElementById('popupPaymentMethod').textContent = 'UPI (Google Pay)';

// Populate passenger list
const popupPassengerList = document.getElementById('popupPassengerList');
popupPassengerList.innerHTML = '';

bookingData.passengers.forEach((passenger, index) => {
const passengerRow = document.createElement('div');
passengerRow.className = 'passenger-row';
passengerRow.setAttribute('data-label', 'Passenger ' + (index + 1));
passengerRow.innerHTML = `
    <div class="passenger-col">${bookingData.seats[index]}</div>
    <div class="passenger-col">${passenger.name}</div>
    <div class="passenger-col">${passenger.gender.charAt(0).toUpperCase() + passenger.gender.slice(1)}</div>
    <div class="passenger-col">${passenger.age} years</div>
    <div class="passenger-col">₹${bookingData.pricePerSeat.toLocaleString('en-IN')}</div>
`;
popupPassengerList.appendChild(passengerRow);
});

// Set payment method from localStorage
const paymentDetails = JSON.parse(localStorage.getItem('paymentDetails'));
if (paymentDetails) {
document.getElementById('popupPaymentMethod').textContent = paymentDetails.methodText;
document.getElementById('popupTransactionId').textContent = paymentDetails.transactionId;
}

// Show the popup
ticketPopup.classList.add('active');
document.body.style.overflow = 'hidden';
});

// Close ticket popup
closeTicketPopup.addEventListener('click', function() {
ticketPopup.classList.remove('active');
document.body.style.overflow = 'auto';
});

// Download ticket as PDF
downloadTicketPdf.addEventListener('click', function() {
const element = document.querySelector('.ticket-popup-content');

// Clone the element to avoid modifying the original
const clone = element.cloneNode(true);

// Remove action buttons
const ticketActions = clone.querySelector('.ticket-actions');
if (ticketActions) ticketActions.remove();

// Set dynamic payment method from localStorage
const paymentDetails = JSON.parse(localStorage.getItem('paymentDetails'));
if (paymentDetails) {
let paymentMethodText = '';
switch(paymentDetails.method) {
    case 'card':
        paymentMethodText = 'Credit/Debit Card';
        break;
    case 'upi':
        paymentMethodText = 'UPI (Google Pay)'; // Or whichever UPI app was selected
        break;
    case 'netbanking':
        paymentMethodText = 'Net Banking';
        break;
    case 'wallet':
        paymentMethodText = 'Wallet';
        break;
    default:
        paymentMethodText = 'Online Payment';
}
clone.querySelector('#popupPaymentMethod').textContent = paymentMethodText;
}

const opt = {
margin: 10,
filename: 'BusGo_Ticket_' + document.getElementById('popupTicketId').textContent + '.pdf',
image: { type: 'jpeg', quality: 0.98 },
html2canvas: { 
    scale: 2,
    backgroundColor: '#FFFFFF',
    logging: true,
    useCORS: true
},
jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
};

// Generate PDF
html2pdf().from(clone).set(opt).save().then(() => {
console.log('PDF generated successfully');
}).catch(err => {
console.error('PDF generation failed:', err);
});
});
// Close popup when clicking outside
ticketPopup.addEventListener('click', function(e) {
if (e.target === ticketPopup) {
ticketPopup.classList.remove('active');
document.body.style.overflow = 'auto';
}
});