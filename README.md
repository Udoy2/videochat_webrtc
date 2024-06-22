# Video Chat WebRTC Project

This project is a real-time video chat application built using WebRTC for media communications, Node.js for the backend, and React for the frontend. Socket.io is used to manage the signaling data (SDA).

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

- Real-time video and audio communication
- User-friendly interface
- Scalable and efficient signaling mechanism using Socket.io
- Room-based video chat sessions
- Cross-browser compatibility

## Technologies Used

- **Frontend**: React
- **Backend**: Node.js
- **Real-time Communication**: WebRTC
- **Signaling**: Socket.io

## Installation

### Prerequisites

Make sure you have the following installed on your machine:

- Node.js (v12 or higher)
- npm or yarn

### Clone the Repository

```bash
git clone https://github.com/Udoy2/videochat_webrtc.git
cd videochat_webrtc
```

### Install Dependencies

#### Backend

```bash
cd server
npm install
```

#### Frontend

```bash
cd ../client
npm install
```

## Usage

### Running the Backend Server

Navigate to the `server` directory and start the server:

```bash
cd server
npm start
```

The backend server will run on `http://localhost:8000`.

### Running the Frontend Application

Navigate to the `client` directory and start the development server:

```bash
cd ../client
npm start
```

The frontend application will run on `http://localhost:3000`.

### Access the Application

Open your web browser and navigate to `http://localhost:3000` to use the video chat application.



## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

