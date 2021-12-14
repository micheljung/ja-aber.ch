import JustificationComponent from "../components/JustificationComponent";
import NavigationComponent from "../components/NavigationComponent";
import Head from "next/head";

class Category {
  constructor(id, title, justifications) {
    this.id = id
    this.title = title
    this.justifications = justifications
  }
}

class Justification {
  constructor(id, claim, shortRefutation, longRefutation) {
    this.id = id;
    this.claim = claim;
    // noinspection JSUnusedGlobalSymbols
    this.shortRefutation = shortRefutation;
    this.longRefutation = longRefutation;
  }
}

let harmJustifications = [
  new Justification(
    "töten",
    "Tiere zu töten verursacht kein Leid",
    "Töten ist Leid.",
    `<p>
      Der Duden definiert Leid als <q>Unrecht, Böses, das jemandem zugefügt wird</q>. Selbst wenn es einem Tier
      keinen Schmerz verursachen würde, wenn wir ihm mit einem Bolzenschussgerät in den Kopf schiessen, ihm Strom
      durch das Gehirn fliessen lassen oder es mit Gas ersticken, ihm anschliessend die Kehle durchschneiden
      und verbluten lassen, so ist dies ohne Zweifel böses Unrecht, das wir jemandem zufügen.
      </p>
      <p class="my-3 flex justify-center">
        <iframe width="480" height="270" src="https://www.youtube.com/embed/IZHmUaq6Y9Q" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </p>`
  ),
  new Justification(
    "eier",
    "Hühnern die Eier wegzunehmen verursacht kein Leid",
    "Hennen sind qualgezüchtet, männliche Küken nutzlos, beide werden letztendlich getötet.",
    `<p>
      In der Eierindustrie werden fast nur Weibchen benötigt, denn Männchen legen keine Eier. Daher werden Männchen
      direkt nach dem Schlüpfen aussortiert und getötet, da sie keinem Zweck dienen. Hierfür werden sie entweder zu
      Tode erstickt oder lebendig geschreddert. Die Industrie nennt das <q>Homogenisierung</q>. Ihre Schwestern werden
      in Gefangenschaft gehalten in der sie als Eierproduktionsmaschinen dienen. Das ursprüngliche Huhn legte ca. ein
      Ei pro Monat. Durch extreme Züchtung legen Hühner heute fast jeden tag ein Ei. Sobald ihre Eierproduktion abnimmt
      und sie nicht mehr profitabel sind, werden sie zum Schlachthaus gebracht, wo ihnen die Kehle aufgeschlitzt wird
      und sie zu Tode verbluten. Dies ist üblicherweise nach 1 - 2 Jahre der Fall. Die natürliche Lebenserwartung
      beträgt bis zu 10 Jahre. </p>
      <p class="my-3 flex justify-center">
        <iframe width="480" height="270" src="https://www.youtube.com/embed/QdMdik6PFlM" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </p>`
  ),
  new Justification(
    "milch",
    "Kühen die Milch wegzunehmen verursacht kein Leid",
    "Kühe sind qualgezüchtet, männliche Kälber nutzlos, beide werden letztendlich getötet.",
    `<p>
      In der Milchindustrie werden fast nur Weibchen benötigt, denn Männchen geben keine Milch. Wie alle Säugetiere
      geben Kühe nur Milch, um Ihre Jungen zu nähren. Es ist ein weit verbreiteter Irrglaube, dass sie andauernd Milch
      produzieren. Daher werden Kühe Jahr für Jahr geschwängert und ihre Kinder ihnen innerhalb weniger Stunden nach
      Geburt entrissen, da diese ansonsten die Milch trinken, die der Bauer verkaufen will. Ist das Kalb ein Männchen,
      so wird es entweder direkt getötet, oder erst einige Wochen eingesperrt und anschliessend für Kalbfleisch
      getötet, oder in der Rindermast gemästet und für Rindfleisch getötet. Ist das Kalb ein Weibchen, wird sie wie
      ihre Mutter wiederholt geschwängert, von ihrem Kalb getrennt und gemolken. Sobald ihre Milchproduktion nachlässt
      und nicht mehr profitabel ist, wird ihr die Kehle aufgeschnitten. Dies ist üblicherweise nach 4.5 - 6 Jahren der
      Fall. Ihre natürliche Lebenserwartung beträgt bis zu 20 Jahre.
      </p>`
  ),
  new Justification(
    "scheren",
    "Schafe zu scheren verursacht kein Leid",
    "Schafe werden qualgezüchtet, grob behandelt und letztendlich getötet.",
    `<p>
      Je mehr Wolle ein Schaf produziert, desto profitabler. Merinoschafe sind deshalb speziell darauf gezüchtet, eine
      extrem faltige Haut zu haben, um möglichst viel Wolle zu produzieren. Unter den Hautfalten sammeln sich dann
      Feuchtigkeit und besonders im Afterbereich zusätzlich Kot und Urin. Das zieht Schaf-Schmeissfliegen an, die ihre
      Eier in die Falten legen. Schlüpfen die Fliegenmaden, fressen sie sich in Haut und Unterhaut und verursachen
      schwere Infektionen, die für die Schafe meist den Tod bedeuten. Um dies zu verhindern, wird jungen Lämmern im
      Bereich des Schwanzes ein Stück Haut mit dem Messer entfernt. Dies wird meist ohne Betäubung durchgeführt, da
      diese zeitaufwändig und kostspielig ist. Scherer sind üblicherweise untrainierte Arbeitskräfte, die nicht pro
      Stunde sondern pro Schaf bezahlt werden. Um möglichst viele Schafe zu scheren, werden diese oft sehr Grob
      behandelt und dabei verletzt. Jedes Schaf, egal ob für Wolle oder Fleisch gezüchtet, wird in Gefangenschaft
      gehalten und letztendlich mit einem Schnitt durch die Kehle getötet.
      </p>`
  ),
  new Justification(
    "seide",
    "Raupen die Seide zu nehmen verursacht kein Leid",
    "Raupen werden lebendig zu Tode gekocht.",
    `<p>
      Seide wird vom Kokon einer Seidenraupe gewonnen. Die Seidenraupe produziert mit Hilfe spezieller Drüsen in ihrem
      Maul einen feinen Faden, den sie in einer grossen Schlaufe und hunderttausenden von Windungen um sich herum
      legt. Sobald sie zur Motte herangewachsen ist, frisst sie sich durch ihren Kokon und schlüpft. Da Seidenfarmer
      einen ununterbrochenen Seidenfaden benötigen, töten sie die Seidenraupen ca. 10 Tagen nachdem diese sich
      eingesponnen haben. Hierfür werden sie üblicherweise lebendig zu Tode gekocht. Anschliessend können die
      Kokons auseinandergewickelt werden. Für nur 250g Seide werden ca. 3000 Seidenraupen getötet.
      </p>`
  ),
  new Justification(
    "honig",
    "Bienen den Honig zu nehmen verursacht kein Leid",
    "Honig ist wichtige Nahrung für Bienen. Bienen werden verstümmelt, zerquetscht und getötet.",
    `<p>
      Honig wird von Bienen produziert und als Nahrung gelagert. Es ist die einzige Nahrung, die sie lagern, während
      wir Menschen keineswegs darauf angewiesen sind. Trotzdem stehlen wir ihren Honig und ersetzen ihn durch billigen
      Futtersirup, der nicht die von den Bienen benötigten Nährstoffe enthält. Bienen verfügen über ein zentrales
      Nervensystem und spüren Schmerz. In kommerziellen Imkereien werden Königinnen gekauft, die vorher unter
      Verwendung von zerquetschten Drohnen künstlich besamt wurden. Die Flügel dieser Königinnen werden ausgerissen,
      um sie am Wegfliegen zu hindern. Obwohl sie normalerweise vier Jahre alt würden, tötet man sie mit zwei Jahren,
      um Platz für jüngere Königinnen zu machen. Kommerziell genutzte Bienenvölker werden oft dem Hungertod überlassen
      oder einfach vernichtet, um den Bestand zu kontrollieren. Selbst in kleineren Imkereien, wo behutsam mit den
      Bienen umgegangen wird, werden Bienen zerquetscht, wenn ihr Bienenstock gestört wird. Weltweit gibt es rund
      20'000 verschiedene Bienenarten. Nur neun davon sind Honigbienen. Durch die fortlaufende Züchtung konkurrieren
      diese die Wildbienen, die wesentlich effizienter bestäuben als Honigbienen und nun vom Aussterben bedroht sind.
      </p>`
  ),
  new Justification(
    "schmerz-pflanzen",
    "Pflanzen empfinden auch Schmerzen, daher ist es egal ob man Tiere oder Pflanzen tötet",
    "Falsch, aber Veganer töten ohnehin weniger Pflanzen.",
    `
      <p>Reize werden über Nervenbahnen an das Gehirn geleitet und von diesem als Schmerz interpretiert. Pflanzen
      verfügen weder über Nervenbahnen, noch über ein Gehirn. Zwar können sie auf gewisse Reize reagieren, dies ist
      jedoch nicht mit einem Schmerzempfinden gleichzusetzen. Es ist eher vergleichbar mit einer Querschnittslähmung,
      bei der der Betroffene keine Schmerzen verspürt, der Körper jedoch immer noch Wunden heilt.</p>
      <p>Auch aus evolutionstechnischer Sicht ergibt es keinen Sinn, dass Pflanzen die Fähigkeit entwickelt haben
      sollten, Schmerzen spüren. Schmerzreize warnen vor Gefahren, erlauben schnelle Reaktionen und schützen so vor
      Verletzungen und Tod. Pflanzen könnten auf Schmerzen niemals rechtzeitig reagieren, weshalb sollten sie diese
      also wahrnehmen?</p>
      <p>Ignorieren wir aber zugunsten der Argumentation, dass Schmerzempfindungen bei Pflanzen weder plausibel noch
      wissenschaftlich nachgewiesen sind. Würden Pflanzen tatsächlich Schmerzen empfinden und wollte man dieses Leid
      minimieren, so ergibt es keinen Sinn, <strong>erst</strong> Billionen von Pflanzen an Milliarden von Tieren zu
      verfüttern <strong>und obendrauf</strong> noch diese Tiere zu töten, anstatt Pflanzen direkt zu essen. Liegen
      einem Pflanzen am Herzen, so müsste man vegan sein.</p>
      `
  ),
  new Justification(
    "lokaler-bauer",
    "ich kaufe meine Lebensmittel beim Bauern aus dem Dorf",
    "Auch dort werden Tiere ausgebeutet und getötet.",
    `
      <p>Welchen Unterschied macht dies? Eliminiert die Tatsache, dass der Bauer nicht weit entfernt ist, automatisch
      jegliches Tierleid? Ist das Töten eines Lebewesens moralisch unbedenklich, sobald man weiss, wo dieses lebte? Ist
      die Ausbeutung von Tieren in Ordnung, wenn man denkt, dass der Ausbeuter ein sympathischer Mensch ist?</p>
      <p>Ignorieren wir für einen Moment, dass diese Aussage vermutlich völlig gelogen ist; das Sandwich von der
      Tankstelle, die Kaffeesahne bei der Arbeit, die Milchschokolade aus dem Supermarkt, die Kekse aus dem Nachbarland,
      das Essen im Restaurant - alle diese Lebensmittel beinhalten tierische Produkte, die nicht vom "Bauern aus dem
      Dorf" stammen.</p>
      <p>Nehmen wir aus Gründen der Argumentation dennoch an, dass Tiere beim "Bauern aus dem Dorf"
      ein wunderbares Leben führen, viel Platz haben und den ganzen Tag gestreichelt und geknuddelt werden. Er züchtet
      seine Hühner selbst und vergast keine Küken. Er entreisst die Kälber nicht ihren Müttern und lässt sie nicht
      töten. Er will keinen Profit schlagen, sondern mit der Ausbeutung der Tiere genau nur so viel verdienen,
      damit seine Kosten gedeckt sind.</p>
      <p>Selbst in diesem utopischen Szenario wird jedoch der Tag kommen an dem
      ein Tier mehr Kosten verursacht als es Einnahmen generiert - dies bereits nach einem Bruchteil seiner natürlichen
      Lebenserwartung. Spätestens dann endet die "Liebe" des Bauern und er sendet sein Tier (mit sehr hoher
      Wahrscheinlichkeit) zum Schlachthof oder (mit verschwindend geringer Wahrscheinlichkeit) erschiesst es auf der
      Weide. Denn egal wie sehr der Bauer vorgibt, seine Tiere zu lieben und sich um sie zu sorgen, letztendlich züchtet
      und füttert er die Tiere nicht aus Nächstenliebe, sondern um mit ihren Körpern Geld zu verdienen.</p> <p>Man darf
      vermutlich behaupten, dass ein Tier umso mehr an seinem Leben hängt, je schöner dieses Leben ist. Ist es dann
      nicht umso grausamer, ihm dieses Leben ohne gutem Grund zu nehmen? Wer seine Produkte vom "Bauern aus dem Dorf"
      kauft, tut dies vermutlich nur, um sein Gewissen zu beruhigen. Die Realität ist jedoch, dass auch diese Tiere
      unnötig ausgebeutet werden und ihnen Leid zugefügt wird.</p>
      `
  ),
  new Justification(
    "schmerzfrei",
    "Tiere spüren nichts, wenn sie getötet werden",
    "Das Töten selbst ist unmoralisch.",
    `
      <p>Die standardmässige, gesetzlich vorgeschriebene Form der Schlachtung ist, Tiere zunächst zu betäuben und ihnen
      anschliessend die Kehle aufzuschlitzen, damit sie verbluten. Zur Betäubung wird ihnen entweder mit einem Bolzen
      in den Kopf geschossen, oder sie werden mit CO2 erstickt, oder man lässt Strom durch ihren Kopf fliessen. Jeder
      Schlachthausmitarbeiter kann bestätigen, dass es praktisch unmöglich ist jedem Tier eine schmerzfreie
      Betäubung zu garantieren, deren Erfolg zu überprüfen und es zu entbluten, bevor die Betäubung
      nachlässt. So kommt es täglich vor, dass Tieren bei vollem Bewusstsein die Kehle aufgeschlitzt wird und sie
      qualvoll verenden. Insbesondere die CO2 Betäubung von Schweinen verursacht immer Qualen, da das Gas ein
      Erstickungsgefühl hervorruft und beim Kontakt mit Schleimhäuten starke Schmerzen verursacht.</p>
      <p>Doch selbst wenn jedes einzelne Tier schmerzfrei getötet werden würde, rechtfertigt dies nicht das Töten.
      Wäre dies so, dann müsste es auch moralisch akzeptabel sein einen Menschen von hinten zu erschiessen, da dieser
      dann ja nichts spürt. Oder wenn nicht Menschen, dann zum Beispiel die Enten und Schwäne am See, oder die Katze des
      Nachbarn. Es ist irrelevant ob jemand schmerzfrei getötet wird oder nicht, solange das Töten selbst die
      unmoralische Tat ist.</p>
      `
  ),
  new Justification(
    "ernte",
    "bei der Ernte von Getreide sterben viel mehr Tiere",
    "Die Fütterung von Tieren benötigt viel mehr Getreide.",
    `
      <p>Um ein Tier bis zur Schlachtung durchzufüttern benötigt es viel mehr Getreide, als wenn wir dieses Getreide
      selbst essen würden. Somit ist man neben dem Tod des Tieres auch für alle Tode verantwortlich, die durch die
      Fütterung des Tieres verursacht wurden.</p>
      <p>Man könnte argumentieren, dass wir nur Produkte von Tieren essen sollten, die von Gras ernährt wurden.
      Doch selbst wenn man ignoriert, dass auch weidenden Kühen zusätzlich Kraftfutter verabreicht wird und dass
      sich weder Schweine noch Hühner von Gras ernähren, so wäre dies nicht praktikabel. Es fehlt schlichtwegs der
      Platz.</p>
      <p>Auch wenn Veganern am liebsten wäre, dass bei der Ernte keine Tiere sterben müssten, so ist es die einzige
      Variante, die praktikabel ist und am wenigsten Leid verursacht. Die Alternative wäre es, zu verhungern.</p>
    `
  ),
];
let choiceJustifications = [
  new Justification(
    "geschmack",
    "ich mag nun mal den Geschmack",
    "Geschmack ist keine Rechtfertigung um zu töten.",
    `<p>
      Was hat mehr Wert, unsere persönliche Geschmacksvorliebe oder das Leben eines Tieres? Reicht es als moralische
      Rechtfertigung aus, etwas gerne zu tun? Wenn ja, so müsste es auch in Ordnung sein jemanden zu vergewaltigen,
      weil man nun mal gerne Sex hat oder jemanden zu töten, wenn man das gerne tut. Es ist offensichtlich, dass "etwas
      gerne zu tun" keine moralische Rechtfertigung ist, wenn diese Tat ein Opfer hat.
      </p>`
  ),
  new Justification(
    "entscheidung",
    "es ist meine persönliche Entscheidung",
    "Entscheidung ist keine Rechtfertigung um jemanden zu töten.",
    `<p>
      Jede Entscheidung, die wir treffen, ist eine persönliche Entscheidung. Wäre <q>es ist meine persönliche
      Entscheidung</q> eine moralische Rechtfertigung, so dürften wir uns alles erlauben, da alles, was wir tun,
      eine persönliche Entscheidung ist. Jedoch haben manche Entscheidungen ein Opfer, das mit dieser
      Entscheidung nicht einverstanden ist.</p>
      <p>Ausserdem können können wir nicht mit "persönliche Entscheidung" argumentieren und
      gleichzeitig die persönliche Entscheidung anderer ignorieren - etwa die persönliche Entscheidung eines Kalbes,
      bei seiner Mutter zu bleiben. Oder die eines Schweins, nicht in einer Gaskammer erstickt zu werden.
      Oder die eines Kükens, nicht am Tag seiner Geburt geschreddert zu werden.</p>
      `
  ),
  new Justification(
    "subjektiv",
    "Moral ist subjektiv",
    "Moral muss aus der Sicht des Opfers beurteilt werden.",
    `<p>
      Die Ansicht davon, was richtig und was falsch ist, unterscheidet sich von Kultur zu Kultur und von Mensch zu
      Mensch. Dies rechtfertigt jedoch nicht jedes beliebige Verhalten. Wäre es in Ordnung, ein Kind ins Gesicht zu
      treten, nur weil jemand dies für richtig hält? Natürlich nicht, denn die Moral einer Tat muss nicht aus dem
      Standpunkt des Täters, sondern aus derjenigen des Opfers bewertet werden.
      </p>`
  ),
  new Justification(
    "unappetitlich",
    "veganes Essen schmeckt nicht",
    "Viele beliebte und alltägliche Lebensmittel sind bereits vegan.",
    `
      <p>Selbst nicht-Veganer essen sehr viele vegane Produkte. Brot, Pasta, Reis, Kornflakes, Suppen, Kekse,
      Kartoffelchips, Pommes, gebratenes Gemüse, Kartoffelgerichte, Oreos, Salate uvm. sind meist vegan, ohne dass es
      jemand realisiert. Alle veganen Gerichte pauschal als ungeniessbar zu bezeichnen ist lächerlich. Wie auch bei der
      Mischkost bedarf es lediglich einiger Gewürze und etwas Geschick, um ein leckeres Gericht zu kreieren.</p>
    `
  ),];
