
// Sample data for cities and buses
const cities = {
    mumbai: 'Mumbai',
    delhi: 'Delhi',
    bangalore: 'Bangalore',
    chennai: 'Chennai',
    kolkata: 'Kolkata',
    pune: 'Pune',
    hyderabad: 'Hyderabad',
    ahmedabad: 'Ahmedabad'
};

const sampleBuses = [
{
id: 1,
name: 'Volvo Multi-Axle AC Sleeper',
operator: 'RedBus Express',
departure: '08:30',
arrival: '20:45',
duration: '12h 15m',
price: 1250,
seats: 28,
type: 'AC Sleeper',
rating: 4.2,
amenities: ['WiFi', 'Charging Point', 'Water Bottle', 'Pillow & Blanket']
},
{
id: 2,
name: 'Scania Multi-Axle AC Seater',
operator: 'Travels King',
departure: '14:15',
arrival: '02:30',
duration: '12h 15m',
price: 950,
seats: 45,
type: 'AC Seater',
rating: 4.0,
amenities: ['Charging Point', 'Reading Light', 'Water Bottle']
},
{
id: 3,
name: 'Mercedes Multi-Axle AC Sleeper',
operator: 'Luxury Coaches',
departure: '21:00',
arrival: '09:15',
duration: '12h 15m',
price: 1450,
seats: 32,
type: 'AC Sleeper',
rating: 4.5,
amenities: ['WiFi', 'Entertainment', 'Meals', 'Charging Point', 'Pillow & Blanket']
},
{
id: 4,
name: 'Tata Multi-Axle AC Seater',
operator: 'Express Travel',
departure: '06:00',
arrival: '18:30',
duration: '12h 30m',
price: 850,
seats: 40,
type: 'AC Seater',
rating: 3.8,
amenities: ['Charging Point', 'Water Bottle']
},
{
id: 5,
name: 'Volvo B11R Multi-Axle AC Sleeper',
operator: 'Premium Travels',
departure: '23:30',
arrival: '11:45',
duration: '12h 15m',
price: 1650,
seats: 24,
type: 'AC Sleeper',
rating: 4.7,
amenities: ['WiFi', 'Entertainment', 'Meals', 'Charging Point', 'Pillow & Blanket', 'Personal TV']
},
{
id: 6,
name: 'Ashok Leyland AC Seater',
operator: 'Budget Express',
departure: '11:45',
arrival: '00:15',
duration: '12h 30m',
price: 750,
seats: 49,
type: 'AC Seater',
rating: 3.5,
amenities: ['Charging Point', 'Reading Light']
},
{
id: 7,
name: 'BharatBenz Non-AC Sleeper',
operator: 'City Travels',
departure: '19:30',
arrival: '07:45',
duration: '12h 15m',
price: 650,
seats: 36,
type: 'Non-AC Sleeper',
rating: 3.9,
amenities: ['Water Bottle', 'Pillow']
},
{
id: 8,
name: 'Volvo 9400 Multi-Axle AC Seater',
operator: 'Royal Express',
departure: '05:00',
arrival: '17:15',
duration: '12h 15m',
price: 1100,
seats: 42,
type: 'AC Seater',
rating: 4.1,
amenities: ['WiFi', 'Charging Point', 'Meals', 'Water Bottle']
},
{
id: 9,
name: 'Eicher Non-AC Seater',
operator: 'Economy Travels',
departure: '13:15',
arrival: '01:30',
duration: '12h 15m',
price: 550,
seats: 52,
type: 'Non-AC Seater',
rating: 3.2,
amenities: ['Water Bottle']
},
{
id: 10,
name: 'Volvo Multi-Axle AC Sleeper (Women Only)',
operator: 'Safe Journey',
departure: '09:45',
arrival: '22:00',
duration: '12h 15m',
price: 1350,
seats: 30,
type: 'AC Sleeper',
rating: 4.8,
amenities: ['WiFi', 'Charging Point', 'Meals', 'Pillow & Blanket', 'Security Camera']
},
{
id: 11,
name: 'Scania Metrolink AC Sleeper',
operator: 'Comfort Travels',
departure: '16:30',
arrival: '04:45',
duration: '12h 15m',
price: 1550,
seats: 26,
type: 'AC Sleeper',
rating: 4.6,
amenities: ['WiFi', 'Entertainment', 'Meals', 'Charging Point', 'Pillow & Blanket', 'Toilet']
},
{
id: 12,
name: 'Tata Marcopolo Non-AC Seater',
operator: 'City Link',
departure: '07:15',
arrival: '19:30',
duration: '12h 15m',
price: 600,
seats: 48,
type: 'Non-AC Seater',
rating: 3.7,
amenities: ['Water Bottle']
},
{
id: 13,
name: 'Volvo Multi-Axle AC Seater (Executive)',
operator: 'Business Class',
departure: '10:30',
arrival: '22:45',
duration: '12h 15m',
price: 1750,
seats: 20,
type: 'AC Seater',
rating: 4.9,
amenities: ['WiFi', 'Entertainment', 'Meals', 'Charging Point', 'Massage Seats', 'Personal Butler']
},
{
id: 14,
name: 'Ashok Leyland Non-AC Sleeper',
operator: 'Night Rider',
departure: '20:45',
arrival: '09:00',
duration: '12h 15m',
price: 700,
seats: 34,
type: 'Non-AC Sleeper',
rating: 3.6,
amenities: ['Pillow & Blanket']
},
{
id: 15,
name: 'Volvo Multi-Axle AC Sleeper (Eco)',
operator: 'Green Travels',
departure: '12:00',
arrival: '00:15',
duration: '12h 15m',
price: 1150,
seats: 32,
type: 'AC Sleeper',
rating: 4.3,
amenities: ['WiFi', 'Charging Point', 'Organic Meals', 'Eco-friendly Blanket']
},
{
id: 16,
name: 'Tata Ultra AC Seater',
operator: 'Express Connect',
departure: '04:30',
arrival: '16:45',
duration: '12h 15m',
price: 900,
seats: 44,
type: 'AC Seater',
rating: 4.0,
amenities: ['Charging Point', 'Water Bottle', 'Snacks']
},
{
id: 17,
name: 'BharatBenz Non-AC Seater',
operator: 'Local Express',
departure: '15:15',
arrival: '03:30',
duration: '12h 15m',
price: 500,
seats: 54,
type: 'Non-AC Seater',
rating: 3.0,
amenities: []
},
{
id: 18,
name: 'Volvo Multi-Axle AC Sleeper (Deluxe)',
operator: 'First Class',
departure: '18:00',
arrival: '06:15',
duration: '12h 15m',
price: 1950,
seats: 22,
type: 'AC Sleeper',
rating: 4.8,
amenities: ['WiFi', 'Entertainment', 'Gourmet Meals', 'Charging Point', 'Pillow & Blanket', 'Personal Storage']
},
{
id: 19,
name: 'Eicher Non-AC Sleeper',
operator: 'Budget Sleeper',
departure: '22:15',
arrival: '10:30',
duration: '12h 15m',
price: 650,
seats: 38,
type: 'Non-AC Sleeper',
rating: 3.4,
amenities: ['Pillow']
},
{
id: 20,
name: 'Scania Metrolink AC Seater (Premium)',
operator: 'Luxury Line',
departure: '07:45',
arrival: '20:00',
duration: '12h 15m',
price: 1850,
seats: 18,
type: 'AC Seater',
rating: 4.9,
amenities: ['WiFi', 'Entertainment', 'Meals', 'Charging Point', 'Massage Seats', 'Personal Butler']
}
];

