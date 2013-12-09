function resetHoverOn(id)
{
	document.getElementById(id).style.backgroundImage = "url("+ imagepath +"talent/resetbutton_over.png)";
}

function resetHoverOff(id)
{
	document.getElementById(id).style.backgroundImage = "url("+ imagepath +"talent/resetbutton.png)";
}

function setOpacity(B,A){B.style.opacity=A/10;B.style.filter="progid:DXImageTransform.Microsoft.alpha(opacity="+A*10+")"}
function obj_left(B){var A=B.offsetLeft;while((B=B.offsetParent)!=null){A+=B.offsetLeft}return A}
function obj_top(B){var A=B.offsetTop;while((B=B.offsetParent)!=null){A+=B.offsetTop}return A}

function selectBuildText()
{
    document.getElementById("buildText").select();
}

//-------------------------------------------
// Talent Button
//-------------------------------------------
function TalentObj(A,D,E)
{
	this.tree=A;
	this.pos=E;
	this.row=D;
	this.talentname=L("-");
	this.desc=L("-");
	this.numRanks=0;
	this.curRank=0;
	this.icon="temp.png";
	this.reqs=new Array();
	this.type="empty";
	this.ranks=new Array(6);
	
	for(var C=0;C<=talentPointsRequired;C++)
	{
		this.ranks[C]=new Array(11);
		
		for(var B=0;B<=10;B++)
		{
			this.ranks[C][B]=""
		}
	}
	
	this.treeelm=treee[A];
	this.butbg=$(this.getID());
	this.butc=$(this.getID()+"c");
	this.butimg=$(this.getID()+"i");
	this.butbg.style.left=(25+65*(this.getPos()-1)+treel[A])+"px";
	this.butbg.style.top=(5+65*(this.getRow()-1)+treet[A])+"px";
	addListener(this.butbg,"mouseup",butclick);
	addListener(this.butbg,"contextmenu",butclick2);
	addListener(this.butbg,"mouseover",butmouseover);
	addListener(this.butbg,"mouseout",butmouseout);
	this.redraw(false)
}

TalentObj.prototype.setLoc=function setLoc(A,B,C)
{
	this.removeReqs();
	this.tree=A;
	this.pos=C;
	this.row=B;
	this.treeelm=treee[A];
	this.butbg=$(this.getID());
	this.butc=$(this.getID()+"c");
	this.butimg=$(this.getID()+"i");
	this.butbg.style.left=(25+65*(this.getPos()-1)+treel[A])+"px";
	this.butbg.style.top=(5+65*(this.getRow()-1)+treet[A])+"px";
	this.redraw("")
};

TalentObj.prototype.getTree=function getTree(){return this.tree};
TalentObj.prototype.getPos=function getPos(){return this.pos};
TalentObj.prototype.getRow=function getRow(){return this.row};
TalentObj.prototype.getType=function getType(){return this.type};
TalentObj.prototype.getDescription=function getDescription(){return this.desc};
TalentObj.prototype.getRankDescription=function getRankDescription(tree, row, column, rank)
{
	if (rank == 0)
		rank = 1;
	
	var tableIndex = tree.toString() + row.toString() + column.toString() + rank.toString();
	return descriptionTable[tableIndex];
};
TalentObj.prototype.setDescription=function setDescription(A){this.desc=A};
TalentObj.prototype.getTalentname=function getTalentname(){return this.talentname};
TalentObj.prototype.setTalentname=function setTalentname(A){this.talentname=A};
TalentObj.prototype.getNumRanks=function getNumRanks(){return this.numRanks};
TalentObj.prototype.getCurRank=function getCurRank(){return this.curRank};
TalentObj.prototype.getActiveCost=function getActiveCost(){return this.ActiveCost};
TalentObj.prototype.setActiveCost=function setActiveCost(A){this.ActiveCost=A};
TalentObj.prototype.setActiveCostType=function setActiveCostType(A){this.ActiveCostType=A};
TalentObj.prototype.getActiveCostType=function getActiveCostType(){return this.ActiveCostType};
TalentObj.prototype.getActiveCastTime=function getActiveCastTime(){return this.ActiveCastTime};
TalentObj.prototype.setActiveSpellType=function setActiveSpellType(A){this.ActiveSpellType=A};
TalentObj.prototype.getActiveSpellType=function getActiveSpellType(){return this.ActiveSpellType};
TalentObj.prototype.getActiveCastTime=function getActiveCastTime(){return this.ActiveCastTime};
TalentObj.prototype.getActiveCooldown=function getActiveCooldown(){return this.ActiveCooldown};
TalentObj.prototype.setActiveCooldown=function setActiveCooldown(A){this.ActiveCooldown=A};
TalentObj.prototype.getActiveRangeMin=function getActiveRangeMin(){return this.ActiveRangeMin};
TalentObj.prototype.setActiveRangeMin=function setActiveRangeMin(A){this.ActiveRangeMin=A};
TalentObj.prototype.getActiveRangeMax=function getActiveRangeMax(){return this.ActiveRangeMax};
TalentObj.prototype.setActiveRangeMax=function setActiveRangeMax(A){this.ActiveRangeMax=A};
TalentObj.prototype.getActiveReagents=function getActiveReagents(){return this.ActiveReagents};
TalentObj.prototype.setActiveReagents=function setActiveReagents(A){this.ActiveReagents=A};
TalentObj.prototype.getActiveRequires=function getActiveRequires(){return this.ActiveRequires};
TalentObj.prototype.setActiveRequires=function setActiveRequires(A){this.ActiveRequires=A};
TalentObj.prototype.getActiveMaxRank=function getActiveMaxRank(){return this.ActiveMaxRank};
TalentObj.prototype.setActiveMaxRank=function setActiveMaxRank(A){this.ActiveMaxRank=A};
TalentObj.prototype.getIcon=function getIcon(){return this.icon};
TalentObj.prototype.setIcon=function setIcon(A){if(A.indexOf("/")!=-1){this.icon="Spells/"+A.substring((A.lastIndexOf("/")+1))}else{this.icon=A}};
TalentObj.prototype.setActiveCastTime=function setActiveCastTime(A){if((A==0)&&(this.getActiveSpellType()=="casttime")){this.setActiveSpellType("instant")}this.ActiveCastTime=A};

TalentObj.prototype.setType=function setType(A)
{
	A=A.toLowerCase();
	
	if(A==this.type)
	{
		return 
	}
	
	if(this.getRow()>7&&treeType=="normal")
	{
		A="hidden"
	}
	
	switch(A.toLowerCase())
	{
		case"e":
		case"empty":
			this.setIcon("temp.png");
			this.setNumRanks(0);
			this.setCurRank(0);
			this.removeReqs();
			this.setTalentname(L("-"));
			this.setDescription(L("-"));
			this.type="empty";
			break;
		case"a":
		case"active":
			this.setNumRanks(1);
			this.setCurRank(0);
			this.type="active";
			break;
		case"p":
		case"passive":
			this.setCurRank(0);
			this.type="passive";
			break;
		case"h":
		case"hidden":
			this.setNumRanks(0);
			this.setCurRank(0);
			this.removeReqs();
			this.type="hidden";
			break
	}
};