let normalJustifications = [
  new Justification(
    "kultur",
    "das ist nun mal unsere Kultur",
    "Kultur sagt nichts darüber aus, ob etwas moralisch ist.",
    `<p>
      Kulturen verändern sich über die Zeit. Versklavung und die Unterdrückung von Frauen waren einst Gesellschaftlich
      akzeptiert, dennoch waren diese Dinge unmoralisch. Nur weil es in gewissen Kulturen üblich ist, Hunde zu töten
      und zu essen oder die Genitalien von Frauen zu verstümmeln bedeutet dies nicht, dass es moralisch gerechtfertigt
      ist. Die Moral einer Tat muss aus der Sicht des Opfers betrachtet werden und ist unabhängig von Ort und Zeit.
      </p>`
  ),
  new Justification(
    "vorfahren",
    "schon unsere Vorfahren haben dies getan",
    "Die Taten unserer Vorfahren sagen nichts darüber aus, ob etwas moralisch ist.",
    `<p>
      Unserer Vorfahren haben auch auf Bäumen gelebt, keine Kleidung getragen, in Büsche gekotet, vergewaltigt, getötet,
      Kriege geführt, Menschen versklavt, Inzucht betrieben, Massaker veranstaltet und Frauen unterdrückt. Trotzdem
      rechtfertigen wir diese Dinge heute auch nicht damit, dass es schon unsere Vorfahren getan haben. Und selbst wenn
      wir nur dank tierischer Produkte überlebt und uns entwickelt haben, welche Relevanz hat dies für die heutige
      Gesellschaft, die ihre Lebensmittel im Supermarkt einkauft? Die Zeiten haben sich geändert.
      </p>`
  ),
  new Justification(
    "löwen",
    "Löwen töten und essen auch Tiere",
    "Löwen sind keine Vorbilder eine moderne Gesellschaft.",
    `<p>
      Löwen sind obligatorische Fleischesser. Anders als wir essen sie Tiere um zu überleben. Wir sind jedoch weder
      obligatorische Fleischesser, noch kämpfen wird in der Wildnis um unser Überleben. Löwen üben noch viele
      weitere Verhaltensweisen aus. So urinieren sie beispielsweise ins Gebüsch und verteilen ihren Uringeruch mit
      ihren Füssen, um ihr Revier zu markieren. Oder sie töten die Jungtiere des besiegten Vaters, um diese nicht
      aufziehen zu müssen. Weshalb tun wir diese Dinge nicht? Weil das Verhalten von Löwen kein Vorbild für eine modere
      Gesellschaft ist.
      </p>`
  ),
  new Justification(
    "kreislauf",
    "das ist der Lauf des Lebens",
    "Ein unausweichlicher Tod rechtfertigt nicht das Ausbeuten und Töten.",
    `<p>
      Alles was geboren wird, muss irgendwann sterben. Ist es daher moralisch gerechtfertigt, das Leben eines
      Lebewesens zu nehmen, da dieses ja sowieso irgendwann sterben würde? Falls ja, dann müsste es auch moralisch
      sein Menschen zu töten, da diese ja sowieso irgendwann sterben. Tiere zu Milliarden gezielt zu züchten, nur um
      sie auszunutzen und kurz darauf wieder zu töten hat nichts mit dem <q>Lauf des Lebens</q> zu tun.</p>`
  ),
  new Justification(
    "schon-immer",
    "wir haben es schon immer getan",
    "Die Dauer, wie lange etwas getan wurde, sagt nichts über dessen Ethik aus.",
    `<p>
      Mit dieser Einstellung würde die Gesellschaft immer so bleiben, wie sie ist und sich nie weiterentwickeln.
      Sklaven wurden auch über hunderte Jahre gehalten und Frauen unterdrückt. Wie lange etwas getan wurde sagt nichts
      darüber aus, ob etwas moralisch gerechtfertigt ist oder nicht. Die Moral einer Tat muss stets aus der Sicht des
      Opfers betrachtet werden und ist nicht von der Zeit abhängig.
      </p>`
  ), new Justification(
    "zweck",
    "Tiere wurden für diesen Zweck gezüchtet",
    "Ein Zweck heiligt nicht die Mittel.",
    `<p>
      Dieser Logik folgend wäre es in Ordnung alles Beliebige mit einem Lebewesen zu tun - zum Beispiel es zu foltern
      und zu töten - sofern es von einem Menschen für diesen Zweck gezüchtet wurde. Das ist offensichtlich absurd.
      </p>`
  ), new Justification(
    "dazu-da",
    "manche Tiere sind dazu da, getötet zu werden",
    "Niemand will getötet werden.",
    `
      <p>Diese Einordnung ist nicht naturgegeben, sondern eine subjektive und oft willkürliche Wahrnehmung der Menschen.
      Zu denken, dass manche Tiere dazu da sind, um von uns getötet zu werden, ist genauso verwerflich wie zu denken,
      dass Dunkelhäutige dazu da sind, die Sklaven von Hellhäutigen zu sein. Die Moral einer Tat muss stets aus der
      Sicht des Opfers betrachtet werden. Genau wie Menschen verspüren Tiere, egal welcher Spezies, nicht den Wunsch
      danach, getötet zu werden.</p>
      `
  ),];
