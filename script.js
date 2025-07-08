        // Mock client data
        const mockClients = [
            { id: "CL001", name: "TechCorp Electronics" },
            { id: "CL002", name: "FreshFoods Inc" },
            { id: "CL003", name: "BuildRight Materials" },
            { id: "CL004", name: "Global Logistics Co" },
            { id: "CL005", name: "Pharma Solutions" },
            { id: "CL006", name: "Auto Parts Express" },
            { id: "CL007", name: "Fashion Retail Group" },
            { id: "CL008", name: "Industrial Supplies Ltd" }
        ];

        // Mock project data
        const mockProjects = [
            { id: "PRJ001", name: "Electronics Transport 2024" },
            { id: "PRJ002", name: "Food Distribution Q1" },
            { id: "PRJ003", name: "Construction Materials Delivery" },
            { id: "PRJ004", name: "Medical Supplies Transport" },
            { id: "PRJ005", name: "Automotive Parts Logistics" },
            { id: "PRJ006", name: "Retail Distribution Network" },
            { id: "PRJ007", name: "Cross-Border Transport" },
            { id: "PRJ008", name: "Warehouse Relocation" }
        ];

        // Add Saudi cities data
        const saudiCities = [
            "Riyadh - الرياض",
            "Jeddah - جدة",
            "Mecca - مكة المكرمة",
            "Medina - المدينة المنورة",
            "Dammam - الدمام",
            "Khobar - الخبر",
            "Dhahran - الظهران",
            "Tabuk - تبوك",
            "Abha - أبها",
            "Taif - الطائف",
            "Khamis Mushait - خميس مشيط",
            "Buraidah - بريدة",
            "Jubail - الجبيل",
            "Yanbu - ينبع",
            "Najran - نجران",
            "Jazan - جازان",
            "Hail - حائل",
            "Sakaka - سكاكا",
            "Arar - عرعر",
            "Al-Baha - الباحة",
            "Neom - نيوم"
        ];

        // Sample trip data
        const trips = [
            {
                id: '18132',
                pickupDate: 'Dec 9, 2024',
                from: 'Riyadh - الرياض',
                to: 'Sudair - سدير',
                client: 'client7275',
                carrier: 'representative1671',
                bayanStatus: 'pending',
                actions: ['pod', 'customs', 'finalization'],
                plateNumber: 'ABC-123',
                status: 'pending',
                hasDriver: true,
                trucks: [
                    { id: 'T1', plateNumber: 'ABC-123', podStatus: 'pending', driverName: 'Mohammed Ali' },
                    { id: 'T2', plateNumber: 'XYZ-456', podStatus: 'uploaded', driverName: 'Ahmed Hassan' }
                ]
            },
            {
                id: '18134',
                pickupDate: 'Dec 9, 2024',
                from: 'Riyadh - الرياض',
                to: 'Dubai UAE - دبي',
                client: 'client6295',
                carrier: 'representative6838',
                bayanStatus: 'approved',
                actions: ['invoice', 'finalization'],
                plateNumber: 'XYZ-456',
                status: 'approved',
                hasDriver: false,
                trucks: []
            },
            {
                id: '18133',
                pickupDate: 'Dec 9, 2024',
                from: 'Riyadh - الرياض',
                to: 'Riyadh - الرياض',
                client: 'client7275',
                carrier: 'representative6609',
                bayanStatus: 'completed',
                actions: ['pod', 'invoice'],
                plateNumber: 'DEF-501',
                status: 'completed',
                hasDriver: true,
                trucks: [
                    { id: 'T1', plateNumber: 'DEF-789', podStatus: 'uploaded', driverName: 'Khalid Omar' },
                    { id: 'T2', plateNumber: 'JKL-345', podStatus: 'uploaded', driverName: 'Saad Abdullah' }
                ]
            },
            {
                id: '18135-A',
                pickupDate: 'Dec 9, 2024',
                from: 'Riyadh - الرياض',
                to: 'Dubai UAE - دبي',
                client: 'client6295',
                carrier: 'representative5',
                bayanStatus: 'pending',
                actions: ['customs', 'finalization'],
                plateNumber: 'GHI-012',
                status: 'pending',
                hasDriver: false,
                trucks: []
            },
            {
                id: '18135-B',
                pickupDate: 'Dec 9, 2024',
                from: 'Riyadh - الرياض',
                to: 'Dubai UAE - دبي',
                client: 'client6295',
                carrier: 'representative5',
                bayanStatus: 'approved',
                actions: ['pod', 'invoice', 'customs'],
                plateNumber: 'JKL-345',
                status: 'approved',
                hasDriver: true,
                trucks: [
                    { id: 'T1', plateNumber: 'JKL-345', podStatus: 'uploaded', driverName: 'Ali Ahmed' },
                    { id: 'T2', plateNumber: 'MNO-678', podStatus: 'uploaded', driverName: 'Mohammed Ali' }
                ]
            },
            {
                id: '18127',
                pickupDate: 'Dec 8, 2024',
                from: 'Riyadh - الرياض',
                to: 'Neom - نيوم',
                client: 'client7275',
                carrier: 'representative6835',
                bayanStatus: 'pending',
                actions: ['finalization'],
                plateNumber: 'MNO-678',
                status: 'pending',
                hasDriver: false,
                trucks: []
            },
            {
                id: '18128',
                pickupDate: 'Dec 8, 2024',
                from: 'Riyadh - الرياض',
                to: 'Neom - نيوم',
                client: 'client7275',
                carrier: 'representative6789',
                bayanStatus: 'completed',
                actions: ['pod', 'invoice', 'customs', 'finalization'],
                plateNumber: 'PQR-901',
                status: 'completed',
                hasDriver: true,
                trucks: [
                    { id: 'T1', plateNumber: 'PQR-901', podStatus: 'uploaded', driverName: 'Ahmed Hassan' },
                    { id: 'T2', plateNumber: 'GHI-012', podStatus: 'uploaded', driverName: 'Mohammed Ali' }
                ]
            }
        ];

        let filteredTrips = [...trips];
        let currentTrip = null;
        let currentTruckIndex = 0;

        // Initialize the table
        function initializeTable() {
            renderTable(filteredTrips);
            updateActionCounts();
        }

        // Render table with trips data
        function renderTable(tripsData) {
            const tbody = document.getElementById('trip-table-body');
            tbody.innerHTML = '';

            tripsData.forEach(trip => {
                const row = document.createElement('tr');
                row.onclick = () => openTripModal(trip);
                
                row.innerHTML = `
                    <td>${trip.id}</td>
                    <td>${trip.pickupDate}</td>
                    <td>${trip.from}</td>
                    <td>${trip.to}</td>
                    <td>${trip.client}</td>
                    <td>${trip.carrier}</td>
                    <td>
                        <span class="status-badge status-${trip.bayanStatus}">${trip.bayanStatus}</span>
                        ${!trip.hasDriver ? '<span class="status-badge status-pending" title="Driver not assigned">⚠️ No Driver</span>' : ''}
                    </td>
                `;
                
                tbody.appendChild(row);
            });
        }

        // Update action counts in badges
        function updateActionCounts() {
            const podCount = trips.filter(trip => trip.actions.includes('pod')).length;
            const invoiceCount = trips.filter(trip => trip.actions.includes('invoice')).length;
            const customsCount = trips.filter(trip => trip.actions.includes('customs')).length;
            const finalizationCount = trips.filter(trip => trip.actions.includes('finalization')).length;

            document.getElementById('pod-count').textContent = podCount;
            document.getElementById('invoice-count').textContent = invoiceCount;
            document.getElementById('customs-count').textContent = customsCount;
            document.getElementById('finalization-count').textContent = finalizationCount;
        }

        // Filter by action buttons
        function filterByAction(action) {
            filteredTrips = trips.filter(trip => trip.actions.includes(action));
            renderTable(filteredTrips);
            
            // Update filter checkboxes
            document.querySelectorAll('.checkbox-item input').forEach(cb => cb.checked = false);
            document.getElementById(action + '-filter').checked = true;
        }

        // Apply filters
        function applyFilters() {
            filteredTrips = trips.filter(trip => {
                // Action filters
                const checkedActions = Array.from(document.querySelectorAll('.checkbox-item input:checked')).map(cb => cb.value);
                if (checkedActions.length > 0 && !checkedActions.some(action => trip.actions.includes(action))) {
                    return false;
                }

                // Plate number filter
                const plateFilter = document.getElementById('plate-filter').value.toLowerCase();
                if (plateFilter && !trip.plateNumber.toLowerCase().includes(plateFilter)) {
                    return false;
                }

                // Date range filter
                const dateFrom = document.getElementById('date-from').value;
                const dateTo = document.getElementById('date-to').value;
                if (dateFrom || dateTo) {
                    const tripDate = new Date(trip.pickupDate);
                    if (dateFrom && tripDate < new Date(dateFrom)) return false;
                    if (dateTo && tripDate > new Date(dateTo)) return false;
                }

                // Status filter
                const statusFilter = document.getElementById('status-filter').value;
                if (statusFilter && trip.status !== statusFilter) {
                    return false;
                }

                // Client filter
                const clientFilter = document.getElementById('client-filter').value.toLowerCase();
                if (clientFilter && !trip.client.toLowerCase().includes(clientFilter)) {
                    return false;
                }

                // Carrier filter
                const carrierFilter = document.getElementById('carrier-filter').value.toLowerCase();
                if (carrierFilter && !trip.carrier.toLowerCase().includes(carrierFilter)) {
                    return false;
                }

                return true;
            });

            renderTable(filteredTrips);
        }

        // Clear all filters
        function clearAllFilters() {
            document.querySelectorAll('.filter-panel input, .filter-panel select').forEach(input => {
                if (input.type === 'checkbox') {
                    input.checked = false;
                } else {
                    input.value = '';
                }
            });
            filteredTrips = [...trips];
            renderTable(filteredTrips);
        }

        // Open trip modal
        function openTripModal(trip) {
            currentTrip = trip;
            currentTruckIndex = 0;
            
            // Reset modal content
            resetModalContent();
            
            // Render trip overview
            renderTripOverview(trip);
            
            if (!trip.hasDriver) {
                // Show no driver message and disable tabs
                renderNoDriverContent();
            } else {
                // Render truck list and content as normal
                renderTruckList(trip.trucks);
                setupTabHandlers();
                renderTruckContent(trip, 0);
            }
            
            document.getElementById('trip-modal').classList.add('active');
        }

        function resetModalContent() {
            // Reset truck list with a separate container for buttons
            const truckList = document.getElementById('truck-list');
            truckList.innerHTML = `
                <div class="truck-search">
                    <input type="text" 
                           id="truck-search-input" 
                           placeholder="Search plate number..."
                           oninput="filterTrucks(this.value)">
                </div>
                <div class="truck-buttons-container"></div>
            `;

            // Reset tab list to default state
            const tabList = document.querySelector('.tab-list');
            tabList.innerHTML = `
                <button class="tab-btn active" data-tab="truck-details">
                    Truck Details
                </button>
                <button class="tab-btn" data-tab="pod">
                    Upload POD
                </button>
                <button class="tab-btn" data-tab="invoice">
                    Create Invoice
                </button>
                <button class="tab-btn" data-tab="customs">
                    Customs Clearance
                </button>
                <button class="tab-btn" data-tab="finalization">
                    Trip Finalization
                </button>
            `;

            // Clear tab content
            const tabContent = document.getElementById('tab-content');
            tabContent.innerHTML = '';

            // Remove any existing event listeners
            const oldTabs = document.querySelectorAll('.tab-btn');
            oldTabs.forEach(tab => {
                const newTab = tab.cloneNode(true);
                tab.parentNode.replaceChild(newTab, tab);
            });
        }

        function setupTabHandlers() {
            document.querySelectorAll('.tab-btn').forEach(btn => {
                btn.addEventListener('click', function() {
                    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
                    this.classList.add('active');
                    
                    const tab = this.dataset.tab;
                    const tabContent = document.getElementById('tab-content');

                    switch(tab) {
                        case 'truck-details':
                            const truck = currentTrip.trucks[currentTruckIndex];
                            tabContent.innerHTML = `
                                <div style="padding: 20px; background: #f7fafc; border-radius: 8px;">
                                    <h4 style="margin-bottom: 15px; color: #2d3748;">Truck Details</h4>
                                    <div style="margin-bottom: 15px;">
                                        <label style="display: block; margin-bottom: 5px; font-weight: 500;">Plate Number:</label>
                                        <span>${truck.plateNumber}</span>
                                    </div>
                                    <div style="margin-bottom: 15px;">
                                        <label style="display: block; margin-bottom: 5px; font-weight: 500;">Driver:</label>
                                        <span>${truck.driverName}</span>
                                    </div>
                                    <div style="margin-bottom: 15px;">
                                        <label style="display: block; margin-bottom: 5px; font-weight: 500;">Carrier:</label>
                                        <span>${currentTrip.carrier}</span>
                                    </div>
                                    <div style="margin-bottom: 15px;">
                                        <label style="display: block; margin-bottom: 5px; font-weight: 500;">Carrier Card:</label>
                                        <span>Available</span>
                                    </div>
                                </div>
                            `;
                            break;
                        case 'pod':
                            tabContent.innerHTML = `
                                <div style="padding: 20px; background: #f7fafc; border-radius: 8px;">
                                    <h4 style="margin-bottom: 15px; color: #2d3748;">Upload Proof of Delivery</h4>
                                    <p style="margin-bottom: 15px; color: #4a5568;">Status: <span class="status-badge status-pending">Pending Upload</span></p>
                                    <input type="file" accept=".pdf,.jpg,.png" style="margin-bottom: 15px;">
                                    <br>
                                    <button class="primary-btn">Upload POD</button>
                                </div>
                            `;
                            break;
                        case 'invoice':
                            tabContent.innerHTML = `
                                <div style="padding: 20px; background: #f7fafc; border-radius: 8px;">
                                    <h4 style="margin-bottom: 15px; color: #2d3748;">Create Invoice</h4>
                                    <p style="margin-bottom: 15px; color: #4a5568;">Status: <span class="status-badge status-approved">Ready to Generate</span></p>
                                    <div style="margin-bottom: 15px;">
                                        <label style="display: block; margin-bottom: 5px; font-weight: 500;">Invoice Amount:</label>
                                        <input type="number" placeholder="Enter amount" style="width: 200px; padding: 8px; border: 1px solid #e2e8f0; border-radius: 4px;">
                                    </div>
                                    <button class="primary-btn">Generate Invoice</button>
                                </div>
                            `;
                            break;
                        case 'customs':
                            tabContent.innerHTML = `
                                <div style="padding: 20px; background: #f7fafc; border-radius: 8px;">
                                    <h4 style="margin-bottom: 15px; color: #2d3748;">Customs Clearance</h4>
                                    <p style="margin-bottom: 15px; color: #4a5568;">Status: <span class="status-badge status-pending">Awaiting Documentation</span></p>
                                    <div style="margin-bottom: 15px;">
                                        <label style="display: block; margin-bottom: 5px; font-weight: 500;">Customs Declaration:</label>
                                        <input type="file" accept=".pdf" style="margin-bottom: 10px;">
                                    </div>
                                    <div style="margin-bottom: 15px;">
                                        <label style="display: block; margin-bottom: 5px; font-weight: 500;">Customs Reference:</label>
                                        <input type="text" placeholder="Enter reference number" style="width: 200px; padding: 8px; border: 1px solid #e2e8f0; border-radius: 4px;">
                                    </div>
                                    <button class="primary-btn">Submit for Clearance</button>
                                </div>
                            `;
                            break;
                        case 'finalization':
                            tabContent.innerHTML = `
                                <div style="padding: 20px; background: #f7fafc; border-radius: 8px;">
                                    <h4 style="margin-bottom: 15px; color: #2d3748;">Trip Finalization</h4>
                                    <p style="margin-bottom: 15px; color: #4a5568;">Status: <span class="status-badge status-pending">Pending Review</span></p>
                                    <div style="margin-bottom: 15px;">
                                        <label style="display: block; margin-bottom: 5px; font-weight: 500;">Final Notes:</label>
                                        <textarea placeholder="Add final comments..." style="width: 100%; height: 80px; padding: 8px; border: 1px solid #e2e8f0; border-radius: 4px; resize: vertical;"></textarea>
                                    </div>
                                    <div style="margin-bottom: 15px;">
                                        <label style="display: flex; align-items: center; font-weight: 500;">
                                            <input type="checkbox" style="margin-right: 8px;">
                                            Confirm all documents are complete
                                        </label>
                                    </div>
                                    <button class="primary-btn">Finalize Trip</button>
                                </div>
                            `;
                            break;
                    }
                });
            });

            // Trigger click on active tab
            document.querySelector('.tab-btn.active').click();
        }

        function renderTruckContent(trip, truckIdx) {
            currentTruckIndex = truckIdx;
            document.querySelector('.tab-btn.active').click();
        }

        function renderTripOverview(trip) {
            document.getElementById('trip-id').textContent = trip.id;
            document.getElementById('pickup-date').textContent = trip.pickupDate;
            document.getElementById('from').textContent = trip.from;
            document.getElementById('to').textContent = trip.to;
            document.getElementById('client').textContent = trip.client;
            document.getElementById('carrier').textContent = trip.carrier;
            document.getElementById('plate-number').textContent = trip.plateNumber;
            document.getElementById('bayan-status').textContent = trip.bayanStatus;
        }

        function renderTruckList(trucks) {
            const truckList = document.getElementById('truck-list');
            const searchBar = truckList.querySelector('.truck-search');
            const searchInput = searchBar.querySelector('input');
            
            // Store the current input value and selection range
            const currentValue = searchInput.value;
            const selectionStart = searchInput.selectionStart;
            const selectionEnd = searchInput.selectionEnd;
            const hasFocus = document.activeElement === searchInput;

            // Create a container for truck buttons
            const truckButtonsContainer = truckList.querySelector('.truck-buttons-container') || document.createElement('div');
            truckButtonsContainer.className = 'truck-buttons-container';
            truckButtonsContainer.innerHTML = '';

            // Filter trucks if there's a search term
            const searchTerm = currentValue.toLowerCase();
            const filteredTrucks = searchTerm ? 
                trucks.filter(truck => truck.plateNumber.toLowerCase().includes(searchTerm)) : 
                trucks;

            filteredTrucks.forEach((truck, idx) => {
                const btn = document.createElement('button');
                btn.className = 'truck-btn' + (idx === currentTruckIndex ? ' active' : '');
                btn.textContent = `Truck ${truck.id} (${truck.plateNumber})`;
                btn.onclick = () => {
                    currentTruckIndex = idx;
                    renderTruckButtons(trucks);
                    renderTruckContent(currentTrip, idx);
                };
                truckButtonsContainer.appendChild(btn);
            });

            // If no trucks match the search, show a message
            if (searchTerm && filteredTrucks.length === 0) {
                const noResults = document.createElement('div');
                noResults.style.padding = '10px';
                noResults.style.color = '#718096';
                noResults.style.textAlign = 'center';
                noResults.textContent = 'No matching trucks found';
                truckButtonsContainer.appendChild(noResults);
            }

            // Only update the truck buttons container
            if (!truckList.contains(truckButtonsContainer)) {
                truckList.appendChild(truckButtonsContainer);
            }

            // Restore input focus and selection if it was focused
            if (hasFocus) {
                searchInput.focus();
                searchInput.setSelectionRange(selectionStart, selectionEnd);
            }
        }

        function renderTruckButtons(trucks) {
            const truckList = document.getElementById('truck-list');
            const truckButtonsContainer = truckList.querySelector('.truck-buttons-container');
            if (truckButtonsContainer) {
                const searchTerm = truckList.querySelector('input').value.toLowerCase();
                const filteredTrucks = searchTerm ? 
                    trucks.filter(truck => truck.plateNumber.toLowerCase().includes(searchTerm)) : 
                    trucks;

                truckButtonsContainer.innerHTML = '';
                filteredTrucks.forEach((truck, idx) => {
                    const btn = document.createElement('button');
                    btn.className = 'truck-btn' + (idx === currentTruckIndex ? ' active' : '');
                    btn.textContent = `Truck ${truck.id} (${truck.plateNumber})`;
                    btn.onclick = () => {
                        currentTruckIndex = idx;
                        renderTruckButtons(trucks);
                        renderTruckContent(currentTrip, idx);
                    };
                    truckButtonsContainer.appendChild(btn);
                });

                if (searchTerm && filteredTrucks.length === 0) {
                    const noResults = document.createElement('div');
                    noResults.style.padding = '10px';
                    noResults.style.color = '#718096';
                    noResults.style.textAlign = 'center';
                    noResults.textContent = 'No matching trucks found';
                    truckButtonsContainer.appendChild(noResults);
                }
            }
        }

        function filterTrucks(searchTerm) {
            if (currentTrip && currentTrip.hasDriver) {
                renderTruckButtons(currentTrip.trucks);
            }
        }

        function renderNoDriverContent() {
            // Show only the assign driver tab
            const tabList = document.querySelector('.tab-list');
            tabList.innerHTML = `
                <button class="tab-btn active" data-tab="assign-driver">
                    Assign Driver
                </button>
            `;

            // Show assign driver message
            const tabContent = document.getElementById('tab-content');
            tabContent.innerHTML = `
                <div style="padding: 40px; text-align: center; background: #f7fafc; border-radius: 8px; margin: 20px;">
                    <div style="font-size: 48px; margin-bottom: 20px;">🚛</div>
                    <h3 style="color: #2d3748; margin-bottom: 15px;">Assign a driver to proceed with trip actions</h3>
                    <p style="color: #4a5568; margin-bottom: 20px;">All actions are locked until a driver is assigned to this trip.</p>
                    <button class="primary-btn" onclick="showAssignDriverForm()">
                        Assign Driver
                    </button>
                </div>
            `;
        }

        function showAssignDriverForm() {
            const tabContent = document.getElementById('tab-content');
            tabContent.innerHTML = `
                <div style="padding: 20px; background: #f7fafc; border-radius: 8px;">
                    <h4 style="margin-bottom: 15px; color: #2d3748;">Assign Driver</h4>
                    <div style="margin-bottom: 15px;">
                        <label style="display: block; margin-bottom: 5px; font-weight: 500;">Select Driver:</label>
                        <select style="width: 100%; padding: 8px; border: 1px solid #e2e8f0; border-radius: 4px;">
                            <option value="">Select a driver...</option>
                            <option value="1">Mohammed Ali</option>
                            <option value="2">Ahmed Hassan</option>
                            <option value="3">Khalid Omar</option>
                        </select>
                    </div>
                    <div style="margin-bottom: 15px;">
                        <label style="display: block; margin-bottom: 5px; font-weight: 500;">Truck Plate Number:</label>
                        <input type="text" placeholder="Enter plate number" style="width: 100%; padding: 8px; border: 1px solid #e2e8f0; border-radius: 4px;">
                    </div>
                    <button class="primary-btn" onclick="assignDriverToTrip()">
                        Assign Driver & Continue
                    </button>
                </div>
            `;
        }

        function assignDriverToTrip() {
            // This would typically make an API call to assign the driver
            alert('Driver assignment functionality will be implemented in a future update.');
            closeModal();
        }

        // Close modal
        function closeModal() {
            document.getElementById('trip-modal').classList.remove('active');
            currentTrip = null;
        }

        // Toggle dropdown menu
        function toggleDropdown() {
            const dropdown = document.getElementById('dropdown-menu');
            dropdown.classList.toggle('active');
        }

        // Event listeners
        document.addEventListener('DOMContentLoaded', function() {
            initializeTable();

            // Add event listeners for filters
            document.querySelectorAll('.filter-panel input, .filter-panel select').forEach(input => {
                input.addEventListener('change', applyFilters);
                input.addEventListener('keyup', applyFilters);
            });

            // Tab functionality
            document.querySelectorAll('.tab-btn').forEach(btn => {
                btn.addEventListener('click', function() {
                    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
                    this.classList.add('active');
                    
                    const tab = this.dataset.tab;
                    const detailsContainer = document.getElementById('trip-details');
                    const tabContent = document.getElementById('tab-content');

                    if (tab === 'details') {
                        // Show trip details
                        detailsContainer.style.display = 'grid';
                        tabContent.style.display = 'none';  // Hide tab content
                        detailsContainer.innerHTML = `
                            <div class="detail-item">
                                <label>Trip ID</label>
                                <span>${currentTrip.id}</span>
                            </div>
                            <div class="detail-item">
                                <label>Pickup Date</label>
                                <span>${currentTrip.pickupDate}</span>
                            </div>
                            <div class="detail-item">
                                <label>From</label>
                                <span>${currentTrip.from}</span>
                            </div>
                            <div class="detail-item">
                                <label>To</label>
                                <span>${currentTrip.to}</span>
                            </div>
                            <div class="detail-item">
                                <label>Client</label>
                                <span>${currentTrip.client}</span>
                            </div>
                            <div class="detail-item">
                                <label>Carrier</label>
                                <span>${currentTrip.carrier}</span>
                            </div>
                            <div class="detail-item">
                                <label>Plate Number</label>
                                <span>${currentTrip.plateNumber}</span>
                            </div>
                            <div class="detail-item">
                                <label>Bayan Status</label>
                                <span class="status-badge status-${currentTrip.bayanStatus}">${currentTrip.bayanStatus}</span>
                            </div>
                        `;
                    } else {
                        // Hide trip details and show action content
                        detailsContainer.style.display = 'none';
                        tabContent.style.display = 'block';  // Show tab content
                        switch(tab) {
                            case 'pod':
                                tabContent.innerHTML = `
                                    <div style="padding: 20px; background: #f7fafc; border-radius: 8px;">
                                        <h4 style="margin-bottom: 15px; color: #2d3748;">Upload Proof of Delivery</h4>
                                        <p style="margin-bottom: 15px; color: #4a5568;">Status: <span class="status-badge status-pending">Pending Upload</span></p>
                                        <input type="file" accept=".pdf,.jpg,.png" style="margin-bottom: 15px;">
                                        <br>
                                        <button class="primary-btn">Upload POD</button>
                                    </div>
                                `;
                                break;
                            case 'invoice':
                                tabContent.innerHTML = `
                                    <div style="padding: 20px; background: #f7fafc; border-radius: 8px;">
                                        <h4 style="margin-bottom: 15px; color: #2d3748;">Create Invoice</h4>
                                        <p style="margin-bottom: 15px; color: #4a5568;">Status: <span class="status-badge status-approved">Ready to Generate</span></p>
                                        <div style="margin-bottom: 15px;">
                                            <label style="display: block; margin-bottom: 5px; font-weight: 500;">Invoice Amount:</label>
                                            <input type="number" placeholder="Enter amount" style="width: 200px; padding: 8px; border: 1px solid #e2e8f0; border-radius: 4px;">
                                        </div>
                                        <button class="primary-btn">Generate Invoice</button>
                                    </div>
                                `;
                                break;
                            case 'customs':
                                tabContent.innerHTML = `
                                    <div style="padding: 20px; background: #f7fafc; border-radius: 8px;">
                                        <h4 style="margin-bottom: 15px; color: #2d3748;">Customs Clearance</h4>
                                        <p style="margin-bottom: 15px; color: #4a5568;">Status: <span class="status-badge status-pending">Awaiting Documentation</span></p>
                                        <div style="margin-bottom: 15px;">
                                            <label style="display: block; margin-bottom: 5px; font-weight: 500;">Customs Declaration:</label>
                                            <input type="file" accept=".pdf" style="margin-bottom: 10px;">
                                        </div>
                                        <div style="margin-bottom: 15px;">
                                            <label style="display: block; margin-bottom: 5px; font-weight: 500;">Customs Reference:</label>
                                            <input type="text" placeholder="Enter reference number" style="width: 200px; padding: 8px; border: 1px solid #e2e8f0; border-radius: 4px;">
                                        </div>
                                        <button class="primary-btn">Submit for Clearance</button>
                                    </div>
                                `;
                                break;
                            case 'finalization':
                                tabContent.innerHTML = `
                                    <div style="padding: 20px; background: #f7fafc; border-radius: 8px;">
                                        <h4 style="margin-bottom: 15px; color: #2d3748;">Trip Finalization</h4>
                                        <p style="margin-bottom: 15px; color: #4a5568;">Status: <span class="status-badge status-pending">Pending Review</span></p>
                                        <div style="margin-bottom: 15px;">
                                            <label style="display: block; margin-bottom: 5px; font-weight: 500;">Final Notes:</label>
                                            <textarea placeholder="Add final comments..." style="width: 100%; height: 80px; padding: 8px; border: 1px solid #e2e8f0; border-radius: 4px; resize: vertical;"></textarea>
                                        </div>
                                        <div style="margin-bottom: 15px;">
                                            <label style="display: flex; align-items: center; font-weight: 500;">
                                                <input type="checkbox" style="margin-right: 8px;">
                                                Confirm all documents are complete
                                            </label>
                                        </div>
                                        <button class="primary-btn">Finalize Trip</button>
                                    </div>
                                `;
                                break;
                        }
                    }
                });
            });

            // Close modal when clicking outside
            document.getElementById('trip-modal').addEventListener('click', function(e) {
                if (e.target === this) {
                    closeModal();
                }
            });

            // Close dropdown when clicking outside
            document.addEventListener('click', function(e) {
                if (!e.target.closest('.more-actions')) {
                    document.getElementById('dropdown-menu').classList.remove('active');
                }
            });

            // Dropdown item actions
            document.addEventListener('click', function(e) {
                if (e.target.classList.contains('dropdown-item')) {
                    const action = e.target.textContent;
                    switch(action) {
                        case 'Export to Excel':
                            alert('Exporting trip data to Excel...');
                            break;
                        case 'Cancel Trip':
                            if (confirm('Are you sure you want to cancel this trip?')) {
                                alert('Trip cancelled successfully');
                                closeModal();
                            }
                            break;
                        case 'Add Additional Costs':
                            alert('Opening additional costs form...');
                            break;
                    }
                    document.getElementById('dropdown-menu').classList.remove('active');
                }
            });

            // Add new request button handler
            document.querySelector('.floating-action-btn').onclick = openNewRequestModal;

            // New request modal navigation
            document.getElementById('btn-next').onclick = nextStep;
            document.getElementById('btn-back').onclick = previousStep;
            document.getElementById('btn-save').onclick = saveAndExit;

            // Close modal when clicking outside
            document.getElementById('new-request-modal').addEventListener('click', function(e) {
                if (e.target === this) {
                    closeNewRequestModal();
                }
            });

            // Close modal with Escape key
            document.addEventListener('keydown', function(e) {
                if (e.key === 'Escape') {
                    closeNewRequestModal();
                    handleDemandCancel();
                }
            });

            // Close demand confirmation modal when clicking outside
            document.getElementById('demand-confirmation-modal').addEventListener('click', function(e) {
                if (e.target === this) {
                    handleDemandCancel();
                }
            });

            // Form field change handlers
            document.addEventListener('change', function(e) {
                if (e.target.closest('#form-content')) {
                    saveCurrentStepData();
                    updateOrderSummary();
                }
            });

            // Input field keyup handlers for real-time updates
            document.addEventListener('keyup', function(e) {
                if (e.target.closest('#form-content')) {
                    saveCurrentStepData();
                    updateOrderSummary();
                }
            });

            // Enable demand selector only after a project has been chosen
            const projectSelector = document.getElementById('project-selector');
            const demandSelector = document.getElementById('demand-selector');
            if (projectSelector && demandSelector) {
                // Ensure initial state
                demandSelector.disabled = !projectSelector.value;

                // Toggle disabled state based on project selection
                projectSelector.addEventListener('change', function () {
                    demandSelector.disabled = !this.value;
                    if (!this.value) {
                        // Reset demand selection if project cleared
                        demandSelector.value = '';
                    }
                });
            }
        });

        // Close modal with Escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                closeModal();
            }
        });

        function scrollToTripListAndFilter(action) {
            // Scroll to the trip list section
            document.getElementById('trip-list-section').scrollIntoView({ behavior: 'smooth' });
            // Apply the filter as before
            filterByAction(action);
        }

        // New Request Modal Functions
        let currentStep = 1;
        const totalSteps = 5;
        const newRequestData = {
            client: null,
            route: {
                pickup: {
                    city: null,
                    datetime: null,
                    details: null
                },
                dropoff: {
                    city: null,
                    datetime: null,
                    details: null
                }
            },
            truck: {
                type: null,
                count: 1,
                size: null,
                packaging: null,
                weight: null,
                loadValue: null,
                loadType: null,
                quantity: null,
                price: null,
                details: null
            },
            driver: {
                selected: null,
                offerAmount: null
            },
            pod: {
                file: null,
                referenceNumber: null
            }
        };

        function openNewRequestModal() {
            // Show the demand confirmation modal first
            document.getElementById('demand-confirmation-modal').classList.add('active');
        }

        function handleDemandYes() {
            // Show the demand selection section
            document.getElementById('demand-selection-section').style.display = 'block';
            document.getElementById('create-demand-form').style.display = 'none';
            
            // Change the buttons
            const buttonGroup = document.querySelector('#demand-confirmation-modal .button-group');
            buttonGroup.innerHTML = `
                <button onclick="handleDemandCancel()" class="btn-back" style="padding: 8px 16px;">Cancel</button>
                <button onclick="handleDemandSelect()" class="btn-next" style="padding: 8px 16px;">Continue</button>
            `;
        }

        function handleDemandNo() {
            // Close the confirmation modal
            document.getElementById('demand-confirmation-modal').classList.remove('active');
            
            // Show the regular new request modal
            document.getElementById('new-request-modal').classList.add('active');
            renderStep(1);
            updateStepper(1);
        }

        function handleDemandCancel() {
            // Close the confirmation modal and reset its state
            document.getElementById('demand-confirmation-modal').classList.remove('active');
            setTimeout(() => {
                document.getElementById('demand-selection-section').style.display = 'none';
                document.getElementById('create-demand-form').style.display = 'none';
                const buttonGroup = document.querySelector('#demand-confirmation-modal .button-group');
                buttonGroup.innerHTML = `
                    <button onclick="handleDemandNo()" class="btn-back" style="padding: 8px 16px;">No</button>
                    <button onclick="handleDemandYes()" class="btn-next" style="padding: 8px 16px;">Yes</button>
                `;
            }, 300);
        }

        function handleDemandSelect() {
            const selectedDemand = document.getElementById('demand-selector').value;
            if (!selectedDemand) {
                alert('Please select a demand');
                return;
            }

            // Close the confirmation modal
            document.getElementById('demand-confirmation-modal').classList.remove('active');

            // Show the new request modal
            document.getElementById('new-request-modal').classList.add('active');
            
            // First render step 1 to ensure client data is populated
            renderStep(1);
            populateMockDemandData(selectedDemand);
            
            // Then move to step 2
            currentStep = 2;
            renderStep(2);
            updateStepper(2);
            
            // Update the order summary to reflect the populated data
            updateOrderSummary();
        }

        // Also update the saveCurrentStepData function to handle this case
        function saveCurrentStepData() {
            switch(currentStep) {
                case 1:
                    newRequestData.client = document.getElementById('client-search')?.value;
                    break;
                case 2:
                    newRequestData.route = {
                        pickup: {
                            city: document.getElementById('pickup-city')?.value,
                            datetime: document.getElementById('pickup-datetime')?.value,
                            details: document.getElementById('pickup-details')?.value
                        },
                        dropoff: {
                            city: document.getElementById('dropoff-city')?.value,
                            datetime: document.getElementById('dropoff-datetime')?.value,
                            details: document.getElementById('dropoff-details')?.value
                        }
                    };
                    break;
                case 3:
                    newRequestData.truck = {
                        type: document.getElementById('truck-type').value,
                        count: document.getElementById('truck-count').value,
                        size: document.getElementById('truck-size').value,
                        packaging: document.getElementById('packaging').value,
                        weight: document.getElementById('weight').value,
                        loadValue: document.getElementById('load-value').value,
                        loadType: document.getElementById('load-type').value,
                        quantity: document.getElementById('quantity').value,
                        price: document.getElementById('price').value,
                        details: document.getElementById('details').value
                    };
                    break;
                case 4:
                    newRequestData.driver = {
                        selected: document.getElementById('driver').value,
                        offerAmount: document.getElementById('offer-amount').value
                    };
                    break;
                case 5:
                    newRequestData.pod = {
                        file: document.getElementById('pod-file').files[0],
                        referenceNumber: document.getElementById('reference-number').value
                    };
                    break;
            }
            validateCurrentStep();
            updateOrderSummary();
        }

        // Update the back button handler to handle this case
        function previousStep() {
            if (currentStep > 1) {
                // If we're on step 2 and came from a demand selection, don't allow going back
                if (currentStep === 2 && newRequestData.client && document.getElementById('client-search')?.disabled) {
                    return;
                }
                currentStep--;
                renderStep(currentStep);
                updateStepper(currentStep);
            }
        }

        function closeNewRequestModal() {
            document.getElementById('new-request-modal').classList.remove('active');
            currentStep = 1;
            updateStepper(1);
        }

        function updateStepper(step) {
            const steps = document.querySelectorAll('.step');
            const connectors = document.querySelectorAll('.step-connector');
            steps.forEach((stepEl, index) => {
                stepEl.classList.remove('active', 'completed');
                if (index + 1 === step) {
                    stepEl.classList.add('active'); // الخطوة الحالية فقط
                } else if (index + 1 < step) {
                    stepEl.classList.add('completed'); // الخطوات السابقة
                }
            });
            connectors.forEach((connector, index) => {
                connector.style.background = (index + 1 < step) ? '#48bb78' : '#e2e8f0';
            });

            // زر الرجوع
            const backBtn = document.getElementById('btn-back');
            if (backBtn) {
                // Always keep the Back button enabled
                backBtn.removeAttribute('disabled');
                backBtn.style.opacity = '1';
                backBtn.style.cursor = 'pointer';
            }
        }

        // Reveal a previously hidden (optional) step in the stepper
        function revealStep(stepNumber) {
            const stepEl = document.getElementById('step-' + stepNumber);
            if (stepEl && stepEl.classList.contains('optional-step')) {
                stepEl.classList.remove('optional-step');
            }
            const connectorEl = document.getElementById('connector-' + (stepNumber - 1) + '-' + stepNumber);
            if (connectorEl && connectorEl.classList.contains('optional-step')) {
                connectorEl.classList.remove('optional-step');
            }
        }

        // Update the label of the primary navigation button depending on the current step
        function updateStepButtons() {
            const nextBtn = document.getElementById('btn-next');
            if (!nextBtn) return;
            if (currentStep === 3) {
                nextBtn.textContent = 'Complete';
            } else {
                nextBtn.textContent = 'Next →';
            }
        }

        function renderStep(step) {
            const formContent = document.getElementById('form-content');
            
            switch(step) {
                case 1:
                    formContent.innerHTML = `
                        <h2>Client Information</h2>
                        <div class="form-field" style="position:relative;">
                            <label for="client-search">Select Client *</label>
                            <input type="text" id="client-search" placeholder="Search client..." autocomplete="off" required onfocus="showClientDropdown()" oninput="filterClientDropdown()" />
                            <div id="client-dropdown" class="dropdown-list" style="display:none; position:absolute; top:100%; left:0; right:0; background:white; border:1px solid #e2e8f0; z-index:10; max-height:200px; overflow-y:auto;"></div>
                        </div>
                        <button class="btn-save" onclick="showAddClientForm()">+ Add New Client</button>
                    `;
                    break;
                case 2:
                    formContent.innerHTML = `
                        <h2>Route Information</h2>
                        <div class="form-grid">
                            <div>
                                <h3>Pickup Location *</h3>
                                <div class="form-field">
                                    <label>City</label>
                                    <select id="pickup-city" required onchange="saveCurrentStepData()">
                                        <option value="">Select city...</option>
                                        ${saudiCities.map(city => `<option value="${city}">${city}</option>`).join('')}
                                    </select>
                                </div>
                                <div class="form-field">
                                    <label>Pickup Date & Time *</label>
                                    <input type="datetime-local" id="pickup-datetime" required onchange="saveCurrentStepData()">
                                </div>
                                <div class="form-field">
                                    <label>Additional Location Details</label>
                                    <textarea id="pickup-details" rows="2" onchange="saveCurrentStepData()" placeholder="Enter specific location details, landmarks, etc."></textarea>
                                </div>
                            </div>
                            <div>
                                <h3>Dropoff Location *</h3>
                                <div class="form-field">
                                    <label>City</label>
                                    <select id="dropoff-city" required onchange="saveCurrentStepData()">
                                        <option value="">Select city...</option>
                                        ${saudiCities.map(city => `<option value="${city}">${city}</option>`).join('')}
                                    </select>
                                </div>
                                <div class="form-field">
                                    <label>Dropoff Date & Time *</label>
                                    <input type="datetime-local" id="dropoff-datetime" required onchange="saveCurrentStepData()">
                                </div>
                                <div class="form-field">
                                    <label>Additional Location Details</label>
                                    <textarea id="dropoff-details" rows="2" onchange="saveCurrentStepData()" placeholder="Enter specific location details, landmarks, etc."></textarea>
                                </div>
                            </div>
                        </div>
                    `;
                    break;
                case 3:
                    formContent.innerHTML = `
                        <h2>Truck Details</h2>
                        <div class="form-grid">
                            <div class="form-field">
                                <label>Truck Type *</label>
                                <select id="truck-type" required onchange="saveCurrentStepData()">
                                    <option value="">Select type...</option>
                                    <option value="curtain">Curtain Slider</option>
                                    <option value="dyna">Dyna</option>
                                    <option value="flatbed">Flatbed</option>
                                </select>
                            </div>
                            <div class="form-field">
                                <label>Number of Trucks *</label>
                                <input type="number" id="truck-count" min="1" value="1" required onchange="saveCurrentStepData()">
                            </div>
                            <div class="form-field">
                                <label>Size *</label>
                                <select id="truck-size" required onchange="saveCurrentStepData()">
                                    <option value="">Select size...</option>
                                    <option value="13m">13M</option>
                                    <option value="13.6m">13.6M</option>
                                    <option value="15m">15M</option>
                                </select>
                            </div>
                            <div class="form-field">
                                <label>Packaging *</label>
                                <select id="packaging" required onchange="saveCurrentStepData()">
                                    <option value="">Select packaging...</option>
                                    <option value="container">Container</option>
                                    <option value="sacks">Sacks</option>
                                    <option value="pallets">Pallets</option>
                                </select>
                            </div>
                            <div class="form-field">
                                <label>Weight (tons) *</label>
                                <input type="number" id="weight" min="0" max="90" required onchange="saveCurrentStepData()">
                            </div>
                            <div class="form-field">
                                <label>Load Value *</label>
                                <input type="number" id="load-value" min="0" required onchange="saveCurrentStepData()">
                            </div>
                            <div class="form-field">
                                <label>Load Type *</label>
                                <select id="load-type" required onchange="saveCurrentStepData()">
                                    <option value="">Select type...</option>
                                    <option value="dry-fmcg">Dry FMCG</option>
                                    <option value="dry-healthcare">Dry Healthcare</option>
                                    <option value="diesel">Diesel</option>
                                </select>
                            </div>
                            <div class="form-field">
                                <label>Quantity *</label>
                                <input type="number" id="quantity" min="1" required onchange="saveCurrentStepData()">
                            </div>
                            <div class="form-field">
                                <label>Price *</label>
                                <input type="number" id="price" min="0" required onchange="saveCurrentStepData()">
                            </div>
                        </div>
                        <div class="form-field">
                            <label>Details</label>
                            <textarea id="details" rows="4" onchange="saveCurrentStepData()"></textarea>
                        </div>
                    `;
                    break;
                case 4:
                    formContent.innerHTML = `
                        <h2>Driver Assignment</h2>
                        <div class="form-grid">
                            <div class="form-field">
                                <label>Select Driver *</label>
                                <select id="driver" required onchange="saveCurrentStepData()">
                                    <option value="">Select driver...</option>
                                    <option value="ahmed">Ahmed Alghamdi</option>
                                    <option value="salem">Salem Alzahrani</option>
                                </select>
                            </div>
                            <div class="form-field">
                                <label>Offer Amount *</label>
                                <input type="number" id="offer-amount" min="0" required onchange="saveCurrentStepData()">
                            </div>
                        </div>
                        <button class="btn-save" onclick="showAddDriverForm()">+ Add New Driver</button>
                    `;
                    break;
                case 5:
                    formContent.innerHTML = `
                        <h2>POD Upload</h2>
                        <div class="form-field">
                            <label>Upload POD File *</label>
                            <input type="file" id="pod-file" accept=".pdf,.jpg,.png" required onchange="saveCurrentStepData()">
                        </div>
                        <div class="form-field">
                            <label>Reference Number *</label>
                            <input type="number" id="reference-number" required onchange="saveCurrentStepData()">
                        </div>
                    `;
                    break;
            }

            // Synchronize stepper after rendering content
            updateStepper(step);

            // Adjust button label depending on step
            updateStepButtons();

            // Initialize validation state
            setTimeout(() => {
                validateCurrentStep();
                
                // Re-apply any demand data if it exists
                if (newRequestData.client) {
                    populateMockDemandData(document.getElementById('demand-selector')?.value);
                }
            }, 100);
        }

        function nextStep() {
            // Handle confirmation logic for optional steps
            if (currentStep === 3) {
                // After completing Truck step
                showStepperConfirmation('Success!✅ \n Do you want to assign a driver?', () => {
                    revealStep(4);
                    currentStep = 4;
                    renderStep(currentStep);
                    updateStepper(currentStep);
                    updateOrderSummary();
                }, () => {
                    // Exit modal if user declines
                    closeNewRequestModal();
                });
                return;
            }

            if (currentStep === 4) {
                // After completing Driver step
                showStepperConfirmation('Success!✅ \n Do you want to upload POD?', () => {
                    revealStep(5);
                    currentStep = 5;
                    renderStep(currentStep);
                    updateStepper(currentStep);
                    updateOrderSummary();
                }, () => {
                    closeNewRequestModal();
                });
                return;
            }

            if (currentStep < totalSteps) {
                currentStep++;
                renderStep(currentStep);
                updateStepper(currentStep);
                updateOrderSummary();
            }
        }

        function saveAndExit() {
            // Save current state
            saveCurrentStepData();
            
            // Here you would typically send the data to your backend
            console.log('Saving request data:', newRequestData);
            
            // Close the modal
            closeNewRequestModal();
        }

        function validateCurrentStep() {
            const nextBtn = document.getElementById('btn-next');
            const saveBtn = document.getElementById('btn-save');
            let isValid = false;

            switch(currentStep) {
                case 1:
                    isValid = newRequestData.client && newRequestData.client.trim() !== '';
                    break;
                case 2:
                    isValid = newRequestData.route.pickup.city && 
                             newRequestData.route.pickup.datetime && 
                             newRequestData.route.dropoff.city && 
                             newRequestData.route.dropoff.datetime;
                    break;
                case 3:
                    isValid = newRequestData.truck.type && 
                             newRequestData.truck.count && 
                             newRequestData.truck.size && 
                             newRequestData.truck.packaging && 
                             newRequestData.truck.weight && 
                             newRequestData.truck.loadValue && 
                             newRequestData.truck.loadType && 
                             newRequestData.truck.quantity && 
                             newRequestData.truck.price;
                    break;
                case 4:
                    isValid = newRequestData.driver.selected && 
                             newRequestData.driver.offerAmount;
                    break;
                case 5:
                    isValid = newRequestData.pod.file && 
                             newRequestData.pod.referenceNumber;
                    break;
            }

            if (nextBtn) {
                nextBtn.disabled = !isValid;
                nextBtn.style.opacity = isValid ? '1' : '0.5';
                nextBtn.style.cursor = isValid ? 'pointer' : 'not-allowed';
            }

            if (saveBtn) {
                const canSave = currentStep >= 3 && isValid;
                saveBtn.disabled = !canSave;
                saveBtn.style.opacity = canSave ? '1' : '0.5';
                saveBtn.style.cursor = canSave ? 'pointer' : 'not-allowed';
            }
        }

        function populateMockDemandData(demandId) {
            // Mock data for different demands (now includes route information)
            const mockData = {
                demand1: {
                    client: 'TechCorp Electronics',
                    route: {
                        pickup: {
                            city: 'Riyadh - الرياض',
                            datetime: '2024-06-01T08:00',
                            details: 'Warehouse A'
                        },
                        dropoff: {
                            city: 'Jeddah - جدة',
                            datetime: '2024-06-02T16:00',
                            details: 'Warehouse B'
                        }
                    },
                    truck: {
                        type: 'curtain',
                        count: 2,
                        size: '13.6m',
                        packaging: 'container',
                        weight: 25,
                        loadValue: 50000,
                        loadType: 'dry-healthcare',
                        quantity: 2,
                        price: 3000,
                        details: 'Sensitive electronic equipment'
                    },
                    driver: {
                        selected: 'ahmed',
                        offerAmount: 1500
                    }
                },
                demand2: {
                    client: 'FreshFoods Inc',
                    route: {
                        pickup: {
                            city: 'Dammam - الدمام',
                            datetime: '2024-06-05T09:00',
                            details: 'Food depot'
                        },
                        dropoff: {
                            city: 'Riyadh - الرياض',
                            datetime: '2024-06-05T18:00',
                            details: 'Central market'
                        }
                    },
                    truck: {
                        type: 'flatbed',
                        count: 1,
                        size: '13m',
                        packaging: 'pallets',
                        weight: 15,
                        loadValue: 30000,
                        loadType: 'dry-fmcg',
                        quantity: 1,
                        price: 2000,
                        details: 'Food products requiring careful handling'
                    },
                    driver: {
                        selected: 'salem',
                        offerAmount: 1200
                    }
                },
                demand3: {
                    client: 'BuildRight Materials',
                    route: {
                        pickup: {
                            city: 'Mecca - مكة المكرمة',
                            datetime: '2024-06-10T07:30',
                            details: 'Site A'
                        },
                        dropoff: {
                            city: 'Neom - نيوم',
                            datetime: '2024-06-11T19:00',
                            details: 'Site B'
                        }
                    },
                    truck: {
                        type: 'dyna',
                        count: 3,
                        size: '15m',
                        packaging: 'sacks',
                        weight: 40,
                        loadValue: 75000,
                        loadType: 'dry-fmcg',
                        quantity: 3,
                        price: 4500,
                        details: 'Construction materials and equipment'
                    },
                    driver: {
                        selected: 'ahmed',
                        offerAmount: 2000
                    }
                }
            };

            const data = mockData[demandId];
            if (!data) return;

            // Only populate newRequestData once per demand selection to retain any user edits later
            if (!newRequestData._populatedDemandId) {
                newRequestData._populatedDemandId = demandId;
                newRequestData.client = data.client;
                newRequestData.route = data.route;
                newRequestData.truck = data.truck;
                newRequestData.driver = data.driver;
            }

            // Populate and adjust form fields after the current step renders
            setTimeout(() => {
                /* ------------------- STEP 1 (Client) ------------------- */
                const clientSearch = document.getElementById('client-search');
                if (clientSearch) {
                    clientSearch.value = newRequestData.client;
                    clientSearch.disabled = true;
                }

                /* ------------------- STEP 2 (Route) -------------------- */
                const routeMap = {
                    'pickup-city': newRequestData.route?.pickup.city,
                    'pickup-datetime': newRequestData.route?.pickup.datetime,
                    'pickup-details': newRequestData.route?.pickup.details,
                    'dropoff-city': newRequestData.route?.dropoff.city,
                    'dropoff-datetime': newRequestData.route?.dropoff.datetime,
                    'dropoff-details': newRequestData.route?.dropoff.details
                };

                Object.keys(routeMap).forEach(fieldId => {
                    const field = document.getElementById(fieldId);
                    if (!field) return;

                    // Keep any user edits for editable fields
                    if (fieldId === 'pickup-datetime' || fieldId === 'dropoff-datetime') {
                        // Only set value if user hasn't modified it yet
                        if (!field.value) field.value = routeMap[fieldId] || '';
                        field.disabled = false; // Allow editing
                    } else {
                        field.value = routeMap[fieldId] || '';
                        field.disabled = true; // Locked
                    }
                });

                /* ------------------- STEP 3 (Truck) -------------------- */
                const truckFields = [
                    'truck-type', 'truck-count', 'truck-size', 'packaging',
                    'weight', 'load-value', 'load-type', 'quantity', 'price', 'details'
                ];

                const truckKeyMap = {
                    'truck-type': 'type',
                    'truck-count': 'count',
                    'truck-size': 'size',
                    'packaging': 'packaging',
                    'weight': 'weight',
                    'load-value': 'loadValue',
                    'load-type': 'loadType',
                    'quantity': 'quantity',
                    'price': 'price',
                    'details': 'details'
                };

                truckFields.forEach(fieldId => {
                    const field = document.getElementById(fieldId);
                    if (!field) return;

                    // Preserve user entered truck-count if already provided
                    if (fieldId === 'truck-count') {
                        if (!field.value) field.value = newRequestData.truck.count;
                        field.disabled = false; // Editable
                    } else {
                        const valueKey = truckKeyMap[fieldId];
                        field.value = newRequestData.truck[valueKey] ?? '';
                        field.disabled = true; // Locked
                    }
                });

                /* ------------------- STEP 4 (Driver) ------------------- */
                const driverFields = ['driver', 'offer-amount'];
                driverFields.forEach(fieldId => {
                    const field = document.getElementById(fieldId);
                    if (!field) return;

                    const value = newRequestData.driver[fieldId === 'driver' ? 'selected' : 'offerAmount'];
                    field.value = value;
                    field.disabled = true;
                });

                /* ------------------------------------------------------- */
                updateOrderSummary();
            }, 100);
        }

        function updateOrderSummary() {
            const sections = ['client', 'route', 'truck', 'driver', 'pod'];
            
            // Update section visibility and status based on current step
            sections.forEach((section, index) => {
                const stepNum = index + 1;
                const summarySection = document.getElementById(`${section}-summary`).closest('.summary-section');
                const statusSpan = summarySection.querySelector('.step-status');

                // Remove all state classes
                summarySection.classList.remove('active', 'completed');

                if (stepNum < currentStep) {
                    // Previous steps are completed
                    summarySection.classList.add('completed');
                    statusSpan.textContent = '✓ Completed';
                } else if (stepNum === currentStep) {
                    // Current step is active
                    summarySection.classList.add('active');
                    statusSpan.textContent = 'In Progress';
                } else {
                    // Future steps are inactive
                    statusSpan.textContent = 'Pending';
                }
            });

            // Update content only for completed steps and current step
            if (currentStep >= 1) {
                const clientSummary = document.getElementById('client-summary');
                if (newRequestData.client) {
                    clientSummary.innerHTML = `
                        <p><span class="label">Client:</span> <span class="value">${newRequestData.client}</span></p>
                    `;
                }
            }

            if (currentStep >= 2) {
                const routeSummary = document.getElementById('route-summary');
                if (newRequestData.route && newRequestData.route.pickup.city) {
                    routeSummary.innerHTML = `
                        <p><span class="label">From:</span> <span class="value">${newRequestData.route.pickup.city}</span></p>
                        <p><span class="label">Pickup:</span> <span class="value">${formatDateTime(newRequestData.route.pickup.datetime)}</span></p>
                        <p><span class="label">To:</span> <span class="value">${newRequestData.route.dropoff.city || 'Not set'}</span></p>
                        <p><span class="label">Delivery:</span> <span class="value">${formatDateTime(newRequestData.route.dropoff.datetime)}</span></p>
                    `;
                }
            }

            if (currentStep >= 3) {
                const truckSummary = document.getElementById('truck-summary');
                if (newRequestData.truck && newRequestData.truck.type) {
                    truckSummary.innerHTML = `
                        <p><span class="label">Type:</span> <span class="value">${newRequestData.truck.type}</span></p>
                        <p><span class="label">Size:</span> <span class="value">${newRequestData.truck.size}</span></p>
                        <p><span class="label">Quantity:</span> <span class="value">${newRequestData.truck.count} truck(s)</span></p>
                        <p><span class="label">Load Type:</span> <span class="value">${newRequestData.truck.loadType}</span></p>
                        <p><span class="label">Weight:</span> <span class="value">${newRequestData.truck.weight} tons</span></p>
                    `;
                }
            }

            if (currentStep >= 4) {
                const driverSummary = document.getElementById('driver-summary');
                if (newRequestData.driver && newRequestData.driver.selected) {
                    driverSummary.innerHTML = `
                        <p><span class="label">Driver:</span> <span class="value">${newRequestData.driver.selected}</span></p>
                        <p><span class="label">Offer:</span> <span class="value">${newRequestData.driver.offerAmount} €</span></p>
                    `;
                }
            }

            if (currentStep >= 5) {
                const podSummary = document.getElementById('pod-summary');
                if (newRequestData.pod && newRequestData.pod.file) {
                    podSummary.innerHTML = `
                        <p><span class="label">File:</span> <span class="value">${newRequestData.pod.file.name}</span></p>
                        <p><span class="label">Reference:</span> <span class="value">${newRequestData.pod.referenceNumber}</span></p>
                    `;
                }
            }

            // Update cost summary (only visible from step 3 onwards)
            const costSection = document.querySelector('.summary-section:last-child');
            if (currentStep >= 3) {
                costSection.classList.add('active');
                const summaryItems = document.getElementById('summary-items');
                const subtotal = document.getElementById('subtotal');
                const total = document.getElementById('total');
                
                if (newRequestData.truck && newRequestData.truck.price) {
                    const price = parseFloat(newRequestData.truck.price);
                    const quantity = parseInt(newRequestData.truck.count) || 1;
                    const subtotalValue = price * quantity;
                    
                    summaryItems.innerHTML = `
                        <tr>
                            <td>Truck Service (${newRequestData.truck.type || 'Standard'})</td>
                            <td>${(price * quantity).toFixed(2)} €</td>
                        </tr>
                    `;
                    
                    subtotal.textContent = subtotalValue.toFixed(2) + ' €';
                    const shippingCost = 8.99;
                    total.textContent = (subtotalValue + shippingCost).toFixed(2) + ' €';
                }
            } else {
                costSection.classList.remove('active');
            }
        }

        // Helper function to format datetime
        function formatDateTime(datetime) {
            if (!datetime) return 'Not set';
            const date = new Date(datetime);
            return date.toLocaleString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
            });
        }

        // Function to show Add Client form
        function showAddClientForm() {
            const formContent = document.getElementById('form-content');
            formContent.innerHTML = `
                <h2>Add New Client</h2>
                <div class="form-grid">
                    <div class="form-field">
                        <label>Client Name</label>
                        <input type="text" id="new-client-name" required>
                    </div>
                    <div class="form-field">
                        <label>Contact Person</label>
                        <input type="text" id="new-client-contact">
                    </div>
                    <div class="form-field">
                        <label>Email</label>
                        <input type="email" id="new-client-email" required>
                    </div>
                    <div class="form-field">
                        <label>Phone</label>
                        <input type="tel" id="new-client-phone" required>
                    </div>
                    <div class="form-field">
                        <label>Address</label>
                        <input type="text" id="new-client-address">
                    </div>
                    <div class="form-field">
                        <label>VAT Number</label>
                        <input type="text" id="new-client-vat">
                    </div>
                </div>
                <div style="margin-top: 20px;">
                    <button class="btn-back" onclick="renderStep(1)">Cancel</button>
                    <button class="btn-save" onclick="saveNewClient()">Save Client</button>
                </div>
            `;
        }

        // Function to show Add Driver form
        function showAddDriverForm() {
            const formContent = document.getElementById('form-content');
            formContent.innerHTML = `
                <h2>Add New Driver</h2>
                <div class="form-grid">
                    <div class="form-field">
                        <label>Driver Name</label>
                        <input type="text" id="new-driver-name" required>
                    </div>
                    <div class="form-field">
                        <label>License Number</label>
                        <input type="text" id="new-driver-license" required>
                    </div>
                    <div class="form-field">
                        <label>Phone</label>
                        <input type="tel" id="new-driver-phone" required>
                    </div>
                    <div class="form-field">
                        <label>Email</label>
                        <input type="email" id="new-driver-email">
                    </div>
                    <div class="form-field">
                        <label>Nationality</label>
                        <input type="text" id="new-driver-nationality">
                    </div>
                    <div class="form-field">
                        <label>ID Number</label>
                        <input type="text" id="new-driver-id" required>
                    </div>
                </div>
                <div style="margin-top: 20px;">
                    <button class="btn-back" onclick="renderStep(4)">Cancel</button>
                    <button class="btn-save" onclick="saveNewDriver()">Save Driver</button>
                </div>
            `;
        }

        function saveNewClient() {
            // Here you would typically make an API call to save the new client
            console.log('Saving new client...');
            // For now, just go back to the client selection step
            renderStep(1);
        }

        function saveNewDriver() {
            // Here you would typically make an API call to save the new driver
            console.log('Saving new driver...');
            // For now, just go back to the driver selection step
            renderStep(4);
        }

        // Override the renderStep function to initialize maps when needed
        const originalRenderStep = renderStep;
        renderStep = function(step) {
            originalRenderStep(step);
            if (step === 2) {
                // Initialize maps after the DOM elements are created
                setTimeout(initializeMaps, 100);
            }
        };

        // Add client search functionality
        function initializeClientSearch() {
            const clientInput = document.getElementById('new-demand-client');
            if (!clientInput) return;

            // Mock client data
            const clients = [
                { id: '7591', name: 'Test Altesty' },
                { id: '7592', name: 'Client Two' },
                { id: '7593', name: 'Client Three' }
            ];

            // Create and style the dropdown
            const dropdown = document.createElement('div');
            dropdown.style.cssText = `
                position: absolute;
                top: 100%;
                left: 0;
                right: 0;
                background: white;
                border: 1px solid #e2e8f0;
                border-radius: 6px;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                max-height: 200px;
                overflow-y: auto;
                z-index: 1000;
                display: none;
            `;
            clientInput.parentElement.style.position = 'relative';
            clientInput.parentElement.appendChild(dropdown);

            // Add input event listener
            clientInput.addEventListener('input', function() {
                const searchTerm = this.value.toLowerCase();
                const matches = clients.filter(client => 
                    client.id.includes(searchTerm) || 
                    client.name.toLowerCase().includes(searchTerm)
                );

                if (matches.length > 0 && searchTerm) {
                    dropdown.style.display = 'block';
                    dropdown.innerHTML = matches.map(client => `
                        <div class="client-option" style="padding: 8px 12px; cursor: pointer; hover:background-color: #f7fafc;"
                             onclick="selectClient('${client.id} - ${client.name}')">
                            ${client.id} - ${client.name}
                        </div>
                    `).join('');
                } else {
                    dropdown.style.display = 'none';
                }
            });

            // Close dropdown when clicking outside
            document.addEventListener('click', function(e) {
                if (!clientInput.parentElement.contains(e.target)) {
                    dropdown.style.display = 'none';
                }
            });
        }

        function selectClient(clientInfo) {
            document.getElementById('new-demand-client').value = clientInfo;
            document.getElementById('client-dropdown').style.display = 'none';
        }

        // Initialize client search when showing the create demand form
        document.addEventListener('DOMContentLoaded', function() {
            // ... existing DOMContentLoaded code ...

            // Initialize client search functionality
            initializeClientSearch();
        });

        function showCreateDemandForm() {
            // Hide demand selection and show create form
            document.getElementById('demand-selection-section').style.display = 'none';
            document.getElementById('create-demand-form').style.display = 'block';
            
            // Update buttons
            const buttonGroup = document.querySelector('#demand-confirmation-modal .button-group');
            buttonGroup.innerHTML = `
                <button onclick="handleDemandCancel()" class="btn-back" style="padding: 8px 16px;">Cancel</button>
                <button onclick="handleCreateDemand()" class="btn-next" style="padding: 8px 16px;">Create Demand</button>
            `;

            // Initialize the dropdowns with mock data
            initializeClientDropdown();
            initializeProjectDropdown();
        }

        function initializeClientDropdown() {
            const clientInput = document.getElementById('new-demand-client');
            const clientDropdown = document.createElement('div');
            clientDropdown.id = 'client-dropdown';
            clientDropdown.style.cssText = `
                position: absolute;
                top: 100%;
                left: 0;
                right: 0;
                background: white;
                border: 1px solid #e2e8f0;
                border-radius: 6px;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                max-height: 200px;
                overflow-y: auto;
                z-index: 1000;
                display: none;
            `;
            
            clientInput.parentElement.style.position = 'relative';
            clientInput.parentElement.appendChild(clientDropdown);

            clientInput.addEventListener('input', function() {
                const searchTerm = this.value.toLowerCase();
                const matches = mockClients.filter(client => 
                    client.id.toLowerCase().includes(searchTerm) || 
                    client.name.toLowerCase().includes(searchTerm)
                );

                if (matches.length > 0 && searchTerm) {
                    clientDropdown.style.display = 'block';
                    clientDropdown.innerHTML = matches.map(client => `
                        <div class="dropdown-item" style="padding: 8px 12px; cursor: pointer; hover:background-color: #f7fafc;"
                             onclick="selectClient('${client.id} - ${client.name}')">
                            ${client.id} - ${client.name}
                        </div>
                    `).join('');
                } else {
                    clientDropdown.style.display = 'none';
                }
            });

            // Close dropdown when clicking outside
            document.addEventListener('click', function(e) {
                if (!clientInput.parentElement.contains(e.target)) {
                    clientDropdown.style.display = 'none';
                }
            });
        }

        function initializeProjectDropdown() {
            const projectSelect = document.getElementById('new-demand-project');
            projectSelect.innerHTML = `
                <option value="">Select project...</option>
                ${mockProjects.map(project => 
                    `<option value="${project.id}">${project.id} - ${project.name}</option>`
                ).join('')}
            `;
        }

        function selectClient(clientInfo) {
            document.getElementById('new-demand-client').value = clientInfo;
            document.getElementById('client-dropdown').style.display = 'none';
        }

        function handleCreateDemand() {
            // Validate form
            const client = document.getElementById('new-demand-client').value;
            const project = document.getElementById('new-demand-project').value;
            const startDate = document.getElementById('new-demand-start-date').value;
            const endDate = document.getElementById('new-demand-end-date').value;

            if (!client || !project || !startDate || !endDate) {
                alert('Please fill in all fields');
                return;
            }

            // Create the demand (in a real app, this would be an API call)
            console.log('Creating new demand:', { client, project, startDate, endDate });

            // Close the demand modal
            document.getElementById('demand-confirmation-modal').classList.remove('active');
            
            // Reset the form for next time
            document.getElementById('new-demand-client').value = '';
            document.getElementById('new-demand-project').value = '';
            document.getElementById('new-demand-start-date').value = '';
            document.getElementById('new-demand-end-date').value = '';
            
            // Reset the modal state
            document.getElementById('demand-selection-section').style.display = 'none';
            document.getElementById('create-demand-form').style.display = 'none';
            const buttonGroup = document.querySelector('#demand-confirmation-modal .button-group');
            buttonGroup.innerHTML = `
                <button onclick="handleDemandNo()" class="btn-back" style="padding: 8px 16px;">No</button>
                <button onclick="handleDemandYes()" class="btn-next" style="padding: 8px 16px;">Yes</button>
            `;

            // Show the regular new request modal with empty fields
            document.getElementById('new-request-modal').classList.add('active');
            renderStep(1);
            updateStepper(1);
        }

        function showClientDropdown() {
            const dropdown = document.getElementById('client-dropdown');
            dropdown.style.display = 'block';
            filterClientDropdown();
        }

        function filterClientDropdown() {
            const input = document.getElementById('client-search');
            const dropdown = document.getElementById('client-dropdown');
            const searchTerm = input.value.toLowerCase();
            const matches = mockClients.filter(client =>
                client.id.toLowerCase().includes(searchTerm) ||
                client.name.toLowerCase().includes(searchTerm)
            );
            dropdown.innerHTML = matches.length
                ? matches.map(client => `<div class="dropdown-item" style="padding:8px;cursor:pointer;" onclick="selectClientFromDropdown('${client.name}')">${client.id} - ${client.name}</div>`).join('')
                : '<div style="padding:8px;color:#888;">No clients found</div>';
        }

        function selectClientFromDropdown(name) {
            document.getElementById('client-search').value = name;
            document.getElementById('client-dropdown').style.display = 'none';
            saveCurrentStepData();
        }

        // إغلاق القائمة عند الضغط خارجها
        document.addEventListener('click', function(e) {
            const dropdown = document.getElementById('client-dropdown');
            const input = document.getElementById('client-search');
            if (dropdown && input && !dropdown.contains(e.target) && e.target !== input) {
                dropdown.style.display = 'none';
            }
        });

        let stepperConfirmYesCallback = null;
        let stepperConfirmNoCallback = null;

        function showStepperConfirmation(message, yesCallback, noCallback) {
            const overlay = document.getElementById('stepper-confirmation-modal');
            const messageEl = document.getElementById('stepper-confirmation-text');
            if (!overlay || !messageEl) return;
            messageEl.textContent = message;
            messageEl.style.whiteSpace = 'pre-line'; // preserve \n as line breaks
            stepperConfirmYesCallback = yesCallback;
            stepperConfirmNoCallback = noCallback;
            overlay.style.display = 'flex';
        }

        function handleStepperConfirmationYes() {
            if (typeof stepperConfirmYesCallback === 'function') {
                stepperConfirmYesCallback();
            }
            closeStepperConfirmation();
        }

        function handleStepperConfirmationNo() {
            if (typeof stepperConfirmNoCallback === 'function') {
                stepperConfirmNoCallback();
            }
            closeStepperConfirmation();
        }

        function closeStepperConfirmation() {
            const overlay = document.getElementById('stepper-confirmation-modal');
            if (overlay) {
                overlay.style.display = 'none';
            }
            stepperConfirmYesCallback = null;
            stepperConfirmNoCallback = null;
        }
    