// Check if user is logged in on page load
document.addEventListener('DOMContentLoaded', () => {
fetch('php/check_login.php')
.then(response => response.json())
.then(data => {
    if (data.loggedIn) {
        currentUser = data.user;
        document.getElementById('userText').textContent = currentUser;
    }
})
.catch(error => console.error('Error checking login status:', error));
});
let filteredBuses ;
// User state
let currentUser = null;

 // Carousel functionality
 let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');
const dots = document.querySelectorAll('.carousel-dot');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active', 'next', 'prev');
        if (i === index) {
            slide.classList.add('active');
        } else if (i === (index + 1) % slides.length) {
            slide.classList.add('next');
        } else if (i === (index - 1 + slides.length) % slides.length) {
            slide.classList.add('prev');
        }
    });

    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

// Auto-play carousel
setInterval(nextSlide, 5000);

// Dot navigation
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentSlide = index;
        showSlide(currentSlide);
    });
});

// Set minimum date to today
const today = new Date().toISOString().split('T')[0];
document.getElementById('travelDate').min = today;
document.getElementById('travelDate').value = today;

// Tab functionality
document.getElementById('busTab').addEventListener('click', () => {
    // Already active, no action needed
});

document.getElementById('metroTab').addEventListener('click', (e) => {
    e.preventDefault();
    alert('Metro booking coming soon!');
});