let naturalJustifications = [
  new Justification(
    "eckzähne",
    "wir haben Eckzähne",
    "Die Form unserer Zähne ist keine Rechtfertigung dafür, andere zu töten.",
    `<p>
      Ganz abgesehen davon, das unsere Eckzähne lächerlich klein und stumpf sind, wie rechtfertigt die Form unserer
      Zähne die Art und Weise, wie wir Tiere behandeln? Und was sagen unsere Eckzähne überhaupt aus? Das Tier mit
      den grössten Eckzähnen überhaupt ist das Flusspferd - ein Pflanzenfresser.</p>
      <p>Ausserdem haben unsere Eckzähne keinerlei Ähnlichkeit mit denen wahrer Fleisch- oder Allesesser wie
      beispielsweise Hunde. Hingegen haben unsere Kauflächen und unsere Kaubewegungen sehr viel Ähnlichkeit mit denen
      von Pflanzenfressern, wie Kühe oder Pferde. Selbst wenn nicht, würde dies nicht das Töten von Tieren moralisch
      rechtfertigen. Nur weil wir etwas tun können bedeutet dies nicht, dass wir es tun müssen.
      </p>`
  ),
  new Justification(
    "natürlich-milch",
    "Milch zu trinken ist natürlich",
    "Kuhmilch ist nicht für menschlichen Konsum vorgesehen.",
    `<p>
      Ja, die Milch unserer eigenen Mutter. So lange bis wir abgestillt sind. Die Milch einer Mutter einer anderen
      Spezies zu trinken - insbesondere als Erwachsene Menschen - ist alles andere als natürlich. Ganz abgesehen davon
      sind rund 65 - 70% der erwachsenen Menschen laktoseintolerant. Der Konsum tierischer Milch ist für uns keineswegs
      natürlich.</p>`
  ),
  new Justification(
    "natürlich-fleisch",
    "Fleisch zu essen ist natürlich",
    "Fleisch zu essen verursacht unnötiges Leid.",
    `<p>
      Der Mensch ist in vielerlei Hinsicht kein Fleischesser. Der Anblick von toten Tieren, Blut und Eingeweiden
      verdirbt den meisten von uns den Appetit. Kaum einer tötet die Tiere selbst, dessen Körper er isst. Rohes Fleisch
      ist für uns grundsätzlich schlecht verdaulich, weshalb wir es zerhacken und/oder kochen. Wir sind sehr wählerisch
      bei den Körperteilen, die wir essen, und noch viel wählerischer bei den Tieren, die wir essen. Die Länge unseres
      Darmes, die Form unserer Zähne, die Art wie wir kauen und die Zusammensetzung unserer Magensäure ist mit
      derjenigen von Pflanzenfressern vergleichbar, nicht mit derjenigen von Fleischfressern. Fleisch zu essen ist für
      uns also keineswegs natürlich.</p>
      <p>Doch selbst wenn Menschen natürliche Allesesser wären, so könnten wir uns dennoch rein pflanzlich ernähren.
      Weshalb sollten wir uns trotzdem aktiv für die leidvolle Option entscheiden? Unsere Moralvorstellung schreibt
      uns vor, dass wir zur Verantwortung gezogen werden sollen, wenn wir unnötiges Leid verursachen.</p>`
  ),];
