import time
import random
from faker import Faker

fake = Faker()

# Generate random IP addresses, locations, and hack activities
def generate_hack_log():
    ip_address = f"{random.randint(1, 255)}.{random.randint(0, 255)}.{random.randint(0, 255)}.{random.randint(1, 255)}"
    location = fake.city() + ", " + fake.country()
    hack_type = random.choice([
        "SQL Injection", "XSS Attack", "Brute Force", "Phishing Attempt",
        "Data Breach", "Man-in-the-Middle", "Zero-Day Exploit"
    ])
    fake_password = fake.password()
    timestamp = time.strftime("%H:%M:%S")
    
    return f"[{timestamp}] {hack_type} | Target IP: {ip_address} | Location: {location} | Password: {fake_password}"

# Simulate the terminal
def simulate_terminal():
    while True:
        print(generate_hack_log())
        time.sleep(random.uniform(0.5, 1.5))

if __name__ == "__main__":
    simulate_terminal()
