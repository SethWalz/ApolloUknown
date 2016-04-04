#pragma strict
var prefab : Transform;
private var elapsedTime : float = 0;

function Update()
{

	if(elapsedTime >= 3){
		var rock = Instantiate(prefab,new Vector3(transform.position.x, transform.position.y ,transform.position.z),Random.rotation);
		rock.transform.localScale = Vector3.one * Random.Range(.3, .5);
		elapsedTime = 0;
	}else{
		elapsedTime += Time.deltaTime;
	}
}
