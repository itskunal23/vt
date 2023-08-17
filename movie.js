document.addEventListener("DOMContentLoaded", function() {
  const messagesContainer = document.getElementById("messages");
  const inputField = document.getElementById("input");

  const movieDatabase = {

    genres: 
    {
      action: [
    'Dhoom 3', 'War', 'Baaghi', 'Bang Bang!', 'Commando', 'Race 2', 'Kick', 'Singham Returns', 'Krrish 3', 'Holiday: A Soldier Is Never Off Duty'
      // Add more action movies
    ],
    comedy: [
      'Hera Pheri', 'Andaz Apna Apna', 'Golmaal: Fun Unlimited', 'Welcome', 'Housefull', 'No Entry', 'Partner', 'Singh Is Kinng', 'Bol Bachchan', 'Fukrey', 'Stree', 'Badhaai Ho', 'Dream Girl', 'Bala', 'Ludo'
      // Add more comedy movies
    ],
    drama: [
      'Taare Zameen Par', 'Kal Ho Naa Ho', 'Kabhi Khushi Kabhie Gham', 'My Name Is Khan', 'Bajrangi Bhaijaan', 'Tumhari Sulu', 'Secret Superstar', 'Bharat', 'Super 30', 'Chhichhore', 'Article 15', 'Chhapaak', 'Thappad', 'Shershaah', 'The Big Bull'
      // Add more drama movies
    ],
    romance: [
      'Dilwale Dulhania Le Jayenge', 'Kabhi Alvida Naa Kehna', 'Jab We Met', 'Veer-Zaara', 'Dil To Pagal Hai', 'Aashiqui 2', 'Yeh Jawaani Hai Deewani', '2 States', 'Goliyon Ki Raasleela Ram-Leela', 'Bajirao Mastani', 'Ae Dil Hai Mushkil', 'Raabta', 'Ludo'
      // Add more romance movies
    ],
    thriller: [
      'Don', 'Kahaani', 'Drishyam', 'Race', 'Ek Villain', 'Badlapur', 'NH10', 'Kahaani 2', 'Andhadhun', 'Talaash: The Answer Lies Within', 'Raman Raghav 2.0', 'Ittefaq', 'Raazi', 'Uri: The Surgical Strike', 'The Girl on the Train'
      // Add more thriller movies
    ],
    war: [
      'Border', 'Lakshya', 'Uri: The Surgical Strike', 'Kesari', 'Shershaah', 'Bhuj: The Pride of India', 'Paltan', 'Madras Cafe', '1971', 'Tango Charlie'
      // Add more war movies
    ],
    musical: [
      'Rockstar', 'Aashiqui 2', 'Fitoor', 'Gully Boy', 'Street Dancer 3D', 'Dil Bechara', 'Kites', 'Ae Dil Hai Mushkil', 'Jagga Jasoos', 'La La Land'
      // Add more musical movies
    ],
    horror: [
      'Raaz', 'Bhoot', '1920', 'Ragini MMS', 'Pari', 'Stree', 'Bhool Bhulaiyaa', 'Tumbbad', 'Pari', 'Bhoot: Part One - The Haunted Ship'
      // Add more horror movies
    ],
    suspense: [
      'Kahaani', 'Drishyam', 'Ittefaq', 'Badla', 'Talaash: The Answer Lies Within', 'Andhadhun', 'Te3n', 'Rustom', 'No One Killed Jessica', 'The Invisible Guest'
      // Add more suspense movies
    ],
    historical: [
      'Lagaan', 'Bajirao Mastani', 'Padmaavat', 'Mohenjo Daro', 'Manikarnika: The Queen of Jhansi', 'Tanhaji: The Unsung Warrior', 'Kesari', 'Panipat', 'Raazi', 'Jodhaa Akbar'
      // Add more historical movies
    ],
    // ... Continue adding more genre categories and movies as needed

  },
  years: {
      // ...
      '1992': [
          'Jo Jeeta Wohi Sikandar', 'Khiladi', 'Deewana', 'Shola Aur Shabnam', 'Beta', 'Khuda Gawah', 'Muskurahat', 'Raju Ban Gaya Gentleman', 'Vishwatma', 'Bol Radha Bol'
          // Add more movies from 1992
      ],
      '1993': [
          'Baazigar', 'Damini', 'Khalnayak', 'Hum Hai Rahi Pyar Ke', 'Darr', 'Sardar', 'Aankhen', 'Gardish', 'Rudaali', 'In Custody'
          // Add more movies from 1993
      ],
      '1994': [
          'Hum Aapke Hain Koun..!', 'Andaz Apna Apna', 'Kabhi Haan Kabhi Naa', 'Bandit Queen', 'Krantiveer', '1942: A Love Story', 'Mohra', 'Droh Kaal', 'Anjaam', 'Main Khiladi Tu Anari', 'Yeh Dillagi', 'Mohra', 'Raja Babu'
          // Add more movies from 1994
      ],
      '1995': [
          'Dilwale Dulhania Le Jayenge', 'Rangeela', 'Akele Hum Akele Tum', 'Karan Arjun', 'Sabse Bada Khiladi', 'Baazi', 'Coolie No. 1', 'Ram Jaane: God Knows', 'Veergati', 'Raja'
          // Add more movies from 1995
      ],
      '1996': [
          'Khamoshi the Musical', 'Maachis', 'Ghatak: Lethal', 'Fire', 'Raja Hindustani', 'Khiladiyon Ka Khiladi', 'Saajan Chale Sasural', 'Agni Sakshi', 'Tere Mere Sapne', 'Jeet'
          // Add more movies from 1996
      ],
      '1997': [
          'Dil To Pagal Hai', 'Border', 'Gupt: The Hidden Truth', 'Virasat', 'Chachi 420', 'Virasat', 'Mrityudand: The Death Sentence ', 'Pares', 'Yes Boss', 'Yeshwant', 'Ishq', 'Deewana Mastana', 'Ghulam-E-Musthafa', 'Mr. & Mrs. Khiladi', 'Judwaa', 'Hero No. 1'
          // Add more movies from 1997
      ],
      '1998': [
          'Kuch Kuch Hota Hai', 'Satya', 'Dil Se..', 'Earth', 'Zakhm', 'Ghulam', 'Dushman', 'Pyaar Kiya To Darna Kya', 'Pyaar to Hona Hi Tha', 'Hyderabad Blues', 'Dulhe Raja', 'China Gate'
          // Add more movies from 1998
      ],
      '1999': [
        'Baadshah', 'Biwi No. 1', 'Jaanam Samjha Karo', 'Hello Brother', 'Hum Saath-Saath Hain', 'Mann - Souls Heart', 'Dil Kya Kare', 'Kachche Dhaage ', 'Hogi Pyaar Ki Jeet', 'Hindustan Ki Kasam ', 'Zulmi', 'Sangharsh', 'International Khiladi', 'Jaanwar', 'Daag: The Fire', 'Haseena Maan Jaayegi', 'Taal', 'Vaastav: The Reality', 'Khoobsurat', 'Anari No. 1', 'Arjun Pandit', 'Hum Aapke Dil Mein Rehte Hain'
        // Add more movies from 1999
    ],
    '2000': [
        'Phir Bhi Dil Hai Hindustani', 'Josh', 'Mohabbatein', 'Dulhan Hum Le Jayenge', 'Chal Mere Bhai', 'Har Dil Jo Pyar Karega...', 'Dhaai Akshar Prem Ke', 'Mela', 'Deewane', 'Raju Chacha'
        // Add more movies from 2000
    ],
    '2001': [
        'Dil Chahta Hai', 'Lagaan: Once Upon a Time in India ', 'Monsoon Wedding', 'Rehnaa Hai Terre Dil Mein', 'Raaz', 'Asoka', 'Chori Chori Chupke Chupke', 'Kabhi Khushi Kabhie Gham'
        // Add more movies from 2001
    ],
        '2002': [
          'Devdas', 'Dil Hai Tumhaara', 'Kaante', 'Mere Yaar Ki Shaadi Hai', 'Humraaz', 'Tumko Na Bhool Paayenge', 'Aankhen', 'Raaz', 'Mujhse Dosti Karoge!', 'Shararat', 'Awara Paagal Deewana', 'Jeet', 'Haan Maine Bhi Pyaar Kiya', 'Agni Varsha', 'Kitne Door Kitne Paas', 'Chor Machaaye Shor', 'Yeh Dil Aashiqanaa', 'Yeh Raaste Hain Pyaar Ke', 'Jaani Dushman: Ek Anokhi Kahani', 'Kuch Tum Kaho Kuch Hum Kahein'
          // Add more movies from 2002
      ],
      '2003': [
          'Koi... Mil Gaya', 'Kal Ho Naa Ho', 'Munna Bhai M.B.B.S.', 'Dil Ka Rishta', 'Gangaajal', 'Pinjar', 'Deewarein', 'Haasil', 'Baghban', 'Hungama', 'Samay: When Time Strikes', 'Chalte Chalte', 'Ishq Vishq'
          // Add more movies from 2003
      ],
      '2004': [
          'Veer-Zaara', 'Lakshya', 'Maqbool', 'Main Hoon Na', 'Swades', 'Mujhse Shaadi Karogi', 'Hum Tum', 'Yuva', 'Dhoom', 'RainKhakee', 'Chameli', 'Masti', 'Hulchul', 'Aitraaz', 'Phir Milenge'
          // Add more movies from 2004
      ],
      '2005': [
          'Black', 'Water', 'Parineeta', 'Bunty Aur Babli', 'Salaam Namaste', 'Bluffmaster!', 'Sarkar','Paheli', 'Iqbal', 'Main, Meri Patni... Aur Woh!'
          // Add more movies from 2005
      ],
      '2006': [
        'Rang De Basanti','Kabhi Alvida Naa Kehna', 'Carry On, Munna Bhai', 'Dhoom 2', 'Omkara', 'Fanaa', 'Don', 'Khosla Ka Ghosla!', 'Gangster', 'Krrish', 
          // Add more movies from 2006
      ],
      '2007': [
          'Om Shanti Om', 'Chak De! India', 'Jab We Met', 'Guru', 'Taare Zameen Par', 'Partner', 'Welcome', 'Bhool Bhulaiyaa', 'Namastey London', 'Life in a... Metro' 
          // Add more movies from 2007
      ],
      '2008': [
          'Ghajini', 'Jodhaa Akbar', 'Rock On!!', 'Rab Ne Bana Di Jodi', 'Singh is Kinng', 'Dostana', 'Sashion', 'Golmaal Returns', 'Janne Tu Ya Janne Na', 'Race'
          // Add more movies from 2008
      ],
      '2009': [
          '3 Idiots', 'Wanted','Love Aaj Kal', 'Ajab Prem Ki Ghazab Kahani', 'Kaminey', 'Wake Up Sid', 'Dev.D', 'New York', 'Kambakkht Ishq', 'De Dana Dan'
  
    ],
    '2010': [
        'My Name Is Khan', 'Dabangg', 'Golmaal 3', 'Raajneeti', 'Once Upon a Time in Mumbaai', 'Ishqiya', 'I Hate Luv Storys', 'Action Replayy', 'Anjaana Anjaani', 'Guzaarish', 'Break Ke Baad', 'Band Baaja Baaraat', 'No Problem', 'Tees Maar Khan', 'Dil Toh Baccha Hai Ji', 'Yamla Pagla Deewana', 'Dhobi Ghat', 'Tanu Weds Manu', 'My Name Is Khan', 'Dabangg', 'Raajneeti', 'Housefull', 'Kites'
        // Add more movies from 2010
    ],
    '2011': [
      'Rockstar', 'Zindagi Na Milegi Dobara', 'No One Killed Jessica', 'The Dirty Picture', 'Tanu Weds Manu', 'Don 2', 'Pyaar Ka Punchnama', 'Delhi Belly', 'Murder 2', 'Singham', 'Mere Brother Ki Dulhan', 'Ra.One', 'Force', 'Desi Boyz', 'Bodyguard'
  ],
  '2012': [
      'Agneepath', 'Paan Singh Tomar', 'Kahaani', 'Vicky Donor', 'OMG: Oh My God!', 'Jab Tak Hai Jaan', 'Barfi', 'English Vinglish', 'Life of Pi', 'Cocktail', 'Raaz 3', 'Ek Tha Tiger', 'Student of the Year', 'Dabangg 2', 'Ferrari Ki Sawaari', 'Rowdy Rathore'
  ],
  '2013': [
      'Aashiqui 2', 'The Lunchbox', 'Shahid', 'Special 26', 'Kai Po Che', 'Madras Cafe', 'D-Day', 'Raanjhanaa', 'Lootera', 'RamLeela', 'Fukrey', 'Go Goa Gone', 'Channai Express', 'Aurangzeb', 'Bombay Talkies', 'Dhoom 3', 'Race 2'
  ],
  '2014': [
      'PK', 'Queen', 'Haider', 'Ugly', 'Highway', 'Hawaa Hawaai', 'Mardaani', '2 States', 'CityLights', 'Holiday: A Soldier is Never Off Duty', 'Mary Kom', 'Hasee Toh Phasee', 'Ek Villain', 'Khoobsurat', 'Bhoothnath Returns', 'Humpty Sharma Ki Dulhania', 'Kick', 'Happy New Year'
  ],
  '2015': [
      'Talvar', 'Bajrangi Bhaijaan', 'Baby', 'Dum Laga Ke Haisha', 'Tanu Weds Manu Returns', 'Bajirao Mastani', 'Dhrishyam', 'Badlapur', 'NH 10', 'Tamasha', 'Pyaar Ka Punchnama 2', 'Detective Byomkesh Bakshy!', 'Dil Dhadakne Do', 'Brothers', 'Hamari Adhuri Kahani', 'Neerja', 'Teraa Surroor', 'Jai Gangaajal', 'Kapoor & Sons', 'Rocky Handsome', 'Ki & Ka', 'Fan'
  ],
  '2016': [
      'Dangal', 'Airlift', 'Rainbow', 'Pink', 'Neerja', 'Madaari', 'Udta Punjab', 'M.S. Dhoni: The Untold Story', 'Dear Zindagi', 'Kapoor & Sons', 'Rustom', 'Te3n', 'Raman Raghav', 'Fan', 'Sultan', 'Wazir', 'Rocky Handsome'
  ],
  '2017': [
      'Raees','Hindi Medium', 'Secret Superstar', 'Newton', 'Toilet: A Love Story', 'Trapped', 'Jolly LLB 2', 'Mom', 'Kaabil', 'Tumhari Sulu', 'Shubh Mangal Savdhan', 'Lipstick Under My Burkha', 'Badrinath Ki Dulhania', 'Ittefaq', 'Tiger Zinda Hai', 'Jagga Jasoos'
  ],
  '2018': [
      'Andhadhun', 'Badhaai Ho', 'Raazi', 'Pad Man', 'Stree', 'Sanju', 'Padmaavat', 'October', 'Gold', 'Sonu Ke Titu Ki Sweety', 'Husband Material', 'Blackmail', 'Gold', 'Stree', 'Sui Dhaaga', 'Badhaai Ho', 'Namaste England', 'Thugs of Hindostan', '2.0', 'Kedarnath', 'Zero', 'Simmba', 'Uri: The Surgical Strike', 'Manikarnika: The Queen of Jhansi', 'Gully Boy', 'Total Dhamaal', 'Luka Chuppi', 'Kesari', 'Junglee',
  ],
  '2019': [
    'Uri: The Surgical Strike', ' Ek Ladki Ko Dekha Toh Aisa Laga', 'Manikarnika: The Queen of Jhansi', 'Gully Boy', 'Luka Chuppi', 'Badla', 'Kesari', 'Game Over', 'Kabir Singh', 'Super 30', 'Mission Mangal', 'Chhichhore', 'Dream Girl', 'War', 'Houseful 4', 'Mardaani 2', 'Pat Patni Aur Woh', 'Good Newwz', 'Kalank'
  ],
  '2020': [
    'Tanhaji: The Unsung Warrior', 'Chhapaak', 'Panga', 'Jawaani Jaaneman', 'Malang', 'Thappad', 'Angrezi Medium', 'Gulabo Sitabo', 'Dil Bechara', 'Raat Akeli Hai', 'Ludo'
    // Add more movies from 2020
  ],
  '2021': [
    'Sardar Udham', 'Shershaah', 'Mimi', 'Dhamaka', 'The White Tiger', 'Pagglait', 'Sooryavanshi', '83', 'Chandigarh Kare Aashiqui', 'Atrangi Re', 'Chehre', 'Haseen Dillruba'
    // Add more movies from 2021
  ],
  '2022': [
    'Dhrishyam 2', 'Monica, O My Darling', 'RRR', 'A Thursday', 'Brahmastra Part One: Shiva', 'Badhaai Do', 'Runway 34', 'The Kashmir Files', 'Major', 'Gangubai Kathiawadi', 'Doctor G', 'Gehraiyaan', 'Jug Jugg Jeeyo', 'Toolsidas Junior', 'Vikram Vedha', 'Sharmaji Namkeen', 'Jersey', 'Bhediya', 'Laal Singh Chaddha', 'Hit: The First Case', 'Darlings', 'An Action Hero'
    // Add more movies from 2022
  ],
  '2023': [
    'Pathaan', 'Jawan', 'Gulmohar', 'Tu Jhooti Main Makkaar', 'Mission Majnu', 'Chhatriwali', 'Bheed', 'Bholaa', 'Zara Hatke Zara Bachke', 'IB 71', 'Bloody Daddy', 'Mrs. Chatterjee vs. Norway', 'Sirf Ek Bandaa Kaafi Hai', 'Pushpa: The Rule - Part 2', ' U Turn', 'Animal',  'Mrs Undercover', 'Satyaprem Ki Katha', 'Gadar 2', 'OMG 3', 'Rocky Aur Rani Ki Prem Kahani'
    // Add more movies from 2023
    
  ],
'2024': [
  'Fighter', 'Bade Miyan Chote Miyan', 'Bhool Bhulaiyaa 3', 'Housefull 5', 'Singham Again', 'Kalki 2898-AD'
  // Add more movies from 2023
  
]
}
    
  }
  

  inputField.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      const userMessage = inputField.value.toLowerCase();
      const userMessageDiv = createMessageDiv("user-message", `User: ${userMessage}`);
      messagesContainer.appendChild(userMessageDiv);

      let botResponse = getBotResponse(userMessage, movieDatabase);

      const botMessageDiv = createMessageDiv("bot-message", `${botResponse}`);
      messagesContainer.appendChild(botMessageDiv);

      inputField.value = "";
    }
  });
});

