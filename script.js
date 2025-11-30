// Counter functionality
let count = 0;
const countElement = document.getElementById('count');
const incrementBtn = document.getElementById('increment');
const decrementBtn = document.getElementById('decrement');
const resetBtn = document.getElementById('reset');

incrementBtn.addEventListener('click', () => {
    count++;
    updateCount();
});

decrementBtn.addEventListener('click', () => {
    count--;
    updateCount();
});

resetBtn.addEventListener('click', () => {
    count = 0;
    updateCount();
});

function updateCount() {
    countElement.textContent = count;
    countElement.style.color = count > 0 ? '#4caf50' : count < 0 ? '#f44336' : '#764ba2';
}

// Color changer functionality
const colorBtn = document.getElementById('colorBtn');
const colors = [
    'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    'linear-gradient(135deg, #30cfd0 0%, #330867 100%)'
];
let colorIndex = 0;

colorBtn.addEventListener('click', () => {
    colorIndex = (colorIndex + 1) % colors.length;
    document.body.style.background = colors[colorIndex];
});

// Message display functionality
const messageInput = document.getElementById('messageInput');
const displayBtn = document.getElementById('displayBtn');
const displayMessage = document.getElementById('displayMessage');

displayBtn.addEventListener('click', () => {
    const message = messageInput.value.trim();
    if (message) {
        displayMessage.textContent = message;
        displayMessage.style.background = '#e3f2fd';
        messageInput.value = '';
    } else {
        displayMessage.textContent = 'Please enter a message first!';
        displayMessage.style.background = '#ffebee';
    }
});

messageInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        displayBtn.click();
    }
});

