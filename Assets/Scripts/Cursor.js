#pragma strict

     var mouse : Vector2;
     var w : int = 32;
     var h : int = 32;
     var cursor : Texture2D;
     
     function Start()
     {
         Screen.showCursor = false;
         Screen.lockCursor = true;
     }
     
     function Update()
     {
         mouse = new Vector2(Input.mousePosition.x, Screen.height - Input.mousePosition.y);
     }
     
     function OnGUI()
     {
         GUI.DrawTexture(new Rect(mouse.x - (w / 2), mouse.y - (h / 2), w, h), cursor);
     }