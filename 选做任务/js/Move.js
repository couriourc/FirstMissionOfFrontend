
			var rect = document.getElementById("rect");
			var speed;
			var direct;
			
			setInterval(function()
								{	
									var top = rect.offsetTop;
									var left = rect.offsetLeft;
									document.onkeydown = function(event){
											if(event.keyCode)
											{direct = event.keyCode;speed=10;}
											else {speed =0;}
											}
											switch(direct)
												{	case 37:
															rect.style.left = left - speed +"px";
															break;
													case 38:
															rect.style.top = top -speed + 'px';
															break;
													case 39:
															rect.style.left =left + speed +"px";
															break;
													case 40:
															rect.style.top =top + speed + 'px';
															break;
													default:
														console.log(top);
													}
											document.onkeyup = function(){
													speed = 0;
													direct = 0;
											}
										},30)