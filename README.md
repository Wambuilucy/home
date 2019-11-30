##Akan Name Generator
This repository contains code for a web application that assigns a user an Akan name depending on the day they were born and their gender.The current version is 2.0.0 beta
By Kinyanjui Lucy Wambui.
Description
The webpage simply consumes a users date of birth and gender and from an array of preset names selects one depending on the same. The names are borrowed from the popular Kan tribe of Ghana. The naming tradition is passed from one generation to another.

Behaviour Driven Development
Behavior Driven Development is a way of writing requirements that can be automatically turned into code for agile developers to automated testing of that feature.

Feature
As a I want to

See a small description of what the application does on the landing page.
Get my Akan name by supplying my gender and date of birth
Enter my birthday through a form
Choose what gender I am.
Click the submit button to see what my Akan name would be
Background: Given the following days of the week and corresponding day of birth depending on Gender

Days and Gender
Day	Male	Female
Sunday	Kwasi	Akosua
Monday	Kwadwo	Adwoa
Tuesday	Kwabena	Abenaa
Wednesday	Kwaku	Akua
Thursday	Yaw	Yaa
Friday	Kofi	Afua
Saturday	Kwame	Ama
SCENARIO: Enter birthdate and gender GIVEN:My Birthdate is 2019/9/22, and Gender is male WHEN: I ask for my Akan Name THEN: The system should give me Kwasi

SCENARIO:Enter invalid date or no gender or either GIVEN: My Birthdate is YY/MM/DD WHEN: I ask for my Akan Name THEN: The system should raise an error flag alerting me that the credentials are wrong

Setup Instructions
Open terminal and type >>> git clone https://github.com/Wambuilucy/ a Ghanian AkanNames.git to clone this project.You can also download it manually
After having a local copy navigate to me folder by >> cd AkanNames
Open the folder in your favourite editor for atom >>atom . for visual studio code >> code .
To run the website in your browser >> browser-name index.html
Technologies Used
HTML5-Used the box model to enhance some responsiveness
CSS3-Included state of the art styles and a blending color scheme. -hexadecimal,nomal and color.
FontAwesome Icons
Google fonts- To blend normal fonts therefore creating seamless user experience
Contact Information
Email -Wambuilucie99@gmail.com
Phone number- +254743997229
Contribution
In case of any issues drop it at https://github.com/Wambuilucy/a Ghanian AkanNames/issues
Ideas and Contributions are to be pushed by creating a pull request at https://github.com/WambuiLucy/A Ghanian AkanNames/pulls
License
License: MIT MIT License

Copyright (c) 2019 Wambuilucykinyanjui

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.


