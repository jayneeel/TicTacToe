const xPlayer=1;
const oPlayer=0;
var gamerOver=false;
var activePlayer=xPlayer;
var positions=new Array(-1,-1,-1,-1,-1,-1,-1,-1,-1);

var t0=document.getElementById('t1');
var t1=document.getElementById('t2');
var t2=document.getElementById('t3');
var t3=document.getElementById('t4');
var t4=document.getElementById('t5');
var t5=document.getElementById('t6');
var t6=document.getElementById('t7');
var t7=document.getElementById('t8');


function mark(i,num)
{
    if(gamerOver)
    {
        return;
    }
    var pos=num;
    if(activePlayer==xPlayer)
    {
        i.value="X";
        positions[pos]=xPlayer;
        i.disabled=true;
        activePlayer=oPlayer;
        check();
    }else{
        i.value="O";
        positions[pos]=oPlayer;
        activePlayer=xPlayer;
        i.disabled=true;
        check();
    }
}


function check()
{
    var winPositions=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];
    for(var i=0;i<7;i++)
    {
        var pos1=winPositions[i][0];
        var pos2=winPositions[i][1];
        var pos3=winPositions[i][2];

        if(positions[pos1]==positions[pos2] && positions[pos1]==positions[pos3])
        {
            if(positions[pos1]!=-1)
            {
                if(positions[pos1]==xPlayer)
                {
                    alert("X Player Won");
                    gamerOver=true;
                    return;
                }else{
                    alert("O Player Won");
                    gamerOver=true;
                    return;
                }
            }
        }
    }

    var tie=positions.includes(-1);
    if(!tie)
    {
        alert("Match Tie");
        gamerOver=true;
    }

}