document.getElementById('flightTab').addEventListener('click', (e) => {
    e.preventDefault();
    alert('Flight booking coming soon!');
});

// Search form submission
document.getElementById('searchForm').addEventListener('submit', (e) => {
    e.preventDefault();
    
    const fromCity = document.getElementById('fromCity').value;
    const toCity = document.getElementById('toCity').value;
    const travelDate = document.getElementById('travelDate').value;

    if (!fromCity || !toCity || !travelDate) {
        alert('Please fill all fields');
        return;
    }

    if (fromCity === toCity) {
        alert('From and To cities cannot be the same');
        return;
    }

    // Update trip info
    document.getElementById('tripRoute').textContent = `${cities[fromCity]} → ${cities[toCity]}`;
    
    const dateObj = new Date(travelDate);
    const formattedDate = dateObj.toLocaleDateString('en-US', { 
        day: 'numeric', 
        month: 'short', 
        year: 'numeric' 
    });
    document.getElementById('tripDate').textContent = formattedDate;

    // Generate and display bus list
    displayBuses();

    // Switch to results page
    document.getElementById('homePage').style.display = 'none';
    document.getElementById('resultsPage').style.display = 'block';
    
    // Scroll to top
    window.scrollTo(0, 0);
});

// Update your user section click handler
document.getElementById('userSection').addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (currentUser) {
// Logout functionality
const userMenu = confirm(`Welcome ${currentUser}!\n\nClick OK to logout, Cancel to stay`);
if (userMenu) {
    // Make logout request to server
    fetch('php/logout.php')
        .then(() => {
            currentUser = null;
            document.getElementById('userText').textContent = 'Login';
        })
        .catch(error => console.error('Logout error:', error));
}
} else {
openAuthModal();
showLogin();
}
    });

// Modify search button
document.getElementById('modifyBtn').addEventListener('click', () => {
    document.getElementById('homePage').style.display = 'block';
    document.getElementById('resultsPage').style.display = 'none';
    window.scrollTo(0, 0);
});

document.getElementById('backButton').addEventListener('click', () => {
    document.getElementById('homePage').style.display = 'block';
    document.getElementById('resultsPage').style.display = 'none';
    
    // Scroll to top
    window.scrollTo(0, 0);
});

// Display buses function
function displayBuses() {
    const busList = document.getElementById('busList');
    busList.innerHTML = '';

    sampleBuses.forEach(bus => {
        const busCard = createBusCard(bus);
        busList.appendChild(busCard);
    });
}

// Create bus card element
function createBusCard(bus) {
const card = document.createElement('div');
card.className = 'bus-card';

// Format amenities
const amenities = bus.amenities.map(amenity => {
    let icon = '';
    switch(amenity.toLowerCase()) {
        case 'wifi': icon = 'fa-wifi'; break;
        case 'charging point': icon = 'fa-bolt'; break;
        case 'water bottle': icon = 'fa-tint'; break;
        case 'pillow & blanket': icon = 'fa-blanket'; break;
        case 'entertainment': icon = 'fa-tv'; break;
        case 'meals': icon = 'fa-utensils'; break;
        case 'reading light': icon = 'fa-lightbulb'; break;
        case 'personal tv': icon = 'fa-tv'; break;
        default: icon = 'fa-check';
    }
    return `<span class="amenity-tag"><i class="fas ${icon}"></i> ${amenity}</span>`;
}).join('');

card.innerHTML = `
    <div class="bus-header">
        <div>
            <div class="bus-name">${bus.name}</div>
            <div class="bus-operator">${bus.operator}</div>
            <div class="bus-rating">
                <i class="fas fa-star"></i> ${bus.rating}
            </div>
        </div>
        <div class="bus-price">
            ₹${bus.price}
            <span class="price-per-seat">per seat</span>
        </div>
    </div>
    
    <div class="bus-details">
        <div class="departure-info">
            <div class="time">${bus.departure}</div>
            <div class="location">${cities[document.getElementById('fromCity').value]}</div>
        </div>
        
        <div class="duration-info">
            <div class="duration">${bus.duration}</div>
            <div class="duration-line"></div>
        </div>
        
        <div class="arrival-info">
            <div class="time">${bus.arrival}</div>
            <div class="location">${cities[document.getElementById('toCity').value]}</div>
        </div>
    </div>
    
    <div class="bus-amenities">
        ${amenities}
    </div>
    
    <div class="bus-footer">
        <div class="seats-available">
            <span>${bus.seats}</span> seats available
        </div>
        <button class="book-btn" onclick="bookBus(${bus.id})">
            <i class="fas fa-ticket-alt"></i> Book Now
        </button>
    </div>
`;

return card;
}