TalentObj.prototype.setCurRank=function setCurRank(A){if(A>this.getNumRanks()){this.curRank=this.getNumRanks()}else{this.curRank=A}};
TalentObj.prototype.setNumRanks=function setNumRanks(A){this.numRanks=A;this.setCurRank(0)};
TalentObj.prototype.setRank=function setRank(C,A,B){this.ranks[C][A]=B};
TalentObj.prototype.getRank=function setRank(B,A){return this.ranks[B][A]};
TalentObj.prototype.getPassiveDesc=function getPassiveDesc(D){if(D<1||D>talentPointsRequired){D=1}var B=0;var A=this.desc.indexOf("@",0);while(A!=-1){B++;A=this.desc.indexOf("@",(A+1));if(B>10){return this.desc}}var C=nl2br(htmlspecialchars(this.desc));for(A=0;A<B;A++){C=C.replace(/@/,this.getRank(D,A))}return C};
TalentObj.prototype.getPassiveRanks=function getPassiveRanks(){var D=0;var C=this.desc.indexOf("@",0);while(C!=-1){D++;C=this.desc.indexOf("@",(C+1));if(D>10){return""}}var A="";for(var B=0;B<D;B++){for(C=1;C<=this.getNumRanks();C++){if(A!=""){A+="|"}A+=this.getRank(C,B)}}return this.getNumRanks()+A};
TalentObj.prototype.getReqs=function getReqs(A){return this.reqs.join("|")};
TalentObj.prototype.addReq=function addReq(C){this.reqs.push(C);var A=translateSticky(C);var B=A[1];var D=A[2];spawnArrow(this.getTree(),B,D,this.getRow(),this.getPos())};
TalentObj.prototype.isReq=function isReq(B){for(var A=0;A<this.reqs.length;A++){if(this.reqs[A]==B){return true}}return false};
TalentObj.prototype.removeReq=function removeReq(D){for(var B=0;B<this.reqs.length;B++){if(this.reqs[B]!=D){continue}var A=translateSticky(this.reqs[B]);var C=A[1];var E=A[2];removeArrow(this.getTree(),C,E,this.getRow(),this.getPos());this.reqs.slice(B,1);return }};
TalentObj.prototype.removeReqs=function removeReqs(){for(var B=0;B<this.reqs.length;B++){var A=translateSticky(this.reqs[B]);var C=A[1];var D=A[2];removeArrow(this.getTree(),C,D,this.getRow(),this.getPos())}this.reqs=new Array()};
TalentObj.prototype.reqsAreOk=function reqsAreOk(){for(var D=0;D<this.reqs.length;D++){var A=translateSticky(this.reqs[D]);var F=A[1];var G=A[2];if(!treec[this.getTree()][F][G].isMaxRank()){return false}}var E=(talentPointsRequired*(this.getRow()-1));if(E>0){var C=0;for(var D=1;D<this.getRow();D++){for(var B=1;B<=4;B++){C+=parseInt(treec[this.getTree()][D][B].getCurRank())}}if(C<E){return false}}return true};
TalentObj.prototype.addPoint=function addPoint(){if((this.getCurRank()<this.getNumRanks())&&(pointlock==0||((treep[1]+treep[2]+treep[3])<pointlock))){this.setCurRank(this.getCurRank()+1);this.redraw(false);var D=0;var A=getMaxi();for(var C=1;C<=A;C++){for(var B=1;B<=4;B++){D+=parseInt(treec[this.getTree()][C][B].getCurRank())}}treep[this.getTree()]=D;if((pointlock>0)&&((treep[1]+treep[2]+treep[3])>=pointlock)){redrawAll()}else{for(var C=1;C<=A;C++){for(var B=1;B<=4;B++){treec[this.getTree()][C][B].redraw(false)}}}return true}return false};
TalentObj.prototype.subPoint=function subPoint(){if(this.getCurRank()>0){this.setCurRank(this.getCurRank()-1);treep[this.getTree()]--;var C=getMaxi();for(var E=this.getRow();E<=C;E++){for(var D=1;D<=4;D++){if(treec[this.getTree()][E][D].getCurRank()>0&&!treec[this.getTree()][E][D].reqsAreOk()){this.setCurRank(this.getCurRank()+1);treep[this.getTree()]++;for(var B=this.getRow();B<=E;B++){for(var A=1;A<=4;A++){treec[this.getTree()][B][A].redraw(false)}}return false}else{treec[this.getTree()][E][D].redraw(false)}}}if(pointlock>0&&((treep[1]+treep[2]+treep[3])<pointlock)){redrawAll()}else{this.redraw(false)}return true}return false};

TalentObj.prototype.getReadCost=function getReadCost()
{
    if(this.ActiveCostType=="runes")
    {
        var E=this.getActiveCost();
        var D=E.substring(0,1);
        var C=E.substring(1,2);
        var A=E.substring(2,3);
        var B="";
        
        if(parseInt(D)>0)
        {
            B+=D+'<img src="/img/spacer.gif" width="13" height="13" alt="Blood Runes" class="runeB" /> '
        }
        
        if(parseInt(A)>0)
        {
            B+=A+'<img src="/img/spacer.gif" width="13" height="13" alt="Unholy Runes" class="runeF" /> '
        }
        
        if(parseInt(C)>0)
        {
            B+=C+'<img src="/img/spacer.gif" width="13" height="13" alt="Frost Runes" class="runeU" /> '
        }
        
        return B
     }
     else if(this.ActiveCostType=="runicpower")
     {
        return htmlspecialchars(LANGTalent_Requires+""+htmlspecialchars(this.getReadCostType()))
     }
     else
     {
        return htmlspecialchars(this.getActiveCost())+""+htmlspecialchars(this.getReadCostType())
     }
};

TalentObj.prototype.getReadCostType=function getReadCostType()
{
    if(this.ActiveCostType=="procmana")
    {
        return L(LANGTalent_Spell_BaseMana)
    }

    if(this.ActiveCostType=="procrmana")
    {
        return L(LANGTalent_Spell_RemainingMana)
    }

    if(this.ActiveCostType=="mana")
    {
        return " "+L(LANGTalent_Mana)
    }
    
    if(this.ActiveCostType=="focus")
    {
        return " "+L(LANGTalent_Focus)
    }
    
    if(this.ActiveCostType=="rage")
    {
        return " "+L(LANGTalent_Rage)
    }
    
    if(this.ActiveCostType=="energy")
    {
        return " "+L(LANGTalent_Energy)
    }
    
    if(this.ActiveCostType=="runicpower")
    {
        return L(LANGTalent_RunicPower)
    }
    
    return " "+L(this.ActiveCostType)
};

TalentObj.prototype.getReadRange=function getReadRange()
{
    if(this.hasNoRange())
    {
        return ""
    }
    
    if(this.ActiveRangeMin==0&&this.ActiveRangeMax>0)
    {
        return LANGTalent_Spell_Range.replace("{0}", this.ActiveRangeMax)
    }
    
    if(this.ActiveRangeMin==this.ActiveRangeMax)
    {
        return LANGTalent_Spell_Range.replace("{0}", this.ActiveRangeMax)
    }
    
    return LANGTalent_Spell_Range.replace("{0}", this.ActiveRangeMin+"-"+this.ActiveRangeMax)
}

