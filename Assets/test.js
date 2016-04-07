#pragma strict
 var hit:RaycastHit;
var pickedUpObject:GameObject;
 
 function FixedUpdate(){

var hit:RaycastHit;
var pickedUpObject:GameObject = null;

 if(Input.GetKey("e")){
	 if(Physics.Raycast(transform.position,transform.forward,hit,100)){//the order of the parameters might be wrong.
		 if(hit.collider.gameObject.tag=="DynamicObject"){ //i used a tag to see whether the object cn be picked up, you can use another method that may suit you better
			 pickedUpObject=hit.collider.gameObject; //we use this to determine whether an object is picked up by the player. If it's not null, then the player is doing so.
			 hit.collider.gameObject.transform.parent=transform; //attach the object to the camera so it moves along with it.
			 hit.collider.gameObject.transform.position=transform.position+transform.forward; //might need changing as it's untested.
		 }
		 }
	 }
	 else if(pickedUpObject!=null){ //if player is not holding E but was picking up an object last frame
		 pickedUpObject.transform.parent=null; //drop the object
		 pickedUpObject.transform.position=transform.position+transform.forward;
		 pickedUpObject=null;  //and nullify the object pointer
	 }
 }
 