// Book bus function
// function bookBus(busId) {
//     const bus = sampleBuses.find(b => b.id === busId);
//     if (!currentUser) {
//         alert('Please login to book a ticket');
//         document.getElementById('userSection').click();
//         return;
//     }
    
//     const confirmation = confirm(`Book ticket for ${bus.name}?\n\nPrice: ₹${bus.price}\nDeparture: ${bus.departure}\nOperator: ${bus.operator}`);
    
//     if (confirmation) {
//         alert(`Booking confirmed for ${bus.name}!\n\nBooking ID: BG${Date.now()}\nPrice: ₹${bus.price}\n\nThank you for choosing BusGo!`);
//     }
// }
// Update your existing bookBus function in index.html
function bookBus(busId) {
const bus = sampleBuses.find(b => b.id === busId);
if (!bus) return;

// Store the bus data in localStorage
localStorage.setItem('selectedBus', JSON.stringify({
id: bus.id,
name: bus.name,
operator: bus.operator,
departure: bus.departure,
arrival: bus.arrival,
duration: bus.duration,
price: bus.price,
type: bus.type,
amenities: bus.amenities,
rating: bus.rating,
seats: bus.seats,
fromCity: document.getElementById('fromCity').value,
toCity: document.getElementById('toCity').value,
travelDate: document.getElementById('travelDate').value
}));
function getCookie(name) {
const value = `; ${document.cookie}`;
const parts = value.split(`; ${name}=`);
if (parts.length === 2) return parts.pop().split(';').shift();
}

const userEmail = getCookie('user_email');
const userPassword = getCookie('uuser_password');
if (userEmail) {
// User is logged in, proceed to booking page
window.location.href = 'bus.html';
} else {
// User not logged in, open login modal and store intended destination
localStorage.setItem('redirectAfterLogin', 'bus.html');
openAuthModal();
showLogin();
}
}

