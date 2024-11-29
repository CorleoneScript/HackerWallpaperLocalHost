document.addEventListener('DOMContentLoaded', function() {
    // Initialize DOM elements
    const terminal = document.getElementById('terminal');
    const activeThreatsEl = document.getElementById('active-threats');
    const totalAttemptsEl = document.getElementById('total-attempts');
    const topLocationsEl = document.getElementById('top-locations');

    // Initialize counters
    let totalAttempts = 0;
    let activeThreats = 0;
    let locationStats = {};

    const messages = ['Welcome to Cyber Intelligence', 'Initializing System...', 'Scanning for threats...'];

    let index = 0;
    let charIndex = 0;

    function typeEffect() {
        if (charIndex < messages[index].length) {
            terminal.innerHTML += messages[index].charAt(charIndex);
            charIndex++;
            setTimeout(typeEffect, 100);
        } else {
            terminal.innerHTML += '<br>';
            charIndex = 0;
            index = (index + 1) % messages.length;
            setTimeout(typeEffect, 1000);
        }
    }

    const fakeData = [
        { label: 'Password', value: 'hunter2' },
        { label: 'Name', value: 'John Doe' },
        { label: 'IP Address', value: '192.168.1.101' },
        { label: 'Physical Address', value: '123 Elm Street, Springfield' },
        { label: 'Bank Balance', value: '$12,345.67' },
        { label: 'Phone Number', value: '+1 555-1234' },
        { label: 'Country', value: 'United States' },
        { label: 'Birth Date', value: '01/01/1980' }
    ];

    function getRandomItem(array) {
        return array[Math.floor(Math.random() * array.length)];
    }

    function generateLogEntry() {
        const timestamp = new Date().toLocaleTimeString();
        const hackTypes = ['DATA BREACH', 'INTRUSION DETECTED', 'SECURITY BYPASS', 'ENCRYPTION CRACK'];
        
        const logEntry = document.createElement('div');
        logEntry.classList.add('log-entry');
        
        // Simulate "typing" effect with random data selection
        const hackType = getRandomItem(hackTypes);
        logEntry.innerHTML = `
            <span class="timestamp">[${timestamp}]</span>
            <span class="hack-type">${hackType}</span><br>
            <div class="details">
                >> Target identified: <span class="target">${getRandomItem(fakeData.names)}</span><br>
                >> Access gained via: <span class="target">${getRandomItem(fakeData.ipAddresses)}</span><br>
                >> Location: <span class="target">${getRandomItem(fakeData.addresses)}</span><br>
                >> Financial data: <span class="target">${getRandomItem(fakeData.balances)}</span><br>
                >> Contact: <span class="target">${getRandomItem(fakeData.phoneNumbers)}</span>
            </div>
        `;

        // Add glitch effect class randomly
        if (Math.random() < 0.3) {
            logEntry.classList.add('glitch');
        }

        terminal.appendChild(logEntry);
        terminal.scrollTop = terminal.scrollHeight;
    }

    // Randomize the interval between 1-3 seconds
    function startRandomizedLogs() {
        const randomInterval = 1000 + Math.random() * 2000;
        generateLogEntry();
        setTimeout(startRandomizedLogs, randomInterval);
    }

    startRandomizedLogs();

    function generateLog() {
        const country = getRandom(countries);
        const city = getRandom(country.cities);
        const name = `${getRandom(names)} ${getRandom(lastNames)}`;
        const ip = generateIP();
        const password = getRandom(passwords);
        const hackType = getRandom(hackTypes);
        const timestamp = new Date().toLocaleTimeString();

        // Update location statistics
        locationStats[country.name] = (locationStats[country.name] || 0) + 1;
        updateTopLocations();

        const logEntry = document.createElement('div');
        logEntry.className = 'log-entry';
        logEntry.innerHTML = `
            <span class="timestamp">[${timestamp}]</span>
            <span class="hack-type">${hackType}</span>
            <span class="target">Target: ${ip} (${name})</span>
            <span class="location">Location: ${country.emoji} ${city}, ${country.name}</span>
            <span class="password">Password: ${password}</span>
        `;

        return logEntry;
    }

    function addLogEntry() {
        const logEntry = generateLog();
        terminal.appendChild(logEntry);
        
        totalAttempts++;
        activeThreats = Math.min(activeThreats + 1, 10);
        
        setTimeout(() => {
            activeThreats = Math.max(0, activeThreats - 1);
            activeThreatsEl.textContent = activeThreats;
        }, 5000);

        totalAttemptsEl.textContent = totalAttempts;
        activeThreatsEl.textContent = activeThreats;

        // Keep only last 100 entries
        while (terminal.children.length > 100) {
            terminal.removeChild(terminal.firstChild);
        }

        terminal.scrollTop = terminal.scrollHeight;
    }

    // Start the simulation
    setInterval(addLogEntry, 1000);

    // Add click handlers for tool buttons
    document.querySelectorAll('.tool-button').forEach(button => {
        button.addEventListener('click', () => {
            button.style.backgroundColor = 'rgba(0, 255, 0, 0.2)';
            setTimeout(() => {
                button.style.backgroundColor = '';
            }, 200);
        });
    });
}); 