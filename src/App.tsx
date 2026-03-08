import { 
  Instagram, 
  Music2, 
  MessageCircle, 
  Send, 
  ThumbsUp, 
  Star, 
  BarChart3, 
  Sun, 
  MessageSquare,
  Brain,
  Users,
  Megaphone,
  Bot,
  Video,
  Lightbulb,
  Heart,
  UserCheck,
  BookOpen,
  PiggyBank,
  CheckCircle2,
  ChevronDown
} from 'lucide-react';
import { useState } from 'react';

export default function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    if (openFaq === index) {
      setOpenFaq(null);
    } else {
      setOpenFaq(index);
    }
  };

  const faqs = [
    {
      question: "Brauche ich Vorerfahrung oder technisches Wissen?",
      answer: "Nein. Du wirst Schritt für Schritt durch den gesamten Prozess geführt - von null an. Alles ist leicht verständlich erklärt, auch wenn du noch nie online gearbeitet hast."
    },
    {
      question: "Ist das Ganze seriös oder ein Schneeballsystem?",
      answer: "Nein. Hier geht es um ein echtes Online-Business, das auf Social-Media-Marketing basiert - kein Schneeballsystem, kein Network-Marketing und kein MLM. Du bewirbst ein reales Produkt und erhältst dafür hohe Provisionen."
    },
    {
      question: "Muss ich mich zeigen oder Videos von mir posten?",
      answer: "Nein. Das System funktioniert komplett faceless - du lernst Schritt für Schritt, wie du ohne Kamera und ohne dich selbst zu zeigen mit Social Media erfolgreich wirst. Außerdem erhältst du vorgefertigte Reels, Story-Vorlagen (mit und ohne Text) sowie komplette Skripte, sodass du dir keine Gedanken darüber machen musst, was du posten sollst."
    },
    {
      question: "Auch als Mama / Papa / Berufstätige:r ?",
      answer: "Absolut! Genau dafür ist das System gemacht - flexibel, von Zuhause aus, vom Handy aus oder von überall auf der Welt. Ideal für Eltern oder Berufstätige, die ihre Elternzeit verlängern, ihr Elterngeld aufstocken oder einfach mehr Zeit für Familie, Freunde und sich selbst haben möchten."
    },
    {
      question: "Wie schnell kann ich Verdienen?",
      answer: "Das ist individuell - aber viele erzielen ihre ersten Verkäufe schon in den ersten Tagen/Wochen. Entscheidend ist, dass du die Schritte umsetzt, die dir gezeigt werden."
    },
    {
      question: "Wie viel Zeit muss ich investieren?",
      answer: "Bereits 1-2 Stunden täglich reichen aus, um die Strategien umzusetzen. Viele starten erfolgreich neben Beruf, Familie oder Elternzeit."
    },
    {
      question: "Was genau bekomme ich, wenn ich starte?",
      answer: "Du erhältst sofortigen Zugang zum kompletten Mitgliederbereich mit klaren Schritt-für-Schritt-Videos, Vorlagen, Tools und Strategien - alles, was du brauchst, um loszulegen."
    },
    {
      question: "Gibt es persönliche Unterstützung?",
      answer: "Ja. Du bekommst Zugang zu einer Community, Live-Austausch und Support - du bist nie allein. Bei Fragen kannst du dich jederzeit an uns oder deine Ansprechpartner wenden."
    },
    {
      question: "Wie kann ich starten?",
      answer: "Klicke einfach auf einen der Buttons auf dieser Seite, sichere dir deinen Zugang und starte direkt durch - du erhältst alle Login-Daten sofort per E-Mail."
    },
    {
      question: "Wie hoch ist die Provision pro Verkauf?",
      answer: "Pro Sale erhältst du eine Provision von 80 %, das entspricht ca 850€ netto. Die Auszahlung erfolgt automatisch über unsere Plattform."
    }
  ];

  return (
    <div className="min-h-screen bg-brand-dark text-white font-sans">
      {/* Hero Section */}
      <section className="relative bg-black/80 py-16 px-4 text-center border-b border-brand-gold/30">
        <div className="absolute inset-0 z-0 opacity-40 mix-blend-overlay" style={{ backgroundImage: 'url("https://picsum.photos/seed/luxury/1920/1080")', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="mb-8 flex flex-col items-center">
            <img 
              src="https://drive.google.com/uc?export=view&id=1p_pBggPPTQSh9nZG1m-mth3xUoKoK6n8" 
              alt="Social Queens Club Logo" 
              className="w-full max-w-md object-contain"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="bg-black/60 backdrop-blur-sm p-8 rounded-xl border border-brand-gold/20 mt-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              Starte jetzt das <span className="text-brand-pink">beliebteste, einfachste & erfolgreichste</span><br />
              Business für Anfänger auf Social Media vom Handy aus!
            </h2>
            <p className="text-lg md:text-xl mb-6 text-gray-300">
              Erhalte Zugriff in die Social Queens Club Elite — das Business, mit dem Jenny & Karina<br />
              in nur 11 Monaten als ganz normale Mamas, durch das posten - über 1,6 Mio € Umsatz erzielt haben.
            </p>
            <p className="font-bold tracking-widest text-sm md:text-base">
              • OHNE ERFAHRUNG • AUCH ANONYM • OHNE SPRECHEN
            </p>
          </div>

          <div className="mt-16">
            <h3 className="text-3xl font-bold mb-8">UND SO <span className="text-brand-pink">GEHT´S</span></h3>
            <div className="relative w-64 h-[450px] mx-auto rounded-[3rem] border-8 border-gray-800 overflow-hidden shadow-2xl shadow-brand-pink/20">
              <img src="https://drive.google.com/file/d/1p_pBggPPTQSh9nZG1m-mth3xUoKoK6n8/view?usp=sharing" alt="Phone screen showing two women" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              <div className="absolute bottom-8 left-0 right-0 text-center">
                <span className="bg-white/90 text-black px-4 py-2 rounded-full font-bold text-sm shadow-lg">
                  wenn du hier<br/>gelandet bist
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story / Frames Section */}
      <section className="py-24 px-4 bg-brand-dark relative overflow-hidden border-b border-gray-800">
        <div className="max-w-7xl mx-auto relative z-10 space-y-32">
          
          {/* Frame 1: Boat / Family Time */}
          <div className="relative p-1 md:p-2 bg-gradient-to-br from-gray-800 to-black rounded-3xl shadow-2xl">
            <div className="absolute -inset-1 bg-gradient-to-r from-brand-gold/30 to-brand-pink/30 blur-lg rounded-3xl -z-10"></div>
            <div className="bg-[#1a1c23] rounded-[1.5rem] p-8 md:p-12 border border-gray-700/50">
              <div className="flex flex-col lg:flex-row items-center gap-12">
                <div className="w-full lg:w-1/2 order-2 lg:order-1 space-y-8 text-center lg:text-left">
                  <h3 className="text-2xl md:text-3xl font-serif italic text-gray-300 leading-relaxed">
                    "Früher hab ich immer die Dinge angefangen und nie zu Ende gebracht. Heute mach ich einfach ohne Nachzudenken."
                  </h3>
                  <div className="w-16 h-1 bg-brand-gold mx-auto lg:mx-0"></div>
                  <p className="text-2xl md:text-4xl font-bold leading-snug">
                    Es ist nicht mein Boot, aber ich wollte dir zeigen, wie wertvoll Zeit mit Freunden und Familie ist.
                  </p>
                  <p className="text-lg md:text-xl text-gray-400 leading-relaxed font-light">
                    Warte nicht auf perfekt - starte unperfekt. Je eher du damit beginnst, umso mehr Zeit hast du für dich und deine Familie.
                  </p>
                </div>
                <div className="w-full lg:w-1/2 order-1 lg:order-2">
                  <div className="relative rounded-2xl overflow-hidden border-4 border-gray-800 shadow-2xl aspect-[4/3] group">
                    <img 
                      src="https://drive.google.com/uc?export=view&id=1p_pBggPPTQSh9nZG1m-mth3xUoKoK6n8" 
                      alt="Zeit mit Familie auf dem Boot" 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Frame 2: Digital Business */}
          <div className="relative p-1 md:p-2 bg-gradient-to-bl from-gray-800 to-black rounded-3xl shadow-2xl">
            <div className="absolute -inset-1 bg-gradient-to-r from-brand-pink/30 to-brand-gold/30 blur-lg rounded-3xl -z-10"></div>
            <div className="bg-[#1a1c23] rounded-[1.5rem] p-8 md:p-12 border border-gray-700/50">
              <div className="flex flex-col lg:flex-row items-center gap-12">
                <div className="w-full lg:w-1/2">
                  <div className="relative rounded-2xl overflow-hidden border-4 border-gray-800 shadow-2xl aspect-[4/3] group">
                    <img 
                      src="https://picsum.photos/seed/coffee/800/600" 
                      alt="Digital Business mit System" 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </div>
                <div className="w-full lg:w-1/2 space-y-8 text-center lg:text-left">
                  <h2 className="text-4xl md:text-6xl font-black tracking-wider mb-2">
                    Kursauf<span className="text-brand-pink">freiheit</span>
                  </h2>
                  <h3 className="text-2xl md:text-3xl font-serif tracking-[0.2em] text-brand-gold uppercase">
                    Digital Business
                  </h3>
                  <div className="w-16 h-1 bg-brand-pink mx-auto lg:mx-0"></div>
                  <p className="text-2xl md:text-4xl font-light italic text-gray-300">
                    mit System
                  </p>
                  <div className="pt-8">
                    <button className="bg-white text-black font-bold text-lg py-4 px-10 rounded-full shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:scale-105 transition-transform">
                      Jetzt starten
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* What you get Section */}
      <section className="py-20 px-4 bg-brand-darker">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold mb-8 uppercase">WAS DU <span className="text-brand-pink">BEKOMMST</span></h2>
            <div className="relative w-64 mx-auto md:mx-0 mb-8">
              <div className="absolute -inset-4 bg-gradient-to-r from-brand-pink/20 to-brand-gold/20 blur-xl rounded-xl"></div>
              <div className="relative bg-black border border-gray-800 p-6 rounded-lg shadow-2xl">
                <div className="text-xs text-gray-500 transform -rotate-90 absolute -left-16 top-32 tracking-widest">
                  AUTOMATISIERT - IDIOTENSICHER
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 text-brand-gold">
                    <svg viewBox="0 0 100 100" className="w-full h-full fill-current">
                      <path d="M50 10 L60 35 L85 35 L65 55 L75 80 L50 65 L25 80 L35 55 L15 35 L40 35 Z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-serif text-brand-gold uppercase tracking-widest mb-1">Social</h3>
                  <h3 className="text-2xl font-serif text-brand-gold uppercase tracking-widest mb-1">Queens</h3>
                  <h3 className="text-2xl font-serif text-brand-gold uppercase tracking-widest mb-4">Club</h3>
                  <div className="bg-brand-gold text-black text-xs font-bold py-1 px-2 inline-block mb-4">ELITE</div>
                  <div className="text-[10px] text-gray-400 mb-4">
                    TOP<br/>EXPERTE<br/>AWARD<br/>2025<br/>ERFOLG
                  </div>
                  <div className="text-brand-pink text-sm italic font-serif">
                    FOR QUEENS & KING'S<br/>Make Millions!
                  </div>
                </div>
              </div>
            </div>
            <button className="bg-white text-black font-bold text-xl py-4 px-8 rounded-full shadow-[0_0_20px_rgba(255,105,180,0.4)] hover:scale-105 transition-transform flex items-center gap-2 mx-auto md:mx-0">
              <span className="text-brand-pink text-2xl">🔗</span> Will ich haben!
            </button>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-6 text-center md:text-left">Das erwartet dich in der Social Queens Club Elite</h3>
            
            {[
              { title: "Starten OHNE Vorkasse:", desc: "Mit einer kleinen Rate zB. über Klarna auf 30 Tage später. Mit deiner 2. Provision kannst du einfach den Betrag ablösen!" },
              { title: "Bewährtes Erfolgssystem:", desc: "Starte sofort - mit einer klaren Schritt-für-Schritt-Anleitung, fertigen Vorlagen, Tools & Strategien, die einfach funktionieren." },
              { title: "Automatisierung & KI-Tools:", desc: "Nutze smarte Tools, die dir (fast) alles abnehmen - von Content bis zur Kundengewinnung. Kein Technik-Wirrwarr, kein Stress." },
              { title: "Community & Support:", desc: "Erlebe echten Zusammenhalt, Austausch, Motivation und 100% Support von Menschen, die denselben Weg gehen wie du." },
              { title: "Faceless & Personal Brand:", desc: "Lerne beide Wege kennen - mit oder ohne Kamera. Entscheide selbst, welcher Stil zu dir passt, und bleib dabei 100 % authentisch." }
            ].map((item, i) => (
              <div key={i} className="border border-gray-700 bg-black/40 p-4 rounded-lg flex gap-4">
                <div className="text-brand-pink mt-1"><CheckCircle2 className="w-5 h-5" /></div>
                <div>
                  <h4 className="font-bold text-sm mb-1">{item.title}</h4>
                  <p className="text-xs text-gray-400 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feedback Section */}
      <section className="py-20 px-4 bg-brand-dark">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 tracking-wider">KUNDENFEEDBACK</h2>
          <h3 className="text-2xl md:text-3xl font-bold mb-12 text-gray-300">UND AUCH DU WIRST UNTERSTÜTZT</h3>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[1, 2, 3].map((i) => (
              <div key={i} className="relative rounded-[2rem] border-4 border-gray-800 overflow-hidden bg-black h-[500px]">
                <div className="absolute top-6 left-0 right-0 text-center z-10">
                  <div className="bg-brand-pink text-white font-bold px-6 py-2 inline-block rounded-full text-sm shadow-[0_0_15px_rgba(255,105,180,0.5)]">
                    KUNDEN FEEDBACK
                  </div>
                  <div className="text-brand-pink font-serif italic text-4xl mt-4 drop-shadow-lg">
                    Erfolge
                  </div>
                </div>
                <img src={`https://picsum.photos/seed/success${i}/400/800`} alt="Success proof" className="w-full h-full object-cover opacity-60" referrerPolicy="no-referrer" />
                <div className="absolute bottom-6 right-6 text-brand-pink opacity-50">
                  <span className="text-6xl font-serif">"</span>
                </div>
                <div className="absolute bottom-6 left-0 right-0 text-center">
                  <span className="text-xs font-bold tracking-widest text-brand-pink">SOCIALQUEENSCLUB</span>
                </div>
              </div>
            ))}
          </div>
          
          <button className="bg-black border border-gray-600 text-white font-bold py-3 px-8 rounded-sm hover:bg-gray-900 transition-colors">
            KLICKE HIER FÜR MEHR NACHWEISE
          </button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-[#EAEAEA] text-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-brand-pink drop-shadow-sm">DIGITALES MARKETING</span> - MIT JENNY & KARINA
            </h2>
            <div className="flex justify-center gap-4 text-gray-800">
              <Instagram className="w-6 h-6" />
              <Music2 className="w-6 h-6" />
              <MessageCircle className="w-6 h-6" />
              <Send className="w-6 h-6" />
              <ThumbsUp className="w-6 h-6" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="w-48 h-64 rounded-2xl overflow-hidden shadow-xl shrink-0">
                <img src="https://picsum.photos/seed/jenny/400/600" alt="Jenny" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="text-sm leading-relaxed">
                <p className="mb-4">
                  <strong>Ich bin Jenny, Mama</strong> und habe die letzten 10 Jahre <strong>Vollzeit in der Telekommunikation und erfolgreich als Influencerin</strong> gearbeitet.
                </p>
                <p className="mb-4">
                  Mein Leben bestand aus <strong>Schichtdienst, neben meinem Alltag als Mama.</strong> Ich wollte raus aus diesem <strong>System und endlich für meine Tochter da sein. Ohne Vorerfahrung</strong> bin ich im <strong>August 2024 im digitalen Marketing gestartet.</strong>
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="w-48 h-64 rounded-2xl overflow-hidden shadow-xl shrink-0">
                <img src="https://picsum.photos/seed/karina/400/600" alt="Karina" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="text-sm leading-relaxed">
                <p className="mb-4">
                  <strong>Ich bin Karina, Zwillings-Mama</strong> und war lange Zeit <strong>Vollzeit als stellvertretende Filialleiterin in der Motorrad Branche aktiv.</strong>
                </p>
                <p className="mb-4">
                  Mein Leben bestand aus <strong>Schichtdienst und Wochenend Arbeit, was mit Zwillingen absolut nicht mehr ging.</strong> Ich wollte raus aus diesem <strong>Teufelskreis</strong> und endlich <strong>einfach nur Mama sein Ohne Vorerfahrung</strong> bin ich im <strong>August 2024 im digitalen Marketing gestartet.</strong>
                </p>
              </div>
            </div>
          </div>

          <div className="text-center flex items-center justify-center gap-4 text-xl font-bold">
            <BarChart3 className="w-8 h-8" />
            Unser Umsatz seit 2025 <span className="text-brand-pink text-3xl font-black drop-shadow-sm">1,7 Millionen</span>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 px-4 bg-black border-t border-gray-800">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img src="https://picsum.photos/seed/both/600/800" alt="Jenny and Karina" className="rounded-xl shadow-2xl opacity-80" referrerPolicy="no-referrer" />
            <div className="mt-8 flex justify-center">
              <div className="flex flex-col items-center">
                <div className="flex items-center gap-2 text-green-500 font-bold text-xl mb-2">
                  <Star className="w-6 h-6 fill-current" /> Trustpilot
                </div>
                <div className="flex gap-1">
                  {[1,2,3,4,5].map(i => (
                    <div key={i} className="bg-green-500 p-1">
                      <Star className="w-5 h-5 text-white fill-current" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-brand-gold mb-8">KARINA & JENNY</h2>
            
            <div className="flex gap-4">
              <Star className="w-6 h-6 text-brand-gold shrink-0 mt-1" />
              <p className="text-sm text-gray-300">Über 10 Jahre Erfahrung im Social-Media-Game.<br/>Von Influencerinnen zu digitalen Unternehmerinnen.</p>
            </div>
            
            <div className="flex gap-4">
              <BarChart3 className="w-6 h-6 text-brand-gold shrink-0 mt-1" />
              <p className="text-sm text-gray-300">Über 1,6 Mio. € Umsatz seit 2025.<br/>Mit einem System, das einfach und für jeden funktioniert.</p>
            </div>
            
            <div className="flex gap-4">
              <Sun className="w-6 h-6 text-brand-gold shrink-0 mt-1" />
              <p className="text-sm text-gray-300">Social Queens Club Elite, entstanden aus echter Praxis- gemeinsam mit einer großen Community und nach deinen Bedürfnissen.<br/>Kein Theorie-Kurs, sondern ein erprobtes Business-System.</p>
            </div>
            
            <div className="flex gap-4">
              <MessageSquare className="w-6 h-6 text-brand-gold shrink-0 mt-1" />
              <p className="text-sm text-gray-300">Ohne Follower. Ohne Kamera. Ohne Vorerfahrung<br/>Ein klarer Fahrplan für alle, die neu starten möchten oder schon im Business sind!</p>
            </div>

            <div className="mt-12 text-sm text-gray-300 leading-relaxed border-t border-gray-800 pt-8">
              <p className="mb-4">Wir wissen, wie es ist, wenn man zweifelt, nicht weiß, wo man anfangen soll und genau deshalb haben wir dieses System geschaffen.</p>
              <p>Wenn du bereit bist, dein Leben zu verändern, dir endlich mehr Freiheit, Zeit und finanzielle Sicherheit aufzubauen, dann ist die Social Queens Club-Elite, nicht einfach nur ein Programm. Das ist dein Neuanfang. Die Revolution der Digitalisierung!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-brand-darker">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            <span className="text-brand-gold">ELITE- INHALTE,</span> DIE WIRKEN
          </h2>
          
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
            {[
              { icon: <Brain className="w-10 h-10" />, title: "STARKE KI TOOLS DIE DIR 90% DER ARBEIT ABNEHMEN + AUTOMATISIERUNGEN FÜR SOCIAL MEDIA" },
              { icon: <Users className="w-10 h-10" />, title: "1 X DIE WOCHE ZOOM CALL ( LEGENDÄR ABER FREIWILLIG ) + WÖCHENTLICHER PUSH + GEMEINSAMES LIVE GEHEN" },
              { icon: <UserCheck className="w-10 h-10" />, title: "KI ZWILLING ERSTELLEN FÜR ANONYME POSTINGS" },
              { icon: <Heart className="w-10 h-10" />, title: "DIE STÄRKSTE COMMUNITY AN DEINER SEITE !" },
              { icon: <Megaphone className="w-10 h-10" />, title: "EINE STARKE MEMO ZUM WEITERSCHICKEN. NIX MEHR SELBER ERKLÄREN" },
              { icon: <Bot className="w-10 h-10" />, title: "EINEN PERSÖNLICHEN CHAT BOT, DER DEINEN ALGORITHMUS SPRENGT" },
              { icon: <Video className="w-10 h-10" />, title: "VORGEFERTIGTER CONTENT, VORLAGEN, VIDEOS. DU MUSST DICH NICHT FILMEN" },
              { icon: <Lightbulb className="w-10 h-10" />, title: "IMMER UP TO DATE MIT NEUEN INHALTEN FÜR DICH (WIR MACHEN´S LANGLEBIG)" },
              { icon: <Sun className="w-10 h-10" />, title: "MINDSET BOOST FÜR DEINE SEELE, SELBSTLIEBE UND STÄRKE" },
              { icon: <MessageCircle className="w-10 h-10" />, title: "BESTER STEUERBERATER NIMMT DIR ALLE FRAGEZEICHEN!" },
              { icon: <BookOpen className="w-10 h-10" />, title: "DIGITALE PRODUKTE MIT KI ERSTELLEN LASSEN, ZU JEGLICHER NISCHE & EASY" },
              { icon: <PiggyBank className="w-10 h-10" />, title: "KOSTENLOSER FINANZBERATER (MONEY MASTERY) IN DER TELEGRAM GRUPPE" }
            ].map((feature, i) => (
              <div key={i} className="flex gap-6 items-start">
                <div className="text-brand-gold shrink-0">{feature.icon}</div>
                <h3 className="font-bold text-sm md:text-base leading-snug uppercase">{feature.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 z-0 opacity-40 mix-blend-overlay" style={{ backgroundImage: 'url("https://picsum.photos/seed/luxury/1920/1080")', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
        <div className="relative z-10 max-w-5xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-serif text-center font-bold text-brand-gold drop-shadow-lg mb-16 tracking-widest">FAQ</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-black/60 backdrop-blur-sm border border-gray-700/50 rounded-lg overflow-hidden transition-all duration-300">
                <button 
                  onClick={() => toggleFaq(i)}
                  className="w-full text-left p-6 flex justify-between items-center focus:outline-none"
                >
                  <h3 className="font-bold pr-4">{faq.question}</h3>
                  <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-300 shrink-0 ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                <div 
                  className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openFaq === i ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <p className="text-sm text-gray-300 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#EAEAEA] text-black py-8 px-4 text-center border-t border-gray-300">
        <div className="flex justify-center items-center gap-6 mb-4">
          <div className="flex items-center gap-2 text-green-600 font-bold">
            <Star className="w-5 h-5 fill-current" /> Trustpilot
          </div>
          <a href="#" className="text-sm hover:underline font-medium">IMPRESSUM</a>
        </div>
      </footer>
    </div>
  );
}