// Filter functionality
function setupFilters() {
const filterInputs = document.querySelectorAll('.filters input[type="checkbox"], .filters input[type="range"]');
filterInputs.forEach(input => {
input.addEventListener('change', applyFilters);
});

// Price range slider functionality
const priceMin = document.getElementById('priceMin');
const priceMax = document.getElementById('priceMax');
const priceRangeValue = document.getElementById('priceRangeValue');

// Update price range display
function updatePriceRange() {
const min = parseInt(priceMin.value);
const max = parseInt(priceMax.value);
priceRangeValue.textContent = `₹${min} - ₹${max}`;
applyFilters();
}

priceMin.addEventListener('input', updatePriceRange);
priceMax.addEventListener('input', updatePriceRange);

// Sort functionality
document.getElementById('sortSelect').addEventListener('change', applyFilters);

// Clear all filters button
document.querySelector('.clear-filters').addEventListener('click', clearAllFilters);
}
function applyFilters() {
filteredBuses = [...sampleBuses];
const priceMin = parseInt(document.getElementById('priceMin').value);
const priceMax = parseInt(document.getElementById('priceMax').value);

// Get selected time filters
const departureTimeFilters = {
morning: document.getElementById('morning').checked,
afternoon: document.getElementById('afternoon').checked,
evening: document.getElementById('evening').checked,
night: document.getElementById('night').checked,
};

// Get arrival time filters
const arrivalTimeFilters = {
morning: document.getElementById('arrival-morning').checked,
afternoon: document.getElementById('arrival-afternoon').checked,
evening: document.getElementById('arrival-evening').checked,
night: document.getElementById('arrival-night').checked,
};

// Get bus type filters
const busTypes = {
ac: document.getElementById('ac').checked,
nonac: document.getElementById('nonac').checked,
sleeper: document.getElementById('sleeper').checked,
seater: document.getElementById('seater').checked,
};

// Get amenities filters
const amenities = {
wifi: document.getElementById('wifi').checked,
charging: document.getElementById('charging').checked,
meals: document.getElementById('meals').checked,
blanket: document.getElementById('blanket').checked,
tv: document.getElementById('tv').checked,
water: document.getElementById('water').checked,
};

// Get sort option
const sortOption = document.getElementById('sortSelect').value;

// Filter buses
filteredBuses = sampleBuses.filter((bus) => {
// 1. Price Filter
if (bus.price < priceMin || bus.price > priceMax) {
    return false;
}

// 2. Departure Time Filter
const departureHour = parseInt(bus.departure.split(':')[0]);
let departureTimeOfDay;

if (departureHour >= 6 && departureHour < 12) departureTimeOfDay = 'morning';
else if (departureHour >= 12 && departureHour < 18) departureTimeOfDay = 'afternoon';
else if (departureHour >= 18 && departureHour < 24) departureTimeOfDay = 'evening';
else departureTimeOfDay = 'night';

if (!departureTimeFilters[departureTimeOfDay]) return false;

// 3. Arrival Time Filter
const arrivalHour = parseInt(bus.arrival.split(':')[0]);
let arrivalTimeOfDay;

if (arrivalHour >= 6 && arrivalHour < 12) arrivalTimeOfDay = 'morning';
else if (arrivalHour >= 12 && arrivalHour < 18) arrivalTimeOfDay = 'afternoon';
else if (arrivalHour >= 18 && arrivalHour < 24) arrivalTimeOfDay = 'evening';
else arrivalTimeOfDay = 'night';

if (!arrivalTimeFilters[arrivalTimeOfDay]) return false;

// 4. Bus Type Filter (AC/Non-AC, Sleeper/Seater)
const isAC = bus.type.toLowerCase().includes('ac');
const isSleeper = bus.type.toLowerCase().includes('sleeper');
const isSeater = bus.type.toLowerCase().includes('seater');

// If no bus type is selected, show all buses
if (!busTypes.ac && !busTypes.nonac && !busTypes.sleeper && !busTypes.seater) {
    // No filter applied, include all buses
} else {
    // Check if bus matches at least one selected type
    const typeMatch =
        (isAC && busTypes.ac) ||
        (!isAC && busTypes.nonac) ||
        (isSleeper && busTypes.sleeper) ||
        (isSeater && busTypes.seater);

    if (!typeMatch) return false;
}

// 5. Amenities Filter (only apply if checkbox is checked)
if (amenities.wifi && !bus.amenities.includes('WiFi')) return false;
if (amenities.charging && !bus.amenities.some((a) => a.includes('Charging'))) return false;
if (amenities.meals && !bus.amenities.includes('Meals')) return false;
if (amenities.blanket && !bus.amenities.some((a) => a.includes('Blanket'))) return false;
if (amenities.tv && !bus.amenities.some((a) => a.includes('TV') || a.includes('Entertainment'))) return false;
if (amenities.water && !bus.amenities.some((a) => a.includes('Water'))) return false;

return true;
});

// Sort buses
filteredBuses = sortBuses(filteredBuses, sortOption);
document.getElementById('resultsCount').textContent = `${filteredBuses.length} ${filteredBuses.length === 1 ? 'bus' : 'buses'} found`;
console.log(filteredBuses);
// Display filtered buses
displayFilteredBuses(filteredBuses);

}

