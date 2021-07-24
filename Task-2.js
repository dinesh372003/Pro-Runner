function game_starts()
{
    i=canvas.width;
    j=canvas.height;
    w=run.width;
    e=run.height;
    k=Math.floor((3/20)*j);
    l=Math.ceil((3/4)*j);
    p=Math.floor((13/20)*j);
    q=Math.ceil(j/4);
    r=0.075*w/2;
    holes.obspos=(p+e/10-r);
    ceilfloor.draw();
    runner.place(pos);
    n=holes.position;
    setInterval(Update,1);  
}
var n,ctx,pos,x=0,a,z=0,score=0,t1,t2,t,b=0,c=0,i,j,k,l,p,shieldtouch=0,q,r,abcd,w,e,r,y=0,s=0,d=0,xyz=0,xy=0,temp=0,ab;
var runner=
{
    place: function(pos)
    {
        this.pos=pos;
        
        if(run.getContext)
        {
            abcd=run.getContext("2d");
            abcd.fillStyle="red";
            abcd.beginPath();
            abcd.moveTo(w/25,p+e/10);
            abcd.lineTo(w/10,p+e/10);
            abcd.lineTo(w/10,p+e/10-0.075*w);
            abcd.fill();  
        }
        
    },
    Change: function()
    {        
        if(this.pos=="DOWN")
        {
            this.pos="UP";
            abcd.clearRect(w/25,p+e/10-0.075*w-1,3*(w/50)+1,0.075*w+1);
            abcd.fillStyle="red";
            abcd.beginPath();
            abcd.moveTo(w/25,q);
            abcd.lineTo(w/10,q);
            abcd.lineTo(w/10,q+0.075*w);
            abcd.fill();
        }
        else if(this.pos=="UP")
        {
            this.pos="DOWN";
            abcd.clearRect(w/25,q,3*(w/50),0.075*w);
            abcd.fillStyle="Red";
            abcd.beginPath();
            abcd.moveTo(w/25,p+e/10);
            abcd.lineTo(w/10,p+e/10);
            abcd.lineTo(w/10,p+e/10-0.075*w);
            abcd.fill();
        }
    }
}
var ceilfloor=
{
   draw: function()
    {
        if(canvas.getContext)
            {
            ctx=canvas.getContext("2d");
            ctx.fillStyle="Blue";
            ctx.fillRect(0,k,i,j/10);
            ctx.fillStyle="Blue";
            ctx.fillRect(0,l,i,j/10);
            pos="DOWN";
            holes.position=i;
    }    
}
}


function Update()
{
    
    holes.fill();
    holes.Obstacle_close();
    if(x==0)
    {
        holes.posplace();
        holes.randomwidth();
    }
    if(y==0)
    {
        holes.Obstacle_position();
    }
    holes.Obstacle_Update(); 
    holes.position_update();
    holes.obspos_update();
    //holes.shieldposupdate();
    holes.Obstacle_create();
    holes.clear();
    holes.check();
    holes.Update_Speed();
}




