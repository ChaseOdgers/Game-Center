Hello! I will be detailing here a summery of each file in this source folder.

Overall goal of this game:
	The purpose that was sent for this game was a tower defense game but for students. The students will have to fight life problems, procrastination, and temptations to be a bad student.
	The more adversaries(the mob) that they fight off the stronger the willpower(points) will become. You can use the willpower to buy upgrades for your five defenders: mental health, physical health, sleep, social, and study.
	These five defenders are what will defend you against the adversaries.



File layout:

Student Actions
	This file solely contains the student object and the prototype of how to manipulate the student object

Game generation
	This file will handle the initial document layout and will listen for which difficulty the player will want. After that it will pass it to the game file.

Game
	This file will handle the bulk of gaming process. This is where the frame will loop to progress the game. Game will then call the other files from here.

Adversaries
	This file houses all the 'mobs' of this tower defense game. They have all the methods available for adversaries.
	Adversaries main purpose to lower the student's five defenders and lower the grade.

Life event
	Same as adversaries. However life event is random in which it can harm the student or benefit them.

Commitments
	These are the player controls that the player can call upon from game. 
	Commitments function as improvements for the five defenders at a cost of willpower.