function sortBuses(buses, sortOption) {
return [...buses].sort((a, b) => {
switch(sortOption) {
    case 'price_asc':
        return a.price - b.price;
    case 'price_desc':
        return b.price - a.price;
    case 'departure_asc':
        return a.departure.localeCompare(b.departure);
    case 'departure_desc':
        return b.departure.localeCompare(a.departure);
    case 'rating':
        return b.rating - a.rating;
    case 'duration':
        const durationA = convertDurationToMinutes(a.duration);
        const durationB = convertDurationToMinutes(b.duration);
        return durationA - durationB;
    default:
        return 0;
}
});
}
function convertDurationToMinutes(duration) {
// Convert "12h 15m" to minutes (735)
const parts = duration.split(' ');
const hours = parseInt(parts[0]);
const minutes = parseInt(parts[1]);
return hours * 60 + minutes;
}
function displayFilteredBuses(buses) {
const busList = document.getElementById('busList');
busList.innerHTML = '';

if (buses.length === 0) {
busList.innerHTML = `
    <div class="no-results" style="
        text-align: center;
        padding: 2rem;
        background: white;
        border-radius: 15px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.05);
        margin-bottom: 2rem;
    ">
        <i class="fas fa-bus-slash" style="font-size: 3rem; color: #667eea; margin-bottom: 1rem;"></i>
        <h3 style="color: #2c3e50; margin-bottom: 0.5rem;">No buses found</h3>
        <p style="color: #7f8c8d;">Try adjusting your filters to see more results</p>
        <button id="clearFiltersBtn" style="
            margin-top: 1rem;
            padding: 0.8rem 1.5rem;
            background: #667eea;
            border: none;
            border-radius: 10px;
            color: white;
            font-weight: 600;
            cursor: pointer;
        ">
            Clear All Filters
        </button>
    </div>
`;

// Add event listener to the new clear button
document.getElementById('clearFiltersBtn').addEventListener('click', clearAllFilters);
return;
}

buses.forEach(bus => {
const busCard = createBusCard(bus);
busList.appendChild(busCard);
});
}
function clearAllFilters() {
// Reset time filters (morning, afternoon, evening, night)
document.getElementById('morning').checked = true;
document.getElementById('afternoon').checked = true;
document.getElementById('evening').checked = true;
document.getElementById('night').checked = true;

// Reset arrival time filters
document.getElementById('arrival-morning').checked = true;
document.getElementById('arrival-afternoon').checked = true;
document.getElementById('arrival-evening').checked = true;
document.getElementById('arrival-night').checked = true;

// Reset bus type filters
document.getElementById('ac').checked = true;
document.getElementById('nonac').checked = true;
document.getElementById('sleeper').checked = true;
document.getElementById('seater').checked = true;

// Reset amenities filters (leave these unchecked)
document.getElementById('wifi').checked = false;
document.getElementById('charging').checked = false;
document.getElementById('meals').checked = false;
document.getElementById('blanket').checked = false;
document.getElementById('tv').checked = false;
document.getElementById('water').checked = false;

// Reset price range sliders
document.getElementById('priceMin').value = 500;
document.getElementById('priceMax').value = 2000;
document.getElementById('priceRangeValue').textContent = '₹500 - ₹2000';

// Reset sort dropdown
document.getElementById('sortSelect').value = 'price_asc';

// Reset filteredBuses to the original sampleBuses
filteredBuses = [...sampleBuses];

// Update results count
document.getElementById('resultsCount').textContent = `${filteredBuses.length} ${filteredBuses.length === 1 ? 'bus' : 'buses'} found`;

// Display the buses
displayFilteredBuses(filteredBuses);
}
// Initialize filters when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
initializeFilterStates(); // This now expands all filters
setupFilters();
applyFilters(); // Apply initial filters when page loads

// If we're on the results page, display buses
if (document.getElementById('resultsPage').style.display === 'block') {
displayBuses();
}
});

// Add this to your existing code to handle the "Clear All" button
document.querySelector('.clear-filters').addEventListener('click', clearAllFilters);
// Sort buses
filteredBuses = sortBuses(filteredBuses, sortOption);

// Update results count
document.getElementById('resultsCount').textContent = `${filteredBuses.length} buses found`;

// Display filtered buses
displayFilteredBuses(filteredBuses);

// Initialize filters
document.addEventListener('DOMContentLoaded', () => {
    setupFilters();
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add some interactive effects
document.querySelectorAll('.offer-card').forEach(card => {
    card.addEventListener('click', () => {
        const code = card.querySelector('.offer-code').textContent;
        navigator.clipboard.writeText(code).then(() => {
            alert(`Coupon code "${code}" copied to clipboard!`);
        }).catch(() => {
            alert(`Coupon code: ${code}`);
        });
    });
});

// Responsive navigation toggle (for mobile)
const createMobileMenu = () => {
    const nav = document.querySelector('.nav-menu');
    const toggleBtn = document.createElement('button');
    toggleBtn.innerHTML = '<i class="fas fa-bars"></i>';
    toggleBtn.className = 'mobile-menu-toggle';
    toggleBtn.style.cssText = `
        display: none;
        background: none;
        border: none;
        color: #667eea;
        font-size: 1.5rem;
        cursor: pointer;
        @media (max-width: 768px) { display: block; }
    `;
    
    toggleBtn.addEventListener('click', () => {
        nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
        nav.style.flexDirection = 'column';
        nav.style.position = 'absolute';
        nav.style.top = '100%';
        nav.style.left = '0';
        nav.style.right = '0';
        nav.style.background = 'white';
        nav.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
        nav.style.padding = '1rem';
    });
    
    document.querySelector('.nav-container').appendChild(toggleBtn);
};

// Initialize mobile menu
if (window.innerWidth <= 768) {
    createMobileMenu();
}

window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        document.querySelector('.nav-menu').style.display = 'flex';
    }
});

