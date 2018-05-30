<h1>Node with React : Fullstack Web Development</h1>
<h3>by Stephen Grider in www.udemy.com</h3>
<h4>https://github.com/StephenGrider/FullStackReactCode<h4>
<hr>
<br />
<h3>Overview</h3>
Someone uses startup owner’s app/service <br />
- Startup owner wants feedback<br />
- Send customer an email requesting feedback<br />
- Get tabulation of results<br />
- Make app/service better with feedback<br />
<br />
<h3>How to make it & Tech Stack</h3>
- User signs up via GoogleOAuth(Express server + MongoDB + PassportJS)<br />
- User pays for email credits via stripe(Stripe + MongoDB)<br />
- User creates a new ‘campaign’(React + Redux)<br />
- User enters list of emails to send survey to(React + Redux + Redux Form)<br />
- We send email to list of surveys(Email Provider)<br />
- Surveyees click on link in email to provide feedback(Email Provider + Express + MongoDB)<br />
- We tabulate feedback(MongoDB)<br />
- User can see report of all survey responses(MongoDB + React + Redux)<br />
