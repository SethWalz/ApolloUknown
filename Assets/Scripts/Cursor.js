#pragma strict

     var mouse : Vector2;
     var w : int = 32;
     var h : int = 32;
     var cursor : Texture2D;
     var loadCursor : Texture2D;
     var regular : boolean = true;
     var load : boolean = false;
     var distance : int = 2;
     
     var picked: GameObject = null;
     var speed : int;
     var friction : float;
     var lerpSpeed : float;
     private var xDeg : float;
     private var yDeg : float;
     private var zDeg : float;
     private var fromRotation : Quaternion;
     private var toRotation : Quaternion;
     
     function Start()
     {
         Screen.showCursor = false;
         Screen.lockCursor = true;
     }
     
     function Update()
     {
     	var hit:RaycastHit;
		var pickedUpObject:GameObject;
		
        mouse = new Vector2(Input.mousePosition.x, Screen.height - Input.mousePosition.y);
        if(Physics.Raycast(transform.position,transform.forward,hit,100) && hit.distance < distance){
        	if (hit.collider.gameObject.tag == "Load"){
        		regular = false;
        		load = true;
        	}
        }
        else{
        	regular = true;
        	load = false;
        }
        
		if(Input.GetButton("Fire1")){
        	if(Physics.Raycast(transform.position,transform.forward,hit,100)){//the order of the parameters might be wrong.
			 	if(hit.collider.name == "LoadCrash" && hit.distance < distance){
			 		Application.LoadLevel("crashLandingFromCave");
			 	}
			 	else if(hit.collider.name == "LoadCave"){
			 		Application.LoadLevel("cave");
			 	}
			 	if(hit.collider.gameObject.tag == "DynamicObject"){
			 		picked = hit.collider.gameObject;
			 		xDeg -= Input.GetAxis("Mouse X") * speed * friction;
			 		yDeg += Input.GetAxis("Mouse Y") * speed * friction;
			 		zDeg += Input.GetAxis("Mouse Y") * speed * friction;
			 		fromRotation = picked.transform.parent.rotation;
			 		toRotation = Quaternion.Euler(0,xDeg,0);
			 		picked.transform.parent.rotation = Quaternion.Lerp(fromRotation, toRotation, Time.deltaTime * lerpSpeed);
			 		
			 		
			 		//picked = hit.collider.gameObject;
			 		//picked.transform.rotation = Quaternion.AngleAxis(180, mouse);
			 		//hit.collider.gameObject.transform.parent=transform; //attach the object to the camera so it moves along with it.
			 		//hit.collider.gameObject.transform.position=transform.position+transform.forward; //might need changing as it's untested
			 	}
			 	
			}
		}
		else if(picked != null){
			//picked.transform.parent=null;
			picked = null;
		}
     }
     
     function OnGUI()
     {
     	if(regular)
        	GUI.DrawTexture(new Rect(mouse.x - (w / 2), mouse.y - (h / 2), w, h), cursor);
     	else if(load)
     		GUI.DrawTexture(new Rect(mouse.x - (w / 2), mouse.y - (h / 2), w, h), loadCursor);
     }