// Add loading animation for search
const searchBtn = document.querySelector('.search-btn');
const originalSearchText = searchBtn.innerHTML;

document.getElementById('searchForm').addEventListener('submit', (e) => {
    searchBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Searching...';
    searchBtn.disabled = true;
    
    setTimeout(() => {
        searchBtn.innerHTML = originalSearchText;
        searchBtn.disabled = false;
    }, 1500);
});

// Add hover effects to bus cards
const addCardHoverEffects = () => {
    document.addEventListener('mouseover', (e) => {
        if (e.target.closest('.bus-card')) {
            const card = e.target.closest('.bus-card');
            card.style.transform = 'translateY(-5px) scale(1.02)';
        }
    });

    document.addEventListener('mouseout', (e) => {
        if (e.target.closest('.bus-card')) {
            const card = e.target.closest('.bus-card');
            card.style.transform = 'translateY(0) scale(1)';
        }
    });
};

// Initialize hover effects
addCardHoverEffects();

// Add entrance animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.offer-card, .search-container, .bus-card');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease-out';
        observer.observe(el);
    });
});
 // Password Toggle Functionality
 function togglePassword(inputId, icon) {
    const input = document.getElementById(inputId);
    const isPassword = input.type === 'password';
    
    input.type = isPassword ? 'text' : 'password';
    icon.classList.toggle('fa-eye');
    icon.classList.toggle('fa-eye-slash');
}

// Show Message Function
function showMessage(text, type) {
    const message = document.getElementById('message');
    message.textContent = text;
    message.className = `message ${type}`;
    message.style.display = 'block';
    
    setTimeout(() => {
        message.style.display = 'none';
    }, 4000);
}

// Login Form Handler
// Login Form Handler
function handleLogin(event) {
event.preventDefault();
const form = event.target;
const button = form.querySelector('.auth-btn');
const email = form.querySelector('input[type="email"]').value;
const password = document.getElementById('loginPassword').value;
const rememberMe = form.querySelector('input[type="checkbox"]').checked;

// Show loading state
button.classList.add('loading');

// Create form data
const formData = new FormData();
formData.append('email', email);
formData.append('password', password);
formData.append('rememberMe', rememberMe);

// Make AJAX request
fetch('login.php', {
method: 'POST',
body: formData
})
.then(response => response.json())
.then(data => {
button.classList.remove('loading');

if (data.success) {
    showMessage('Login successful!', 'success');
    currentUser = data.user.name;
    document.getElementById('userText').textContent = currentUser;
    closeAuthModal();
    
    // Update UI as needed
    // You might want to redirect or refresh parts of the page
} else {
    if (data.errors) {
        // Display validation errors
        let errorMessage = data.message + '\n\n';
        for (const [field, message] of Object.entries(data.errors)) {
            errorMessage += `${field}: ${message}\n`;
        }
        showMessage(errorMessage, 'error');
    } else {
        showMessage(data.message, 'error');
    }
}
})
.catch(error => {
button.classList.remove('loading');
showMessage('An error occurred. Please try again.', 'error');
console.error('Error:', error);
});
}
// Signup Form Handler
// Signup Form Handler
function handleSignup(event) {
event.preventDefault();
const button = event.target.querySelector('.auth-btn');
const form = event.target;

// Show loading state
button.classList.add('loading');

// Get form data
const formData = new FormData(form);

// Make AJAX request
fetch('signup.php', {
method: 'POST',
body: formData
})
.then(response => response.json())
.then(data => {
button.classList.remove('loading');

if (data.success) {
    showMessage(data.message, 'success');
    // Optionally redirect to login or automatically login
    setTimeout(() => {
        showLogin();
    }, 2000);
} else {
    if (data.errors) {
        // Display validation errors
        let errorMessage = data.message + '\n\n';
        for (const [field, message] of Object.entries(data.errors)) {
            errorMessage += `${field}: ${message}\n`;
        }
        showMessage(errorMessage, 'error');
    } else {
        showMessage(data.message, 'error');
    }
}
})
.catch(error => {
button.classList.remove('loading');
showMessage('An error occurred. Please try again.', 'error');
console.error('Error:', error);
});
}
// Social Login Handler
function socialLogin(provider) {
    showMessage(`Connecting to ${provider.charAt(0).toUpperCase() + provider.slice(1)}...`, 'success');
    
    setTimeout(() => {
        alert(`${provider.charAt(0).toUpperCase() + provider.slice(1)} login would be implemented here!`);
    }, 1000);
}