let necessaryJustifications = [
  new Justification(
    "melken",
    "Kühe müssen gemolken werden",
    "Kühe müssen von Natur aus nicht von Menschen gemolken werden.",
    `<p>
      Wie alle Säugetiere geben Kühe nur Milch, um Ihre Jungen zu nähren. Es ist ein weit verbreiteter Irrglaube, dass
      sie andauernd Milch produzieren. Würden wir Kühe nicht schwängern, würden sie keine Milch geben. Würden wir sie
      nicht zu Leistungsmaschinen heranzüchten, würden sie nicht zu viel Milch produzieren. Würden wir ihre Kinder
      nicht wegnehmen, müssten sie nicht gemolken werden. Wie können wir all dies einem Tier antun und dann behaupten,
      wir täten ihm einen Gefallen? Wir melken Kühe nicht aus Selbstlosigkeit, sondern aus reiner Profitgier.
      </p>`
  ), new Justification(
    "überleben",
    "wir müssen tierische Produkte essen, um zu überleben",
    "Das ist falsch.",
    `<p>
      Das dies nicht stimmt beweisen nur schon die schätzungsweise 80 Millionen Veganern auf der Welt. Donald Watson,
      der Erfinder des Wortes "Vegan", lebte über 61 Jahre lang vegan und starb im Alter von 95 Jahren.
      </p>`
  ),
  new Justification(
    "zugang",
    "manche Menschen haben keinen Zugang zu pflanzlichen Produkten",
    "Für Menschen, die Zugang haben, ist das irrelevant.",
    `<p>
      Nicht jeder kann in einen Supermarkt spazieren und sich aussuchen, was er isst. Es git Menschen, die essen was
      immer nötig ist, um zu überleben. Es ist ihre einzige Option. Für jeden, der nicht in dieser Situation ist,
      ist dies völlig irrelevant. Tierische Produkte zu essen hilft diesen Menschen nicht - im Gegenteil. So können
      beispielsweise einfache Fischer nicht einmal mehr Fische für sich selbst fangen, da kommerzielle
      Industriefischereien die Meere leerräumen - für Menschen, die nicht auf Fische angewiesen sind.
      </p>`
  ),
  new Justification(
    "insel",
    "was wäre, wenn du auf einer einsamen Insel strandest und nur Tiere essen kannst",
    "Für unseren Alltag ist diese hypothetische Situation irrelevant.",
    `
      <p>Eine Tat in einer Extremsituationen ist nicht zu vergleichen mit derselben Tat unter normalen Umständen.
      1972 stürzte ein Flugzeug in den Anden in 4000 Metern höhe ab. Um nicht zu verhungern waren die Überlebenden
      nach wenigen Tagen dazu gezwungen, die Körper der toten Insassen zu essen. Ist Kannibalismus im Alltag daher
      moralisch vertretbar? Natürlich nicht.</p>
      <p>Wenn man sich in einer Situation befindet in der man stirbt, wenn man keine tierischen Produkte konsumiert,
      dann ist das die einzige Option. Zum Glück sind wir nicht in dieser Situation (falls doch, bitte fordere Hilfe
      anstatt das hier zu lesen), daher ist dieser Vergleich irrelevant.</p>
      `
  ),
  new Justification(
    "grund",
    "Töten ist nur falsch, wenn es grundlos ist",
    "Unnötiges Töten ist immer falsch.",
    `
      <p>Für die wenigsten Menschen ist das Ausbeuten und Töten von Tieren eine Notwendigkeit. Wenn es keine
      Notwendigkeit ist, so ist es eine Wahl. Trifft man eine Wahl, so ist man moralisch für diese verantwortlich.</p>
      <p>Ein <i>Grund</i> alleine reicht nicht aus, um etwas moralisch zu rechtfertigen. Wenn jemand Hunde züchtet um
      damit grausame Hundekämpfe zu veranstalten, ist dies dann moralisch? Ist es moralisch, Hühner in Batteriekäfigen
      zu halten, weil dies die effizienteste Art der Eiergewinnung ist?</p>
      <p><q>Ich mag den Geschmack</q>, <q>Es macht mir Spass</q>, <q>Ich sehe damit schön aus</q>, <q>Es ist bequem</q>
      oder <q>Ich kenne es nicht anders</q> sind alles Gründe. Keiner davon ist jedoch eine akzeptable moralische
      Rechtfertigung dafür, einem anderen Lebewesen vermeidbares Leid zuzufügen und ihm das Leben zu nehmen.</p>
      `
  ),
  new Justification(
    "überpopulation",
    "wenn jeder vegan wäre, gäbe es zu viele Tiere",
    "Wir züchten nur so viele Tiere, wie wir benötigen.",
    `
      <p>Sogenannte "Nutztiere" existieren nur, weil wir sie ins Leben gezüchtet haben. Je mehr Menschen vegan werden,
      desto weniger Tiere werden gezüchtet. Es gäbe nie zu viele Tiere.</p>
    `
  ),
  new Justification(
    "aussterben",
    "wenn jeder vegan wäre, würden Nutztiere aussterben",
    "Wir brauchen keine Nutztiere, ihre Haltung lässt tausende Spezies aussterben.",
    `
      <p>Diese Tiere wurden von Menschen über viele Jahre selektiv gezüchtet, um aus ihnen möglichst hohen
      Profit zu schlagen. Daher leiden sie unter vielen verschiedenen gesundheitlichen Problemen. Ihre reine
      Existenz ist oft eine Qual und sie sind gar nicht mehr in der Lage, ein natürliches Leben zu führen oder sich
      selbstständig zu paaren. Sie weiterhin zu züchten wäre oft nicht nur sinnlos, sondern grausam. Selbst wenn es aus
      irgend einem Grund sinnvoll wäre, ihr Aussterben zu verhindern, so wäre die Lösung bestimmt nicht, sie zu
      Milliarden zu züchten, auszubeuten und ihnen die Kehle aufzuschlitzen. Ansonsten sollten wir dies auch mit Tigern,
      Pandas, Nashörnern, Elefanten sowie allen anderen <strong>tausenden von Arten</strong> tun, die genau
      <strong>wegen</strong> unserer Nutztierzucht bereits ausgestorben, oder vom aussterben bedroht sind.
    `
  ),
  new Justification(
    "jobverlust",
    "die Bauern würden ihre Jobs verlieren",
    "Nein, die Anfrage würde sich nur verlagern.",
    `
      <p>Wie absurd dieses Argument ist, zeigt sich, wenn man es auf andere Bereiche anwendet: Wenn man nicht raucht,
      verlieren die Menschen in der Zigarettenindustrie ihre Jobs, daher sollten wir rauchen. Wenn wir keinen Alkohol
      trinken, verlieren die Menschen in der Alkoholindustrie ihre Jobs, daher sollten wir Alkohol trinken. Das ergibt
      keinen Sinn.</p>
      <p>Industrien existieren, um die Bedürfnisse der Konsumenten zu erfüllen, nicht umgekehrt. Wenn jemand
      ein Produkt anbietet, das niemand will, so ist das nicht das Problem der Konsumenten. Sinkt die Nachfrage für
      ein Produkt, so steigt die Nachfrage für ein anderes (von einer Rezession abgesehen). Sinkt die Nachfrage nach
      tierischen Produkten, so steigt die Nachfrage nach pflanzlichen Produkten. Das bedeutet nicht, dass Jobs
      verloren gehen.</p>
    `
  ),
  new Justification(
    "nachhaltig",
    "vegan zu sein ist nicht Nachhaltig",
    "Falsch, Veganismus ist nachhaltiger als Karnismus und Vegetarismus.",
    `
      <p>Weltweit werden jedes Jahr schätzungsweise 77 Milliarden Landtiere für Nahrung geschlachtet. Um diese zu
      füttern wird viel mehr Land, Wasser und Nahrung benötigt als wenn sich alle Menschen ausschliesslich von
      pflanzlichen Produkten ernähren würden. Hinzu kommen weitere, hauptsächlich durch die Tierindustrie verursachten
      Probleme wie die Abholzung der Regenwälder, die Überfischung der Meere, der Ausstoss von Treibhausgasen,
      der Rückgang der Biodiversität, Antibiotikaresistenz, Virusmutationen, Gewässerverschmutzung, Insektensterben,
      Sauerstoffmangel in Küstengewässern usw. Wer das nicht glaub, darf gerne selbst nachforschen.</p>
    `
  ),
  new Justification(
    "soja",
    "das Soja der Veganer zerstört die Regenwälder",
    "Falsch, denn Soja wird hauptsächlich an Tiere verfüttert.",
    `
      <p>Rund 77% des weltweit produzierten Sojas wird an Tiere verfüttert. Isst man ein Tier oder dessen Produkte,
      so isst man indirekt auch das, was das Tier gegessen hat. So konsumiert man mit 100g Schweinefleisch indirekt
      ca. 60g Soja und mit einem Hühnerei rund 25g Soja. Insgesamt konsumiert ein durchschnittlicher Europäer so
      täglich ca. 160g Soja.</p>
      <p>Hinzu kommt, dass Soja, welches Tieren verfüttert wird, zu grossen Teilen aus Brasilien importiert wird
      während Soja, das von Veganern konsumiert wird, überwiegend aus Europa und somit nicht aus Regenwaldregionen
      stammt. Wer den Regenwald schützen möchte, sollte also vegan sein.</p>
    `
  ),
  new Justification(
    "teuer",
    "vegan zu sein ist teuer",
    "Vegane Lebensmittel gehören zu den günstigsten überhaupt.",
    `
      <p>Zu den teuersten tierischen Produkten gehören Kobe-Rindfleisch, Blauflossen-Thunfisch und Kaviar, zu den
      günstigsten gehören Milch, Eier und Geflügel.
      Zu den teuersten pflanzlichen Lebensmitteln gehören Kiefernpilze, Yubari-Honigmelonen und weisser Trüffel,
      zu den günstigsten gehören Brot, Reis, Pasta, Bohnen, Getreide, Kartoffeln usw. Eine gesunde, pflanzliche
      Ernährung kann so erschwinglich wie nötig gestaltet werden.</p>
      <p>Betrachtet man ausserdem die Gesamtkosten, wie z. B. die Subventionierung durch Steuergelder, die
      gesundheitlichen Kosten und die sozialen Kosten, so ist eine pflanzliche Ernährung sogar um ein Vielfaches
      günstiger.</p>
    `
  )
];
let arrogantJustifications = [
  new Justification(
    "intelligenz",
    "Tiere sind nicht so intelligent wie wir",
    "Intelligenz rechtfertigt nicht das Töten anderer.",
    `
      <p>Zu denken, dass Intelligenz den Wert eines Lebens definiert, verursacht einige Probleme. Einerseits ist es sehr
      subjektiv, was Intelligenz bedeutet. Ist die Zerstörung des Ökosystems, auf das wir alle zum Leben angewiesen
      sind, intelligent? Andererseits würde es auch bedeuten, dass das Leben eines intelligenten Menschen mehr Wert
      ist als das eines weniger intelligenten. Dürfte der intelligentere Mensch den anderen deswegen ausbeuten und
      töten? Natürlich nicht.</p>
      <p>Schweine sind ausserdem nachweislich intelligenter als Hunde - sollten wir also nicht Hunde statt Schweine
      essen? Wenn wir wirklich glauben würden, dass Intelligenz den Wert des Lebens definiert, sollten wir sowieso
      alle vegan sein, denn die am wenigsten intelligenten Lebewesen sind Pflanzen.</p>
    `
  ),
  new Justification(
    "dankbar",
    "ohne uns würden sie gar nicht leben, sie sollten uns dankbar sein",
    "Niemand ist dankbar für ein Leben voller Ausbeutung.",
    `<p>
      Nur weil wir verantwortlich dafür sind, dass ein Leben in die Welt gebracht wurde, bedeutet dies nicht, dass wir
      frei darüber bestimmen können. Ansonsten müsste es jeden Eltern frei stehen, ihre Kinder beliebig zu behandeln
      oder zu töten. Wir haben die Züchtung von Tieren so weit getrieben, dass diese bereits mit Körpern geboren werden,
      die ein normales Leben nicht zulassen. Wir sperren sie ein, schwängern sie, nehmen ihre Kinder weg, stehlen ihre
      Milch, ersticken sie, töten sie und sagen, sie sollen dankbar sein? Diese Aussage ist unglaublich arrogant und
      kann nur von jemandem benutzt werden, der ein angenehmes Leben führt. Wie dankbar wären wir selbst, wenn jemand
      anderes am Tag unserer Geburt den Tag unserer Hinrichtung festgelegt und unsere gesamte
      Daseinsberechtigung diejenige ist, dieser Person mit unserem Körper Profit einzufahren? Dies ist kein Leben,
      wofür irgendjemand dankbar sein würde.</p>
    `
  ),
  new Justification(
    "natur-sterben",
    "in der Natur würden die Tiere auf viel brutalere Weise sterben",
    "Das ist nicht garantiert und hat nichts mit Tierwirtschaft zu tun.",
    `
      <p>Zunächst ist dieses Argument für alle Tiere, die wir züchten und in Gefangenschaft aufziehen, völlig
      irrelevant. Denn weder holen wir sie aus der Natur, noch würden wir sie in die Natur entlassen, wenn wir sie nicht
      benötigten - wir würden sie erst gar nicht ins Leben züchten und sie würden daher niemals in der Natur sterben.
      </p><p>Für Tiere, die wir fangen und jagen besteht tatsächlich <strong>die Möglichkeit</strong>, dass sie auf
      qualvolle Art verenden. Es besteht jedoch auch die Möglichkeit, dass sie ein unbeschwertes Leben führen und so
      lange Leben, bis sie an Altersschwäche sterben - eine Möglichkeit, die die von uns getöteten Tiere niemals
      haben.</p>
      <p>Ausserdem müsste es dann moralisch gerechtfertigt sein, jedes beliebige Lebewesen - inkl. Menschen - zu töten,
      da diese ja sowieso irgendwann sterben und wir sie so vor einem möglicherweise qualvollem Tod bewahren. Es ist
      offensichtlich, wie absurd dieses Argument ist.</p>
    `
  ),
  new Justification(
    "nihilist",
    "ich bin Nihilist, mir ist alles egal ausser ich selbst",
    "Tierische Produkte wirken sich auch negativ auf uns aus.",
    `
      <p>Das ist höchst unwahrscheinlich. Aber selbst wenn es so wäre, eine pflanzenbasierte Ernährung hat viele
      gesundheitliche Vorteile gegenüber einer tierbasierten. Ausserdem ist die Tierindustrie eine der grössten
      Bedrohungen für unseren Planeten. Klimawandel, Luftverschmutzung, Antibiotikaresistenz, Wasserverschmutzung,
      Massenaussterben, Insektensterben - alle diese Dinge wirken sich negativ auf jeden Einzelnen von uns aus. Wenn
      wir wirklich egoistisch sind, so sollten wir vegan sein.</p>
    `
  ),];
