# cornwall-dyslexia-support
This is my first Flagstone project: a website for a local business that offers everything from free advice and support to full diagnostic assessments, including Disabled Students’ Allowance (DSA). For this project, I’ll be documenting as much of the process as possible so I can see where my strengths really are and where I need to level up—especially when it comes to planning and building responsive, accessible webpages with a strong user experience.

A key part of this journey will be the peer feedback and reviews I receive along the way. I expect that input to be incredibly valuable; seeing my work through someone else’s perspective helps me spot things I might overlook and pushes me to improve. I also want to get a better feel for the “plan first, build after” workflow and understand how long different tasks actually take. This will help me estimate realistic timeframes for future real-world projects.

The website itself is a simple static site designed to give users the information they need to decide whether this business is the right place for them to request an assessment. Clear communication is essential—users should immediately understand who Cornwall Dyslexia Support are, what services they offer, and how to contact them.

Because most people now browse on mobile devices, a mobile-first approach was essential. The site needed to be fully responsive so that the information stays clear, accessible, and easy to navigate on any screen size.

Accessibility was another major priority. With no specific target audience, the site needed to stay general, conventional, and friendly to absolutely everyone. That meant using a clear, readable layout, proper semantic structure, and design choices that avoid excluding users—regardless of their abilities, their device, or their confidence with technology.

Taking all of this into account, I kept the design simple and traditional while still meeting the client’s requirements and presenting the content they provided. I divided the page into clear sections containing the client's requested images and pre-written text, which helped me structure the content effectively. I’m confident the final design feels user-friendly, informative, and accessible.

Responsiveness should not be an issue, since the layout remains consistent across all devices. The navigation bar only changes slightly between breakpoints and stays fixed at the top, with a burger menu included for smaller screens—an essential feature for long pages. I added three anchor-link buttons beneath the main heading and subheading to help users jump to key sections without feeling overwhelmed or lost.

I also wanted to include a light/dark—or alternative colour—theme toggle to make the site more comfortable to use, especially for users who may be dyslexic or sensitive to certain colour contrasts. The client also requested quotes alongside images, which I think help make the page feel fuller, more engaging, and a bit inspirational.

Finally, I kept the contact information very clear, since contacting the business is the user’s main gateway to arranging assessments and reports. I added a social media bar at the bottom as an optional enhancement; even though the client doesn’t currently use social media, it demonstrates that I can implement it if needed in the future.

I created my wireframes in Figma. Even though I’ve used Figma before, I found it challenging to adapt to working across multiple canvases, so next time I’ll likely try Balsamiq instead.
<img width="2711" height="5034" alt="Flagstone Design 1" src="https://github.com/user-attachments/assets/343f5fc9-13b2-4200-8a2e-a720d41698f0" />

Target Audience - 
The target audience includes anyone who may benefit from dyslexia-related support, whether they’re seeking free advice, general guidance, or full diagnostic assessments, including Disabled Students’ Allowance (DSA). The site is designed for users who want clarity, reassurance, or formal assessment options, regardless of their background or level of digital confidence.

SEO - 
To improve discoverability and ensure users can find the service online, I added a site description and key metadata to the <head> of the index.html file. This helps search engines understand the site’s purpose, boosts SEO rankings, and increases the overall visibility of the website.

Project outcomes I hope to achieve:

- Design and develop a static website using HTML, CSS and JavaScript.
- Apply user experience, accessability and resposiveness princibles.
- Test and deploy the website through all development stages.
- Use documentation and structure to ensure maintainability.
- Deploy the final site to a GitHub Pages.
- Demonstrate version control using GitHub.

Project Goals- 
My goal is to build a fully functional, responsive webpage that stays faithful to my design plans and meets all recommended criteria. This includes documenting testing, providing screenshots, and presenting all evidence clearly in the README file.. 

Project Features- 
- One fully responsive homepage
- Clear content sections for different types of information
- Anchor-link buttons for fast navigation
- Embedded images throughout the layout
- A back-to-top button that appears during scrolling
- A floating theme-toggle switch (light/dark mode)
- Contact details with working clickable links
- Social media icons linked to external sites

Design Details- 
The visual design includes a simple colour palette, a theme toggle, accessible colour contrast checks, and iconography provided through Font Awesome. Consistency and readability were key priorities to make the site as user-friendly as possible.

