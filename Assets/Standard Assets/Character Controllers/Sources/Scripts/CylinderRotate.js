#pragma strict
var myDegreeX = 50; 
var myDegreeY = 50; 
var myDegreeZ = 50; 
var mySpeed = float;


function Update () {
	transform.Rotate(myDegreeX*Time.deltaTime,myDegreeY*Time.deltaTime,myDegreeZ*Time.deltaTime);
}