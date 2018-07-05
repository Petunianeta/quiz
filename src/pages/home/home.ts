import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  display : string = "none";
  name;

  score =0;
  answer1: string;
  answer2: string;
  answer3: string;
  answer4: string;
  answer5: string;
  answer6: string;
  answer7: string;
  answer8: string;
  answer9: string;
  answer10: string;
  answer11: string;
  answer12: string;
  answer13: string;
  answer14: string;
  answer15: string;
  bromine;phos;chlorine;
  hydrogen;oxygen;carbon;
  magnesium;copper;iron;
  graphite;silicon;charcoal;
  mercury;tin;lead
  fg;rer;
  tr;fa
  la;le;
  lo;li
  lu;aeiou;
  ba;be;
  bo;bi
  bu;ka
  ki;ke
  ku;ko
  No:boolean;
  value:number;
  constructor(public navCtrl: NavController) {
  this.No = true;
  this.value= 0;

  }

  onReset (){
    this.score=0;
  }

  submit(){
    this.value = 1;

   if(this.hydrogen == true){
    this.score = this.score +=1;
   this.answer1 ="hydrogen"
   this.hydrogen ='';
  }else
  if(this.oxygen){
    this.answer1 ="hydrogen";
  }else
  if(this.carbon){
    this.answer1 ="hydrogen"
  }
   if(this.bromine == true){
    this.score = this.score +1;
      this.answer2 ="bromine";
      this.bromine ='';
    }else

    if(this.chlorine){
    this.answer2 ="bromine";
    }else
    if(this.phos){
      this.answer2 ="bromine";
    }
  
   if(this.magnesium == true){
     this.score = this.score +1;
      this.answer3 ="magnesium";
      this.magnesium ='';
  }else
  if(this.copper){
  this.answer3 ="magnesium";
  }else
  if(this.iron)
  this.answer3 ="magnesium";

   if(this.graphite == true){
    this.score = this.score +1;
      this.answer4 ="graphite";
      this.graphite ='';
  }else
  if(this.silicon){
  this.answer4 ="graphite"
  }else
  if(this.charcoal)
  this.answer4 ="graphite"

  if(this.mercury == true){
    this.score = this.score +1;
    this.answer5 ="mercury";
    this.mercury ='';
  }else
  if(this.tin){
    this.answer5 = "mercury";
  }else
  if(this.lead){
   this.answer5 = "mercury";
}

  if(this.fg == true){
  this.score = this.score +1;
  this.answer6 ="true";
  this.rer ='';
}else
if(this.rer){
 this.answer6 ="true"
}




   if(this.tr == true){
     this.score = this.score +1;
      this.answer7 ="true";
      this.tr ='';
  
  }else
  if(this.fa){
    this.answer7 ="true";
  }
  
   if(this.la == true){
     this.score = this.score +1;
     this.answer8 ="true";
     this.la ='';
    }else
    if(this.le){
      this.answer8 ="true";
    }


    


  if(this.lo == true){
   this.score = this.score +1;
   this.answer9 ="false";
   this.lo ='';
  }else
  if(this.li){
    this.answer9 ="false"
  }


  if(this.lu == true){
    this.score = this.score +1;
    this.answer10 ="true";
    this.lu ='';
  }else
  if(this.aeiou){
  this.answer10 ="true"

}
  if(this.ba == true){
    this.score = this.score +1;
    this.answer11 ="go";
    this.ba ='';

  }else
  if(this.be){
  this.answer11 ="go";
    
}
  if(this.bo == true){
    this.score = this.score  +1;
    this.answer12 ="born";
    this.bo ='';
  }else
  if(this.bi){
    this.answer12 = "born"
   

}
  if(this.bu == true){
    this.score = this.score +1;
    this.answer13 ="time";
    this.bu ='';
  }else
  if(this.ka){
    this.answer13 = "time"
   

}
  if(this.ki == true){
    this.score = this.score +1;
    this.answer14 ="doctor";
    this.ki ='';
  }
  if(this.ke){
    this.answer14 = "doctor"
    

}
  if(this.ku == true){
    this.score = this.score +1;
    this.answer15 ="do";
    this.ku ='';
  }else
  if(this.ko){
    this.answer15 = "do";
 

  }
}
}
