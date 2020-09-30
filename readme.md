# Procesverslag
**Auteur:** Carmen Rozendaal


## Bronnenlijst
1. -bron 1: Pringles website, via https://www.pringles.com/nl/home.html. Geraadpleegd op 01-09-2020-
2. -bron 2- Markdown cheat cheet, via https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet
3. -...-



## Eindgesprek (week 7/8)

-dit ging goed & dit was lastig-

**Screenshot(s):**

-screenshot(s) van je eindresultaat-



## Voortgang 3 (week 6)

-same as voortgang 1-



## Voortgang 2 (week 5)

### Stand van zaken
Ik ben flink opgeschoten met mijn site, hij is nu geheel kloppend met het origineel. De Pringles-Bussen staan mooi op een rij, 
de teksten eronder kloppen nu ook, elementen zoals het logo zijn goed gepositioneerd, ik heb een hamburgermenu gecreeerd en ook zitten de smaken nu in aparte uitklapmenuutjes (Hier heb ik gebruik gemaakt van het element details>, dit plaatst content in een hoekje en voegt daar een pointer aan toe). Ook heb ik gezorgt dat de site op het oog grotendeels responsive is.

Mijn focus ligt nu op het animeren van mijn site, hier moet ik alleen nog even over nadenken over hoe en wat ik precies wil doen. Ik heb een klein beginnetje gemaakt door wanneer je met de muis hovert over de pringles-bussen, ze op hun kop gaan staan, dit vond ik wel een leuk effect. Ik heb dit gedaan door in css :transform te gebruiken en de bus te schalen naar -1.


Wat vond ik lastig?
Waar ik soms nog wel erg mee zat te worstelen is dat je heel snel fouten maakt in je code waardoor dan ineens je hele site uit elkaar valt, ik heb dit de afgelopen week een paar keer gehad en dat zorgde voor een hoop paniek. Zo was er een a> element die geen afsluitings-haakje had of had ik een typfout gemaakt in de naam van mijn afbeelding waardoor die niet te zien was. Ik had ook geen back-up gemaakt. Ik heb hiervan geleerd om voortaan geconcentreerder bezig te zijn tijdens het coderen en voortaan mijn versies in een aparte map op te slaan.


Wat ik ook heb geleerd en eigenlijk erg gek vind, is dat wanneer ik mijn site op Github open op mijn telefoon, de Pringles-Bussen zijn uitgerekt. 
Maar wanneer ik op mijn desktop de inspector-tool gebruik en hem zet op telefoon, is er niks aan de hand. We dachten eerst dat het aan de height lag, die stond op auto en de ene stond in een a>. Maar nadat ik dit had aangepast was het op mijn telefoon niet onveranderd. Zo zie je maar dat niet alle browsers gelijk zijn en dit ook kan verschillen op devices.

