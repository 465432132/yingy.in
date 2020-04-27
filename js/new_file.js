
window.onload =function(){
	
	
	const newp = document.querySelector('.border');
	const bb = document.querySelectorAll('.bb')
	
	 for(let i =0; i<newp.children.length; i++){
		   newp.children[i].addEventListener('click',function () {
			   console.log(this.dataset)
		  if(i == 0){
			newp.children[0].classList.add('background');
			newp.children[1].classList.remove('background');
			bb[1].style.display = 'none';
			bb[i].style.display = 'block';
		}else if(i == 1){
			newp.children[1].classList.add('background');
			newp.children[0].classList.remove('background');
			bb[0].style.display = 'none';
			bb[i].style.display = 'block';
		}

	 	
	 })
	 }
	
}