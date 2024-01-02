const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
// <⚠️ /DONT DELETE THIS ⚠️>

/*
✅ The text of the title should change when the mouse is on top of it.
✅ The text of the title should change when the mouse is leaves it.
✅ When the window is resized the title should change.
✅ On right click the title should also change.
✅ The colors of the title should come from a color from the colors array.
✅ DO NOT CHANGE .css, or .html files.
✅ ALL function handlers should be INSIDE of "superEventHandler"
*/

const select = document.querySelector("h2");

const superEventHandler = {
  mouse_On: function () {
    select.style.color = "#1abc9c";
    select.innerText = "Mouse is here!";
  },

  mouse_Leave: function () {
    select.style.color = "#3498db";
    select.innerText = "Mouse is gone";
  },

  window_Resize: function () {
    select.style.color = "#9b59b6";
    select.innerText = "You just resized!";
  },

  mouse_Right: function () {
    select.style.color = "#f39c12";
    select.innerText = "That was a rightclick!";
  },
};

select.addEventListener("mouseover", superEventHandler.mouse_On);
select.addEventListener("mouseleave", superEventHandler.mouse_Leave);
window.addEventListener("resize", superEventHandler.window_Resize);
document.addEventListener("contextmenu", superEventHandler.mouse_Right);
