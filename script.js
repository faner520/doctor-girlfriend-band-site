var opened = false;

var checkBrowser = function(){
				var isMobile = false; //initiate as false
				// device detection
				if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))){
				    isMobile = true;
				}
				if(isMobile){
					$(".buttonText").css({"Opacity":"1"});
				}
			}
		//This is the radial menu
		$(document).ready(function(){
			setTimeout(function(){
				$(".logoContainer").css({"background-color":"#FF0087", "cursor":"default"});
				$(".logoContainer").animate({"width":"100%", "height":"100%", "top":"0px", "left":"0px", "border-radius":"0px", "border":"0px"});
				$(".hideMe").delay(500).fadeIn(250);
				$(".d").hide(0);
				$(".logoText").css({"color":"#FFBB00"});
			},1500);
			var items = document.querySelectorAll('.circle a');
			
			for(var i = 0, l = items.length; i < l; i++) {
			  items[i].style.left = (50 - 35*Math.cos(-0.5 * Math.PI - 2*(1/l)*i*Math.PI)).toFixed(4) + "%";
			  items[i].style.top = (50 + 35*Math.sin(-0.5 * Math.PI - 2*(1/l)*i*Math.PI)).toFixed(4) + "%";
			}
			var open = false;
			$('.menu-button').click(function(e) {
			   e.preventDefault(); document.querySelector('.circle').classList.toggle('open');
			   if (!open){
			   	$(this).css({"transform":"rotate(180deg)"});
			   	open = true;
			   }else{
				   $(this).css({"transform":"rotate(0deg)"});
				   open = false;
			   }
			});
			checkBrowser();
			$(".backArrow").click(function(){
				$(".backArrow").fadeOut(250);
				setTimeout(function(){
					$(".albumInfo").fadeOut(500);
					$(".albumsCover, .bandCover, .bookCover, .showsCover").animate({
						"top":"50%",
						"left":"50%",
						"height":"0",
						"width":"0",
						"border-radius":"100%"
					});
					$(".hideMe").fadeIn(250);
					$(".logoText").fadeIn(250);
					$(".show").fadeOut(250);
				},250);
			})
			$("#albums").click(function(e){
				e.preventDefault(); document.querySelector('.circle').classList.toggle('open');
				$(".hideMe").fadeOut(250);
				$(".logoText").fadeOut(250);
				$(".albumInfo").fadeIn(250);
				$(".albumsCover").animate({
					"top":"0px",
					"left":"0px",
					"height":"100%",
					"width":"100%",
					"border-radius":"0px"
				});
				setTimeout(function(){
					runBackArrow();
				},500)
			});
			$("#band").click(function(e){
				e.preventDefault(); document.querySelector('.circle').classList.toggle("open");
				$(".hideMe").fadeOut(250);
				$(".logoText").fadeOut(250);
				$(".bandCover").animate({
					"top":"0px",
					"left":"0px",
					"height":"100%",
					"width":"100%",
					"border-radius":"0px"
				})
				setTimeout(function(){
					runBackArrow();
				},500);
			});
			$("#shows").click(function(e){
				e.preventDefault(); document.querySelector('.circle').classList.toggle("open");
				$(".hideMe").fadeOut(250);
				$(".logoText").fadeOut(250);
				$(".showsCover").animate({
					"top":"0px",
					"left":"0px",
					"height":"100%",
					"width":"100%",
					"border-radius":"0px"
				})
				setTimeout(function(){
					$(".show").fadeIn(250);
					runBackArrow();
				},500);
			});
			$("#bookUs").click(function(e){
				e.preventDefault(); document.querySelector('.circle').classList.toggle("open");
				$(".hideMe").fadeOut(250);
				$(".logoText").fadeOut(250);
				$(".bookCover").animate({
					"top":"0px",
					"left":"0px",
					"height":"100%",
					"width":"100%",
					"border-radius":"0px"
				})
				setTimeout(function(){
					runBackArrow();
				},500);
			});
			$(".bioImage").click(function(){
				if(!$(".bio").is(":animated") && !opened){
					opened = true;
					$(".bioImage").not(this).fadeOut(0);
					$(this).css({"float":"none"});
					$(this).delay(300).animate({"width":"35vw", "height":"35vw"});
					$(this).css({"margin":"0 auto"});
					$(this).closest($(".bio")).css({"width":"100%", "transform":"translateY(0)","top":"70px"});
					$(this).siblings($(".bioInfo")).delay(650).fadeIn(250);
					$(this).siblings($(".closeBio")).delay(750).fadeIn(250);
				}
			});
			$(".closeBio").click(function(){
				if(!$(".bio").is(":animated") && opened){
					opened = false;
					$(".closebio").fadeOut(25);
					$(".bioInfo").fadeOut(25);
					$(this).closest($(".bio")).css({"width":100/3+"%", "transform":"translateY(-50%)", "top":"50%", "float":"left"});
					$(this).siblings($(".bioImage")).animate({"left":"0px", "width":"30vw", "height":"30vw", "top":"0px"}, 0);
					$(".bioInfo").css({"width":"70%"});
					$(".bioImage").show(0);
				}
			})
			var runBackArrow = function(){
				$(".backArrow").fadeIn(250);$(".backArrow").delay(250).animate({"left":"20px"},250);$(".backArrow").animate({"left":"10px"},250);
			}
			
			
		});
