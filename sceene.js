/*
  Konstruktor sceny przyjmuje jako parametry
  @ind - indeks wlasny
  @data - dane mapy ktore dotycza sceny
*/
function Sceene(data)
{
  // Zmienna pomocnicza ogolna.
  this.temp;
  // Wlasny index oraz czesc danych mapy.
  this.selfInd = {f:data.floorNumber, s:data.sceneNumber};
  this.mapPart = data;
  
  // Zmienne pozycjonujace panorame.
  this.x=0;
  this.y=0;
  this.px=0;
  this.dx=0;
  this.py=0;
  this.dy=0;
  
  /* 
    Kanal alfa dla efektu wyciemnienia i rozjasnienia
    domyslnie ustawiony na calkowite zaciemnienie.
  */
  this.shadow=255;
  
  // Flaga zezwolenia na przyciemnienie lub rozjasnienie obrazu.
  this.fade=false;
  
  // Tablica widokow.
  this.views = [];
  for(i=0; i<4; i++)
  {
    this.views.push(new View(this.selfInd, i, this.mapPart.pictures));
  }
  
  /* 
    Funkcja zajmujaca sie przesuwaniem panoramy w poziomie i w pionie
    przy zachowaniu granic ekramu.
    Jednoczesnie wywolywane sa funkcje wyswietlenia poszczegolnych widokow.
  */
  this.update=function()
  {
    if (mouseIsPressed)
    {
      this.dx=(mouseX-this.px)/1;
      this.dy=(mouseY-this.py)/1;
    }
    
    this.px=mouseX;
    this.dx*=0.88;
    this.py=mouseY;
    this.dy*=0.88;
    
    this.x+=this.dx;
    this.y+=this.dy;
    
    if(this.x >= this.views[0].w*2){ this.x = -this.views[0].w*2+1; }
    else if(this.x <= -this.views[0].w*2) { this.x = this.views[0].w*2-1; }
    
    if(this.y+this.dy<-(this.views[0].h-height)/2-1){ this.y = -(this.views[0].h-height)/2; }
    else if(this.y+this.dy>(this.views[0].h-height)/2-1){ this.y = (this.views[0].h-height)/2; }
    
    for(i=0; i<4; i++)
    {
      this.views[i].move(this.x, this.y);
      this.views[i].render();
    };
    
    fill(0, this.shadow);
    rect(0,0,width, height);
  }
  
  /*
    Funkcja skalowania obrazu, przyjmuje jako argument:
    @ds - wartoscdodawana do wysokosci i szerokosci
      w odpowiednich proporcjach, dobra wartosc to ok 20
  */
  this.scale=function(ds)
  {
    for(i=0; i<4; i++)
    {
      this.views[i].scale(ds);
    };
  }
  
  /*
    Funkcja sprawdza czy nastapilo klikniecie na aktywnym
    elemencie, na ktoryms z widokow. Przyjmuje jako argumenty:
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
    for(i=0; i<4; i++)
    {
      this.temp=this.views[i].click(_x, _y);
      if((this.temp!=false) && (this.temp.newSceen != null)) { return this.views[i].click(_x, _y); }
    };
    return false;
  }
  
  /*
    Funkcja sprawia, ze za kazdym odswierzeniem widoku obraz jest coraz ciemniejszy.
    Aby wygasic obraz calkowicie nalezy wywolywac ta funkje do momentu, az zmienna
    shadow osiagnie wartosc 255. W tym momencie flaga zezwolenia
    na wygaszenie/rozjasnienie jest resetowana.
  */
  this.fadeOut=function()
  {
    if(this.shadow<247) this.shadow+=7;
    else
    {
      this.shadow=255;
      this.fade=false;
    }
  }
  
  /*
    Funkcja sprawia, ze za kazdym odswierzeniem widoku obraz jest coraz jasniejszy.
    Aby pokazac obraz calkowicie nalezy wywolywac ta funkje do momentu, az zmienna
    shadow osiagnie wartosc 0. W tym momencie flaga zezwolenia
    na wygaszenie/rozjasnienie jest resetowana.
    Funkcja przyjmuje nastepujacy parametr:
    @pos - indeks widoku, na ktorym wycentrowana bedzie scena w trakcie
    i po calkowitym pojawieniu sie
  */
  this.fadeIn=function(pos)
  {
    pos= (pos<3) ? pos:-1;
    this.x=-pos*this.views[0].w;
    if(this.shadow>8) this.shadow-=7;
    else
    {
      this.shadow=0;
      this.fade=false
    }
  }
}
