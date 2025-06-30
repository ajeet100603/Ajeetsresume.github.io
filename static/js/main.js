// Custom JS can go here

// Function to generate and download PDF resume using jsPDF
function downloadResume() {
    // Show loading message
    const button = event.target;
    const originalText = button.innerHTML;
    button.innerHTML = 'Generating PDF...';
    button.disabled = true;

    // Create a temporary div to hold the resume content
    const tempDiv = document.createElement('div');
    tempDiv.style.position = 'absolute';
    tempDiv.style.left = '-9999px';
    tempDiv.style.top = '0';
    tempDiv.style.width = '800px';
    tempDiv.style.padding = '20px';
    tempDiv.style.backgroundColor = 'white';
    tempDiv.style.fontFamily = 'Arial, sans-serif';
    tempDiv.style.fontSize = '12px';
    tempDiv.style.lineHeight = '1.4';
    
    // Resume content
    tempDiv.innerHTML = `
        <div style="text-align: center; border-bottom: 2px solid #0d6efd; padding-bottom: 20px; margin-bottom: 30px;">
            <h1 style="color: #0d6efd; margin: 0; font-size: 24px;">Ajeet Singh</h1>
            <p style="margin: 5px 0; color: #666;">Aspiring Full Stack Developer | Java & Python Enthusiast | Cybersecurity Learner</p>
            <div style="display: flex; justify-content: space-between; margin-top: 10px;">
                <span>📧 ajeetsing169@gmail.com</span>
                <span>📱 +91-6367231278</span>
                <span>📍 Bharatpur, Rajasthan, India</span>
            </div>
        </div>

        <div style="margin-bottom: 20px;">
            <h2 style="color: #0d6efd; border-bottom: 1px solid #ddd; padding-bottom: 5px; font-size: 18px;">Professional Summary</h2>
            <p>Motivated MCA student with strong skills in Java, Python, and web development. Knowledgeable in cybersecurity and SDLC. Quick learner with problem-solving abilities and a passion for building practical tech solutions.</p>
        </div>

        <div style="margin-bottom: 20px;">
            <h2 style="color: #0d6efd; border-bottom: 1px solid #ddd; padding-bottom: 5px; font-size: 18px;">Experience</h2>
            <div style="margin-bottom: 15px;">
                <h3 style="margin: 0; color: #333; font-size: 16px;">Full Stack Developer Intern</h3>
                <h4 style="margin: 5px 0; color: #666; font-weight: normal; font-size: 14px;">Codec Technologies Pvt. Ltd.</h4>
                <p style="margin: 5px 0;"><strong>Jan 2025 to May 2025</strong></p>
                <p>Completed a 4-month AICTE & ICAC approved internship, gaining hands-on experience in full-stack development.</p>
            </div>
            <div style="margin-bottom: 15px;">
                <h3 style="margin: 0; color: #333; font-size: 16px;">Web Development Intern</h3>
                <h4 style="margin: 5px 0; color: #666; font-weight: normal; font-size: 14px;">Cognifyz Technologies • Internship</h4>
                <p style="margin: 5px 0;"><strong>Offer Date: November 2024</strong></p>
                <p>Selected for a web development internship to work on various projects, build scalable solutions, and ensure seamless user experiences. Proficient in both front-end and back-end development.</p>
            </div>
        </div>

        <div style="margin-bottom: 20px;">
            <h2 style="color: #0d6efd; border-bottom: 1px solid #ddd; padding-bottom: 5px; font-size: 18px;">Skills</h2>
            <p><strong>Frontend:</strong> HTML (90%), CSS (85%), JavaScript (75%)</p>
            <p><strong>Backend:</strong> Java (85%), Python (80%)</p>
            <p><strong>Other:</strong> Bootstrap, Cybersecurity, SDLC, Debugging, Problem Solving</p>
        </div>

        <div style="margin-bottom: 20px;">
            <h2 style="color: #0d6efd; border-bottom: 1px solid #ddd; padding-bottom: 5px; font-size: 18px;">Education</h2>
            <div style="margin-bottom: 10px;">
                <h3 style="margin: 0; color: #333; font-size: 16px;">Master of Computer Applications (MCA)</h3>
                <h4 style="margin: 5px 0; color: #666; font-weight: normal; font-size: 14px;">University of Kota • 2024–Present</h4>
            </div>
            <div style="margin-bottom: 10px;">
                <h3 style="margin: 0; color: #333; font-size: 16px;">Bachelor of Science (B.Sc.)</h3>
                <h4 style="margin: 5px 0; color: #666; font-weight: normal; font-size: 14px;">Maharaja Murajmal Brij University, Bharatpur • 2021–2023</h4>
            </div>
        </div>

        <div style="margin-bottom: 20px;">
            <h2 style="color: #0d6efd; border-bottom: 1px solid #ddd; padding-bottom: 5px; font-size: 18px;">Projects</h2>
            <div style="margin-bottom: 15px;">
                <h3 style="margin: 0; color: #333; font-size: 16px;">Resume Builder Web Application</h3>
                <p>Developed a responsive resume builder using HTML and CSS with an intuitive user interface for creating customized resumes.</p>
                <p><strong>Technologies:</strong> HTML, CSS, JavaScript</p>
            </div>
        </div>

        <div style="margin-bottom: 20px;">
            <h2 style="color: #0d6efd; border-bottom: 1px solid #ddd; padding-bottom: 5px; font-size: 18px;">Certifications</h2>
            <ul style="margin: 0; padding-left: 20px;">
                <li>Online Skilling Course on Cybersecurity - Tech Mahindra Foundation & Skill India (Completed May 2025)</li>
                <li>Workshop on Prompt Engineering & AI in Software Development - University of Kota (Aug 2024)</li>
                <li>RSCIT Certificate – VMOU, Kota (2021)</li>
            </ul>
        </div>

        <div style="margin-bottom: 20px;">
            <h2 style="color: #0d6efd; border-bottom: 1px solid #ddd; padding-bottom: 5px; font-size: 18px;">Contact & Links</h2>
            <p><strong>LinkedIn:</strong> linkedin.com/in/ajeetsingh</p>
            <p><strong>GitHub:</strong> github.com/ajeet100603</p>
        </div>
    `;
    
    document.body.appendChild(tempDiv);

    // Use html2canvas to capture the content
    html2canvas(tempDiv, {
        scale: 2,
        useCORS: true,
        backgroundColor: '#ffffff'
    }).then(canvas => {
        // Remove the temporary div
        document.body.removeChild(tempDiv);
        
        // Create PDF using jsPDF
        const { jsPDF } = window.jspdf;
        const pdf = new jsPDF('p', 'mm', 'a4');
        
        const imgData = canvas.toDataURL('image/png');
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = pdf.internal.pageSize.getHeight();
        const imgWidth = pdfWidth;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        
        let heightLeft = imgHeight;
        let position = 0;
        
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pdfHeight;
        
        // Add new pages if content is longer than one page
        while (heightLeft >= 0) {
            position = heightLeft - imgHeight;
            pdf.addPage();
            pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
            heightLeft -= pdfHeight;
        }
        
        // Download the PDF
        pdf.save('Ajeet_Singh_Resume.pdf');
        
        // Reset button
        button.innerHTML = originalText;
        button.disabled = false;
    }).catch(error => {
        console.error('Error generating PDF:', error);
        // Fallback to print method
        const resumeWindow = window.open('static/resume.html', '_blank');
        resumeWindow.onload = function() {
            setTimeout(() => {
                resumeWindow.print();
            }, 1000);
        };
        
        // Reset button
        button.innerHTML = originalText;
        button.disabled = false;
    });
}

// Add event listeners to all download resume buttons
document.addEventListener('DOMContentLoaded', function() {
    const downloadButtons = document.querySelectorAll('a[href="static/resume.pdf"]');
    
    downloadButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            downloadResume();
        });
    });
});

// Initialize AOS animations
document.addEventListener('DOMContentLoaded', function() {
    if (typeof AOS !== 'undefined') {
        AOS.init();
    }
}); 