/*
  Konstruktor widoku przyjmuje nastepujace parametry:
  @parentInd - indeks sceny której częścią jest widok
  @ind - indeks widoku (0,1,2,3)
  @next - tablica indeksow kolejnych scen dla poszczegolnych widokow
  @stairsF - flaga schodow
*/
function View(parentInd, ind, next)
{  
  // Zmienne obrazu i jego parametrow
  this.img=loadImage('img/p'+str(parentInd.f)+
                    '/p'+str(parentInd.f)+'_'+
                    str(parentInd.s)+'_'+str(ind+1)+'.jpg');
  this.s=windowHeight/1000;
  this.h=round(1000*this.s);
  this.w=round(1500*this.s);
  
  // Minimalne i maksymalne wymiary obrazu
  this.minH=this.h;
  this.minW=this.w;
  this.maxH=this.h*10;
  this.maxW=this.w*10;
  
  // Indeksy nawigacyjne
  this.stairsF= next[ind].stairs;
  this.overInd = null;
  if(this.stairsF)
  {
    this.overInd = (ind + 2 < 4) ? ind+2:ind-2;
  }
  this.over = false;
  if(ind + 2 < 4)
  {
    this.over = next[ind+2].stairs;
  }
  else
  {
    this.over = next[ind-2].stairs;
  }
  this.selfInd=ind;
  this.nextInd= null;
  if(next[ind].floorNumber != null)
  {
    this.nextInd = next[i].floorNumber*10000+next[i].sceneNumber*100+
                   next[i].pictureNumber;
  }
  
  this.nextInd2= null;
  if(this.overInd != null && next[this.overInd].floorNumber != null)
  {
    this.nextInd2 = next[this.overInd].floorNumber*10000+
    next[this.overInd].sceneNumber*100+next[this.overInd].pictureNumber;
  }
  
  // Pozycja wlasna
  this.y=0;
  this.x= (i!=3) ? this.w*this.selfInd:-this.w;
  
  // Parametry elementow aktywnych
  this.button={w:100, h:75, off:0};
  this.button2={w:100, h:75, off:100}
  if(this.stairsF) this.button.off=-100;

  /*
    Funkcja zajmuje sie rysowaniem obrazu i elementow aktywnych na ekranie
  */
  this.render=function()
  {
    /*
    Funkcja renderująca widok na grafice
    */
    push();
    imageMode(CENTER);
    rectMode(CENTER);
    translate(width/2, height/2);
    image(this.img, this.x, this.y, this.w, this.h);
    fill(255, 100);
    noStroke();
    if(!this.over)
    {
      if(this.nextInd != null) rect(this.x+this.button.off, this.y, this.button.w, this.button.h);
      if(this.nextInd2 != null) rect(this.x+this.button2.off, this.y, this.button2.w, this.button2.h);
    }
    pop();
  }
  
  /*
    Funkcja zajmuje sie skalowaniem obrazu w pionie i pozimie.
    Przyjmuje nastepujacy parametr:
    @del - roznica o jaka nalezy powiekszyc lub pomniejszyc obraz
  */
  this.scale=function(del)
  {
    /*
    Funkcja zajmuje się skalowaniem wymiarów w zależności od scrolla
    */
    this.h=(this.h+del<=this.maxH) ? this.h+del:this.maxH;
    this.h=(this.h+del>=this.minH) ? this.h+del:this.minH;
    
    this.w=(this.w+del/this.s<=this.maxW) ? this.w+del/this.s:this.maxW;
    this.w=(this.w+del/this.s>=this.minW) ? this.w+del/this.s:this.minW;
  }
  
  /*
    Funkcja zajmujaca sie ustawianiem widoku wzgledem suwaka. Ustawienie zalezy
    od indeksu widoku. Funkcja przyjmuje nastepujace parametry:
    @nx - pozycja suwaka w poziomie
    @ny - pozycja suwaka w pionie
  */
  this.move = function(nx, ny)
  {
    /*
    Funkcja zajmuje się przesuwaniem widoku zadane wartości
    */
    
    this.x=nx+this.selfInd*this.w;
    if(this.x>this.w*2 && this.selfInd==1) this.x=nx-3*this.w;
    else if(this.x>this.w*2 && this.selfInd==3) this.x=nx-this.w;
    else if(this.x>this.w*2 && this.selfInd==2) this.x=nx-2*this.w;
    
    this.y=ny;
  }
  
  /*
    Funkcja sprawdza czy nastapilo klikniecie na aktywnym
    elemencie. Przyjmuje jako argumenty:
    @_x - wspolrzedna x klikniecia mysza
    @_y - wspolrzedna y klikniecia mysza
    Zwraca:
    @false - jesli nie kliknieto na aktywnym elemencie
    @obiekt {newSceen: <...>, newView: <...>}:
      @newSceen - indeks nowej sceny liczac od 0, mozna wykozystac
      bezposrednio w tablicy
      @newView - indeks nowego widoku, nalezy go w odpowiednim momencie
      przekazac do funkcji fadeIn();
  */
  this.click=function(_x, _y)
  {
    // sprawdzenie legalności kliknięcia
    _x-=width/2;
    _y-=height/2;
    if(this.over) { return false; }
    if(_x>this.x-this.button.w/2+this.button.off && _x<this.x+this.button.w/2+this.button.off && 
       _y>this.y-this.button.h/2 && _y<this.y+this.button.h/2)
    {
      return {newSceen: floor(this.nextInd/100), newView: this.nextInd%100};
    }
    if(_x>this.x-this.button2.w/2+this.button2.off && _x<this.x+this.button2.w/2+this.button2.off && 
       _y>this.y-this.button2.h/2 && _y<this.y+this.button2.h/2 && this.stairsF)
    {
      return {newSceen: floor(this.nextInd2/100), newView: this.nextInd2%100};
    }
    return false;
  }
}
