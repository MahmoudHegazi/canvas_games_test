# canvas_games_test
this js small library hellp developers to work with canvas and shapes, and it provide custom javascript events to deal with shapes on canvas as it html elements normaly event listeners
for example on mouseenter of shape or group of shapes, or mouseout, or click, (premuim) on shape drag start and on shape drag end and provide way to clear shapes, and redraw map with object of diffrent shapes, all library dynamic supported

![image](https://user-images.githubusercontent.com/55125302/196030163-36915509-1532-4733-bb89-beb98d917dd5.png)


##### canvasEvents Come with on event item drag start based on javascript other mouse related html element events to accurate events like it generated by js event listener itself (for cavnas reacts and shape)

as we can see first on drag start fired, and then drag event keep firing while user hold the shape/mouse and keep moving the mouse, and finally on drag relase that end both on drag start and on drag evens fired one time at end (due to work async with js/jquery events)


![image](https://user-images.githubusercontent.com/55125302/196045211-4e89ab33-30ab-4280-a632-a3b880fcd52e.png)

600 means it waits 600 miliseconds to confirm the user is holding mouse to start drag event detecters, for example if user hold the mouse for 100miliseconds and relased this not consider drag event becuase it normal timeout for click vs drag element, so this number let you set how many time to wait to call before fire drage start event, browsers can not do that for drag start normal event.