function createMessageDiv(className, text) {
  const messageDiv = document.createElement("div");
  messageDiv.classList.add(className);
  messageDiv.textContent = text;
  return messageDiv;
}

function getBotResponse(userInput, movieDatabase) {
  if (movieDatabase.genres.hasOwnProperty(userInput)) {
    const genreMovies = movieDatabase.genres[userInput];
    const genreList = genreMovies.map(movie => `${movie}`).join(", ");
    return `Here are some Bollywood movies in the ${userInput} genre: ${genreList}`;
  }

  if (movieDatabase.years.hasOwnProperty(userInput)) {
    const yearMovies = movieDatabase.years[userInput];
    const movieList = yearMovies.map(movie => `${movie}`).join(", ");
    return `Here are some Bollywood movies from the year ${userInput}: ${movieList}`;
  }
  
  return "I'm here to help with Bollywood movie recommendations!\nTell me a genre (action, comedy, drama, romance, thriller, suspense, historical, etc.) or a year (1992 - 2023) for movie suggestions.";
}
 // Function to display messages in the chat
 function displayMessage(message, isUser = false) {
  const messageElement = document.createElement("div");
  messageElement.classList.add("message", isUser ? "user-message" : "bot-message");
  messageElement.innerText = message;
  messagesContainer.appendChild(messageElement);
}

// Greet the user
const initialGreeting = movieDatabase.greeting.response;
displayMessage(initialGreeting, false);

// Function to handle user input
function handleUserInput() {
  const userInput = inputField.value;
  // Process user input and generate bot response
  const botResponse = "This is a bot response based on user input: " + userInput;

  // Display user input and bot response
  displayMessage(userInput, true);
  displayMessage(botResponse, false);

  // Clear input field
  inputField.value = "";
}

// Event listener for user input
inputField.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    if (inputField.value.trim() !== "") {
      handleUserInput();
    }
  }
});