**Screenshot(s):**
![Resultaat uitklapmenutjes deel 1](images/proces/procesweek5.jpg)
![Resultaat uitklapmenuutjes deel 2](images/proces/procesweek5.2.jpg)
![Resultaat hamburgermenu uitgeklapt](images/proces/procesweek5.3.jpg)
![Resultaat Pringles bussen + tekst op een rij](images/proces/procesweek5.4.jpg)
![Resultaat detailpagina](images/proces/procesweek5.5.jpg)
![Kleine animatie toegepast, bussen op z'n kop door hover](images/proces/procesweek5.6.jpg)
![Weergave Github site op telefoon](images/proces/procesweek5Telefoonweergave.jpg)


### Agenda voor meeting
1. Uitleg over de read-me, wat wordt er op het eind verwacht? 
2. Hoe ver moet je met surface gaan, is er een minimaal aan animaties? 
3. Eigen ding: Advies. beter animeren in css of javascript?
4. Eigen ding: Hoe heete die site ook al weer waar je alle benamingen en elementen kunt vinden? Zijn er nog andere handige sites? 


### Verslag van meeting
...


## Voortgang 1 (week 3)

### Stand van zaken
Ik ben deze week aan de slag gegaan met position> en flexbox> en heb ik een begin gemaakt aan het toepassen van javascript op de navigatie. 

Ik ben begonnen met het logo te positioneren op de goede plek, dit was nog best lastig aangezien daardoor alles ging verschuiven. Ik heb mijn klasgenoot Danny uiteindelijk om hulp gevraagd aangezien hij in zijn Lays-site hetzelfde principe moest doen met het logo.

Vervolgens ben ik de producten met bijbehorende titels op een rij gaan zetten door flexbox> te gebruiken. Dit ging ook niet gelijk goed. De producten werden heel erg klein en waren niet gelijk in grootte, deze heb ik in Photoshop gelijk moeten trekken omdat de uitsnede van de originele foto's niet goed bleek te zijn.
Ook had ik in html alle producten achter elkaar gezet in een list>, dit bleek niet de beste oplossing dus heb ik inplaats daarvan de producten per rij in een list> gezet. Dit werkte goed en nu staan ook alle producten op een rij, alleen de tekst werkt niet goed mee... Bij de footer heb ik ook flexbox> gebruikt.

Tot slot heb ik voor de navigatie ook nog flexbox> gebruikt zodat de elementen op een rij bovenaan de pagina kwamen te staan, vervolgens heb ik het hamburger icoontje toegevoegd door gebruik te maken van position> Javascript is me helaas niet gelukt deze week.

**Screenshot(s):**
![Fout positionering, Logo achter header](images/proces/procesweek3.1.jpg)
![Fout flexbox, producten heel klein](images/proces/procesweek3.2.jpg)
![Fout flexbox, tekst niet op een rij](images/proces/procesweek3.3.jpg)
![Resultaat navigatie](images/proces/procesweek3Navigatie.jpg)


### Agenda voor meeting
1. Navigatiemenu Hamburger 'uiklappen' -> Pijltjes uitklapbalk 
2. Flexbox toepassen op tekst onder afbeelding. 
3. Icoontjes in navigatiebalk
4. eigen issues: Pringles Cans + tekst beter centreren 
5. eigen issue: Logo + Cans + tekst schalen en responsive 


### Verslag van meeting

Ik heb veel gehad aan het voortgangsgesprek omdat ik hierdoor verder ben gekomen met mijn site. Ik heb door middel van flexbox de pringles bussen en de tekst nu naast elkaar gekregen, ook staan ze door gebruik van justify-content gecentreerd. Verder heb ik uitleg gekregen over hoe ik het hamburgermenu en de uitklapmenu'tjes bij de smaken, moest maken. Ik had in mijn html nog veel classes staan en ook maakte ik veel gebruik van sections, hier kreeg ik de tip voor om daar nog even naar te kijken of ik die wel echt nodig had.


## Proces (Week 2)
Ik ben deze week aan de slag gegaan met het plaatsen van alle content in de html en het toepassen van css op de tekst. Ook heb ik alvast een klein stukje layout gedaan.

Wat ging goed?
Ondansk dat ik het lastig vond om de code van de site te lezen, kon ik alle content goed verzamalen en plaatsen. Het scheelde dat ik de basisvaardigheden van html/css nog wist. Ik was achteraf best tevreden over het resultaat.

Wat ging minder goed?
Het lettertype dat door Pringles wordt gebruikt is een betaald lettertype, ik heb daarom een soortgelijk lettertype moeten zoeken op GoogleFonts/Dafont, dit koste wat tijd. Er stonden behoorlijk wat producten op de pagina en deze waren allemaal verschillend qwa grootte, dit was beetje vervelend betreft layout.

**Screenshot(s):**
![Resultaat navigatie en header productpagina](images/proces/procesWeek2.2.jpg)
![Resultaat producten en footer productpagina](images/proces/procesWeek2.1.jpg)
![Resultaat detailpagina](images/proces/procesWeek2.jpg)

**Vimeo link naar video resultaat week 2:** https://vimeo.com/458704175/c16d242628)


## Intake (week 1)

**Je startniveau:** Blauw

**Je focus:** Surface plane

**Je opdracht:** https://www.pringles.com/nl/home.html

* Ik heb voor Pringles gekozen omdat ik een echte chips-liefhebber ben, verder is het een leuk onderwerp om de komende tijd aan te werken.

* De huidige site van Pringles is nodig toe aan verbetering omdat hij niet zo van deze tijd is, zo bevat het weinig animaties en is er niet veel gedaan aan de vormgeving. Ik wil leren hoe je o.a interacties kunt toepassen op een site dus daarom was de site van Pringles erg geschikt. 

**Screenshot(s) huidige pagina's:**
![screenshot homepagina Pringles](images/PringlesHome.jpg)
![screenshot productenpagina](images/PringlesProducten.jpg)
![screenshot Pringles smaken](images/PringlesSmaken.jpg)
![screenshot Pringles detailpagina](images/PringlesDetail.jpg)
![screenshot contactpagina](images/PringlesContact.png)

**Breakdown-schets(en):**
![Breakdown schetsen](images/Breakdown-Schets.png)
