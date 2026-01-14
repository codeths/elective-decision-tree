/* 
=========================================
ETHS DECISION TREE - JAVASCRIPT (THE BRAIN)
=========================================
This makes your page INTERACTIVE!
JavaScript controls what happens when you click buttons.
*/

// ============================================
// PART 1: THE DECISION TREE (Your Questions & Results)
// ============================================
// This object is like a Choose-Your-Own-Adventure book.
// Each "node" is a page in the book.

const decisionTree = {
    // The first question (starting point)
    start: {
        type: "question",
        question: "What is your motivation for taking the course?",
        options: [
            { text: "Developing a specific skill", next: "skill_type" },
            { text: "Connecting to a future career", next: "career_type" },
            { text: "Exploring an interest", next: "explore_type" },
            { text: "Meeting a specific ETHS graduation requirement", next: "req_type" }
        ]
    },

    // Second level: Develop a specific skill
    skill_type: {
        type: "question",
        question: "What type of skill do you want to learn?",
        options: [
            { text: "Learn to make or create", next: "result_create" },
            { text: "Learn to fix things", next: "result_fix" },
            { text: "Learn communication skills", next: "result_comm"},
            { text: "Learn to manage money", next: "result_money"},
            { text: "Learn computer skills", next: "result_cs"},
            { text: "Learn an instrument", next: "result_music"},
            { text: "Learn to design or problem solve", next: "result_design" }
        ]
    },

    // Second level: Future career
    career_type: {
        type: "question",
        question: "Which career pathway do you want to consider",
        options: [
            { text: "Agriculture, Food, and Natural Resources", next: "result_agr" },
            { text: "Arts and Communication", next: "result_art" },
            { text: "Finance and Business Services", next: "result_finance" },
            { text: "Health Science and Technology", next: "result_health" },
            { text: "Human and Public Services", next: "result_service" },
            { text: "Information Technology", next: "result_it" },
            { text: "Manufacturing, Engineering, and Trades", next: "result_manu" }
        ]
    },

    // Second level: Explore
    explore_type: {
        type: "question",
        question: "What excites you most about learning?",
        options: [
            { text: "Learning about the world around us", next: "world_type" },
            { text: "Planning for the future", next: "future_type" },
            { text: "Working with and helping people", next: "result_people" },
            { text: "Being creative, telling stories, or performing", next: "creative_type" },
            { text: "Building, making, or problem-solving", next: "make_type" }
        ]
    },


    // Second level: Meeting a specific ETHS graduation requirement
    req_type: {
        type: "question",
        question: "Which credit are you looking to fulfill?",
        options: [
            { text: "Math", next: "result_math" },
            { text: "Career and Technical Education (CTE)", next: "cte_type" },
            { text: "Fine Arts", next: "finearts_type" },
            { text: "History", next: "result_history" },
            { text: "Consumer Education", next: "result_consumered"}
        ]
    },

     // Third level: planning for the future
     future_type: {  
      type: "question",
        question: "In what ways do you want to prepare for life after high school?",
        options: [
            { text: "Develop a perspective for arts and culture", next: "result_perspective" },
            { text: "Health & Wellness", next: "result_health" },
            { text: "Adulthood", next: "result_adult" },
            { text: "Financial Literacy", next: "result_finance" },
            { text: "Technology Literacy", next: "result_techlit" },
            { text: "Work-based Learning & Internships", next: "result_work" }
        ]
    },

    // Third level: CTE
    cte_type: {
        type: "question",
        question: "Which area is most interesting?",
        options: [
            { text: "Computer Science", next: "result_cs" },
            { text: "Information Technology", next: "result_it" },
            { text: "Family & Consumer Sciences", next: "result_fami" },
            { text: "Business", next: "result_business" },
            { text: "Industrial Technology", next: "result_industrialtech" },
            { text: "Health Science", next: "result_healthsci" }
        ]
    },

    // Third level: Being Creative Telling stories or preforming
    creative_type: {
        type: "question",
        question: "How do you like to work?",
        options: [
            { text: "Mostly with computers and technology", next: "result_cs" },
            { text: "Mostly hands on and making things", next: "result_hands" },
            { text: "Performing for an audience", next: "result_perform" }
        ]
    },

    // Third level: Building making or problem solving
    make_type: {
        type: "question",
        question: "How do you like to work?",
        options: [
            { text: "Mostly with computers and technology", next: "result_cs" },
            { text: "Mostly hands on and making things", next: "result_hands" }
        ]
    },

  // Third level: Fine Arts
    finearts_type: {
        type: "question",
        question: "Which area is most interesting?",
        options: [
            { text: "Art", next: "result_art" },
            { text: "Music", next: "result_music" },
            { text: "Theatre", next: "result_theatre" }
        ]
    },
    // Third level: World around us
    world_type: {
        type: "question",
        question: "Which industry most excites you?",
        options: [
            { text: "Technology", next: "result_it" },
            { text: "Food", next: "result_food" },
            { text: "Education", next: "result_edu" },
            { text: "Art & Design", next: "art_type" },
            { text: "Healthcare", next: "result_healthcareer" },
            { text: "Business", next: "result_business" },
            { text: "Construction Trades", next: "result_construct" },
            { text: "Engineering", next: "result_eng" },
            { text: "Social Media & Journalism", next: "result_journ" }
        ]
    },

// Fourth Level: Art and Design
    art_type: {
        type: "question",
        question: "Which art form are you thinking about?",
        options: [
            { text: "Theatre: Acting or working behind the scenes like lighting and set construction", next: "result_theatre" },
            { text: "Music Performance and Technology", next: "result_music" },
            { text: "Media Arts", next: "result_mediaarts" },
            { text: "Visual Arts", next: "result_art" },
            { text: "Fashion", next: "result_fashion" }
        ]
    },

    // RESULTS (Final recommendations)
    result_perspective: {
        type: "result",
        title: "Great! Check out these courses:",
        description: `**Art & Culture**
- placeholder`
    },

    result_people: {
        type: "result",
        title: "Great! Check out these courses:",
        description: `**Working/Helping People**
- Certified Nursing Assistant Training
- Introduction to Teaching and Education
- Child Psychology
- Introduction to Child Development
- Advanced Child Development
- Wildkit Ensemble`
    },

    result_eng: {
        type: "result",
        title: "Great! Check out these courses:",
        description: `**Engineering**
- Personal Finance & Engineering Design Thinking
- PLTW Manufacturing Engineering & Robotics
- PLTW Principles of Engineering
- PLTW Civil Engineering & Architecture
- PLTW Intro to Engineering Design
- PLTW Digital Electronics & Arduinos
- PLTW Capstone: Engineering Design Development`
    },

    result_construct: {
        type: "result",
        title: "Great! Check out these courses:",
        description: `**Construction Trades**
- Auto Maintenance
- 1 & 2 Auto Technology
- Geometry in Construction
- Home Mainteance and Repair
- Metal Sculpture
- Stagecraft`
    },

    result_mediaarts: {
        type: "result",
        title: "Great! Check out these courses:",
        description: `**Media Arts**
- placeholder`
    },

    result_fashion: {
        type: "result",
        title: "Great! Check out these courses:",
        description: `**Fashion**
- placeholder`
    },

    result_edu: {
        type: "result",
        title: "Great! Check out these courses:",
        description: `**Education**
- Introduction to Teaching and Education
- Child Psychology
- Introduction to Child Development
- Advanced Child Development
- Wildkit Ensemble`
    },

    result_food: {
        type: "result",
        title: "Great! Check out these courses:",
        description: `**Food**
- 1 Culinary
- 2A Culinary
- 2B Culinary
- 3 Culinary`
    },

    result_hands: {
        type: "result",
        title: "Great! Check out these courses:",
        description: `**Hands-On & Making Things**
- placeholder`
    },

    result_perform: {
        type: "result",
        title: "Great! Check out these courses:",
        description: `**Performing**
- placeholder`
    },

    result_health: {
        type: "result",
        title: "Great! Check out these courses:",
        description: `**Health & Wellness**
- 1 Culinary
- 2a Culinary
- 2b Culinary
- 3 Culinary
**Health**
- Certified Nursing Assistant Training
- Public & Community Health`
    },

    result_agr: {
        type: "result",
        title: "Great! Check out these courses:",
        description: `**Culinary Arts**
- 1 Culinary
- 2a Culinary
- 2b Culinary
- 3 Culinary`
    },

 result_art: {
        type: "result",
        title: "Great! Check out these courses:",
        description: `**Art**
- Placeholder`
    },

 result_work: {
        type: "result",
        title: "Great! Check out these courses:",
        description: `**Work Based Learning & Internships**
- Certified Nursing Assistant Training
- Introduction to Teaching & Education
- Information Technology Internship
- Practicum: Arts & Communication
- Practicum: Business Management & Information Systems
- Practicum: Industry/Engineering`
    },

 result_techlit: {
        type: "result",
        title: "Great! Check out these courses:",
        description: `**Technology Literacy**
- Placeholder`
    },

  result_journ: {
        type: "result",
        title: "Great! Check out these courses:",
        description: `**Social Media & Journalism**
- AP Art History
- Digital Illustration
- AP Studio Art: Digital Illustration
- AP Studio Art: Animation
- 1 Graphic Design
- 2 Graphic Design 
- 3 Graphic Design 
- AP Studio Art: Graphic Design
- Animation
- 1 Photography
- 2 Photography
- 3 Photography 
- AP Studio Art: Photography
- 1 Video Production & Design
- 2 Video Production & Design
- 3 Video Production & Design
- AP Studio Art: Video Production`
    },

 result_music: {
        type: "result",
        title: "Great! Check out these courses:",
        description: `**Music**
- Placeholder`
    },

 result_adult: {
        type: "result",
        title: "Great! Check out these courses:",
        description: `**Adulthood**
- 1 Culinary
- Home Maintenance and Repair
- Auto Maintenance
- Personal Finance Courses`
    },

 result_theatre: {
        type: "result",
        title: "Great! Check out these courses:",
        description: `**Theatre**
- Theatre
- Stagecraft`
    },

 result_fami: {
        type: "result",
        title: "Great! Check out these courses:",
        description: `**Family & Computer Sciences**
- Placeholder`
    },

result_business: {
        type: "result",
        title: "Great! Check out these courses:",
        description: `**Business**
- Placeholder`
    },

result_industrialtech: {
        type: "result",
        title: "Great! Check out these courses:",
        description: `**Industrial Technology**
- Placeholder`
    },

result_healthsci: {
        type: "result",
        title: "Great! Check out these courses:",
        description: `**Health Science**
- Placeholder`
    },

 result_consumered: {
        type: "result",
        title: "Great! Check out these courses:",
        description: `**Consumer Education**
- Placeholder`
    },

  result_math: {
        type: "result",
        title: "Great! Check out these courses:",
        description: `**Math**
- Algebra in Entrepreneurship
- Geometry in Construction`
    },

 result_history: {
        type: "result",
        title: "Great! Check out these courses:",
        description: `**History**
- AP Art History`
    },

    result_art: {
        type: "result",
        title: "Great! Check out these courses:",
        description: `**Fashion**
- Intro to Fashion
- Advanced Fashion
- Fashion Merchandising

**Art**
- Metal Sculpture
- Fine Arts Courses`
    },

    result_finance: {
        type: "result",
        title: "Great! Check out these courses:",
        description: `**Accounting**
- 1 Accounting
- 2 Accounting

**Business & Finance**
- Algebra in Entrepreneurship
- AP Business & Personal Finance
- Business Law
- Entrepreneurship and Business Management
- Marketing in Sports and Entertainment
- Personal Finance & Careers in Business Management
- Practicum: Business Management & Info Systems`
    },

    result_healthcareer: {
        type: "result",
        title: "Great! Check out these courses:",
        description: `**Health Careers**
- Orientation Health Careers
- Public and Community Health
- Personal Finance and Careers in Health Sciences and Human Services
- Medical Terminology
- Practicum: Health Sciences (Pharmacy Tech Option)`
    },

    result_service: {
        type: "result",
        title: "Great! Check out these courses:",
        description: `**Child Development**
- Intro to Child Development
- Advanced Child Development
- Child Psychology

**Public Service**
- Personal Finance & Careers in Health Sciences and Human Services
- Introduction to Public Safety
- Introduction to Teaching and Education
- AP US Government and Politics
- Contemporary Adult Life`
    },

    result_it: {
        type: "result",
        title: "Great! Check out these courses:",
        description: `**Programming**
- Introduction to Computer Programming
- Women in Programming
- Game Design & Programming
- AP Computer Science Principles

**IT & Web**
- Information Technology Internship
- Information Technology Internship (Personal Finance)
- Cybersecurity 1: Networking Fundamentals
- Web Design`
    },

    result_manu: {
        type: "result",
        title: "Great! Check out these courses:",
        description: `**Engineering (PLTW)**
- Introduction to Engineering Design
- Introduction to Engineering Design (Women in Engineering)
- Principles of Engineering
- Digital Electronics and Arduinos
- Civil Engineering and Architecture
- Engineering Design and Development

**Manufacturing & Trades**
- Geometry in Construction
- Manufacturing Technology
- Manufacturing Engineering and Robotics (PLTW)
- Automotive Maintenance
- 1 Automotive Technology
- 2 Automotive Technology
- Personal Finance & Engineering Design Thinking
- Metal Sculpture
- Home Repair and Maintenance`
    },

    result_create: {
        type: "result",
        title: "Great! Check out these courses:",
        description: `**Visual Arts**
- Art
- Graphic Design
- Metal Sculpture
- Photography

**Media**
- Music Tech
- Video Production`
    },

    result_fix: {
        type: "result",
        title: "Great! Check out these courses:",
        description: `**Automotive**
- Auto Maintenance
- 1 Auto Technology
- 2 Auto Technology

**Home & Tech**
- Home Repair & Maintenance
- Geometry in Construction
- Cybersecurity 1: Networking Fundamentals
- Stagecraft
- Information Technology Internship`
    },

    result_comm: {
        type: "result",
        title: "Great! Check out these courses:",
        description: `**Theater**
- 1 Theater S
- 2 Theater
- 3-4 Advanced Theater: Theatre Production
- 3-4 Advanced Theater: Playwriting & Acting

**Other**
- Introduction to Teaching & Education
- Certified Nursing Assistant Training`
    },

    result_money: {
        type: "result",
        title: "Great! Check out these courses:",
        description: `**Accounting**
- 1 Accounting
- Advanced Accounting

**Personal Finance**
- AP Business and Personal Finance
- Personal Finance & Engineering Design Thinking
- Personal Finance and Business Management
- Personal Finance and Information Technology Internship
- Personal Finance in Health and Human Services`
    },

    result_cs: {
        type: "result",
        title: "Great! Check out these courses:",
        description: `**Computer Science**
- Introduction to Computer Programming
- Women in Programming
- Game Design & Programming
- AP Computer Science Principles
- Web Design`
    },

    result_music: {
        type: "result",
        title: "Great! Check out these courses:",
        description: `**Learn an Instrument**
- Learn to Play Music
- 1 Piano
- 2 Piano
- Beginning Guitar
- Intermediate Guitar

**Ensembles**
- Concert Band
- Orchestra
- Vocal Music/Chorale
- Wildkit Ensemble
- Jazz Workshop

**Music Production**
- 1 Music Technology
- 2 Music Technology
- 3 Music Technology`
    },

    result_design: {
        type: "result",
        title: "Great! Check out these courses:",
        description: `**Performance**
- Concert Band
- Orchestra
- Vocal Music/Chorale
- Wildkit Ensemble

**Theater**
- Stagecraft
- 1 Theater S
- 2 Theater
- 3-4 Advanced Theater: Theatre Production
- 3-4 Advanced Theater: Playwriting & Acting`
    }
};

