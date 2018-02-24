var ci1 = document.getElementById("ci1");
var ci2 = document.getElementById("ci2");
var ci3 = document.getElementById("ci3");
var ci4 = document.getElementById("ci4");
var ci5 = document.getElementById("ci5");
var ci6 = document.getElementById("ci6");
var ci7 = document.getElementById("ci7");
var ci8 = document.getElementById("ci8");
var ci9 = document.getElementById("ci9");
var cr1 = document.getElementById("cr1");
var cr2 = document.getElementById("cr2");
var cr3 = document.getElementById("cr3");
var cr4 = document.getElementById("cr4");
var cr5 = document.getElementById("cr5");
var cr6 = document.getElementById("cr6");
var cr7 = document.getElementById("cr7");
var cr8 = document.getElementById("cr8");
var cr9 = document.getElementById("cr9");
var ico1 = document.getElementById("Player1_icon");
var ico2 = document.getElementById("Player2_icon");
var board =document.getElementById("Board");

var turn = 1;
var winner = "a";
var mode = 1;
var randm =0;
var field1 =0;
var field2 =0;
var field3 =0;
var field4 =0;
var field5 =0;
var field6 =0;
var field7 =0;
var field8 =0;
var field9 =0;

function Start()
{
	board.hidden=false;
}
function Indicator()
{
	if (turn==2)
	{
		ico2.hidden=false;
		ico1.hidden=true;
	}
	else if (turn==1)
	{
		ico1.hidden=false;
		ico2.hidden=true;
	}
}
function PlayerMode()
{
	mode=1;
	$("#ButtonOne").css("border-color", "gray");
	$("#ButtonTwo").css("border-color", "white");

}
function ComputerMode()
{
	mode=2;
	 $("#ButtonOne").css("border-color", "white");
	 $("#ButtonTwo").css("border-color", "gray");
}
function Move1()
{
	if(field1==0)
	{
		if (turn==1)
		{
			ci1.hidden=false;
			turn=2;
			field1=1;			
		}
		else if (turn==2)
		{
			cr1.hidden=false;
			turn=1;
			field1=2;
		}

		Indicator();
		wining();
		if(mode==2)
		{
			ComputerMove();
		}
	}
}
function Move2()
{
	if(field2==0)
	{
		if (turn==1)
		{
			ci2.hidden=false;
			turn=2;
			field2=1;
		}
		else if (turn==2)
		{
			cr2.hidden=false;
			turn=1;
			field2=2;
		}
		Indicator();
		wining();
		if(mode==2)
		{
			ComputerMove();
		}
	}
}
function Move3()
{
	if(field3==0)
	{
		if (turn==1)
		{
			ci3.hidden=false;
			turn=2;
			field3=1;
		}
		else if (turn==2)
		{
			cr3.hidden=false;
			turn=1;
			field3=2;
		}
		Indicator();
		wining();
		if(mode==2)
		{
			ComputerMove();
		}
	}
}
function Move4()
{
	if(field4==0)
	{
		if (turn==1)
		{
			ci4.hidden=false;
			turn=2;
			field4=1;
		}
		else if (turn==2)
		{
			cr4.hidden=false;
			turn=1;
			field4=2;

		}
		Indicator();
		wining();
		if(mode==2)
		{
			ComputerMove();
		}
	}
}
function Move5()
{
	if(field5==0)
	{
		if (turn==1)
		{
			ci5.hidden=false;
			turn=2;
			field5=1;
		}
		else if (turn==2)
		{
			cr5.hidden=false;
			turn=1;
			field5=2;
		}
		Indicator();
		wining();
		if(mode==2)
		{
			ComputerMove();
		}
	}
}
function Move6()
{
	if(field6==0)
	{
		if (turn==1)
		{
			ci6.hidden=false;
			turn=2;
			field6=1;
		}
		else if (turn==2)
		{
			cr6.hidden=false;
			turn=1;
			field6=2;
		}
		Indicator();
		wining();
		if(mode==2)
		{
			ComputerMove();
		}
	}
}
function Move7()
{
	if(field7==0)
	{
		if (turn==1)
		{
			ci7.hidden=false;
			turn=2;
			field7=1;
		}
		else if (turn==2)
		{
			cr7.hidden=false;
			turn=1;
			field7=2;
		}
		Indicator();
		wining();
		if(mode==2)
		{
			ComputerMove();
		}
	}
}
function Move8()
{
	if(field8==0)
	{
		if (turn==1)
		{
			ci8.hidden=false;
			turn=2;
			field8=1;
		}
		else if (turn==2)
		{
			cr8.hidden=false;
			turn=1;
			field8=2;
		}
		Indicator();
		wining();
		if(mode==2)
		{
			ComputerMove();
		}
	}
}
function Move9()
{
	if(field9==0)
	{
		if (turn==1)
		{
			ci9.hidden=false;
			turn=2;
			field9=1;
		}
		else if (turn==2)
		{
			cr9.hidden=false;
			turn=1;
			field9=2;
		}
		Indicator();
		wining();
		if(mode==2)
		{
			ComputerMove();
		}
	}

}
function wining()
{
	if(ci5.hidden==false)
	{
		if((ci2.hidden==false)&&(ci8.hidden==false))
		{
			win();
		}
		else if ((ci4.hidden==false)&&(ci6.hidden==false))
		{
			win();
		}
		else if((ci1.hidden==false)&&(ci9.hidden==false))
		{
			win();
		}
		else if((ci7.hidden==false)&&(ci3.hidden==false))
		{
			win();
		}
	}
	if(ci1.hidden==false)
	{
		if((ci2.hidden==false)&&(ci3.hidden==false))
		{
			win();
		}
		else if ((ci4.hidden==false)&&(ci7.hidden==false))
		{
			win();
		}
	}
	if(ci9.hidden==false)
	{
		if((ci6.hidden==false)&&(ci3.hidden==false))
		{
			win();
		}
		else if ((ci8.hidden==false)&&(ci7.hidden==false))
		{
			win();
		}
	}


	if(cr5.hidden==false)
	{
		if((cr2.hidden==false)&&(cr8.hidden==false))
		{
			win();
		}
		else if ((cr4.hidden==false)&&(cr6.hidden==false))
		{
			win();
		}
		else if((cr1.hidden==false)&&(cr9.hidden==false))
		{
			win();
		}
		else if((cr7.hidden==false)&&(cr3.hidden==false))
		{
			win();
		}
	}
	if(cr1.hidden==false)
	{
		if((cr2.hidden==false)&&(cr3.hidden==false))
		{
			win();
		}
		else if ((cr4.hidden==false)&&(cr7.hidden==false))
		{
			win();
		}
	}
	if(cr9.hidden==false)
	{
		if((cr6.hidden==false)&&(cr3.hidden==false))
		{
			win();
		}
		else if ((cr8.hidden==false)&&(cr7.hidden==false))
		{
			win();
		}
	}
	if (((ci1.hidden==false)||(cr1.hidden==false))&&((ci2.hidden==false)||(cr2.hidden==false))&&((ci3.hidden==false)||(cr3.hidden==false))&&((ci4.hidden==false)||(cr4.hidden==false))&&((ci5.hidden==false)||(cr5.hidden==false))&&((ci6.hidden==false)||(cr6.hidden==false))&&((ci7.hidden==false)||(cr7.hidden==false))&&((ci8.hidden==false)||(cr8.hidden==false))&&((ci9.hidden==false)||(cr9.hidden==false)))
	{
		Tie();
	}

}
function win ()
{
	if(mode==1)
	{
		if(turn==2)
		{
			winner="Circle";
		}
		else if(turn==1)
		{
			winner="Cross";
		}
	}
	else if(mode==2)
	{
		if(turn==2)
		{
			winner="You";
		}
		else if(turn==1)
		{
			winner="Computer";
		}
	}
	alert(winner+" won!");
	ci1.hidden=true;
	ci2.hidden=true;
	ci3.hidden=true;
	ci4.hidden=true;
	ci5.hidden=true;
	ci6.hidden=true;
	ci7.hidden=true;
	ci8.hidden=true;
	ci9.hidden=true;
	cr1.hidden=true;
	cr2.hidden=true;
	cr3.hidden=true;
	cr4.hidden=true;
	cr5.hidden=true;
	cr6.hidden=true;
	cr7.hidden=true;
	cr8.hidden=true;
	cr9.hidden=true;
	field1 =0;
	field2 =0;
	field3 =0;
	field4 =0;
	field5 =0;
	field6 =0;
	field7 =0;
	field8 =0;
	field9 =0;
	//turn=1;
	//Indicator();
}
function Tie()
{
	alert("Tie!!");
	ci1.hidden=true;
	ci2.hidden=true;
	ci3.hidden=true;
	ci4.hidden=true;
	ci5.hidden=true;
	ci6.hidden=true;
	ci7.hidden=true;
	ci8.hidden=true;
	ci9.hidden=true;
	cr1.hidden=true;
	cr2.hidden=true;
	cr3.hidden=true;
	cr4.hidden=true;
	cr5.hidden=true;
	cr6.hidden=true;
	cr7.hidden=true;
	cr8.hidden=true;
	cr9.hidden=true;
	field1 =0;
	field2 =0;
	field3 =0;
	field4 =0;
	field5 =0;
	field6 =0;
	field7 =0;
	field8 =0;
	field9 =0;

}
function ComputerMove()
{
	random=Math.floor(Math.random() * (9 - 1 + 1)) + 1;
	if(random==1)
	{
		if(field1==0)
		{
			cr1.hidden=false;
			field1=2;
			turn=1;
			Indicator();
			wining();
		}
		else
		{
			wining();
			ComputerMove();
		}
	}
	else if(random==2)
	{
		if(field2==0)
		{
			cr2.hidden=false;
			field2=2;
			turn=1;
			Indicator();
			wining();
		}
		else
		{
			wining();
			ComputerMove();
		}
	}
	else if(random==3)
	{
		if(field3==0)
		{
			cr3.hidden=false;
			field3=2;
			turn=1;
			Indicator();
			wining();
		}
		else
		{
			wining();
			ComputerMove();
		}
	}
	else if(random==4)
	{
		if(field4==0)
		{
			cr4.hidden=false;
			field4=2;
			turn=1;
			Indicator();
			wining();
		}
		else
		{
			wining();
			ComputerMove();
		}
	}
	else if(random==5)
	{
		if(field5==0)
		{
			cr5.hidden=false;
			field5=2;
			turn=1;
			Indicator();
			wining();
		}
		else
		{
			wining();
			ComputerMove();
		}
	}
	else if(random==6)
	{
		if(field6==0)
		{
			cr6.hidden=false;
			field6=2;
			turn=1;
			Indicator();
			wining();
		}
		else
		{
			wining();
			ComputerMove();
		}
	}
	else if(random==7)
	{
		if(field7==0)
		{
			cr7.hidden=false;
			field7=2;
			turn=1;
			Indicator();
			wining();
		}
		else
		{
			wining();
			ComputerMove();
		}
	}
	else if(random==8)
	{
		if(field8==0)
		{
			cr8.hidden=false;
			field8=2;
			turn=1;
			Indicator();
			wining();
		}
		else
		{
			wining();
			ComputerMove();
		}
	}
	else if(random==9)
	{
		if(field9==0)
		{
			cr9.hidden=false;
			field9=2;
			turn=1;
			Indicator();
			wining();
		}
		else
		{
			wining();
			ComputerMove();
		}
	}
}