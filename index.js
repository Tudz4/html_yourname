document.addEventListener('DOMContentLoaded', () => {
    const submitBtn = document.querySelector('#submit-btn');
  
    submitBtn.addEventListener('click', (event) => {
      event.preventDefault();
      const fullName = document.querySelector('#Fullname').value;
      const bio = document.querySelector('#message').value;
      const education = document.querySelector('#education').value;
      const skills = document.querySelector('#skills').value;
      console.log(`Full name: ${fullName}`);
      console.log(`Your Bio: ${bio}`);
      console.log(`Your Education and/or Professional Experiences: ${education}`);
      console.log(`Your Skills: ${skills}`);
    });
  });