let questions = [
    {
        numb: 1,
        question: "In the client-server model, what is the primary protocol used for communication between a browser and web server?",
        answer: "TCP",
        options: [
            "FTP",
            "TCP",
            "HTTP",
            "SSL"
        ]
    },
    {
        numb: 2,
        question: "Which 2 encryption protocols might be used to provide secure transmissions for browser and web server communications ?",
        answer: "SSL and TLS",
        options: [
            "HTTP and HTTPS",
            "SSL and TLS",
            "SSL and HTTP",
            "TCP and UDP"
        ]
    },
    {
        numb: 3,
        question: "Which email protocol allows an email client to download email messages to the local computer ?",
        answer: "POP3",
        options: [
            "IMAP4",
            "SMTP",
            "TCP",
            "POP3"
        ]
    },
    {
        numb: 4,
        question: "Which email protocol allows an email client to read mail stored on the mail server?",
        answer: "IMAP4",
        options: [
            "IMAP4",
            "SMTP",
            "TCP",
            "POP3"
        ]
    },
    {
        numb: 5,
        question: "Which application embedded in Windows OS allows remote control of a computer and uses the RDP secure protocol for transmissions?",
        answer: "Remote Desktop",
        options: [
            "Telnet",
            "Remote Desktop",
            "SFTP",
            "SSH"
        ]
    },
    {
        numb: 6,
        question: "A network consists of 5 computers, all running Windows 10 professional. All the computers are connected to a switch, which is connected to a router,which is connected to the internet. Which networking model does the network use ?",
        answer: "Star-bus",
        options: [
            "Star-bus",
            "Ring",
            "Hybrid",
            "Peer-to-peer"
        ]
    },
    {
        numb: 7,
        question: "In Question 6, suppose one computer is upgraded from Windows 10 professional to Windows Server 2016. Which networking model can the network now support that it could not support without the upgrade ?",
        answer: "Client-server",
        options: [
            "Hybrid",
            "Client-server",
            "Star-bus",
            "Ring"
        ]
    },
    {
        numb: 8,
        question: "A network consists of 7 computers and a network printer, all connected directly to 1 switch. Which network topology does this network use ?",
        answer: "Star",
        options: [
            "Hybrid",
            "Mesh",
            "Star-bus",
            "Star"
        ]
    },
    {
        numb: 9,
        question: "In question 8, suppose a new switch is connected to the first switch by way of network cable, and three computers are connected to the new switch. Which network topology is now used ?",
        answer: "Star-bus",
        options: [
            "Hybrid",
            "Mesh",
            "Star-bus",
            "Star"
        ]
    },
    {
        numb: 10,
        question: "Which type of address is used at the transport layer to identify the receiving application ?",
        answer: "Port number",
        options: [
            "IP Address",
            "Port number",
            "MAC Address",
            "Protocol"
        ]
    },
    {
        numb: 11,
        question: "What is the name of the domain controller database that Windows Server 2016 uses to store data about user access and resources on the network ?",
        answer: "Active Directory",
        options: [
            "Server",
            "Active Directory",
            "MySQL",
            "Kubernetes"
        ]
    },
    {
        numb: 12,
        question: "What is the fundamental distinction between a layer 2 switch and a router ?",
        answer: "A Switch belongs only to its Local Network while a Router belongs to 2 or more networks.",
        options: [
            "A Switch belongs only to the CAN while a Router belongs to a MAN",
            "A Switch belongs only to the MAN while a Router belongs to a WAN.",
            "A Switch belongs only to the Wide Area Network while a Router belongs to only one network.",
            "A Switch belongs only to its Local Network while a Router belongs to 2 or more networks."
        ]
    },
    {
        numb: 13,
        question: "What is the fundamental distinction between a WAN and a MAN ?",
        answer: "WAN is larger than a MAN",
        options: [
            "WAN is smaller than a MAN",
            "WAN is larger than a MAN",
            "WAN is easier to implement than a MAN",
            "MAN is more used than a WAN"
        ]
    },
    {
        numb: 14,
        question: "What is the message call that is delivered by TCP? ",
        answer: "Segments",
        options: [
            "Fragmentation",
            "Header",
            "Segments",
            "Jumbo frames"
        ]
    },
    {
        numb: 15,
        question: "At the network layer, what type of address is used to identify the receiving host?",
        answer: "IP Address",
        options: [
            "IP Address",
            "Host Address",
            "MAC Address",
            "Protocol"
        ]
    },
    {
        numb: 16,
        question: "At the Data Link layer, which type of network address is used to identify the receiving node ?",
        answer: "MAC Address",
        options: [
            "IP Address",
            "Port",
            "MAC Address",
            "Protocol"
        ]
    },
    {
        numb: 17,
        question: "A user complains that Skype drops her videoconference calls and she must reconnect. At which layer of the OSI model should you begin troubleshooting?",
        answer: "Session Layer because this session is responsible for managing the establishment, maintenance and termination of communication sessions.",
        options: [
            "Transport Layer because this session is responsible for managing the establishment, maintenance and termination of communication sessions.",
            "Network Layer because this session is responsible for managing the establishment, maintenance and termination of communication sessions.",
            "Application Layer because this session is responsible for managing the establishment, maintenance and termination of communication sessions.",
            "Session Layer because this session is responsible for managing the establishment, maintenance and termination of communication sessions."
        ]
    },
    {
        numb: 18,
        question: "What is the fundamental distinction between a node and a host ?",
        answer: "Host is any computer on the network that hosts a resource such as an application or data. Node is any computer on the network that can be addressed(assign an IP address) on the local network.",
        options: [
            "Host is any computer on the network that has an IP address. Node is any computer on the network with many IP addresses.",
            "Host is any computer on the network that hosts a resource such as an application or data. Node is any computer on the network that can be addressed(assign an IP address) on the local network.",
            "Host is any computer on the network that host no resource. Node is any printer on the network.",
            "Host is any computer on the network that host many resources. Node is any router on the network"
        ]
    },
    {
        numb: 19,
        question: "A computer is unable to access the network. When you check the LED lights near the computer's network port, you discover the lights are not lit. Which layer of the OSI model are you using to troubleshoot this problem ?",
        answer: "Physical layer because this layer deals with the physical connection between devices including the electrical signal, cable types, and connectors.",
        options: [
            "Session layer because this layer deals with the physical connection between devices including the electrical signal, cable types, and connectors.",
            "Network layer because this layer deals with the physical connection between devices including the electrical signal, cable types, and connectors.",
            "Physical layer because this layer deals with the physical connection between devices including the electrical signal, cable types, and connectors.",
            "Transport layer because this layer deals with the physical connection between devices including the electrical signal, cable types, and connectors."
        ]
    },
    {
        numb: 20,
        question: "A user complains that he cannot access a particular website, although he is able to access other websites. At which layer of the OSI model should you begin troubleshooting this problem ?",
        answer: "Application Layer as this layer is responsible for application specific protocols and interactions with the website itself.",
        options: [
            "Transport Layer as this layer is responsible for application specific protocols and interactions with the website itself.",
            "Physical Layer as this layer is responsible for application specific protocols and interactions with the website itself.",
            "Session Layer as this layer is responsible for application specific protocols and interactions with the website itself.",
            "Application Layer as this layer is responsible for application specific protocols and interactions with the website itself."
        ]
    },

    {
        numb: 21,
        question: "What is the message call delivered by UDP ?",
        answer: "Datagram",
        options: [
            "Monogram",
            "Datagram",
            "Vetogram",
            "Anogram"
        ]
    },

    {
        numb: 22,
        question: "At which layer do TCP and UDP operate ?",
        answer: "Layer 4",
        options: [
            "Layer 5",
            "Layer 3",
            "Layer 4",
            "Layer 2"
        ]
    },



]