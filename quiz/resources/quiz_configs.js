/**
 * @overview configurations of ccm component for rendering a quiz
 * @author André Kless <andre.kless@web.de> 2017
 * @license The MIT License (MIT)
 */

ccm.files[ "quiz_configs.min.js" ] = {
  "demo": {
    "feedback": true,
    "navigation": true,
    "user": [ "ccm.instance", "https://akless.github.io/ccm-components/user/versions/ccm.user-1.0.0.min.js" ],
    "logger": [ "ccm.instance", "https://akless.github.io/ccm-components/log/ccm.log-1.0.0.min.js", [ "ccm.get", "https://akless.github.io/ccm-components/log/resources/log_configs.min.js", "greedy" ] ],
    "onfinish": {
      "log": true,
      "render": {
        "component": "quiz",
        "config": [ "ccm.get", "https://akless.github.io/ccm-components/quiz/resources/quiz_configs.min.js", "demo2" ]
      }
    },
    "placeholder": {
      "start": "Start",
      "question": "Frage",
      "prev": "Zurück",
      "submit": "Abschicken",
      "next": "Weiter",
      "finish": "Fertig"
    },
    "questions": [
      {
        "text": "Wie viele dieser Antworten sind korrekt?",
        "description": "Dies ist ein Beispiel für eine Single-Choice-Frage. Für jedes Quiz ist einstellbar, ob zu jeder Frage nach deren Beantwortung ein unmittelbares Feedback erfolgt. Für diesen Demo-Quiz ist dies eingeschaltet. Zu einer Antwort kann beim Erstellen eines Quiz ein Kommentar oder eine Begründung angegeben werden, warum diese Antwort richtig oder falsch ist. Bei dieser Frage wurde für eine Antwort eine solche Begründung hinterlegt, die dann beim unmittelbaren Feedback mit erscheint.",
        "answers": [
          {
            "text": "eins",
            "comment": "Weil man nicht mehr als eine Antwort wählen kann."
          },
          "zwei",
          "drei"
        ],
        "input": "radio",
        "correct": 0
      },
      {
        "text": "Wie viele Antworten können hier korrekt sein?",
        "description": "Dies ist ein Beispiel für eine Multiple-Choice-Frage. Für jede gewählte Antwort wird beim unmittelbaren Feedback angezeigt, ob dies richtig oder falsch war. Jede Antwort die nicht gewählt wurde, aber richtig gewesen wäre, wird als solche markiert.",
        "answers": [
          "gar keine",
          {
            "text": "maximal eine",
            "comment": "Weil man mehr als eine Antwort wählen kann."
          },
          "mehr als eine"
        ],
        "correct": [ true, false, true ]
      },
      {
        "text": "Was ist 1 + 1?",
        "description": "Diese Frage zeigt, das auch keine Antwort korrekt sein kann.",
        "answers": [ "Apfel", "Birne", "Banane" ],
        "correct": []
      },
      {
        "text": "Könnte diesmal auch nur eine Antwort richtig sein?",
        "answers": [ "ja", "nein", "vielleicht" ],
        "correct": 0
      },
      {
        "text": "Welche Aussagen sind korrekt?",
        "description": "Diese Frage zeigt, das auch alle Antworten korrekt sein können.",
        "answers": [
          "Alles ist relativ.",
          "Es ist nicht alles schwarz oder weiß.",
          "In der Natur gibt es kein richtig oder falsch."
        ],
        "correct": [ true, true, true ]
      },
      {
        "text": "Wie lautet die Lösung der folgenden Rechenaufgaben?",
        "description": "Bitte die Lösungen in die Eingabefelder eintragen.",
        "answers": [
          "=&nbsp; 1 + 1",
          "=&nbsp; 1 - 1",
          "=&nbsp;-1 - 1"
        ],
        "input": "number",
        "attributes": {
          "min": -2,
          "max": 2
        },
        "correct": [ 2, 0, -2 ]
      },
      {
        "text": "Wie lauten die korrekten Primzahlen?",
        "description": "Antworten und Eingabefelder können auch vertauscht dargestellt werden, falls dies intuitiver ist. Für die Eingabefelder ist der angebbare Zahlenbereich einstellbar.",
        "swap": true,
        "answers": [
          "1. Primzahl:",
          "2. Primzahl:",
          "3. Primzahl:"
        ],
        "input": "number",
        "attributes": {
          "min": 0,
          "max": 9
        },
        "correct": [ 2, 3, 5 ]
      },
      {
        "text": "Was ist die Wurzel aus -1?",
        "description": "Zu einer Frage können natürlich auch mehr als 3 Antworten hinterlegt werden. Die Anzahl der möglichen Antworten ist unbegrenzt. Bei dieser Frage belassen wir es dennoch bei 5 Antworten.",
        "answers": [
          "1",
          "0",
          "-1",
          {
            "text": "i",
            "comment": "Im Zahlenraum der komplexen Zahlen."
          },
          {
            "text": "nicht definiert",
            "comment": "Im Zahlenraum der reellen Zahlen."
          }
        ],
        "correct": [ 3, 4 ]
      },
      {
        "text": "Was passiert, wenn der Quiz abgeschlossen ist?",
        "description": "Für einen Quiz kann festgelegt werden, was nach dessen Abschluss passieren soll. Hierfür werden vom Quiz auch die Ergebnisdaten zur Verfügung gestellt. Neben dem 'finish'-Ereignis kann auch auf viele weitere Ereignisse reagiert werden. Sofern der rechtliche Rahmen gegeben ist, können auch sämtliche Ereignisse bei der Verwendung des Quiz getrackt werden. Für dieses Quiz wurden beispielhaft soviele Daten wie möglich erfasst und lediglich in der Browserkonsole ausgegeben. Schauen Sie bei Interesse dort nach, was für Daten gesammelt wurden. Welche Daten erfasst werden und ob dies anonymisiert oder pseudonymisiert geschieht ist einstellbar, abhängig von der dafür verwendeten optionalen Web-Komponente. Über eine optionale Web-Komponente für Benutzerauthentifikation kann die Nutzung eines Quiz und dessen Auswertung auch personenbezogen erfolgen.",
        "answers": [
          "Der selbe Quiz wird neu gestartet.",
          "Der Quiz verschwindet einfach.",
          "Ein anderer Quiz wird gestartet."
        ],
        "input": "radio",
        "correct": 2
      }
    ]
  },
  "demo2": {
    "html_templates.start.inner": [
      "Damit ein Quiz auf Wunsch auch ordnungsgemäß gestartet und beendet werden kann, ist auch ein \"Start\"-Button einstellbar. Der folgende Quiz hat ein leicht verändertes Layout. Struktur und Layout eines Quiz ist individuell anpassbar.",
      { "tag": "br" },
      { "tag": "br" },
      {
        "tag": "button",
        "inner": "%caption%",
        "onclick": "%click%"
      }
    ],
    "css_layout": [ "ccm.load", "./../../ccm-components/quiz/layouts/akless.css" ],
    "navigation": true,
    "time": 100,
    "shuffle": true,
    "random": true,
    "start_button": true,
    "anytime_finish": true,
    "placeholder": {
      "start": "Quiz starten",
      "question": "Aussage",
      "prev": "Vorherige",
      "next": "Nächste",
      "finish": "Beenden"
    },
    "questions": [
      {
        "text": "Dieser Quiz...",
        "description": "Für diesen Quiz ist das unmittelbare Feedback deaktiviert. Über den \"Vorherige\"- und den \"Nächste\"-Button kann zwischen den Fragen vor und zurück navigiert werden. Für den \"Beenden\"-Button ist einstellbar, ob er von Anfang an oder erst nach der Beantwortung aller Fragen aktiviert ist. Die Beschriftung der Buttons ist individuell einstellbar. Für jede Frage kann eine eigene Beschreibung angegeben werden. Dieser Text hier ist eine solche Beschreibung. Nach dem Abschließen des Quiz können die Ergebnisse durch Verwendung der Buttons betrachtet werden. Die erfolgten Angaben können nach Abschluss des Quiz nicht mehr verändert werden, da die Eingabefelder dann deaktiviert sind.",
        "answers": [
          "kann jederzeit beendet werden.",
          "fängt endlos immer wieder von vorne an.",
          "ist erst nach Beantwortung aller Fragen zu Ende."
        ],
        "input": "radio",
        "correct": 0
      },
      {
        "text": "Für diesen Quiz...",
        "description": "Für die Bearbeitung eines Quiz kann eine Zeitbegrenzung angegeben werden. Nach Ablauf der Zeit wird automatisch der \"Fertig\"-Button betätigt.",
        "answers": [
          "ist nur begrenzt Zeit.",
          "gibt es keine Zeitbeschränkung."
        ],
        "input": "radio",
        "correct": 0
      },
      {
        "text": "Die Reihenfolge der Fragen und Antworten sind in diesem Quiz...",
        "description": "Für einen Quiz ist einstellbar, ob die Fragen immer in der gleichen oder in zufälliger Reihenfolge gestellt werden. Auch für jede Frage kann individuell angegeben werden, ob die Antworten in gleicher oder zufälliger Reihenfolge erscheinen. Das Mischen von Fragen und Antworten wirkt sich nicht auf die Reihenfolge in den Ergebnisdaten aus.",
        "answers": [
          "zufällig.",
          "immer gleich."
        ],
        "input": "radio",
        "correct": 0
      },
      {
        "text": "Eine HTML-Codierung erfolgte für...",
        "description": "Die Fragen und/oder Antworten eines Quiz können auf Wunsch auch HTML-codiert werden, so dass HTML-Tags nicht ausgewertet werden.",
        "answers": [
          "<b>diese</b> Antwort.",
          {
            "text": "<b>diese</b> Antwort.",
            "encode": true
          }
        ],
        "input": "radio",
        "correct": 1
      }
    ]
  }
};