let pointlessJustifications = [
  new Justification(
    "welt-vegan",
    "die Welt wird nie 100% vegan sein",
    "Die Taten anderer sind irrelevant.",
    `
      <p>Das stimmt. Sie wird vermutlich auch nie frei von Gewalt, Rassismus, Sklaverei, Homophobie oder Sexismus sein.
      Dennoch ist das keine Rechtfertigung dafür, diese Dinge ebenfalls zu praktizieren und wir sind bestrebt, sie
      aus unserer Welt zu schaffen.</p>
      `
  ),
  new Justification(
    "einzelner",
    "ein Einzelner ändert sowieso nichts",
    "Ein Einzelner kann sehr viel ändern.",
    `
      <p>Man muss nicht lange nachdenken um zu erkennen, dass dies nicht zutrifft. Amazon und Facebook begannen mit
      einem Einzelnen. COVID-19 begann mit einem Einzelnen. Oder kennt jemand Elon Musk?</p>
      <p>Ein durchschnittlicher Europäer konsumiert in seinem Leben ca. 1000 Tiere. Nicht darin eingerechnet sind
      Tiere wie Milchkühe, männliche Kälber, Legehennen, männliche Küken, Bienen, Schafe und Fische (Beifang), die
      ebenfalls ihr Leben lassen müssen. Jährlich werden schätzungsweise 3 Billionen Tiere durch Menschen
      getötet. Selbst wenn wir von nur 2 Billionen getöteter Tiere ausgehen, so ergibt dies bei 7.8 Milliarden
      Menschen und einer Lebenserwartung von 70 Jahren insgesamt rund 18'000 getötete Tiere pro Mensch. Ein Einzelner
      macht bereits einen grossen Unterschied.</p>
      <p>Doch selbst wenn man der Erste und Einzige auf der Welt wäre, der etwas tut, so ist letztendlich jeder für
      seine eigenen Taten verantwortlich. Nur weil andere Schlechtes tun, ist dies kein Grund dafür ebenfalls
      Schlechtes zu tun - egal ob man damit etwas verändert oder nicht.</p>
      `
  ),
  new Justification(
    "unperfekt",
    "100% vegan geht sowieso nicht",
    "Das rechtfertigt nicht, absichtlich zu töten.",
    `
      <p>Versuchst du, andere Menschen nicht zu verletzen? Wieso, wenn du es sowieso nie schaffen wirst, niemanden zu
      verletzen? Wir leben in einer Welt, in der es praktisch unmöglich ist, jegliches Tierleid zu vermeiden. Dies ist
      jedoch kein Grund dafür, es gar nicht erst zu versuchen.</p>
      <p>Unsere alleinige Existenz verursacht Leid. Vegan zu sein bedeutet nicht naiv zu denken: <q>Ich bin perfekt,
      ich schade niemandem</q>. Es geht darum das Leid zu erkennen, das wir verursachen, und dieses zu minimieren.
      Tiere nicht absichtlich auszubeuten, ihnen den Kopf abzuschneiden und sie zu essen ist das
      <strong>Mindeste</strong>, was wir tun können.</p>
    `
  ),
  new Justification(
    "kriege",
    "es gibt Kriege auf der Welt und Menschen verhungern",
    "Das ist kein Grund dafür, Tiere zu töten.",
    `
      <p>Das ist schrecklich. Der Grund dafür ist aber nicht, dass wir zu wenig tierische Produkte konsumieren. Daher
      ist es auch irrelevant und keine valide Rechtfertigung dafür, dies zu tun. Im Gegenteil; tierische Produkte
      benötigen viel mehr Getreide und Ressourcen als pflanzliche Produkte. Man könnte argumentieren, dass es viel
      dekadenter und rücksichtslos gegenüber denjenigen ist, die Hunger leiden, die Ressourcen unserer Erde auf
      eine solch ineffiziente und unnötige Art zu verschwenden.</p>
    `
  ),
  new Justification(
    "grössere-probleme",
    "wir Menschen haben grössere Probleme",
    "Das hält uns nicht davon ab, Tiere zu verschonen.",
    `
      <p>Ignorieren wir für einen Moment, dass der Konsum tierischer Produkte massive negative Folgen für die heutige
      und vor allem auf die kommenden Generationen hat und somit eines der grössten Probleme der Menschheit
      darstellt. Aus der Sicht der Tiere ist es ein gigantisches Problem. In unserer gesamten Geschichte wurden rund
      619 Millionen Menschen durch Krieg getötet. Wir töten rund 3.5 Milliarden Tiere - jeden Tag. Würden wir so viele
      Menschen wie Tiere töten, so wären wir nach rund 2 Tagen ausgestorben.</p>
      <p>Betrachten wir das aus egoistischer Sicht, so ist es einfach zu sagen, <strong>wir</strong> haben grössere
      Probleme. Doch dies ist keine moralische Rechtfertigung für das unnötige Töten anderer. Ansonsten müsste es für
      Menschen der Gruppe A auch moralisch sein, Menschen der Gruppe B zu töten - denn Gruppe A hat grössere Probleme
      als die Verschonung von Gruppe B. Jeder dürfte töten wen er will, denn jeder hat grössere Probleme als andere
      am Leben zu lassen.</p>
      <p>Wir sehen uns als intelligente und mitfühlende Wesen. Wir sind fast alle in der Lage, uns in andere
      hineinzuversetzen. Tiere können gelten als "andere" und können genauso Angst, Schmerz und Leid erfahren wie wir
      Menschen. Ihnen unnötig Leid zuzufügen mit der Rechtfertigung "wir Menschen haben grössere Probleme" ist alles
      andere als intelligent und mitfühlend.</p>
    `
  ),
  new Justification(
    "alle-probleme",
    "wir können nicht alle Probleme dieser Welt lösen",
    "Das ist kein Grund dafür, Tiere zu töten. Vegan zu sein ist passiv und hilft, viele Probleme zu lösen.",
    `
      <p>Unsere Ressourcen sind beschränkt und wir können nicht alle Probleme gleichzeitig lösen. Vegan zu leben ist
      jedoch passiv und sehr einfach. Wir müssen dafür weder unsere Jobs kündigen, noch unser Geld spenden, noch unsere
      Freizeit opfern. Wir müssen nur bestimmte Angebote vermeiden oder sie durch andere ersetzen.</p>
      <p>Doch vegan zu sein hilft nicht nur den Tieren. Es reduziert Plastik, das von der Fischerei ins Meer gelangt,
      es reduziert den Ausstoss von Treibhausgasen, es reduziert die benötigte Landfläche, reduziert somit die
      Abholzung der Regenwälder und fördert die Biodiversität. Es vermindert die Belastung unserer Böden und Gewässer.
      Es hilft Fischbeständen, sich zu erholen. Es zwingt niemanden, in einem Schlachthaus zu arbeiten und es
      reduziert Hass und Diskriminierung gegenüber sämtlichen Lebewesen.</p>
      <p>Vegan zu sein ist möglicherweise die einfachste und effektivste Entscheidung, die man treffen kann.</p>
    `
  )
];
let healthJustifications = [
  new Justification(
    "ungesund",
    "vegan zu sein ist ungesund",
    "Hunderttausende Ernährungswissenschaftler behaupten das Gegenteil.",
    `
      <p>Worauf basiert diese Behauptung? Bestimmt nicht auf den Aussagen der <i>American Dietetic Association</i>
      oder der <i>British Dietetic Association</i>, den zwei grössten Verbänden aus Experten für Ernährung und Diät.
      Deren offizielle Stellungsnahme besagt, dass eine gut geplante pflanzliche (vegane) Ernährung sicher und geeignet
      für alle Lebensabschnitte ist, einschließlich Schwangerschaft und Säuglingsalter. Diverse Studien kommen zudem
      zum Schluss, dass eine vegane Ernährung gesundheitliche Vorteile bietet und beispielsweise das Risiko für
      Herzkrankheiten, Prostata- und Darmkrebs, Bluthochdruck und Typ 2 Diabetes wesentlich reduziert, oder diese sogar
      heilen kann.</p>
    `
  ),
  new Justification(
    "protein",
    "pflanzliche Produkte liefern zu wenig Protein",
    "Falsch, viele pflanzliche Produkte beinhalten sogar mehr Protein.",
    `
      <p>Wer dies denkt, sollte sich unbedingt informieren. Mandeln, Tempeh, Chia Samen, Linsen, Erbsen, Kürbiskerne,
      Erdnüsse, Sojabohnen, Hanfsamen, Sonnenblumenkerne, Kidneybohnen, Kichererbsen, Lupinensamen, Seitan - sie alle
      beinhalten ähnlich viel oder mehr Proteine als Eier, Hühnchen- oder Rindfleisch. Obendrauf beinhalten sie noch
      viele weitere wertvolle Nährstoffe und sind gleichzeitig frei von Cholesterin, gesättigten Fettsäuren, tierischer
      Hormone und Medikamentenrückstände.
      </p>
    `
  ),
  new Justification(
    "eisen",
    "pflanzliche Produkte liefern zu wenig Eisen",
    "Falsch, viele liefern sogar mehr als tierische Produkte",
    `
      <p>Wer dies denkt, sollte sich unbedingt informieren. Tiere produzieren kein Eisen, sondern nehmen dieses über
      pflanzliche Nahrung auf. Wir können das Gleiche tun.</p>
    `
  ),
  new Justification(
    "kalzium",
    "pflanzliche Produkte liefern zu wenig Kalzium",
    "Falsch, viele liefern sogar mehr als tierische Produkte",
    `
      <p>Wer dies denkt, sollte sich unbedingt informieren. Auch Kalzium kann in ausreichenden Mengen über pflanzliche
      Lebensmittel, Mineralwasser oder angereicherter, pflanzlicher Milch aufgenommen werden. Für den Abbau tierischer
      Eiweisse wird sogar Kalzium benötigt, welches dann über den Urin ausgeschieden wird, was zu einer negativen
      Kalziumbilanz führen kann. Es ist offensichtlich, dass die Natur Kuhmilch für Babykühe und nicht für Menschen
      vorgesehen hat. Sobald wir abgestillt sind, benötigen wir keine Milch mehr. Abgesehen davon beweist alleine die
      Tatsache, dass weltweit ca. 65 - 70% der erwachsenen Menschen laktoseintolerant sind, dass wir keineswegs auf
      Kuhmilch angewiesen sind.</p>
    `
  ),
  new Justification(
    "b12",
    "Vitamin B12 ist nur in tierischen Lebensmitteln enthalten",
    "(Fast) falsch, aber irrelevant, da wir auch ohne Tiere an B12 kommen",
    `
      <p>Vitamin B12 wird von Mikroorganismen wie Bakterien produziert.
      Böden, welche nicht zu sehr mit Chemikalien belastet sind, können sehr viele dieser B12 produzierende
      Bakterien enthalten. Bei der Ernte kann dieses Vitamin auf Pflanzen haften bleiben. Aufgrund der in
      Industrienationen eingesetzten Chemikalien, der gründlichen Säuberung und dem Schälen der Lebensmittel sind
      unsere Lebensmittel so "rein", dass diese Vitamine verloren gehen.</p>
      <p>Einige Tiere verfügen über Mikroorganismen in ihren Körpern, die Vitamin B12 bilden. Hierfür müssen sie über
      ihre Nahrung Kobalt aufnehmen. Andere Tiere können B12 nur über die Nahrung aufnehmen. Da oft auch dieses Futter
      zu "rein" ist oder nicht über genügend Kobalt verfügt, ist es nicht unüblich, dass B12 ins Futter gemischt
      wird.</p>
      <p>Die Behauptung, dass B12 nur in tierischen Produkten vorkommt, ist daher etwas hinterlistig. Wenn tierische
      Produkte nur B12 enthalten, weil wir ihr Futtern damit anreichern, so könnte man auch behaupten, dass nur
      pflanzliche Milch B12 beinhaltet, weil wir diese damit anreichern.</p>
      <p>Letztendlich ist dies jedoch völlig irrelevant. Unsere Gesellschaft hat unsere natürliche B12-Zufuhr
      eliminiert, kann aber stattdessen Bakterien züchten, die B12 produzieren. Warum sollten wir also fühlende
      Lebewesen züchten, einsperren, ausbeuten und töten, wenn wir B12 auch ohne Umweg über das Tier produzieren können?
      Das ist als würden wir Berliner (die Brötchen) ausquetschen um an Marmelade zu gelangen. Das ergibt keinen
      Sinn.</p>
    `
  ),
  new Justification(
    "baby",
    "ich habe von einer veganen Familie gehört, deren Baby starb",
    "Daran war nicht der Veganismus schuld.",
    `
      <p>Dieses Baby starb an Unterernährung. Veganismus hat mit Unterernährung nichts zu tun. Nur weil eine vegane
      Familie ihre elterliche Pflicht nicht erfüllte, sagt dies nichts über Veganismus aus. Es gibt genauso
      nicht-Veganer, die ihr Kind verhungern liessen, auch dies sagt nichts über nicht-Veganer aus. Die Schlagzeile
      "Veganer lassen Kind verhungern!" verkauft sich nunmal besser als "Nicht-Veganer lassen Kind verhungern!".</p>
    `
  ),];