// ============================================
// PART 2: MARKDOWN PARSER
// ============================================
// Converts markdown text to HTML

function parseMD(text) {
    let lines = text.split('\n')
    let html = ''
    let inList = false

    lines.forEach(line => {
        // Check for bullet point (- or *)
        if (line.trim().match(/^[-*]\s+/)) {
            if (!inList) {
                html += '<ul style="list-style-type:none;">'
                inList = true
            }
            html += `<li>${line.trim().replace(/^[-*]\s+/, '')}</li>`
        } else {
            if (inList) {
                html += '</ul>'
                inList = false
            }
            if (line.trim()) html += line + '<br>'
        }
    })

    if (inList) html += '</ul>'

    // Inline formatting
    return html
        .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
        .replace(/\*(.+?)\*/g, '<em>$1</em>')
        .replace(/`(.+?)`/g, '<code>$1</code>')
        .replace(/<br>$/, '')
}

// ============================================
// PART 3: TRACKING WHERE WE ARE
// ============================================
// These variables remember your current position

let currentNode = "start";  // Where you are now (starts at first question)
let history = [];           // Where you've been (for the back button)

// ============================================
// PART 4: THE MAIN FUNCTION - RENDER
// ============================================
// This decides what to show on screen

function render() {
    // Look up the current node in our tree
    const node = decisionTree[currentNode];
    
    // Is it a question or a result?
    if (node.type === "question") {
        renderQuestion(node);
    } else if (node.type === "result") {
        renderResult(node);
    }
}

