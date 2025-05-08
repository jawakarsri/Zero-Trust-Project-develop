# Zero-Trust-Project-develop
This project is a simple web application that demonstrates the Zero Trust security model. Built with Flask and using a MongoDB database, it allows users to log in and view their profile with principles aligned to Zero Trust — meaning no implicit trust is given to users or devices, even if they’re inside the network perimeter.

# Description:
This application showcases the Zero Trust security approach:
- Flask-based web app.
- Users can log in and view their personal profiles.
- MongoDB stores user data.
- Enforces a minimal version of the Zero Trust security model.

⚙️ Installation Steps:
1. Clone the repository:
   git clone <repository-url>

2. Install dependencies:
   pip install -r requirements.txt

3. Run the application:
   python app.py

4. Open the browser at:
   http://localhost:5000

5. Login using default credentials:
   Username: admin
   Password: password123

🔧 Requirements:
- Python
- MongoDB

📦 Features:
- User authentication (login/logout)
- Profile route protection
- .env-based configuration
- Docker support
