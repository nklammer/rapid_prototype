# Rapid Prototype: Open-Source Software for UN Sustainable Development Goals

## Product Requirements Document

App in one sentence: A directory for open source software projects that touch the UN Sustainable Development Goals.

### Goals
Social signaling

Quality over quantity

Lowest barrier call to action

simplicity over full-featuredness

UX design should be a joy to use

get more than 1300 page visits

### Personas
* GH OSS User
  * Location: Canada, USA, UK, India, Austrailia, Germany, Hong Kong...
  * Skills: Educated or self-taught, GitHub GUI, beginner IDE, AI prompting
  * Occupation: student, academic, researcher, data analyst, hobbyist
  * Age: 20-35

### P0 - MVP
* cards lisiting the GitHub project
* filter by SDG goal
* ~~search bar~~ (moved to P1)

### Not Doing
* \# of forks of a repo
* user accounts
* mobile OS

### Requirements
#### Backend
Data Schema
**P0**
* Project Name: {string which is the GitHub repo name}
* SDG Tag Type List: {a list of types SDG1 | SDG2 | ... | SDG17}
* Technology Type: {python | tailwind | etc.}
* Project URL: {string which is a GitHub repo URL}
* Applicable Geographic Area Type: {Global | Oceania | North American | ...}
* Subject Matter Type List: {a list of types Climate | Public Health | ...}

**P1**
* Stars (GitHub metric): {int which is the GitHub repo # stars pulled from API}
* Contributors (GitHub metric): {int which is the GitHub repo # contributors pulled from API}
* Last Update (GitHub metric): {date string e.g., "2024-03-15" pulled from API}

### Prior Art

* [The Proton Types Open Sustainable Technology directory.](https://github.com/protontypes/open-sustainable-technology)
A directory and analysis of the open source ecosystem in the areas of climate change, sustainable energy, biodiversity and natural resources.


* There was an Indian woman who was building a project in Next.js for projects similar to the Sidelist project on Bubble.io [placeholder link]()

## Goals
* Get experience with modern web apps, the most scalable way to spread initiatives/businesses
* Get experience with quick prototyping app tools
* Gain experience in Product Requirements Document
problem statement
overview
wireframes
functional requirements
key metrics
Gain xp in stakeholder validation and incorporating feedback
Demonstrate web and UI design skills (web app should like great to convey ease-of-use [lessons learned from PowerBI])
Gain first experience in instrumentation and analytics
Get the product in front of users to gain market research experience - user testing, user stories, actionable items, etc.
Think about and gain xp in GTM (virality, pluggability, social media components, channels to reach)
Think about and gain xp in marketing (SEO, placement, promotion, channels, etc.)
Create a vision for a user experience that is very accessible, very universal (USP)
The directory should be managed and limited to a few in number...less choice is better, more choice is worse (USP)



similar adjacent: https://github.com/MunGell/awesome-for-beginners#python
https://up-for-grabs.net/#/
Key idea: people want to be recognized. Use good contributor profiles with photos.
https://www.linuxfoundation.org/research/open-source-sustainability Linux Foundation is a supporter in this space


ProtonTypes
YouTube: https://www.youtube.com/watch?v=uTbj70jb2hU
Analysis on the topic: https://report.opensustain.tech/chapters/index.html
Similar adjacent: https://opensustain.tech/
Similar adjacent; first-timers: https://climatetriage.com/

### Bolt Prompts

#### 0-shot prompt
Create a directory of open-source software projects that contribute to the UN Sustainable Development Goals. The directory should be browsable by cards, with each card representing a project. Each card should include a project name, a brief description, and a link to the project's repository. Users should be able to filter the directory by the Sustainable Development Goals that each project contributes to. Use Next.js framework to build. Use the UI and aesthetics of the attached images as design prototypes.

- led to 5 errors, that Bolt was able to fix on its own

- saw immediate value, paid $20/mo tier

#### 1-shot prompt
When the user clicks on the card, I want a focus view, where the main pane blurs and the card flips around to the back side where there is project details. Use the attached design prototype.

#### 2-shot prompt
Create an attractive landing page using the attached image as a design prototype. The part of the text that says "dynamicTextSDG" should be dynamic and rotate rolodex style through the different sustainable design goals.

- value prop is so strong, I'm emotionally in disbelief

#### 3-shot prompt
I want to add a call to action page that follows from the landing page. The call to action page should have the user select a SDG goal from the dropdown list. The icon and description should then change accordingly. Use the attached image as a design prototype. The choice on this Call To Action page should then land the user on the home page with a filter pre-selected based on their choice.

- Bolt ai responds: Note: You'll need to add SDG icons to the public/sdg-icons directory with the naming pattern "E-WEB-Goal-XX.png" (where XX is the padded goal number, e.g., "01").