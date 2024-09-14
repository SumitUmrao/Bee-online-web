// section 2
document.querySelector('.learn-more').addEventListener('mouseover', function () {
    document.querySelector('.arrow').style.marginLeft = '10px';
  });
  
  document.querySelector('.learn-more').addEventListener('mouseout', function () {
    document.querySelector('.arrow').style.marginLeft = '5px';
  });
  
//Section 3

document.querySelectorAll('.social-icons i').forEach(icon => {
    icon.addEventListener('mouseover', () => {
      icon.style.color = '#4a9f23';
    });
  
    icon.addEventListener('mouseout', () => {
      icon.style.color = '#8bbf57';
    });
  });

  // section 4

  document.getElementById("newsletterForm").addEventListener("submit", function (event) {
    event.preventDefault();
    
    const emailInput = document.getElementById("emailInput").value;
    const errorMessage = document.getElementById("error-message");
    
    // Regular expression for email validation
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    
    if (!emailPattern.test(emailInput)) {
      errorMessage.textContent = "Please enter a valid email address.";
      errorMessage.style.display = "block";
    } else {
      errorMessage.style.display = "none";
      alert("Subscribed successfully!");
      // You can add additional code here to handle the form submission (e.g., AJAX request).
    }
  });
  
  