// ============================================
// PART 5: SHOWING A QUESTION
// ============================================

function renderQuestion(node) {
    const content = document.getElementById("content");
    
    // Build the breadcrumb
    let breadcrumb = "";
    if (history.length > 0) {
        breadcrumb = `<div class="breadcrumb">Step ${history.length + 1}</div>`;
    }

    // Start building the HTML
    let html = `
        ${breadcrumb}
        <div class="question-box">
            <h1>ETHS Elective Chooser</h1>
            <div class="question">${node.question}</div>
            <div class="options">
    `;

    // Add a button for each option
    node.options.forEach((option) => {
        html += `
            <button class="option-btn" onclick="selectOption('${option.next}')">
                ${option.text}
            </button>
        `;
    });

    html += `</div>`;

    // Add back button if not on first question
    if (history.length > 0) {
        html += `<button class="back-btn" onclick="goBack()">← Back</button>`;
    }

    html += `</div><br><br>`;

    // Put the HTML on the page
    content.innerHTML = html;
}

// ============================================
// PART 6: SHOWING A RESULT
// ============================================

function renderResult(node) {
    const content = document.getElementById("content");
    
    const html = `
        <div class="result-box">
            <div class="breadcrumb">Final Result</div>
            <h1 class="result-title">${node.title}</h1>
            <div class="result-description">
                ${parseMD(node.description)}
            </div>
            <button class="restart-btn" onclick="restart()">Start Over</button>
            <button class="back-btn" onclick="goBack()">← Back</button>
        </div>
    `;

    content.innerHTML = html;
}

// ============================================
// PART 7: USER INTERACTIONS
// ============================================

// When user clicks an option button
function selectOption(nextNode) {
    history.push(currentNode);  // Remember where we were
    currentNode = nextNode;     // Move to new location
    render();                   // Show the new screen
}

// When user clicks Back button
function goBack() {
    if (history.length > 0) {
        currentNode = history.pop();  // Go back to previous location
        render();
    }
}

// When user clicks Start Over
function restart() {
    currentNode = "start";
    history = [];
    render();
}

// ============================================
// START THE APP!
// ============================================
// This runs when the page first loads
render();