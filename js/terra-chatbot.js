class TerraChatbot {
  constructor(containerId) {
    // Create DOM elements
    this.createChatbotElements(containerId);
    
    this.messagesContainer = document.getElementById(`${containerId}-messages`);
    this.userInput = document.getElementById(`${containerId}-user-input`);
    this.sendButton = document.getElementById(`${containerId}-send-button`);
    this.chatbotToggle = document.getElementById(`${containerId}-toggle`);
    this.chatbotContainer = document.getElementById(`${containerId}-container`);
    
    this.conversationState = {
      context: {},
      currentFlow: null,
      waitingForResponse: false,
      userProfile: {
        name: null,
        email: null,
        interests: [],
        appointmentHistory: []
      }
    };
    
    this.initEventListeners();
    this.startConversation();
  }
  
  createChatbotElements(containerId) {
    const container = document.getElementById(containerId);
    if (!container) {
      console.error(`Container with ID ${containerId} not found`);
      return;
    }
    
    container.classList.add('terra-chatbot');
    
    // Create toggle button
    const toggleButton = document.createElement('div');
    toggleButton.className = 'terra-chatbot-toggle';
    toggleButton.id = `${containerId}-toggle`;
    toggleButton.innerHTML = '<i class="fas fa-comment"></i>';
    
    // Create chatbot container
    const chatbotContainer = document.createElement('div');
    chatbotContainer.className = 'terra-chatbot-container';
    chatbotContainer.id = `${containerId}-container`;
    
    // Create chatbot header
    const chatbotHeader = document.createElement('div');
    chatbotHeader.className = 'terra-chatbot-header';
    chatbotHeader.innerHTML = `
      <div class="terra-chatbot-avatar">
        <i class="fas fa-robot"></i>
      </div>
      <div class="terra-chatbot-title">
        <h2>Assistant Terra</h2>
        <p>Votre conseiller virtuel</p>
      </div>
    `;
    
    // Create messages container
    const messagesContainer = document.createElement('div');
    messagesContainer.className = 'terra-chatbot-messages';
    messagesContainer.id = `${containerId}-messages`;
    
    // Create input area
    const inputArea = document.createElement('div');
    inputArea.className = 'terra-chatbot-input';
    inputArea.innerHTML = `
      <input type="text" id="${containerId}-user-input" placeholder="Tapez votre message..." autocomplete="off">
      <button id="${containerId}-send-button">
        <i class="fas fa-paper-plane"></i>
      </button>
    `;
    
    // Assemble the chatbot
    chatbotContainer.appendChild(chatbotHeader);
    chatbotContainer.appendChild(messagesContainer);
    chatbotContainer.appendChild(inputArea);
    
    container.appendChild(toggleButton);
    container.appendChild(chatbotContainer);
  }
  
  initEventListeners() {
    this.sendButton.addEventListener('click', () => this.handleUserInput());
    this.userInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        this.handleUserInput();
      }
    });
    
    this.chatbotToggle.addEventListener('click', () => {
      this.chatbotToggle.parentElement.classList.toggle('active');
    });
  }
  
  handleUserInput() {
    const userMessage = this.userInput.value.trim();
    if (!userMessage) return;
    
    // Add user message to chat
    this.addMessage(userMessage, 'user');
    this.userInput.value = '';
    
    // Process user message
    this.processUserMessage(userMessage);
  }
  
  processUserMessage(message) {
    // Set waiting state
    this.conversationState.waitingForResponse = true;
    
    // Show typing indicator
    this.showTypingIndicator();
    
    // Process based on current flow or detect intent
    setTimeout(() => {
      this.hideTypingIndicator();
      
      if (this.conversationState.currentFlow) {
        this.continueFlow(message);
      } else {
        this.detectIntent(message);
      }
      
      this.conversationState.waitingForResponse = false;
    }, 1000 + Math.random() * 1000); // Random delay for realism
  }
  
  detectIntent(message) {
    // Simple keyword-based intent detection
    const msg = message.toLowerCase();
    
    if (msg.includes('rendez-vous') || msg.includes('rdv') || msg.includes('rencontrer') || msg.includes('conseiller')) {
      this.startAppointmentFlow();
    } else if (msg.includes('service') || msg.includes('offre') || msg.includes('proposez')) {
      this.explainServices();
    } else if (msg.includes('cas') || msg.includes('exemple') || msg.includes('projet') || msg.includes('ynnov')) {
      this.showCaseStudy();
    } else if (msg.includes('espace') || msg.includes('covoiturage') || msg.includes('réserver')) {
      this.showSpaceManagement();
    } else if (msg.includes('rse') || msg.includes('environnement') || msg.includes('carbone') || msg.includes('durable')) {
      this.discussSustainability();
    } else if (msg.includes('tarif') || msg.includes('prix') || msg.includes('coût') || msg.includes('combien')) {
      this.discussPricing();
    } else if (msg.includes('bonjour') || msg.includes('salut') || msg.includes('hello')) {
      this.greetUser();
    } else if (msg.includes('merci') || msg.includes('au revoir') || msg.includes('bye')) {
      this.sayGoodbye();
    } else {
      this.askForClarification();
    }
  }
  
  startConversation() {
    setTimeout(() => {
      this.addMessage("Bonjour ! Je suis l'assistant virtuel de Terra. Comment puis-je vous aider aujourd'hui ?", 'bot', [
        "Prendre rendez-vous",
        "Découvrir nos services",
        "Voir des cas d'usage",
        "Gestion d'espaces",
        "Questions fréquentes"
      ]);
    }, 500);
  }
  
  // Flow handlers
  startAppointmentFlow() {
    this.conversationState.currentFlow = 'appointment';
    this.conversationState.context.appointmentStep = 'purpose';
    
    this.addMessage("Je serais ravi de vous aider à prendre rendez-vous avec l'un de nos conseillers. Pour quel type de service souhaitez-vous prendre rendez-vous ?", 'bot', [
      "Analyse stratégique",
      "Conseil en RSE",
      "Optimisation d'espaces",
      "Innovation numérique",
      "Autre"
    ]);
  }
  
  continueFlow(userMessage) {
    switch (this.conversationState.currentFlow) {
      case 'appointment':
        this.handleAppointmentFlow(userMessage);
        break;
      case 'services':
        this.handleServicesFlow(userMessage);
        break;
      case 'sustainability':
        this.handleSustainabilityFlow(userMessage);
        break;
      default:
        this.resetFlow();
        this.detectIntent(userMessage);
    }
  }
  
  handleAppointmentFlow(userMessage) {
    const step = this.conversationState.context.appointmentStep;
    
    switch (step) {
      case 'purpose':
        this.conversationState.context.appointmentPurpose = userMessage;
        this.conversationState.context.appointmentStep = 'date';
        
        // Show appointment scheduler
        this.addMessage(`Parfait ! Vous souhaitez prendre rendez-vous pour "${userMessage}". Veuillez choisir une date qui vous convient :`, 'bot');
        this.showAppointmentScheduler();
        break;
        
      case 'date':
        // This is handled by the appointment scheduler UI
        break;
        
      case 'confirmation':
        if (userMessage.toLowerCase().includes('oui') || userMessage.toLowerCase().includes('confirm')) {
          this.addMessage(`Votre rendez-vous a été confirmé ! Vous recevrez un email de confirmation à l'adresse que vous avez fournie. Nous avons hâte de vous rencontrer !`, 'bot');
          
          // Add follow-up question
          setTimeout(() => {
            this.addMessage("Puis-je vous aider avec autre chose aujourd'hui ?", 'bot', [
              "Découvrir nos services",
              "Voir des cas d'usage",
              "Non merci"
            ]);
            this.resetFlow();
          }, 1500);
        } else {
          this.addMessage("Je comprends. Souhaitez-vous choisir une autre date ou annuler la prise de rendez-vous ?", 'bot', [
            "Choisir une autre date",
            "Annuler"
          ]);
          this.conversationState.context.appointmentStep = 'retry';
        }
        break;
        
      case 'retry':
        if (userMessage.toLowerCase().includes('autre') || userMessage.toLowerCase().includes('choisir')) {
          this.conversationState.context.appointmentStep = 'date';
          this.addMessage("Bien sûr, voici d'autres créneaux disponibles :", 'bot');
          this.showAppointmentScheduler();
        } else {
          this.addMessage("J'ai annulé votre demande de rendez-vous. N'hésitez pas à revenir vers nous quand vous serez disponible.", 'bot');
          
          setTimeout(() => {
            this.addMessage("Puis-je vous aider avec autre chose aujourd'hui ?", 'bot', [
              "Découvrir nos services",
              "Voir des cas d'usage",
              "Non merci"
            ]);
            this.resetFlow();
          }, 1500);
        }
        break;
    }
  }
  
  handleServicesFlow(userMessage) {
    const service = userMessage.toLowerCase();
    
    if (service.includes('stratégique') || service.includes('analyse')) {
      this.addMessage(`Notre service d'analyse stratégique comprend une évaluation approfondie de votre organisation pour identifier les opportunités d'optimisation et de développement durable. Nos experts vous accompagnent dans la définition d'objectifs clairs et la mise en place d'indicateurs de performance.`, 'bot');
    } else if (service.includes('rse') || service.includes('durable')) {
      this.addMessage(`Notre conseil en RSE (Responsabilité Sociétale des Entreprises) vous aide à intégrer les préoccupations sociales et environnementales dans vos activités. Nous vous accompagnons dans la réduction de votre empreinte carbone, l'optimisation de vos ressources et la valorisation de vos engagements auprès de vos parties prenantes.`, 'bot');
    } else if (service.includes('espace') || service.includes('optimisation')) {
      this.addMessage(`Notre service d'optimisation d'espaces permet de maximiser l'utilisation de vos locaux tout en réduisant votre empreinte environnementale. Nous analysons l'occupation de vos espaces, proposons des solutions de réaménagement et mettons en place des outils de gestion intelligente comme notre plateforme Ynnov'Tech.`, 'bot');
    } else if (service.includes('numérique') || service.includes('innovation')) {
      this.addMessage(`Notre service d'innovation numérique vous accompagne dans la transformation digitale de votre organisation. Nous développons des solutions sur mesure pour optimiser vos processus, réduire votre impact environnemental et améliorer l'expérience de vos collaborateurs et clients.`, 'bot');
    } else {
      this.addMessage(`Nous proposons également des services personnalisés en fonction de vos besoins spécifiques. Nos experts peuvent vous accompagner dans des projets sur mesure alliant innovation, durabilité et performance.`, 'bot');
    }
    
    setTimeout(() => {
      this.addMessage("Souhaitez-vous en savoir plus sur un autre service ou prendre rendez-vous avec l'un de nos conseillers ?", 'bot', [
        "Analyse stratégique",
        "Conseil en RSE",
        "Optimisation d'espaces",
        "Innovation numérique",
        "Prendre rendez-vous"
      ]);
    }, 1500);
  }
  
  handleSustainabilityFlow(userMessage) {
    if (userMessage.toLowerCase().includes('oui')) {
      this.addMessage("C'est une excellente initiative ! Voici quelques actions que nous pouvons mettre en place ensemble :", 'bot');
      
      setTimeout(() => {
        this.addMessage("1. Analyse de votre empreinte carbone actuelle", 'bot');
      }, 800);
      
      setTimeout(() => {
        this.addMessage("2. Optimisation de l'utilisation de vos espaces et ressources", 'bot');
      }, 1600);
      
      setTimeout(() => {
        this.addMessage("3. Mise en place de solutions de mobilité durable comme le covoiturage", 'bot');
      }, 2400);
      
      setTimeout(() => {
        this.addMessage("4. Développement d'une stratégie RSE adaptée à votre organisation", 'bot');
      }, 3200);
      
      setTimeout(() => {
        this.addMessage("Souhaitez-vous prendre rendez-vous avec l'un de nos experts en développement durable pour discuter de ces solutions ?", 'bot', [
          "Oui, prendre rendez-vous",
          "Plus d'informations d'abord",
          "Non merci"
        ]);
      }, 4000);
    } else {
      this.addMessage("Je comprends. Sachez que nous proposons également d'autres services qui pourraient vous intéresser. N'hésitez pas à me demander plus d'informations.", 'bot', [
        "Découvrir nos services",
        "Voir des cas d'usage",
        "Prendre rendez-vous"
      ]);
      this.resetFlow();
    }
  }
  
  resetFlow() {
    this.conversationState.currentFlow = null;
    this.conversationState.context = {};
  }
  
  // UI Helpers
  addMessage(text, sender, options = null) {
    const messageElement = document.createElement('div');
    messageElement.className = `terra-message terra-message-${sender}`;
    
    // Add message text
    const messageText = document.createElement('p');
    messageText.textContent = text;
    messageElement.appendChild(messageText);
    
    // Add timestamp
    const timestamp = document.createElement('div');
    timestamp.className = 'terra-message-time';
    const now = new Date();
    timestamp.textContent = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;
    messageElement.appendChild(timestamp);
    
    // Add options if provided
    if (options && options.length > 0) {
      const optionsContainer = document.createElement('div');
      optionsContainer.className = 'terra-message-options';
      
      options.forEach(option => {
        const optionButton = document.createElement('button');
        optionButton.className = 'terra-message-option';
        optionButton.textContent = option;
        optionButton.addEventListener('click', () => {
          this.handleOptionClick(option);
        });
        optionsContainer.appendChild(optionButton);
      });
      
      messageElement.appendChild(optionsContainer);
    }
    
    this.messagesContainer.appendChild(messageElement);
    this.scrollToBottom();
  }
  
  handleOptionClick(option) {
    // Add the selected option as a user message
    this.addMessage(option, 'user');
    
    // Process the option as a user message
    this.processUserMessage(option);
  }
  
  showTypingIndicator() {
    const typingIndicator = document.createElement('div');
    typingIndicator.className = 'terra-chatbot-typing';
    typingIndicator.id = 'terra-typing-indicator';
    
    for (let i = 0; i < 3; i++) {
      const dot = document.createElement('div');
      dot.className = 'terra-typing-dot';
      typingIndicator.appendChild(dot);
    }
    
    this.messagesContainer.appendChild(typingIndicator);
    this.scrollToBottom();
  }
  
  hideTypingIndicator() {
    const typingIndicator = document.getElementById('terra-typing-indicator');
    if (typingIndicator) {
      typingIndicator.remove();
    }
  }
  
  scrollToBottom() {
    this.messagesContainer.scrollTop = this.messagesContainer.scrollHeight;
  }
  
  // Feature-specific methods
  explainServices() {
    this.conversationState.currentFlow = 'services';
    
    this.addMessage("Terra propose une gamme complète de services pour vous accompagner dans votre transition vers un modèle plus durable et efficient :", 'bot');
    
    setTimeout(() => {
      const serviceCard = document.createElement('div');
      serviceCard.className = 'terra-service-card';
      serviceCard.innerHTML = `
        <h3>Nos services principaux</h3>
        <p>• <strong>Analyse stratégique</strong> : Évaluation et optimisation de votre organisation</p>
        <p>• <strong>Conseil en RSE</strong> : Intégration des enjeux environnementaux et sociaux</p>
        <p>• <strong>Optimisation d'espaces</strong> : Maximisation de l'utilisation de vos locaux</p>
        <p>• <strong>Innovation numérique</strong> : Solutions digitales sur mesure</p>
        <div class="terra-service-card-footer">
          <span class="terra-service-card-more" id="terra-service-more">En savoir plus</span>
        </div>
      `;
      
      this.messagesContainer.appendChild(serviceCard);
      this.scrollToBottom();
      
      // Add event listener to the "En savoir plus" button
      document.getElementById('terra-service-more').addEventListener('click', () => {
        this.addMessage("Sur quel service souhaitez-vous plus d'informations ?", 'bot', [
          "Analyse stratégique",
          "Conseil en RSE",
          "Optimisation d'espaces",
          "Innovation numérique"
        ]);
      });
    }, 1000);
  }
  
  showCaseStudy() {
    this.addMessage("Voici un exemple concret de notre travail avec le projet Ynnov'Tech dans le Département de l'Yonne :", 'bot');
    
    setTimeout(() => {
      const caseStudyCard = document.createElement('div');
      caseStudyCard.className = 'terra-case-study-card';
      caseStudyCard.innerHTML = `
        <div class="terra-case-study-image">
          <i class="fas fa-building"></i>
        </div>
        <div class="terra-case-study-content">
          <h3>Projet Ynnov'Tech</h3>
          <p>Terra a mis en place une solution innovante pour optimiser l'utilisation des espaces sous-occupés dans les bâtiments administratifs du département de l'Yonne, tout en réduisant l'empreinte carbone liée aux déplacements.</p>
          <div class="terra-case-study-stats">
            <div class="terra-case-study-stat">
              <div class="terra-case-study-stat-value">-30%</div>
              <div class="terra-case-study-stat-label">Émissions CO2</div>
            </div>
            <div class="terra-case-study-stat">
              <div class="terra-case-study-stat-value">+45%</div>
              <div class="terra-case-study-stat-label">Utilisation des espaces</div>
            </div>
            <div class="terra-case-study-stat">
              <div class="terra-case-study-stat-value">85%</div>
              <div class="terra-case-study-stat-label">Satisfaction utilisateurs</div>
            </div>
          </div>
        </div>
      `;
      
      this.messagesContainer.appendChild(caseStudyCard);
      this.scrollToBottom();
    }, 1000);
    
    setTimeout(() => {
      this.addMessage("Souhaitez-vous en savoir plus sur ce projet ou découvrir comment nous pourrions mettre en place une solution similaire pour votre organisation ?", 'bot', [
        "Plus de détails sur Ynnov'Tech",
        "Solutions pour mon organisation",
        "Autres cas d'usage"
      ]);
    }, 2500);
  }
  
  showSpaceManagement() {
    this.addMessage("Notre plateforme de gestion d'espaces et de covoiturage permet d'optimiser l'utilisation de vos ressources tout en réduisant votre empreinte carbone.", 'bot');
    
    setTimeout(() => {
      this.addMessage("Avec notre solution, vous pouvez :", 'bot');
    }, 1000);
    
    setTimeout(() => {
      this.addMessage("• Réserver des salles et des espaces de travail en quelques clics", 'bot');
    }, 1800);
    
    setTimeout(() => {
      this.addMessage("• Proposer ou rejoindre des trajets de covoiturage avec vos collègues", 'bot');
    }, 2600);
    
    setTimeout(() => {
      this.addMessage("• Visualiser en temps réel le taux d'occupation de vos locaux", 'bot');
    }, 3400);
    
    setTimeout(() => {
      this.addMessage("• Analyser les données d'utilisation pour optimiser vos ressources", 'bot');
    }, 4200);
    
    setTimeout(() => {
      this.addMessage("Souhaitez-vous une démonstration de notre plateforme ou prendre rendez-vous pour discuter de vos besoins spécifiques ?", 'bot', [
        "Demander une démo",
        "Prendre rendez-vous",
        "Plus d'informations"
      ]);
    }, 5000);
  }
  
  discussSustainability() {
    this.conversationState.currentFlow = 'sustainability';
    
    this.addMessage("Le développement durable est au cœur de notre approche chez Terra. Nous aidons les organisations à réduire leur empreinte environnementale tout en optimisant leurs performances.", 'bot');
    
    setTimeout(() => {
      this.addMessage("Souhaitez-vous réduire l'empreinte carbone de votre organisation ?", 'bot', [
        "Oui, c'est une priorité",
        "Je souhaite plus d'informations",
        "Non, pas pour le moment"
      ]);
    }, 1500);
  }
  
  discussPricing() {
    this.addMessage("Nos tarifs sont adaptés à chaque projet et dépendent de plusieurs facteurs comme la taille de votre organisation, la complexité de vos besoins et l'étendue des services requis.", 'bot');
    
    setTimeout(() => {
      this.addMessage("Pour vous donner une idée, nos prestations de conseil débutent généralement à partir de 1500€ pour un diagnostic initial, et nos solutions de gestion d'espaces à partir de 250€ par mois.", 'bot');
    }, 1500);
    
    setTimeout(() => {
      this.addMessage("Souhaitez-vous recevoir une estimation personnalisée pour votre organisation ?", 'bot', [
        "Oui, je souhaite un devis",
        "Prendre rendez-vous pour discuter",
        "Non merci"
      ]);
    }, 3000);
  }
  
  greetUser() {
    const greetings = [
      "Bonjour ! Comment puis-je vous aider aujourd'hui ?",
      "Bonjour ! Je suis ravi de vous accueillir. Que puis-je faire pour vous ?",
      "Bonjour ! Je suis l'assistant virtuel de Terra. Comment puis-je vous être utile ?"
    ];
    
    const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];
    this.addMessage(randomGreeting, 'bot', [
      "Prendre rendez-vous",
      "Découvrir nos services",
      "Voir des cas d'usage",
      "Questions fréquentes"
    ]);
  }
  
  sayGoodbye() {
    const goodbyes = [
      "Merci de votre visite ! N'hésitez pas à revenir si vous avez d'autres questions.",
      "Au revoir ! J'ai été ravi de vous aider. À bientôt !",
      "Merci pour cette conversation. Je reste disponible si vous avez besoin d'autres informations."
    ];
    
    const randomGoodbye = goodbyes[Math.floor(Math.random() * goodbyes.length)];
    this.addMessage(randomGoodbye, 'bot');
  }
  
  askForClarification() {
    const clarifications = [
      "Je ne suis pas sûr de comprendre votre demande. Pourriez-vous préciser ce que vous recherchez ?",
      "Pourriez-vous reformuler votre question ? Je souhaite vous apporter la meilleure réponse possible.",
      "Je ne suis pas certain d'avoir bien compris. Voici quelques sujets sur lesquels je peux vous aider :"
    ];
    
    const randomClarification = clarifications[Math.floor(Math.random() * clarifications.length)];
    this.addMessage(randomClarification, 'bot', [
      "Prendre rendez-vous",
      "Nos services",
      "Cas d'usage",
      "Gestion d'espaces",
      "Questions fréquentes"
    ]);
  }
  
  showAppointmentScheduler() {
    // Create appointment scheduler UI
    const scheduler = document.createElement('div');
    scheduler.className = 'terra-appointment-scheduler';
    
    // Generate dates (next 5 business days)
    const dates = this.generateAppointmentDates(5);
    
    scheduler.innerHTML = `
      <h3>Sélectionnez une date et un horaire</h3>
      <div class="terra-appointment-dates" id="terra-appointment-dates">
        ${dates.map((date, index) => `
          <div class="terra-appointment-date ${index === 0 ? 'selected' : ''}" data-date="${date.toISOString()}">
            <div class="terra-appointment-date-day">${date.getDate()}</div>
            <div class="terra-appointment-date-month">${date.toLocaleString('fr-FR', { month: 'short' })}</div>
          </div>
        `).join('')}
      </div>
      <div class="terra-appointment-times" id="terra-appointment-times">
        ${this.generateTimeSlots()}
      </div>
      <button class="terra-appointment-confirm" id="terra-appointment-confirm">Confirmer le rendez-vous</button>
    `;
    
    this.messagesContainer.appendChild(scheduler);
    this.scrollToBottom();
    
    // Add event listeners
    const dateElements = document.querySelectorAll('.terra-appointment-date');
    dateElements.forEach(dateEl => {
      dateEl.addEventListener('click', () => {
        // Remove selected class from all dates
        dateElements.forEach(el => el.classList.remove('selected'));
        // Add selected class to clicked date
        dateEl.classList.add('selected');
      });
    });
    
    const timeElements = document.querySelectorAll('.terra-appointment-time');
    timeElements.forEach(timeEl => {
      timeEl.addEventListener('click', () => {
        // Remove selected class from all times
        timeElements.forEach(el => el.classList.remove('selected'));
        // Add selected class to clicked time
        timeEl.classList.add('selected');
      });
    });
    
    const confirmButton = document.getElementById('terra-appointment-confirm');
    confirmButton.addEventListener('click', () => {
      const selectedDate = document.querySelector('.terra-appointment-date.selected');
      const selectedTime = document.querySelector('.terra-appointment-time.selected');
      
      if (selectedDate && selectedTime) {
        const date = new Date(selectedDate.getAttribute('data-date'));
        const formattedDate = date.toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long' });
        const time = selectedTime.textContent;
        
        // Remove scheduler
        scheduler.remove();
        
        // Update conversation state
        this.conversationState.context.appointmentDate = date;
        this.conversationState.context.appointmentTime = time;
        this.conversationState.context.appointmentStep = 'confirmation';
        
        // Add confirmation message
        this.addMessage(`Vous avez sélectionné un rendez-vous le ${formattedDate} à ${time} pour "${this.conversationState.context.appointmentPurpose}". Confirmez-vous ce rendez-vous ?`, 'bot', [
          "Oui, je confirme",
          "Non, changer de date"
        ]);
      } else {
        // Add error message if no date or time selected
        this.addMessage("Veuillez sélectionner une date et un horaire pour votre rendez-vous.", 'bot');
      }
    });
  }
  
  generateAppointmentDates(numDays) {
    const dates = [];
    let currentDate = new Date();
    
    while (dates.length < numDays) {
      currentDate = new Date(currentDate.setDate(currentDate.getDate() + 1));
      
      // Skip weekends
      if (currentDate.getDay() !== 0 && currentDate.getDay() !== 6) {
        dates.push(new Date(currentDate));
      }
    }
    
    return dates;
  }
  
  generateTimeSlots() {
    const timeSlots = [
      '09:00', '10:00', '11:00', '14:00', '15:00', '16:00'
    ];
    
    return timeSlots.map(time => `
      <div class="terra-appointment-time">${time}</div>
    `).join('');
  }
}