TalentObj.prototype.getReadCasttime=function getReadCasttime()
{
	if((this.ActiveCastTime==0)&&(this.getActiveSpellType()=="casttime"))
	{
		this.setActiveSpellType("instant")
	}
	
	if(this.getActiveSpellType()=="channeled")
	{
		return L(LANGTalent_Spell_Channeled)
	}
	
	if(this.getActiveSpellType()=="nextmelee")
	{
		return L(LANGTalent_Spell_NextMelee)
	}
	
	if(this.getActiveCost()>0)
	{
		if(this.getActiveSpellType()=="instant" && this.getActiveCostType()=="mana")
		{
			return L(LANGTalent_Spell_InstantCast)
		}
		
		if(this.getActiveSpellType()=="instant")
		{
			return L(LANGTalent_Spell_Instant)
		}
		
		if(this.ActiveCastTime < 60)
		{
			return LANGTalent_Spell_CastTimeSec.replace("{0}", this.ActiveCastTime);
		}
		
		if(this.ActiveCastTime%60==0)
		{
			return LANGTalent_Spell_CastTimeMin.replace("{0}", parseInt(this.ActiveCastTime/60));
		}
		
		if(parseInt(this.ActiveCastTime%60)<10)
		{
			return LANGTalent_Spell_CastTimeMinSec.replace("{0}", parseInt(this.ActiveCastTime/60)).replace("{1}", parseInt(this.ActiveCastTime%60));
		}
		
		return LANGTalent_Spell_CastTimeMinSec.replace("{0}", parseInt(this.ActiveCastTime/60)).replace("{1}", parseInt(this.ActiveCastTime%60));
	}
	else
	{
		if(this.getActiveSpellType()=="instant" && this.getActiveCostType()=="Mana")
		{
			return L(LANGTalent_Spell_InstantCast)
		}
		
		if(this.getActiveSpellType()=="instant")
		{
			return L(LANGTalent_Spell_Instant)
		}
		
		if(this.ActiveCastTime<60)
		{
			return this.ActiveCastTime+L(LANGTalent_Spell_TimeSec)
		}
		
		if(this.ActiveCastTime%60==0)
		{
			return parseInt(this.ActiveCastTime/60)+L(LANGTalent_Spell_TimeMin)
		}
		
		if(parseInt(this.ActiveCastTime%60)<10)
		{
			return parseInt(this.ActiveCastTime/60)+L(LANGTalent_Min)+parseInt(this.ActiveCastTime%60)+L(LANGTalent_Spell_TimeSec)
		}
		
		return parseInt(this.ActiveCastTime/60)+L(LANGTalent_Min)+parseInt(this.ActiveCastTime%60)+L(LANGTalent_Spell_TimeSec)
	}
};

TalentObj.prototype.getReadCooldown=function getReadCooldown(){if(this.ActiveCooldown<60){return this.ActiveCooldown+L(LANGTalent_Spell_TimeSec)}if(this.ActiveCooldown%60==0){return parseInt(this.ActiveCooldown/60)+L(LANGTalent_Spell_TimeMin)}if(parseInt(this.ActiveCooldown%60)<10){return parseInt(this.ActiveCooldown/60)+L(LANGTalent_Min)+parseInt(this.ActiveCooldown%60)+L(LANGTalent_Spell_TimeSec)}return parseInt(this.ActiveCooldown/60)+L(LANGTalent_Min)+parseInt(this.ActiveCooldown%60)+L(LANGTalent_Spell_TimeSec)};
TalentObj.prototype.doTooltip=function doTooltip()
{
	var reqMet1 = true;
	var reqMet2 = true;
    var E='<span class="hleft"><strong>'+htmlspecialchars(this.talentname)+"</strong></span>";

    if(this.getType()=="active")
    {
	    E+='<span class="rankright">'+this.getActiveMaxRank()+"</span>"
    }

    E+='<div class="cb"></div>';
	
	if(this.getNumRanks()>0)
	{
		E+=L(LANGTalent_Rank)+this.getCurRank()+"/"+this.getNumRanks()+"<br />"}
		var C=(talentPointsRequired*(this.getRow()-1));
		
		if(C!=0)
		{
			if(treep[this.getTree()]>=C)
			{
				E+='<span class="reqmet">'
			}
			else
			{
				E+='<span class="reqnotmet">'
				reqMet1 = false;
			}
			
			E+=LANGTalent_RequiresPointsInTalents.replace("{0}", (talentPointsRequired*(this.getRow()-1))).replace("{1}", treen[this.getTree()])+"</span><br />"
		}
		
		for(var B=0;B<this.reqs.length;B++)
		{
			var A=translateSticky(this.reqs[B]);
			var D=A[1];
			var F=A[2];
			
			if(!treec[this.getTree()][D][F].isMaxRank())
			{
				E+='<span class="reqnotmet">'
				reqMet2 = false;
			}
			else
			{
				E+='<span class="reqmet">'
			}

			if(treec[this.getTree()][D][F].getNumRanks()==1)
			{
				E+=LANGTalent_RequiresPointInTalent.replace("{0}", treec[this.getTree()][D][F].getNumRanks()).replace("{1}", htmlspecialchars(treec[this.getTree()][D][F].getTalentname()));
			}
			else
			{
				E+=LANGTalent_RequiresPointsInTalent.replace("{0}", treec[this.getTree()][D][F].getNumRanks()).replace("{1}", htmlspecialchars(treec[this.getTree()][D][F].getTalentname()));
			}
			
			E+="</span><br />"
		}
		
		if(this.getType()=="active")
		{
			if(this.getActiveCost()>0)
			{
				E+='<span class="hleft">'+this.getReadCost()+"</span>";
				
				if(!this.hasNoRange())
				{
					E+='<span class="hright">'+htmlspecialchars(this.getReadRange())+"</span>"
				}
				
				E+='<div class="cb"></div>';
				E+='<span class="hleft">'+htmlspecialchars(this.getReadCasttime())+"</span>";
				
				if(this.getActiveCooldown()>0)
				{
					E+='<span class="hright">'+LANGTalent_Spell_Cooldown.replace("{0}", htmlspecialchars(this.getReadCooldown()))+"</span>"
				}
			}
			else
			{
				if(this.hasNoRange())
				{
					E+='<span class="hleft">'+htmlspecialchars(this.getReadCasttime())+"</span>";
					
					if(this.getActiveCooldown()>0)
					{
						E+='<span class="hright">'+LANGTalent_Spell_Cooldown.replace("{0}", htmlspecialchars(this.getReadCooldown()))+"</span>"
					}
				}
				else
				{
					E+='<span class="hleft">'+htmlspecialchars(this.getReadRange())+"</span>";
					E+='<div class="cb"></div>';E+='<span class="hleft">'+htmlspecialchars(this.getReadCasttime())+"</span>";
					
					if(this.getActiveCooldown()>0)
					{
						E+='<span class="hright">'+LANGTalent_Spell_Cooldown.replace("{0}", htmlspecialchars(this.getReadCooldown()))+"</span>"
					}
				}
			}
			
			E+='<div class="cb"></div>';
			
			if(this.getActiveReagents()!="")
			{
				E+='<span class="left">'+L(LANGTalent_Spell_Reagents)+uni_unescape(htmlspecialchars(this.getActiveReagents()))+"</span>"
			}

			if(this.getActiveRequires()!="")
			{
				E+='<span class="left">'+L(LANGTalent_Requires)+uni_unescape(htmlspecialchars(this.getActiveRequires()))+"</span>"
			}

			E+='<div class="cb"></div>';
			E+='<span class="desc">'+this.getRankDescription(this.getTree(), this.getRow(), this.getPos(), this.getCurRank())+"</span>"
		}
		else
		{
			if(this.getType()=="passive")
			{
				E+='<span class="desc">'+this.getRankDescription(this.getTree(), this.getRow(), this.getPos(), this.getCurRank())+"</span>"
			}
			else
			{
				E+='<span class="desc">'+this.getRankDescription(this.getTree(), this.getRow(), this.getPos(), this.getCurRank())+"</span>"
			}
		}
		
		if (!this.isMaxRank() && this.getCurRank() > 0)
		{
			E+="<br/><br/>"+L(LANGTalent_NextRank)+"<br/>"
			E+='<span class="desc">'+this.getRankDescription(this.getTree(), this.getRow(), this.getPos(), this.getCurRank() + 1)+"</span>"
		}
		
		
        var pointLockReached = (pointlock>0&&((treep[1]+treep[2]+treep[3])>=pointlock));

		if (reqMet1 == true && reqMet2 == true && pointLockReached == false)
		{
			if (this.getCurRank() == 0)
			{
				E+='<br/><span class="reqmet">'+L(LANGTalent_ClickToLearn)+"</span>"
			}
			
			if (!this.isMaxRank() && this.getCurRank() > 0)
			{
				E+='<br/><span class="reqmet">'+L(LANGTalent_ClickToLearnNextRank)+"</span>"
			}
		}
		
		if (this.isMaxRank())
		{
			E+='<br/><span class="reqnotmet">'+L(LANGTalent_RightClickToUnlearn)+"</span>"
		}
		
		tooltipcelm.innerHTML=E;
		showTooltip(this.butbg);
		tooltipcelm.innerHTML=E
};

