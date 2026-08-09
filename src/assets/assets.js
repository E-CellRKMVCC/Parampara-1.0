import logo1 from './images/logo1.png'
import logo2 from './images/logo2.png'
import logo3 from './images/logo3.png'
import logo4 from './images/logo4.png'
import logo5 from './images/logo5.png'
import logo1BG from './images/logo1BG.png'
import logo2BG from './images/logo2BG.png'
import logo3BG from './images/logo3BG.png'
import x from './images/x.png'

const assets = {
    logo1,
    logo2,
    logo3,
    logo4,
    logo5,
    logo1BG,
    logo2BG,
    logo3BG,
    x
}

export default assets

export const problem_statement = [
    {
        id: 1,
        theme: "Heritage & Innovation",
        img: 'Problem-Statements/Himalayan.jpeg',
        statements: [
            {
                id: 101,
                heading: "Digitalization of Ancient Texts",
                description: "Develop a system using OCR and NLP to digitize and translate ancient Indian manuscripts into modern languages, preserving cultural heritage."
            },
            {
                id: 102,
                heading: "Virtual Heritage Tours",
                description: "Create an immersive VR/AR experience that allows users to explore historical sites and monuments virtually with guided historical context."
            }
        ]
    },
    {
        id: 2,
        theme: "Sustainable Ecosystems",
        img: 'Problem-Statements/Himalayan.jpeg',
        statements: [
            {
                id: 201,
                heading: "Smart Irrigation System",
                description: "Design an IoT-based system that uses traditional farming knowledge combined with modern sensors to optimize water usage in agriculture."
            },
            {
                id: 202,
                heading: "Eco-friendly Packaging Alternatives",
                description: "Propose and develop sustainable packaging solutions inspired by traditional Indian materials like banana leaves, jute, or terracotta."
            },
            {
                id: 203,
                heading: "Renewable Energy Optimization",
                description: "Create a software solution to optimize the distribution and storage of renewable energy sources in rural communities."
            }
        ]
    },
    {
        id: 3,
        theme: "Healthcare & Ayurveda",
        img: 'Problem-Statements/Himalayan.jpeg',
        statements: [
            {
                id: 301,
                heading: "Ayurvedic Plant Identification",
                description: "Build an AI-powered application that can identify medicinal plants and provide their traditional uses and scientific validation."
            },
            {
                id: 302,
                heading: "Rural Health Diagnostic Kit",
                description: "Develop a low-cost, portable diagnostic toolkit integrated with a telemedicine app to serve remote and underserved areas."
            }
        ]
    }
]

export const qa_data = [
    {
        id: 1,
        question: "Who can participate in Parampara 1.0?",
        answer: "Any college student with a valid student ID can participate. You can form teams of 2 to 4 members."
    },
    {
        id: 2,
        question: "Is there any registration fee?",
        answer: "No, registration for Parampara 1.0 is completely free of charge!"
    },
    {
        id: 3,
        question: "Will food and accommodation be provided?",
        answer: "Yes, meals, refreshments, and resting spaces will be provided for all participants during the 24-hour hackathon."
    },
    {
        id: 4,
        question: "Can we choose multiple problem statements?",
        answer: "No, a single team must choose and submit a solution for only one problem statement."
    },
    {
        id: 5,
        question: "What is the judging criteria?",
        answer: "Projects will be judged based on innovation, technical complexity, practicality, and the quality of your final pitch."
    }
]