Naviagation Structure- 
The site features a consistent horizontal navigation bar displayed at the top of every device size. On desktop, the links appear in a single row; on mobile and tablet, the navigation collapses into a burger menu to maintain clarity and ease of use.

User Stories -
⦁	Homepage Clarity
As a parent, I want a clear overview of what dyslexia assessments involve so that I can decide if this service is suitable for my child.
⦁	Accessibility Comfort – Student User
As a student, I want the homepage to be easy to read and accessible so that I don’t feel overwhelmed.
⦁	Quick Contact – Teacher User
As a teacher, I want to quickly find assessment and contact information so that I can refer a student easily.
⦁	Mobile Navigation – Mobile User
As a mobile user, I want a responsive layout with clear sections and a back-to-top button so that I can move around the page easily.
⦁	Light/Dark Mode – Returning User
As a returning user, I want a light/dark theme toggle so that I can choose the view that’s most comfortable for my eyes.

Colour Palette
I used a simple two-colour palette that alternates when the theme toggle is switched. These colours were chosen with accessibility in mind and were advised by my AI co-pilot to help maintain readability and comfort for users who may be sensitive to certain contrasts.
<img width="1291" height="211" alt="colour pallet" src="https://github.com/user-attachments/assets/68f17b05-45d4-4984-af6d-c3898d5db389" />

Chat GBT suggestion for hex colour pallete for a dyslexia support website:
Calming (not overstimulating), accessible (high contrast, dyslexia-friendly), professional & trustworthy, warm, not clinical, avoids harsh pure blacks & whites (these cause visual stress for dyslexic readers).

Testing and Validation -

HTML Validator: I used the W3C Markup Validation Service to check my HTML for any syntax errors or issues. No issues, just unnecessary warnings.
<img width="1833" height="888" alt="html checker" src="https://github.com/user-attachments/assets/db4b7553-bb01-4350-b608-de4e2a2631fd" />
CSS Validator: The W3C CSS Validation Service helped me ensure my stylesheets were error-free and followed best practices. No errors found.
<img width="1893" height="902" alt="css checker" src="https://github.com/user-attachments/assets/f5f9a3be-3b6a-4795-a4cf-154caab3d9a3" />
Autoprefixer for CSS: I used Autoprefixer to automatically add vendor prefixes to my CSS rules, ensuring better compatibility with different browsers such as Opera and Safari.
<img width="1898" height="906" alt="autoprefixer usage" src="https://github.com/user-attachments/assets/c4122ae2-bf64-4e3e-85b9-154b8904a53e" />
Lighthouse: I used Lighthouse to audit my site for performance, accessibility, and SEO best practices. This gave me a reliable way to score the site and identify specific improvements to increase overall quality. I tested the mobile version first, and my initial performance score was low, so I began optimising the site step-by-step.
My first action was to compress all images using Optimizilla, then convert them back into WebP format through CloudConvert. After replacing the original files, my performance score increased to around 80. On my next attempt, I improved the score to 85 by adding fetchpriority="high" to the hero image and applying loading="lazy" to all other images. I also added a preconnect to Google Fonts to reduce loading time.
I continued experimenting by adding explicit width and height attributes to images, but this didn’t improve the score and sometimes caused it to drop. I then tried preloading my main stylesheet using:

<link rel="preload" href="assets/css/style.css" as="style">

and added another preconnect for the CDN hosting Bootstrap resources. This brought the score to around 82.
After reviewing the Lighthouse analytics more closely, I decided to reduce the maximum width of my images to 1000px to make them lighter and more mobile-friendly. I did this using LunaPic, converted them back into WebP, and replaced the original files. However, this unexpectedly caused the performance score to fall to 68.
Because this created more issues than improvements, I chose to revert the project back to a previous GitHub version from before I started experimenting with Lighthouse. I kept the compressed WebP images but restored the rest of the layout and assets to a stable point so I could continue optimising from a clean baseline.

<img width="1917" height="885" alt="last lighthouse test" src="https://github.com/user-attachments/assets/fa72850a-4041-41d3-91c5-6a6b5bf41551" />

My desktop analytics report came off better.
<img width="1916" height="880" alt="desktop report" src="https://github.com/user-attachments/assets/06209509-08b3-43de-a9eb-ad3a3ff61775" />