let offendingJustifications = [
  new Justification(
    "leben-lassen",
    "könnt ihr Veganer nicht einfach Leben und Leben lassen?",
    "Leben und Leben lassen ist genau der Grundgedanke des Veganismus.",
    `
      <p>Zu jemandem, der niemanden töten will, zu sagen "leben und leben lassen" während man das Töten anderer in
      Auftrag gibt, ist an Scheinheiligkeit wohl kaum zu überbieten.</p>
    `
  ),
  new Justification(
    "aufzwingen",
    "hört auf, anderen eure Meinung aufzuzwingen",
    "Veganer respektieren die Meinung anderer, nicht sterben zu wollen.",
    `
      <p>Die wenigsten Veganern versuchen, anderen ihre Meinung <i>aufzuzwingen</i>. Sie versuchen lediglich, Menschen
      über Missstände aufzuklären und diese zum Umdenken zu bewegen. Beides ist für jeden sozialen Fortschritt
      unvermeidlich. Die Meinung von Veganern ist es, dass niemandem unnötig Leid zugefügt werden sollte. Ist
      das nicht eine vernünftige Meinung? Welcher Mensch meint, dass es in Ordnung ist anderen unnötig Leid
      zuzufügen?</p>
      <p>Und wie steht es um die Meinung von nicht-Veganern? Zwingen diese nicht täglich ihre Meinung <q>Tiere
      auszubeuten und zu töten ist in Ordnung</q> den Tieren auf, indem sie andere dafür bezahlen, genau dies zu
      tun? Was ist das, wenn nicht eine Doppelmoral.</p>
    `
  ),
  new Justification(
    "engstirnig",
    "Veganer sind engstirnig",
    "Wären sie engstirnig, wären sie nicht Veganer geworden.",
    `
      <p>Kaum jemand wurde als Veganer aufgezogen. Nahezu jeder wurde mit der gleichen Unwissenheit oder Ignoranz
      aufgezogen, von der Industrie belogen und verblendet und hat es geliebt, tierische Produkte zu konsumieren. Doch
      eines Tages haben sie erkannt, dass sich ihre Taten nicht mit ihren Werten vereinbaren lassen. Sie haben nicht
      nur an sich selbst gedacht, sondern sich in die Opfer hineinversetzt. Sie haben keine Ausreden erfunden und die
      grausame Realität ignoriert, sondern Verantwortung übernommen und ihr Verhalten geändert. Wären sie engstirnig,
      hätten sie dies nie getan.</p> `
  )
];
let youTooJustifications = [
  new Justification(
    "auto",
    "beim Autofahren sterben auch Tiere",
    "Versehentliches Töten rechtfertigt nicht absichtliches Töten.",
    `
      <p>Sterben Insekten, weil sie gegen die Windschutzscheibe knallen, oder wird versehentlich ein Igel überfahren,
      so ist dies bedauerlich. Moralisch gesehen besteht jedoch ein grosser Unterschied zwischen einem Unfall und einer
      Absicht. Kein geistig gesunder Mensch fährt Auto, um absichtlich Insekten zu töten oder Igel zu überfahren. Tiere
      einzusperren, auszubeuten und ihnen die Kehle durchzuschneiden ist jedoch niemals ein Unfall, sondern immer
      Absicht.</p>
    `
  ),
  new Justification(
    "medikamente",
    "Medikamente sind auch nicht vegan",
    ".",
    `
      <p>Zum einen gibt es durchaus wirksame Medikamente, die vegan sind. Zum anderen ist es manchmal unmöglich an
      völlig vegane Medikamente zu gelangen, da beispielsweise für die Zulassung von Impfstoffen Tierversuche gesetzlich
      vorgeschrieben sein können.</p>
      <p>Das Ziel eines Veganers ist es, soweit wie möglich und praktikabel kein Tierleid zu verursachen. Meidet man
      tierische Lebensmittel, so erzeugt man keine Nachfrage, die das Töten zusätzlicher Tiere erfordert. Meidet man
      Produkte von Firmen, die diese Produkte freiwillig an Tieren testet, so übt man Druck auf diese Firmen aus.
      Meidet man Impfstoffe bei denen die Hersteller gezwungen wurden, an Tieren zu testen, so bewirkt man gar nichts.
      Hier ist es wichtig, veraltete Gesetze zu ändern und Alternativen zu fördern.</p>
      <p>Befindet man sich in einer Situation, in der man sich zwischen einer nicht-veganen Option und dem Tod
      entscheiden muss, so ist es nachvollziehbar (wenn auch nicht moralisch), nicht den Tod zu wählen.</p>
      <p>Für die laufende Forschung an Krankheiten, für die es noch kein Heilmittel gibt, stellt sich die Frage: Würde
      man etwa das eigene Haustier opfern um für die Forschung gequält und anschliessend getötet zu werden? Oder würde
      man sagen, es hat damit nichts zu tun und man akzeptiert lieber die Situation, das Tier durch die Hölle zu
      schicken, nur um möglicherweise ein Heilmittel zu finden? Zum Glück ist es jedoch nicht eine entweder/oder
      Situation, denn es gibt mittlerweile Alternativen zu Tierversuchen. Übrigens: Rund 90% aller neuen Medikamente,
      die bei Tierversuchen erfolgreich waren, versagen beim Menschen.</p>
      <p>Doch selbst wenn manche Medikamente nicht vegan sind, so ist das kein Grund dafür den Tieren noch mehr
      unnötiges Leid zuzufügen, indem wir sie für ihre Körper und Ausscheidungen ausbeuten und töten.
      </p>
    `
  ),
  new Justification(
    "haustiere",
    "unsere Haustiere benötigen Fleisch",
    "Das ist kein Grund dafür, noch weitere Tiere zu töten.",
    `
      <p>Was man seinem Haustier zu essen gibt hat nichts damit zu tun, was man selbst konsumiert.</p>
      <p>Als Tierhalter ist man für das Leid, welches das eigene Tier verursacht, mitverantwortlich - insbesondere dann,
      wenn das Tier nicht aus einem Tierheim stammt sondern extra für das Vergnügen des Tierhalters ins Leben gezüchtet
      wurde. Hat man ein Haustier, das auch ohne Fleisch ein gesundes Leben führen kann, so ist es sinnvoll, es
      fleischlos zu ernähren. Ist man der Meinung, dass es absolut zwingend mit Fleisch gefüttert werden muss, so wird
      man dies wohl tun. Die Alternative, die wohl keiner mag, wäre, sich dem Tier zu entledigen. Mann könnte
      argumentieren, dass dies ja auch grausam sei. Jedoch würde man so nur einem Tier Leid zufügen, anstatt vielen.</p>
      <p>Als Tierhalter sollte man sich fragen, ob man das eigene Tier dafür opfern wollen würde, um dieses etwa einem
      Löwen in einem Zoo zu verfüttern. Falls nicht, weshalb ist es dann in Ordnung, andere Tiere dem eigenen Haustier
      zu verfüttern?</p>
      <p>Katzen, beispielsweise, benötigen kein <i>Fleisch</i>, sondern lediglich die <i>Nährstoffe</i>, die darin
      enthalten sind (hauptsächlich Taurin). Daher ist es möglich, Katzen mit veganem Futter zu ernähren, das diese
      Nährstoffe beinhaltet. Wer meint, eine Katze vegan zu ernähren sei Tierquälerei, der sollte einerseits begründen,
      inwiefern einer Katze dadurch Leid zugefügt wird und dies mit der viel grausameren Tierquälerei vergleichen, die
      für die Herstellung des nicht-veganen Tierfutters begangen wird. Wer meint, veganes Tierfutter sei unnatürlich,
      der sollte sich fragen wie natürlich es für eine Katze ist, den Körper einer Kuh oder eines Thunfisches zu essen.
      </p>
    `
  ),
  new Justification(
    "handys",
    "für dein Handy arbeiten Kinder in Kobalt-Minen",
    "Das ist kein Grund dafür, Tiere zu töten.",
    `
      <p>Der Kauf tierischer Produkte hilft nicht, diese Situation zu verbessern. Nur weil wir Leid an einem Ort
      verursachen, bedeutet dies nicht, dass wir Leid auch an einem anderen Ort verursachen müssen. Das sind zwei
      völlig getrennte Probleme und das Eine rechtfertigt nicht das Andere.</p>
    `
  )
];

