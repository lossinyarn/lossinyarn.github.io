// Function to fetch recent items
function fetchRecentItems() {
  // Replace with your actual API call
  const items = [
    {
      title: "Bardの紹介(Bado no Sh...",
      description: "How can I help you today?"
    },
    {
      title: "Image Processing Error",
      description: ""
    },
    {
      title: "Telethon для бота-пар...",
      description: ""
    },
    {
      title: "Aiogram Error Resolved...",
      description: ""
    },
    {
      title: "Bard: Code, write, translate...",
      description: "Generate different creative text formats,  like poems, code, scripts, musical pieces, email, letters, etc. I will try my best to fulfill all your requirements."
    }
  ];

  // Update the UI with fetched items
  const itemsContainer = document.querySelector('.recent .items');
  itemsContainer.innerHTML = ''; // Clear existing items

  items.forEach(item => {
    const itemElement = document.createElement('div');
    itemElement.classList.add('item');
    itemElement.innerHTML = `<h3>${item.title}</h3><p>${item.description}</p>`;
    itemsContainer.appendChild(itemElement);
  });
}

// Call the function to fetch items on page load
fetchRecentItems();

// Add event listeners for buttons (replace with your functionality)
const generateImageButton = document.querySelector('.generate-image-button');
generateImageButton.addEventListener('click', function() {
  // Implement your image generation logic here
});

// ... add event listeners for other buttons
