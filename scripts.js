
document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('resume-form');
  const generatedResume = document.getElementById('generated-resume');
  const nameField = document.getElementById('name');
  const emailField = document.getElementById('email');
  const phoneField = document.getElementById('phone');
  const usernameField = document.getElementById('username');
  const experienceField = document.getElementById('experience');
  const educationField = document.getElementById('education');
  const skillsField = document.getElementById('skills');

  const userName = document.getElementById('user-name');
  const userEmail = document.getElementById('user-email');
  const userPhone = document.getElementById('user-phone');
  const userExperience = document.getElementById('user-experience');
  const userEducation = document.getElementById('user-education');
  const userSkills = document.getElementById('user-skills');

  const editButton = document.getElementById('edit-resume');
  const downloadButton = document.getElementById('download-pdf');

  
  form.addEventListener('submit', function(e) {
    e.preventDefault(); 

    
    const name = nameField.value;
    const email = emailField.value;
    const phone = phoneField.value;
    const username = usernameField.value;
    const experience = experienceField.value;
    const education = educationField.value;
    const skills = skillsField.value.split(',').map(skill => skill.trim()); 
    userName.textContent = name;
    userEmail.textContent = email;
    userPhone.textContent = phone;

    
    userExperience.textContent = experience;
    userEducation.textContent = education;

    
    userSkills.innerHTML = '';
    skills.forEach(skill => {
      const skillItem = document.createElement('li');
      skillItem.textContent = skill;
      userSkills.appendChild(skillItem);
    });


    generatedResume.classList.remove('hidden');
    form.parentElement.classList.add('hidden');
  });

  
  editButton.addEventListener('click', function() {
    
    form.parentElement.classList.remove('hidden');
    generatedResume.classList.add('hidden');
  });

  
  downloadButton.addEventListener('click', function() {
    const element = document.getElementById('generated-resume');
    html2pdf()
      .set({
        margin: 1,
        filename: `${nameField.value}_Resume.pdf`,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
      })
      .from(element)
      .save();
  });
});