// Forgot Password Handler
function showForgotPassword() {
    const email = prompt('Enter your email address to reset password:');
    if (email && email.includes('@')) {
        showMessage('Password reset link sent to your email!', 'success');
    } else if (email) {
        showMessage('Please enter a valid email address!', 'error');
    }
}

// Show Signup Form
function showSignup() {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('signupForm').style.display = 'block';
    document.getElementById('message').style.display = 'none';
}

// Show Login Form
function showLogin() {
    document.getElementById('signupForm').style.display = 'none';
    document.getElementById('loginForm').style.display = 'block';
    document.getElementById('message').style.display = 'none';
}

// Add some interactive animations
document.addEventListener('DOMContentLoaded', function() {
    // Add focus animations to inputs
    const inputs = document.querySelectorAll('.form-input');
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.style.transform = 'scale(1.02)';
        });
        
        input.addEventListener('blur', function() {
            this.parentElement.style.transform = 'scale(1)';
        });
    });

    // Add ripple effect to buttons
    const buttons = document.querySelectorAll('.auth-btn, .social-btn');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                background: rgba(255, 255, 255, 0.3);
                border-radius: 50%;
                transform: scale(0);
                animation: ripple 0.6s linear;
                pointer-events: none;
            `;
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });

    // Add CSS for ripple animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
});

// Real-time password strength indicator for signup
document.getElementById('signupPassword')?.addEventListener('input', function(e) {
    const password = e.target.value;
    const strength = getPasswordStrength(password);
    
    // Remove existing strength indicator
    const existingIndicator = e.target.parentElement.querySelector('.strength-indicator');
    if (existingIndicator) {
        existingIndicator.remove();
    }
    
    if (password.length > 0) {
        const indicator = document.createElement('div');
        indicator.className = 'strength-indicator';
        indicator.style.cssText = `
            position: absolute;
            bottom: -25px;
            left: 0;
            font-size: 0.8rem;
            color: ${strength.color};
        `;
        indicator.textContent = strength.text;
        e.target.parentElement.appendChild(indicator);
    }
});

function getPasswordStrength(password) {
    if (password.length < 4) return { text: 'Too weak', color: '#e74c3c' };
    if (password.length < 6) return { text: 'Weak', color: '#f39c12' };
    if (password.length < 8) return { text: 'Good', color: '#f1c40f' };
    if (password.length >= 8 && /[A-Z]/.test(password) && /[0-9]/.test(password)) {
        return { text: 'Strong', color: '#2ecc71' };
    }
    return { text: 'Fair', color: '#3498db' };
}
function openAuthModal() {
    // document.getElementById('authModal').style.display = 'flex';
    // document.body.style.overflow = 'hidden'; // Prevent scrolling behind modal
    const modal = document.getElementById('authModal');
    modal.style.display = 'flex';
    setTimeout(() => modal.classList.add('show'), 10);
    document.body.style.overflow = 'hidden';
}

function closeAuthModal() {
    // document.getElementById('authModal').style.display = 'none';
    // document.body.style.overflow = 'auto'; // Re-enable scrolling
    const modal = document.getElementById('authModal');
    modal.classList.remove('show');
    setTimeout(() => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }, 300);
}

// Update your goHome function to close the modal
function goHome() {
    closeAuthModal();
}

// Close modal when clicking outside the auth container
document.getElementById('authModal').addEventListener('click', function(e) {
    if (e.target === this) {
        closeAuthModal();
    }
});
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && document.getElementById('authModal').style.display === 'flex') {
        closeAuthModal();
    }
});
function toggleFilterGroup(group) {
group.classList.toggle('collapsed');

// Save the state in localStorage
const filterId = group.querySelector('h3').textContent.trim();
const isCollapsed = group.classList.contains('collapsed');
localStorage.setItem(`filterState_${filterId}`, isCollapsed);
}

// Initialize filter states from localStorage
function initializeFilterStates() {
document.querySelectorAll('.filter-group').forEach(group => {
group.classList.add('collapsed'); // Ensure all groups are expanded
});
}
// Call this when the page loads
document.addEventListener('DOMContentLoaded', initializeFilterStates);