const data = [
  new Category("harm", "Die Tiere leiden nicht", harmJustifications),
  new Category("choice", "Jedem das Seine", choiceJustifications),
  new Category("normal", "Es ist normal", normalJustifications),
  new Category("natural", "Es ist natürlich", naturalJustifications),
  new Category("necessary", "Es ist notwendig", necessaryJustifications),
  new Category("arrogant", "Menschen sind wichtiger als Tiere", arrogantJustifications),
  new Category("pointless", "Es ist sinnlos", pointlessJustifications),
  new Category("health", "Es geht um unsere Gesundheit", healthJustifications),
  new Category("offending", "Veganer nerven", offendingJustifications),
  new Category("youToo", "Veganer sind Scheinheilige", youTooJustifications),
];

String.prototype.capitalize = function () {
  return this.charAt(0).toUpperCase() + this.slice(1)
}

function Title({category}) {
  return (
    <div className="content">
      <h1 id={"cat-" + category.id} className="content-title">{category.title}</h1>
    </div>
  )
}

function CategoryItem({category, counter}) {
  return <ol start={counter.value}>
    {category.justifications.map(justification => {
        return <JustificationComponent key={justification.id} nr={counter.value++} justification={justification}/>
      }
    )}
  </ol>
}

export default function Justifications({data}) {
  const counter = {value: 1};
  const title = "Rechtfertigungen für das Ausbeuten und Töten von Tieren";

  return (
    <div className="dark:text-gray-400">

      <Head>
        <title>{title}</title>
      </Head>

      <h1 className="text-xl font-bold mb-4 dark:text-gray-300">{title}</h1>

      <NavigationComponent data={data}/>

      {data.map((category, index) => {
        return <CategoryItem key={index} category={category} counter={counter}/>
      })}
    </div>
  )
}

export async function getStaticProps({params}) {
  return {
    props: {
      data: data.map(category => ({
        id: category.id,
        title: category.title,
        justifications: category.justifications.map(justification => ({
          id: justification.id,
          claim: justification.claim,
          shortRefutation: justification.shortRefutation,
          longRefutation: justification.longRefutation
        }))
      }))
    }
  }
}