TalentObj.prototype.redraw=function redraw(B)
{
    if(this.getType()=="hidden")
    {
        this.hideButton();
        this.butc.innerHTML="";
        return
    }

    if(this.getType()=="empty")
    {
        this.hideButton();
        this.butc.innerHTML="";
        return;
    }
    else
    {
        this.showButton();
    }
    
    var arrowrd = document.getElementById("arrowrd" + this.tree + "" + this.row + "" + this.pos);
    var arrowr = document.getElementById("arrowr" + this.tree + "" + this.row + "" + this.pos);
    var arrowld = document.getElementById("arrowld" + this.tree + "" + this.row + "" + this.pos);
    var arrowl = document.getElementById("arrowl" + this.tree + "" + this.row + "" + this.pos);
    var arrowd = document.getElementById("arrowd" + this.tree + "" + this.row + "" + this.pos);

    if(this.reqsAreOk())
    {
        var pointLockReached = (pointlock>0&&((treep[1]+treep[2]+treep[3])>=pointlock));

        if(pointLockReached && this.getCurRank() == 0)
        {
            this.butimg.style.backgroundPosition="0px 0px";
            setOpacity(this.butbg,10);
            this.butc.innerHTML="";
            var A=this.getIcon().replace(/Spells\//gi,"SpellsGrey/");
            this.butbg.style.backgroundImage="url("+imagepath+A+")"
        }
        else
        {
            if(this.getNumRanks()>0)
            {
                this.butc.innerHTML=this.getCurRank()+"/"+this.getNumRanks()
            }
            else
            {
                this.butc.innerHTML="X"
            }

            if (arrowrd != null) arrowrd.className = "arrowrd_yellow";
            if (arrowr != null) arrowr.className = "arrowr_yellow";
            if (arrowld != null) arrowld.className = "arrowld_yellow";
            if (arrowl != null) arrowl.className = "arrowl_yellow";
            if (arrowd != null) arrowd.className = "arrowd_yellow";

            if((this.getCurRank() == this.getNumRanks()) || pointLockReached)
            {
                this.butimg.style.backgroundPosition="-224px 0px";
                this.butc.style.color="#FFD100"
            }
            else
            {
                this.butimg.style.backgroundPosition="-56px 0px";
                this.butc.style.color="#2EFF00"
            }
            
            setOpacity(this.butbg,10);
            this.butbg.style.backgroundImage="url("+imagepath+this.getIcon()+")"
        }
    }
    else
    {
        if (arrowrd != null) arrowrd.className = "arrowrd";
        if (arrowr != null) arrowr.className = "arrowr";
        if (arrowld != null) arrowld.className = "arrowld";
        if (arrowl != null) arrowl.className = "arrowl";
        if (arrowd != null) arrowd.className = "arrowd";

        this.butimg.style.backgroundPosition="0px 0px";
        setOpacity(this.butbg,10);
        this.butc.innerHTML="";
        var A=this.getIcon().replace(/Spells\//gi,"SpellsGrey/");
        this.butbg.style.backgroundImage="url("+imagepath+A+")"
    }
};

TalentObj.prototype.reposition=function reposition(){this.butbg.style.left=(25+65*(this.getPos()-1)+treel[this.getTree()])+"px";this.butbg.style.top=(5+65*(this.getRow()-1)+treet[this.getTree()])+"px";for(var B=0;B<this.reqs.length;B++){var A=translateSticky(this.reqs[B]);var C=A[1];var D=A[2];removeArrow(this.getTree(),C,D,this.getRow(),this.getPos());spawnArrow(this.getTree(),C,D,this.getRow(),this.getPos())}this.redraw(false)};
TalentObj.prototype.showButton=function showButton(){this.butbg.style.display=""};
TalentObj.prototype.hideButton=function hideButton(){this.butbg.style.display="none"};
TalentObj.prototype.hasNoRange=function hasNoRange(){return(this.ActiveRangeMin==0&&this.ActiveRangeMax==0)};
TalentObj.prototype.getID=function getID(){return"t"+this.tree+"r"+this.row+"p"+this.pos};
TalentObj.prototype.getShortID=function getShortID(){return this.tree+""+this.row+""+this.pos};
TalentObj.prototype.isMaxRank=function isMaxRank(){return(this.getCurRank()==this.getNumRanks())};
TalentObj.prototype.getActiveSave=function getActiveSave(){var A=this.getActiveCost();A+="|"+this.getActiveCostType();A+="|"+this.getActiveSpellType();A+="|"+this.getActiveCastTime();A+="|"+this.getActiveCooldown();A+="|"+this.getActiveRangeMin();A+="|"+this.getActiveRangeMax();A+="|"+this.getActiveReagents();A+="|"+this.getActiveRequires();return htmlspecialchars(A)};

//-------------------------------------------
// Arrow Functions
//-------------------------------------------
function spawnArrow(I,H,F,C,A)
{
    I=parseInt(I);
    H=parseInt(H);
    F=parseInt(F);
    C=parseInt(C);
    A=parseInt(A);
    
    if(!checkArrow(I,H,F,C,A,false))
    {
        return false
    }
    
    var E=$("tree"+I);
    var B=(A-F);
    
    if(B>0)
    {
        var G=E.appendChild(document.createElement("div"));
        
        if(H<C)
        {
            G.id="arrowrd"+I+C+A;
            G.className="arrowrd";
            G.style.left=(obj_left(E)+25)+65*(F-1)+47+"px";
            G.style.top=(5+65*(H)+obj_top(E))-45+"px";
            G.style.height="15px";
            G.style.width=51+(65*(B-1))+"px"
        }
        else
        {
            G.id="arrowr"+I+C+A;
            G.className="arrowr";
            G.style.left=(obj_left(E)+25)+65*(F-1)+47+"px";
            G.style.top=(5+65*(H)+obj_top(E))-45+"px";
            G.style.height="15px";
            G.style.width=25+(65*(B-1))+"px"
        }
        
        //G.id="arrow"+I+H+F+C+A
    }
    
    if(B<0)
    {
        possideways=B*-1;
        var G=E.appendChild(document.createElement("div"));
        
        if(H<C)
        {
            G.id="arrowld"+I+C+A;
            G.className="arrowld";
            G.style.width=51+(65*(possideways-1))+"px";
            G.style.left=(obj_left(E)+25)+65*(F-1)-47-(65*(possideways-1))+"px";
            G.style.top=(5+65*(H)+obj_top(E))-45+"px";
            G.style.height="15px"
        }
        else
        {
            G.id="arrowl"+I+C+A;
            G.className="arrowl";
            G.style.width=25+(65*(possideways-1))+"px";
            G.style.left=(obj_left(E)+25)+65*(F-1)-23-(65*(possideways-1))+"px";
            G.style.top=(5+65*(H)+obj_top(E))-45+"px";
            G.style.height="15px"
        }
        
        //G.id="arrow"+I+H+F+C+A
    }
    
    if(H<C)
    {
        var G=E.appendChild(document.createElement("div"));
        G.className="arrowd";
        G.style.left=(obj_left(E)+25)+65*(A-1)+18+"px";
        
        if(B!=0)
        {
            G.style.top=(5+65*(H)+obj_top(E))-30+"px";
            G.style.height=35+(65*((C-H)-1))+"px"
        }
        else
        {
            G.style.top=(5+65*(H)+obj_top(E))-18+"px";
            G.style.height=22+(65*((C-H)-1))+"px"
        }

        G.style.width="15px";
        //G.id="arrow"+I+H+F+C+A+"d"
        G.id="arrowd"+I+C+A;
    }
    
    var B=(F-A);
    
    if(B<0)
    {
        B*=-1;B-=1;
        
        for(var D=0;D<B;D++)
        {
            treec[I][H][F+(B-D)].setType("hidden");
            treec[I][H][F+(B-D)].redraw(false)
        }
    }
    else
    {
        B-=1;
        
        for(var D=0;D<B;D++)
        {
            treec[I][H][A-(D-B)].setType("hidden");
            treec[I][H][A-(D-B)].redraw(false)
        }
    }
    
    if(H<C)
    {
        if((F-A)!=0)
        {
            treec[I][H][A].setType("hidden");
            treec[I][H][A].redraw(false)
        }
        
        for(D=1;D<(C-H);D++)
        {
            treec[I][H+D][A].setType("hidden");
            treec[I][H+D][A].redraw(false)
        }
    }
}
function checkArrow(I,H,F,C,A,E){I=parseInt(I);H=parseInt(H);F=parseInt(F);C=parseInt(C);A=parseInt(A);if(H>C){return false}if(H==C&&F==A){return false}if((C-H)>4){return false}if(!validArrowTalent(I,H,F)){return false}if(!validArrowTalent(I,C,A)){if(!E){return false}}var B=(F-A);if(B<0){B*=-1;B-=1;var D=0;while(D<B){if(canArrow(I,H,F+(B-D))){D++}else{return false}}}else{B-=1;var D=0;while(D<B){if(canArrow(I,H,A-(D-B))){D++}else{return false}}}if(H<C){if(!canArrow(I,H,A)&&((F-A)!=0)){return false}var G=C-H;for(D=1;D<G;D++){if(!canArrow(I,(H+D),A)){return false}}}return true}
function removeArrow(I,H,F,C,A){I=parseInt(I);H=parseInt(H);F=parseInt(F);C=parseInt(C);A=parseInt(A);if(H>C){return false}if(H==C&&F==A){return false}if((F-A)!=0){var G=$("arrow"+I+H+F+C+A);if(G){var D=G.parentNode;D.removeChild(G)}}if(H<C){var G=$("arrow"+I+H+F+C+A+"d");if(G){var D=G.parentNode;D.removeChild(G)}}var B=(F-A);if(B<0){B*=-1;B-=1;for(var E=0;E<B;E++){treec[I][H][F+(B-E)].setType("empty");treec[I][H][F+(B-E)].redraw(false)}}else{B-=1;for(var E=0;E<B;E++){treec[I][H][A-(E-B)].setType("empty");treec[I][H][A-(E-B)].redraw(false)}}if(H<C){if((F-A)!=0){treec[I][H][A].setType("empty");treec[I][H][A].redraw(false)}for(E=1;E<(C-H);E++){treec[I][H+E][A].setType("empty");treec[I][H+E][A].redraw(false)}}}
function canArrow(A,B,C){A=parseInt(A);B=parseInt(B);C=parseInt(C);if(treec[A][B][C].getType()=="active"){return false}if(treec[A][B][C].getType()=="passive"){return false}if(treec[A][B][C].getType()=="hidden"){return false}return true}
function validArrowTalent(A,B,C){A=parseInt(A);B=parseInt(B);C=parseInt(C);if(treec[A][B][C].getType()=="active"){return true}if(treec[A][B][C].getType()=="passive"){return true}return false};

//-------------------------------------------
// Processing
//-------------------------------------------
function procesData(data){if(data=="err:404"){alert(L("The selected tree was not found."))}else{if(data.substr(0,4)!="jsn:"){if(data.substr(0,4)=="suc:"){data=data.substr(4)}var maxi=getMaxi();for(var k=1;k<=3;k++){for(var i=1;i<=maxi;i++){for(var j=1;j<=4;j++){treec[k][i][j].setType("empty");treec[k][i][j].redraw(false)}}}if(data.substr(0,1)=="c"){var firstIndex=data.indexOf("#");var thisclass=data.substr(1,(firstIndex-2));var treeType=data.substr((firstIndex-1),1);setClass(thisclass);switch(treeType){case 0:treeTypeNormal();break;case 1:treeTypeTBC();break;case 2:treeTypeWotLK();break}}var dataarray=data.split("\n");for(var i=0;i<dataarray.length;i++){if(dataarray[i].length>1){procesTalent(dataarray[i])}}for(var i=0;i<dataarray.length;i++){if(dataarray[i].length>1){procesTalentPreReqs(dataarray[i])}}}else{data=data.substr(4);var rdata=null;try{var rdata=eval("("+data+")")}catch(e){return }$("treeTitle").value=rdata.title;$("authorComments").value=rdata.authorcomment;$("isHidden").value=rdata.isHidden;setClass(rdata.pclass);switch(rdata.treetype){case"0":treeTypeNormal();break;case"1":treeTypeTBC();break;case"2":treeTypeWotLK();break}var dataarray=rdata.content.split("\n");for(var i=0;i<dataarray.length;i++){if(dataarray[i].length>1){procesTalent(dataarray[i])}}for(var i=0;i<dataarray.length;i++){if(dataarray[i].length>1){procesTalentPreReqs(dataarray[i])}}}}}
function procesTalent(C)
{
	var E=/(\d+)#([AP])#\\{0,1}\"(.*)\\{0,1}\"#\\{0,1}\"(.*)\\{0,1}\"#\\{0,1}\"(.*)\\{0,1}\"#([\d|]*)#(.*)#/i.exec(C);
	var B=E[1];
	
	if(B.length>=3)
	{
		var D=translateSticky(E[1]);
		var A=D[0];
		var G=D[1];
		var H=D[2];
		var F=treec[A][G][H];
		F.setType(cleanData(E[2]));
		F.setTalentname(cleanData(E[3]));
		F.setIcon("Spells/"+cleanData(E[4]));
		F.setDescription(cleanData(E[5]));
		
		if(F.getType()=="active")
		{
			procesTalentActive(A,G,H,E[7])
		}

		if(F.getType()=="passive")
		{
			procesTalentPassive(A,G,H,E[7])
		}
		
		F.redraw(false)
	}
}

function procesTalentPreReqs(C){var E=/(\d+)#([AP])#\\{0,1}\"(.*)\\{0,1}\"#\\{0,1}\"(.*)\\{0,1}\"#\\{0,1}\"(.*)\\{0,1}\"#([\d|]*)#(.*)#/i.exec(C);var B=E[0];var D=translateSticky(E[1]);var A=D[0];var F=D[1];var G=D[2];procesTalentReqs(A,F,G,E[6])}
function procesTalentReqs(A,D,E,C)
{
    if(C.length<3)
    {
        return
    }
    
    var B=C.split("|");
    
    for(i=0;i<B.length;i++)
    {
        treec[A][D][E].addReq(B[i])
    }
}

function procesTalentActive(A,E,F,C)
{
    var B=C.split("|");
    
    if(B.length==10)
    {
        var D=treec[A][E][F];
        D.setActiveCost(B[0]);
        D.setActiveCostType(B[1]);
        D.setActiveSpellType(B[2]);
        D.setActiveCastTime(B[3]);
        D.setActiveCooldown(B[4]);
        D.setActiveRangeMin(B[5]);
        D.setActiveRangeMax(B[6]);
        D.setActiveReagents(B[7]);
        D.setActiveRequires(B[8]);
        D.setActiveMaxRank(B[9])
    }
}

function procesTalentPassive(A,F,G,E)
{
    if(E.length<3)
    {
        treec[A][F][G].setNumRanks(1);
        return
    }
    
    var C=E.split("|");
    var D=E.substring(0,1);
    treec[A][F][G].setNumRanks(D);
    C[0]=C[0].substring(1);
    
    for(var B=0;B<C.length;B++)
    {
        treec[A][F][G].setRank((parseInt(B%D)+1),(parseInt(Math.ceil((B+0.5)/D))-1),C[B])
    }
}

//-------------------------------------------
// Global
//-------------------------------------------
var curtree=0;
var currow=0;
var curpos=0;
var treec=new Array(3);
var treep=new Array(3);
var treen=new Array(3);
var treeInternalName=new Array(3);
var treee=new Array(3);
var treet=new Array(3);
var treel=new Array(3);
var switchActive=false;
var tooltipelm=null;
var tooltipcelm=null;
var pointlock=0;

function getMaxi()
{
    var A=9;

    switch(treeType)
    {
        case"WotLK": return 11;
        case"TBC": return 9;
        case"normal": return 7;
        case"hunterpet": return 5;
    }
}

function redrawAll()
{
    var B=getMaxi();
    
    for(var A=1;A<=3;A++)
    {
        for(var D=1;D<=B;D++)
        {
            for(var C=1;C<=4;C++)
            {
                treec[A][D][C].redraw(false)
            }
        }
    }
}

function setClass(A)
{
	currentClass=A;
	
	switch(A)
	{
		case"druid":
		    treeInternalName[1]="Balance";
		    treeInternalName[2]="Feral";
		    treeInternalName[3]="Restoration";
		    treen[1]=L(LANGTalent_Druid_Balance);
		    treen[2]=L(LANGTalent_Druid_Feral);
		    treen[3]=L(LANGTalent_Druid_Restoration);
		    break;
		case"deathknight":
		    treeInternalName[1]="Blood";
		    treeInternalName[2]="Frost";
		    treeInternalName[3]="Unholy";
		    treen[1]=L(LANGTalent_Deathknight_Blood);
		    treen[2]=L(LANGTalent_Deathknight_Frost);
		    treen[3]=L(LANGTalent_Deathknight_Unholy);
		    break;
		case"hunter":
		    treeInternalName[1]="BeastMastery";
		    treeInternalName[2]="Marksmanship";
		    treeInternalName[3]="Survival";
		    treen[1]=L(LANGTalent_Hunter_BeastMastery);
		    treen[2]=L(LANGTalent_Hunter_Marksmanship);
		    treen[3]=L(LANGTalent_Hunter_Survival);
		    break;
		case"mage":
		    treeInternalName[1]="Arcane";
		    treeInternalName[2]="Fire";
		    treeInternalName[3]="Frost";
		    treen[1]=L(LANGTalent_Mage_Arcane);
		    treen[2]=L(LANGTalent_Mage_Fire);
		    treen[3]=L(LANGTalent_Mage_Frost);
		    break;
		case"paladin":
		    treeInternalName[1]="Holy";
		    treeInternalName[2]="Protection";
		    treeInternalName[3]="Retribution";
		    treen[1]=L(LANGTalent_Paladin_Holy);
		    treen[2]=L(LANGTalent_Paladin_Protection);
		    treen[3]=L(LANGTalent_Paladin_Retribution);
		    break;
		case"priest":
		    treeInternalName[1]="Discipline";
		    treeInternalName[2]="Holy";
		    treeInternalName[3]="Shadow";
		    treen[1]=L(LANGTalent_Priest_Discipline);
		    treen[2]=L(LANGTalent_Priest_Holy);
		    treen[3]=L(LANGTalent_Priest_Shadow);
		    break;
		case"rogue":
		    treeInternalName[1]="Assassination";
		    treeInternalName[2]="Combat";
		    treeInternalName[3]="Subtlety";
		    treen[1]=L(LANGTalent_Rogue_Assassination);
		    treen[2]=L(LANGTalent_Rogue_Combat);
		    treen[3]=L(LANGTalent_Rogue_Subtlety);
		    break;
		case"shaman":
		    treeInternalName[1]="Elemental";
		    treeInternalName[2]="Enhancement";
		    treeInternalName[3]="Restoration";
		    treen[1]=L(LANGTalent_Shaman_Elemental);
		    treen[2]=L(LANGTalent_Shaman_Enhancement);
		    treen[3]=L(LANGTalent_Shaman_Restoration);
		    break;
		case"warlock":
		    treeInternalName[1]="Affliction";
		    treeInternalName[2]="Demonology";
		    treeInternalName[3]="Destruction";
		    treen[1]=L(LANGTalent_Warlock_Affliction);
		    treen[2]=L(LANGTalent_Warlock_Demonology);
		    treen[3]=L(LANGTalent_Warlock_Destruction);
		    break;
		case"warrior":
		    treeInternalName[1]="Arms";
		    treeInternalName[2]="Fury";
		    treeInternalName[3]="Protection";
		    treen[1]=L(LANGTalent_Warrior_Arms);
		    treen[2]=L(LANGTalent_Warrior_Fury);
		    treen[3]=L(LANGTalent_Warrior_Protection);
		    break;
		case"hunterpet":
		    treeInternalName[1]="Tenacity";
		    treeInternalName[2]="Ferocity";
		    treeInternalName[3]="Cunning";
		    treen[1]=L(LANGTalent_HunterPet_Tenacity);
		    treen[2]=L(LANGTalent_HunterPet_Ferocity);
		    treen[3]=L(LANGTalent_HunterPet_Cunning);
		    break;
	}

	for(i=1;i<=3;i++)
	{
		treee[i].style.backgroundImage="url("+ imagepath +"talent/bg/"+treeType+"/"+A+treeInternalName[i]+".jpg)";
		var B=$("treeheadertext"+i);
		B.innerHTML=treen[i]
	}
}
function butclick2(A){if(!A){A=event}if(A.preventDefault){A.preventDefault()}else{A.returnResult=false}if(A.stopPropagation){A.stopPropagation()}else{A.cancelBubble=true}return false}
function butmouseover(B){if(!B){B=event}if(B.target){elm=B.target}if(B.srcElement){elm=B.srcElement}var C=translateElmId(elm.id);var A=C[0];var D=C[1];var E=C[2];elm=$(treec[A][D][E].getID());treec[A][D][E].doTooltip();}
function butmouseout(B)
{
    if(!B)
    {
        B=event
    }
    
    if(B.target)
    {
        elm=B.target
    }
    
    if(B.srcElement)
    {
        elm=B.srcElement
    }

    hideTooltip()
}

function getClientSize()
{
    var width=0,height=0;
    
    if(typeof window.innerWidth=="number")
    {
        width=window.innerWidth;
        height=window.innerHeight
    }
    else
    {
        if(document.documentElement&&(document.documentElement.clientWidth||document.documentElement.clientHeight))
        {
            width=document.documentElement.clientWidth;
            height=document.documentElement.clientHeight
        }
        else
        {
            if(document.body&&(document.body.clientWidth||document.body.clientHeight))
            {
                width=document.body.clientWidth;
                height=document.body.clientHeight
            }
        }
    }

    return {x:width,y:height}
}

function schoolHover(C){counts=0;countt=0;counta=0;countp=0;var A=getMaxi();for(var D=1;D<=A;D++){for(var B=1;B<=4;B++){counts+=parseInt(treec[C][D][B].getCurRank());countt+=parseInt(treec[C][D][B].getNumRanks());if(treec[C][D][B].getType()=="active"){counta+=1}if(treec[C][D][B].getType()=="passive"){countp+=1}}}treep[C]=counts;tooltipcelm.innerHTML="<strong>"+treen[C]+"</strong><br />"+L(LANGTalent_PointsSpendInThisTree)+counts+"<br />"+L(LANGTalent_TotalPointsInThisTree)+countt+"<br />"+L(LANGTalent_ActiveTalentsInThisTree)+counta+"<br />"+L(LANGTalent_PassiveTalentsInThisTree)+countp;var E=$("treeheader"+C);showTooltip(E,true)}
function hideTooltip(){tooltipelm.style.display="none"}
function showTooltip(F,A)
{
	tooltipelm.style.display="";
	var C=getClientSize();
	var B=(A==true?0:F.offsetWidth);
	var E=obj_left(F)+B;
	var D=obj_top(F)-tooltipelm.offsetHeight;
	
	if(E<0)
	{
		E=0
	}
	
	if(D<0)
	{
		D=obj_top(F)+F.offsetHeight
	}
	
	if(A==true)
	{
		if((E+tooltipelm.offsetWidth)+1>=C.x)
		{
			E=C.x-tooltipelm.offsetWidth
		}
	}
	else
	{
		if((E+tooltipelm.offsetWidth+B)+1>=C.x)
		{
			E=obj_left(F)-tooltipelm.offsetWidth
		}
	}
	
	if((D+tooltipelm.offsetHeight)+1>=C.y)
	{
		D=obj_top(F)-tooltipelm.offsetHeight
	}
	
	tooltipelm.style.top=D+"px";tooltipelm.style.left=E+"px"
}

function translateElmId(A){A.match(/t(\d+)r(\d+)p(\d+)/);return[RegExp.$1,RegExp.$2,RegExp.$3]}
function translateSlash(A){A.match(/(\d+)\/(\d+)\/(\d+)/);return[RegExp.$1,RegExp.$2,RegExp.$3]}
function translateSticky(A){A.match(/([1|2|3])(\d+)([1|2|3|4])/);return[RegExp.$1,RegExp.$2,RegExp.$3]};

var translator=new Array("a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z");

window.onload=function()
{
	tooltipelm=$("tooltipbox");
	tooltipcelm=$("tooltipcontent");
	hideTooltip();
	
	for(var C=1;C<=3;C++)
	{
		var B=getMaxi();
		treec[C]=new Array(B);
		treep[C]=0;treen[C]="";
		treee[C]=$("tree"+C);
		treet[C]=obj_top(treee[C]);
		treel[C]=obj_left(treee[C]);
		var F=$("treeheader"+C);
		var A=$("treeheaderimg"+C);
		addListener(F,"mouseover",BindArgument(schoolHover,C));
		addListener(F,"mouseout",hideTooltip);
		addListener(F,"mouseup",butclick2);
		addListener(F,"mousedown",butclick2);
		addListener(A,"mouseup",BindArgument(ResetTree,C));
		addListener(treee[C],"mouseup",butclick2);
		addListener(treee[C],"mousedown",butclick2);
		addListener(treee[C],"contextmenu",butclick2);
		addListener(treee[C],"mouseover",butclick2);
		addListener(treee[C],"mouseout",butclick2);
		addListener(treee[C],"dragstart",butclick2);
		addListener(treee[C],"selectstart",butclick2);
		
		for(var E=1;E<=B;E++){treec[C][E]=new Array(4);for(var D=1;D<=4;D++){treec[C][E][D]=new TalentObj(C,E,D)}}
	}


    var B=$("linkThisBuild");
    B.innerHTML=LANGTalent_LinkBuild;
//    B=$("lblRequiredLevel");
//    B.innerHTML=LANGTalent_RequiredLevel;
//    B=$("lblPointsLeft");
//    B.innerHTML=LANGTalent_PointsLeft;
//    B=$("lblPointsUsed");
//    B.innerHTML=LANGTalent_PointsUsed;



	setClass(currentClass);
	procesData(taldata);
	loadBuild();
	updatePointsOverview();
	redrawAll()
};

function butclick(B){if(!B){B=event}if(B.target){elm=B.target}if(B.srcElement){elm=B.srcElement}var D=B.which?B.which:B.button;var C=translateElmId(elm.id);var A=C[0];var E=C[1];var F=C[2];if(treec[A][E][F].getType()=="empty"){return false}if(B.shiftKey==true||D>1){treec[A][E][F].subPoint();updatePointsOverview(A)}else{if(treec[A][E][F].reqsAreOk()){treec[A][E][F].addPoint();updatePointsOverview(A)}}treec[A][E][F].doTooltip();return false}
function ResetTrees(){var B=getMaxi();for(var A=1;A<=3;A++){treep[A]=0;for(var D=1;D<=B;D++){for(var C=1;C<=4;C++){treec[A][D][C].setCurRank(0);treec[A][D][C].redraw(false)}}}updatePointsOverview()}
function ResetTree(A){var B=getMaxi();for(var D=1;D<=B;D++){for(var C=1;C<=4;C++){treec[A][D][C].setCurRank(0);treec[A][D][C].redraw(false)}}treep[A]=0;updatePointsOverview()}
function redrawAll(){var B=getMaxi();for(var A=1;A<=3;A++){treep[A]=0;for(var D=1;D<=B;D++){for(var C=1;C<=4;C++){treep[A]+=parseInt(treec[A][D][C].getCurRank())}}}for(var A=1;A<=3;A++){for(var D=1;D<=B;D++){for(var C=1;C<=4;C++){treec[A][D][C].redraw(false)}}}updatePointsOverview()}

function updatePointsOverview()
{
    var B=$("pointsused");
    B.innerHTML=treep[1]+treep[2]+treep[3];

    B=$("pointsleft");
    B.innerHTML=pointlock - (treep[1]+treep[2]+treep[3]);
    
    B=$("levelneeded");
    if(treep[1]+treep[2]+treep[3]==0)
    {
        B.innerHTML="-";
    }
    else
    {
        B.innerHTML=treep[1]+treep[2]+treep[3] + 9;
    }

    for(var A=1;A<=3;A++)
    {
        $("treeheadertext"+A).innerHTML="<span class='yellowFont'>"+treen[A]+"</span><span class='stdText'> - "+treep[A]+" "+L(LANGTalent_Points)+"</span>"
    }

    var fullLink = createBuildLink();
    document.getElementById("buildText").value = rootUrl+fullLink;
    
    var link_enUS = document.getElementById("link_enUS");
    var link_deDE = document.getElementById("link_deDE");
    var link_frFR = document.getElementById("link_frFR");
    var link_esES = document.getElementById("link_esES");
    var link_ruRU = document.getElementById("link_ruRU");
    var link_zhCN = document.getElementById("link_zhCN");
    var link_zhTW = document.getElementById("link_zhTW");
    var link_koKR = document.getElementById("link_koKR");
    var layoutLink = document.getElementById("layoutLink");
    
    if (link_enUS != null) link_enUS.href = fullLink + "&language=enUS";
    if (link_deDE != null) link_deDE.href = fullLink + "&language=deDE";
    if (link_frFR != null) link_frFR.href = fullLink + "&language=frFR";
    if (link_esES != null) link_esES.href = fullLink + "&language=esES";
    if (link_ruRU != null) link_ruRU.href = fullLink + "&language=ruRU";
    if (link_zhCN != null) link_zhCN.href = fullLink + "&language=zhCN";
    if (link_zhTW != null) link_zhTW.href = fullLink + "&language=zhTW";
    if (link_koKR != null) link_koKR.href = fullLink + "&language=koKR";
    if (layoutLink != null) layoutLink.href = fullLink + layoutSwitch;
}

function loadBuild()
{
    if(fillOutString.length==0)
    {
        return
    }

    switch(fillOutString.charAt(0))
    {
        case"9":
            setPointLock(0);
            fillOutString=fillOutString.substring(1);
            break;
        case"8":
            setPointLock(51);
            fillOutString=fillOutString.substring(1);
            break;
        case"7":
            setPointLock(61);
            fillOutString=fillOutString.substring(1);
            break;
        case"6":
            setPointLock(71);
            fillOutString=fillOutString.substring(1);
            break;
        case"5":
            setPointLock(16);
            fillOutString=fillOutString.substring(1);
            break;
        case"4":
            setPointLock(20);
            fillOutString=fillOutString.substring(1);
            break;
        default:
            setPointLock(0);
            break;
    }
    
    for(var C=(translator.length-1);C>1;C--)
    {
        fillOutString=fillOutString.replace(translator[C],stringFill("0",C))
    }
    
    var D="000";
    
    for(var C=0;C<fillOutString.length;C++)
    {
        var B=translateSlash(D);
        var A=B[0];
        var E=B[1];
        var F=B[2];
        
        D=getNext(A,E,F);
        
        if(D=="")
        {
            return
        }
        
        B=translateSlash(D);
        A=B[0];
        E=B[1];
        F=B[2];
        treec[A][E][F].setCurRank(parseInt(fillOutString.charAt(C)))
    }
}

function getNext(A,F,G){var C=getMaxi();if(A==0&&F==0&&G==0){for(var B=1;B<=3;B++){for(var E=1;E<=C;E++){for(var D=1;D<=4;D++){if(treec[B][E][D].getType()=="passive"||treec[B][E][D].getType()=="active"){return B+"/"+E+"/"+D}}}}}else{A=Math.min(A,3);A=Math.max(A,1);F=Math.min(F,C);F=Math.max(F,1);G=Math.min(G,4);G=Math.max(G,1);for(var B=A;B<=3;B++){for(var E=1;E<=C;E++){if(A==B&&E<F){continue}for(var D=1;D<=4;D++){if(A==B&&F==E&&G==D){continue}if(A==B&&F==E&&D<G){continue}if(treec[B][E][D].getType()=="passive"||treec[B][E][D].getType()=="active"){return B+"/"+E+"/"+D}}}}}return""}

function createBuildLink()
{
    var C=getMaxi();
    var A="";
    
    for(var B=1;B<=3;B++)
    {
        for(var E=1;E<=C;E++)
        {
            for(var D=1;D<=4;D++)
            {
                if(treec[B][E][D].getType()=="passive"||treec[B][E][D].getType()=="active")
                {
                    A+=treec[B][E][D].getCurRank().toString();
                }
            }
        }
    }
    
    for(var E=(translator.length-1);E>1;E--)
    {
        A=A.replace(stringFill("0",E),translator[E])
    }
    
    switch(pointlock)
    {
        default:
        case 0:
            A="9"+A;
            break;
        case 51:
            A="8"+A;
            break;
        case 61:
            A="7"+A;
            break;
        case 71:
            A="6"+A;
            break;
        case 16:
            A="5"+A;
            break;
        case 20:
            A="4"+A;
            break;
    }

    A = className + "/" + A;

    return A;
}

function setPointLock(A)
{
    switch(A)
    {
        case 71:
        case 61:
        case 51:
            if(treep[1]+treep[2]+treep[3]>A)
            {
                redrawAll();
                
                if(treep[1]+treep[2]+treep[3]>A)
                {
                    alert(L(LANGTalent_UnableSetPoints));
                    return
                }
            }
            break;
        case 20:
        {
            if(treep[1]+treep[2]+treep[3]>A)
            {
                redrawAll();
                
                if(treep[1]+treep[2]+treep[3]>A)
                {
                    alert(L(LANGTalent_UnableSetPoints));
                    return
                }
            }
            
            var B=$("link5Points");
            B.innerHTML=LANGTalent_Remove5Points;
            B.href="javascript:setPointLock(16);";
            break;
        }
        case 16:
        {
            if(treep[1]+treep[2]+treep[3]>A)
            {
                redrawAll();
                
                if(treep[1]+treep[2]+treep[3]>A)
                {
                    alert(L(LANGTalent_UnableSetPoints));
                    return
                }
            }
            
            var B=$("link5Points");
            B.innerHTML=LANGTalent_Add5Points;
            B.href="javascript:setPointLock(20);";
            break;
        }
        default:
        case 0:
            break
        }

    pointlock=A;
    redrawAll();
}

function reposAll(){for(var B=1;B<=3;B++){treet[B]=obj_top(treee[B]);treel[B]=obj_left(treee[B])}var A=getMaxi();for(var B=1;B<=3;B++){for(var D=1;D<=A;D++){for(var C=1;C<=4;C++){treec[B][D][C].reposition()}}}}
function showhideRedirect(A){if(A.value==1){$("redirecttargetbody").style.display=""}else{$("redirecttargetbody").style.display="none"}}