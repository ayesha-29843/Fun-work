 let noCount = 0;

    const noAlerts = [
      {
        title: "Wait 😳",
        text: "Are you *sure*? My heart is very fragile 💔",
        icon: "warning"
      },
      {
        title: "Hhmmmmmm 🤔",
        text: "Think again… we’d look cute together 😭",
        icon: "info"
      },
      {
        title: "Ouch 💘",
        text: "That hurt a little… but I won’t give up😏️!",
        icon: "error"
      },
      {
        title: "Last chance 😭",
        text: "Say yes or I’ll be sad the whole day 🥺",
        icon: "warning"
      },
      {
        title: "Hhhhaaaawwwwww💘",
        text: "if you again click on NO button i'll katti.....😠!",
        icon: "error"
      },
       { title: "Reminder 💀",
         text: "Saying YES is good for your health 😄", 
        icon: "info" },
      {
        title: "Okay listen 😌",
        text: "At this point, the 'No' button is just decoration 🙂.",
        icon: "info"
      }
    ];

      function yesClicked() {
      Swal.fire({
        title: "YYYYAAAAAAYYYY 💖",
        text: "You just made me the happiest person ever 😍",
        icon: "love💖",
        confirmButtonText: "THANKS FOR CHOOSING ME🥰"
      });
    }

    function noClicked() {
      const alert = noAlerts[noCount % noAlerts.length];
      noCount++;

      Swal.fire({
        title: alert.title,
        text: alert.text,
        icon: alert.icon,
        confirmButtonText: "Okay 😅"
      });
    }