var holes=
{
    speed:0.5,
    width:0,
    holepos:"DOWN",
    obsgo:"UP",
    obstaclepos:0,
    //shieldposver:"DOWN",
    //shieldposhor:0,
    fill:function()
    {
        t1=new Date();
        if(this.holepos=="DOWN")
        {
            /*ctx.fillStyle="Black";
            ctx.fillRect(this.position,l-i/10,i/10,i/10);*/
            ctx.fillStyle="Blue";
            ctx.fillRect(this.position,l,this.width+1,j/10);
        }
        else if(this.holepos=="UP")
        {
            /*ctx.fillStyle="Black";
            ctx.fillRect(this.position,k+j/10,i/10,i/10);*/
            ctx.fillStyle="Blue";
            ctx.fillRect(this.position,k,this.width+1,j/10);
        }
        /*if(xyz==1)
        {
            
            if(temp==0)
            {
                ab=Math.floor(Math.random()*2);
                if(ab==0)
                {
                    this.shieldposver="UP";
                }
                else if(ab==1)
                {
                    this.shieldposver="DOWN";
                }
                temp=1
                ab=Math.floor(Math.random()*(i/2))
                this.shieldposhor=this.position+ab+this.width;
            }
            
            if(this.shieldposver=="DOWN")
            {
                ctx.fillStyle="Black";
                ctx.fillRect(this.shieldposhor,l-i/10,i/10,i/10);
            }
            else if(this.shieldposver=="UP")
            {
                ctx.fillStyle="Black";
                ctx.fillRect(this.shieldposhor,k+j/10,i/10,i/10);
            }
           
        }*/
    },
    /*shieldposupdate:function()
    {
        if(this.shieldposhor>-(i/10))
        {
            this.shieldposhor-=this.speed;
        }
        else
        {
            this.shieldposhor=n;
            xyz=0;
            temp=0;
        }
    },*/
    posplace:function()
    {
        a=Math.floor(Math.random()*2);
        if(a==0)
        {
            this.holepos="UP";
        }
        else if(a==1)
        {
            this.holepos="DOWN";
        }
        x++;
    },
    randomwidth:function()
    {
        a=Math.floor(Math.random()*100)+3*(w/50);
        this.width=a;
    },
    position_update:function()
    {
        if(this.position>=(-a))
        {
            this.position-=this.speed;
        }
        else
        {
            this.position=n;
            x=0;
        }
    },
    obspos_update:function()
    {
                if(this.obstaclepos>=(-r))
                {
                    this.obstaclepos-=this.speed;
                }
                else
                {
                    y=0;
                }
    },
    clear:function()
    {
        if(this.holepos=="DOWN")
        {
            ctx.clearRect(this.position,l,this.width,(j/10));
        }
        else if(this.holepos=="UP")
        {
            ctx.clearRect(this.position,k,this.width,(j/10));
        }
        /*if(shieldtouch==0)
        {
            if(xyz==1)
            {
                if(this.shieldposver=="DOWN")
                {
                    var img=document.getElementById("shield")
                    ctx.drawImage(img,this.shieldposhor,l-i/10,i/10,i/10);
                }
                else if(this.shieldposver=="UP")
                {
                    var img=document.getElementById("shield")
                    ctx.drawImage(img,this.shieldposhor,k+j/10,i/10,i/10);
                }     
            }
        }*/
    },
    Obstacle_close:function()
    {
        ctx.fillStyle="black";
        ctx.beginPath();
        ctx.arc(this.obstaclepos+1,this.obspos+0.1,r+1,0,360,false);
        ctx.fill();
    },
    Obstacle_create:function()
    {
        
        ctx.fillStyle="white";
        ctx.beginPath();
        ctx.arc(this.obstaclepos,this.obspos,r,0,360,false);
        ctx.fill(); 
    },
    Obstacle_Update:function()
    {
        
        if((this.obsgo=="UP")&&(this.obspos>q+r))
        {
            this.obspos-=0.1;
        }
        else if(this.obspos<q+r+0.001)
        {
            this.obsgo="DOWN";
        }
        if((this.obsgo=="DOWN")&&(this.obspos<p+e/10-r))
        {
            this.obspos+=0.1;
        }
        else if(this.obspos==p+e/10-r)
        {
            this.obsgo="UP";
        }
    },
    Obstacle_position:function()
    {
        d=this.obstaclepos;
        this.obstaclepos=this.position+this.width+(3*(w/50))+Math.floor(Math.random()*(i/2));
        y=1;
        if(this.obstaclepos<i)
        {
            this.obstaclepos+=i/4;
        }
    },
    check:function()
    {    
        /*if(this.shieldposver==runner.pos)
        {
            if((this.shieldposhor<w/25)&&((this.shieldposhor+i/10)>w/10))
            {
                shieldtouch=1;
            }
        }*/
        if(this.holepos==runner.pos)
        {
            if((this.position<w/25)&&((this.position+this.width)>w/10))
            {   
                //this.shieldposhor+=this.speed;
                this.position+=this.speed;
                pos=this.position;
                this.pos=pos;
                if(this.obsgo=="UP")
                    {
                        this.obspos+=0.1
                    }
                    else if(this.obsgo=="DOWN")
                    {
                        this.obspos-=0.1
                    }
                this.obstaclepos+=this.speed;
                score=Math.round(score);
                localStorage.setItem("score",score);
                var highscore=localStorage.getItem("highscore");
                if(highscore<score)
                {
                    localStorage.setItem("highscore",score);
                }
                window.location.href="Result.html";
            }    
        }
        if(runner.pos=="DOWN")
        {
            if((this.obspos+r-j/25)>(p+e/10-0.075*w))
            {
                if(((this.obstaclepos-r)<w/10)&&((this.obstaclepos+r)>w/25))
                {
                    //this.shieldposhor+=this.speed;
                    this.position+=this.speed;
                    pos=this.position;
                    this.pos=pos;
                    if(this.obsgo=="UP")
                    {
                        this.obspos+=0.1
                    }
                    else if(this.obsgo=="DOWN")
                    {
                        this.obspos-=0.1
                    }
                    this.obstaclepos+=this.speed;
                    score=Math.round(score);
                    localStorage.setItem("score",score);
                    var highscore=localStorage.getItem("highscore");
                    if(highscore<score)
                    {
                        localStorage.setItem("highscore",score);
                    }
                    window.location.href="Result.html";
                }
            }
        }
        else if(runner.pos=="UP")
        {
            if((this.obspos-r+j/25)<(q+0.075*w))
            {
                if(((this.obstaclepos-r)<w/10)&&((this.obstaclepos+r)>w/25))
                {
                    //this.shieldposhor+=this.speed;
                    this.position+=this.speed;
                    pos=this.position;
                    this.pos=pos;
                    if(this.obsgo=="UP")
                    {
                        this.obspos+=0.1
                    }
                    else if(this.obsgo=="DOWN")
                    {
                        this.obspos-=0.1
                    }
                    this.obstaclepos+=this.speed;
                    score=Math.round(score);
                    localStorage.setItem("score",score);
                    var highscore=localStorage.getItem("highscore");
                    if(highscore<score)
                    {
                        localStorage.setItem("highscore",score);
                    }
                    window.location.href="Result.html";
                }
            }
        }
    },
    Update_Speed:function()
    {
        t2=new Date();
        t=t2-t1
        score+=this.speed*t;
        //console.log(score);
        if(((score-b)>10)&&(z<2))
        {
            z++;
            b=score;
            this.speed+=0.1;
        }
        else if(((score-b)>100)&&(z<5))
        {
            z++;
            b=score;
            this.speed+=0.1;
        }
        else if((score-b)>500)
        {
            b=score;
            this.speed+=0.1;
        }
        if((score-xy)>100)
        {
            shieldtouch=0;
            xyz=1;
            xy=score;
        }
    }
}   